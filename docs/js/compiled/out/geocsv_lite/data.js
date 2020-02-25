// Compiled by ClojureScript 1.10.520 {}
goog.provide('geocsv_lite.data');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
goog.require('clojure.string');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('geocsv_lite.gis');
goog.require('geocsv_lite.map');
goog.require('geocsv_lite.notify');
/**
 * Returns the query part of the current document URL as a keyword-string map.
 */
geocsv_lite.data.get_query_part_as_map = (function geocsv_lite$data$get_query_part_as_map(){
var query_nvs = cljs.core.map.call(null,(function (p1__25200_SHARP_){
return clojure.string.split.call(null,p1__25200_SHARP_,"=");
}),clojure.string.split.call(null,cljs.core.subs.call(null,window.location.search,(1)),"&"));
if(cljs.core.every_QMARK_.call(null,((function (query_nvs){
return (function (p1__25201_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__25201_SHARP_),(2));
});})(query_nvs))
,query_nvs)){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (query_nvs){
return (function (p1__25202_SHARP_){
return cljs.core.keyword.call(null,cljs.core.first.call(null,p1__25202_SHARP_));
});})(query_nvs))
,query_nvs),cljs.core.map.call(null,((function (query_nvs){
return (function (p1__25203_SHARP_){
return cljs.core.nth.call(null,p1__25203_SHARP_,(1));
});})(query_nvs))
,query_nvs));
} else {
return null;
}
});
/**
 * `query` is expected a keyword-string map which may have keys:
 * 
 *   * `:docid` whose value is a Google Sheets document id;
 *   * `:uri` whose value is the URI of a JSON or CSV file.
 * 
 *   If either of these keys is found, returns an appropriate URL, else nil.
 */
geocsv_lite.data.get_csv_url = (function geocsv_lite$data$get_csv_url(query){
if(cljs.core.map_QMARK_.call(null,query)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"docid","docid",832763997).cljs$core$IFn$_invoke$arity$1(query))){
return ["https://docs.google.com/spreadsheets/d/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"docid","docid",832763997).cljs$core$IFn$_invoke$arity$1(query)),"/export?format=csv"].join('');
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(query);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * `data` is expected to be a vector of vectors, where the first vector
 *   contains column headers and the remaining vectors contain records.
 *   Return this as a vector of maps, with each map having keys taken from
 *   the first vector and values taken from one of the subsequent vectors.
 */
geocsv_lite.data.prepare_records = (function geocsv_lite$data$prepare_records(data){
var cols = cljs.core.map.call(null,(function (p1__25204_SHARP_){
var n = ((cljs.core.empty_QMARK_.call(null,p1__25204_SHARP_))?null:((typeof p1__25204_SHARP_ === 'string')?clojure.string.lower_case.call(null,clojure.string.replace.call(null,clojure.string.trim.call(null,p1__25204_SHARP_),/[^\w\d]+/,"-")):null));
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,n))?cljs.core.gensym.call(null):n));
}),cljs.core.first.call(null,data));
return cljs.core.map.call(null,((function (cols){
return (function (r){
return cljs.core.zipmap.call(null,cols,r);
});})(cols))
,cljs.core.rest.call(null,data));
});
/**
 * When data is received from a URL, it is received asynchronously. This
 *   is the default callback called with the `response` of the HTTP request,
 *   and the keyword `k` identifying the map view, to populate the map with
 *   data.
 */
geocsv_lite.data.default_handler = (function geocsv_lite$data$default_handler(response,k){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),(200))){
var content = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var records = geocsv_lite.data.prepare_records.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,Papa.parse(content,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true], null))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
return geocsv_lite.gis.refresh_map_pins.call(null,geocsv_lite.map.get_view.call(null,k),records);
} else {
return geocsv_lite.notify.error.call(null,["Bad response from server: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))].join(''));
}
});
/**
 * Get data for the view identified by this keyword `k` from this `uri`.
 */
geocsv_lite.data.get_data_from_uri = (function geocsv_lite$data$get_data_from_uri(k,uri){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_25213){
var state_val_25214 = (state_25213[(1)]);
if((state_val_25214 === (1))){
var inst_25205 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25206 = ["false"];
var inst_25207 = cljs.core.PersistentHashMap.fromArrays(inst_25205,inst_25206);
var inst_25208 = cljs_http.client.get.call(null,uri,inst_25207);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,(2),inst_25208);
} else {
if((state_val_25214 === (2))){
var inst_25210 = (state_25213[(2)]);
var inst_25211 = geocsv_lite.data.default_handler.call(null,inst_25210,k);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25213__$1,inst_25211);
} else {
return null;
}
}
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto__ = null;
var geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto____0 = (function (){
var statearr_25215 = [null,null,null,null,null,null,null];
(statearr_25215[(0)] = geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto__);

(statearr_25215[(1)] = (1));

return statearr_25215;
});
var geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto____1 = (function (state_25213){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_25213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e25216){if((e25216 instanceof Object)){
var ex__22860__auto__ = e25216;
var statearr_25217_25219 = state_25213;
(statearr_25217_25219[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25220 = state_25213;
state_25213 = G__25220;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto____0.call(this);
case 1:
return geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto____0;
geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto____1;
return geocsv_lite$data$get_data_from_uri_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_25218 = f__22952__auto__.call(null);
(statearr_25218[(6)] = c__22951__auto__);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
});
/**
 * Get data for the view identified by this keyword `k` from this `data-source`.
 *   The data source may be a URL, or a CSV or JSON formatted string.
 */
geocsv_lite.data.get_data = (function geocsv_lite$data$get_data(k,data_source){
console.debug(["get-data: k = `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"`; data-source = `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_source),"`"].join(''));

var p = cljs.core.js__GT_clj.call(null,Papa.parse(data_source),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var data = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(p)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p):(function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(data_source));
}catch (e25221){var _ = e25221;
return null;
}})());
console.debug("Found records: ",cljs.core.clj__GT_js.call(null,data));

if(((cljs.core.vector_QMARK_.call(null,data)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,data)))){
var records = geocsv_lite.data.prepare_records.call(null,data);
geocsv_lite.notify.message.call(null,["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,records))," records of inline data for map `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"`"].join(''));

return geocsv_lite.gis.refresh_map_pins.call(null,geocsv_lite.map.get_view.call(null,k),geocsv_lite.data.prepare_records.call(null,data));
} else {
return geocsv_lite.data.get_data_from_uri.call(null,k,data_source);
}
});
geocsv_lite.data.get_data_with_uri_and_handler = (function geocsv_lite$data$get_data_with_uri_and_handler(uri,handler_fn,k){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_25229){
var state_val_25230 = (state_25229[(1)]);
if((state_val_25230 === (1))){
var inst_25222 = cljs_http.client.get.call(null,uri);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25229__$1,(2),inst_25222);
} else {
if((state_val_25230 === (2))){
var inst_25224 = (state_25229[(2)]);
var inst_25225 = (new cljs.core.List(null,k,null,(1),null));
var inst_25226 = (new cljs.core.List(null,inst_25224,inst_25225,(2),null));
var inst_25227 = cljs.core.apply.call(null,handler_fn,inst_25226);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25229__$1,inst_25227);
} else {
return null;
}
}
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto__ = null;
var geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto____0 = (function (){
var statearr_25231 = [null,null,null,null,null,null,null];
(statearr_25231[(0)] = geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto__);

(statearr_25231[(1)] = (1));

return statearr_25231;
});
var geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto____1 = (function (state_25229){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_25229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e25232){if((e25232 instanceof Object)){
var ex__22860__auto__ = e25232;
var statearr_25233_25235 = state_25229;
(statearr_25233_25235[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25236 = state_25229;
state_25229 = G__25236;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto__ = function(state_25229){
switch(arguments.length){
case 0:
return geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto____0.call(this);
case 1:
return geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto____1.call(this,state_25229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto____0;
geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto____1;
return geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_25234 = f__22952__auto__.call(null);
(statearr_25234[(6)] = c__22951__auto__);

return statearr_25234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
});

//# sourceMappingURL=data.js.map?rel=1582560148588
