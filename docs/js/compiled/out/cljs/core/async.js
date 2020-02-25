// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23011 = arguments.length;
switch (G__23011) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23012 = (function (f,blockable,meta23013){
this.f = f;
this.blockable = blockable;
this.meta23013 = meta23013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23014,meta23013__$1){
var self__ = this;
var _23014__$1 = this;
return (new cljs.core.async.t_cljs$core$async23012(self__.f,self__.blockable,meta23013__$1));
});

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23014){
var self__ = this;
var _23014__$1 = this;
return self__.meta23013;
});

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23013","meta23013",-386016568,null)], null);
});

cljs.core.async.t_cljs$core$async23012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23012";

cljs.core.async.t_cljs$core$async23012.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23012");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23012.
 */
cljs.core.async.__GT_t_cljs$core$async23012 = (function cljs$core$async$__GT_t_cljs$core$async23012(f__$1,blockable__$1,meta23013){
return (new cljs.core.async.t_cljs$core$async23012(f__$1,blockable__$1,meta23013));
});

}

return (new cljs.core.async.t_cljs$core$async23012(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23018 = arguments.length;
switch (G__23018) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23021 = arguments.length;
switch (G__23021) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23024 = arguments.length;
switch (G__23024) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23026 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23026);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23026,ret){
return (function (){
return fn1.call(null,val_23026);
});})(val_23026,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23028 = arguments.length;
switch (G__23028) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23030 = n;
var x_23031 = (0);
while(true){
if((x_23031 < n__4607__auto___23030)){
(a[x_23031] = x_23031);

var G__23032 = (x_23031 + (1));
x_23031 = G__23032;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23033 = (function (flag,meta23034){
this.flag = flag;
this.meta23034 = meta23034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23035,meta23034__$1){
var self__ = this;
var _23035__$1 = this;
return (new cljs.core.async.t_cljs$core$async23033(self__.flag,meta23034__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23035){
var self__ = this;
var _23035__$1 = this;
return self__.meta23034;
});})(flag))
;

cljs.core.async.t_cljs$core$async23033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23033.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23034","meta23034",819171883,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23033";

cljs.core.async.t_cljs$core$async23033.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23033");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23033.
 */
cljs.core.async.__GT_t_cljs$core$async23033 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23033(flag__$1,meta23034){
return (new cljs.core.async.t_cljs$core$async23033(flag__$1,meta23034));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23033(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23036 = (function (flag,cb,meta23037){
this.flag = flag;
this.cb = cb;
this.meta23037 = meta23037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23038,meta23037__$1){
var self__ = this;
var _23038__$1 = this;
return (new cljs.core.async.t_cljs$core$async23036(self__.flag,self__.cb,meta23037__$1));
});

cljs.core.async.t_cljs$core$async23036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23038){
var self__ = this;
var _23038__$1 = this;
return self__.meta23037;
});

cljs.core.async.t_cljs$core$async23036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23037","meta23037",-480048053,null)], null);
});

cljs.core.async.t_cljs$core$async23036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23036";

cljs.core.async.t_cljs$core$async23036.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23036");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23036.
 */
cljs.core.async.__GT_t_cljs$core$async23036 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23036(flag__$1,cb__$1,meta23037){
return (new cljs.core.async.t_cljs$core$async23036(flag__$1,cb__$1,meta23037));
});

}

return (new cljs.core.async.t_cljs$core$async23036(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23039_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23039_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23040_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23041 = (i + (1));
i = G__23041;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23047 = arguments.length;
var i__4731__auto___23048 = (0);
while(true){
if((i__4731__auto___23048 < len__4730__auto___23047)){
args__4736__auto__.push((arguments[i__4731__auto___23048]));

var G__23049 = (i__4731__auto___23048 + (1));
i__4731__auto___23048 = G__23049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23044){
var map__23045 = p__23044;
var map__23045__$1 = (((((!((map__23045 == null))))?(((((map__23045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23045):map__23045);
var opts = map__23045__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23042){
var G__23043 = cljs.core.first.call(null,seq23042);
var seq23042__$1 = cljs.core.next.call(null,seq23042);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23043,seq23042__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23051 = arguments.length;
switch (G__23051) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22951__auto___23097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___23097){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___23097){
return (function (state_23075){
var state_val_23076 = (state_23075[(1)]);
if((state_val_23076 === (7))){
var inst_23071 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23077_23098 = state_23075__$1;
(statearr_23077_23098[(2)] = inst_23071);

(statearr_23077_23098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (1))){
var state_23075__$1 = state_23075;
var statearr_23078_23099 = state_23075__$1;
(statearr_23078_23099[(2)] = null);

(statearr_23078_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (4))){
var inst_23054 = (state_23075[(7)]);
var inst_23054__$1 = (state_23075[(2)]);
var inst_23055 = (inst_23054__$1 == null);
var state_23075__$1 = (function (){var statearr_23079 = state_23075;
(statearr_23079[(7)] = inst_23054__$1);

return statearr_23079;
})();
if(cljs.core.truth_(inst_23055)){
var statearr_23080_23100 = state_23075__$1;
(statearr_23080_23100[(1)] = (5));

} else {
var statearr_23081_23101 = state_23075__$1;
(statearr_23081_23101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (13))){
var state_23075__$1 = state_23075;
var statearr_23082_23102 = state_23075__$1;
(statearr_23082_23102[(2)] = null);

(statearr_23082_23102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (6))){
var inst_23054 = (state_23075[(7)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23075__$1,(11),to,inst_23054);
} else {
if((state_val_23076 === (3))){
var inst_23073 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23075__$1,inst_23073);
} else {
if((state_val_23076 === (12))){
var state_23075__$1 = state_23075;
var statearr_23083_23103 = state_23075__$1;
(statearr_23083_23103[(2)] = null);

(statearr_23083_23103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (2))){
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(4),from);
} else {
if((state_val_23076 === (11))){
var inst_23064 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
if(cljs.core.truth_(inst_23064)){
var statearr_23084_23104 = state_23075__$1;
(statearr_23084_23104[(1)] = (12));

} else {
var statearr_23085_23105 = state_23075__$1;
(statearr_23085_23105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (9))){
var state_23075__$1 = state_23075;
var statearr_23086_23106 = state_23075__$1;
(statearr_23086_23106[(2)] = null);

(statearr_23086_23106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (5))){
var state_23075__$1 = state_23075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23087_23107 = state_23075__$1;
(statearr_23087_23107[(1)] = (8));

} else {
var statearr_23088_23108 = state_23075__$1;
(statearr_23088_23108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (14))){
var inst_23069 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23089_23109 = state_23075__$1;
(statearr_23089_23109[(2)] = inst_23069);

(statearr_23089_23109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (10))){
var inst_23061 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23090_23110 = state_23075__$1;
(statearr_23090_23110[(2)] = inst_23061);

(statearr_23090_23110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (8))){
var inst_23058 = cljs.core.async.close_BANG_.call(null,to);
var state_23075__$1 = state_23075;
var statearr_23091_23111 = state_23075__$1;
(statearr_23091_23111[(2)] = inst_23058);

(statearr_23091_23111[(1)] = (10));


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
});})(c__22951__auto___23097))
;
return ((function (switch__22856__auto__,c__22951__auto___23097){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_23092 = [null,null,null,null,null,null,null,null];
(statearr_23092[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_23092[(1)] = (1));

return statearr_23092;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_23075){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23093){if((e23093 instanceof Object)){
var ex__22860__auto__ = e23093;
var statearr_23094_23112 = state_23075;
(statearr_23094_23112[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23113 = state_23075;
state_23075 = G__23113;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_23075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_23075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___23097))
})();
var state__22953__auto__ = (function (){var statearr_23095 = f__22952__auto__.call(null);
(statearr_23095[(6)] = c__22951__auto___23097);

return statearr_23095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___23097))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23114){
var vec__23115 = p__23114;
var v = cljs.core.nth.call(null,vec__23115,(0),null);
var p = cljs.core.nth.call(null,vec__23115,(1),null);
var job = vec__23115;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22951__auto___23286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___23286,res,vec__23115,v,p,job,jobs,results){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___23286,res,vec__23115,v,p,job,jobs,results){
return (function (state_23122){
var state_val_23123 = (state_23122[(1)]);
if((state_val_23123 === (1))){
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23122__$1,(2),res,v);
} else {
if((state_val_23123 === (2))){
var inst_23119 = (state_23122[(2)]);
var inst_23120 = cljs.core.async.close_BANG_.call(null,res);
var state_23122__$1 = (function (){var statearr_23124 = state_23122;
(statearr_23124[(7)] = inst_23119);

return statearr_23124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23122__$1,inst_23120);
} else {
return null;
}
}
});})(c__22951__auto___23286,res,vec__23115,v,p,job,jobs,results))
;
return ((function (switch__22856__auto__,c__22951__auto___23286,res,vec__23115,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0 = (function (){
var statearr_23125 = [null,null,null,null,null,null,null,null];
(statearr_23125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__);

(statearr_23125[(1)] = (1));

return statearr_23125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1 = (function (state_23122){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23126){if((e23126 instanceof Object)){
var ex__22860__auto__ = e23126;
var statearr_23127_23287 = state_23122;
(statearr_23127_23287[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23288 = state_23122;
state_23122 = G__23288;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___23286,res,vec__23115,v,p,job,jobs,results))
})();
var state__22953__auto__ = (function (){var statearr_23128 = f__22952__auto__.call(null);
(statearr_23128[(6)] = c__22951__auto___23286);

return statearr_23128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___23286,res,vec__23115,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23129){
var vec__23130 = p__23129;
var v = cljs.core.nth.call(null,vec__23130,(0),null);
var p = cljs.core.nth.call(null,vec__23130,(1),null);
var job = vec__23130;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23289 = n;
var __23290 = (0);
while(true){
if((__23290 < n__4607__auto___23289)){
var G__23133_23291 = type;
var G__23133_23292__$1 = (((G__23133_23291 instanceof cljs.core.Keyword))?G__23133_23291.fqn:null);
switch (G__23133_23292__$1) {
case "compute":
var c__22951__auto___23294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23290,c__22951__auto___23294,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (__23290,c__22951__auto___23294,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async){
return (function (state_23146){
var state_val_23147 = (state_23146[(1)]);
if((state_val_23147 === (1))){
var state_23146__$1 = state_23146;
var statearr_23148_23295 = state_23146__$1;
(statearr_23148_23295[(2)] = null);

(statearr_23148_23295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (2))){
var state_23146__$1 = state_23146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23146__$1,(4),jobs);
} else {
if((state_val_23147 === (3))){
var inst_23144 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23146__$1,inst_23144);
} else {
if((state_val_23147 === (4))){
var inst_23136 = (state_23146[(2)]);
var inst_23137 = process.call(null,inst_23136);
var state_23146__$1 = state_23146;
if(cljs.core.truth_(inst_23137)){
var statearr_23149_23296 = state_23146__$1;
(statearr_23149_23296[(1)] = (5));

} else {
var statearr_23150_23297 = state_23146__$1;
(statearr_23150_23297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (5))){
var state_23146__$1 = state_23146;
var statearr_23151_23298 = state_23146__$1;
(statearr_23151_23298[(2)] = null);

(statearr_23151_23298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (6))){
var state_23146__$1 = state_23146;
var statearr_23152_23299 = state_23146__$1;
(statearr_23152_23299[(2)] = null);

(statearr_23152_23299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (7))){
var inst_23142 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
var statearr_23153_23300 = state_23146__$1;
(statearr_23153_23300[(2)] = inst_23142);

(statearr_23153_23300[(1)] = (3));


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
});})(__23290,c__22951__auto___23294,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async))
;
return ((function (__23290,switch__22856__auto__,c__22951__auto___23294,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0 = (function (){
var statearr_23154 = [null,null,null,null,null,null,null];
(statearr_23154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__);

(statearr_23154[(1)] = (1));

return statearr_23154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1 = (function (state_23146){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23155){if((e23155 instanceof Object)){
var ex__22860__auto__ = e23155;
var statearr_23156_23301 = state_23146;
(statearr_23156_23301[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23302 = state_23146;
state_23146 = G__23302;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = function(state_23146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1.call(this,state_23146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__;
})()
;})(__23290,switch__22856__auto__,c__22951__auto___23294,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async))
})();
var state__22953__auto__ = (function (){var statearr_23157 = f__22952__auto__.call(null);
(statearr_23157[(6)] = c__22951__auto___23294);

return statearr_23157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(__23290,c__22951__auto___23294,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async))
);


break;
case "async":
var c__22951__auto___23303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23290,c__22951__auto___23303,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (__23290,c__22951__auto___23303,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async){
return (function (state_23170){
var state_val_23171 = (state_23170[(1)]);
if((state_val_23171 === (1))){
var state_23170__$1 = state_23170;
var statearr_23172_23304 = state_23170__$1;
(statearr_23172_23304[(2)] = null);

(statearr_23172_23304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (2))){
var state_23170__$1 = state_23170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23170__$1,(4),jobs);
} else {
if((state_val_23171 === (3))){
var inst_23168 = (state_23170[(2)]);
var state_23170__$1 = state_23170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23170__$1,inst_23168);
} else {
if((state_val_23171 === (4))){
var inst_23160 = (state_23170[(2)]);
var inst_23161 = async.call(null,inst_23160);
var state_23170__$1 = state_23170;
if(cljs.core.truth_(inst_23161)){
var statearr_23173_23305 = state_23170__$1;
(statearr_23173_23305[(1)] = (5));

} else {
var statearr_23174_23306 = state_23170__$1;
(statearr_23174_23306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (5))){
var state_23170__$1 = state_23170;
var statearr_23175_23307 = state_23170__$1;
(statearr_23175_23307[(2)] = null);

(statearr_23175_23307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (6))){
var state_23170__$1 = state_23170;
var statearr_23176_23308 = state_23170__$1;
(statearr_23176_23308[(2)] = null);

(statearr_23176_23308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (7))){
var inst_23166 = (state_23170[(2)]);
var state_23170__$1 = state_23170;
var statearr_23177_23309 = state_23170__$1;
(statearr_23177_23309[(2)] = inst_23166);

(statearr_23177_23309[(1)] = (3));


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
});})(__23290,c__22951__auto___23303,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async))
;
return ((function (__23290,switch__22856__auto__,c__22951__auto___23303,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0 = (function (){
var statearr_23178 = [null,null,null,null,null,null,null];
(statearr_23178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__);

(statearr_23178[(1)] = (1));

return statearr_23178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1 = (function (state_23170){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23179){if((e23179 instanceof Object)){
var ex__22860__auto__ = e23179;
var statearr_23180_23310 = state_23170;
(statearr_23180_23310[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23311 = state_23170;
state_23170 = G__23311;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = function(state_23170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1.call(this,state_23170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__;
})()
;})(__23290,switch__22856__auto__,c__22951__auto___23303,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async))
})();
var state__22953__auto__ = (function (){var statearr_23181 = f__22952__auto__.call(null);
(statearr_23181[(6)] = c__22951__auto___23303);

return statearr_23181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(__23290,c__22951__auto___23303,G__23133_23291,G__23133_23292__$1,n__4607__auto___23289,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23133_23292__$1)].join('')));

}

var G__23312 = (__23290 + (1));
__23290 = G__23312;
continue;
} else {
}
break;
}

var c__22951__auto___23313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___23313,jobs,results,process,async){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___23313,jobs,results,process,async){
return (function (state_23203){
var state_val_23204 = (state_23203[(1)]);
if((state_val_23204 === (7))){
var inst_23199 = (state_23203[(2)]);
var state_23203__$1 = state_23203;
var statearr_23205_23314 = state_23203__$1;
(statearr_23205_23314[(2)] = inst_23199);

(statearr_23205_23314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (1))){
var state_23203__$1 = state_23203;
var statearr_23206_23315 = state_23203__$1;
(statearr_23206_23315[(2)] = null);

(statearr_23206_23315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (4))){
var inst_23184 = (state_23203[(7)]);
var inst_23184__$1 = (state_23203[(2)]);
var inst_23185 = (inst_23184__$1 == null);
var state_23203__$1 = (function (){var statearr_23207 = state_23203;
(statearr_23207[(7)] = inst_23184__$1);

return statearr_23207;
})();
if(cljs.core.truth_(inst_23185)){
var statearr_23208_23316 = state_23203__$1;
(statearr_23208_23316[(1)] = (5));

} else {
var statearr_23209_23317 = state_23203__$1;
(statearr_23209_23317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (6))){
var inst_23189 = (state_23203[(8)]);
var inst_23184 = (state_23203[(7)]);
var inst_23189__$1 = cljs.core.async.chan.call(null,(1));
var inst_23190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23191 = [inst_23184,inst_23189__$1];
var inst_23192 = (new cljs.core.PersistentVector(null,2,(5),inst_23190,inst_23191,null));
var state_23203__$1 = (function (){var statearr_23210 = state_23203;
(statearr_23210[(8)] = inst_23189__$1);

return statearr_23210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23203__$1,(8),jobs,inst_23192);
} else {
if((state_val_23204 === (3))){
var inst_23201 = (state_23203[(2)]);
var state_23203__$1 = state_23203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23203__$1,inst_23201);
} else {
if((state_val_23204 === (2))){
var state_23203__$1 = state_23203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23203__$1,(4),from);
} else {
if((state_val_23204 === (9))){
var inst_23196 = (state_23203[(2)]);
var state_23203__$1 = (function (){var statearr_23211 = state_23203;
(statearr_23211[(9)] = inst_23196);

return statearr_23211;
})();
var statearr_23212_23318 = state_23203__$1;
(statearr_23212_23318[(2)] = null);

(statearr_23212_23318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (5))){
var inst_23187 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23203__$1 = state_23203;
var statearr_23213_23319 = state_23203__$1;
(statearr_23213_23319[(2)] = inst_23187);

(statearr_23213_23319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (8))){
var inst_23189 = (state_23203[(8)]);
var inst_23194 = (state_23203[(2)]);
var state_23203__$1 = (function (){var statearr_23214 = state_23203;
(statearr_23214[(10)] = inst_23194);

return statearr_23214;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23203__$1,(9),results,inst_23189);
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
});})(c__22951__auto___23313,jobs,results,process,async))
;
return ((function (switch__22856__auto__,c__22951__auto___23313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0 = (function (){
var statearr_23215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__);

(statearr_23215[(1)] = (1));

return statearr_23215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1 = (function (state_23203){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23216){if((e23216 instanceof Object)){
var ex__22860__auto__ = e23216;
var statearr_23217_23320 = state_23203;
(statearr_23217_23320[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23321 = state_23203;
state_23203 = G__23321;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = function(state_23203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1.call(this,state_23203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___23313,jobs,results,process,async))
})();
var state__22953__auto__ = (function (){var statearr_23218 = f__22952__auto__.call(null);
(statearr_23218[(6)] = c__22951__auto___23313);

return statearr_23218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___23313,jobs,results,process,async))
);


var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,jobs,results,process,async){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,jobs,results,process,async){
return (function (state_23256){
var state_val_23257 = (state_23256[(1)]);
if((state_val_23257 === (7))){
var inst_23252 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23258_23322 = state_23256__$1;
(statearr_23258_23322[(2)] = inst_23252);

(statearr_23258_23322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (20))){
var state_23256__$1 = state_23256;
var statearr_23259_23323 = state_23256__$1;
(statearr_23259_23323[(2)] = null);

(statearr_23259_23323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (1))){
var state_23256__$1 = state_23256;
var statearr_23260_23324 = state_23256__$1;
(statearr_23260_23324[(2)] = null);

(statearr_23260_23324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (4))){
var inst_23221 = (state_23256[(7)]);
var inst_23221__$1 = (state_23256[(2)]);
var inst_23222 = (inst_23221__$1 == null);
var state_23256__$1 = (function (){var statearr_23261 = state_23256;
(statearr_23261[(7)] = inst_23221__$1);

return statearr_23261;
})();
if(cljs.core.truth_(inst_23222)){
var statearr_23262_23325 = state_23256__$1;
(statearr_23262_23325[(1)] = (5));

} else {
var statearr_23263_23326 = state_23256__$1;
(statearr_23263_23326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (15))){
var inst_23234 = (state_23256[(8)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23256__$1,(18),to,inst_23234);
} else {
if((state_val_23257 === (21))){
var inst_23247 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23264_23327 = state_23256__$1;
(statearr_23264_23327[(2)] = inst_23247);

(statearr_23264_23327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (13))){
var inst_23249 = (state_23256[(2)]);
var state_23256__$1 = (function (){var statearr_23265 = state_23256;
(statearr_23265[(9)] = inst_23249);

return statearr_23265;
})();
var statearr_23266_23328 = state_23256__$1;
(statearr_23266_23328[(2)] = null);

(statearr_23266_23328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (6))){
var inst_23221 = (state_23256[(7)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(11),inst_23221);
} else {
if((state_val_23257 === (17))){
var inst_23242 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
if(cljs.core.truth_(inst_23242)){
var statearr_23267_23329 = state_23256__$1;
(statearr_23267_23329[(1)] = (19));

} else {
var statearr_23268_23330 = state_23256__$1;
(statearr_23268_23330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (3))){
var inst_23254 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23256__$1,inst_23254);
} else {
if((state_val_23257 === (12))){
var inst_23231 = (state_23256[(10)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(14),inst_23231);
} else {
if((state_val_23257 === (2))){
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(4),results);
} else {
if((state_val_23257 === (19))){
var state_23256__$1 = state_23256;
var statearr_23269_23331 = state_23256__$1;
(statearr_23269_23331[(2)] = null);

(statearr_23269_23331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (11))){
var inst_23231 = (state_23256[(2)]);
var state_23256__$1 = (function (){var statearr_23270 = state_23256;
(statearr_23270[(10)] = inst_23231);

return statearr_23270;
})();
var statearr_23271_23332 = state_23256__$1;
(statearr_23271_23332[(2)] = null);

(statearr_23271_23332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (9))){
var state_23256__$1 = state_23256;
var statearr_23272_23333 = state_23256__$1;
(statearr_23272_23333[(2)] = null);

(statearr_23272_23333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (5))){
var state_23256__$1 = state_23256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23273_23334 = state_23256__$1;
(statearr_23273_23334[(1)] = (8));

} else {
var statearr_23274_23335 = state_23256__$1;
(statearr_23274_23335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (14))){
var inst_23234 = (state_23256[(8)]);
var inst_23236 = (state_23256[(11)]);
var inst_23234__$1 = (state_23256[(2)]);
var inst_23235 = (inst_23234__$1 == null);
var inst_23236__$1 = cljs.core.not.call(null,inst_23235);
var state_23256__$1 = (function (){var statearr_23275 = state_23256;
(statearr_23275[(8)] = inst_23234__$1);

(statearr_23275[(11)] = inst_23236__$1);

return statearr_23275;
})();
if(inst_23236__$1){
var statearr_23276_23336 = state_23256__$1;
(statearr_23276_23336[(1)] = (15));

} else {
var statearr_23277_23337 = state_23256__$1;
(statearr_23277_23337[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (16))){
var inst_23236 = (state_23256[(11)]);
var state_23256__$1 = state_23256;
var statearr_23278_23338 = state_23256__$1;
(statearr_23278_23338[(2)] = inst_23236);

(statearr_23278_23338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (10))){
var inst_23228 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23279_23339 = state_23256__$1;
(statearr_23279_23339[(2)] = inst_23228);

(statearr_23279_23339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (18))){
var inst_23239 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23280_23340 = state_23256__$1;
(statearr_23280_23340[(2)] = inst_23239);

(statearr_23280_23340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (8))){
var inst_23225 = cljs.core.async.close_BANG_.call(null,to);
var state_23256__$1 = state_23256;
var statearr_23281_23341 = state_23256__$1;
(statearr_23281_23341[(2)] = inst_23225);

(statearr_23281_23341[(1)] = (10));


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
});})(c__22951__auto__,jobs,results,process,async))
;
return ((function (switch__22856__auto__,c__22951__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0 = (function (){
var statearr_23282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__);

(statearr_23282[(1)] = (1));

return statearr_23282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1 = (function (state_23256){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23283){if((e23283 instanceof Object)){
var ex__22860__auto__ = e23283;
var statearr_23284_23342 = state_23256;
(statearr_23284_23342[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23343 = state_23256;
state_23256 = G__23343;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__ = function(state_23256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1.call(this,state_23256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,jobs,results,process,async))
})();
var state__22953__auto__ = (function (){var statearr_23285 = f__22952__auto__.call(null);
(statearr_23285[(6)] = c__22951__auto__);

return statearr_23285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,jobs,results,process,async))
);

return c__22951__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23345 = arguments.length;
switch (G__23345) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23348 = arguments.length;
switch (G__23348) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23351 = arguments.length;
switch (G__23351) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22951__auto___23400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___23400,tc,fc){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___23400,tc,fc){
return (function (state_23377){
var state_val_23378 = (state_23377[(1)]);
if((state_val_23378 === (7))){
var inst_23373 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23379_23401 = state_23377__$1;
(statearr_23379_23401[(2)] = inst_23373);

(statearr_23379_23401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (1))){
var state_23377__$1 = state_23377;
var statearr_23380_23402 = state_23377__$1;
(statearr_23380_23402[(2)] = null);

(statearr_23380_23402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (4))){
var inst_23354 = (state_23377[(7)]);
var inst_23354__$1 = (state_23377[(2)]);
var inst_23355 = (inst_23354__$1 == null);
var state_23377__$1 = (function (){var statearr_23381 = state_23377;
(statearr_23381[(7)] = inst_23354__$1);

return statearr_23381;
})();
if(cljs.core.truth_(inst_23355)){
var statearr_23382_23403 = state_23377__$1;
(statearr_23382_23403[(1)] = (5));

} else {
var statearr_23383_23404 = state_23377__$1;
(statearr_23383_23404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (13))){
var state_23377__$1 = state_23377;
var statearr_23384_23405 = state_23377__$1;
(statearr_23384_23405[(2)] = null);

(statearr_23384_23405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (6))){
var inst_23354 = (state_23377[(7)]);
var inst_23360 = p.call(null,inst_23354);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23360)){
var statearr_23385_23406 = state_23377__$1;
(statearr_23385_23406[(1)] = (9));

} else {
var statearr_23386_23407 = state_23377__$1;
(statearr_23386_23407[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (3))){
var inst_23375 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else {
if((state_val_23378 === (12))){
var state_23377__$1 = state_23377;
var statearr_23387_23408 = state_23377__$1;
(statearr_23387_23408[(2)] = null);

(statearr_23387_23408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (2))){
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(4),ch);
} else {
if((state_val_23378 === (11))){
var inst_23354 = (state_23377[(7)]);
var inst_23364 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23377__$1,(8),inst_23364,inst_23354);
} else {
if((state_val_23378 === (9))){
var state_23377__$1 = state_23377;
var statearr_23388_23409 = state_23377__$1;
(statearr_23388_23409[(2)] = tc);

(statearr_23388_23409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (5))){
var inst_23357 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23358 = cljs.core.async.close_BANG_.call(null,fc);
var state_23377__$1 = (function (){var statearr_23389 = state_23377;
(statearr_23389[(8)] = inst_23357);

return statearr_23389;
})();
var statearr_23390_23410 = state_23377__$1;
(statearr_23390_23410[(2)] = inst_23358);

(statearr_23390_23410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (14))){
var inst_23371 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23391_23411 = state_23377__$1;
(statearr_23391_23411[(2)] = inst_23371);

(statearr_23391_23411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (10))){
var state_23377__$1 = state_23377;
var statearr_23392_23412 = state_23377__$1;
(statearr_23392_23412[(2)] = fc);

(statearr_23392_23412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (8))){
var inst_23366 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23366)){
var statearr_23393_23413 = state_23377__$1;
(statearr_23393_23413[(1)] = (12));

} else {
var statearr_23394_23414 = state_23377__$1;
(statearr_23394_23414[(1)] = (13));

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
});})(c__22951__auto___23400,tc,fc))
;
return ((function (switch__22856__auto__,c__22951__auto___23400,tc,fc){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_23395 = [null,null,null,null,null,null,null,null,null];
(statearr_23395[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_23395[(1)] = (1));

return statearr_23395;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_23377){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23396){if((e23396 instanceof Object)){
var ex__22860__auto__ = e23396;
var statearr_23397_23415 = state_23377;
(statearr_23397_23415[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23416 = state_23377;
state_23377 = G__23416;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___23400,tc,fc))
})();
var state__22953__auto__ = (function (){var statearr_23398 = f__22952__auto__.call(null);
(statearr_23398[(6)] = c__22951__auto___23400);

return statearr_23398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___23400,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_23437){
var state_val_23438 = (state_23437[(1)]);
if((state_val_23438 === (7))){
var inst_23433 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23439_23457 = state_23437__$1;
(statearr_23439_23457[(2)] = inst_23433);

(statearr_23439_23457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (1))){
var inst_23417 = init;
var state_23437__$1 = (function (){var statearr_23440 = state_23437;
(statearr_23440[(7)] = inst_23417);

return statearr_23440;
})();
var statearr_23441_23458 = state_23437__$1;
(statearr_23441_23458[(2)] = null);

(statearr_23441_23458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (4))){
var inst_23420 = (state_23437[(8)]);
var inst_23420__$1 = (state_23437[(2)]);
var inst_23421 = (inst_23420__$1 == null);
var state_23437__$1 = (function (){var statearr_23442 = state_23437;
(statearr_23442[(8)] = inst_23420__$1);

return statearr_23442;
})();
if(cljs.core.truth_(inst_23421)){
var statearr_23443_23459 = state_23437__$1;
(statearr_23443_23459[(1)] = (5));

} else {
var statearr_23444_23460 = state_23437__$1;
(statearr_23444_23460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (6))){
var inst_23420 = (state_23437[(8)]);
var inst_23424 = (state_23437[(9)]);
var inst_23417 = (state_23437[(7)]);
var inst_23424__$1 = f.call(null,inst_23417,inst_23420);
var inst_23425 = cljs.core.reduced_QMARK_.call(null,inst_23424__$1);
var state_23437__$1 = (function (){var statearr_23445 = state_23437;
(statearr_23445[(9)] = inst_23424__$1);

return statearr_23445;
})();
if(inst_23425){
var statearr_23446_23461 = state_23437__$1;
(statearr_23446_23461[(1)] = (8));

} else {
var statearr_23447_23462 = state_23437__$1;
(statearr_23447_23462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (3))){
var inst_23435 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23437__$1,inst_23435);
} else {
if((state_val_23438 === (2))){
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23437__$1,(4),ch);
} else {
if((state_val_23438 === (9))){
var inst_23424 = (state_23437[(9)]);
var inst_23417 = inst_23424;
var state_23437__$1 = (function (){var statearr_23448 = state_23437;
(statearr_23448[(7)] = inst_23417);

return statearr_23448;
})();
var statearr_23449_23463 = state_23437__$1;
(statearr_23449_23463[(2)] = null);

(statearr_23449_23463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (5))){
var inst_23417 = (state_23437[(7)]);
var state_23437__$1 = state_23437;
var statearr_23450_23464 = state_23437__$1;
(statearr_23450_23464[(2)] = inst_23417);

(statearr_23450_23464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (10))){
var inst_23431 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23451_23465 = state_23437__$1;
(statearr_23451_23465[(2)] = inst_23431);

(statearr_23451_23465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (8))){
var inst_23424 = (state_23437[(9)]);
var inst_23427 = cljs.core.deref.call(null,inst_23424);
var state_23437__$1 = state_23437;
var statearr_23452_23466 = state_23437__$1;
(statearr_23452_23466[(2)] = inst_23427);

(statearr_23452_23466[(1)] = (10));


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
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22857__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22857__auto____0 = (function (){
var statearr_23453 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23453[(0)] = cljs$core$async$reduce_$_state_machine__22857__auto__);

(statearr_23453[(1)] = (1));

return statearr_23453;
});
var cljs$core$async$reduce_$_state_machine__22857__auto____1 = (function (state_23437){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23454){if((e23454 instanceof Object)){
var ex__22860__auto__ = e23454;
var statearr_23455_23467 = state_23437;
(statearr_23455_23467[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23468 = state_23437;
state_23437 = G__23468;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22857__auto__ = function(state_23437){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22857__auto____1.call(this,state_23437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22857__auto____0;
cljs$core$async$reduce_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22857__auto____1;
return cljs$core$async$reduce_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_23456 = f__22952__auto__.call(null);
(statearr_23456[(6)] = c__22951__auto__);

return statearr_23456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,f__$1){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,f__$1){
return (function (state_23474){
var state_val_23475 = (state_23474[(1)]);
if((state_val_23475 === (1))){
var inst_23469 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23474__$1 = state_23474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23474__$1,(2),inst_23469);
} else {
if((state_val_23475 === (2))){
var inst_23471 = (state_23474[(2)]);
var inst_23472 = f__$1.call(null,inst_23471);
var state_23474__$1 = state_23474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23474__$1,inst_23472);
} else {
return null;
}
}
});})(c__22951__auto__,f__$1))
;
return ((function (switch__22856__auto__,c__22951__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22857__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22857__auto____0 = (function (){
var statearr_23476 = [null,null,null,null,null,null,null];
(statearr_23476[(0)] = cljs$core$async$transduce_$_state_machine__22857__auto__);

(statearr_23476[(1)] = (1));

return statearr_23476;
});
var cljs$core$async$transduce_$_state_machine__22857__auto____1 = (function (state_23474){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object)){
var ex__22860__auto__ = e23477;
var statearr_23478_23480 = state_23474;
(statearr_23478_23480[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23481 = state_23474;
state_23474 = G__23481;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22857__auto__ = function(state_23474){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22857__auto____1.call(this,state_23474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22857__auto____0;
cljs$core$async$transduce_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22857__auto____1;
return cljs$core$async$transduce_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,f__$1))
})();
var state__22953__auto__ = (function (){var statearr_23479 = f__22952__auto__.call(null);
(statearr_23479[(6)] = c__22951__auto__);

return statearr_23479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,f__$1))
);

return c__22951__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23483 = arguments.length;
switch (G__23483) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_23508){
var state_val_23509 = (state_23508[(1)]);
if((state_val_23509 === (7))){
var inst_23490 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23510_23531 = state_23508__$1;
(statearr_23510_23531[(2)] = inst_23490);

(statearr_23510_23531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (1))){
var inst_23484 = cljs.core.seq.call(null,coll);
var inst_23485 = inst_23484;
var state_23508__$1 = (function (){var statearr_23511 = state_23508;
(statearr_23511[(7)] = inst_23485);

return statearr_23511;
})();
var statearr_23512_23532 = state_23508__$1;
(statearr_23512_23532[(2)] = null);

(statearr_23512_23532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (4))){
var inst_23485 = (state_23508[(7)]);
var inst_23488 = cljs.core.first.call(null,inst_23485);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23508__$1,(7),ch,inst_23488);
} else {
if((state_val_23509 === (13))){
var inst_23502 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23513_23533 = state_23508__$1;
(statearr_23513_23533[(2)] = inst_23502);

(statearr_23513_23533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (6))){
var inst_23493 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
if(cljs.core.truth_(inst_23493)){
var statearr_23514_23534 = state_23508__$1;
(statearr_23514_23534[(1)] = (8));

} else {
var statearr_23515_23535 = state_23508__$1;
(statearr_23515_23535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (3))){
var inst_23506 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23508__$1,inst_23506);
} else {
if((state_val_23509 === (12))){
var state_23508__$1 = state_23508;
var statearr_23516_23536 = state_23508__$1;
(statearr_23516_23536[(2)] = null);

(statearr_23516_23536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (2))){
var inst_23485 = (state_23508[(7)]);
var state_23508__$1 = state_23508;
if(cljs.core.truth_(inst_23485)){
var statearr_23517_23537 = state_23508__$1;
(statearr_23517_23537[(1)] = (4));

} else {
var statearr_23518_23538 = state_23508__$1;
(statearr_23518_23538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (11))){
var inst_23499 = cljs.core.async.close_BANG_.call(null,ch);
var state_23508__$1 = state_23508;
var statearr_23519_23539 = state_23508__$1;
(statearr_23519_23539[(2)] = inst_23499);

(statearr_23519_23539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (9))){
var state_23508__$1 = state_23508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23520_23540 = state_23508__$1;
(statearr_23520_23540[(1)] = (11));

} else {
var statearr_23521_23541 = state_23508__$1;
(statearr_23521_23541[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (5))){
var inst_23485 = (state_23508[(7)]);
var state_23508__$1 = state_23508;
var statearr_23522_23542 = state_23508__$1;
(statearr_23522_23542[(2)] = inst_23485);

(statearr_23522_23542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (10))){
var inst_23504 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23523_23543 = state_23508__$1;
(statearr_23523_23543[(2)] = inst_23504);

(statearr_23523_23543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (8))){
var inst_23485 = (state_23508[(7)]);
var inst_23495 = cljs.core.next.call(null,inst_23485);
var inst_23485__$1 = inst_23495;
var state_23508__$1 = (function (){var statearr_23524 = state_23508;
(statearr_23524[(7)] = inst_23485__$1);

return statearr_23524;
})();
var statearr_23525_23544 = state_23508__$1;
(statearr_23525_23544[(2)] = null);

(statearr_23525_23544[(1)] = (2));


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
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_23526 = [null,null,null,null,null,null,null,null];
(statearr_23526[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_23526[(1)] = (1));

return statearr_23526;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_23508){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23527){if((e23527 instanceof Object)){
var ex__22860__auto__ = e23527;
var statearr_23528_23545 = state_23508;
(statearr_23528_23545[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23546 = state_23508;
state_23508 = G__23546;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_23508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_23508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_23529 = f__22952__auto__.call(null);
(statearr_23529[(6)] = c__22951__auto__);

return statearr_23529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23547 = (function (ch,cs,meta23548){
this.ch = ch;
this.cs = cs;
this.meta23548 = meta23548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23549,meta23548__$1){
var self__ = this;
var _23549__$1 = this;
return (new cljs.core.async.t_cljs$core$async23547(self__.ch,self__.cs,meta23548__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23549){
var self__ = this;
var _23549__$1 = this;
return self__.meta23548;
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23548","meta23548",-1112025103,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23547";

cljs.core.async.t_cljs$core$async23547.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23547");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23547.
 */
cljs.core.async.__GT_t_cljs$core$async23547 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23547(ch__$1,cs__$1,meta23548){
return (new cljs.core.async.t_cljs$core$async23547(ch__$1,cs__$1,meta23548));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23547(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22951__auto___23769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___23769,cs,m,dchan,dctr,done){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___23769,cs,m,dchan,dctr,done){
return (function (state_23684){
var state_val_23685 = (state_23684[(1)]);
if((state_val_23685 === (7))){
var inst_23680 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23686_23770 = state_23684__$1;
(statearr_23686_23770[(2)] = inst_23680);

(statearr_23686_23770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (20))){
var inst_23583 = (state_23684[(7)]);
var inst_23595 = cljs.core.first.call(null,inst_23583);
var inst_23596 = cljs.core.nth.call(null,inst_23595,(0),null);
var inst_23597 = cljs.core.nth.call(null,inst_23595,(1),null);
var state_23684__$1 = (function (){var statearr_23687 = state_23684;
(statearr_23687[(8)] = inst_23596);

return statearr_23687;
})();
if(cljs.core.truth_(inst_23597)){
var statearr_23688_23771 = state_23684__$1;
(statearr_23688_23771[(1)] = (22));

} else {
var statearr_23689_23772 = state_23684__$1;
(statearr_23689_23772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (27))){
var inst_23625 = (state_23684[(9)]);
var inst_23627 = (state_23684[(10)]);
var inst_23632 = (state_23684[(11)]);
var inst_23552 = (state_23684[(12)]);
var inst_23632__$1 = cljs.core._nth.call(null,inst_23625,inst_23627);
var inst_23633 = cljs.core.async.put_BANG_.call(null,inst_23632__$1,inst_23552,done);
var state_23684__$1 = (function (){var statearr_23690 = state_23684;
(statearr_23690[(11)] = inst_23632__$1);

return statearr_23690;
})();
if(cljs.core.truth_(inst_23633)){
var statearr_23691_23773 = state_23684__$1;
(statearr_23691_23773[(1)] = (30));

} else {
var statearr_23692_23774 = state_23684__$1;
(statearr_23692_23774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (1))){
var state_23684__$1 = state_23684;
var statearr_23693_23775 = state_23684__$1;
(statearr_23693_23775[(2)] = null);

(statearr_23693_23775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (24))){
var inst_23583 = (state_23684[(7)]);
var inst_23602 = (state_23684[(2)]);
var inst_23603 = cljs.core.next.call(null,inst_23583);
var inst_23561 = inst_23603;
var inst_23562 = null;
var inst_23563 = (0);
var inst_23564 = (0);
var state_23684__$1 = (function (){var statearr_23694 = state_23684;
(statearr_23694[(13)] = inst_23562);

(statearr_23694[(14)] = inst_23563);

(statearr_23694[(15)] = inst_23602);

(statearr_23694[(16)] = inst_23561);

(statearr_23694[(17)] = inst_23564);

return statearr_23694;
})();
var statearr_23695_23776 = state_23684__$1;
(statearr_23695_23776[(2)] = null);

(statearr_23695_23776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (39))){
var state_23684__$1 = state_23684;
var statearr_23699_23777 = state_23684__$1;
(statearr_23699_23777[(2)] = null);

(statearr_23699_23777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (4))){
var inst_23552 = (state_23684[(12)]);
var inst_23552__$1 = (state_23684[(2)]);
var inst_23553 = (inst_23552__$1 == null);
var state_23684__$1 = (function (){var statearr_23700 = state_23684;
(statearr_23700[(12)] = inst_23552__$1);

return statearr_23700;
})();
if(cljs.core.truth_(inst_23553)){
var statearr_23701_23778 = state_23684__$1;
(statearr_23701_23778[(1)] = (5));

} else {
var statearr_23702_23779 = state_23684__$1;
(statearr_23702_23779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (15))){
var inst_23562 = (state_23684[(13)]);
var inst_23563 = (state_23684[(14)]);
var inst_23561 = (state_23684[(16)]);
var inst_23564 = (state_23684[(17)]);
var inst_23579 = (state_23684[(2)]);
var inst_23580 = (inst_23564 + (1));
var tmp23696 = inst_23562;
var tmp23697 = inst_23563;
var tmp23698 = inst_23561;
var inst_23561__$1 = tmp23698;
var inst_23562__$1 = tmp23696;
var inst_23563__$1 = tmp23697;
var inst_23564__$1 = inst_23580;
var state_23684__$1 = (function (){var statearr_23703 = state_23684;
(statearr_23703[(13)] = inst_23562__$1);

(statearr_23703[(14)] = inst_23563__$1);

(statearr_23703[(18)] = inst_23579);

(statearr_23703[(16)] = inst_23561__$1);

(statearr_23703[(17)] = inst_23564__$1);

return statearr_23703;
})();
var statearr_23704_23780 = state_23684__$1;
(statearr_23704_23780[(2)] = null);

(statearr_23704_23780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (21))){
var inst_23606 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23708_23781 = state_23684__$1;
(statearr_23708_23781[(2)] = inst_23606);

(statearr_23708_23781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (31))){
var inst_23632 = (state_23684[(11)]);
var inst_23636 = done.call(null,null);
var inst_23637 = cljs.core.async.untap_STAR_.call(null,m,inst_23632);
var state_23684__$1 = (function (){var statearr_23709 = state_23684;
(statearr_23709[(19)] = inst_23636);

return statearr_23709;
})();
var statearr_23710_23782 = state_23684__$1;
(statearr_23710_23782[(2)] = inst_23637);

(statearr_23710_23782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (32))){
var inst_23625 = (state_23684[(9)]);
var inst_23626 = (state_23684[(20)]);
var inst_23627 = (state_23684[(10)]);
var inst_23624 = (state_23684[(21)]);
var inst_23639 = (state_23684[(2)]);
var inst_23640 = (inst_23627 + (1));
var tmp23705 = inst_23625;
var tmp23706 = inst_23626;
var tmp23707 = inst_23624;
var inst_23624__$1 = tmp23707;
var inst_23625__$1 = tmp23705;
var inst_23626__$1 = tmp23706;
var inst_23627__$1 = inst_23640;
var state_23684__$1 = (function (){var statearr_23711 = state_23684;
(statearr_23711[(9)] = inst_23625__$1);

(statearr_23711[(22)] = inst_23639);

(statearr_23711[(20)] = inst_23626__$1);

(statearr_23711[(10)] = inst_23627__$1);

(statearr_23711[(21)] = inst_23624__$1);

return statearr_23711;
})();
var statearr_23712_23783 = state_23684__$1;
(statearr_23712_23783[(2)] = null);

(statearr_23712_23783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (40))){
var inst_23652 = (state_23684[(23)]);
var inst_23656 = done.call(null,null);
var inst_23657 = cljs.core.async.untap_STAR_.call(null,m,inst_23652);
var state_23684__$1 = (function (){var statearr_23713 = state_23684;
(statearr_23713[(24)] = inst_23656);

return statearr_23713;
})();
var statearr_23714_23784 = state_23684__$1;
(statearr_23714_23784[(2)] = inst_23657);

(statearr_23714_23784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (33))){
var inst_23643 = (state_23684[(25)]);
var inst_23645 = cljs.core.chunked_seq_QMARK_.call(null,inst_23643);
var state_23684__$1 = state_23684;
if(inst_23645){
var statearr_23715_23785 = state_23684__$1;
(statearr_23715_23785[(1)] = (36));

} else {
var statearr_23716_23786 = state_23684__$1;
(statearr_23716_23786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (13))){
var inst_23573 = (state_23684[(26)]);
var inst_23576 = cljs.core.async.close_BANG_.call(null,inst_23573);
var state_23684__$1 = state_23684;
var statearr_23717_23787 = state_23684__$1;
(statearr_23717_23787[(2)] = inst_23576);

(statearr_23717_23787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (22))){
var inst_23596 = (state_23684[(8)]);
var inst_23599 = cljs.core.async.close_BANG_.call(null,inst_23596);
var state_23684__$1 = state_23684;
var statearr_23718_23788 = state_23684__$1;
(statearr_23718_23788[(2)] = inst_23599);

(statearr_23718_23788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (36))){
var inst_23643 = (state_23684[(25)]);
var inst_23647 = cljs.core.chunk_first.call(null,inst_23643);
var inst_23648 = cljs.core.chunk_rest.call(null,inst_23643);
var inst_23649 = cljs.core.count.call(null,inst_23647);
var inst_23624 = inst_23648;
var inst_23625 = inst_23647;
var inst_23626 = inst_23649;
var inst_23627 = (0);
var state_23684__$1 = (function (){var statearr_23719 = state_23684;
(statearr_23719[(9)] = inst_23625);

(statearr_23719[(20)] = inst_23626);

(statearr_23719[(10)] = inst_23627);

(statearr_23719[(21)] = inst_23624);

return statearr_23719;
})();
var statearr_23720_23789 = state_23684__$1;
(statearr_23720_23789[(2)] = null);

(statearr_23720_23789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (41))){
var inst_23643 = (state_23684[(25)]);
var inst_23659 = (state_23684[(2)]);
var inst_23660 = cljs.core.next.call(null,inst_23643);
var inst_23624 = inst_23660;
var inst_23625 = null;
var inst_23626 = (0);
var inst_23627 = (0);
var state_23684__$1 = (function (){var statearr_23721 = state_23684;
(statearr_23721[(9)] = inst_23625);

(statearr_23721[(27)] = inst_23659);

(statearr_23721[(20)] = inst_23626);

(statearr_23721[(10)] = inst_23627);

(statearr_23721[(21)] = inst_23624);

return statearr_23721;
})();
var statearr_23722_23790 = state_23684__$1;
(statearr_23722_23790[(2)] = null);

(statearr_23722_23790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (43))){
var state_23684__$1 = state_23684;
var statearr_23723_23791 = state_23684__$1;
(statearr_23723_23791[(2)] = null);

(statearr_23723_23791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (29))){
var inst_23668 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23724_23792 = state_23684__$1;
(statearr_23724_23792[(2)] = inst_23668);

(statearr_23724_23792[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (44))){
var inst_23677 = (state_23684[(2)]);
var state_23684__$1 = (function (){var statearr_23725 = state_23684;
(statearr_23725[(28)] = inst_23677);

return statearr_23725;
})();
var statearr_23726_23793 = state_23684__$1;
(statearr_23726_23793[(2)] = null);

(statearr_23726_23793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (6))){
var inst_23616 = (state_23684[(29)]);
var inst_23615 = cljs.core.deref.call(null,cs);
var inst_23616__$1 = cljs.core.keys.call(null,inst_23615);
var inst_23617 = cljs.core.count.call(null,inst_23616__$1);
var inst_23618 = cljs.core.reset_BANG_.call(null,dctr,inst_23617);
var inst_23623 = cljs.core.seq.call(null,inst_23616__$1);
var inst_23624 = inst_23623;
var inst_23625 = null;
var inst_23626 = (0);
var inst_23627 = (0);
var state_23684__$1 = (function (){var statearr_23727 = state_23684;
(statearr_23727[(9)] = inst_23625);

(statearr_23727[(30)] = inst_23618);

(statearr_23727[(20)] = inst_23626);

(statearr_23727[(10)] = inst_23627);

(statearr_23727[(29)] = inst_23616__$1);

(statearr_23727[(21)] = inst_23624);

return statearr_23727;
})();
var statearr_23728_23794 = state_23684__$1;
(statearr_23728_23794[(2)] = null);

(statearr_23728_23794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (28))){
var inst_23643 = (state_23684[(25)]);
var inst_23624 = (state_23684[(21)]);
var inst_23643__$1 = cljs.core.seq.call(null,inst_23624);
var state_23684__$1 = (function (){var statearr_23729 = state_23684;
(statearr_23729[(25)] = inst_23643__$1);

return statearr_23729;
})();
if(inst_23643__$1){
var statearr_23730_23795 = state_23684__$1;
(statearr_23730_23795[(1)] = (33));

} else {
var statearr_23731_23796 = state_23684__$1;
(statearr_23731_23796[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (25))){
var inst_23626 = (state_23684[(20)]);
var inst_23627 = (state_23684[(10)]);
var inst_23629 = (inst_23627 < inst_23626);
var inst_23630 = inst_23629;
var state_23684__$1 = state_23684;
if(cljs.core.truth_(inst_23630)){
var statearr_23732_23797 = state_23684__$1;
(statearr_23732_23797[(1)] = (27));

} else {
var statearr_23733_23798 = state_23684__$1;
(statearr_23733_23798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (34))){
var state_23684__$1 = state_23684;
var statearr_23734_23799 = state_23684__$1;
(statearr_23734_23799[(2)] = null);

(statearr_23734_23799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (17))){
var state_23684__$1 = state_23684;
var statearr_23735_23800 = state_23684__$1;
(statearr_23735_23800[(2)] = null);

(statearr_23735_23800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (3))){
var inst_23682 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23684__$1,inst_23682);
} else {
if((state_val_23685 === (12))){
var inst_23611 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23736_23801 = state_23684__$1;
(statearr_23736_23801[(2)] = inst_23611);

(statearr_23736_23801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (2))){
var state_23684__$1 = state_23684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23684__$1,(4),ch);
} else {
if((state_val_23685 === (23))){
var state_23684__$1 = state_23684;
var statearr_23737_23802 = state_23684__$1;
(statearr_23737_23802[(2)] = null);

(statearr_23737_23802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (35))){
var inst_23666 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23738_23803 = state_23684__$1;
(statearr_23738_23803[(2)] = inst_23666);

(statearr_23738_23803[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (19))){
var inst_23583 = (state_23684[(7)]);
var inst_23587 = cljs.core.chunk_first.call(null,inst_23583);
var inst_23588 = cljs.core.chunk_rest.call(null,inst_23583);
var inst_23589 = cljs.core.count.call(null,inst_23587);
var inst_23561 = inst_23588;
var inst_23562 = inst_23587;
var inst_23563 = inst_23589;
var inst_23564 = (0);
var state_23684__$1 = (function (){var statearr_23739 = state_23684;
(statearr_23739[(13)] = inst_23562);

(statearr_23739[(14)] = inst_23563);

(statearr_23739[(16)] = inst_23561);

(statearr_23739[(17)] = inst_23564);

return statearr_23739;
})();
var statearr_23740_23804 = state_23684__$1;
(statearr_23740_23804[(2)] = null);

(statearr_23740_23804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (11))){
var inst_23583 = (state_23684[(7)]);
var inst_23561 = (state_23684[(16)]);
var inst_23583__$1 = cljs.core.seq.call(null,inst_23561);
var state_23684__$1 = (function (){var statearr_23741 = state_23684;
(statearr_23741[(7)] = inst_23583__$1);

return statearr_23741;
})();
if(inst_23583__$1){
var statearr_23742_23805 = state_23684__$1;
(statearr_23742_23805[(1)] = (16));

} else {
var statearr_23743_23806 = state_23684__$1;
(statearr_23743_23806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (9))){
var inst_23613 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23744_23807 = state_23684__$1;
(statearr_23744_23807[(2)] = inst_23613);

(statearr_23744_23807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (5))){
var inst_23559 = cljs.core.deref.call(null,cs);
var inst_23560 = cljs.core.seq.call(null,inst_23559);
var inst_23561 = inst_23560;
var inst_23562 = null;
var inst_23563 = (0);
var inst_23564 = (0);
var state_23684__$1 = (function (){var statearr_23745 = state_23684;
(statearr_23745[(13)] = inst_23562);

(statearr_23745[(14)] = inst_23563);

(statearr_23745[(16)] = inst_23561);

(statearr_23745[(17)] = inst_23564);

return statearr_23745;
})();
var statearr_23746_23808 = state_23684__$1;
(statearr_23746_23808[(2)] = null);

(statearr_23746_23808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (14))){
var state_23684__$1 = state_23684;
var statearr_23747_23809 = state_23684__$1;
(statearr_23747_23809[(2)] = null);

(statearr_23747_23809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (45))){
var inst_23674 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23748_23810 = state_23684__$1;
(statearr_23748_23810[(2)] = inst_23674);

(statearr_23748_23810[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (26))){
var inst_23616 = (state_23684[(29)]);
var inst_23670 = (state_23684[(2)]);
var inst_23671 = cljs.core.seq.call(null,inst_23616);
var state_23684__$1 = (function (){var statearr_23749 = state_23684;
(statearr_23749[(31)] = inst_23670);

return statearr_23749;
})();
if(inst_23671){
var statearr_23750_23811 = state_23684__$1;
(statearr_23750_23811[(1)] = (42));

} else {
var statearr_23751_23812 = state_23684__$1;
(statearr_23751_23812[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (16))){
var inst_23583 = (state_23684[(7)]);
var inst_23585 = cljs.core.chunked_seq_QMARK_.call(null,inst_23583);
var state_23684__$1 = state_23684;
if(inst_23585){
var statearr_23752_23813 = state_23684__$1;
(statearr_23752_23813[(1)] = (19));

} else {
var statearr_23753_23814 = state_23684__$1;
(statearr_23753_23814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (38))){
var inst_23663 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23754_23815 = state_23684__$1;
(statearr_23754_23815[(2)] = inst_23663);

(statearr_23754_23815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (30))){
var state_23684__$1 = state_23684;
var statearr_23755_23816 = state_23684__$1;
(statearr_23755_23816[(2)] = null);

(statearr_23755_23816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (10))){
var inst_23562 = (state_23684[(13)]);
var inst_23564 = (state_23684[(17)]);
var inst_23572 = cljs.core._nth.call(null,inst_23562,inst_23564);
var inst_23573 = cljs.core.nth.call(null,inst_23572,(0),null);
var inst_23574 = cljs.core.nth.call(null,inst_23572,(1),null);
var state_23684__$1 = (function (){var statearr_23756 = state_23684;
(statearr_23756[(26)] = inst_23573);

return statearr_23756;
})();
if(cljs.core.truth_(inst_23574)){
var statearr_23757_23817 = state_23684__$1;
(statearr_23757_23817[(1)] = (13));

} else {
var statearr_23758_23818 = state_23684__$1;
(statearr_23758_23818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (18))){
var inst_23609 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23759_23819 = state_23684__$1;
(statearr_23759_23819[(2)] = inst_23609);

(statearr_23759_23819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (42))){
var state_23684__$1 = state_23684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23684__$1,(45),dchan);
} else {
if((state_val_23685 === (37))){
var inst_23652 = (state_23684[(23)]);
var inst_23643 = (state_23684[(25)]);
var inst_23552 = (state_23684[(12)]);
var inst_23652__$1 = cljs.core.first.call(null,inst_23643);
var inst_23653 = cljs.core.async.put_BANG_.call(null,inst_23652__$1,inst_23552,done);
var state_23684__$1 = (function (){var statearr_23760 = state_23684;
(statearr_23760[(23)] = inst_23652__$1);

return statearr_23760;
})();
if(cljs.core.truth_(inst_23653)){
var statearr_23761_23820 = state_23684__$1;
(statearr_23761_23820[(1)] = (39));

} else {
var statearr_23762_23821 = state_23684__$1;
(statearr_23762_23821[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (8))){
var inst_23563 = (state_23684[(14)]);
var inst_23564 = (state_23684[(17)]);
var inst_23566 = (inst_23564 < inst_23563);
var inst_23567 = inst_23566;
var state_23684__$1 = state_23684;
if(cljs.core.truth_(inst_23567)){
var statearr_23763_23822 = state_23684__$1;
(statearr_23763_23822[(1)] = (10));

} else {
var statearr_23764_23823 = state_23684__$1;
(statearr_23764_23823[(1)] = (11));

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
});})(c__22951__auto___23769,cs,m,dchan,dctr,done))
;
return ((function (switch__22856__auto__,c__22951__auto___23769,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22857__auto__ = null;
var cljs$core$async$mult_$_state_machine__22857__auto____0 = (function (){
var statearr_23765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23765[(0)] = cljs$core$async$mult_$_state_machine__22857__auto__);

(statearr_23765[(1)] = (1));

return statearr_23765;
});
var cljs$core$async$mult_$_state_machine__22857__auto____1 = (function (state_23684){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e23766){if((e23766 instanceof Object)){
var ex__22860__auto__ = e23766;
var statearr_23767_23824 = state_23684;
(statearr_23767_23824[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23825 = state_23684;
state_23684 = G__23825;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22857__auto__ = function(state_23684){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22857__auto____1.call(this,state_23684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22857__auto____0;
cljs$core$async$mult_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22857__auto____1;
return cljs$core$async$mult_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___23769,cs,m,dchan,dctr,done))
})();
var state__22953__auto__ = (function (){var statearr_23768 = f__22952__auto__.call(null);
(statearr_23768[(6)] = c__22951__auto___23769);

return statearr_23768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___23769,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23827 = arguments.length;
switch (G__23827) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23839 = arguments.length;
var i__4731__auto___23840 = (0);
while(true){
if((i__4731__auto___23840 < len__4730__auto___23839)){
args__4736__auto__.push((arguments[i__4731__auto___23840]));

var G__23841 = (i__4731__auto___23840 + (1));
i__4731__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23833){
var map__23834 = p__23833;
var map__23834__$1 = (((((!((map__23834 == null))))?(((((map__23834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23834):map__23834);
var opts = map__23834__$1;
var statearr_23836_23842 = state;
(statearr_23836_23842[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__23834,map__23834__$1,opts){
return (function (val){
var statearr_23837_23843 = state;
(statearr_23837_23843[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23834,map__23834__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23838_23844 = state;
(statearr_23838_23844[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23829){
var G__23830 = cljs.core.first.call(null,seq23829);
var seq23829__$1 = cljs.core.next.call(null,seq23829);
var G__23831 = cljs.core.first.call(null,seq23829__$1);
var seq23829__$2 = cljs.core.next.call(null,seq23829__$1);
var G__23832 = cljs.core.first.call(null,seq23829__$2);
var seq23829__$3 = cljs.core.next.call(null,seq23829__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23830,G__23831,G__23832,seq23829__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23845 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23846){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23846 = meta23846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23847,meta23846__$1){
var self__ = this;
var _23847__$1 = this;
return (new cljs.core.async.t_cljs$core$async23845(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23846__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23847){
var self__ = this;
var _23847__$1 = this;
return self__.meta23846;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23846","meta23846",133755763,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23845";

cljs.core.async.t_cljs$core$async23845.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23845");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23845.
 */
cljs.core.async.__GT_t_cljs$core$async23845 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23845(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23846){
return (new cljs.core.async.t_cljs$core$async23845(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23846));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23845(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22951__auto___24009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23949){
var state_val_23950 = (state_23949[(1)]);
if((state_val_23950 === (7))){
var inst_23864 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23951_24010 = state_23949__$1;
(statearr_23951_24010[(2)] = inst_23864);

(statearr_23951_24010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (20))){
var inst_23876 = (state_23949[(7)]);
var state_23949__$1 = state_23949;
var statearr_23952_24011 = state_23949__$1;
(statearr_23952_24011[(2)] = inst_23876);

(statearr_23952_24011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (27))){
var state_23949__$1 = state_23949;
var statearr_23953_24012 = state_23949__$1;
(statearr_23953_24012[(2)] = null);

(statearr_23953_24012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (1))){
var inst_23851 = (state_23949[(8)]);
var inst_23851__$1 = calc_state.call(null);
var inst_23853 = (inst_23851__$1 == null);
var inst_23854 = cljs.core.not.call(null,inst_23853);
var state_23949__$1 = (function (){var statearr_23954 = state_23949;
(statearr_23954[(8)] = inst_23851__$1);

return statearr_23954;
})();
if(inst_23854){
var statearr_23955_24013 = state_23949__$1;
(statearr_23955_24013[(1)] = (2));

} else {
var statearr_23956_24014 = state_23949__$1;
(statearr_23956_24014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (24))){
var inst_23923 = (state_23949[(9)]);
var inst_23909 = (state_23949[(10)]);
var inst_23900 = (state_23949[(11)]);
var inst_23923__$1 = inst_23900.call(null,inst_23909);
var state_23949__$1 = (function (){var statearr_23957 = state_23949;
(statearr_23957[(9)] = inst_23923__$1);

return statearr_23957;
})();
if(cljs.core.truth_(inst_23923__$1)){
var statearr_23958_24015 = state_23949__$1;
(statearr_23958_24015[(1)] = (29));

} else {
var statearr_23959_24016 = state_23949__$1;
(statearr_23959_24016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (4))){
var inst_23867 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23867)){
var statearr_23960_24017 = state_23949__$1;
(statearr_23960_24017[(1)] = (8));

} else {
var statearr_23961_24018 = state_23949__$1;
(statearr_23961_24018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (15))){
var inst_23894 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23894)){
var statearr_23962_24019 = state_23949__$1;
(statearr_23962_24019[(1)] = (19));

} else {
var statearr_23963_24020 = state_23949__$1;
(statearr_23963_24020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (21))){
var inst_23899 = (state_23949[(12)]);
var inst_23899__$1 = (state_23949[(2)]);
var inst_23900 = cljs.core.get.call(null,inst_23899__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23901 = cljs.core.get.call(null,inst_23899__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23902 = cljs.core.get.call(null,inst_23899__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23949__$1 = (function (){var statearr_23964 = state_23949;
(statearr_23964[(12)] = inst_23899__$1);

(statearr_23964[(13)] = inst_23901);

(statearr_23964[(11)] = inst_23900);

return statearr_23964;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23949__$1,(22),inst_23902);
} else {
if((state_val_23950 === (31))){
var inst_23931 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23931)){
var statearr_23965_24021 = state_23949__$1;
(statearr_23965_24021[(1)] = (32));

} else {
var statearr_23966_24022 = state_23949__$1;
(statearr_23966_24022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (32))){
var inst_23908 = (state_23949[(14)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23949__$1,(35),out,inst_23908);
} else {
if((state_val_23950 === (33))){
var inst_23899 = (state_23949[(12)]);
var inst_23876 = inst_23899;
var state_23949__$1 = (function (){var statearr_23967 = state_23949;
(statearr_23967[(7)] = inst_23876);

return statearr_23967;
})();
var statearr_23968_24023 = state_23949__$1;
(statearr_23968_24023[(2)] = null);

(statearr_23968_24023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (13))){
var inst_23876 = (state_23949[(7)]);
var inst_23883 = inst_23876.cljs$lang$protocol_mask$partition0$;
var inst_23884 = (inst_23883 & (64));
var inst_23885 = inst_23876.cljs$core$ISeq$;
var inst_23886 = (cljs.core.PROTOCOL_SENTINEL === inst_23885);
var inst_23887 = ((inst_23884) || (inst_23886));
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23887)){
var statearr_23969_24024 = state_23949__$1;
(statearr_23969_24024[(1)] = (16));

} else {
var statearr_23970_24025 = state_23949__$1;
(statearr_23970_24025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (22))){
var inst_23909 = (state_23949[(10)]);
var inst_23908 = (state_23949[(14)]);
var inst_23907 = (state_23949[(2)]);
var inst_23908__$1 = cljs.core.nth.call(null,inst_23907,(0),null);
var inst_23909__$1 = cljs.core.nth.call(null,inst_23907,(1),null);
var inst_23910 = (inst_23908__$1 == null);
var inst_23911 = cljs.core._EQ_.call(null,inst_23909__$1,change);
var inst_23912 = ((inst_23910) || (inst_23911));
var state_23949__$1 = (function (){var statearr_23971 = state_23949;
(statearr_23971[(10)] = inst_23909__$1);

(statearr_23971[(14)] = inst_23908__$1);

return statearr_23971;
})();
if(cljs.core.truth_(inst_23912)){
var statearr_23972_24026 = state_23949__$1;
(statearr_23972_24026[(1)] = (23));

} else {
var statearr_23973_24027 = state_23949__$1;
(statearr_23973_24027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (36))){
var inst_23899 = (state_23949[(12)]);
var inst_23876 = inst_23899;
var state_23949__$1 = (function (){var statearr_23974 = state_23949;
(statearr_23974[(7)] = inst_23876);

return statearr_23974;
})();
var statearr_23975_24028 = state_23949__$1;
(statearr_23975_24028[(2)] = null);

(statearr_23975_24028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (29))){
var inst_23923 = (state_23949[(9)]);
var state_23949__$1 = state_23949;
var statearr_23976_24029 = state_23949__$1;
(statearr_23976_24029[(2)] = inst_23923);

(statearr_23976_24029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (6))){
var state_23949__$1 = state_23949;
var statearr_23977_24030 = state_23949__$1;
(statearr_23977_24030[(2)] = false);

(statearr_23977_24030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (28))){
var inst_23919 = (state_23949[(2)]);
var inst_23920 = calc_state.call(null);
var inst_23876 = inst_23920;
var state_23949__$1 = (function (){var statearr_23978 = state_23949;
(statearr_23978[(15)] = inst_23919);

(statearr_23978[(7)] = inst_23876);

return statearr_23978;
})();
var statearr_23979_24031 = state_23949__$1;
(statearr_23979_24031[(2)] = null);

(statearr_23979_24031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (25))){
var inst_23945 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23980_24032 = state_23949__$1;
(statearr_23980_24032[(2)] = inst_23945);

(statearr_23980_24032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (34))){
var inst_23943 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23981_24033 = state_23949__$1;
(statearr_23981_24033[(2)] = inst_23943);

(statearr_23981_24033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (17))){
var state_23949__$1 = state_23949;
var statearr_23982_24034 = state_23949__$1;
(statearr_23982_24034[(2)] = false);

(statearr_23982_24034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (3))){
var state_23949__$1 = state_23949;
var statearr_23983_24035 = state_23949__$1;
(statearr_23983_24035[(2)] = false);

(statearr_23983_24035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (12))){
var inst_23947 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23949__$1,inst_23947);
} else {
if((state_val_23950 === (2))){
var inst_23851 = (state_23949[(8)]);
var inst_23856 = inst_23851.cljs$lang$protocol_mask$partition0$;
var inst_23857 = (inst_23856 & (64));
var inst_23858 = inst_23851.cljs$core$ISeq$;
var inst_23859 = (cljs.core.PROTOCOL_SENTINEL === inst_23858);
var inst_23860 = ((inst_23857) || (inst_23859));
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23860)){
var statearr_23984_24036 = state_23949__$1;
(statearr_23984_24036[(1)] = (5));

} else {
var statearr_23985_24037 = state_23949__$1;
(statearr_23985_24037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (23))){
var inst_23908 = (state_23949[(14)]);
var inst_23914 = (inst_23908 == null);
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23914)){
var statearr_23986_24038 = state_23949__$1;
(statearr_23986_24038[(1)] = (26));

} else {
var statearr_23987_24039 = state_23949__$1;
(statearr_23987_24039[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (35))){
var inst_23934 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23934)){
var statearr_23988_24040 = state_23949__$1;
(statearr_23988_24040[(1)] = (36));

} else {
var statearr_23989_24041 = state_23949__$1;
(statearr_23989_24041[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (19))){
var inst_23876 = (state_23949[(7)]);
var inst_23896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23876);
var state_23949__$1 = state_23949;
var statearr_23990_24042 = state_23949__$1;
(statearr_23990_24042[(2)] = inst_23896);

(statearr_23990_24042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (11))){
var inst_23876 = (state_23949[(7)]);
var inst_23880 = (inst_23876 == null);
var inst_23881 = cljs.core.not.call(null,inst_23880);
var state_23949__$1 = state_23949;
if(inst_23881){
var statearr_23991_24043 = state_23949__$1;
(statearr_23991_24043[(1)] = (13));

} else {
var statearr_23992_24044 = state_23949__$1;
(statearr_23992_24044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (9))){
var inst_23851 = (state_23949[(8)]);
var state_23949__$1 = state_23949;
var statearr_23993_24045 = state_23949__$1;
(statearr_23993_24045[(2)] = inst_23851);

(statearr_23993_24045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (5))){
var state_23949__$1 = state_23949;
var statearr_23994_24046 = state_23949__$1;
(statearr_23994_24046[(2)] = true);

(statearr_23994_24046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (14))){
var state_23949__$1 = state_23949;
var statearr_23995_24047 = state_23949__$1;
(statearr_23995_24047[(2)] = false);

(statearr_23995_24047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (26))){
var inst_23909 = (state_23949[(10)]);
var inst_23916 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23909);
var state_23949__$1 = state_23949;
var statearr_23996_24048 = state_23949__$1;
(statearr_23996_24048[(2)] = inst_23916);

(statearr_23996_24048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (16))){
var state_23949__$1 = state_23949;
var statearr_23997_24049 = state_23949__$1;
(statearr_23997_24049[(2)] = true);

(statearr_23997_24049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (38))){
var inst_23939 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23998_24050 = state_23949__$1;
(statearr_23998_24050[(2)] = inst_23939);

(statearr_23998_24050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (30))){
var inst_23901 = (state_23949[(13)]);
var inst_23909 = (state_23949[(10)]);
var inst_23900 = (state_23949[(11)]);
var inst_23926 = cljs.core.empty_QMARK_.call(null,inst_23900);
var inst_23927 = inst_23901.call(null,inst_23909);
var inst_23928 = cljs.core.not.call(null,inst_23927);
var inst_23929 = ((inst_23926) && (inst_23928));
var state_23949__$1 = state_23949;
var statearr_23999_24051 = state_23949__$1;
(statearr_23999_24051[(2)] = inst_23929);

(statearr_23999_24051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (10))){
var inst_23851 = (state_23949[(8)]);
var inst_23872 = (state_23949[(2)]);
var inst_23873 = cljs.core.get.call(null,inst_23872,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23874 = cljs.core.get.call(null,inst_23872,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23875 = cljs.core.get.call(null,inst_23872,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23876 = inst_23851;
var state_23949__$1 = (function (){var statearr_24000 = state_23949;
(statearr_24000[(16)] = inst_23873);

(statearr_24000[(17)] = inst_23875);

(statearr_24000[(7)] = inst_23876);

(statearr_24000[(18)] = inst_23874);

return statearr_24000;
})();
var statearr_24001_24052 = state_23949__$1;
(statearr_24001_24052[(2)] = null);

(statearr_24001_24052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (18))){
var inst_23891 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_24002_24053 = state_23949__$1;
(statearr_24002_24053[(2)] = inst_23891);

(statearr_24002_24053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (37))){
var state_23949__$1 = state_23949;
var statearr_24003_24054 = state_23949__$1;
(statearr_24003_24054[(2)] = null);

(statearr_24003_24054[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (8))){
var inst_23851 = (state_23949[(8)]);
var inst_23869 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23851);
var state_23949__$1 = state_23949;
var statearr_24004_24055 = state_23949__$1;
(statearr_24004_24055[(2)] = inst_23869);

(statearr_24004_24055[(1)] = (10));


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
});})(c__22951__auto___24009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22856__auto__,c__22951__auto___24009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22857__auto__ = null;
var cljs$core$async$mix_$_state_machine__22857__auto____0 = (function (){
var statearr_24005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24005[(0)] = cljs$core$async$mix_$_state_machine__22857__auto__);

(statearr_24005[(1)] = (1));

return statearr_24005;
});
var cljs$core$async$mix_$_state_machine__22857__auto____1 = (function (state_23949){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_23949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24006){if((e24006 instanceof Object)){
var ex__22860__auto__ = e24006;
var statearr_24007_24056 = state_23949;
(statearr_24007_24056[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24057 = state_23949;
state_23949 = G__24057;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22857__auto__ = function(state_23949){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22857__auto____1.call(this,state_23949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22857__auto____0;
cljs$core$async$mix_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22857__auto____1;
return cljs$core$async$mix_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22953__auto__ = (function (){var statearr_24008 = f__22952__auto__.call(null);
(statearr_24008[(6)] = c__22951__auto___24009);

return statearr_24008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24059 = arguments.length;
switch (G__24059) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24063 = arguments.length;
switch (G__24063) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24061_SHARP_){
if(cljs.core.truth_(p1__24061_SHARP_.call(null,topic))){
return p1__24061_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24061_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24064 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24065){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24065 = meta24065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24066,meta24065__$1){
var self__ = this;
var _24066__$1 = this;
return (new cljs.core.async.t_cljs$core$async24064(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24065__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24066){
var self__ = this;
var _24066__$1 = this;
return self__.meta24065;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24065","meta24065",-1458870597,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24064";

cljs.core.async.t_cljs$core$async24064.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24064");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24064.
 */
cljs.core.async.__GT_t_cljs$core$async24064 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24064(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24065){
return (new cljs.core.async.t_cljs$core$async24064(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24065));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24064(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22951__auto___24184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24184,mults,ensure_mult,p){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24184,mults,ensure_mult,p){
return (function (state_24138){
var state_val_24139 = (state_24138[(1)]);
if((state_val_24139 === (7))){
var inst_24134 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
var statearr_24140_24185 = state_24138__$1;
(statearr_24140_24185[(2)] = inst_24134);

(statearr_24140_24185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (20))){
var state_24138__$1 = state_24138;
var statearr_24141_24186 = state_24138__$1;
(statearr_24141_24186[(2)] = null);

(statearr_24141_24186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (1))){
var state_24138__$1 = state_24138;
var statearr_24142_24187 = state_24138__$1;
(statearr_24142_24187[(2)] = null);

(statearr_24142_24187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (24))){
var inst_24117 = (state_24138[(7)]);
var inst_24126 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24117);
var state_24138__$1 = state_24138;
var statearr_24143_24188 = state_24138__$1;
(statearr_24143_24188[(2)] = inst_24126);

(statearr_24143_24188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (4))){
var inst_24069 = (state_24138[(8)]);
var inst_24069__$1 = (state_24138[(2)]);
var inst_24070 = (inst_24069__$1 == null);
var state_24138__$1 = (function (){var statearr_24144 = state_24138;
(statearr_24144[(8)] = inst_24069__$1);

return statearr_24144;
})();
if(cljs.core.truth_(inst_24070)){
var statearr_24145_24189 = state_24138__$1;
(statearr_24145_24189[(1)] = (5));

} else {
var statearr_24146_24190 = state_24138__$1;
(statearr_24146_24190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (15))){
var inst_24111 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
var statearr_24147_24191 = state_24138__$1;
(statearr_24147_24191[(2)] = inst_24111);

(statearr_24147_24191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (21))){
var inst_24131 = (state_24138[(2)]);
var state_24138__$1 = (function (){var statearr_24148 = state_24138;
(statearr_24148[(9)] = inst_24131);

return statearr_24148;
})();
var statearr_24149_24192 = state_24138__$1;
(statearr_24149_24192[(2)] = null);

(statearr_24149_24192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (13))){
var inst_24093 = (state_24138[(10)]);
var inst_24095 = cljs.core.chunked_seq_QMARK_.call(null,inst_24093);
var state_24138__$1 = state_24138;
if(inst_24095){
var statearr_24150_24193 = state_24138__$1;
(statearr_24150_24193[(1)] = (16));

} else {
var statearr_24151_24194 = state_24138__$1;
(statearr_24151_24194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (22))){
var inst_24123 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
if(cljs.core.truth_(inst_24123)){
var statearr_24152_24195 = state_24138__$1;
(statearr_24152_24195[(1)] = (23));

} else {
var statearr_24153_24196 = state_24138__$1;
(statearr_24153_24196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (6))){
var inst_24069 = (state_24138[(8)]);
var inst_24117 = (state_24138[(7)]);
var inst_24119 = (state_24138[(11)]);
var inst_24117__$1 = topic_fn.call(null,inst_24069);
var inst_24118 = cljs.core.deref.call(null,mults);
var inst_24119__$1 = cljs.core.get.call(null,inst_24118,inst_24117__$1);
var state_24138__$1 = (function (){var statearr_24154 = state_24138;
(statearr_24154[(7)] = inst_24117__$1);

(statearr_24154[(11)] = inst_24119__$1);

return statearr_24154;
})();
if(cljs.core.truth_(inst_24119__$1)){
var statearr_24155_24197 = state_24138__$1;
(statearr_24155_24197[(1)] = (19));

} else {
var statearr_24156_24198 = state_24138__$1;
(statearr_24156_24198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (25))){
var inst_24128 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
var statearr_24157_24199 = state_24138__$1;
(statearr_24157_24199[(2)] = inst_24128);

(statearr_24157_24199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (17))){
var inst_24093 = (state_24138[(10)]);
var inst_24102 = cljs.core.first.call(null,inst_24093);
var inst_24103 = cljs.core.async.muxch_STAR_.call(null,inst_24102);
var inst_24104 = cljs.core.async.close_BANG_.call(null,inst_24103);
var inst_24105 = cljs.core.next.call(null,inst_24093);
var inst_24079 = inst_24105;
var inst_24080 = null;
var inst_24081 = (0);
var inst_24082 = (0);
var state_24138__$1 = (function (){var statearr_24158 = state_24138;
(statearr_24158[(12)] = inst_24079);

(statearr_24158[(13)] = inst_24081);

(statearr_24158[(14)] = inst_24080);

(statearr_24158[(15)] = inst_24082);

(statearr_24158[(16)] = inst_24104);

return statearr_24158;
})();
var statearr_24159_24200 = state_24138__$1;
(statearr_24159_24200[(2)] = null);

(statearr_24159_24200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (3))){
var inst_24136 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24138__$1,inst_24136);
} else {
if((state_val_24139 === (12))){
var inst_24113 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
var statearr_24160_24201 = state_24138__$1;
(statearr_24160_24201[(2)] = inst_24113);

(statearr_24160_24201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (2))){
var state_24138__$1 = state_24138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24138__$1,(4),ch);
} else {
if((state_val_24139 === (23))){
var state_24138__$1 = state_24138;
var statearr_24161_24202 = state_24138__$1;
(statearr_24161_24202[(2)] = null);

(statearr_24161_24202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (19))){
var inst_24069 = (state_24138[(8)]);
var inst_24119 = (state_24138[(11)]);
var inst_24121 = cljs.core.async.muxch_STAR_.call(null,inst_24119);
var state_24138__$1 = state_24138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24138__$1,(22),inst_24121,inst_24069);
} else {
if((state_val_24139 === (11))){
var inst_24093 = (state_24138[(10)]);
var inst_24079 = (state_24138[(12)]);
var inst_24093__$1 = cljs.core.seq.call(null,inst_24079);
var state_24138__$1 = (function (){var statearr_24162 = state_24138;
(statearr_24162[(10)] = inst_24093__$1);

return statearr_24162;
})();
if(inst_24093__$1){
var statearr_24163_24203 = state_24138__$1;
(statearr_24163_24203[(1)] = (13));

} else {
var statearr_24164_24204 = state_24138__$1;
(statearr_24164_24204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (9))){
var inst_24115 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
var statearr_24165_24205 = state_24138__$1;
(statearr_24165_24205[(2)] = inst_24115);

(statearr_24165_24205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (5))){
var inst_24076 = cljs.core.deref.call(null,mults);
var inst_24077 = cljs.core.vals.call(null,inst_24076);
var inst_24078 = cljs.core.seq.call(null,inst_24077);
var inst_24079 = inst_24078;
var inst_24080 = null;
var inst_24081 = (0);
var inst_24082 = (0);
var state_24138__$1 = (function (){var statearr_24166 = state_24138;
(statearr_24166[(12)] = inst_24079);

(statearr_24166[(13)] = inst_24081);

(statearr_24166[(14)] = inst_24080);

(statearr_24166[(15)] = inst_24082);

return statearr_24166;
})();
var statearr_24167_24206 = state_24138__$1;
(statearr_24167_24206[(2)] = null);

(statearr_24167_24206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (14))){
var state_24138__$1 = state_24138;
var statearr_24171_24207 = state_24138__$1;
(statearr_24171_24207[(2)] = null);

(statearr_24171_24207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (16))){
var inst_24093 = (state_24138[(10)]);
var inst_24097 = cljs.core.chunk_first.call(null,inst_24093);
var inst_24098 = cljs.core.chunk_rest.call(null,inst_24093);
var inst_24099 = cljs.core.count.call(null,inst_24097);
var inst_24079 = inst_24098;
var inst_24080 = inst_24097;
var inst_24081 = inst_24099;
var inst_24082 = (0);
var state_24138__$1 = (function (){var statearr_24172 = state_24138;
(statearr_24172[(12)] = inst_24079);

(statearr_24172[(13)] = inst_24081);

(statearr_24172[(14)] = inst_24080);

(statearr_24172[(15)] = inst_24082);

return statearr_24172;
})();
var statearr_24173_24208 = state_24138__$1;
(statearr_24173_24208[(2)] = null);

(statearr_24173_24208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (10))){
var inst_24079 = (state_24138[(12)]);
var inst_24081 = (state_24138[(13)]);
var inst_24080 = (state_24138[(14)]);
var inst_24082 = (state_24138[(15)]);
var inst_24087 = cljs.core._nth.call(null,inst_24080,inst_24082);
var inst_24088 = cljs.core.async.muxch_STAR_.call(null,inst_24087);
var inst_24089 = cljs.core.async.close_BANG_.call(null,inst_24088);
var inst_24090 = (inst_24082 + (1));
var tmp24168 = inst_24079;
var tmp24169 = inst_24081;
var tmp24170 = inst_24080;
var inst_24079__$1 = tmp24168;
var inst_24080__$1 = tmp24170;
var inst_24081__$1 = tmp24169;
var inst_24082__$1 = inst_24090;
var state_24138__$1 = (function (){var statearr_24174 = state_24138;
(statearr_24174[(17)] = inst_24089);

(statearr_24174[(12)] = inst_24079__$1);

(statearr_24174[(13)] = inst_24081__$1);

(statearr_24174[(14)] = inst_24080__$1);

(statearr_24174[(15)] = inst_24082__$1);

return statearr_24174;
})();
var statearr_24175_24209 = state_24138__$1;
(statearr_24175_24209[(2)] = null);

(statearr_24175_24209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (18))){
var inst_24108 = (state_24138[(2)]);
var state_24138__$1 = state_24138;
var statearr_24176_24210 = state_24138__$1;
(statearr_24176_24210[(2)] = inst_24108);

(statearr_24176_24210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24139 === (8))){
var inst_24081 = (state_24138[(13)]);
var inst_24082 = (state_24138[(15)]);
var inst_24084 = (inst_24082 < inst_24081);
var inst_24085 = inst_24084;
var state_24138__$1 = state_24138;
if(cljs.core.truth_(inst_24085)){
var statearr_24177_24211 = state_24138__$1;
(statearr_24177_24211[(1)] = (10));

} else {
var statearr_24178_24212 = state_24138__$1;
(statearr_24178_24212[(1)] = (11));

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
});})(c__22951__auto___24184,mults,ensure_mult,p))
;
return ((function (switch__22856__auto__,c__22951__auto___24184,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24179[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24179[(1)] = (1));

return statearr_24179;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24138){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24180){if((e24180 instanceof Object)){
var ex__22860__auto__ = e24180;
var statearr_24181_24213 = state_24138;
(statearr_24181_24213[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24214 = state_24138;
state_24138 = G__24214;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24184,mults,ensure_mult,p))
})();
var state__22953__auto__ = (function (){var statearr_24182 = f__22952__auto__.call(null);
(statearr_24182[(6)] = c__22951__auto___24184);

return statearr_24182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24184,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24216 = arguments.length;
switch (G__24216) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24219 = arguments.length;
switch (G__24219) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24222 = arguments.length;
switch (G__24222) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22951__auto___24289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24261){
var state_val_24262 = (state_24261[(1)]);
if((state_val_24262 === (7))){
var state_24261__$1 = state_24261;
var statearr_24263_24290 = state_24261__$1;
(statearr_24263_24290[(2)] = null);

(statearr_24263_24290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (1))){
var state_24261__$1 = state_24261;
var statearr_24264_24291 = state_24261__$1;
(statearr_24264_24291[(2)] = null);

(statearr_24264_24291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (4))){
var inst_24225 = (state_24261[(7)]);
var inst_24227 = (inst_24225 < cnt);
var state_24261__$1 = state_24261;
if(cljs.core.truth_(inst_24227)){
var statearr_24265_24292 = state_24261__$1;
(statearr_24265_24292[(1)] = (6));

} else {
var statearr_24266_24293 = state_24261__$1;
(statearr_24266_24293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (15))){
var inst_24257 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24267_24294 = state_24261__$1;
(statearr_24267_24294[(2)] = inst_24257);

(statearr_24267_24294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (13))){
var inst_24250 = cljs.core.async.close_BANG_.call(null,out);
var state_24261__$1 = state_24261;
var statearr_24268_24295 = state_24261__$1;
(statearr_24268_24295[(2)] = inst_24250);

(statearr_24268_24295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (6))){
var state_24261__$1 = state_24261;
var statearr_24269_24296 = state_24261__$1;
(statearr_24269_24296[(2)] = null);

(statearr_24269_24296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (3))){
var inst_24259 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24261__$1,inst_24259);
} else {
if((state_val_24262 === (12))){
var inst_24247 = (state_24261[(8)]);
var inst_24247__$1 = (state_24261[(2)]);
var inst_24248 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24247__$1);
var state_24261__$1 = (function (){var statearr_24270 = state_24261;
(statearr_24270[(8)] = inst_24247__$1);

return statearr_24270;
})();
if(cljs.core.truth_(inst_24248)){
var statearr_24271_24297 = state_24261__$1;
(statearr_24271_24297[(1)] = (13));

} else {
var statearr_24272_24298 = state_24261__$1;
(statearr_24272_24298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (2))){
var inst_24224 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24225 = (0);
var state_24261__$1 = (function (){var statearr_24273 = state_24261;
(statearr_24273[(7)] = inst_24225);

(statearr_24273[(9)] = inst_24224);

return statearr_24273;
})();
var statearr_24274_24299 = state_24261__$1;
(statearr_24274_24299[(2)] = null);

(statearr_24274_24299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (11))){
var inst_24225 = (state_24261[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24261,(10),Object,null,(9));
var inst_24234 = chs__$1.call(null,inst_24225);
var inst_24235 = done.call(null,inst_24225);
var inst_24236 = cljs.core.async.take_BANG_.call(null,inst_24234,inst_24235);
var state_24261__$1 = state_24261;
var statearr_24275_24300 = state_24261__$1;
(statearr_24275_24300[(2)] = inst_24236);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (9))){
var inst_24225 = (state_24261[(7)]);
var inst_24238 = (state_24261[(2)]);
var inst_24239 = (inst_24225 + (1));
var inst_24225__$1 = inst_24239;
var state_24261__$1 = (function (){var statearr_24276 = state_24261;
(statearr_24276[(10)] = inst_24238);

(statearr_24276[(7)] = inst_24225__$1);

return statearr_24276;
})();
var statearr_24277_24301 = state_24261__$1;
(statearr_24277_24301[(2)] = null);

(statearr_24277_24301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (5))){
var inst_24245 = (state_24261[(2)]);
var state_24261__$1 = (function (){var statearr_24278 = state_24261;
(statearr_24278[(11)] = inst_24245);

return statearr_24278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24261__$1,(12),dchan);
} else {
if((state_val_24262 === (14))){
var inst_24247 = (state_24261[(8)]);
var inst_24252 = cljs.core.apply.call(null,f,inst_24247);
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24261__$1,(16),out,inst_24252);
} else {
if((state_val_24262 === (16))){
var inst_24254 = (state_24261[(2)]);
var state_24261__$1 = (function (){var statearr_24279 = state_24261;
(statearr_24279[(12)] = inst_24254);

return statearr_24279;
})();
var statearr_24280_24302 = state_24261__$1;
(statearr_24280_24302[(2)] = null);

(statearr_24280_24302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (10))){
var inst_24229 = (state_24261[(2)]);
var inst_24230 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24261__$1 = (function (){var statearr_24281 = state_24261;
(statearr_24281[(13)] = inst_24229);

return statearr_24281;
})();
var statearr_24282_24303 = state_24261__$1;
(statearr_24282_24303[(2)] = inst_24230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (8))){
var inst_24243 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24283_24304 = state_24261__$1;
(statearr_24283_24304[(2)] = inst_24243);

(statearr_24283_24304[(1)] = (5));


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
});})(c__22951__auto___24289,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22856__auto__,c__22951__auto___24289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24284[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24261){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__22860__auto__ = e24285;
var statearr_24286_24305 = state_24261;
(statearr_24286_24305[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24306 = state_24261;
state_24261 = G__24306;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24289,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22953__auto__ = (function (){var statearr_24287 = f__22952__auto__.call(null);
(statearr_24287[(6)] = c__22951__auto___24289);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24289,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24309 = arguments.length;
switch (G__24309) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22951__auto___24363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24363,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24363,out){
return (function (state_24341){
var state_val_24342 = (state_24341[(1)]);
if((state_val_24342 === (7))){
var inst_24320 = (state_24341[(7)]);
var inst_24321 = (state_24341[(8)]);
var inst_24320__$1 = (state_24341[(2)]);
var inst_24321__$1 = cljs.core.nth.call(null,inst_24320__$1,(0),null);
var inst_24322 = cljs.core.nth.call(null,inst_24320__$1,(1),null);
var inst_24323 = (inst_24321__$1 == null);
var state_24341__$1 = (function (){var statearr_24343 = state_24341;
(statearr_24343[(7)] = inst_24320__$1);

(statearr_24343[(9)] = inst_24322);

(statearr_24343[(8)] = inst_24321__$1);

return statearr_24343;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24344_24364 = state_24341__$1;
(statearr_24344_24364[(1)] = (8));

} else {
var statearr_24345_24365 = state_24341__$1;
(statearr_24345_24365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (1))){
var inst_24310 = cljs.core.vec.call(null,chs);
var inst_24311 = inst_24310;
var state_24341__$1 = (function (){var statearr_24346 = state_24341;
(statearr_24346[(10)] = inst_24311);

return statearr_24346;
})();
var statearr_24347_24366 = state_24341__$1;
(statearr_24347_24366[(2)] = null);

(statearr_24347_24366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (4))){
var inst_24311 = (state_24341[(10)]);
var state_24341__$1 = state_24341;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24341__$1,(7),inst_24311);
} else {
if((state_val_24342 === (6))){
var inst_24337 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24348_24367 = state_24341__$1;
(statearr_24348_24367[(2)] = inst_24337);

(statearr_24348_24367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (3))){
var inst_24339 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24341__$1,inst_24339);
} else {
if((state_val_24342 === (2))){
var inst_24311 = (state_24341[(10)]);
var inst_24313 = cljs.core.count.call(null,inst_24311);
var inst_24314 = (inst_24313 > (0));
var state_24341__$1 = state_24341;
if(cljs.core.truth_(inst_24314)){
var statearr_24350_24368 = state_24341__$1;
(statearr_24350_24368[(1)] = (4));

} else {
var statearr_24351_24369 = state_24341__$1;
(statearr_24351_24369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (11))){
var inst_24311 = (state_24341[(10)]);
var inst_24330 = (state_24341[(2)]);
var tmp24349 = inst_24311;
var inst_24311__$1 = tmp24349;
var state_24341__$1 = (function (){var statearr_24352 = state_24341;
(statearr_24352[(10)] = inst_24311__$1);

(statearr_24352[(11)] = inst_24330);

return statearr_24352;
})();
var statearr_24353_24370 = state_24341__$1;
(statearr_24353_24370[(2)] = null);

(statearr_24353_24370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (9))){
var inst_24321 = (state_24341[(8)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24341__$1,(11),out,inst_24321);
} else {
if((state_val_24342 === (5))){
var inst_24335 = cljs.core.async.close_BANG_.call(null,out);
var state_24341__$1 = state_24341;
var statearr_24354_24371 = state_24341__$1;
(statearr_24354_24371[(2)] = inst_24335);

(statearr_24354_24371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (10))){
var inst_24333 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24355_24372 = state_24341__$1;
(statearr_24355_24372[(2)] = inst_24333);

(statearr_24355_24372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (8))){
var inst_24320 = (state_24341[(7)]);
var inst_24311 = (state_24341[(10)]);
var inst_24322 = (state_24341[(9)]);
var inst_24321 = (state_24341[(8)]);
var inst_24325 = (function (){var cs = inst_24311;
var vec__24316 = inst_24320;
var v = inst_24321;
var c = inst_24322;
return ((function (cs,vec__24316,v,c,inst_24320,inst_24311,inst_24322,inst_24321,state_val_24342,c__22951__auto___24363,out){
return (function (p1__24307_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24307_SHARP_);
});
;})(cs,vec__24316,v,c,inst_24320,inst_24311,inst_24322,inst_24321,state_val_24342,c__22951__auto___24363,out))
})();
var inst_24326 = cljs.core.filterv.call(null,inst_24325,inst_24311);
var inst_24311__$1 = inst_24326;
var state_24341__$1 = (function (){var statearr_24356 = state_24341;
(statearr_24356[(10)] = inst_24311__$1);

return statearr_24356;
})();
var statearr_24357_24373 = state_24341__$1;
(statearr_24357_24373[(2)] = null);

(statearr_24357_24373[(1)] = (2));


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
});})(c__22951__auto___24363,out))
;
return ((function (switch__22856__auto__,c__22951__auto___24363,out){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24358[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24358[(1)] = (1));

return statearr_24358;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24341){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24359){if((e24359 instanceof Object)){
var ex__22860__auto__ = e24359;
var statearr_24360_24374 = state_24341;
(statearr_24360_24374[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24375 = state_24341;
state_24341 = G__24375;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24363,out))
})();
var state__22953__auto__ = (function (){var statearr_24361 = f__22952__auto__.call(null);
(statearr_24361[(6)] = c__22951__auto___24363);

return statearr_24361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24363,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24377 = arguments.length;
switch (G__24377) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22951__auto___24422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24422,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24422,out){
return (function (state_24401){
var state_val_24402 = (state_24401[(1)]);
if((state_val_24402 === (7))){
var inst_24383 = (state_24401[(7)]);
var inst_24383__$1 = (state_24401[(2)]);
var inst_24384 = (inst_24383__$1 == null);
var inst_24385 = cljs.core.not.call(null,inst_24384);
var state_24401__$1 = (function (){var statearr_24403 = state_24401;
(statearr_24403[(7)] = inst_24383__$1);

return statearr_24403;
})();
if(inst_24385){
var statearr_24404_24423 = state_24401__$1;
(statearr_24404_24423[(1)] = (8));

} else {
var statearr_24405_24424 = state_24401__$1;
(statearr_24405_24424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (1))){
var inst_24378 = (0);
var state_24401__$1 = (function (){var statearr_24406 = state_24401;
(statearr_24406[(8)] = inst_24378);

return statearr_24406;
})();
var statearr_24407_24425 = state_24401__$1;
(statearr_24407_24425[(2)] = null);

(statearr_24407_24425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (4))){
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24401__$1,(7),ch);
} else {
if((state_val_24402 === (6))){
var inst_24396 = (state_24401[(2)]);
var state_24401__$1 = state_24401;
var statearr_24408_24426 = state_24401__$1;
(statearr_24408_24426[(2)] = inst_24396);

(statearr_24408_24426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (3))){
var inst_24398 = (state_24401[(2)]);
var inst_24399 = cljs.core.async.close_BANG_.call(null,out);
var state_24401__$1 = (function (){var statearr_24409 = state_24401;
(statearr_24409[(9)] = inst_24398);

return statearr_24409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24401__$1,inst_24399);
} else {
if((state_val_24402 === (2))){
var inst_24378 = (state_24401[(8)]);
var inst_24380 = (inst_24378 < n);
var state_24401__$1 = state_24401;
if(cljs.core.truth_(inst_24380)){
var statearr_24410_24427 = state_24401__$1;
(statearr_24410_24427[(1)] = (4));

} else {
var statearr_24411_24428 = state_24401__$1;
(statearr_24411_24428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (11))){
var inst_24378 = (state_24401[(8)]);
var inst_24388 = (state_24401[(2)]);
var inst_24389 = (inst_24378 + (1));
var inst_24378__$1 = inst_24389;
var state_24401__$1 = (function (){var statearr_24412 = state_24401;
(statearr_24412[(10)] = inst_24388);

(statearr_24412[(8)] = inst_24378__$1);

return statearr_24412;
})();
var statearr_24413_24429 = state_24401__$1;
(statearr_24413_24429[(2)] = null);

(statearr_24413_24429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (9))){
var state_24401__$1 = state_24401;
var statearr_24414_24430 = state_24401__$1;
(statearr_24414_24430[(2)] = null);

(statearr_24414_24430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (5))){
var state_24401__$1 = state_24401;
var statearr_24415_24431 = state_24401__$1;
(statearr_24415_24431[(2)] = null);

(statearr_24415_24431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (10))){
var inst_24393 = (state_24401[(2)]);
var state_24401__$1 = state_24401;
var statearr_24416_24432 = state_24401__$1;
(statearr_24416_24432[(2)] = inst_24393);

(statearr_24416_24432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (8))){
var inst_24383 = (state_24401[(7)]);
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24401__$1,(11),out,inst_24383);
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
});})(c__22951__auto___24422,out))
;
return ((function (switch__22856__auto__,c__22951__auto___24422,out){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24417[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24417[(1)] = (1));

return statearr_24417;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24401){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24418){if((e24418 instanceof Object)){
var ex__22860__auto__ = e24418;
var statearr_24419_24433 = state_24401;
(statearr_24419_24433[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24434 = state_24401;
state_24401 = G__24434;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24422,out))
})();
var state__22953__auto__ = (function (){var statearr_24420 = f__22952__auto__.call(null);
(statearr_24420[(6)] = c__22951__auto___24422);

return statearr_24420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24422,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24436 = (function (f,ch,meta24437){
this.f = f;
this.ch = ch;
this.meta24437 = meta24437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24438,meta24437__$1){
var self__ = this;
var _24438__$1 = this;
return (new cljs.core.async.t_cljs$core$async24436(self__.f,self__.ch,meta24437__$1));
});

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24438){
var self__ = this;
var _24438__$1 = this;
return self__.meta24437;
});

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24439 = (function (f,ch,meta24437,_,fn1,meta24440){
this.f = f;
this.ch = ch;
this.meta24437 = meta24437;
this._ = _;
this.fn1 = fn1;
this.meta24440 = meta24440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24441,meta24440__$1){
var self__ = this;
var _24441__$1 = this;
return (new cljs.core.async.t_cljs$core$async24439(self__.f,self__.ch,self__.meta24437,self__._,self__.fn1,meta24440__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24441){
var self__ = this;
var _24441__$1 = this;
return self__.meta24440;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24435_SHARP_){
return f1.call(null,(((p1__24435_SHARP_ == null))?null:self__.f.call(null,p1__24435_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24439.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24437","meta24437",-32603979,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24436","cljs.core.async/t_cljs$core$async24436",1207441874,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24440","meta24440",1854610552,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24439";

cljs.core.async.t_cljs$core$async24439.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24439");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24439.
 */
cljs.core.async.__GT_t_cljs$core$async24439 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24439(f__$1,ch__$1,meta24437__$1,___$2,fn1__$1,meta24440){
return (new cljs.core.async.t_cljs$core$async24439(f__$1,ch__$1,meta24437__$1,___$2,fn1__$1,meta24440));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24439(self__.f,self__.ch,self__.meta24437,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24437","meta24437",-32603979,null)], null);
});

cljs.core.async.t_cljs$core$async24436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24436";

cljs.core.async.t_cljs$core$async24436.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24436");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24436.
 */
cljs.core.async.__GT_t_cljs$core$async24436 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24436(f__$1,ch__$1,meta24437){
return (new cljs.core.async.t_cljs$core$async24436(f__$1,ch__$1,meta24437));
});

}

return (new cljs.core.async.t_cljs$core$async24436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24442 = (function (f,ch,meta24443){
this.f = f;
this.ch = ch;
this.meta24443 = meta24443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24444,meta24443__$1){
var self__ = this;
var _24444__$1 = this;
return (new cljs.core.async.t_cljs$core$async24442(self__.f,self__.ch,meta24443__$1));
});

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24444){
var self__ = this;
var _24444__$1 = this;
return self__.meta24443;
});

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24443","meta24443",2071920581,null)], null);
});

cljs.core.async.t_cljs$core$async24442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24442";

cljs.core.async.t_cljs$core$async24442.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24442");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24442.
 */
cljs.core.async.__GT_t_cljs$core$async24442 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24442(f__$1,ch__$1,meta24443){
return (new cljs.core.async.t_cljs$core$async24442(f__$1,ch__$1,meta24443));
});

}

return (new cljs.core.async.t_cljs$core$async24442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24445 = (function (p,ch,meta24446){
this.p = p;
this.ch = ch;
this.meta24446 = meta24446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24447,meta24446__$1){
var self__ = this;
var _24447__$1 = this;
return (new cljs.core.async.t_cljs$core$async24445(self__.p,self__.ch,meta24446__$1));
});

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24447){
var self__ = this;
var _24447__$1 = this;
return self__.meta24446;
});

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24446","meta24446",2045081711,null)], null);
});

cljs.core.async.t_cljs$core$async24445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24445";

cljs.core.async.t_cljs$core$async24445.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24445");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24445.
 */
cljs.core.async.__GT_t_cljs$core$async24445 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24445(p__$1,ch__$1,meta24446){
return (new cljs.core.async.t_cljs$core$async24445(p__$1,ch__$1,meta24446));
});

}

return (new cljs.core.async.t_cljs$core$async24445(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24449 = arguments.length;
switch (G__24449) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22951__auto___24489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24489,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24489,out){
return (function (state_24470){
var state_val_24471 = (state_24470[(1)]);
if((state_val_24471 === (7))){
var inst_24466 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
var statearr_24472_24490 = state_24470__$1;
(statearr_24472_24490[(2)] = inst_24466);

(statearr_24472_24490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (1))){
var state_24470__$1 = state_24470;
var statearr_24473_24491 = state_24470__$1;
(statearr_24473_24491[(2)] = null);

(statearr_24473_24491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (4))){
var inst_24452 = (state_24470[(7)]);
var inst_24452__$1 = (state_24470[(2)]);
var inst_24453 = (inst_24452__$1 == null);
var state_24470__$1 = (function (){var statearr_24474 = state_24470;
(statearr_24474[(7)] = inst_24452__$1);

return statearr_24474;
})();
if(cljs.core.truth_(inst_24453)){
var statearr_24475_24492 = state_24470__$1;
(statearr_24475_24492[(1)] = (5));

} else {
var statearr_24476_24493 = state_24470__$1;
(statearr_24476_24493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (6))){
var inst_24452 = (state_24470[(7)]);
var inst_24457 = p.call(null,inst_24452);
var state_24470__$1 = state_24470;
if(cljs.core.truth_(inst_24457)){
var statearr_24477_24494 = state_24470__$1;
(statearr_24477_24494[(1)] = (8));

} else {
var statearr_24478_24495 = state_24470__$1;
(statearr_24478_24495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (3))){
var inst_24468 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24470__$1,inst_24468);
} else {
if((state_val_24471 === (2))){
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24470__$1,(4),ch);
} else {
if((state_val_24471 === (11))){
var inst_24460 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
var statearr_24479_24496 = state_24470__$1;
(statearr_24479_24496[(2)] = inst_24460);

(statearr_24479_24496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (9))){
var state_24470__$1 = state_24470;
var statearr_24480_24497 = state_24470__$1;
(statearr_24480_24497[(2)] = null);

(statearr_24480_24497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (5))){
var inst_24455 = cljs.core.async.close_BANG_.call(null,out);
var state_24470__$1 = state_24470;
var statearr_24481_24498 = state_24470__$1;
(statearr_24481_24498[(2)] = inst_24455);

(statearr_24481_24498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (10))){
var inst_24463 = (state_24470[(2)]);
var state_24470__$1 = (function (){var statearr_24482 = state_24470;
(statearr_24482[(8)] = inst_24463);

return statearr_24482;
})();
var statearr_24483_24499 = state_24470__$1;
(statearr_24483_24499[(2)] = null);

(statearr_24483_24499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24471 === (8))){
var inst_24452 = (state_24470[(7)]);
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24470__$1,(11),out,inst_24452);
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
});})(c__22951__auto___24489,out))
;
return ((function (switch__22856__auto__,c__22951__auto___24489,out){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24484 = [null,null,null,null,null,null,null,null,null];
(statearr_24484[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24484[(1)] = (1));

return statearr_24484;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24470){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24485){if((e24485 instanceof Object)){
var ex__22860__auto__ = e24485;
var statearr_24486_24500 = state_24470;
(statearr_24486_24500[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24501 = state_24470;
state_24470 = G__24501;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24489,out))
})();
var state__22953__auto__ = (function (){var statearr_24487 = f__22952__auto__.call(null);
(statearr_24487[(6)] = c__22951__auto___24489);

return statearr_24487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24489,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24503 = arguments.length;
switch (G__24503) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_24566){
var state_val_24567 = (state_24566[(1)]);
if((state_val_24567 === (7))){
var inst_24562 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24568_24606 = state_24566__$1;
(statearr_24568_24606[(2)] = inst_24562);

(statearr_24568_24606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (20))){
var inst_24532 = (state_24566[(7)]);
var inst_24543 = (state_24566[(2)]);
var inst_24544 = cljs.core.next.call(null,inst_24532);
var inst_24518 = inst_24544;
var inst_24519 = null;
var inst_24520 = (0);
var inst_24521 = (0);
var state_24566__$1 = (function (){var statearr_24569 = state_24566;
(statearr_24569[(8)] = inst_24520);

(statearr_24569[(9)] = inst_24543);

(statearr_24569[(10)] = inst_24518);

(statearr_24569[(11)] = inst_24521);

(statearr_24569[(12)] = inst_24519);

return statearr_24569;
})();
var statearr_24570_24607 = state_24566__$1;
(statearr_24570_24607[(2)] = null);

(statearr_24570_24607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (1))){
var state_24566__$1 = state_24566;
var statearr_24571_24608 = state_24566__$1;
(statearr_24571_24608[(2)] = null);

(statearr_24571_24608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (4))){
var inst_24507 = (state_24566[(13)]);
var inst_24507__$1 = (state_24566[(2)]);
var inst_24508 = (inst_24507__$1 == null);
var state_24566__$1 = (function (){var statearr_24572 = state_24566;
(statearr_24572[(13)] = inst_24507__$1);

return statearr_24572;
})();
if(cljs.core.truth_(inst_24508)){
var statearr_24573_24609 = state_24566__$1;
(statearr_24573_24609[(1)] = (5));

} else {
var statearr_24574_24610 = state_24566__$1;
(statearr_24574_24610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (15))){
var state_24566__$1 = state_24566;
var statearr_24578_24611 = state_24566__$1;
(statearr_24578_24611[(2)] = null);

(statearr_24578_24611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (21))){
var state_24566__$1 = state_24566;
var statearr_24579_24612 = state_24566__$1;
(statearr_24579_24612[(2)] = null);

(statearr_24579_24612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (13))){
var inst_24520 = (state_24566[(8)]);
var inst_24518 = (state_24566[(10)]);
var inst_24521 = (state_24566[(11)]);
var inst_24519 = (state_24566[(12)]);
var inst_24528 = (state_24566[(2)]);
var inst_24529 = (inst_24521 + (1));
var tmp24575 = inst_24520;
var tmp24576 = inst_24518;
var tmp24577 = inst_24519;
var inst_24518__$1 = tmp24576;
var inst_24519__$1 = tmp24577;
var inst_24520__$1 = tmp24575;
var inst_24521__$1 = inst_24529;
var state_24566__$1 = (function (){var statearr_24580 = state_24566;
(statearr_24580[(14)] = inst_24528);

(statearr_24580[(8)] = inst_24520__$1);

(statearr_24580[(10)] = inst_24518__$1);

(statearr_24580[(11)] = inst_24521__$1);

(statearr_24580[(12)] = inst_24519__$1);

return statearr_24580;
})();
var statearr_24581_24613 = state_24566__$1;
(statearr_24581_24613[(2)] = null);

(statearr_24581_24613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (22))){
var state_24566__$1 = state_24566;
var statearr_24582_24614 = state_24566__$1;
(statearr_24582_24614[(2)] = null);

(statearr_24582_24614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (6))){
var inst_24507 = (state_24566[(13)]);
var inst_24516 = f.call(null,inst_24507);
var inst_24517 = cljs.core.seq.call(null,inst_24516);
var inst_24518 = inst_24517;
var inst_24519 = null;
var inst_24520 = (0);
var inst_24521 = (0);
var state_24566__$1 = (function (){var statearr_24583 = state_24566;
(statearr_24583[(8)] = inst_24520);

(statearr_24583[(10)] = inst_24518);

(statearr_24583[(11)] = inst_24521);

(statearr_24583[(12)] = inst_24519);

return statearr_24583;
})();
var statearr_24584_24615 = state_24566__$1;
(statearr_24584_24615[(2)] = null);

(statearr_24584_24615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (17))){
var inst_24532 = (state_24566[(7)]);
var inst_24536 = cljs.core.chunk_first.call(null,inst_24532);
var inst_24537 = cljs.core.chunk_rest.call(null,inst_24532);
var inst_24538 = cljs.core.count.call(null,inst_24536);
var inst_24518 = inst_24537;
var inst_24519 = inst_24536;
var inst_24520 = inst_24538;
var inst_24521 = (0);
var state_24566__$1 = (function (){var statearr_24585 = state_24566;
(statearr_24585[(8)] = inst_24520);

(statearr_24585[(10)] = inst_24518);

(statearr_24585[(11)] = inst_24521);

(statearr_24585[(12)] = inst_24519);

return statearr_24585;
})();
var statearr_24586_24616 = state_24566__$1;
(statearr_24586_24616[(2)] = null);

(statearr_24586_24616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (3))){
var inst_24564 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24566__$1,inst_24564);
} else {
if((state_val_24567 === (12))){
var inst_24552 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24587_24617 = state_24566__$1;
(statearr_24587_24617[(2)] = inst_24552);

(statearr_24587_24617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (2))){
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24566__$1,(4),in$);
} else {
if((state_val_24567 === (23))){
var inst_24560 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24588_24618 = state_24566__$1;
(statearr_24588_24618[(2)] = inst_24560);

(statearr_24588_24618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (19))){
var inst_24547 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24589_24619 = state_24566__$1;
(statearr_24589_24619[(2)] = inst_24547);

(statearr_24589_24619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (11))){
var inst_24518 = (state_24566[(10)]);
var inst_24532 = (state_24566[(7)]);
var inst_24532__$1 = cljs.core.seq.call(null,inst_24518);
var state_24566__$1 = (function (){var statearr_24590 = state_24566;
(statearr_24590[(7)] = inst_24532__$1);

return statearr_24590;
})();
if(inst_24532__$1){
var statearr_24591_24620 = state_24566__$1;
(statearr_24591_24620[(1)] = (14));

} else {
var statearr_24592_24621 = state_24566__$1;
(statearr_24592_24621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (9))){
var inst_24554 = (state_24566[(2)]);
var inst_24555 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24566__$1 = (function (){var statearr_24593 = state_24566;
(statearr_24593[(15)] = inst_24554);

return statearr_24593;
})();
if(cljs.core.truth_(inst_24555)){
var statearr_24594_24622 = state_24566__$1;
(statearr_24594_24622[(1)] = (21));

} else {
var statearr_24595_24623 = state_24566__$1;
(statearr_24595_24623[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (5))){
var inst_24510 = cljs.core.async.close_BANG_.call(null,out);
var state_24566__$1 = state_24566;
var statearr_24596_24624 = state_24566__$1;
(statearr_24596_24624[(2)] = inst_24510);

(statearr_24596_24624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (14))){
var inst_24532 = (state_24566[(7)]);
var inst_24534 = cljs.core.chunked_seq_QMARK_.call(null,inst_24532);
var state_24566__$1 = state_24566;
if(inst_24534){
var statearr_24597_24625 = state_24566__$1;
(statearr_24597_24625[(1)] = (17));

} else {
var statearr_24598_24626 = state_24566__$1;
(statearr_24598_24626[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (16))){
var inst_24550 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24599_24627 = state_24566__$1;
(statearr_24599_24627[(2)] = inst_24550);

(statearr_24599_24627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (10))){
var inst_24521 = (state_24566[(11)]);
var inst_24519 = (state_24566[(12)]);
var inst_24526 = cljs.core._nth.call(null,inst_24519,inst_24521);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24566__$1,(13),out,inst_24526);
} else {
if((state_val_24567 === (18))){
var inst_24532 = (state_24566[(7)]);
var inst_24541 = cljs.core.first.call(null,inst_24532);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24566__$1,(20),out,inst_24541);
} else {
if((state_val_24567 === (8))){
var inst_24520 = (state_24566[(8)]);
var inst_24521 = (state_24566[(11)]);
var inst_24523 = (inst_24521 < inst_24520);
var inst_24524 = inst_24523;
var state_24566__$1 = state_24566;
if(cljs.core.truth_(inst_24524)){
var statearr_24600_24628 = state_24566__$1;
(statearr_24600_24628[(1)] = (10));

} else {
var statearr_24601_24629 = state_24566__$1;
(statearr_24601_24629[(1)] = (11));

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
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22857__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22857__auto____0 = (function (){
var statearr_24602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24602[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22857__auto__);

(statearr_24602[(1)] = (1));

return statearr_24602;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22857__auto____1 = (function (state_24566){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24603){if((e24603 instanceof Object)){
var ex__22860__auto__ = e24603;
var statearr_24604_24630 = state_24566;
(statearr_24604_24630[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24631 = state_24566;
state_24566 = G__24631;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22857__auto__ = function(state_24566){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22857__auto____1.call(this,state_24566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22857__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22857__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_24605 = f__22952__auto__.call(null);
(statearr_24605[(6)] = c__22951__auto__);

return statearr_24605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24633 = arguments.length;
switch (G__24633) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24636 = arguments.length;
switch (G__24636) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24639 = arguments.length;
switch (G__24639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22951__auto___24686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24686,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24686,out){
return (function (state_24663){
var state_val_24664 = (state_24663[(1)]);
if((state_val_24664 === (7))){
var inst_24658 = (state_24663[(2)]);
var state_24663__$1 = state_24663;
var statearr_24665_24687 = state_24663__$1;
(statearr_24665_24687[(2)] = inst_24658);

(statearr_24665_24687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (1))){
var inst_24640 = null;
var state_24663__$1 = (function (){var statearr_24666 = state_24663;
(statearr_24666[(7)] = inst_24640);

return statearr_24666;
})();
var statearr_24667_24688 = state_24663__$1;
(statearr_24667_24688[(2)] = null);

(statearr_24667_24688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (4))){
var inst_24643 = (state_24663[(8)]);
var inst_24643__$1 = (state_24663[(2)]);
var inst_24644 = (inst_24643__$1 == null);
var inst_24645 = cljs.core.not.call(null,inst_24644);
var state_24663__$1 = (function (){var statearr_24668 = state_24663;
(statearr_24668[(8)] = inst_24643__$1);

return statearr_24668;
})();
if(inst_24645){
var statearr_24669_24689 = state_24663__$1;
(statearr_24669_24689[(1)] = (5));

} else {
var statearr_24670_24690 = state_24663__$1;
(statearr_24670_24690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (6))){
var state_24663__$1 = state_24663;
var statearr_24671_24691 = state_24663__$1;
(statearr_24671_24691[(2)] = null);

(statearr_24671_24691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (3))){
var inst_24660 = (state_24663[(2)]);
var inst_24661 = cljs.core.async.close_BANG_.call(null,out);
var state_24663__$1 = (function (){var statearr_24672 = state_24663;
(statearr_24672[(9)] = inst_24660);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24663__$1,inst_24661);
} else {
if((state_val_24664 === (2))){
var state_24663__$1 = state_24663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24663__$1,(4),ch);
} else {
if((state_val_24664 === (11))){
var inst_24643 = (state_24663[(8)]);
var inst_24652 = (state_24663[(2)]);
var inst_24640 = inst_24643;
var state_24663__$1 = (function (){var statearr_24673 = state_24663;
(statearr_24673[(7)] = inst_24640);

(statearr_24673[(10)] = inst_24652);

return statearr_24673;
})();
var statearr_24674_24692 = state_24663__$1;
(statearr_24674_24692[(2)] = null);

(statearr_24674_24692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (9))){
var inst_24643 = (state_24663[(8)]);
var state_24663__$1 = state_24663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24663__$1,(11),out,inst_24643);
} else {
if((state_val_24664 === (5))){
var inst_24640 = (state_24663[(7)]);
var inst_24643 = (state_24663[(8)]);
var inst_24647 = cljs.core._EQ_.call(null,inst_24643,inst_24640);
var state_24663__$1 = state_24663;
if(inst_24647){
var statearr_24676_24693 = state_24663__$1;
(statearr_24676_24693[(1)] = (8));

} else {
var statearr_24677_24694 = state_24663__$1;
(statearr_24677_24694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (10))){
var inst_24655 = (state_24663[(2)]);
var state_24663__$1 = state_24663;
var statearr_24678_24695 = state_24663__$1;
(statearr_24678_24695[(2)] = inst_24655);

(statearr_24678_24695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (8))){
var inst_24640 = (state_24663[(7)]);
var tmp24675 = inst_24640;
var inst_24640__$1 = tmp24675;
var state_24663__$1 = (function (){var statearr_24679 = state_24663;
(statearr_24679[(7)] = inst_24640__$1);

return statearr_24679;
})();
var statearr_24680_24696 = state_24663__$1;
(statearr_24680_24696[(2)] = null);

(statearr_24680_24696[(1)] = (2));


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
});})(c__22951__auto___24686,out))
;
return ((function (switch__22856__auto__,c__22951__auto___24686,out){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24681[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24681[(1)] = (1));

return statearr_24681;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24663){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24682){if((e24682 instanceof Object)){
var ex__22860__auto__ = e24682;
var statearr_24683_24697 = state_24663;
(statearr_24683_24697[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24698 = state_24663;
state_24663 = G__24698;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24686,out))
})();
var state__22953__auto__ = (function (){var statearr_24684 = f__22952__auto__.call(null);
(statearr_24684[(6)] = c__22951__auto___24686);

return statearr_24684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24686,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24700 = arguments.length;
switch (G__24700) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22951__auto___24766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24766,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24766,out){
return (function (state_24738){
var state_val_24739 = (state_24738[(1)]);
if((state_val_24739 === (7))){
var inst_24734 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24740_24767 = state_24738__$1;
(statearr_24740_24767[(2)] = inst_24734);

(statearr_24740_24767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (1))){
var inst_24701 = (new Array(n));
var inst_24702 = inst_24701;
var inst_24703 = (0);
var state_24738__$1 = (function (){var statearr_24741 = state_24738;
(statearr_24741[(7)] = inst_24703);

(statearr_24741[(8)] = inst_24702);

return statearr_24741;
})();
var statearr_24742_24768 = state_24738__$1;
(statearr_24742_24768[(2)] = null);

(statearr_24742_24768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (4))){
var inst_24706 = (state_24738[(9)]);
var inst_24706__$1 = (state_24738[(2)]);
var inst_24707 = (inst_24706__$1 == null);
var inst_24708 = cljs.core.not.call(null,inst_24707);
var state_24738__$1 = (function (){var statearr_24743 = state_24738;
(statearr_24743[(9)] = inst_24706__$1);

return statearr_24743;
})();
if(inst_24708){
var statearr_24744_24769 = state_24738__$1;
(statearr_24744_24769[(1)] = (5));

} else {
var statearr_24745_24770 = state_24738__$1;
(statearr_24745_24770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (15))){
var inst_24728 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24746_24771 = state_24738__$1;
(statearr_24746_24771[(2)] = inst_24728);

(statearr_24746_24771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (13))){
var state_24738__$1 = state_24738;
var statearr_24747_24772 = state_24738__$1;
(statearr_24747_24772[(2)] = null);

(statearr_24747_24772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (6))){
var inst_24703 = (state_24738[(7)]);
var inst_24724 = (inst_24703 > (0));
var state_24738__$1 = state_24738;
if(cljs.core.truth_(inst_24724)){
var statearr_24748_24773 = state_24738__$1;
(statearr_24748_24773[(1)] = (12));

} else {
var statearr_24749_24774 = state_24738__$1;
(statearr_24749_24774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (3))){
var inst_24736 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24738__$1,inst_24736);
} else {
if((state_val_24739 === (12))){
var inst_24702 = (state_24738[(8)]);
var inst_24726 = cljs.core.vec.call(null,inst_24702);
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24738__$1,(15),out,inst_24726);
} else {
if((state_val_24739 === (2))){
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24738__$1,(4),ch);
} else {
if((state_val_24739 === (11))){
var inst_24718 = (state_24738[(2)]);
var inst_24719 = (new Array(n));
var inst_24702 = inst_24719;
var inst_24703 = (0);
var state_24738__$1 = (function (){var statearr_24750 = state_24738;
(statearr_24750[(7)] = inst_24703);

(statearr_24750[(8)] = inst_24702);

(statearr_24750[(10)] = inst_24718);

return statearr_24750;
})();
var statearr_24751_24775 = state_24738__$1;
(statearr_24751_24775[(2)] = null);

(statearr_24751_24775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (9))){
var inst_24702 = (state_24738[(8)]);
var inst_24716 = cljs.core.vec.call(null,inst_24702);
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24738__$1,(11),out,inst_24716);
} else {
if((state_val_24739 === (5))){
var inst_24706 = (state_24738[(9)]);
var inst_24711 = (state_24738[(11)]);
var inst_24703 = (state_24738[(7)]);
var inst_24702 = (state_24738[(8)]);
var inst_24710 = (inst_24702[inst_24703] = inst_24706);
var inst_24711__$1 = (inst_24703 + (1));
var inst_24712 = (inst_24711__$1 < n);
var state_24738__$1 = (function (){var statearr_24752 = state_24738;
(statearr_24752[(11)] = inst_24711__$1);

(statearr_24752[(12)] = inst_24710);

return statearr_24752;
})();
if(cljs.core.truth_(inst_24712)){
var statearr_24753_24776 = state_24738__$1;
(statearr_24753_24776[(1)] = (8));

} else {
var statearr_24754_24777 = state_24738__$1;
(statearr_24754_24777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (14))){
var inst_24731 = (state_24738[(2)]);
var inst_24732 = cljs.core.async.close_BANG_.call(null,out);
var state_24738__$1 = (function (){var statearr_24756 = state_24738;
(statearr_24756[(13)] = inst_24731);

return statearr_24756;
})();
var statearr_24757_24778 = state_24738__$1;
(statearr_24757_24778[(2)] = inst_24732);

(statearr_24757_24778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (10))){
var inst_24722 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24758_24779 = state_24738__$1;
(statearr_24758_24779[(2)] = inst_24722);

(statearr_24758_24779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24739 === (8))){
var inst_24711 = (state_24738[(11)]);
var inst_24702 = (state_24738[(8)]);
var tmp24755 = inst_24702;
var inst_24702__$1 = tmp24755;
var inst_24703 = inst_24711;
var state_24738__$1 = (function (){var statearr_24759 = state_24738;
(statearr_24759[(7)] = inst_24703);

(statearr_24759[(8)] = inst_24702__$1);

return statearr_24759;
})();
var statearr_24760_24780 = state_24738__$1;
(statearr_24760_24780[(2)] = null);

(statearr_24760_24780[(1)] = (2));


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
});})(c__22951__auto___24766,out))
;
return ((function (switch__22856__auto__,c__22951__auto___24766,out){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24761[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24761[(1)] = (1));

return statearr_24761;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24738){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24762){if((e24762 instanceof Object)){
var ex__22860__auto__ = e24762;
var statearr_24763_24781 = state_24738;
(statearr_24763_24781[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24782 = state_24738;
state_24738 = G__24782;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24766,out))
})();
var state__22953__auto__ = (function (){var statearr_24764 = f__22952__auto__.call(null);
(statearr_24764[(6)] = c__22951__auto___24766);

return statearr_24764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24766,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24784 = arguments.length;
switch (G__24784) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22951__auto___24854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___24854,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___24854,out){
return (function (state_24826){
var state_val_24827 = (state_24826[(1)]);
if((state_val_24827 === (7))){
var inst_24822 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
var statearr_24828_24855 = state_24826__$1;
(statearr_24828_24855[(2)] = inst_24822);

(statearr_24828_24855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (1))){
var inst_24785 = [];
var inst_24786 = inst_24785;
var inst_24787 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24826__$1 = (function (){var statearr_24829 = state_24826;
(statearr_24829[(7)] = inst_24786);

(statearr_24829[(8)] = inst_24787);

return statearr_24829;
})();
var statearr_24830_24856 = state_24826__$1;
(statearr_24830_24856[(2)] = null);

(statearr_24830_24856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (4))){
var inst_24790 = (state_24826[(9)]);
var inst_24790__$1 = (state_24826[(2)]);
var inst_24791 = (inst_24790__$1 == null);
var inst_24792 = cljs.core.not.call(null,inst_24791);
var state_24826__$1 = (function (){var statearr_24831 = state_24826;
(statearr_24831[(9)] = inst_24790__$1);

return statearr_24831;
})();
if(inst_24792){
var statearr_24832_24857 = state_24826__$1;
(statearr_24832_24857[(1)] = (5));

} else {
var statearr_24833_24858 = state_24826__$1;
(statearr_24833_24858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (15))){
var inst_24816 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
var statearr_24834_24859 = state_24826__$1;
(statearr_24834_24859[(2)] = inst_24816);

(statearr_24834_24859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (13))){
var state_24826__$1 = state_24826;
var statearr_24835_24860 = state_24826__$1;
(statearr_24835_24860[(2)] = null);

(statearr_24835_24860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (6))){
var inst_24786 = (state_24826[(7)]);
var inst_24811 = inst_24786.length;
var inst_24812 = (inst_24811 > (0));
var state_24826__$1 = state_24826;
if(cljs.core.truth_(inst_24812)){
var statearr_24836_24861 = state_24826__$1;
(statearr_24836_24861[(1)] = (12));

} else {
var statearr_24837_24862 = state_24826__$1;
(statearr_24837_24862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (3))){
var inst_24824 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24826__$1,inst_24824);
} else {
if((state_val_24827 === (12))){
var inst_24786 = (state_24826[(7)]);
var inst_24814 = cljs.core.vec.call(null,inst_24786);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24826__$1,(15),out,inst_24814);
} else {
if((state_val_24827 === (2))){
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24826__$1,(4),ch);
} else {
if((state_val_24827 === (11))){
var inst_24790 = (state_24826[(9)]);
var inst_24794 = (state_24826[(10)]);
var inst_24804 = (state_24826[(2)]);
var inst_24805 = [];
var inst_24806 = inst_24805.push(inst_24790);
var inst_24786 = inst_24805;
var inst_24787 = inst_24794;
var state_24826__$1 = (function (){var statearr_24838 = state_24826;
(statearr_24838[(11)] = inst_24804);

(statearr_24838[(7)] = inst_24786);

(statearr_24838[(12)] = inst_24806);

(statearr_24838[(8)] = inst_24787);

return statearr_24838;
})();
var statearr_24839_24863 = state_24826__$1;
(statearr_24839_24863[(2)] = null);

(statearr_24839_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (9))){
var inst_24786 = (state_24826[(7)]);
var inst_24802 = cljs.core.vec.call(null,inst_24786);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24826__$1,(11),out,inst_24802);
} else {
if((state_val_24827 === (5))){
var inst_24790 = (state_24826[(9)]);
var inst_24794 = (state_24826[(10)]);
var inst_24787 = (state_24826[(8)]);
var inst_24794__$1 = f.call(null,inst_24790);
var inst_24795 = cljs.core._EQ_.call(null,inst_24794__$1,inst_24787);
var inst_24796 = cljs.core.keyword_identical_QMARK_.call(null,inst_24787,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24797 = ((inst_24795) || (inst_24796));
var state_24826__$1 = (function (){var statearr_24840 = state_24826;
(statearr_24840[(10)] = inst_24794__$1);

return statearr_24840;
})();
if(cljs.core.truth_(inst_24797)){
var statearr_24841_24864 = state_24826__$1;
(statearr_24841_24864[(1)] = (8));

} else {
var statearr_24842_24865 = state_24826__$1;
(statearr_24842_24865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (14))){
var inst_24819 = (state_24826[(2)]);
var inst_24820 = cljs.core.async.close_BANG_.call(null,out);
var state_24826__$1 = (function (){var statearr_24844 = state_24826;
(statearr_24844[(13)] = inst_24819);

return statearr_24844;
})();
var statearr_24845_24866 = state_24826__$1;
(statearr_24845_24866[(2)] = inst_24820);

(statearr_24845_24866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (10))){
var inst_24809 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
var statearr_24846_24867 = state_24826__$1;
(statearr_24846_24867[(2)] = inst_24809);

(statearr_24846_24867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (8))){
var inst_24786 = (state_24826[(7)]);
var inst_24790 = (state_24826[(9)]);
var inst_24794 = (state_24826[(10)]);
var inst_24799 = inst_24786.push(inst_24790);
var tmp24843 = inst_24786;
var inst_24786__$1 = tmp24843;
var inst_24787 = inst_24794;
var state_24826__$1 = (function (){var statearr_24847 = state_24826;
(statearr_24847[(7)] = inst_24786__$1);

(statearr_24847[(14)] = inst_24799);

(statearr_24847[(8)] = inst_24787);

return statearr_24847;
})();
var statearr_24848_24868 = state_24826__$1;
(statearr_24848_24868[(2)] = null);

(statearr_24848_24868[(1)] = (2));


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
});})(c__22951__auto___24854,out))
;
return ((function (switch__22856__auto__,c__22951__auto___24854,out){
return (function() {
var cljs$core$async$state_machine__22857__auto__ = null;
var cljs$core$async$state_machine__22857__auto____0 = (function (){
var statearr_24849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24849[(0)] = cljs$core$async$state_machine__22857__auto__);

(statearr_24849[(1)] = (1));

return statearr_24849;
});
var cljs$core$async$state_machine__22857__auto____1 = (function (state_24826){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_24826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e24850){if((e24850 instanceof Object)){
var ex__22860__auto__ = e24850;
var statearr_24851_24869 = state_24826;
(statearr_24851_24869[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24870 = state_24826;
state_24826 = G__24870;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
cljs$core$async$state_machine__22857__auto__ = function(state_24826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22857__auto____1.call(this,state_24826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22857__auto____0;
cljs$core$async$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22857__auto____1;
return cljs$core$async$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___24854,out))
})();
var state__22953__auto__ = (function (){var statearr_24852 = f__22952__auto__.call(null);
(statearr_24852[(6)] = c__22951__auto___24854);

return statearr_24852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___24854,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1582560148196
