// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28477_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28477_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28478 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28479 = null;
var count__28480 = (0);
var i__28481 = (0);
while(true){
if((i__28481 < count__28480)){
var n = cljs.core._nth.call(null,chunk__28479,i__28481);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28482 = seq__28478;
var G__28483 = chunk__28479;
var G__28484 = count__28480;
var G__28485 = (i__28481 + (1));
seq__28478 = G__28482;
chunk__28479 = G__28483;
count__28480 = G__28484;
i__28481 = G__28485;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28478);
if(temp__5720__auto__){
var seq__28478__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28478__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28478__$1);
var G__28486 = cljs.core.chunk_rest.call(null,seq__28478__$1);
var G__28487 = c__4550__auto__;
var G__28488 = cljs.core.count.call(null,c__4550__auto__);
var G__28489 = (0);
seq__28478 = G__28486;
chunk__28479 = G__28487;
count__28480 = G__28488;
i__28481 = G__28489;
continue;
} else {
var n = cljs.core.first.call(null,seq__28478__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28490 = cljs.core.next.call(null,seq__28478__$1);
var G__28491 = null;
var G__28492 = (0);
var G__28493 = (0);
seq__28478 = G__28490;
chunk__28479 = G__28491;
count__28480 = G__28492;
i__28481 = G__28493;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28494){
var vec__28495 = p__28494;
var _ = cljs.core.nth.call(null,vec__28495,(0),null);
var v = cljs.core.nth.call(null,vec__28495,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28498){
var vec__28499 = p__28498;
var k = cljs.core.nth.call(null,vec__28499,(0),null);
var v = cljs.core.nth.call(null,vec__28499,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28511_28519 = cljs.core.seq.call(null,deps);
var chunk__28512_28520 = null;
var count__28513_28521 = (0);
var i__28514_28522 = (0);
while(true){
if((i__28514_28522 < count__28513_28521)){
var dep_28523 = cljs.core._nth.call(null,chunk__28512_28520,i__28514_28522);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28523;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28523));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28523,(depth + (1)),state);
} else {
}


var G__28524 = seq__28511_28519;
var G__28525 = chunk__28512_28520;
var G__28526 = count__28513_28521;
var G__28527 = (i__28514_28522 + (1));
seq__28511_28519 = G__28524;
chunk__28512_28520 = G__28525;
count__28513_28521 = G__28526;
i__28514_28522 = G__28527;
continue;
} else {
var temp__5720__auto___28528 = cljs.core.seq.call(null,seq__28511_28519);
if(temp__5720__auto___28528){
var seq__28511_28529__$1 = temp__5720__auto___28528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28511_28529__$1)){
var c__4550__auto___28530 = cljs.core.chunk_first.call(null,seq__28511_28529__$1);
var G__28531 = cljs.core.chunk_rest.call(null,seq__28511_28529__$1);
var G__28532 = c__4550__auto___28530;
var G__28533 = cljs.core.count.call(null,c__4550__auto___28530);
var G__28534 = (0);
seq__28511_28519 = G__28531;
chunk__28512_28520 = G__28532;
count__28513_28521 = G__28533;
i__28514_28522 = G__28534;
continue;
} else {
var dep_28535 = cljs.core.first.call(null,seq__28511_28529__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28535;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28535));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28535,(depth + (1)),state);
} else {
}


var G__28536 = cljs.core.next.call(null,seq__28511_28529__$1);
var G__28537 = null;
var G__28538 = (0);
var G__28539 = (0);
seq__28511_28519 = G__28536;
chunk__28512_28520 = G__28537;
count__28513_28521 = G__28538;
i__28514_28522 = G__28539;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28515){
var vec__28516 = p__28515;
var seq__28517 = cljs.core.seq.call(null,vec__28516);
var first__28518 = cljs.core.first.call(null,seq__28517);
var seq__28517__$1 = cljs.core.next.call(null,seq__28517);
var x = first__28518;
var xs = seq__28517__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28516,seq__28517,first__28518,seq__28517__$1,x,xs,get_deps__$1){
return (function (p1__28502_SHARP_){
return clojure.set.difference.call(null,p1__28502_SHARP_,x);
});})(vec__28516,seq__28517,first__28518,seq__28517__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28540 = cljs.core.seq.call(null,provides);
var chunk__28541 = null;
var count__28542 = (0);
var i__28543 = (0);
while(true){
if((i__28543 < count__28542)){
var prov = cljs.core._nth.call(null,chunk__28541,i__28543);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28552_28560 = cljs.core.seq.call(null,requires);
var chunk__28553_28561 = null;
var count__28554_28562 = (0);
var i__28555_28563 = (0);
while(true){
if((i__28555_28563 < count__28554_28562)){
var req_28564 = cljs.core._nth.call(null,chunk__28553_28561,i__28555_28563);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28564,prov);


var G__28565 = seq__28552_28560;
var G__28566 = chunk__28553_28561;
var G__28567 = count__28554_28562;
var G__28568 = (i__28555_28563 + (1));
seq__28552_28560 = G__28565;
chunk__28553_28561 = G__28566;
count__28554_28562 = G__28567;
i__28555_28563 = G__28568;
continue;
} else {
var temp__5720__auto___28569 = cljs.core.seq.call(null,seq__28552_28560);
if(temp__5720__auto___28569){
var seq__28552_28570__$1 = temp__5720__auto___28569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28552_28570__$1)){
var c__4550__auto___28571 = cljs.core.chunk_first.call(null,seq__28552_28570__$1);
var G__28572 = cljs.core.chunk_rest.call(null,seq__28552_28570__$1);
var G__28573 = c__4550__auto___28571;
var G__28574 = cljs.core.count.call(null,c__4550__auto___28571);
var G__28575 = (0);
seq__28552_28560 = G__28572;
chunk__28553_28561 = G__28573;
count__28554_28562 = G__28574;
i__28555_28563 = G__28575;
continue;
} else {
var req_28576 = cljs.core.first.call(null,seq__28552_28570__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28576,prov);


var G__28577 = cljs.core.next.call(null,seq__28552_28570__$1);
var G__28578 = null;
var G__28579 = (0);
var G__28580 = (0);
seq__28552_28560 = G__28577;
chunk__28553_28561 = G__28578;
count__28554_28562 = G__28579;
i__28555_28563 = G__28580;
continue;
}
} else {
}
}
break;
}


var G__28581 = seq__28540;
var G__28582 = chunk__28541;
var G__28583 = count__28542;
var G__28584 = (i__28543 + (1));
seq__28540 = G__28581;
chunk__28541 = G__28582;
count__28542 = G__28583;
i__28543 = G__28584;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28540);
if(temp__5720__auto__){
var seq__28540__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28540__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28540__$1);
var G__28585 = cljs.core.chunk_rest.call(null,seq__28540__$1);
var G__28586 = c__4550__auto__;
var G__28587 = cljs.core.count.call(null,c__4550__auto__);
var G__28588 = (0);
seq__28540 = G__28585;
chunk__28541 = G__28586;
count__28542 = G__28587;
i__28543 = G__28588;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28540__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28556_28589 = cljs.core.seq.call(null,requires);
var chunk__28557_28590 = null;
var count__28558_28591 = (0);
var i__28559_28592 = (0);
while(true){
if((i__28559_28592 < count__28558_28591)){
var req_28593 = cljs.core._nth.call(null,chunk__28557_28590,i__28559_28592);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28593,prov);


var G__28594 = seq__28556_28589;
var G__28595 = chunk__28557_28590;
var G__28596 = count__28558_28591;
var G__28597 = (i__28559_28592 + (1));
seq__28556_28589 = G__28594;
chunk__28557_28590 = G__28595;
count__28558_28591 = G__28596;
i__28559_28592 = G__28597;
continue;
} else {
var temp__5720__auto___28598__$1 = cljs.core.seq.call(null,seq__28556_28589);
if(temp__5720__auto___28598__$1){
var seq__28556_28599__$1 = temp__5720__auto___28598__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28556_28599__$1)){
var c__4550__auto___28600 = cljs.core.chunk_first.call(null,seq__28556_28599__$1);
var G__28601 = cljs.core.chunk_rest.call(null,seq__28556_28599__$1);
var G__28602 = c__4550__auto___28600;
var G__28603 = cljs.core.count.call(null,c__4550__auto___28600);
var G__28604 = (0);
seq__28556_28589 = G__28601;
chunk__28557_28590 = G__28602;
count__28558_28591 = G__28603;
i__28559_28592 = G__28604;
continue;
} else {
var req_28605 = cljs.core.first.call(null,seq__28556_28599__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28605,prov);


var G__28606 = cljs.core.next.call(null,seq__28556_28599__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__28556_28589 = G__28606;
chunk__28557_28590 = G__28607;
count__28558_28591 = G__28608;
i__28559_28592 = G__28609;
continue;
}
} else {
}
}
break;
}


var G__28610 = cljs.core.next.call(null,seq__28540__$1);
var G__28611 = null;
var G__28612 = (0);
var G__28613 = (0);
seq__28540 = G__28610;
chunk__28541 = G__28611;
count__28542 = G__28612;
i__28543 = G__28613;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28614_28618 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28615_28619 = null;
var count__28616_28620 = (0);
var i__28617_28621 = (0);
while(true){
if((i__28617_28621 < count__28616_28620)){
var ns_28622 = cljs.core._nth.call(null,chunk__28615_28619,i__28617_28621);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28622);


var G__28623 = seq__28614_28618;
var G__28624 = chunk__28615_28619;
var G__28625 = count__28616_28620;
var G__28626 = (i__28617_28621 + (1));
seq__28614_28618 = G__28623;
chunk__28615_28619 = G__28624;
count__28616_28620 = G__28625;
i__28617_28621 = G__28626;
continue;
} else {
var temp__5720__auto___28627 = cljs.core.seq.call(null,seq__28614_28618);
if(temp__5720__auto___28627){
var seq__28614_28628__$1 = temp__5720__auto___28627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28614_28628__$1)){
var c__4550__auto___28629 = cljs.core.chunk_first.call(null,seq__28614_28628__$1);
var G__28630 = cljs.core.chunk_rest.call(null,seq__28614_28628__$1);
var G__28631 = c__4550__auto___28629;
var G__28632 = cljs.core.count.call(null,c__4550__auto___28629);
var G__28633 = (0);
seq__28614_28618 = G__28630;
chunk__28615_28619 = G__28631;
count__28616_28620 = G__28632;
i__28617_28621 = G__28633;
continue;
} else {
var ns_28634 = cljs.core.first.call(null,seq__28614_28628__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28634);


var G__28635 = cljs.core.next.call(null,seq__28614_28628__$1);
var G__28636 = null;
var G__28637 = (0);
var G__28638 = (0);
seq__28614_28618 = G__28635;
chunk__28615_28619 = G__28636;
count__28616_28620 = G__28637;
i__28617_28621 = G__28638;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28639__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28640__i = 0, G__28640__a = new Array(arguments.length -  0);
while (G__28640__i < G__28640__a.length) {G__28640__a[G__28640__i] = arguments[G__28640__i + 0]; ++G__28640__i;}
  args = new cljs.core.IndexedSeq(G__28640__a,0,null);
} 
return G__28639__delegate.call(this,args);};
G__28639.cljs$lang$maxFixedArity = 0;
G__28639.cljs$lang$applyTo = (function (arglist__28641){
var args = cljs.core.seq(arglist__28641);
return G__28639__delegate(args);
});
G__28639.cljs$core$IFn$_invoke$arity$variadic = G__28639__delegate;
return G__28639;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28642_SHARP_,p2__28643_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28642_SHARP_)),p2__28643_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28644_SHARP_,p2__28645_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28644_SHARP_),p2__28645_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28646 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28646.addCallback(((function (G__28646){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28646))
);

G__28646.addErrback(((function (G__28646){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28646))
);

return G__28646;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28647){if((e28647 instanceof Error)){
var e = e28647;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28647;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28648){if((e28648 instanceof Error)){
var e = e28648;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28648;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28649 = cljs.core._EQ_;
var expr__28650 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28649.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28650))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28649.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28650))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28649.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28650))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28649,expr__28650){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28649,expr__28650))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28652,callback){
var map__28653 = p__28652;
var map__28653__$1 = (((((!((map__28653 == null))))?(((((map__28653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28653):map__28653);
var file_msg = map__28653__$1;
var request_url = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28653,map__28653__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28653,map__28653__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_28691){
var state_val_28692 = (state_28691[(1)]);
if((state_val_28692 === (7))){
var inst_28687 = (state_28691[(2)]);
var state_28691__$1 = state_28691;
var statearr_28693_28719 = state_28691__$1;
(statearr_28693_28719[(2)] = inst_28687);

(statearr_28693_28719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (1))){
var state_28691__$1 = state_28691;
var statearr_28694_28720 = state_28691__$1;
(statearr_28694_28720[(2)] = null);

(statearr_28694_28720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (4))){
var inst_28657 = (state_28691[(7)]);
var inst_28657__$1 = (state_28691[(2)]);
var state_28691__$1 = (function (){var statearr_28695 = state_28691;
(statearr_28695[(7)] = inst_28657__$1);

return statearr_28695;
})();
if(cljs.core.truth_(inst_28657__$1)){
var statearr_28696_28721 = state_28691__$1;
(statearr_28696_28721[(1)] = (5));

} else {
var statearr_28697_28722 = state_28691__$1;
(statearr_28697_28722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (15))){
var inst_28670 = (state_28691[(8)]);
var inst_28672 = (state_28691[(9)]);
var inst_28674 = inst_28672.call(null,inst_28670);
var state_28691__$1 = state_28691;
var statearr_28698_28723 = state_28691__$1;
(statearr_28698_28723[(2)] = inst_28674);

(statearr_28698_28723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (13))){
var inst_28681 = (state_28691[(2)]);
var state_28691__$1 = state_28691;
var statearr_28699_28724 = state_28691__$1;
(statearr_28699_28724[(2)] = inst_28681);

(statearr_28699_28724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (6))){
var state_28691__$1 = state_28691;
var statearr_28700_28725 = state_28691__$1;
(statearr_28700_28725[(2)] = null);

(statearr_28700_28725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (17))){
var inst_28678 = (state_28691[(2)]);
var state_28691__$1 = state_28691;
var statearr_28701_28726 = state_28691__$1;
(statearr_28701_28726[(2)] = inst_28678);

(statearr_28701_28726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (3))){
var inst_28689 = (state_28691[(2)]);
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28691__$1,inst_28689);
} else {
if((state_val_28692 === (12))){
var state_28691__$1 = state_28691;
var statearr_28702_28727 = state_28691__$1;
(statearr_28702_28727[(2)] = null);

(statearr_28702_28727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (2))){
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28691__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28692 === (11))){
var inst_28662 = (state_28691[(10)]);
var inst_28668 = figwheel.client.file_reloading.blocking_load.call(null,inst_28662);
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28691__$1,(14),inst_28668);
} else {
if((state_val_28692 === (9))){
var inst_28662 = (state_28691[(10)]);
var state_28691__$1 = state_28691;
if(cljs.core.truth_(inst_28662)){
var statearr_28703_28728 = state_28691__$1;
(statearr_28703_28728[(1)] = (11));

} else {
var statearr_28704_28729 = state_28691__$1;
(statearr_28704_28729[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (5))){
var inst_28663 = (state_28691[(11)]);
var inst_28657 = (state_28691[(7)]);
var inst_28662 = cljs.core.nth.call(null,inst_28657,(0),null);
var inst_28663__$1 = cljs.core.nth.call(null,inst_28657,(1),null);
var state_28691__$1 = (function (){var statearr_28705 = state_28691;
(statearr_28705[(10)] = inst_28662);

(statearr_28705[(11)] = inst_28663__$1);

return statearr_28705;
})();
if(cljs.core.truth_(inst_28663__$1)){
var statearr_28706_28730 = state_28691__$1;
(statearr_28706_28730[(1)] = (8));

} else {
var statearr_28707_28731 = state_28691__$1;
(statearr_28707_28731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (14))){
var inst_28662 = (state_28691[(10)]);
var inst_28672 = (state_28691[(9)]);
var inst_28670 = (state_28691[(2)]);
var inst_28671 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28672__$1 = cljs.core.get.call(null,inst_28671,inst_28662);
var state_28691__$1 = (function (){var statearr_28708 = state_28691;
(statearr_28708[(8)] = inst_28670);

(statearr_28708[(9)] = inst_28672__$1);

return statearr_28708;
})();
if(cljs.core.truth_(inst_28672__$1)){
var statearr_28709_28732 = state_28691__$1;
(statearr_28709_28732[(1)] = (15));

} else {
var statearr_28710_28733 = state_28691__$1;
(statearr_28710_28733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (16))){
var inst_28670 = (state_28691[(8)]);
var inst_28676 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28670);
var state_28691__$1 = state_28691;
var statearr_28711_28734 = state_28691__$1;
(statearr_28711_28734[(2)] = inst_28676);

(statearr_28711_28734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (10))){
var inst_28683 = (state_28691[(2)]);
var state_28691__$1 = (function (){var statearr_28712 = state_28691;
(statearr_28712[(12)] = inst_28683);

return statearr_28712;
})();
var statearr_28713_28735 = state_28691__$1;
(statearr_28713_28735[(2)] = null);

(statearr_28713_28735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (8))){
var inst_28663 = (state_28691[(11)]);
var inst_28665 = eval(inst_28663);
var state_28691__$1 = state_28691;
var statearr_28714_28736 = state_28691__$1;
(statearr_28714_28736[(2)] = inst_28665);

(statearr_28714_28736[(1)] = (10));


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
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22857__auto__ = null;
var figwheel$client$file_reloading$state_machine__22857__auto____0 = (function (){
var statearr_28715 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28715[(0)] = figwheel$client$file_reloading$state_machine__22857__auto__);

(statearr_28715[(1)] = (1));

return statearr_28715;
});
var figwheel$client$file_reloading$state_machine__22857__auto____1 = (function (state_28691){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_28691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e28716){if((e28716 instanceof Object)){
var ex__22860__auto__ = e28716;
var statearr_28717_28737 = state_28691;
(statearr_28717_28737[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28738 = state_28691;
state_28691 = G__28738;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22857__auto__ = function(state_28691){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22857__auto____1.call(this,state_28691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22857__auto____0;
figwheel$client$file_reloading$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22857__auto____1;
return figwheel$client$file_reloading$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_28718 = f__22952__auto__.call(null);
(statearr_28718[(6)] = c__22951__auto__);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28740 = arguments.length;
switch (G__28740) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28742,callback){
var map__28743 = p__28742;
var map__28743__$1 = (((((!((map__28743 == null))))?(((((map__28743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28743):map__28743);
var file_msg = map__28743__$1;
var namespace = cljs.core.get.call(null,map__28743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28743,map__28743__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28743,map__28743__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28745){
var map__28746 = p__28745;
var map__28746__$1 = (((((!((map__28746 == null))))?(((((map__28746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);
var file_msg = map__28746__$1;
var namespace = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28748){
var map__28749 = p__28748;
var map__28749__$1 = (((((!((map__28749 == null))))?(((((map__28749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28749):map__28749);
var file_msg = map__28749__$1;
var namespace = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28751,callback){
var map__28752 = p__28751;
var map__28752__$1 = (((((!((map__28752 == null))))?(((((map__28752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);
var file_msg = map__28752__$1;
var request_url = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22951__auto___28802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___28802,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___28802,out){
return (function (state_28787){
var state_val_28788 = (state_28787[(1)]);
if((state_val_28788 === (1))){
var inst_28761 = cljs.core.seq.call(null,files);
var inst_28762 = cljs.core.first.call(null,inst_28761);
var inst_28763 = cljs.core.next.call(null,inst_28761);
var inst_28764 = files;
var state_28787__$1 = (function (){var statearr_28789 = state_28787;
(statearr_28789[(7)] = inst_28764);

(statearr_28789[(8)] = inst_28762);

(statearr_28789[(9)] = inst_28763);

return statearr_28789;
})();
var statearr_28790_28803 = state_28787__$1;
(statearr_28790_28803[(2)] = null);

(statearr_28790_28803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (2))){
var inst_28764 = (state_28787[(7)]);
var inst_28770 = (state_28787[(10)]);
var inst_28769 = cljs.core.seq.call(null,inst_28764);
var inst_28770__$1 = cljs.core.first.call(null,inst_28769);
var inst_28771 = cljs.core.next.call(null,inst_28769);
var inst_28772 = (inst_28770__$1 == null);
var inst_28773 = cljs.core.not.call(null,inst_28772);
var state_28787__$1 = (function (){var statearr_28791 = state_28787;
(statearr_28791[(10)] = inst_28770__$1);

(statearr_28791[(11)] = inst_28771);

return statearr_28791;
})();
if(inst_28773){
var statearr_28792_28804 = state_28787__$1;
(statearr_28792_28804[(1)] = (4));

} else {
var statearr_28793_28805 = state_28787__$1;
(statearr_28793_28805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (3))){
var inst_28785 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28787__$1,inst_28785);
} else {
if((state_val_28788 === (4))){
var inst_28770 = (state_28787[(10)]);
var inst_28775 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28770);
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28787__$1,(7),inst_28775);
} else {
if((state_val_28788 === (5))){
var inst_28781 = cljs.core.async.close_BANG_.call(null,out);
var state_28787__$1 = state_28787;
var statearr_28794_28806 = state_28787__$1;
(statearr_28794_28806[(2)] = inst_28781);

(statearr_28794_28806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (6))){
var inst_28783 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
var statearr_28795_28807 = state_28787__$1;
(statearr_28795_28807[(2)] = inst_28783);

(statearr_28795_28807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (7))){
var inst_28771 = (state_28787[(11)]);
var inst_28777 = (state_28787[(2)]);
var inst_28778 = cljs.core.async.put_BANG_.call(null,out,inst_28777);
var inst_28764 = inst_28771;
var state_28787__$1 = (function (){var statearr_28796 = state_28787;
(statearr_28796[(7)] = inst_28764);

(statearr_28796[(12)] = inst_28778);

return statearr_28796;
})();
var statearr_28797_28808 = state_28787__$1;
(statearr_28797_28808[(2)] = null);

(statearr_28797_28808[(1)] = (2));


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
});})(c__22951__auto___28802,out))
;
return ((function (switch__22856__auto__,c__22951__auto___28802,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____0 = (function (){
var statearr_28798 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28798[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__);

(statearr_28798[(1)] = (1));

return statearr_28798;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____1 = (function (state_28787){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_28787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e28799){if((e28799 instanceof Object)){
var ex__22860__auto__ = e28799;
var statearr_28800_28809 = state_28787;
(statearr_28800_28809[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28810 = state_28787;
state_28787 = G__28810;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__ = function(state_28787){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____1.call(this,state_28787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___28802,out))
})();
var state__22953__auto__ = (function (){var statearr_28801 = f__22952__auto__.call(null);
(statearr_28801[(6)] = c__22951__auto___28802);

return statearr_28801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___28802,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28811,opts){
var map__28812 = p__28811;
var map__28812__$1 = (((((!((map__28812 == null))))?(((((map__28812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28812):map__28812);
var eval_body = cljs.core.get.call(null,map__28812__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28814){var e = e28814;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28815_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28815_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28816){
var vec__28817 = p__28816;
var k = cljs.core.nth.call(null,vec__28817,(0),null);
var v = cljs.core.nth.call(null,vec__28817,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28820){
var vec__28821 = p__28820;
var k = cljs.core.nth.call(null,vec__28821,(0),null);
var v = cljs.core.nth.call(null,vec__28821,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28827,p__28828){
var map__28829 = p__28827;
var map__28829__$1 = (((((!((map__28829 == null))))?(((((map__28829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28829):map__28829);
var opts = map__28829__$1;
var before_jsload = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28830 = p__28828;
var map__28830__$1 = (((((!((map__28830 == null))))?(((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var msg = map__28830__$1;
var files = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (7))){
var inst_28844 = (state_28984[(7)]);
var inst_28845 = (state_28984[(8)]);
var inst_28847 = (state_28984[(9)]);
var inst_28846 = (state_28984[(10)]);
var inst_28852 = cljs.core._nth.call(null,inst_28845,inst_28847);
var inst_28853 = figwheel.client.file_reloading.eval_body.call(null,inst_28852,opts);
var inst_28854 = (inst_28847 + (1));
var tmp28986 = inst_28844;
var tmp28987 = inst_28845;
var tmp28988 = inst_28846;
var inst_28844__$1 = tmp28986;
var inst_28845__$1 = tmp28987;
var inst_28846__$1 = tmp28988;
var inst_28847__$1 = inst_28854;
var state_28984__$1 = (function (){var statearr_28989 = state_28984;
(statearr_28989[(7)] = inst_28844__$1);

(statearr_28989[(11)] = inst_28853);

(statearr_28989[(8)] = inst_28845__$1);

(statearr_28989[(9)] = inst_28847__$1);

(statearr_28989[(10)] = inst_28846__$1);

return statearr_28989;
})();
var statearr_28990_29073 = state_28984__$1;
(statearr_28990_29073[(2)] = null);

(statearr_28990_29073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (20))){
var inst_28887 = (state_28984[(12)]);
var inst_28895 = figwheel.client.file_reloading.sort_files.call(null,inst_28887);
var state_28984__$1 = state_28984;
var statearr_28991_29074 = state_28984__$1;
(statearr_28991_29074[(2)] = inst_28895);

(statearr_28991_29074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (27))){
var state_28984__$1 = state_28984;
var statearr_28992_29075 = state_28984__$1;
(statearr_28992_29075[(2)] = null);

(statearr_28992_29075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (1))){
var inst_28836 = (state_28984[(13)]);
var inst_28833 = before_jsload.call(null,files);
var inst_28834 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28835 = (function (){return ((function (inst_28836,inst_28833,inst_28834,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28824_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28824_SHARP_);
});
;})(inst_28836,inst_28833,inst_28834,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28836__$1 = cljs.core.filter.call(null,inst_28835,files);
var inst_28837 = cljs.core.not_empty.call(null,inst_28836__$1);
var state_28984__$1 = (function (){var statearr_28993 = state_28984;
(statearr_28993[(13)] = inst_28836__$1);

(statearr_28993[(14)] = inst_28834);

(statearr_28993[(15)] = inst_28833);

return statearr_28993;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28994_29076 = state_28984__$1;
(statearr_28994_29076[(1)] = (2));

} else {
var statearr_28995_29077 = state_28984__$1;
(statearr_28995_29077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (24))){
var state_28984__$1 = state_28984;
var statearr_28996_29078 = state_28984__$1;
(statearr_28996_29078[(2)] = null);

(statearr_28996_29078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (39))){
var inst_28937 = (state_28984[(16)]);
var state_28984__$1 = state_28984;
var statearr_28997_29079 = state_28984__$1;
(statearr_28997_29079[(2)] = inst_28937);

(statearr_28997_29079[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (46))){
var inst_28979 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28998_29080 = state_28984__$1;
(statearr_28998_29080[(2)] = inst_28979);

(statearr_28998_29080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (4))){
var inst_28881 = (state_28984[(2)]);
var inst_28882 = cljs.core.List.EMPTY;
var inst_28883 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28882);
var inst_28884 = (function (){return ((function (inst_28881,inst_28882,inst_28883,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28825_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28825_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28825_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28825_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28881,inst_28882,inst_28883,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28885 = cljs.core.filter.call(null,inst_28884,files);
var inst_28886 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28887 = cljs.core.concat.call(null,inst_28885,inst_28886);
var state_28984__$1 = (function (){var statearr_28999 = state_28984;
(statearr_28999[(17)] = inst_28883);

(statearr_28999[(18)] = inst_28881);

(statearr_28999[(12)] = inst_28887);

return statearr_28999;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29000_29081 = state_28984__$1;
(statearr_29000_29081[(1)] = (16));

} else {
var statearr_29001_29082 = state_28984__$1;
(statearr_29001_29082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (15))){
var inst_28871 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_29002_29083 = state_28984__$1;
(statearr_29002_29083[(2)] = inst_28871);

(statearr_29002_29083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (21))){
var inst_28897 = (state_28984[(19)]);
var inst_28897__$1 = (state_28984[(2)]);
var inst_28898 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28897__$1);
var state_28984__$1 = (function (){var statearr_29003 = state_28984;
(statearr_29003[(19)] = inst_28897__$1);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(22),inst_28898);
} else {
if((state_val_28985 === (31))){
var inst_28982 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28984__$1,inst_28982);
} else {
if((state_val_28985 === (32))){
var inst_28937 = (state_28984[(16)]);
var inst_28942 = inst_28937.cljs$lang$protocol_mask$partition0$;
var inst_28943 = (inst_28942 & (64));
var inst_28944 = inst_28937.cljs$core$ISeq$;
var inst_28945 = (cljs.core.PROTOCOL_SENTINEL === inst_28944);
var inst_28946 = ((inst_28943) || (inst_28945));
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28946)){
var statearr_29004_29084 = state_28984__$1;
(statearr_29004_29084[(1)] = (35));

} else {
var statearr_29005_29085 = state_28984__$1;
(statearr_29005_29085[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (40))){
var inst_28959 = (state_28984[(20)]);
var inst_28958 = (state_28984[(2)]);
var inst_28959__$1 = cljs.core.get.call(null,inst_28958,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28960 = cljs.core.get.call(null,inst_28958,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28961 = cljs.core.not_empty.call(null,inst_28959__$1);
var state_28984__$1 = (function (){var statearr_29006 = state_28984;
(statearr_29006[(21)] = inst_28960);

(statearr_29006[(20)] = inst_28959__$1);

return statearr_29006;
})();
if(cljs.core.truth_(inst_28961)){
var statearr_29007_29086 = state_28984__$1;
(statearr_29007_29086[(1)] = (41));

} else {
var statearr_29008_29087 = state_28984__$1;
(statearr_29008_29087[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (33))){
var state_28984__$1 = state_28984;
var statearr_29009_29088 = state_28984__$1;
(statearr_29009_29088[(2)] = false);

(statearr_29009_29088[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (13))){
var inst_28857 = (state_28984[(22)]);
var inst_28861 = cljs.core.chunk_first.call(null,inst_28857);
var inst_28862 = cljs.core.chunk_rest.call(null,inst_28857);
var inst_28863 = cljs.core.count.call(null,inst_28861);
var inst_28844 = inst_28862;
var inst_28845 = inst_28861;
var inst_28846 = inst_28863;
var inst_28847 = (0);
var state_28984__$1 = (function (){var statearr_29010 = state_28984;
(statearr_29010[(7)] = inst_28844);

(statearr_29010[(8)] = inst_28845);

(statearr_29010[(9)] = inst_28847);

(statearr_29010[(10)] = inst_28846);

return statearr_29010;
})();
var statearr_29011_29089 = state_28984__$1;
(statearr_29011_29089[(2)] = null);

(statearr_29011_29089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (22))){
var inst_28897 = (state_28984[(19)]);
var inst_28900 = (state_28984[(23)]);
var inst_28905 = (state_28984[(24)]);
var inst_28901 = (state_28984[(25)]);
var inst_28900__$1 = (state_28984[(2)]);
var inst_28901__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28900__$1);
var inst_28902 = (function (){var all_files = inst_28897;
var res_SINGLEQUOTE_ = inst_28900__$1;
var res = inst_28901__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28897,inst_28900,inst_28905,inst_28901,inst_28900__$1,inst_28901__$1,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28826_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28826_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28897,inst_28900,inst_28905,inst_28901,inst_28900__$1,inst_28901__$1,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28903 = cljs.core.filter.call(null,inst_28902,inst_28900__$1);
var inst_28904 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28905__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28904);
var inst_28906 = cljs.core.not_empty.call(null,inst_28905__$1);
var state_28984__$1 = (function (){var statearr_29012 = state_28984;
(statearr_29012[(26)] = inst_28903);

(statearr_29012[(23)] = inst_28900__$1);

(statearr_29012[(24)] = inst_28905__$1);

(statearr_29012[(25)] = inst_28901__$1);

return statearr_29012;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_29013_29090 = state_28984__$1;
(statearr_29013_29090[(1)] = (23));

} else {
var statearr_29014_29091 = state_28984__$1;
(statearr_29014_29091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (36))){
var state_28984__$1 = state_28984;
var statearr_29015_29092 = state_28984__$1;
(statearr_29015_29092[(2)] = false);

(statearr_29015_29092[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (41))){
var inst_28959 = (state_28984[(20)]);
var inst_28963 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28964 = cljs.core.map.call(null,inst_28963,inst_28959);
var inst_28965 = cljs.core.pr_str.call(null,inst_28964);
var inst_28966 = ["figwheel-no-load meta-data: ",inst_28965].join('');
var inst_28967 = figwheel.client.utils.log.call(null,inst_28966);
var state_28984__$1 = state_28984;
var statearr_29016_29093 = state_28984__$1;
(statearr_29016_29093[(2)] = inst_28967);

(statearr_29016_29093[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (43))){
var inst_28960 = (state_28984[(21)]);
var inst_28970 = (state_28984[(2)]);
var inst_28971 = cljs.core.not_empty.call(null,inst_28960);
var state_28984__$1 = (function (){var statearr_29017 = state_28984;
(statearr_29017[(27)] = inst_28970);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28971)){
var statearr_29018_29094 = state_28984__$1;
(statearr_29018_29094[(1)] = (44));

} else {
var statearr_29019_29095 = state_28984__$1;
(statearr_29019_29095[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (29))){
var inst_28897 = (state_28984[(19)]);
var inst_28903 = (state_28984[(26)]);
var inst_28900 = (state_28984[(23)]);
var inst_28905 = (state_28984[(24)]);
var inst_28937 = (state_28984[(16)]);
var inst_28901 = (state_28984[(25)]);
var inst_28933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28936 = (function (){var all_files = inst_28897;
var res_SINGLEQUOTE_ = inst_28900;
var res = inst_28901;
var files_not_loaded = inst_28903;
var dependencies_that_loaded = inst_28905;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28937,inst_28901,inst_28933,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28935){
var map__29020 = p__28935;
var map__29020__$1 = (((((!((map__29020 == null))))?(((((map__29020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29020):map__29020);
var namespace = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28937,inst_28901,inst_28933,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28937__$1 = cljs.core.group_by.call(null,inst_28936,inst_28903);
var inst_28939 = (inst_28937__$1 == null);
var inst_28940 = cljs.core.not.call(null,inst_28939);
var state_28984__$1 = (function (){var statearr_29022 = state_28984;
(statearr_29022[(28)] = inst_28933);

(statearr_29022[(16)] = inst_28937__$1);

return statearr_29022;
})();
if(inst_28940){
var statearr_29023_29096 = state_28984__$1;
(statearr_29023_29096[(1)] = (32));

} else {
var statearr_29024_29097 = state_28984__$1;
(statearr_29024_29097[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (44))){
var inst_28960 = (state_28984[(21)]);
var inst_28973 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28960);
var inst_28974 = cljs.core.pr_str.call(null,inst_28973);
var inst_28975 = ["not required: ",inst_28974].join('');
var inst_28976 = figwheel.client.utils.log.call(null,inst_28975);
var state_28984__$1 = state_28984;
var statearr_29025_29098 = state_28984__$1;
(statearr_29025_29098[(2)] = inst_28976);

(statearr_29025_29098[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (6))){
var inst_28878 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_29026_29099 = state_28984__$1;
(statearr_29026_29099[(2)] = inst_28878);

(statearr_29026_29099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (28))){
var inst_28903 = (state_28984[(26)]);
var inst_28930 = (state_28984[(2)]);
var inst_28931 = cljs.core.not_empty.call(null,inst_28903);
var state_28984__$1 = (function (){var statearr_29027 = state_28984;
(statearr_29027[(29)] = inst_28930);

return statearr_29027;
})();
if(cljs.core.truth_(inst_28931)){
var statearr_29028_29100 = state_28984__$1;
(statearr_29028_29100[(1)] = (29));

} else {
var statearr_29029_29101 = state_28984__$1;
(statearr_29029_29101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (25))){
var inst_28901 = (state_28984[(25)]);
var inst_28917 = (state_28984[(2)]);
var inst_28918 = cljs.core.not_empty.call(null,inst_28901);
var state_28984__$1 = (function (){var statearr_29030 = state_28984;
(statearr_29030[(30)] = inst_28917);

return statearr_29030;
})();
if(cljs.core.truth_(inst_28918)){
var statearr_29031_29102 = state_28984__$1;
(statearr_29031_29102[(1)] = (26));

} else {
var statearr_29032_29103 = state_28984__$1;
(statearr_29032_29103[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (34))){
var inst_28953 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28953)){
var statearr_29033_29104 = state_28984__$1;
(statearr_29033_29104[(1)] = (38));

} else {
var statearr_29034_29105 = state_28984__$1;
(statearr_29034_29105[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (17))){
var state_28984__$1 = state_28984;
var statearr_29035_29106 = state_28984__$1;
(statearr_29035_29106[(2)] = recompile_dependents);

(statearr_29035_29106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (3))){
var state_28984__$1 = state_28984;
var statearr_29036_29107 = state_28984__$1;
(statearr_29036_29107[(2)] = null);

(statearr_29036_29107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (12))){
var inst_28874 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_29037_29108 = state_28984__$1;
(statearr_29037_29108[(2)] = inst_28874);

(statearr_29037_29108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (2))){
var inst_28836 = (state_28984[(13)]);
var inst_28843 = cljs.core.seq.call(null,inst_28836);
var inst_28844 = inst_28843;
var inst_28845 = null;
var inst_28846 = (0);
var inst_28847 = (0);
var state_28984__$1 = (function (){var statearr_29038 = state_28984;
(statearr_29038[(7)] = inst_28844);

(statearr_29038[(8)] = inst_28845);

(statearr_29038[(9)] = inst_28847);

(statearr_29038[(10)] = inst_28846);

return statearr_29038;
})();
var statearr_29039_29109 = state_28984__$1;
(statearr_29039_29109[(2)] = null);

(statearr_29039_29109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (23))){
var inst_28897 = (state_28984[(19)]);
var inst_28903 = (state_28984[(26)]);
var inst_28900 = (state_28984[(23)]);
var inst_28905 = (state_28984[(24)]);
var inst_28901 = (state_28984[(25)]);
var inst_28908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28910 = (function (){var all_files = inst_28897;
var res_SINGLEQUOTE_ = inst_28900;
var res = inst_28901;
var files_not_loaded = inst_28903;
var dependencies_that_loaded = inst_28905;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28901,inst_28908,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28909){
var map__29040 = p__28909;
var map__29040__$1 = (((((!((map__29040 == null))))?(((((map__29040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);
var request_url = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28901,inst_28908,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28911 = cljs.core.reverse.call(null,inst_28905);
var inst_28912 = cljs.core.map.call(null,inst_28910,inst_28911);
var inst_28913 = cljs.core.pr_str.call(null,inst_28912);
var inst_28914 = figwheel.client.utils.log.call(null,inst_28913);
var state_28984__$1 = (function (){var statearr_29042 = state_28984;
(statearr_29042[(31)] = inst_28908);

return statearr_29042;
})();
var statearr_29043_29110 = state_28984__$1;
(statearr_29043_29110[(2)] = inst_28914);

(statearr_29043_29110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (35))){
var state_28984__$1 = state_28984;
var statearr_29044_29111 = state_28984__$1;
(statearr_29044_29111[(2)] = true);

(statearr_29044_29111[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (19))){
var inst_28887 = (state_28984[(12)]);
var inst_28893 = figwheel.client.file_reloading.expand_files.call(null,inst_28887);
var state_28984__$1 = state_28984;
var statearr_29045_29112 = state_28984__$1;
(statearr_29045_29112[(2)] = inst_28893);

(statearr_29045_29112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (11))){
var state_28984__$1 = state_28984;
var statearr_29046_29113 = state_28984__$1;
(statearr_29046_29113[(2)] = null);

(statearr_29046_29113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (9))){
var inst_28876 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_29047_29114 = state_28984__$1;
(statearr_29047_29114[(2)] = inst_28876);

(statearr_29047_29114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (5))){
var inst_28847 = (state_28984[(9)]);
var inst_28846 = (state_28984[(10)]);
var inst_28849 = (inst_28847 < inst_28846);
var inst_28850 = inst_28849;
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28850)){
var statearr_29048_29115 = state_28984__$1;
(statearr_29048_29115[(1)] = (7));

} else {
var statearr_29049_29116 = state_28984__$1;
(statearr_29049_29116[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (14))){
var inst_28857 = (state_28984[(22)]);
var inst_28866 = cljs.core.first.call(null,inst_28857);
var inst_28867 = figwheel.client.file_reloading.eval_body.call(null,inst_28866,opts);
var inst_28868 = cljs.core.next.call(null,inst_28857);
var inst_28844 = inst_28868;
var inst_28845 = null;
var inst_28846 = (0);
var inst_28847 = (0);
var state_28984__$1 = (function (){var statearr_29050 = state_28984;
(statearr_29050[(7)] = inst_28844);

(statearr_29050[(32)] = inst_28867);

(statearr_29050[(8)] = inst_28845);

(statearr_29050[(9)] = inst_28847);

(statearr_29050[(10)] = inst_28846);

return statearr_29050;
})();
var statearr_29051_29117 = state_28984__$1;
(statearr_29051_29117[(2)] = null);

(statearr_29051_29117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (45))){
var state_28984__$1 = state_28984;
var statearr_29052_29118 = state_28984__$1;
(statearr_29052_29118[(2)] = null);

(statearr_29052_29118[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (26))){
var inst_28897 = (state_28984[(19)]);
var inst_28903 = (state_28984[(26)]);
var inst_28900 = (state_28984[(23)]);
var inst_28905 = (state_28984[(24)]);
var inst_28901 = (state_28984[(25)]);
var inst_28920 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28922 = (function (){var all_files = inst_28897;
var res_SINGLEQUOTE_ = inst_28900;
var res = inst_28901;
var files_not_loaded = inst_28903;
var dependencies_that_loaded = inst_28905;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28901,inst_28920,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28921){
var map__29053 = p__28921;
var map__29053__$1 = (((((!((map__29053 == null))))?(((((map__29053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29053):map__29053);
var namespace = cljs.core.get.call(null,map__29053__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28901,inst_28920,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28923 = cljs.core.map.call(null,inst_28922,inst_28901);
var inst_28924 = cljs.core.pr_str.call(null,inst_28923);
var inst_28925 = figwheel.client.utils.log.call(null,inst_28924);
var inst_28926 = (function (){var all_files = inst_28897;
var res_SINGLEQUOTE_ = inst_28900;
var res = inst_28901;
var files_not_loaded = inst_28903;
var dependencies_that_loaded = inst_28905;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28901,inst_28920,inst_28922,inst_28923,inst_28924,inst_28925,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28897,inst_28903,inst_28900,inst_28905,inst_28901,inst_28920,inst_28922,inst_28923,inst_28924,inst_28925,state_val_28985,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28927 = setTimeout(inst_28926,(10));
var state_28984__$1 = (function (){var statearr_29055 = state_28984;
(statearr_29055[(33)] = inst_28920);

(statearr_29055[(34)] = inst_28925);

return statearr_29055;
})();
var statearr_29056_29119 = state_28984__$1;
(statearr_29056_29119[(2)] = inst_28927);

(statearr_29056_29119[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (16))){
var state_28984__$1 = state_28984;
var statearr_29057_29120 = state_28984__$1;
(statearr_29057_29120[(2)] = reload_dependents);

(statearr_29057_29120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (38))){
var inst_28937 = (state_28984[(16)]);
var inst_28955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28937);
var state_28984__$1 = state_28984;
var statearr_29058_29121 = state_28984__$1;
(statearr_29058_29121[(2)] = inst_28955);

(statearr_29058_29121[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (30))){
var state_28984__$1 = state_28984;
var statearr_29059_29122 = state_28984__$1;
(statearr_29059_29122[(2)] = null);

(statearr_29059_29122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (10))){
var inst_28857 = (state_28984[(22)]);
var inst_28859 = cljs.core.chunked_seq_QMARK_.call(null,inst_28857);
var state_28984__$1 = state_28984;
if(inst_28859){
var statearr_29060_29123 = state_28984__$1;
(statearr_29060_29123[(1)] = (13));

} else {
var statearr_29061_29124 = state_28984__$1;
(statearr_29061_29124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (18))){
var inst_28891 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28891)){
var statearr_29062_29125 = state_28984__$1;
(statearr_29062_29125[(1)] = (19));

} else {
var statearr_29063_29126 = state_28984__$1;
(statearr_29063_29126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (42))){
var state_28984__$1 = state_28984;
var statearr_29064_29127 = state_28984__$1;
(statearr_29064_29127[(2)] = null);

(statearr_29064_29127[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (37))){
var inst_28950 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_29065_29128 = state_28984__$1;
(statearr_29065_29128[(2)] = inst_28950);

(statearr_29065_29128[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (8))){
var inst_28844 = (state_28984[(7)]);
var inst_28857 = (state_28984[(22)]);
var inst_28857__$1 = cljs.core.seq.call(null,inst_28844);
var state_28984__$1 = (function (){var statearr_29066 = state_28984;
(statearr_29066[(22)] = inst_28857__$1);

return statearr_29066;
})();
if(inst_28857__$1){
var statearr_29067_29129 = state_28984__$1;
(statearr_29067_29129[(1)] = (10));

} else {
var statearr_29068_29130 = state_28984__$1;
(statearr_29068_29130[(1)] = (11));

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
});})(c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22856__auto__,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____0 = (function (){
var statearr_29069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29069[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__);

(statearr_29069[(1)] = (1));

return statearr_29069;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____1 = (function (state_28984){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_28984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e29070){if((e29070 instanceof Object)){
var ex__22860__auto__ = e29070;
var statearr_29071_29131 = state_28984;
(statearr_29071_29131[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29132 = state_28984;
state_28984 = G__29132;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22953__auto__ = (function (){var statearr_29072 = f__22952__auto__.call(null);
(statearr_29072[(6)] = c__22951__auto__);

return statearr_29072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,map__28829,map__28829__$1,opts,before_jsload,on_jsload,reload_dependents,map__28830,map__28830__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22951__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29135,link){
var map__29136 = p__29135;
var map__29136__$1 = (((((!((map__29136 == null))))?(((((map__29136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29136):map__29136);
var file = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29136,map__29136__$1,file){
return (function (p1__29133_SHARP_,p2__29134_SHARP_){
if(cljs.core._EQ_.call(null,p1__29133_SHARP_,p2__29134_SHARP_)){
return p1__29133_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29136,map__29136__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29139){
var map__29140 = p__29139;
var map__29140__$1 = (((((!((map__29140 == null))))?(((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var match_length = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29138_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29138_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29142_SHARP_,p2__29143_SHARP_){
return cljs.core.assoc.call(null,p1__29142_SHARP_,cljs.core.get.call(null,p2__29143_SHARP_,key),p2__29143_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29144 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29144);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29144);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29145,p__29146){
var map__29147 = p__29145;
var map__29147__$1 = (((((!((map__29147 == null))))?(((((map__29147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29147):map__29147);
var on_cssload = cljs.core.get.call(null,map__29147__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29148 = p__29146;
var map__29148__$1 = (((((!((map__29148 == null))))?(((((map__29148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29148):map__29148);
var files_msg = map__29148__$1;
var files = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1582560150922
