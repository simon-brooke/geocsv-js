// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30354){if((e30354 instanceof Error)){
var e = e30354;
return "Error: Unable to stringify";
} else {
throw e30354;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30357 = arguments.length;
switch (G__30357) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30355_SHARP_){
if(typeof p1__30355_SHARP_ === 'string'){
return p1__30355_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30355_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30360 = arguments.length;
var i__4731__auto___30361 = (0);
while(true){
if((i__4731__auto___30361 < len__4730__auto___30360)){
args__4736__auto__.push((arguments[i__4731__auto___30361]));

var G__30362 = (i__4731__auto___30361 + (1));
i__4731__auto___30361 = G__30362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30359){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30359));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30364 = arguments.length;
var i__4731__auto___30365 = (0);
while(true){
if((i__4731__auto___30365 < len__4730__auto___30364)){
args__4736__auto__.push((arguments[i__4731__auto___30365]));

var G__30366 = (i__4731__auto___30365 + (1));
i__4731__auto___30365 = G__30366;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30363));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30367){
var map__30368 = p__30367;
var map__30368__$1 = (((((!((map__30368 == null))))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var message = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22951__auto___30447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___30447,ch){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___30447,ch){
return (function (state_30419){
var state_val_30420 = (state_30419[(1)]);
if((state_val_30420 === (7))){
var inst_30415 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30421_30448 = state_30419__$1;
(statearr_30421_30448[(2)] = inst_30415);

(statearr_30421_30448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (1))){
var state_30419__$1 = state_30419;
var statearr_30422_30449 = state_30419__$1;
(statearr_30422_30449[(2)] = null);

(statearr_30422_30449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (4))){
var inst_30372 = (state_30419[(7)]);
var inst_30372__$1 = (state_30419[(2)]);
var state_30419__$1 = (function (){var statearr_30423 = state_30419;
(statearr_30423[(7)] = inst_30372__$1);

return statearr_30423;
})();
if(cljs.core.truth_(inst_30372__$1)){
var statearr_30424_30450 = state_30419__$1;
(statearr_30424_30450[(1)] = (5));

} else {
var statearr_30425_30451 = state_30419__$1;
(statearr_30425_30451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (15))){
var inst_30379 = (state_30419[(8)]);
var inst_30394 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30379);
var inst_30395 = cljs.core.first.call(null,inst_30394);
var inst_30396 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30395);
var inst_30397 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30396)].join('');
var inst_30398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30397);
var state_30419__$1 = state_30419;
var statearr_30426_30452 = state_30419__$1;
(statearr_30426_30452[(2)] = inst_30398);

(statearr_30426_30452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (13))){
var inst_30403 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30427_30453 = state_30419__$1;
(statearr_30427_30453[(2)] = inst_30403);

(statearr_30427_30453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (6))){
var state_30419__$1 = state_30419;
var statearr_30428_30454 = state_30419__$1;
(statearr_30428_30454[(2)] = null);

(statearr_30428_30454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (17))){
var inst_30401 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30429_30455 = state_30419__$1;
(statearr_30429_30455[(2)] = inst_30401);

(statearr_30429_30455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (3))){
var inst_30417 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30419__$1,inst_30417);
} else {
if((state_val_30420 === (12))){
var inst_30378 = (state_30419[(9)]);
var inst_30392 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30378,opts);
var state_30419__$1 = state_30419;
if(inst_30392){
var statearr_30430_30456 = state_30419__$1;
(statearr_30430_30456[(1)] = (15));

} else {
var statearr_30431_30457 = state_30419__$1;
(statearr_30431_30457[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (2))){
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30419__$1,(4),ch);
} else {
if((state_val_30420 === (11))){
var inst_30379 = (state_30419[(8)]);
var inst_30384 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30385 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30379);
var inst_30386 = cljs.core.async.timeout.call(null,(1000));
var inst_30387 = [inst_30385,inst_30386];
var inst_30388 = (new cljs.core.PersistentVector(null,2,(5),inst_30384,inst_30387,null));
var state_30419__$1 = state_30419;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30419__$1,(14),inst_30388);
} else {
if((state_val_30420 === (9))){
var inst_30379 = (state_30419[(8)]);
var inst_30405 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30406 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30379);
var inst_30407 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30406);
var inst_30408 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30407)].join('');
var inst_30409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30408);
var state_30419__$1 = (function (){var statearr_30432 = state_30419;
(statearr_30432[(10)] = inst_30405);

return statearr_30432;
})();
var statearr_30433_30458 = state_30419__$1;
(statearr_30433_30458[(2)] = inst_30409);

(statearr_30433_30458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (5))){
var inst_30372 = (state_30419[(7)]);
var inst_30374 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30375 = (new cljs.core.PersistentArrayMap(null,2,inst_30374,null));
var inst_30376 = (new cljs.core.PersistentHashSet(null,inst_30375,null));
var inst_30377 = figwheel.client.focus_msgs.call(null,inst_30376,inst_30372);
var inst_30378 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30377);
var inst_30379 = cljs.core.first.call(null,inst_30377);
var inst_30380 = figwheel.client.autoload_QMARK_.call(null);
var state_30419__$1 = (function (){var statearr_30434 = state_30419;
(statearr_30434[(9)] = inst_30378);

(statearr_30434[(8)] = inst_30379);

return statearr_30434;
})();
if(cljs.core.truth_(inst_30380)){
var statearr_30435_30459 = state_30419__$1;
(statearr_30435_30459[(1)] = (8));

} else {
var statearr_30436_30460 = state_30419__$1;
(statearr_30436_30460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (14))){
var inst_30390 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30437_30461 = state_30419__$1;
(statearr_30437_30461[(2)] = inst_30390);

(statearr_30437_30461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (16))){
var state_30419__$1 = state_30419;
var statearr_30438_30462 = state_30419__$1;
(statearr_30438_30462[(2)] = null);

(statearr_30438_30462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (10))){
var inst_30411 = (state_30419[(2)]);
var state_30419__$1 = (function (){var statearr_30439 = state_30419;
(statearr_30439[(11)] = inst_30411);

return statearr_30439;
})();
var statearr_30440_30463 = state_30419__$1;
(statearr_30440_30463[(2)] = null);

(statearr_30440_30463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (8))){
var inst_30378 = (state_30419[(9)]);
var inst_30382 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30378,opts);
var state_30419__$1 = state_30419;
if(cljs.core.truth_(inst_30382)){
var statearr_30441_30464 = state_30419__$1;
(statearr_30441_30464[(1)] = (11));

} else {
var statearr_30442_30465 = state_30419__$1;
(statearr_30442_30465[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22951__auto___30447,ch))
;
return ((function (switch__22856__auto__,c__22951__auto___30447,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30443[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__);

(statearr_30443[(1)] = (1));

return statearr_30443;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____1 = (function (state_30419){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30444){if((e30444 instanceof Object)){
var ex__22860__auto__ = e30444;
var statearr_30445_30466 = state_30419;
(statearr_30445_30466[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30419;
state_30419 = G__30467;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__ = function(state_30419){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____1.call(this,state_30419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___30447,ch))
})();
var state__22953__auto__ = (function (){var statearr_30446 = f__22952__auto__.call(null);
(statearr_30446[(6)] = c__22951__auto___30447);

return statearr_30446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___30447,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30468_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30468_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30474 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30474){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30470 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30471 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30472 = true;
var _STAR_print_fn_STAR__temp_val__30473 = ((function (_STAR_print_newline_STAR__orig_val__30470,_STAR_print_fn_STAR__orig_val__30471,_STAR_print_newline_STAR__temp_val__30472,sb,base_path_30474){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30470,_STAR_print_fn_STAR__orig_val__30471,_STAR_print_newline_STAR__temp_val__30472,sb,base_path_30474))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30472;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30473;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30471;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30470;
}}catch (e30469){if((e30469 instanceof Error)){
var e = e30469;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30474], null));
} else {
var e = e30469;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30474))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30475){
var map__30476 = p__30475;
var map__30476__$1 = (((((!((map__30476 == null))))?(((((map__30476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30476):map__30476);
var opts = map__30476__$1;
var build_id = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30476,map__30476__$1,opts,build_id){
return (function (p__30478){
var vec__30479 = p__30478;
var seq__30480 = cljs.core.seq.call(null,vec__30479);
var first__30481 = cljs.core.first.call(null,seq__30480);
var seq__30480__$1 = cljs.core.next.call(null,seq__30480);
var map__30482 = first__30481;
var map__30482__$1 = (((((!((map__30482 == null))))?(((((map__30482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482):map__30482);
var msg = map__30482__$1;
var msg_name = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30480__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30479,seq__30480,first__30481,seq__30480__$1,map__30482,map__30482__$1,msg,msg_name,_,map__30476,map__30476__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30479,seq__30480,first__30481,seq__30480__$1,map__30482,map__30482__$1,msg,msg_name,_,map__30476,map__30476__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30476,map__30476__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30484){
var vec__30485 = p__30484;
var seq__30486 = cljs.core.seq.call(null,vec__30485);
var first__30487 = cljs.core.first.call(null,seq__30486);
var seq__30486__$1 = cljs.core.next.call(null,seq__30486);
var map__30488 = first__30487;
var map__30488__$1 = (((((!((map__30488 == null))))?(((((map__30488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30488):map__30488);
var msg = map__30488__$1;
var msg_name = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30486__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30490){
var map__30491 = p__30490;
var map__30491__$1 = (((((!((map__30491 == null))))?(((((map__30491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30491):map__30491);
var on_compile_warning = cljs.core.get.call(null,map__30491__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30491__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30491,map__30491__$1,on_compile_warning,on_compile_fail){
return (function (p__30493){
var vec__30494 = p__30493;
var seq__30495 = cljs.core.seq.call(null,vec__30494);
var first__30496 = cljs.core.first.call(null,seq__30495);
var seq__30495__$1 = cljs.core.next.call(null,seq__30495);
var map__30497 = first__30496;
var map__30497__$1 = (((((!((map__30497 == null))))?(((((map__30497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30497):map__30497);
var msg = map__30497__$1;
var msg_name = cljs.core.get.call(null,map__30497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30495__$1;
var pred__30499 = cljs.core._EQ_;
var expr__30500 = msg_name;
if(cljs.core.truth_(pred__30499.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30500))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30499.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30500))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30491,map__30491__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,msg_hist,msg_names,msg){
return (function (state_30589){
var state_val_30590 = (state_30589[(1)]);
if((state_val_30590 === (7))){
var inst_30509 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30509)){
var statearr_30591_30638 = state_30589__$1;
(statearr_30591_30638[(1)] = (8));

} else {
var statearr_30592_30639 = state_30589__$1;
(statearr_30592_30639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (20))){
var inst_30583 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30593_30640 = state_30589__$1;
(statearr_30593_30640[(2)] = inst_30583);

(statearr_30593_30640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (27))){
var inst_30579 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30594_30641 = state_30589__$1;
(statearr_30594_30641[(2)] = inst_30579);

(statearr_30594_30641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (1))){
var inst_30502 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30502)){
var statearr_30595_30642 = state_30589__$1;
(statearr_30595_30642[(1)] = (2));

} else {
var statearr_30596_30643 = state_30589__$1;
(statearr_30596_30643[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (24))){
var inst_30581 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30597_30644 = state_30589__$1;
(statearr_30597_30644[(2)] = inst_30581);

(statearr_30597_30644[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (4))){
var inst_30587 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30589__$1,inst_30587);
} else {
if((state_val_30590 === (15))){
var inst_30585 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30598_30645 = state_30589__$1;
(statearr_30598_30645[(2)] = inst_30585);

(statearr_30598_30645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (21))){
var inst_30538 = (state_30589[(2)]);
var inst_30539 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30540 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30539);
var state_30589__$1 = (function (){var statearr_30599 = state_30589;
(statearr_30599[(7)] = inst_30538);

return statearr_30599;
})();
var statearr_30600_30646 = state_30589__$1;
(statearr_30600_30646[(2)] = inst_30540);

(statearr_30600_30646[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (31))){
var inst_30568 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30589__$1 = state_30589;
if(inst_30568){
var statearr_30601_30647 = state_30589__$1;
(statearr_30601_30647[(1)] = (34));

} else {
var statearr_30602_30648 = state_30589__$1;
(statearr_30602_30648[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (32))){
var inst_30577 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30603_30649 = state_30589__$1;
(statearr_30603_30649[(2)] = inst_30577);

(statearr_30603_30649[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (33))){
var inst_30564 = (state_30589[(2)]);
var inst_30565 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30566 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30565);
var state_30589__$1 = (function (){var statearr_30604 = state_30589;
(statearr_30604[(8)] = inst_30564);

return statearr_30604;
})();
var statearr_30605_30650 = state_30589__$1;
(statearr_30605_30650[(2)] = inst_30566);

(statearr_30605_30650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (13))){
var inst_30523 = figwheel.client.heads_up.clear.call(null);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(16),inst_30523);
} else {
if((state_val_30590 === (22))){
var inst_30544 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30545 = figwheel.client.heads_up.append_warning_message.call(null,inst_30544);
var state_30589__$1 = state_30589;
var statearr_30606_30651 = state_30589__$1;
(statearr_30606_30651[(2)] = inst_30545);

(statearr_30606_30651[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (36))){
var inst_30575 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30607_30652 = state_30589__$1;
(statearr_30607_30652[(2)] = inst_30575);

(statearr_30607_30652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (29))){
var inst_30555 = (state_30589[(2)]);
var inst_30556 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30557 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30556);
var state_30589__$1 = (function (){var statearr_30608 = state_30589;
(statearr_30608[(9)] = inst_30555);

return statearr_30608;
})();
var statearr_30609_30653 = state_30589__$1;
(statearr_30609_30653[(2)] = inst_30557);

(statearr_30609_30653[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (6))){
var inst_30504 = (state_30589[(10)]);
var state_30589__$1 = state_30589;
var statearr_30610_30654 = state_30589__$1;
(statearr_30610_30654[(2)] = inst_30504);

(statearr_30610_30654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (28))){
var inst_30551 = (state_30589[(2)]);
var inst_30552 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30553 = figwheel.client.heads_up.display_warning.call(null,inst_30552);
var state_30589__$1 = (function (){var statearr_30611 = state_30589;
(statearr_30611[(11)] = inst_30551);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(29),inst_30553);
} else {
if((state_val_30590 === (25))){
var inst_30549 = figwheel.client.heads_up.clear.call(null);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(28),inst_30549);
} else {
if((state_val_30590 === (34))){
var inst_30570 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(37),inst_30570);
} else {
if((state_val_30590 === (17))){
var inst_30529 = (state_30589[(2)]);
var inst_30530 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30531 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30530);
var state_30589__$1 = (function (){var statearr_30612 = state_30589;
(statearr_30612[(12)] = inst_30529);

return statearr_30612;
})();
var statearr_30613_30655 = state_30589__$1;
(statearr_30613_30655[(2)] = inst_30531);

(statearr_30613_30655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (3))){
var inst_30521 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30589__$1 = state_30589;
if(inst_30521){
var statearr_30614_30656 = state_30589__$1;
(statearr_30614_30656[(1)] = (13));

} else {
var statearr_30615_30657 = state_30589__$1;
(statearr_30615_30657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (12))){
var inst_30517 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30616_30658 = state_30589__$1;
(statearr_30616_30658[(2)] = inst_30517);

(statearr_30616_30658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (2))){
var inst_30504 = (state_30589[(10)]);
var inst_30504__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30589__$1 = (function (){var statearr_30617 = state_30589;
(statearr_30617[(10)] = inst_30504__$1);

return statearr_30617;
})();
if(cljs.core.truth_(inst_30504__$1)){
var statearr_30618_30659 = state_30589__$1;
(statearr_30618_30659[(1)] = (5));

} else {
var statearr_30619_30660 = state_30589__$1;
(statearr_30619_30660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (23))){
var inst_30547 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30589__$1 = state_30589;
if(inst_30547){
var statearr_30620_30661 = state_30589__$1;
(statearr_30620_30661[(1)] = (25));

} else {
var statearr_30621_30662 = state_30589__$1;
(statearr_30621_30662[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (35))){
var state_30589__$1 = state_30589;
var statearr_30622_30663 = state_30589__$1;
(statearr_30622_30663[(2)] = null);

(statearr_30622_30663[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (19))){
var inst_30542 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30589__$1 = state_30589;
if(inst_30542){
var statearr_30623_30664 = state_30589__$1;
(statearr_30623_30664[(1)] = (22));

} else {
var statearr_30624_30665 = state_30589__$1;
(statearr_30624_30665[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (11))){
var inst_30513 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30625_30666 = state_30589__$1;
(statearr_30625_30666[(2)] = inst_30513);

(statearr_30625_30666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (9))){
var inst_30515 = figwheel.client.heads_up.clear.call(null);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(12),inst_30515);
} else {
if((state_val_30590 === (5))){
var inst_30506 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30589__$1 = state_30589;
var statearr_30626_30667 = state_30589__$1;
(statearr_30626_30667[(2)] = inst_30506);

(statearr_30626_30667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (14))){
var inst_30533 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30589__$1 = state_30589;
if(inst_30533){
var statearr_30627_30668 = state_30589__$1;
(statearr_30627_30668[(1)] = (18));

} else {
var statearr_30628_30669 = state_30589__$1;
(statearr_30628_30669[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (26))){
var inst_30559 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30589__$1 = state_30589;
if(inst_30559){
var statearr_30629_30670 = state_30589__$1;
(statearr_30629_30670[(1)] = (30));

} else {
var statearr_30630_30671 = state_30589__$1;
(statearr_30630_30671[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (16))){
var inst_30525 = (state_30589[(2)]);
var inst_30526 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30527 = figwheel.client.heads_up.display_exception.call(null,inst_30526);
var state_30589__$1 = (function (){var statearr_30631 = state_30589;
(statearr_30631[(13)] = inst_30525);

return statearr_30631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(17),inst_30527);
} else {
if((state_val_30590 === (30))){
var inst_30561 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30562 = figwheel.client.heads_up.display_warning.call(null,inst_30561);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(33),inst_30562);
} else {
if((state_val_30590 === (10))){
var inst_30519 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30632_30672 = state_30589__$1;
(statearr_30632_30672[(2)] = inst_30519);

(statearr_30632_30672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (18))){
var inst_30535 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30536 = figwheel.client.heads_up.display_exception.call(null,inst_30535);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(21),inst_30536);
} else {
if((state_val_30590 === (37))){
var inst_30572 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30633_30673 = state_30589__$1;
(statearr_30633_30673[(2)] = inst_30572);

(statearr_30633_30673[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (8))){
var inst_30511 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(11),inst_30511);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22951__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22856__auto__,c__22951__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____0 = (function (){
var statearr_30634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30634[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__);

(statearr_30634[(1)] = (1));

return statearr_30634;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____1 = (function (state_30589){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30635){if((e30635 instanceof Object)){
var ex__22860__auto__ = e30635;
var statearr_30636_30674 = state_30589;
(statearr_30636_30674[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30675 = state_30589;
state_30589 = G__30675;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__ = function(state_30589){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____1.call(this,state_30589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,msg_hist,msg_names,msg))
})();
var state__22953__auto__ = (function (){var statearr_30637 = f__22952__auto__.call(null);
(statearr_30637[(6)] = c__22951__auto__);

return statearr_30637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,msg_hist,msg_names,msg))
);

return c__22951__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22951__auto___30704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___30704,ch){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___30704,ch){
return (function (state_30690){
var state_val_30691 = (state_30690[(1)]);
if((state_val_30691 === (1))){
var state_30690__$1 = state_30690;
var statearr_30692_30705 = state_30690__$1;
(statearr_30692_30705[(2)] = null);

(statearr_30692_30705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (2))){
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30690__$1,(4),ch);
} else {
if((state_val_30691 === (3))){
var inst_30688 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30690__$1,inst_30688);
} else {
if((state_val_30691 === (4))){
var inst_30678 = (state_30690[(7)]);
var inst_30678__$1 = (state_30690[(2)]);
var state_30690__$1 = (function (){var statearr_30693 = state_30690;
(statearr_30693[(7)] = inst_30678__$1);

return statearr_30693;
})();
if(cljs.core.truth_(inst_30678__$1)){
var statearr_30694_30706 = state_30690__$1;
(statearr_30694_30706[(1)] = (5));

} else {
var statearr_30695_30707 = state_30690__$1;
(statearr_30695_30707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (5))){
var inst_30678 = (state_30690[(7)]);
var inst_30680 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30678);
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30690__$1,(8),inst_30680);
} else {
if((state_val_30691 === (6))){
var state_30690__$1 = state_30690;
var statearr_30696_30708 = state_30690__$1;
(statearr_30696_30708[(2)] = null);

(statearr_30696_30708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (7))){
var inst_30686 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
var statearr_30697_30709 = state_30690__$1;
(statearr_30697_30709[(2)] = inst_30686);

(statearr_30697_30709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (8))){
var inst_30682 = (state_30690[(2)]);
var state_30690__$1 = (function (){var statearr_30698 = state_30690;
(statearr_30698[(8)] = inst_30682);

return statearr_30698;
})();
var statearr_30699_30710 = state_30690__$1;
(statearr_30699_30710[(2)] = null);

(statearr_30699_30710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22951__auto___30704,ch))
;
return ((function (switch__22856__auto__,c__22951__auto___30704,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30700 = [null,null,null,null,null,null,null,null,null];
(statearr_30700[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22857__auto__);

(statearr_30700[(1)] = (1));

return statearr_30700;
});
var figwheel$client$heads_up_plugin_$_state_machine__22857__auto____1 = (function (state_30690){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30701){if((e30701 instanceof Object)){
var ex__22860__auto__ = e30701;
var statearr_30702_30711 = state_30690;
(statearr_30702_30711[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30712 = state_30690;
state_30690 = G__30712;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22857__auto__ = function(state_30690){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22857__auto____1.call(this,state_30690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22857__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22857__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___30704,ch))
})();
var state__22953__auto__ = (function (){var statearr_30703 = f__22952__auto__.call(null);
(statearr_30703[(6)] = c__22951__auto___30704);

return statearr_30703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___30704,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_30718){
var state_val_30719 = (state_30718[(1)]);
if((state_val_30719 === (1))){
var inst_30713 = cljs.core.async.timeout.call(null,(3000));
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30718__$1,(2),inst_30713);
} else {
if((state_val_30719 === (2))){
var inst_30715 = (state_30718[(2)]);
var inst_30716 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30718__$1 = (function (){var statearr_30720 = state_30718;
(statearr_30720[(7)] = inst_30715);

return statearr_30720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30718__$1,inst_30716);
} else {
return null;
}
}
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30721 = [null,null,null,null,null,null,null,null];
(statearr_30721[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__);

(statearr_30721[(1)] = (1));

return statearr_30721;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____1 = (function (state_30718){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30722){if((e30722 instanceof Object)){
var ex__22860__auto__ = e30722;
var statearr_30723_30725 = state_30718;
(statearr_30723_30725[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30726 = state_30718;
state_30718 = G__30726;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__ = function(state_30718){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____1.call(this,state_30718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_30724 = f__22952__auto__.call(null);
(statearr_30724[(6)] = c__22951__auto__);

return statearr_30724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30733){
var state_val_30734 = (state_30733[(1)]);
if((state_val_30734 === (1))){
var inst_30727 = cljs.core.async.timeout.call(null,(2000));
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(2),inst_30727);
} else {
if((state_val_30734 === (2))){
var inst_30729 = (state_30733[(2)]);
var inst_30730 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30731 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30730);
var state_30733__$1 = (function (){var statearr_30735 = state_30733;
(statearr_30735[(7)] = inst_30729);

return statearr_30735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30733__$1,inst_30731);
} else {
return null;
}
}
});})(c__22951__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30736 = [null,null,null,null,null,null,null,null];
(statearr_30736[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__);

(statearr_30736[(1)] = (1));

return statearr_30736;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____1 = (function (state_30733){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30737){if((e30737 instanceof Object)){
var ex__22860__auto__ = e30737;
var statearr_30738_30740 = state_30733;
(statearr_30738_30740[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30741 = state_30733;
state_30733 = G__30741;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__ = function(state_30733){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____1.call(this,state_30733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,figwheel_version,temp__5720__auto__))
})();
var state__22953__auto__ = (function (){var statearr_30739 = f__22952__auto__.call(null);
(statearr_30739[(6)] = c__22951__auto__);

return statearr_30739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,figwheel_version,temp__5720__auto__))
);

return c__22951__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30742){
var map__30743 = p__30742;
var map__30743__$1 = (((((!((map__30743 == null))))?(((((map__30743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30743):map__30743);
var file = cljs.core.get.call(null,map__30743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30743__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30743__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30745 = "";
var G__30745__$1 = (cljs.core.truth_(file)?[G__30745,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30745);
var G__30745__$2 = (cljs.core.truth_(line)?[G__30745__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30745__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30745__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30745__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30746){
var map__30747 = p__30746;
var map__30747__$1 = (((((!((map__30747 == null))))?(((((map__30747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30747):map__30747);
var ed = map__30747__$1;
var exception_data = cljs.core.get.call(null,map__30747__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30747__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30750 = (function (){var G__30749 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30749)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30749;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30750);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30751){
var map__30752 = p__30751;
var map__30752__$1 = (((((!((map__30752 == null))))?(((((map__30752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30752):map__30752);
var w = map__30752__$1;
var message = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30754 = cljs.core.seq.call(null,plugins);
var chunk__30755 = null;
var count__30756 = (0);
var i__30757 = (0);
while(true){
if((i__30757 < count__30756)){
var vec__30764 = cljs.core._nth.call(null,chunk__30755,i__30757);
var k = cljs.core.nth.call(null,vec__30764,(0),null);
var plugin = cljs.core.nth.call(null,vec__30764,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30770 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30754,chunk__30755,count__30756,i__30757,pl_30770,vec__30764,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30770.call(null,msg_hist);
});})(seq__30754,chunk__30755,count__30756,i__30757,pl_30770,vec__30764,k,plugin))
);
} else {
}


var G__30771 = seq__30754;
var G__30772 = chunk__30755;
var G__30773 = count__30756;
var G__30774 = (i__30757 + (1));
seq__30754 = G__30771;
chunk__30755 = G__30772;
count__30756 = G__30773;
i__30757 = G__30774;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30754);
if(temp__5720__auto__){
var seq__30754__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30754__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30754__$1);
var G__30775 = cljs.core.chunk_rest.call(null,seq__30754__$1);
var G__30776 = c__4550__auto__;
var G__30777 = cljs.core.count.call(null,c__4550__auto__);
var G__30778 = (0);
seq__30754 = G__30775;
chunk__30755 = G__30776;
count__30756 = G__30777;
i__30757 = G__30778;
continue;
} else {
var vec__30767 = cljs.core.first.call(null,seq__30754__$1);
var k = cljs.core.nth.call(null,vec__30767,(0),null);
var plugin = cljs.core.nth.call(null,vec__30767,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30779 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30754,chunk__30755,count__30756,i__30757,pl_30779,vec__30767,k,plugin,seq__30754__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30779.call(null,msg_hist);
});})(seq__30754,chunk__30755,count__30756,i__30757,pl_30779,vec__30767,k,plugin,seq__30754__$1,temp__5720__auto__))
);
} else {
}


var G__30780 = cljs.core.next.call(null,seq__30754__$1);
var G__30781 = null;
var G__30782 = (0);
var G__30783 = (0);
seq__30754 = G__30780;
chunk__30755 = G__30781;
count__30756 = G__30782;
i__30757 = G__30783;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30785 = arguments.length;
switch (G__30785) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30786_30791 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30787_30792 = null;
var count__30788_30793 = (0);
var i__30789_30794 = (0);
while(true){
if((i__30789_30794 < count__30788_30793)){
var msg_30795 = cljs.core._nth.call(null,chunk__30787_30792,i__30789_30794);
figwheel.client.socket.handle_incoming_message.call(null,msg_30795);


var G__30796 = seq__30786_30791;
var G__30797 = chunk__30787_30792;
var G__30798 = count__30788_30793;
var G__30799 = (i__30789_30794 + (1));
seq__30786_30791 = G__30796;
chunk__30787_30792 = G__30797;
count__30788_30793 = G__30798;
i__30789_30794 = G__30799;
continue;
} else {
var temp__5720__auto___30800 = cljs.core.seq.call(null,seq__30786_30791);
if(temp__5720__auto___30800){
var seq__30786_30801__$1 = temp__5720__auto___30800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30786_30801__$1)){
var c__4550__auto___30802 = cljs.core.chunk_first.call(null,seq__30786_30801__$1);
var G__30803 = cljs.core.chunk_rest.call(null,seq__30786_30801__$1);
var G__30804 = c__4550__auto___30802;
var G__30805 = cljs.core.count.call(null,c__4550__auto___30802);
var G__30806 = (0);
seq__30786_30791 = G__30803;
chunk__30787_30792 = G__30804;
count__30788_30793 = G__30805;
i__30789_30794 = G__30806;
continue;
} else {
var msg_30807 = cljs.core.first.call(null,seq__30786_30801__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30807);


var G__30808 = cljs.core.next.call(null,seq__30786_30801__$1);
var G__30809 = null;
var G__30810 = (0);
var G__30811 = (0);
seq__30786_30791 = G__30808;
chunk__30787_30792 = G__30809;
count__30788_30793 = G__30810;
i__30789_30794 = G__30811;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30816 = arguments.length;
var i__4731__auto___30817 = (0);
while(true){
if((i__4731__auto___30817 < len__4730__auto___30816)){
args__4736__auto__.push((arguments[i__4731__auto___30817]));

var G__30818 = (i__4731__auto___30817 + (1));
i__4731__auto___30817 = G__30818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30813){
var map__30814 = p__30813;
var map__30814__$1 = (((((!((map__30814 == null))))?(((((map__30814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30814):map__30814);
var opts = map__30814__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30812){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30812));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30819){if((e30819 instanceof Error)){
var e = e30819;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30819;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30820){
var map__30821 = p__30820;
var map__30821__$1 = (((((!((map__30821 == null))))?(((((map__30821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30821):map__30821);
var msg_name = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1582560151953
