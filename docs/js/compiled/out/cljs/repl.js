// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30007){
var map__30008 = p__30007;
var map__30008__$1 = (((((!((map__30008 == null))))?(((((map__30008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30008):map__30008);
var m = map__30008__$1;
var n = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30010_30042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30011_30043 = null;
var count__30012_30044 = (0);
var i__30013_30045 = (0);
while(true){
if((i__30013_30045 < count__30012_30044)){
var f_30046 = cljs.core._nth.call(null,chunk__30011_30043,i__30013_30045);
cljs.core.println.call(null,"  ",f_30046);


var G__30047 = seq__30010_30042;
var G__30048 = chunk__30011_30043;
var G__30049 = count__30012_30044;
var G__30050 = (i__30013_30045 + (1));
seq__30010_30042 = G__30047;
chunk__30011_30043 = G__30048;
count__30012_30044 = G__30049;
i__30013_30045 = G__30050;
continue;
} else {
var temp__5720__auto___30051 = cljs.core.seq.call(null,seq__30010_30042);
if(temp__5720__auto___30051){
var seq__30010_30052__$1 = temp__5720__auto___30051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30010_30052__$1)){
var c__4550__auto___30053 = cljs.core.chunk_first.call(null,seq__30010_30052__$1);
var G__30054 = cljs.core.chunk_rest.call(null,seq__30010_30052__$1);
var G__30055 = c__4550__auto___30053;
var G__30056 = cljs.core.count.call(null,c__4550__auto___30053);
var G__30057 = (0);
seq__30010_30042 = G__30054;
chunk__30011_30043 = G__30055;
count__30012_30044 = G__30056;
i__30013_30045 = G__30057;
continue;
} else {
var f_30058 = cljs.core.first.call(null,seq__30010_30052__$1);
cljs.core.println.call(null,"  ",f_30058);


var G__30059 = cljs.core.next.call(null,seq__30010_30052__$1);
var G__30060 = null;
var G__30061 = (0);
var G__30062 = (0);
seq__30010_30042 = G__30059;
chunk__30011_30043 = G__30060;
count__30012_30044 = G__30061;
i__30013_30045 = G__30062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30063);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30063)))?cljs.core.second.call(null,arglists_30063):arglists_30063));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30014_30064 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30015_30065 = null;
var count__30016_30066 = (0);
var i__30017_30067 = (0);
while(true){
if((i__30017_30067 < count__30016_30066)){
var vec__30028_30068 = cljs.core._nth.call(null,chunk__30015_30065,i__30017_30067);
var name_30069 = cljs.core.nth.call(null,vec__30028_30068,(0),null);
var map__30031_30070 = cljs.core.nth.call(null,vec__30028_30068,(1),null);
var map__30031_30071__$1 = (((((!((map__30031_30070 == null))))?(((((map__30031_30070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30031_30070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30031_30070):map__30031_30070);
var doc_30072 = cljs.core.get.call(null,map__30031_30071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30073 = cljs.core.get.call(null,map__30031_30071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30069);

cljs.core.println.call(null," ",arglists_30073);

if(cljs.core.truth_(doc_30072)){
cljs.core.println.call(null," ",doc_30072);
} else {
}


var G__30074 = seq__30014_30064;
var G__30075 = chunk__30015_30065;
var G__30076 = count__30016_30066;
var G__30077 = (i__30017_30067 + (1));
seq__30014_30064 = G__30074;
chunk__30015_30065 = G__30075;
count__30016_30066 = G__30076;
i__30017_30067 = G__30077;
continue;
} else {
var temp__5720__auto___30078 = cljs.core.seq.call(null,seq__30014_30064);
if(temp__5720__auto___30078){
var seq__30014_30079__$1 = temp__5720__auto___30078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30014_30079__$1)){
var c__4550__auto___30080 = cljs.core.chunk_first.call(null,seq__30014_30079__$1);
var G__30081 = cljs.core.chunk_rest.call(null,seq__30014_30079__$1);
var G__30082 = c__4550__auto___30080;
var G__30083 = cljs.core.count.call(null,c__4550__auto___30080);
var G__30084 = (0);
seq__30014_30064 = G__30081;
chunk__30015_30065 = G__30082;
count__30016_30066 = G__30083;
i__30017_30067 = G__30084;
continue;
} else {
var vec__30033_30085 = cljs.core.first.call(null,seq__30014_30079__$1);
var name_30086 = cljs.core.nth.call(null,vec__30033_30085,(0),null);
var map__30036_30087 = cljs.core.nth.call(null,vec__30033_30085,(1),null);
var map__30036_30088__$1 = (((((!((map__30036_30087 == null))))?(((((map__30036_30087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30036_30087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30036_30087):map__30036_30087);
var doc_30089 = cljs.core.get.call(null,map__30036_30088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30090 = cljs.core.get.call(null,map__30036_30088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30086);

cljs.core.println.call(null," ",arglists_30090);

if(cljs.core.truth_(doc_30089)){
cljs.core.println.call(null," ",doc_30089);
} else {
}


var G__30091 = cljs.core.next.call(null,seq__30014_30079__$1);
var G__30092 = null;
var G__30093 = (0);
var G__30094 = (0);
seq__30014_30064 = G__30091;
chunk__30015_30065 = G__30092;
count__30016_30066 = G__30093;
i__30017_30067 = G__30094;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30038 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30039 = null;
var count__30040 = (0);
var i__30041 = (0);
while(true){
if((i__30041 < count__30040)){
var role = cljs.core._nth.call(null,chunk__30039,i__30041);
var temp__5720__auto___30095__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30095__$1)){
var spec_30096 = temp__5720__auto___30095__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30096));
} else {
}


var G__30097 = seq__30038;
var G__30098 = chunk__30039;
var G__30099 = count__30040;
var G__30100 = (i__30041 + (1));
seq__30038 = G__30097;
chunk__30039 = G__30098;
count__30040 = G__30099;
i__30041 = G__30100;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30038);
if(temp__5720__auto____$1){
var seq__30038__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30038__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30038__$1);
var G__30101 = cljs.core.chunk_rest.call(null,seq__30038__$1);
var G__30102 = c__4550__auto__;
var G__30103 = cljs.core.count.call(null,c__4550__auto__);
var G__30104 = (0);
seq__30038 = G__30101;
chunk__30039 = G__30102;
count__30040 = G__30103;
i__30041 = G__30104;
continue;
} else {
var role = cljs.core.first.call(null,seq__30038__$1);
var temp__5720__auto___30105__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30105__$2)){
var spec_30106 = temp__5720__auto___30105__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30106));
} else {
}


var G__30107 = cljs.core.next.call(null,seq__30038__$1);
var G__30108 = null;
var G__30109 = (0);
var G__30110 = (0);
seq__30038 = G__30107;
chunk__30039 = G__30108;
count__30040 = G__30109;
i__30041 = G__30110;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30111 = cljs.core.conj.call(null,via,t);
var G__30112 = cljs.core.ex_cause.call(null,t);
via = G__30111;
t = G__30112;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30115 = datafied_throwable;
var map__30115__$1 = (((((!((map__30115 == null))))?(((((map__30115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30115):map__30115);
var via = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30116 = cljs.core.last.call(null,via);
var map__30116__$1 = (((((!((map__30116 == null))))?(((((map__30116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var type = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30117 = data;
var map__30117__$1 = (((((!((map__30117 == null))))?(((((map__30117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30117):map__30117);
var problems = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30118 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30118__$1 = (((((!((map__30118 == null))))?(((((map__30118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30118):map__30118);
var top_data = map__30118__$1;
var source = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30123 = phase;
var G__30123__$1 = (((G__30123 instanceof cljs.core.Keyword))?G__30123.fqn:null);
switch (G__30123__$1) {
case "read-source":
var map__30124 = data;
var map__30124__$1 = (((((!((map__30124 == null))))?(((((map__30124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30124):map__30124);
var line = cljs.core.get.call(null,map__30124__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30124__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30126 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30126__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30126,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30126);
var G__30126__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30126__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30126__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30126__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30127 = top_data;
var G__30127__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30127,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30127);
var G__30127__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30127__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30127__$1);
var G__30127__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30127__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30127__$2);
var G__30127__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30127__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30127__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30127__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30127__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30128 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30128,(0),null);
var method = cljs.core.nth.call(null,vec__30128,(1),null);
var file = cljs.core.nth.call(null,vec__30128,(2),null);
var line = cljs.core.nth.call(null,vec__30128,(3),null);
var G__30131 = top_data;
var G__30131__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30131,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30131);
var G__30131__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30131__$1);
var G__30131__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30131__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30131__$2);
var G__30131__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30131__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30131__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30131__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30131__$4;
}

break;
case "execution":
var vec__30132 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30132,(0),null);
var method = cljs.core.nth.call(null,vec__30132,(1),null);
var file = cljs.core.nth.call(null,vec__30132,(2),null);
var line = cljs.core.nth.call(null,vec__30132,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30132,source__$1,method,file,line,G__30123,G__30123__$1,map__30115,map__30115__$1,via,trace,phase,map__30116,map__30116__$1,type,message,data,map__30117,map__30117__$1,problems,fn,caller,map__30118,map__30118__$1,top_data,source){
return (function (p1__30114_SHARP_){
var or__4131__auto__ = (p1__30114_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30114_SHARP_);
}
});})(vec__30132,source__$1,method,file,line,G__30123,G__30123__$1,map__30115,map__30115__$1,via,trace,phase,map__30116,map__30116__$1,type,message,data,map__30117,map__30117__$1,problems,fn,caller,map__30118,map__30118__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30135 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30135__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30135,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30135);
var G__30135__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30135__$1);
var G__30135__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30135__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30135__$2);
var G__30135__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30135__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30135__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30135__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30135__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30123__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30139){
var map__30140 = p__30139;
var map__30140__$1 = (((((!((map__30140 == null))))?(((((map__30140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30140):map__30140);
var triage_data = map__30140__$1;
var phase = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30142 = phase;
var G__30142__$1 = (((G__30142 instanceof cljs.core.Keyword))?G__30142.fqn:null);
switch (G__30142__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30143_30152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30144_30153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30145_30154 = true;
var _STAR_print_fn_STAR__temp_val__30146_30155 = ((function (_STAR_print_newline_STAR__orig_val__30143_30152,_STAR_print_fn_STAR__orig_val__30144_30153,_STAR_print_newline_STAR__temp_val__30145_30154,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30143_30152,_STAR_print_fn_STAR__orig_val__30144_30153,_STAR_print_newline_STAR__temp_val__30145_30154,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30145_30154;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30146_30155;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30143_30152,_STAR_print_fn_STAR__orig_val__30144_30153,_STAR_print_newline_STAR__temp_val__30145_30154,_STAR_print_fn_STAR__temp_val__30146_30155,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30143_30152,_STAR_print_fn_STAR__orig_val__30144_30153,_STAR_print_newline_STAR__temp_val__30145_30154,_STAR_print_fn_STAR__temp_val__30146_30155,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30137_SHARP_){
return cljs.core.dissoc.call(null,p1__30137_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30143_30152,_STAR_print_fn_STAR__orig_val__30144_30153,_STAR_print_newline_STAR__temp_val__30145_30154,_STAR_print_fn_STAR__temp_val__30146_30155,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30143_30152,_STAR_print_fn_STAR__orig_val__30144_30153,_STAR_print_newline_STAR__temp_val__30145_30154,_STAR_print_fn_STAR__temp_val__30146_30155,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30144_30153;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30143_30152;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30147_30156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30148_30157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30149_30158 = true;
var _STAR_print_fn_STAR__temp_val__30150_30159 = ((function (_STAR_print_newline_STAR__orig_val__30147_30156,_STAR_print_fn_STAR__orig_val__30148_30157,_STAR_print_newline_STAR__temp_val__30149_30158,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30147_30156,_STAR_print_fn_STAR__orig_val__30148_30157,_STAR_print_newline_STAR__temp_val__30149_30158,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30149_30158;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30150_30159;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30147_30156,_STAR_print_fn_STAR__orig_val__30148_30157,_STAR_print_newline_STAR__temp_val__30149_30158,_STAR_print_fn_STAR__temp_val__30150_30159,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30147_30156,_STAR_print_fn_STAR__orig_val__30148_30157,_STAR_print_newline_STAR__temp_val__30149_30158,_STAR_print_fn_STAR__temp_val__30150_30159,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30138_SHARP_){
return cljs.core.dissoc.call(null,p1__30138_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30147_30156,_STAR_print_fn_STAR__orig_val__30148_30157,_STAR_print_newline_STAR__temp_val__30149_30158,_STAR_print_fn_STAR__temp_val__30150_30159,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30147_30156,_STAR_print_fn_STAR__orig_val__30148_30157,_STAR_print_newline_STAR__temp_val__30149_30158,_STAR_print_fn_STAR__temp_val__30150_30159,sb__4661__auto__,G__30142,G__30142__$1,loc,class_name,simple_class,cause_type,format,map__30140,map__30140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30148_30157;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30147_30156;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30142__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1582560151693
