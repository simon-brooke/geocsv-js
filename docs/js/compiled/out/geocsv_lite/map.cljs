(ns geocsv-lite.map
    (:require [geocsv-lite.notify :as n]))

;;; Cribbed heavily from
;;;   https://github.com/reagent-project/reagent-cookbook/tree/master/recipes/leaflet
;;; but using OSM data because we can't afford commercial, so also cribbed from
;;;   https://switch2osm.org/using-tiles/getting-started-with-leaflet/
;;; Note that this is raw reagent stylee; it should be refactoed into re-frame stylee
;;; when I understand it better.

;; which provider to use
(def ^:dynamic *map-provider* :osm)

(def osm-url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
(def osm-attrib "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors")

;; My gods mapbox is user-hostile!
(defn map-did-mount-mapbox
  "Did-mount function loading map tile data from MapBox (proprietary).
  Arguments are:
  * `id` the element id of the HTML element to occupy (string);
  * `lat` the latitude of the centre of the view (real number);
  * `lng` the longitude of the centre of the view (real number);
  * `zoom` the initial zoom level of the view (real number)."
  [id lat lng zoom]
  (let [view (.setView
               (.map js/L id (clj->js {:zoomControl "false"}))
               #js [lat lng]
               zoom)]
    ;; NEED TO REPLACE FIXME with your mapID!
    (.addTo (.tileLayer js/L "http://{s}.tiles.mapbox.com/v3/FIXME/{z}/{x}/{y}.png"
                        (clj->js {:attribution "Map data &copy; [...]"
                                  :maxZoom 18})))
    view))

(defn map-did-mount-osm
  "Did-mount function loading map tile data from Open Street Map.
  Arguments are:
  * `id` the element id of the HTML element to occupy (string);
  * `lat` the latitude of the centre of the view (real number);
  * `lng` the longitude of the centre of the view (real number);
  * `zoom` the initial zoom level of the view (real number)."
  [id lat lng zoom]
  (let [view (.setView
               (.map js/L
                     id
                     (clj->js {:zoomControl false}))
               #js [lat lng]
               zoom)]
    (.addTo (.tileLayer js/L osm-url
                        (clj->js {:attribution osm-attrib
                                  :maxZoom 18}))
            view)
    view))

(defn map-did-mount
  "Select the actual map provider to use. Arguments are:
  * `id` the element id of the HTML element to occupy (string);
  * `lat` the latitude of the centre of the view (real number);
  * `lng` the longitude of the centre of the view (real number);
  * `zoom` the initial zoom level of the view (real number)."
  [id lat lng zoom]
  (case *map-provider*
    :mapbox (map-did-mount-mapbox id lat lng zoom)
    :osm (map-did-mount-osm id lat lng zoom)
    ;; potentially others
    ))


(def views (atom {}))


(defn add-view
  [id lat lng zoom]
  (let [k (keyword id)
        v (or
            (@views k)
            (map-did-mount id lat lng zoom))]
    (n/message (str "Added Leaflet view to element with id `" id "`"))
    (swap! views assoc k v)
    v))


(defn get-view
  [k]
  (when-not (keyword? k) (n/message (str "Key `" k "` passed to get-view is not a keyword")))
  (when-not (k @views) (n/message (str "Key `" k "` does not identify a known view")))
  (k @views))



