// Compiled by ClojureScript 1.10.520 {}
goog.provide('geocsv_lite.notify');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
geocsv_lite.notify.message = (function geocsv_lite$notify$message(msg){
console.log(msg);

return clojure.browser.dom.set_text.call(null,document.getElementById("message"),msg);
});
geocsv_lite.notify.error = (function geocsv_lite$notify$error(err){
console.error(err);

return clojure.browser.dom.set_text.call(null,document.getElementById("error"),err);
});

//# sourceMappingURL=notify.js.map?rel=1582560148430
