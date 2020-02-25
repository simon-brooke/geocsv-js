(ns ^{:doc "geocsv app map stuff."
      :author "Simon Brooke"}
  geocsv-lite.gis
  (:require [cljs.reader :refer [read-string]]
            [clojure.string :as cs]
            [geocsv-lite.notify :as n]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;
;;;; geocsv.gis: stuff to do with maps.
;;;;
;;;; This program is free software; you can redistribute it and/or
;;;; modify it under the terms of the GNU General Public License
;;;; as published by the Free Software Foundation; either version 2
;;;; of the License, or (at your option) any later version.
;;;;
;;;; This program is distributed in the hope that it will be useful,
;;;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;;;; GNU General Public License for more details.
;;;;
;;;; You should have received a copy of the GNU General Public License
;;;; along with this program; if not, write to the Free Software
;;;; Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301,
;;;; USA.
;;;;
;;;; Copyright (C) 2016 Simon Brooke for Radical Independence Campaign
;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; map stuff.

(defn get-current-location [view]
  "Return the current location from the device, setting it in the database and
  returning the locality. `view` is expected to be a Leaflet view."
  (try
    (if (.-geolocation js/navigator)
      (.getCurrentPosition
        (.-geolocation js/navigator)
        (fn [position]
          (let [lat (.-latitude (.-coords position))
                lng (.-longitude (.-coords position))]
            (n/message (str "Current location is: " lat ", " lng))
            (if
              (and view (float? lat) (float? lng))
              (do
                (.panTo view (.latLng js/L lat lng)))
              (do
                (n/message
                  (if view
                    (str "Geolocation failed lat: '" lat "'; lng '" lng "'")
                    "No value for subscription to [:view]"))
                0)))))
      (do
        (n/message "Geolocation not available")
        0))
    (catch js/Object any
      (n/error (str "Exception while trying to access location: " any))
      0)))


(defn map-pin-click-handler
  [id]
  (n/message (str "Click handler for record #" id)))


(defn pin-image
  "Return the name of a suitable pin image for this `record`."
  [record]
  (let [n (cs/capitalize
      (cs/replace
        (cs/lower-case
          (str (:category record)))
        #"[^a-z0-9]" "-"))]
  (str
    (if
      (empty? n) "Unknown"
      n)
    "-pin")))


(defn popup-content
  "Appropriate content for the popup of a map pin for this `record`."
  [record]
  (if
    (map? record) ;; which it should be!
    (str
      "<h5>"
      (:name record)
      "</h5><dl>"
      (apply
        str
        (map
          #(str "<dt>" (name %) "</dt><dd>" (record %) "</dd>")
          (filter #(record %) (keys record))))
      "</dl>")))

(defn popup-table-content
  "Appropriate content for the popup of a map pin for this `record`, as a
  table. Obviously this is semantically wrong, but for styling reasons it's
  worth trying."
  [record]
  (if
    (map? record) ;; which it should be!
    (str
      "<h5>"
      (:name record)
      "</h5><table>"
      (apply
        str
        (map
          #(str "<tr><th>" (name %) "</th><td>" (record %) "</td></tr>")
          (sort (filter #(record %) (keys record)))))
      "</table>")))

(defn add-map-pin
  "Add an appropriate map-pin for this `record` in this map `view`, if it
  has a valid `:latitude` and `:longitude`."
  [record index view]
  (let [lat (js/Number (:latitude record))
        lng (js/Number (:longitude record))]
    (if
      (and
        (number? lat)
        (number? lng)
        (not (zero? lat))
        (not (zero? lng)))
      (let [pin (.icon js/L
                       (clj->js
                         {:iconAnchor [16 41]
                          :iconSize [32 42]
                          :iconUrl (str "img/map-pins/" (pin-image record) ".png")
                          :riseOnHover true
                          :shadowAnchor [16 23]
                          :shadowSize [57 24]
                          :shadowUrl "img/map-pins/shadow_pin.png"}))
            marker (.marker js/L
                            (.latLng js/L lat lng)
                            (clj->js {:icon pin
                                      :title (:name record)}))]
        (.bindPopup marker (popup-table-content record))
        (.addTo marker view)
        (n/message (str "Added `"(:name record)"` in at " lat ", " lng))
        marker))))

(defn map-remove-pins
  "Remove all pins from this map `view`. Side-effecty; liable to be
    problematic."
  [view]
  (if view
    (.eachLayer view
                #(if
                   (instance? js/L.Marker %)
                   (.removeLayer view %)))
    view))

(defn compute-zoom
  "See [explanation here](https://leafletjs.com/examples/zoom-levels/). Brief
  summary: it's hard, but it doesn't need to be precise."
  [min-lat max-lat min-lng max-lng]
  (let [n (min (/ 360 (- max-lng min-lng)) (/ 180 (- max-lat min-lat)))]
    (first
      (remove
        nil?
        (map
          #(if (> (reduce * (repeat 2 %)) n) %)
          (range))))))

(defn compute-centre
  "Compute, and return as a map with keys `:latitude` and `:longitude`, the
  centre of the locations of these records as indicated by the values of their
  `:latitude` and `:longitude` keys."
  [records]
  (let [lats (remove zero?
                     (filter number? (map js/Number (map :latitude records))))
        min-lat (apply min lats)
        max-lat (apply max lats)
        lngs (remove zero?
                     (filter number? (map js/Number (map :longitude records))))
        min-lng (apply min lngs)
        max-lng (apply max lngs)]
    (if-not
      (or (empty? lats) (empty? lngs))
      {:latitude (+ min-lat (/ (- max-lat min-lat) 2))
       :longitude (+ min-lng (/ (- max-lng min-lng) 2))
       :zoom (compute-zoom min-lat max-lat min-lng max-lng)}
      {})))

(defn refresh-map-pins
  "Refresh the map pins on the current map. Side-effecty; liable to be
  problematic."
  [view records]
  (let [view (map-remove-pins view)
        centre (compute-centre records)]
    (if
      view
      (do
        (n/message
          (str
            "Mapped "
            (count
              (remove nil? (map #(add-map-pin %1 %2 view) records (range))))
            " records, centre at " centre))
        (if
          (:latitude centre)
          (.setView view (clj->js [(:latitude centre) (:longitude centre)]) (:zoom centre))))
      (do (n/error "View is not yet ready")))))
