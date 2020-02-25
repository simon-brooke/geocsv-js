// Compiled by ClojureScript 1.10.520 {}
goog.provide('geocsv_lite.core');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
goog.require('clojure.string');
goog.require('geocsv_lite.data');
goog.require('geocsv_lite.map');
goog.require('geocsv_lite.notify');
/**
 * Create a map view in the element with this `id` and decorate it with
 *   pins showing locations from this `data-source`. If `data-source` is nil
 *   or an empty string, the content of the element will be used, if present.
 */
geocsv_lite.core.initialise_map_element = (function geocsv_lite$core$initialise_map_element(id,data_source){
geocsv_lite.notify.message.call(null,["geocsv-lite.core.initialise-map-element called with args id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"; data-source: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_source),"."].join(''));

var sid = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
var kid = cljs.core.keyword.call(null,sid);
var v = geocsv_lite.map.add_view.call(null,sid,(55),(-4),(10));
return v.whenReady(((function (sid,kid,v){
return (function (){
return geocsv_lite.data.get_data.call(null,kid,data_source);
});})(sid,kid,v))
);
});
goog.exportSymbol('geocsv_lite.core.initialise_map_element', geocsv_lite.core.initialise_map_element);
geocsv_lite.core.initialise_map_element_from_content = (function geocsv_lite$core$initialise_map_element_from_content(id){
var sid = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
var kid = cljs.core.keyword.call(null,sid);
var v = geocsv_lite.map.add_view.call(null,sid,(55),(-4),(10));
return v.whenReady(((function (sid,kid,v){
return (function (){
return geocsv_lite.data.get_data.call(null,kid,document.getElementById(id).innerText());
});})(sid,kid,v))
);
});
goog.exportSymbol('geocsv_lite.core.initialise_map_element_from_content', geocsv_lite.core.initialise_map_element_from_content);
geocsv_lite.core.on_js_reload = (function geocsv_lite$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1582560148597
