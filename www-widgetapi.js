(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}ka=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function x(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.F=b.prototype}
function qa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.v=this.h=null}
function ta(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
qa.prototype.u=function(a){this.g=a};
function ua(a,b){a.h={fa:b,U:!0};a.f=a.l||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function y(a,b,c){a.f=c;return{value:b}}
qa.prototype.B=function(a){this.f=a};
function va(a){this.f=new qa;this.g=a}
function wa(a,b){ta(a.f);var c=a.f.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,ua(a.f,g),ya(a)}a.f.i=null;d.call(a.f,f);return ya(a)}
function ya(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ua(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.U)throw b.fa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){ta(a.f);a.f.i?b=xa(a,a.f.i.next,b,a.f.u):(a.f.u(b),b=ya(a));return b};
this["throw"]=function(b){ta(a.f);a.f.i?b=xa(a,a.f.i["throw"],b,a.f.u):(ua(a.f,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){var c=new za(new va(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.G),reject:g(this.j)}};
b.prototype.G=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.pa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.v(g):this.l(g)}};
b.prototype.v=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.da(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.u()};
b.prototype.u=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.pa=function(g){var h=this.i();g.H(h.resolve,h.reject)};
b.prototype.da=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.H(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.H=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).H(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).H(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&A(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ha(){}
function Ka(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Pa:Sa=Ra;return Sa.apply(null,arguments)}
var D=Date.now;function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.F=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Ta(a){return a}
;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ua,Error);Ua.prototype.name="CustomError";var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Xa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ya(a){return Array.prototype.concat.apply([],arguments)}
function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $a(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;var ob=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;var J;a:{var wb=B.navigator;if(wb){var xb=wb.userAgent;if(xb){J=xb;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function yb(){}
;var zb=K("Opera"),Ab=K("Trident")||K("MSIE"),Bb=K("Edge"),Cb=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Db=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge");function Eb(){var a=B.document;return a?a.documentMode:void 0}
var Fb;a:{var Gb="",Hb=function(){var a=J;if(Cb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Bb)return/Edge\/([\d\.]+)/.exec(a);if(Ab)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Db)return/WebKit\/(\S+)/.exec(a);if(zb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Hb&&(Gb=Hb?Hb[1]:"");if(Ab){var Ib=Eb();if(null!=Ib&&Ib>parseFloat(Gb)){Fb=String(Ib);break a}}Fb=Gb}var Jb=Fb,Kb;if(B.document&&Ab){var Tb=Eb();Kb=Tb?Tb:parseInt(Jb,10)||void 0}else Kb=void 0;var Ub=Kb;var Vb=K("iPhone")&&!K("iPod")&&!K("iPad")||K("iPod"),Wb=K("iPad");var Xb={},Yb=null;var L=window;function Zb(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=$b(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ac[c])c=ac[c];else{c=String(c);if(!ac[c]){var f=/function\s+([^\(]+)/m.exec(c);ac[c]=f?f[1]:"[Anonymous]"}c=ac[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function $b(a,b){b||(b={});b[bc(a)]=!0;var c=a.stack||"",d=a.Da;d&&!b[bc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=$b(d,b));return c}
function bc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ac={};function cc(a){this.f=a||{cookie:""}}
p=cc.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ka;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.V}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ob(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{V:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.f.cookie};
p.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ob(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var dc=new cc("undefined"==typeof document?null:document);function ec(a,b){this.width=a;this.height=b}
p=ec.prototype;p.clone=function(){return new ec(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function fc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=Va(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function gc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function hc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var ic=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function jc(a){return a?decodeURI(a):a}
function kc(a){return jc(a.match(ic)[3]||null)}
function lc(a){var b=a.match(ic);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function mc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)mc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function nc(a){var b=[],c;for(c in a)mc(c,a[c],b);return b.join("&")}
var oc=/#|$/;function pc(a){var b=qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function rc(){var a=[];pc(function(b){a.push(b)});
return a}
var qc={qa:"allow-forms",ra:"allow-modals",sa:"allow-orientation-lock",ta:"allow-pointer-lock",ua:"allow-popups",va:"allow-popups-to-escape-sandbox",wa:"allow-presentation",xa:"allow-same-origin",ya:"allow-scripts",za:"allow-top-navigation",Aa:"allow-top-navigation-by-user-activation"},sc=fb(function(){return rc()});
function tc(){var a=gc(),b={};I(sc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function uc(){this.h=this.h;this.i=this.i}
uc.prototype.h=!1;uc.prototype.dispose=function(){this.h||(this.h=!0,this.O())};
uc.prototype.O=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var vc={};function wc(){}
function xc(a,b){if(b!==vc)throw Error("Bad secret");this.f=a}
x(xc,wc);xc.prototype.toString=function(){return this.f};new xc("about:blank",vc);new xc("about:invalid#zTSz",vc);var yc=(new Date).getTime();function zc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ac(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],Qa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var la=F^v&(w^F);var Da=1518500249}else la=v^w^F,Da=1859775393;else 60>q?(la=v&w|F&(v|w),Da=2400959708):(la=v^w^F,Da=3395469782);la=((n<<5|n>>>27)&4294967295)+la+Qa+Da+r[q]&4294967295;Qa=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=la}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Qa&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)n[r++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ea:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Bc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),Cc(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=Cc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Cc(a){var b=Ac();b.update(a);return b.ea().toLowerCase()}
;function Dc(a){var b=zc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new cc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new cc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Bc(zc(d),
c,a||null)].join(" "):null}return null}
;function Ec(){this.g=[];this.f=-1}
Ec.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Ec.prototype.get=function(a){return!!this.g[a]};
function Fc(a){-1==a.f&&(a.f=Wa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Gc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Gc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Hc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ic(a){B.setTimeout(function(){throw a;},0)}
var Jc;function Kc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=gc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.T;c.T=null;e()}};
return function(e){d.next={T:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Lc(){this.g=this.f=null}
var Nc=new Gc(function(){return new Mc},function(a){a.reset()});
Lc.prototype.add=function(a,b){var c=Nc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Lc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Mc(){this.next=this.scope=this.f=null}
Mc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Mc.prototype.reset=function(){this.next=this.scope=this.f=null};function Oc(a,b){Pc||Qc();Rc||(Pc(),Rc=!0);Sc.add(a,b)}
var Pc;function Qc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Pc=function(){a.then(Tc)}}else Pc=function(){var b=Tc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!K("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Jc||(Jc=Kc()),Jc(b)):B.setImmediate(b)}}
var Rc=!1,Sc=new Lc;function Tc(){for(var a;a=Sc.remove();){try{a.f.call(a.scope)}catch(b){Ic(b)}Hc(Nc,a)}Rc=!1}
;function Uc(){this.g=-1}
;function Vc(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(Vc,Uc);Vc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Wc(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Vc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Wc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Wc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Wc(this,e);f=0;break}}this.h=f;this.j+=b}};
Vc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Wc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Xc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Yc(){}
Yc.prototype.next=function(){throw Xc;};
Yc.prototype.A=function(){return this};
function Zc(a){if(a instanceof Yc)return a;if("function"==typeof a.A)return a.A(!1);if(Ka(a)){var b=0,c=new Yc;c.next=function(){for(;;){if(b>=a.length)throw Xc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function $c(a,b){if(Ka(a))try{I(a,b,void 0)}catch(c){if(c!==Xc)throw c;}else{a=Zc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Xc)throw c;}}}
function ad(a){if(Ka(a))return Za(a);a=Zc(a);var b=[];$c(a,function(c){b.push(c)});
return b}
;function bd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof bd)for(c=wd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function wd(a){xd(a);return a.f.concat()}
p=bd.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||yd;xd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function yd(a,b){return a===b}
p.isEmpty=function(){return 0==this.g};
p.clear=function(){this.h={};this.i=this.g=this.f.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&xd(this),!0):!1};
function xd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
p.forEach=function(a,b){for(var c=wd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new bd(this)};
p.A=function(a){xd(this);var b=0,c=this.i,d=this,e=new Yc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Xc;var f=d.f[b++];return a?f:d.h[f]};
return e};var zd=B.JSON.stringify;function M(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Ad(b,2,c)},function(c){Ad(b,3,c)})}catch(c){Ad(this,3,c)}}
function Bd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Bd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Cd=new Gc(function(){return new Bd},function(a){a.reset()});
function Dd(a,b,c){var d=Cd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ed(a){if(a instanceof M)return a;var b=new M(Ha);Ad(b,2,a);return b}
function Fd(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Gd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
M.prototype.$goog_Thenable=!0;function Hd(a,b){return Gd(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new Id(a);Oc(function(){Jd(this,b)},this)}};
function Jd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Jd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Kd(c),Ld(c,e,3,b)))}a.h=null}else Ad(a,3,b)}
function Md(a,b){a.g||2!=a.f&&3!=a.f||Nd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Gd(a,b,c,d){var e=Dd(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Id?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Md(a,e);return e.f}
M.prototype.v=function(a){this.f=0;Ad(this,2,a)};
M.prototype.G=function(a){this.f=0;Ad(this,3,a)};
function Ad(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.v,f=a.G;if(d instanceof M){Md(d,Dd(e||Ha,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(La(d))try{var k=d.then;if("function"===typeof k){Od(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,Nd(a),3!=b||c instanceof Id||Pd(a,c))}}
function Od(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Nd(a){a.l||(a.l=!0,Oc(a.u,a))}
function Kd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.u=function(){for(var a;a=Kd(this);)Ld(this,a,this.f,this.m);this.l=!1};
function Ld(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Qd(b,c,d);else try{b.h?b.g.call(b.context):Qd(b,c,d)}catch(e){Rd.call(null,e)}Hc(Cd,b)}
function Qd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pd(a,b){a.j=!0;Oc(function(){a.j&&Rd.call(null,b)})}
var Rd=Ic;function Id(a){Ua.call(this,a)}
G(Id,Ua);Id.prototype.name="cancel";function O(a){uc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.u=!!a}
G(O,uc);p=O.prototype;p.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Sd(a,b,c){var d=Td;if(a=d.g[a]){var e=d.f;(a=Xa(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.L(a)}}
p.L=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.l)this.j.push(a),this.f[a+1]=Ha;else{if(c){var d=Va(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
p.J=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Ud(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.L(c)}}return 0!=e}return!1};
function Ud(a,b,c){Oc(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.g[a];b&&(I(b,this.L,this),delete this.g[a])}else this.f.length=0,this.g={}};
p.O=function(){O.F.O.call(this);this.clear();this.j.length=0};function Vd(a){this.f=a}
Vd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,zd(b))};
Vd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Vd.prototype.remove=function(a){this.f.remove(a)};function Wd(a){this.f=a}
G(Wd,Vd);function Xd(a){this.data=a}
function Yd(a){return void 0===a||a instanceof Xd?a:new Xd(a)}
Wd.prototype.set=function(a,b){Wd.F.set.call(this,a,Yd(b))};
Wd.prototype.g=function(a){a=Wd.F.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Wd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Zd(a){this.f=a}
G(Zd,Wd);Zd.prototype.set=function(a,b,c){if(b=Yd(b)){if(c){if(c<D()){Zd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}Zd.F.set.call(this,a,b)};
Zd.prototype.g=function(a){var b=Zd.F.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())Zd.prototype.remove.call(this,a);else return b}};function $d(){}
;function ae(){}
G(ae,$d);ae.prototype.clear=function(){var a=ad(this.A(!0)),b=this;I(a,function(c){b.remove(c)})};function be(a){this.f=a}
G(be,ae);p=be.prototype;p.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeItem(a)};
p.A=function(a){var b=0,c=this.f,d=new Yc;d.next=function(){if(b>=c.length)throw Xc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.f.clear()};
p.key=function(a){return this.f.key(a)};function ce(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(ce,be);function de(a,b){this.g=a;this.f=null;if(Ab&&!(9<=Number(Ub))){ee||(ee=new bd);this.f=ee.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ee.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
G(de,ae);var fe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ee=null;function ge(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fe[b]})}
p=de.prototype;p.isAvailable=function(){return!!this.f};
p.set=function(a,b){this.f.setAttribute(ge(a),b);he(this)};
p.get=function(a){a=this.f.getAttribute(ge(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeAttribute(ge(a));he(this)};
p.A=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Yc;d.next=function(){if(b>=c.length)throw Xc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);he(this)};
function he(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ie(a,b){this.g=a;this.f=b+"::"}
G(ie,ae);ie.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ie.prototype.get=function(a){return this.g.get(this.f+a)};
ie.prototype.remove=function(a){this.g.remove(this.f+a)};
ie.prototype.A=function(a){var b=this.g.A(!0),c=this,d=new Yc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var je=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",je);function ke(a){var b=arguments;1<b.length?je[b[0]]=b[1]:1===b.length&&Object.assign(je,b[0])}
function P(a,b){return a in je?je[a]:b}
;var le=[];function me(a){le.forEach(function(b){return b(a)})}
function ne(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){oe(b),me(b)}}:a}
function oe(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ke("ERRORS",b))}
function pe(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ke("ERRORS",b))}
;var qe=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++qe});var re={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function se(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in re||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
se.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
se.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
se.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",ib);var te=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",te);
function ue(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=La(e[4])&&La(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ve(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?we()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
var we=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xe(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ue(a,b,c,d);if(!e){e=++te.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new se(h);if(!hc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new se(h);
h.currentTarget=a;return c.call(a,h)};
g=ne(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),we()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d]}}}
;function ye(a,b){"function"===typeof a&&(a=ne(a));return window.setTimeout(a,b)}
function ze(a){"function"===typeof a&&(a=ne(a));return window.setInterval(a,250)}
;function Ae(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Be(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?$a(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};oe(h)}}}return b}
function Ce(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Be(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=nc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var De={};function Ee(a){return De[a]||(De[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Fe={},Ge=[],Td=new O,He={};function Ie(){for(var a=u(Ge),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Je(a,b){b||(b=document);var c=Za(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):fc(d,b);d=Za(d);return Ya(c,d)}
function Q(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ee(b)]:a.getAttribute("data-"+b):null;return c}
function Ke(a,b){Td.J.apply(Td,arguments)}
;function Le(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function S(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Me(a,b,c){Ne||(Ne={},xe(window,"message",Sa(a.i,a)));Ne[c]=b}
Le.prototype.i=function(a){if(a.origin==S(this,"host")||a.origin==S(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Ne[b.id])a.u=!0,a.u&&(I(a.m,a.S,a),a.m.length=0),a.ba(b)}};
var Ne=null;function T(a){a=Oe(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pe(a,b){var c=Oe(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Oe(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function Qe(){}
function Re(a,b){return Se(a,0,b)}
;function Te(){}
x(Te,Qe);function Se(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ye(a,c||0)}
Te.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Te.f=void 0;Te.g=function(){Te.f||(Te.f=new Te)};
Te.g();var Ue=B.ytPubsubPubsubInstance||new O,Ve=B.ytPubsubPubsubSubscribedKeys||{},We=B.ytPubsubPubsubTopicToKeys||{},Xe=B.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.L;O.prototype.publish=O.prototype.J;O.prototype.clear=O.prototype.clear;E("ytPubsubPubsubInstance",Ue);E("ytPubsubPubsubTopicToKeys",We);E("ytPubsubPubsubIsSynchronous",Xe);E("ytPubsubPubsubSubscribedKeys",Ve);var Ye=window,U=Ye.ytcsi&&Ye.ytcsi.now?Ye.ytcsi.now:Ye.performance&&Ye.performance.timing&&Ye.performance.now&&Ye.performance.timing.navigationStart?function(){return Ye.performance.timing.navigationStart+Ye.performance.now()}:function(){return(new Date).getTime()};var Ze=Pe("initial_gel_batch_timeout",1E3),$e=Math.pow(2,16)-1,af=null,bf=0,cf=void 0,df=0,ef=0,ff=0,gf=!0,Pf=B.ytLoggingTransportLogPayloadsQueue_||{};E("ytLoggingTransportLogPayloadsQueue_",Pf);var Qf=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Qf);var Rf=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Rf);
function Sf(){window.clearTimeout(df);window.clearTimeout(ef);ef=0;cf&&cf.isReady()?(Tf(Qf),"log_event"in Pf&&Tf(Object.entries(Pf.log_event)),Qf.clear(),delete Pf.log_event):Uf()}
function Uf(){T("web_gel_timeout_cap")&&!ef&&(ef=ye(Sf,6E4));window.clearTimeout(df);var a=P("LOGGING_BATCH_TIMEOUT",Pe("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&gf&&(a=Ze);df=ye(Sf,a)}
function Tf(a){var b=cf,c=Math.round(U());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=kb({context:Vf(b.f||Wf())});e.events=f;(f=Rf[d])&&Xf(e,d,f);delete Rf[d];Yf(e,c);Zf(b,"log_event",e,{retry:!0,onSuccess:function(){bf=Math.round(U()-c)}});
gf=!1}}
function Yf(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*$e/2));d++;d>$e&&(d=1);ke("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;af&&bf&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:af,roundtripMs:String(bf)});af=c;bf=0}}
function Xf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var $f=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",$f);function ag(a){var b=bg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(cg(b),dg(b));b.ca_type="image";a&&(b.bid=a);return b}
function cg(a){var b={};b.dt=yc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function dg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new ec(l.clientWidth,l.clientHeight)).round()}catch(n){m=new ec(-12245933,-12245933)}k=m;m={};l=new Ec;B.SVGElement&&
B.document.createElementNS&&l.set(0);c=tc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);B.crypto&&B.crypto.subtle&&l.set(3);B.TextDecoder&&B.TextEncoder&&l.set(4);l=Fc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var bg=new function(){var a=window.document;this.f=window;this.g=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Ae(ag(a))});D();var eg="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function fg(){if(!eg)return null;var a=eg();return"open"in a?a:null}
;var gg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},hg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ig=!1;
function jg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(ic)[1]||null,e=kc(a);d&&e?(d=c,c=a.match(ic),d=d.match(ic),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?kc(c)==e&&(Number(c.match(ic)[4]||null)||null)==(Number(a.match(ic)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in gg)e=P(gg[f]),!e||!c&&kc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!kc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!kc(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!kc(a))b["X-YouTube-Ad-Signals"]=Ae(ag(void 0));return b}
function kg(a){var b=window.location.search,c=kc(a),d=jc(a.match(ic)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Be(b),f={};I(hg,function(g){e[g]&&(f[g]=e[g])});
return Ce(a,f||{},!1)}
function lg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=mg(a,b);var d=ng(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.P&&b.P.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Y&&0<b.timeout&&(f=ye(function(){e||(e=!0,window.clearTimeout(f),b.Y.call(b.context||B))},b.timeout))}else og(a,b)}
function og(a,b){var c=b.format||"JSON";a=mg(a,b);var d=ng(a,b),e=!1,f=pg(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=qg(a,c,k,b.Ea);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.P&&b.P.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.I&&0<b.timeout){var g=b.I;var h=ye(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function mg(a,b){b.Ia&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.oa;d&&(d[c]&&delete d[c],a=Ce(a,d||{},!0));return a}
function ng(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.s,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ha||kc(a)&&!b.withCredentials&&kc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.s&&b.s[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Be(e),mb(e,f),e=b.aa&&"JSON"==b.aa?JSON.stringify(e):nc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!ig&&c&&"POST"!=b.method&&
(ig=!0,oe(Error("AJAX request with postData should use POST")));return e}
function qg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pe(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rg(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=sg(g)})}d&&tg(e);
return e}
function tg(a){if(La(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===nb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(g){B.console&&B.console.error(g.message)}nb=e}else nb=e}(e=nb)&&e.createHTML(d);a[c]=new yb}else tg(a[b])}}
function rg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function sg(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function pg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ne(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=fg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=kg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=jg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function ug(){for(var a={},b=u(Object.entries(Be(P("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function vg(){return"INNERTUBE_API_KEY"in je&&"INNERTUBE_API_VERSION"in je}
function Wf(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),ga:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ha:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ja:P("INNERTUBE_CONTEXT_HL",void 0),ia:P("INNERTUBE_CONTEXT_GL",void 0),ka:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",ma:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),la:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function Vf(a){a={client:{hl:a.ja,gl:a.ia,clientName:a.ha,clientVersion:a.innertubeContextClientVersion,configInfo:a.ga}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=P("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=P("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=P("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
P("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(a.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,ug());return a}
function wg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ca||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ba:b=Dc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function xg(a){a=Object.assign({},a);delete a.Authorization;var b=Dc();if(b){var c=new Vc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ka(b);void 0===c&&(c=0);if(!Yb){Yb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Xb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Yb[k]&&(Yb[k]=h)}}}c=Xb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function yg(a){a=xg(a);var b=new Vc;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function zg(){var a=new ce;(a=a.isAvailable()?new ie(a,"yt.innertube"):null)||(a=new de("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Zd(a):null;this.g=document.domain||window.location.hostname}
zg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(zd(b))}catch(f){return}else e=escape(b);b=this.g;dc.set(""+a,e,{V:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
zg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=dc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;dc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ag;function Bg(){Ag||(Ag=new zg);return Ag}
function Cg(a,b,c,d){if(d)return null;d=Bg().get("nextId",!0)||1;var e=Bg().get("requests",!0)||{};e[d]={method:a,request:b,authState:xg(c),requestTime:Math.round(U())};Bg().set("nextId",d+1,86400,!0);Bg().set("requests",e,86400,!0);return d}
function Dg(a){var b=Bg().get("requests",!0)||{};delete b[a];Bg().set("requests",b,86400,!0)}
function Eg(a){var b=Bg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=xg(wg(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Zf(a,d.method,e,{}));delete b[c]}}Bg().set("requests",b,86400,!0)}}
;function Fg(){}
;var Gg=Vb||Wb;function Hg(a){if(!a)throw Error();throw a;}
function Ig(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={D:0};f.D<a.length;f={D:f.D},++f.D)Jg(V.resolve(a[f.D]).then(function(g){return function(h){d[g.D]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ig,e=null!==b&&void 0!==b?b:Hg;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Kg(c,c,d,f,g)}),c.onRejected.push(function(){Lg(c,c,e,f,g)})):"FULFILLED"===c.state.status?Kg(c,c,d,f,g):"REJECTED"===c.state.status&&Lg(c,c,e,f,g)})};
function Jg(a,b){a.then(void 0,b)}
function Kg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Mg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Lg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Mg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Mg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Mg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ng(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Ng.prototype)}
x(Ng,Error);function Og(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Og.prototype)}
x(Og,Error);function Pg(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Pg.prototype)}
x(Pg,Error);function Qg(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Qg.prototype)}
x(Qg,Error);function Rg(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function Sg(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Tg(a){return new M(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
function X(a){return new V(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Ug(a){this.f=a}
p=Ug.prototype;p.add=function(a,b,c){return Vg(this,[a],"readwrite",function(d){return Wg(d,a).add(b,c)})};
p.clear=function(a){return Vg(this,[a],"readwrite",function(b){return Wg(b,a).clear()})};
p.close=function(){this.f.close()};
p.count=function(a,b){return Vg(this,[a],"readonly",function(c){return Wg(c,a).count(b)})};
function Xg(a,b,c){a=a.f.createObjectStore(b,c);return new Yg(a)}
p["delete"]=function(a,b){return Vg(this,[a],"readwrite",function(c){return Wg(c,a)["delete"](b)})};
p.get=function(a,b){return Vg(this,[a],"readwrite",function(c){return Wg(c,a).get(b)})};
function Zg(a,b){return Vg(a,["databases"],"readwrite",function(c){return $g(Wg(c,"databases"),b,void 0)})}
function Vg(a,b,c,d){c=void 0===c?"readonly":c;return new M(function(e,f){var g=a.f.transaction(b,c),h=new ah(g,b);Jg(d(h).then(function(k){Hd(bh(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function Yg(a){this.f=a}
p=Yg.prototype;p.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return X(c)};
p.clear=function(){return X(this.f.clear()).then(function(){})};
p.count=function(a){a=a?this.f.count(a):this.f.count();return X(a)};
p["delete"]=function(a){return X(this.f["delete"](a))};
p.get=function(a){return X(this.f.get(a))};
p.index=function(a){return new ch(this.f.index(a))};
p.getName=function(){return this.f.name};
function $g(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return X(a)}
function ah(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new M(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?pe(new Pg):"UnknownError"===e.name&&pe(new Qg),d(e)):d(new Ng)})})}
ah.prototype.abort=function(){this.f.abort();this.aborted=!0};
function bh(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function Wg(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new Yg(c),a.g.set(c,d));return d}
function ch(a){this.f=a}
ch.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return X(a)};
ch.prototype.get=function(a){return X(this.f.get(a))};
function dh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return eh(a).then(function(d){return Sg(d,c)})}
function fh(a,b){this.request=a;this.f=b}
function eh(a){return X(a).then(function(b){return null===b?null:new fh(a,b)})}
fh.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
fh.prototype.update=function(a){return X(this.f.update(a))};function gh(a,b,c){function d(){m||(m=new Ug(f.result));return m}
var e=ah;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,m;l&&f.addEventListener("upgradeneeded",function(n){if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var r=d(),q=new e(f.transaction);l(r,n.oldVersion,n.newVersion,q)});
g&&f.addEventListener("blocked",function(){g()});
return Tg(f).then(function(n){h&&n.addEventListener("versionchange",function(){h(d())});
k&&n.addEventListener("close",function(){k()});
return d()})}
function hh(a,b,c){c=void 0===c?{}:c;return gh(a,b,c)}
;var ih,jh,kh=["getAll","getAllKeys","getKey","openKeyCursor"],lh=["getAll","getAllKeys","getKey","openKeyCursor"];
function mh(){return H(this,function b(){var c;return z(b,function(d){switch(d.f){case 1:var e;if(e=Gg)e=/WebKit\/([0-9]+)/.exec(J),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(J),e=!(e&&602<=parseInt(e[1],10)));if(e&&!T("ytidb_allow_on_ios_safari_v8_and_v9"))return d["return"](!1);try{if(!self.indexedDB)return d["return"](!1)}catch(f){return d["return"](!1)}d.l=2;d.j=3;return y(d,hh("yt-idb-test-do-not-use"),5);case 5:c=d.g;case 3:d.v=[d.h];d.l=0;d.j=0;if(c)try{c.close()}catch(f){}e=
d.v.splice(0)[0];(e=d.h=d.h||e)?e.U?d.f=d.l||d.j:void 0!=e.B&&d.j<e.B?(d.f=e.B,d.h=null):d.f=d.j:d.f=4;break;case 2:return d.l=0,d.h=null,d["return"](!1);case 4:return d["return"](!0)}})})}
function nh(){return void 0!==ih?Ed(ih):new M(function(a){mh().then(function(b){ih=b;a(b)})})}
function oh(){return void 0!==jh?Ed(jh):nh().then(function(a){if(!a)return!1;var b=u(kh);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(lh);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return jh=a})}
;var ph;function qh(){function a(b){b.close();ph=void 0}
ph||(ph=Hd(hh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&Xg(b,"databases",{keyPath:"actualName"})}}),function(b){return Rg(b)?hh("YtIdbMeta",void 0,{blocking:a}):Fd(b)}));
return ph}
function rh(a){return qh().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return Zg(b,a)})})}
function sh(a){return qh().then(function(b){return b["delete"]("databases",a)})}
;function th(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Fd(c)}return Hd(rh(b).then(function(){return a(b)}),function(c){return Hd(sh(b.actualName),function(){}).then(function(){return Fd(c)})})}
function uh(){return nh().then(function(a){if(!a)throw new Og;})}
function vh(a,b){b=void 0===b?{}:b;return uh().then(function(){return th(function(c){return hh(c.actualName,a,b)})})}
;function wh(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
x(wh,V);wh.reject=V.reject;wh.resolve=V.resolve;wh.all=V.all;var xh;function yh(){return H(this,function b(){return z(b,function(c){if(!xh)try{xh=vh(1,{upgrade:function(d,e){1>e&&(Xg(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),Xg(d,"sapisid"))}})}catch(d){if(!Rg(d))return oe(d),c["return"](Promise.reject(d));
xh=vh()}return c["return"](xh)})})}
function zh(a){return H(this,function c(){var d,e,f;return z(c,function(g){if(1==g.f)return y(g,Ah(),2);if(3!=g.f)return d=g.g,y(g,yh(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Bh(){return H(this,function b(){var c,d,e,f,g,h;return z(b,function(k){switch(k.f){case 1:return y(k,Ah(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,U()],f=IDBKeyRange.bound(d,e),y(k,yh(),3);case 3:return g=k.g,h=void 0,y(k,Vg(g,["LogsRequestsStore"],"readwrite",function(l){return dh(Wg(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.f.value&&(h=m.f.value,h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Ch(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,yh(),2);d=e.g;return e["return"](Vg(d,["LogsRequestsStore"],"readwrite",function(f){var g=Wg(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",$g(g,h).then(function(){return h})})}))})})}
function Dh(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,yh(),2);d=e.g;return e["return"](Vg(d,["LogsRequestsStore"],"readwrite",function(f){var g=Wg(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,$g(g,h).then(function(){return h})):wh.resolve(void 0)})}))})})}
function Eh(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,yh(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Ah(){return H(this,function b(){var c;return z(b,function(d){if(1==d.f){Fg.f||(Fg.f=new Fg);var e={};var f=Dc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=P("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in je||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in je&&(e["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));e=Ed(e);return y(d,e,2)}c=d.g;return d["return"](yg(c))})})}
;var Fh=Pe("network_polling_interval",3E4);function Gh(){this.i=0;this.f=window.navigator.onLine;Hh(this);Ih(this)}
function Jh(){Gh.f||(Gh.f=new Gh);return Gh.f}
function Kh(a){var b=Lh,c=Mh;(new M(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
Nh(a)}
function Ih(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Hh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Nh(a){a.i||(Oh(a),window.navigator.onLine&&a.g&&a.g())}
function Oh(a){a.i=Re(function(){window.navigator.onLine?(!1===a.f&&oe(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&oe(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Oh(a)},Fh)}
;var Ph=Pe("networkless_throttle_timeout")||100,Qh=Pe("networkless_retry_attempts")||1,Rh=0;function Sh(a,b){b=void 0===b?{}:b;Th().then(function(c){if(c&&!T("networkless_bypass_write")){var d={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};zh(d).then(function(e){d.id=e;e=Jh();e.f&&!T("networkless_always_offline")?Uh(d):Kh(e)})["catch"](function(e){Uh(d);
oe(e)})}else og(a,b)})}
function Lh(){var a=this;Rh||(Rh=Se(function(){return H(a,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Bh(),2);if(3!=e.f)return d=e.g,d?y(e,Uh(d),3):(Mh(),e["return"]());Rh=0;Lh();e.f=0})})},1,Ph))}
function Mh(){var a=Rh;if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}Rh=0}
function Uh(a){return H(this,function c(){var d;return z(c,function(e){switch(e.f){case 1:if(!a.id){e.B(2);break}return y(e,Ch(a.id),3);case 3:(d=e.g)?a=d:pe(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.B(4);break}pe(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.B(5);break}return y(e,Eh(a.id),5);case 5:return e["return"]();case 4:f=a=Vh(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.s)||void 0===h?0:h.requestTimeMs)f.options.s.requestTimeMs=Math.round(U());(a=f)&&og(a.url,a.options);e.f=0}})})}
function Vh(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<Qh?y(k,Dh(a.id),6):y(k,Eh(a.id),2):k.B(2);2!=k.f&&Kh(Jh());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?y(k,Eh(a.id),2):k.B(2);d(e,f);k.f=0})})};
return a}
function Th(){return H(this,function b(){return z(b,function(c){return T("networkless_logging")?(2===Pe("networkless_ytidb_version")&&oh().then(function(d){return d}),c["return"](nh())):c["return"](!1)})})}
;function Wh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ia(u(c)))}
x(Wh,Error);function Xh(a){var b=this;this.f=null;a?this.f=a:vg()&&(this.f=Wf());Re(function(){Eg(b)},5E3)}
Xh.prototype.isReady=function(){!this.f&&vg()&&(this.f=Wf());return!!this.f};
function Zf(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&pe(new Wh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Wh("innertube xhrclient not ready",b,c,d);oe(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",s:c,aa:"JSON",I:function(){d.I()},
Y:d.I,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
X:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Ja:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.ka)&&(g=e);var h=a.f.ma||!1,k=wg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.la&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Ce(""+g+e,l||{},!0);Th().then(function(n){if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(T("networkless_gel")&&!n||!T("networkless_gel"))var r=Cg(b,
c,k,h);if(r){var q=f.onSuccess,v=f.X;f.onSuccess=function(w,F){Dg(r);q(w,F)};
c.X=function(w,F){Dg(r);v(w,F)}}}try{T("use_fetch_for_op_xhr")?lg(m,f):T("networkless_gel")&&d.retry?(f.method="POST",Sh(m,f)):(f.method="POST",f.s||(f.s={}),og(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Dg(r),r=0),pe(Error("An extension is blocking network request."));
else throw w;}r&&Re(function(){Eg(a)},5E3)})}
;var Yh=[{W:function(a){return"Cannot read property '"+a.key+"'"},
R:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{W:function(a){return"Cannot call '"+a.key+"'"},
R:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function Zh(){this.f=[];this.g=[]}
var $h;var ai=new O;var bi=new Set,ci=0,di=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ei(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Ma(this);this.h=0;this.u=!1;this.m=[];this.i=null;this.v=c;this.G={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?lc(a.src):"https://www.youtube.com"),this.g=new Le(b),c||(b=fi(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Ma(this.f)),Fe[this.f.id]=this,window.postMessage){this.i=new O;gi(this);b=S(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in He)hi(this,e)}}
p=Y.prototype;p.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
p.na=function(){return this.f};
p.ba=function(a){this.K(a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);ii(this,a);return this};
function hi(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&ii(a,d)}}
p.destroy=function(){this.f.id&&(Fe[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Ne&&(Ne[this.j]=null);this.g=null;a=this.f;for(var c in ib)ib[c][0]==a&&ve(c);this.l=this.f=null};
p.M=function(){return{}};
function ji(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.S(b):a.m.push(b)}
p.K=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.J(a,c);Ke(this.v+"."+a,c)}};
function fi(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+S(a.g,"title"));(d=S(a.g,"width"))&&c.setAttribute("width",d);(d=S(a.g,"height"))&&c.setAttribute("height",d);var h=a.M();h.enablejsapi=
window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&I(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(oc);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+r),!q||61==q||38==q||35==q)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,r-n).replace(/\+/g,
" "))}null!==l&&(h[k]=l)});
c.src=S(a.g,"host")+a.N()+"?"+nc(h);return c}
p.Z=function(){this.f&&this.f.contentWindow?this.S({event:"listening"}):window.clearInterval(this.h)};
function gi(a){Me(a.g,a,a.j);a.h=ze(Sa(a.Z,a));xe(a.f,"load",Sa(function(){window.clearInterval(this.h);this.h=ze(Sa(this.Z,this))},a))}
function ii(a,b){a.G[b]||(a.G[b]=!0,ji(a,"addEventListener",[b]))}
p.S=function(a){a.id=this.j;a.channel="widget";var b=zd(a),c=this.g,d=lc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Ia){if(Ia.name&&"SyntaxError"==Ia.name){if(!(Ia.message&&0<Ia.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Ia;h=void 0===h?{}:h;h.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(T("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=ci)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,F=Zb(v),Qa=F.message||"Unknown Error",la=F.name||"UnknownError",
Da=F.lineNumber||"Not available",pi=F.fileName||"Not available",qi=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var ra=0,Lb=0;Lb<v.args.length;Lb++){var R=v.args[Lb],Aa="params."+Lb;ra+=Aa.length;if(R)if(Array.isArray(R)){for(var ri=w,cd=ra,ab=0;ab<R.length&&!(R[ab]&&(cd+=ei(ab,R[ab],Aa,ri),500<cd));ab++);ra=cd}else if("object"===typeof R){var Mb=void 0,si=w,dd=ra;for(Mb in R)if(R[Mb]&&(dd+=ei(Mb,R[Mb],Aa,si),500<dd))break;ra=dd}else w[Aa]=String(JSON.stringify(R)).substring(0,
500),ra+=w[Aa].length;else w[Aa]=String(JSON.stringify(R)).substring(0,500),ra+=w[Aa].length;if(500<=ra)break}else if(v.hasOwnProperty("params")&&v.params){var Nb=v.params;if("object"===typeof v.params){var hf=0;for(q in Nb)if(Nb[q]){var jf="params."+q,kf=String(JSON.stringify(Nb[q])).substr(0,500);w[jf]=kf;hf+=jf.length+kf.length;if(500<hf)break}}else w.params=String(JSON.stringify(Nb)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var ed={message:Qa,name:la,
lineNumber:Da,fileName:pi,stack:qi,params:w},lf=Number(v.columnNumber);isNaN(lf)||(ed.lineNumber=ed.lineNumber+":"+lf);for(var fa,Ba=ed,mf=u(Yh),fd=mf.next();!fd.done;fd=mf.next()){var gd=fd.value;if(gd.R[Ba.name])for(var nf=u(gd.R[Ba.name]),hd=nf.next();!hd.done;hd=nf.next()){var of=hd.value,Ob=Ba.message.match(of.regexp);if(Ob){Ba.params["error.original"]=Ob[0];for(var id=of.groups,pf={},Ja=0;Ja<id.length;Ja++)pf[id[Ja]]=Ob[Ja+1],Ba.params["error."+id[Ja]]=Ob[Ja+1];Ba.message=gd.W(pf);break}}}fa=
Ba;window.yterr&&"function"===typeof window.yterr&&window.yterr(fa);if(!(bi.has(fa.message)||0<=fa.stack.indexOf("/YouTubeCenter.js")||0<=fa.stack.indexOf("/mytube.js"))){ai.J("handleError",fa);if(T("kevlar_gel_error_routing")){var Pb=void 0,qf=m,N=fa;a:{for(var rf=u(di),jd=rf.next();!jd.done;jd=rf.next()){var sf=J;if(sf&&0<=sf.toLowerCase().indexOf(jd.value.toLowerCase())){var tf=!0;break a}}tf=!1}if(!tf){var bb={stackTrace:N.stack};N.fileName&&(bb.filename=N.fileName);var ha=N.lineNumber&&N.lineNumber.split?
N.lineNumber.split(":"):[];0!==ha.length&&(1!==ha.length||isNaN(Number(ha[0]))?2!==ha.length||isNaN(Number(ha[0]))||isNaN(Number(ha[1]))||(bb.lineNumber=Number(ha[0]),bb.columnNumber=Number(ha[1])):bb.lineNumber=Number(ha[0]));var ti=N.message,ui=N.name;$h||($h=new Zh);var uf=$h;a:{for(var vf=u(uf.g),kd=vf.next();!kd.done;kd=vf.next()){var wf=kd.value;if(N.message&&N.message.match(wf.f)){var ld=wf.weight;break a}}for(var xf=u(uf.f),md=xf.next();!md.done;md=xf.next()){var yf=md.value;if(yf.f(N)){ld=
yf.weight;break a}}ld=1}var nd={level:"ERROR_LEVEL_UNKNOWN",message:ti,errorClassName:ui,sampleWeight:ld};"ERROR"===qf?nd.level="ERROR_LEVEL_ERROR":"WARNING"===qf&&(nd.level="ERROR_LEVEL_WARNNING");var vi={isObfuscated:!0,browserStackInfo:bb},Qb={pageUrl:window.location.href,kvPairs:[]},od=N.params;if(od)for(var zf=u(Object.keys(od)),pd=zf.next();!pd.done;pd=zf.next()){var Af=pd.value;Qb.kvPairs.push({key:"client."+Af,value:String(od[Af])})}var Bf=P("SERVER_NAME",void 0),Cf=P("SERVER_VERSION",void 0);
Bf&&Cf&&(Qb.kvPairs.push({key:"server.name",value:Bf}),Qb.kvPairs.push({key:"server.version",value:Cf}));var wi={errorMetadata:Qb,stackTrace:vi,logMessage:nd};Pb=void 0===Pb?{}:Pb;var Df=Xh;P("ytLoggingEventsDefaultDisabled",!1)&&Xh==Xh&&(Df=null);var xi=Df,W=Pb;W=void 0===W?{}:W;var cb={};cb.eventTimeMs=Math.round(W.timestamp||U());cb.clientError=wi;var yi=String;if(W.timestamp)var Ef=-1;else{var Ff=C("_lact",window);if(null==Ff)var Gf=-1;else{var zi=Ff;Gf=Math.max(D()-zi,0)}Ef=Gf}cb.context={lastActivityMs:yi(Ef)};
if(T("log_sequence_info_on_gel_web")&&W.ca){var Ai=cb.context,db=W.ca;$f[db]=db in $f?$f[db]+1:0;Ai.sequence={index:$f[db],groupKey:db};W.Ga&&delete $f[W.ca]}var Bi=cb,Rb=W.Fa,Hf=xi,qd="";if(Rb){var Sb=Rb,rd={};Sb.videoId?rd.videoId=Sb.videoId:Sb.playlistId&&(rd.playlistId=Sb.playlistId);Rf[Rb.token]=rd;qd=Rb.token}var sd=Qf.get(qd)||[];Qf.set(qd,sd);sd.push(Bi);Hf&&(cf=new Hf);var Ci=Pe("web_logging_max_batch")||100,If=U();sd.length>=Ci?Sf():10<=If-ff&&(Uf(),ff=If);Sf()}}var td,Ca=fa,eb=Ca.params||
{},sa={oa:{a:"logerror",t:"jserror",type:Ca.name,msg:Ca.message.substr(0,250),line:Ca.lineNumber,level:m,"client.name":eb.name},s:{url:P("PAGE_NAME",window.location.href),file:Ca.fileName},method:"POST"};eb.version&&(sa["client.version"]=eb.version);if(sa.s){Ca.stack&&(sa.s.stack=Ca.stack);for(var Jf=u(Object.keys(eb)),ud=Jf.next();!ud.done;ud=Jf.next()){var Kf=ud.value;sa.s["client."+Kf]=eb[Kf]}if(td=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Lf=u(Object.keys(td)),vd=Lf.next();!vd.done;vd=
Lf.next()){var Mf=vd.value;sa.s[Mf]=td[Mf]}var Nf=P("SERVER_NAME",void 0),Of=P("SERVER_VERSION",void 0);Nf&&Of&&(sa.s["server.name"]=Nf,sa.s["server.version"]=Of)}og(P("ECATCHER_REPORT_HOST","")+"/error_204",sa);bi.add(fa.message);ci++}}}}}else throw Ia;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function ki(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function li(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
x(Z,Y);p=Z.prototype;p.N=function(){return"/embed/"+S(this.g,"videoId")};
p.M=function(){var a=S(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=S(this.g,"embedConfig")){if(La(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.ba=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(La(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":mi(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};ni(this,a.apiInterface);mi(this,a);break;default:this.K(b,a)}};
function mi(a,b){if(La(b))for(var c in b)a.playerInfo[c]=b[c]}
function ni(a,b){I(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(D()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:ki(c)?this[c]=function(){this.playerInfo={};
this.C={};ji(this,c,arguments);return this}:li(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ji(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=parseInt(S(this.g,"width"),10),b=parseInt(S(this.g,"height"),10),c=S(this.g,"host")+this.N();vb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(pb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(qb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(rb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(sb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(tb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(ub,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
p.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
p.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function oi(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");b&&(b={videoId:b,width:Q(a,"width"),height:Q(a,"height")},new Z(a,b))}}
;function Di(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
x(Di,Y);Di.prototype.N=function(){return"/embed/"+S(this.g,"videoId")};
Di.prototype.M=function(){return{player:0,thumb_width:S(this.g,"thumbWidth"),thumb_height:S(this.g,"thumbHeight"),thumb_align:S(this.g,"thumbAlign")}};
Di.prototype.K=function(a,b){Y.prototype.K.call(this,a,b?b.info:void 0)};
function Ei(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");if(b){b={videoId:b,events:{},width:Q(a,"width"),height:Q(a,"height"),thumbWidth:Q(a,"thumb-width"),thumbHeight:Q(a,"thumb-height"),thumbAlign:Q(a,"thumb-align")};var c=Q(a,"onclick");c&&(b.events.onClick=c);new Di(a,b)}}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Fe[a]});
E("YT.scan",Ie);E("YT.subscribe",function(a,b,c){Td.subscribe(a,b,c);He[a]=!0;for(var d in Fe)hi(Fe[d],a)});
E("YT.unsubscribe",function(a,b,c){Sd(a,b,c)});
E("YT.Player",Z);E("YT.Thumbnail",Di);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.na;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Ge.push(function(a){a=Je("player",a);I(a,oi)});
Ge.push(function(){var a=Je("thumbnail");I(a,Ei)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ie();var Fi=B.onYTReady;Fi&&Fi();var Gi=B.onYouTubeIframeAPIReady;Gi&&Gi();var Hi=B.onYouTubePlayerAPIReady;Hi&&Hi();}).call(this);
