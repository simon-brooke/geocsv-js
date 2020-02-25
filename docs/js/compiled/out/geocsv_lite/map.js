// Compiled by ClojureScript 1.10.520 {}
goog.provide('geocsv_lite.map');
goog.require('cljs.core');
goog.require('geocsv_lite.notify');
geocsv_lite.map._STAR_map_provider_STAR_ = new cljs.core.Keyword(null,"osm","osm",855693280);
geocsv_lite.map.osm_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
geocsv_lite.map.osm_attrib = "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors";
/**
 * Did-mount function loading map tile data from MapBox (proprietary).
 *   Arguments are:
 *   * `id` the element id of the HTML element to occupy (string);
 *   * `lat` the latitude of the centre of the view (real number);
 *   * `lng` the longitude of the centre of the view (real number);
 *   * `zoom` the initial zoom level of the view (real number).
 */
geocsv_lite.map.map_did_mount_mapbox = (function geocsv_lite$map$map_did_mount_mapbox(id,lat,lng,zoom){
var view = L.map(id,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),"false"], null))).setView([lat,lng],zoom);
L.tileLayer("http://{s}.tiles.mapbox.com/v3/FIXME/{z}/{x}/{y}.png",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Map data &copy; [...]",new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(18)], null))).addTo();

return view;
});
/**
 * Did-mount function loading map tile data from Open Street Map.
 *   Arguments are:
 *   * `id` the element id of the HTML element to occupy (string);
 *   * `lat` the latitude of the centre of the view (real number);
 *   * `lng` the longitude of the centre of the view (real number);
 *   * `zoom` the initial zoom level of the view (real number).
 */
geocsv_lite.map.map_did_mount_osm = (function geocsv_lite$map$map_did_mount_osm(id,lat,lng,zoom){
var view = L.map(id,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false], null))).setView([lat,lng],zoom);
L.tileLayer(geocsv_lite.map.osm_url,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),geocsv_lite.map.osm_attrib,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(18)], null))).addTo(view);

return view;
});
/**
 * Select the actual map provider to use. Arguments are:
 *   * `id` the element id of the HTML element to occupy (string);
 *   * `lat` the latitude of the centre of the view (real number);
 *   * `lng` the longitude of the centre of the view (real number);
 *   * `zoom` the initial zoom level of the view (real number).
 */
geocsv_lite.map.map_did_mount = (function geocsv_lite$map$map_did_mount(id,lat,lng,zoom){
var G__24992 = geocsv_lite.map._STAR_map_provider_STAR_;
var G__24992__$1 = (((G__24992 instanceof cljs.core.Keyword))?G__24992.fqn:null);
switch (G__24992__$1) {
case "mapbox":
return geocsv_lite.map.map_did_mount_mapbox.call(null,id,lat,lng,zoom);

break;
case "osm":
return geocsv_lite.map.map_did_mount_osm.call(null,id,lat,lng,zoom);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24992__$1)].join('')));

}
});
geocsv_lite.map.views = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
geocsv_lite.map.add_view = (function geocsv_lite$map$add_view(id,lat,lng,zoom){
var k = cljs.core.keyword.call(null,id);
var v = (function (){var or__4131__auto__ = cljs.core.deref.call(null,geocsv_lite.map.views).call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return geocsv_lite.map.map_did_mount.call(null,id,lat,lng,zoom);
}
})();
geocsv_lite.notify.message.call(null,["Added Leaflet view to element with id `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"`"].join(''));

cljs.core.swap_BANG_.call(null,geocsv_lite.map.views,cljs.core.assoc,k,v);

return v;
});
geocsv_lite.map.get_view = (function geocsv_lite$map$get_view(k){
if((k instanceof cljs.core.Keyword)){
} else {
geocsv_lite.notify.message.call(null,["Key `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"` passed to get-view is not a keyword"].join(''));
}

if(cljs.core.truth_(k.call(null,cljs.core.deref.call(null,geocsv_lite.map.views)))){
} else {
geocsv_lite.notify.message.call(null,["Key `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"` does not identify a known view"].join(''));
}

return k.call(null,cljs.core.deref.call(null,geocsv_lite.map.views));
});

//# sourceMappingURL=map.js.map?rel=1582560148438
