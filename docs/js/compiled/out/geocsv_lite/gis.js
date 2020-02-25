// Compiled by ClojureScript 1.10.520 {}
goog.provide('geocsv_lite.gis');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('geocsv_lite.notify');
geocsv_lite.gis.get_current_location = (function geocsv_lite$gis$get_current_location(view){

try{if(cljs.core.truth_(navigator.geolocation)){
return navigator.geolocation.getCurrentPosition((function (position){
var lat = position.coords.latitude;
var lng = position.coords.longitude;
geocsv_lite.notify.message.call(null,["Current location is: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)].join(''));

if(cljs.core.truth_((function (){var and__4120__auto__ = view;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.float_QMARK_.call(null,lat)) && (cljs.core.float_QMARK_.call(null,lng)));
} else {
return and__4120__auto__;
}
})())){
return view.panTo(L.latLng(lat,lng));
} else {
geocsv_lite.notify.message.call(null,(cljs.core.truth_(view)?["Geolocation failed lat: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),"'; lng '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),"'"].join(''):"No value for subscription to [:view]"));

return (0);
}
}));
} else {
geocsv_lite.notify.message.call(null,"Geolocation not available");

return (0);
}
}catch (e25189){if((e25189 instanceof Object)){
var any = e25189;
geocsv_lite.notify.error.call(null,["Exception while trying to access location: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(any)].join(''));

return (0);
} else {
throw e25189;

}
}});
geocsv_lite.gis.map_pin_click_handler = (function geocsv_lite$gis$map_pin_click_handler(id){
return geocsv_lite.notify.message.call(null,["Click handler for record #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
/**
 * Return the name of a suitable pin image for this `record`.
 */
geocsv_lite.gis.pin_image = (function geocsv_lite$gis$pin_image(record){
var n = clojure.string.capitalize.call(null,clojure.string.replace.call(null,clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(record))),/[^a-z0-9]/,"-"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,n))?"Unknown":n)),"-pin"].join('');
});
/**
 * Appropriate content for the popup of a map pin for this `record`.
 */
geocsv_lite.gis.popup_content = (function geocsv_lite$gis$popup_content(record){
if(cljs.core.map_QMARK_.call(null,record)){
return ["<h5>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record)),"</h5><dl>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__25190_SHARP_){
return ["<dt>",cljs.core.name.call(null,p1__25190_SHARP_),"</dt><dd>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record.call(null,p1__25190_SHARP_)),"</dd>"].join('');
}),cljs.core.filter.call(null,(function (p1__25191_SHARP_){
return record.call(null,p1__25191_SHARP_);
}),cljs.core.keys.call(null,record))))),"</dl>"].join('');
} else {
return null;
}
});
/**
 * Appropriate content for the popup of a map pin for this `record`, as a
 *   table. Obviously this is semantically wrong, but for styling reasons it's
 *   worth trying.
 */
geocsv_lite.gis.popup_table_content = (function geocsv_lite$gis$popup_table_content(record){
if(cljs.core.map_QMARK_.call(null,record)){
return ["<h5>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record)),"</h5><table>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__25192_SHARP_){
return ["<tr><th>",cljs.core.name.call(null,p1__25192_SHARP_),"</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record.call(null,p1__25192_SHARP_)),"</td></tr>"].join('');
}),cljs.core.sort.call(null,cljs.core.filter.call(null,(function (p1__25193_SHARP_){
return record.call(null,p1__25193_SHARP_);
}),cljs.core.keys.call(null,record)))))),"</table>"].join('');
} else {
return null;
}
});
/**
 * Add an appropriate map-pin for this `record` in this map `view`, if it
 *   has a valid `:latitude` and `:longitude`.
 */
geocsv_lite.gis.add_map_pin = (function geocsv_lite$gis$add_map_pin(record,index,view){
var lat = Number(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(record));
var lng = Number(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(record));
if(((typeof lat === 'number') && (typeof lng === 'number') && ((!((lat === (0))))) && ((!((lng === (0))))))){
var pin = L.icon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(41)], null),new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(42)], null),new cljs.core.Keyword(null,"iconUrl","iconUrl",-1868537869),["img/map-pins/",geocsv_lite.gis.pin_image.call(null,record),".png"].join(''),new cljs.core.Keyword(null,"riseOnHover","riseOnHover",1575955733),true,new cljs.core.Keyword(null,"shadowAnchor","shadowAnchor",643451688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(23)], null),new cljs.core.Keyword(null,"shadowSize","shadowSize",-1015046863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(57),(24)], null),new cljs.core.Keyword(null,"shadowUrl","shadowUrl",1986496437),"img/map-pins/shadow_pin.png"], null)));
var marker = L.marker(L.latLng(lat,lng),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),pin,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record)], null)));
marker.bindPopup(geocsv_lite.gis.popup_table_content.call(null,record));

marker.addTo(view);

geocsv_lite.notify.message.call(null,["Added `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record)),"` in at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)].join(''));

return marker;
} else {
return null;
}
});
/**
 * Remove all pins from this map `view`. Side-effecty; liable to be
 *  problematic.
 */
geocsv_lite.gis.map_remove_pins = (function geocsv_lite$gis$map_remove_pins(view){
if(cljs.core.truth_(view)){
return view.eachLayer((function (p1__25194_SHARP_){
if((p1__25194_SHARP_ instanceof L.Marker)){
return view.removeLayer(p1__25194_SHARP_);
} else {
return null;
}
}));
} else {
return view;
}
});
/**
 * See [explanation here](https://leafletjs.com/examples/zoom-levels/). Brief
 *   summary: it's hard, but it doesn't need to be precise.
 */
geocsv_lite.gis.compute_zoom = (function geocsv_lite$gis$compute_zoom(min_lat,max_lat,min_lng,max_lng){
var n = (function (){var x__4222__auto__ = ((360) / (max_lng - min_lng));
var y__4223__auto__ = ((180) / (max_lat - min_lat));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (n){
return (function (p1__25195_SHARP_){
if((cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,(2),p1__25195_SHARP_)) > n)){
return p1__25195_SHARP_;
} else {
return null;
}
});})(n))
,cljs.core.range.call(null))));
});
/**
 * Compute, and return as a map with keys `:latitude` and `:longitude`, the
 *   centre of the locations of these records as indicated by the values of their
 *   `:latitude` and `:longitude` keys.
 */
geocsv_lite.gis.compute_centre = (function geocsv_lite$gis$compute_centre(records){
var lats = cljs.core.remove.call(null,cljs.core.zero_QMARK_,cljs.core.filter.call(null,cljs.core.number_QMARK_,cljs.core.map.call(null,Number,cljs.core.map.call(null,new cljs.core.Keyword(null,"latitude","latitude",394867543),records))));
var min_lat = cljs.core.apply.call(null,cljs.core.min,lats);
var max_lat = cljs.core.apply.call(null,cljs.core.max,lats);
var lngs = cljs.core.remove.call(null,cljs.core.zero_QMARK_,cljs.core.filter.call(null,cljs.core.number_QMARK_,cljs.core.map.call(null,Number,cljs.core.map.call(null,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),records))));
var min_lng = cljs.core.apply.call(null,cljs.core.min,lngs);
var max_lng = cljs.core.apply.call(null,cljs.core.max,lngs);
if((!(((cljs.core.empty_QMARK_.call(null,lats)) || (cljs.core.empty_QMARK_.call(null,lngs)))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"latitude","latitude",394867543),(min_lat + ((max_lat - min_lat) / (2))),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),(min_lng + ((max_lng - min_lng) / (2))),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),geocsv_lite.gis.compute_zoom.call(null,min_lat,max_lat,min_lng,max_lng)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Refresh the map pins on the current map. Side-effecty; liable to be
 *   problematic.
 */
geocsv_lite.gis.refresh_map_pins = (function geocsv_lite$gis$refresh_map_pins(view,records){
var view__$1 = geocsv_lite.gis.map_remove_pins.call(null,view);
var centre = geocsv_lite.gis.compute_centre.call(null,records);
if(cljs.core.truth_(view__$1)){
geocsv_lite.notify.message.call(null,["Mapped ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (view__$1,centre){
return (function (p1__25196_SHARP_,p2__25197_SHARP_){
return geocsv_lite.gis.add_map_pin.call(null,p1__25196_SHARP_,p2__25197_SHARP_,view__$1);
});})(view__$1,centre))
,records,cljs.core.range.call(null)))))," records, centre at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(centre)].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(centre))){
return view__$1.setView(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(centre),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(centre)], null)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(centre));
} else {
return null;
}
} else {
return geocsv_lite.notify.error.call(null,"View is not yet ready");
}
});

//# sourceMappingURL=gis.js.map?rel=1582560148563
