(ns geocsv-lite.notify
    (:require [clojure.browser.dom :as dom]))

(defn message
  [msg]
  (js/console.log msg)
  (dom/set-text  (.getElementById js/document "message") msg))


(defn error
  [err]
  (js/console.error err)
  (dom/set-text  (.getElementById js/document "error") err))
