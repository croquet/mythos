"use strict";
(globalThis["webpackChunk_croquet_microverse"] = globalThis["webpackChunk_croquet_microverse"] || []).push([["vendors-node_modules_croquet_worldcore-kernel_src_Mixins_js"],{

/***/ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/croquet/cjs/croquet-croquet.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Copyright Croquet Corporation 2022
 * Bundle of @croquet/croquet
 * Date: 2022-05-02
 * Version: 1.1.0-12
 */

if(Object.defineProperty(exports,"__esModule",{value:!0}),void 0===globalThis.TextEncoder){globalThis.TextEncoder=function(){},TextEncoder.prototype.encode=function(e){for(var t=e.length,n=-1,r="undefined"==typeof Uint8Array?new Array(1.5*t):new Uint8Array(3*t),i=0,o=0,s=0;s!==t;){if(i=e.charCodeAt(s),s+=1,i>=55296&&i<=56319){if(s===t){r[n+=1]=239,r[n+=1]=191,r[n+=1]=189;break}if(!((o=e.charCodeAt(s))>=56320&&o<=57343)){r[n+=1]=239,r[n+=1]=191,r[n+=1]=189;continue}if(s+=1,(i=1024*(i-55296)+o-56320+65536)>65535){r[n+=1]=240|i>>>18,r[n+=1]=128|i>>>12&63,r[n+=1]=128|i>>>6&63,r[n+=1]=128|63&i;continue}}i<=127?r[n+=1]=0|i:i<=2047?(r[n+=1]=192|i>>>6,r[n+=1]=128|63&i):(r[n+=1]=224|i>>>12,r[n+=1]=128|i>>>6&63,r[n+=1]=128|63&i)}return"undefined"!=typeof Uint8Array?r.subarray(0,n+1):(r.length=n+1,r)},TextEncoder.prototype.toString=function(){return"[object TextEncoder]"};try{Object.defineProperty(TextEncoder.prototype,"encoding",{get:function(){if(TextEncoder.prototype.isPrototypeOf(this))return"utf-8";throw TypeError("Illegal invocation")}})}catch(e){TextEncoder.prototype.encoding="utf-8"}"undefined"!=typeof Symbol&&(TextEncoder.prototype[Symbol.toStringTag]="TextEncoder")}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t,n){return f=h()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&d(i,n.prototype),i},f.apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return p=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return f(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),d(r,e)},p(e)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=h();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},g.apply(this,arguments)}function Z(e,t){return L(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,t)||x(e,t)||S()}function X(e){return L(e)||k(e)||x(e)||S()}function w(e){return function(e){if(Array.isArray(e))return G(e)}(e)||k(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){if(Array.isArray(e))return e}function k(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function x(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function W(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=x(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};!function(e){var t=function(e){var t,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof b?t:b,o=Object.create(i.prototype),s=new T(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return R()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=G(s,n);if(a){if(a===y)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?m:f,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(e,n,s),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",m="completed",y={};function b(){}function v(){}function g(){}var Z={};l(Z,s,(function(){return this}));var X=Object.getPrototypeOf,w=X&&X(X(C([])));w&&w!==r&&i.call(w,s)&&(Z=w);var L=g.prototype=b.prototype=Object.create(Z);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,s,a,c){var l=d(e[o],e,s);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"===n(h)&&i.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(h).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}}function G(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,G(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function W(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(i.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:t,done:!0}}return v.prototype=g,l(L,"constructor",g),l(g,"constructor",v),v.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},k(x.prototype),l(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new x(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},k(L),l(L,c,"Generator"),l(L,s,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(W),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),l=i.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),W(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;W(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{globalThis.regeneratorRuntime=t}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}({exports:{}});const C={COLOR:"1",CROQUET_VERSION:"1.1.0-12",EDITOR:"nano",HOME:"/Users/vanessa",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",HOMEBREW_PREFIX:"/opt/homebrew",HOMEBREW_REPOSITORY:"/opt/homebrew",HOMEBREW_SHELLENV_PREFIX:"/opt/homebrew",INFOPATH:"/opt/homebrew/share/info:",INIT_CWD:"/Users/vanessa/wonderland/croquet/libraries/packages/croquet",LANG:"en_US.UTF-8",LESS:"-R",LOGNAME:"vanessa",LSCOLORS:"Gxfxcxdxbxegedabagacad",LaunchInstanceID:"2C5578AD-8DEF-467D-AFB5-772FBED52048",MANPATH:"/Users/vanessa/.nvm/versions/node/v16.14.2/share/man:/opt/homebrew/share/man::",NODE:"/Users/vanessa/.nvm/versions/node/v16.14.2/bin/node",NODE_ENV:"production",NVM_BIN:"/Users/vanessa/.nvm/versions/node/v16.14.2/bin",NVM_CD_FLAGS:"-q",NVM_DIR:"/Users/vanessa/.nvm",NVM_INC:"/Users/vanessa/.nvm/versions/node/v16.14.2/include/node",P9K_SSH:"0",P9K_TTY:"old",PAGER:"less",PATH:"/Users/vanessa/wonderland/croquet/libraries/packages/croquet/node_modules/.bin:/Users/vanessa/wonderland/croquet/libraries/packages/node_modules/.bin:/Users/vanessa/wonderland/croquet/libraries/node_modules/.bin:/Users/vanessa/wonderland/croquet/node_modules/.bin:/Users/vanessa/wonderland/node_modules/.bin:/Users/vanessa/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/vanessa/.nvm/versions/node/v16.14.2/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/vanessa/.nvm/versions/node/v16.14.2/bin:/Users/vanessa/wonderland/docker/scripts:/Users/vanessa/google-cloud-sdk/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",PWD:"/Users/vanessa/wonderland/croquet/libraries/packages/croquet",SECURITYSESSIONID:"186b3",SHELL:"/bin/zsh",SHLVL:"3",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.zycDFSt1XV/Listeners",TERM:"xterm-256color",TERM_PROGRAM:"Apple_Terminal",TERM_PROGRAM_VERSION:"444",TERM_SESSION_ID:"14A59FFC-30A0-4FDC-8F5D-5F11595C8974",TMPDIR:"/var/folders/vt/36w8wg916qvblvg2k_y9dtvm0000gn/T/",USER:"vanessa",XPC_FLAGS:"0x0",XPC_SERVICE_NAME:"0",ZSH:"/Users/vanessa/.oh-my-zsh"};var R=window.location.hostname.endsWith("croquet.studio"),Y="",I="",V=function(){function e(){o(this,e),this.getSession(),P(this,window.location.search.slice(1)),P(this,R?window.location.hash.slice(1):I),window.location.pathname.indexOf("/ar.html")>=0&&(this.ar=!0)}return a(e,[{key:"has",value:function(e,t,n){"boolean"!=typeof n&&(n=this.isHost(n));var r=this[e];if("string"!=typeof r)return n;var i=r.split(",");return!0===n&&(t="no".concat(t)),t.endsWith("s")&&(t=t.slice(0,-1)),i.includes(t)||i.includes("".concat(t,"s"))?!n:n}},{key:"getSession",value:function(){if(R){var e=window.location.pathname.match(/^\/([^/]+)\/(.*)$/);if(e)return Y=e[1],e[2]}else{var t=window.location.hash.match(/^#([^&]+)&?(.*)$/);if(t)return t[1].includes("=")?(I="".concat(t[1],"&").concat(t[2]),""):(I=t[2],t[1])}return"string"==typeof this.session?(I=window.location.hash.slice(1),this.session):""}},{key:"setSession",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null==R&&this.getSession();var n=window.location,r=n.search,i=n.hash,o=R?"/".concat(Y,"/").concat(e).concat(r).concat(i):"#".concat(e).concat(I?"&"+I:"");t?window.history.replaceState({},"",o):window.history.pushState({},"",o)}},{key:"isHost",value:function(e){var t=window.location.hostname;if(t===e)return!0;if("localhost"!==e)return!1;if(t.endsWith(".ngrok.io"))return!0;if("croquet.io"===t&&window.location.pathname.match(/^\/(dev|files)\//))return!0;return["127.0.0.1","[::1]"].includes(t)}},{key:"isLocalhost",value:function(){return this.isHost("localhost")}}]),e}();function P(e,t){if(t){var n,r=W(t.split("&"));try{for(r.s();!(n=r.n()).done;){var i=n.value.split("="),o=i[0],s=!0;if(i.length>1&&(s=decodeURIComponent(i.slice(1).join("="))).match(/^(true|false|null|[0-9.]*|["[{].*)$/))try{s=JSON.parse(s)}catch(e){"["===s[0]&&(s=s.slice(1,-1).split(","))}e[o]=s}}catch(e){r.e(e)}finally{r.f()}}}var K,M,N,H=new V,F={exports:{}};M=T,N=function(e){var t=function e(t){return new e.lib.init(t)};function r(e,t){return t.offset[e]?isNaN(t.offset[e])?t.offset[e]:t.offset[e]+"px":"0px"}function i(e,t){return!(!e||"string"!=typeof t||!(e.className&&e.className.trim().split(/\s+/gi).indexOf(t)>-1))}return t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,style:{background:""}},t.lib=t.prototype={toastify:"1.11.2",constructor:t,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||t.defaults.text,this.options.node=e.node||t.defaults.node,this.options.duration=0===e.duration?0:e.duration||t.defaults.duration,this.options.selector=e.selector||t.defaults.selector,this.options.callback=e.callback||t.defaults.callback,this.options.destination=e.destination||t.defaults.destination,this.options.newWindow=e.newWindow||t.defaults.newWindow,this.options.close=e.close||t.defaults.close,this.options.gravity="bottom"===e.gravity?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=e.positionLeft||t.defaults.positionLeft,this.options.position=e.position||t.defaults.position,this.options.backgroundColor=e.backgroundColor||t.defaults.backgroundColor,this.options.avatar=e.avatar||t.defaults.avatar,this.options.className=e.className||t.defaults.className,this.options.stopOnFocus=void 0===e.stopOnFocus?t.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||t.defaults.onClick,this.options.offset=e.offset||t.defaults.offset,this.options.escapeMarkup=void 0!==e.escapeMarkup?e.escapeMarkup:t.defaults.escapeMarkup,this.options.style=e.style||t.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");for(var t in e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)e.style[t]=this.options.style[t];if(this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?e.appendChild(i):e.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var o=document.createElement("span");o.innerHTML="&#10006;",o.className="toast-close",o.addEventListener("click",function(e){e.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?e.insertAdjacentElement("afterbegin",o):e.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;e.addEventListener("mouseover",(function(t){window.clearTimeout(e.timeOutValue)})),e.addEventListener("mouseleave",(function(){e.timeOutValue=window.setTimeout((function(){a.removeElement(e)}),a.options.duration)}))}if(void 0!==this.options.destination&&e.addEventListener("click",function(e){e.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&e.addEventListener("click",function(e){e.stopPropagation(),this.options.onClick()}.bind(this)),"object"===n(this.options.offset)){var c=r("x",this.options),l=r("y",this.options),u="left"==this.options.position?c:"-"+c,d="toastify-top"==this.options.gravity?l:"-"+l;e.style.transform="translate("+u+","+d+")"}return e},showToast:function(){var e;if(this.toastElement=this.buildToast(),!(e="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=t.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,n),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),t.reposition()}.bind(this),400)}},t.reposition=function(){for(var e,t={top:15,bottom:15},n={top:15,bottom:15},r={top:15,bottom:15},o=document.getElementsByClassName("toastify"),s=0;s<o.length;s++){e=!0===i(o[s],"toastify-top")?"toastify-top":"toastify-bottom";var a=o[s].offsetHeight;e=e.substr(9,e.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(o[s].style[e]=r[e]+"px",r[e]+=a+15):!0===i(o[s],"toastify-left")?(o[s].style[e]=t[e]+"px",t[e]+=a+15):(o[s].style[e]=n[e]+"px",n[e]+=a+15)}return this},t.lib.init.prototype=t.lib,t},(K=F).exports?K.exports=N():M.Toastify=N();var z=F.exports,_={exports:{}};!function(e){!function(t,r,i){var o,s=256,a=i.pow(s,6),c=i.pow(2,52),l=2*c,u=255;function d(e,n,u){var d=[],b=m(p((n=1==n?{entropy:!0}:n||{}).entropy?[e,y(r)]:null==e?function(){try{var e;return o&&(e=o.randomBytes)?e=e(s):(e=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(e)),y(e)}catch(e){var n=t.navigator,i=n&&n.plugins;return[+new Date,t,i,t.screen,y(r)]}}():e,3),d),v=new h(d),g=function(){for(var e=v.g(6),t=a,n=0;e<c;)e=(e+n)*s,t*=s,n=v.g(1);for(;e>=l;)e/=2,t/=2,n>>>=1;return(e+n)/t};return g.int32=function(){return 0|v.g(4)},g.quick=function(){return v.g(4)/4294967296},g.double=g,m(y(v.S),r),(n.pass||u||function(e,t,n,r){return r&&(r.S&&f(r,v),e.state=function(){return f(v,{})}),n?(i.random=e,t):e})(g,b,"global"in n?n.global:this==i,n.state)}function h(e){var t,n=e.length,r=this,i=0,o=r.i=r.j=0,a=r.S=[];for(n||(e=[n++]);i<s;)a[i]=i++;for(i=0;i<s;i++)a[i]=a[o=u&o+e[i%n]+(t=a[i])],a[o]=t;(r.g=function(e){for(var t,n=0,i=r.i,o=r.j,a=r.S;e--;)t=a[i=u&i+1],n=n*s+a[u&(a[i]=a[o=u&o+t])+(a[o]=t)];return r.i=i,r.j=o,n})(s)}function f(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function p(e,t){var r,i=[],o=n(e);if(t&&"object"==o)for(r in e)try{i.push(p(e[r],t-1))}catch(e){}return i.length?i:"string"==o?e:e+"\0"}function m(e,t){for(var n,r=e+"",i=0;i<r.length;)t[u&i]=u&(n^=19*t[u&i])+r.charCodeAt(i++);return y(t)}function y(e){return String.fromCharCode.apply(0,e)}if(m(i.random(),r),e.exports){e.exports=d;try{o=undefined}catch(e){}}else i.seedrandom=d}("undefined"!=typeof self?self:T,[],Math)}(_);var E,j=_.exports;!function(){function e(e){this.mode=n.MODE_8BIT_BYTE,this.data=e,this.parsedData=[];for(var t=0,r=this.data.length;t<r;t++){var i=[],o=this.data.charCodeAt(t);o>65536?(i[0]=240|(1835008&o)>>>18,i[1]=128|(258048&o)>>>12,i[2]=128|(4032&o)>>>6,i[3]=128|63&o):o>2048?(i[0]=224|(61440&o)>>>12,i[1]=128|(4032&o)>>>6,i[2]=128|63&o):o>128?(i[0]=192|(1984&o)>>>6,i[1]=128|63&o):i[0]=o,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function t(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}e.prototype={getLength:function(e){return this.parsedData.length},write:function(e){for(var t=0,n=this.parsedData.length;t<n;t++)e.put(this.parsedData[t],8)}},t.prototype={addData:function(t){var n=new e(t);this.dataList.push(n),this.dataCache=null},isDark:function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,n){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,n),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=t.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,n)},setupPositionProbePattern:function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=h.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},createMovieClip:function(e,t,n){var r=e.createEmptyMovieClip(t,n);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,s=0;s<this.modules[i].length;s++){var a=1*s;this.modules[i][s]&&(r.beginFill(0,100),r.moveTo(a,o),r.lineTo(a+1,o),r.lineTo(a+1,o+1),r.lineTo(a,o+1),r.endFill())}return r},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){for(var e=h.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],i=e[n];if(null==this.modules[r][i])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[r+o][i+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},setupTypeNumber:function(e){for(var t=h.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=h.getBCHTypeInfo(n),i=0;i<15;i++){var o=!e&&1==(r>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!e&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var n=-1,r=this.moduleCount-1,i=7,o=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var a=0;a<2;a++)if(null==this.modules[r][s-a]){var c=!1;o<e.length&&(c=1==(e[o]>>>i&1)),h.getMask(t,r,s-a)&&(c=!c),this.modules[r][s-a]=c,-1==--i&&(o++,i=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}}},t.PAD0=236,t.PAD1=17,t.createData=function(e,n,r){for(var i=y.getRSBlocks(e,n),o=new b,s=0;s<r.length;s++){var a=r[s];o.put(a.mode,4),o.put(a.getLength(),h.getLengthInBits(a.mode,e)),a.write(o)}var c=0;for(s=0;s<i.length;s++)c+=i[s].dataCount;if(o.getLengthInBits()>8*c)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*c+")");for(o.getLengthInBits()+4<=8*c&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*c||(o.put(t.PAD0,8),o.getLengthInBits()>=8*c));)o.put(t.PAD1,8);return t.createBytes(o,i)},t.createBytes=function(e,t){for(var n=0,r=0,i=0,o=new Array(t.length),s=new Array(t.length),a=0;a<t.length;a++){var c=t[a].dataCount,l=t[a].totalCount-c;r=Math.max(r,c),i=Math.max(i,l),o[a]=new Array(c);for(var u=0;u<o[a].length;u++)o[a][u]=255&e.buffer[u+n];n+=c;var d=h.getErrorCorrectPolynomial(l),f=new m(o[a],d.getLength()-1).mod(d);s[a]=new Array(d.getLength()-1);for(u=0;u<s[a].length;u++){var p=u+f.getLength()-s[a].length;s[a][u]=p>=0?f.get(p):0}}var y=0;for(u=0;u<t.length;u++)y+=t[u].totalCount;var b=new Array(y),v=0;for(u=0;u<r;u++)for(a=0;a<t.length;a++)u<o[a].length&&(b[v++]=o[a][u]);for(u=0;u<i;u++)for(a=0;a<t.length;a++)u<s[a].length&&(b[v++]=s[a][u]);return b};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},i=0,o=1,s=2,a=3,c=4,l=5,u=6,d=7,h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;h.getBCHDigit(t)-h.getBCHDigit(h.G15)>=0;)t^=h.G15<<h.getBCHDigit(t)-h.getBCHDigit(h.G15);return(e<<10|t)^h.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;h.getBCHDigit(t)-h.getBCHDigit(h.G18)>=0;)t^=h.G18<<h.getBCHDigit(t)-h.getBCHDigit(h.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return h.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case i:return(t+n)%2==0;case o:return t%2==0;case s:return n%3==0;case a:return(t+n)%3==0;case c:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case l:return t*n%2+t*n%3==0;case u:return(t*n%2+t*n%3)%2==0;case d:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new m([1],0),n=0;n<e;n++)t=t.multiply(new m([1,f.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var i=0;i<t;i++){for(var o=0,s=e.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||t<=r+a))for(var c=-1;c<=1;c++)i+c<0||t<=i+c||0==a&&0==c||s==e.isDark(r+a,i+c)&&o++;o>5&&(n+=3+o-5)}for(r=0;r<t-1;r++)for(i=0;i<t-1;i++){var l=0;e.isDark(r,i)&&l++,e.isDark(r+1,i)&&l++,e.isDark(r,i+1)&&l++,e.isDark(r+1,i+1)&&l++,0!=l&&4!=l||(n+=3)}for(r=0;r<t;r++)for(i=0;i<t-6;i++)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i++)for(r=0;r<t-6;r++)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);var u=0;for(i=0;i<t;i++)for(r=0;r<t;r++)e.isDark(r,i)&&u++;return n+=10*(Math.abs(100*u/t/t-50)/5)}},f={glog:function(e){if(e<1)throw new Error("glog("+e+")");return f.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return f.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)f.EXP_TABLE[p]=1<<p;for(p=8;p<256;p++)f.EXP_TABLE[p]=f.EXP_TABLE[p-4]^f.EXP_TABLE[p-5]^f.EXP_TABLE[p-6]^f.EXP_TABLE[p-8];for(p=0;p<255;p++)f.LOG_TABLE[f.EXP_TABLE[p]]=p;function m(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}function y(e,t){this.totalCount=e,this.dataCount=t}function b(){this.buffer=[],this.length=0}m.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=f.gexp(f.glog(this.get(n))+f.glog(e.get(r)));return new m(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=f.glog(this.get(0))-f.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=f.gexp(f.glog(e.get(r))+t);return new m(n,0).mod(e)}},y.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],y.getRSBlocks=function(e,t){var n=y.getRsBlockTable(e,t);if(null==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,i=[],o=0;o<r;o++)for(var s=n[3*o+0],a=n[3*o+1],c=n[3*o+2],l=0;l<s;l++)i.push(new y(a,c));return i},y.getRsBlockTable=function(e,t){switch(t){case r.L:return y.RS_BLOCK_TABLE[4*(e-1)+0];case r.M:return y.RS_BLOCK_TABLE[4*(e-1)+1];case r.Q:return y.RS_BLOCK_TABLE[4*(e-1)+2];case r.H:return y.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},b.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var v=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],g=function(){var e=function(e,t){this._bIsPainted=!1,this._htOption=t,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=t.width,this._elCanvas.height=t.height,e.appendChild(this._elCanvas),this._el=e,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._bSupportDataURI=null};return e.prototype.draw=function(e){var t=this._oContext,n=this._htOption,r=e.getModuleCount(),i=n.width/r,o=n.height/r,s=Math.round(i),a=Math.round(o);this.clear();for(var c=0;c<r;c++)for(var l=0;l<r;l++){var u=e.isDark(c,l),d=l*i,h=c*o;t.strokeStyle=u?n.colorDark:n.colorLight,t.lineWidth=1,t.fillStyle=u?n.colorDark:n.colorLight,t.fillRect(d,h,i,o),t.strokeRect(Math.floor(d)+.5,Math.floor(h)+.5,s,a),t.strokeRect(Math.ceil(d)-.5,Math.ceil(h)-.5,s,a)}this._bIsPainted=!0},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(e){return e?Math.floor(1e3*e)/1e3:e},e}();function Z(e,t){for(var n=1,i=function(e){var t=encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return t.length+(t.length!=e?3:0)}(e),o=0,s=v.length;o<=s;o++){var a=0;switch(t){case r.L:a=v[o][0];break;case r.M:a=v[o][1];break;case r.Q:a=v[o][2];break;case r.H:a=v[o][3]}if(i<=a)break;n++}if(n>v.length)throw new Error("Too long data");return n}E=function(e,t){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:r.H},"string"==typeof t&&(t={text:t}),t)for(var n in t)this._htOption[n]=t[n];"string"==typeof e&&(e=document.getElementById(e)),this._htOption.useSVG&&(g=svgDrawer),this._el=e,this._oQRCode=null,this._oDrawing=new g(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},E.prototype.makeCode=function(e){this._oQRCode=new t(Z(e,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(e),this._oQRCode.make(),this._oDrawing.draw(this._oQRCode)},E.prototype.clear=function(){this._oDrawing.clear()},E.prototype.getCanvas=function(){for(var e=0;e<this._el.children.length;e++){var t=this._el.children[e];if("CANVAS"===t.tagName)return t}return null},E.CorrectLevel=r}();var J,U=E,Q=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var r,i="boolean"==typeof t.cycles&&t.cycles,o=t.cmp&&(r=t.cmp,function(e){return function(t,n){var i={key:t,value:e[t]},o={key:n,value:e[n]};return r(i,o)}}),s=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!==n(t))return JSON.stringify(t);var r,a;if(Array.isArray(t)){for(a="[",r=0;r<t.length;r++)r&&(a+=","),a+=e(t[r])||"null";return a+"]"}if(null===t)return"null";if(-1!==s.indexOf(t)){if(i)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var c=s.push(t)-1,l=Object.keys(t).sort(o&&o(t));for(a="",r=0;r<l.length;r++){var u=l[r],d=e(t[u]);d&&(a&&(a+=","),a+=JSON.stringify(u)+":"+d)}return s.splice(c,1),"{"+a+"}"}}(e)},O={exports:{}},D={exports:{}};D.exports=(J=J||function(e,t){var n;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),"undefined"!=typeof self&&self.crypto&&(n=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(n=globalThis.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==T&&T.crypto&&(n=T.crypto),!n)try{n=__webpack_require__(/*! crypto */ "?985c")}catch(e){}var r=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),o={},s=o.lib={},a=s.Base={extend:function(e){var t=i(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var s=n[o>>>2]>>>24-o%4*8&255;t[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var a=0;a<i;a+=4)t[r+a>>>2]=n[a>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=a.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(r());return new c.init(t,e)}}),l=o.enc={},u=l.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new c.init(n,t/2)}},d=l.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new c.init(n,t)}},h=l.Utf8={stringify:function(e){try{return decodeURIComponent(escape(d.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return d.parse(unescape(encodeURIComponent(e)))}},f=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=h.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n,r=this._data,i=r.words,o=r.sigBytes,s=this.blockSize,a=o/(4*s),l=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,u=e.min(4*l,o);if(l){for(var d=0;d<l;d+=s)this._doProcessBlock(i,d);n=i.splice(0,l),r.sigBytes-=u}return new c.init(n,u)},clone:function(){var e=a.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});s.Hasher=f.extend({cfg:a.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}});var p=o.algo={};return o}(Math),J);var B,A=O.exports=function(e){return function(){if("function"==typeof ArrayBuffer){var t=e.lib.WordArray,n=t.init,r=t.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,r=[],i=0;i<t;i++)r[i>>>2]|=e[i]<<24-i%4*8;n.call(this,r,t)}else n.apply(this,arguments)};r.prototype=t}}(),e.lib.WordArray}(D.exports),q={exports:{}},$=q.exports=function(e){return function(t){var n=e,r=n.lib,i=r.WordArray,o=r.Hasher,s=n.algo,a=[],c=[];!function(){function e(e){for(var n=t.sqrt(e),r=2;r<=n;r++)if(!(e%r))return!1;return!0}function n(e){return 4294967296*(e-(0|e))|0}for(var r=2,i=0;i<64;)e(r)&&(i<8&&(a[i]=n(t.pow(r,.5))),c[i]=n(t.pow(r,1/3)),i++),r++}();var l=[],u=s.SHA256=o.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],a=n[4],u=n[5],d=n[6],h=n[7],f=0;f<64;f++){if(f<16)l[f]=0|e[t+f];else{var p=l[f-15],m=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,y=l[f-2],b=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;l[f]=m+l[f-7]+b+l[f-16]}var v=r&i^r&o^i&o,g=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),Z=h+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&u^~a&d)+c[f]+l[f];h=d,d=u,u=a,a=s+Z|0,s=o,o=i,i=r,r=Z+(g+v)|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+u|0,n[6]=n[6]+d|0,n[7]=n[7]+h|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=t.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,e.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});n.SHA256=o._createHelper(u),n.HmacSHA256=o._createHmacHelper(u)}(Math),e.SHA256}(D.exports),ee=["hashOverride"],te="node"===C.CROQUET_PLATFORM;function ne(e){for(var t=e.sigBytes,n=e.words,r=new Uint8Array(t),i=0,o=0;i<t;){var s=n[o++];if(r[i++]=(4278190080&s)>>>24,i===t)break;if(r[i++]=(16711680&s)>>>16,i===t)break;if(r[i++]=(65280&s)>>>8,i===t)break;r[i++]=255&s}return r}function re(e){function t(e){var t=e.indexOf("{"),n=e.lastIndexOf("}");if(-1===t||-1===n||n<t)return e;var r=e.slice(0,t).replace(/\s+/g," ").replace(/\s\(/,"("),i=e.slice(t+1,n);return"".concat(r.trim(),"{").concat(i.trim(),"}")}var n=t(""+e);if(!n.startsWith("class")){var r=e.prototype;r&&(n+=Object.getOwnPropertyNames(r).map((function(e){return"".concat(e,":").concat(t(""+r[e]))})).join(""))}return n}function ie(e){return btoa(String.fromCharCode.apply(String,w(new Uint8Array(e)))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function oe(e){return se.apply(this,arguments)}function se(){return se=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return","47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU");case 2:return e.next=4,B("SHA-256",t);case 4:return n=e.sent,e.abrupt("return",ie(n));case 6:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ae(){return H.has("debug","hashing",!1)}B=globalThis.crypto&&globalThis.crypto.subtle&&"function"==typeof globalThis.crypto.subtle.digest?globalThis.crypto.subtle.digest.bind(globalThis.crypto.subtle):function(e,t){if("SHA-256"!==e)throw Error("Croquet: only SHA-256 available");var n=A.create(t);return ne($(n)).buffer};var ce={},le=new TextEncoder;function ue(e){return de.apply(this,arguments)}function de(){return de=i(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=le.encode(t),e.next=3,oe(n);case 3:return r=e.sent,ae()&&(ce[r]={string:t,buffer:n}),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}var he=[],fe={};function pe(e,t){return me.apply(this,arguments)}function me(){return(me=i(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(t+Q(n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ye=new Set;function be(e,t,n,r){return ve.apply(this,arguments)}function ve(){return(ve=i(regeneratorRuntime.mark((function e(n,r,i,o){var s,a,c,l,u,d,h,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=fe[n],l="",!c){e.next=8;break}s=c.codeHashes,a=c.computedCodeHash,l=" (code hashing from cache)",e.next=15;break;case 8:return e.next=10,Promise.all(he);case 10:return s=e.sent,e.next=13,ue([o].concat(w(s)).join("|"));case 13:a=e.sent,fe[n]={codeHashes:s,computedCodeHash:a};case 15:return u=i.hashOverride,d=m(i,ee),h=u||a,e.next=19,ue(n+"|"+r+Q(d)+h);case 19:return f=e.sent,ae()&&!ye.has(f)&&((te?"utf-8":w(document.getElementsByTagName("meta")).find((function(e){return e.getAttribute("charset")})))||console.warn('Croquet: Missing <meta charset="..."> declaration. Croquet model code hashing might differ between browsers.'),ce[a].what="Version ID",ce[n].what="Persistent ID",ce[f].what="Session ID",h!==a&&(s.push(a),ce[a].what="Computed Version ID (replaced by overrideHash)",ce[h]={what:"Version ID (as specified by overrideHash)"}),p=[].concat(w(s),[h,n,f]).map((function(e){return t({hash:e},ce[e])})),console.log("Croquet: Debug Hashing for session ".concat(f).concat(l),p),ye.add(f)),e.abrupt("return",{id:f,persistentId:n,codeHash:h,computedCodeHash:a});case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge=Date.now();"undefined"==typeof performance&&(window.performance={now:function(){return Date.now()-ge}});var Ze,Xe,we=["simulate","update","render","snapshot"],Le={total:"black",update:"blue",render:"magenta",simulate:"yellow",snapshot:"green",backlog:"red",network:"lightgray"},ke=null,xe=null,Ge=null,Se=0,We=null,Te=null;function Ce(e){for(ke=e;e.firstChild;)e.removeChild(e.firstChild);e.style.background="#faf0dc",We=document.createElement("canvas"),Te=We.getContext("2d"),We.id="text_stats",We.width=Math.min(140,window.innerWidth),We.height=36,We.style.width=We.width,We.style.height=We.height,Te.font="9.5pt sans-serif",e.appendChild(We),e.title=Object.entries(Le).map((function(e){var t=Z(e,2),n=t[0],r=t[1];return"".concat(r,": ").concat(n)})).join("\n"),(xe=document.createElement("canvas")).width=Math.min(125,window.innerWidth),xe.height=125,xe.style.width="100%";var t=document.createElement("div");t.id="innerDiv",e.appendChild(t),t.appendChild(xe),Ge=xe.getContext("2d")}var Re=[],Ye=0,Ie=!1,Ve=He(0),Pe={},Ke=1e3/60;function Me(e){return 20*(1-e/Ke)+60}function Ne(e){Ze=function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.style.width="100%",t.style.position="absolute",t.style.left="0px",ke.querySelector("#innerDiv").appendChild(t),t}(e),(Xe=Ze.getContext("2d")).strokeStyle="rgba(255, 255, 255, 0.5)";for(var t=0;t<60;t+=Ke){var n=Me(t);Xe.moveTo(0,n),Xe.lineTo(Ze.width,n),Xe.stroke()}}function He(e){return{start:e,total:0,items:{},users:0,backlog:0,network:0,latency:0,activity:1e3,connected:Ie}}function Fe(e){Ve.total=e-Ve.start;var t=Math.min(120,window.innerWidth);if(Re.length>=t&&Re.splice(0,Re.length-t+1),Re.push(Ve),!(Re.length<=1)&&ke&&0!==ke.offsetHeight){var n=Re.slice(1).filter((function(e){return e.total})),r=n.map((function(e){return e.total})).reduce((function(e,t){return e+t}),0)/n.length,i=Math.max.apply(Math,w(n.map((function(e){return e.total}))));Math.max.apply(Math,w(n.map((function(e){return Math.max(e.backlog,e.network)})))),Ye=1e3,function(e,t){Te.globalCompositeOperation="copy",Te.fillStyle="rgb(255, 255, 255, 0)",Te.fillRect(0,0,We.width,We.height),Te.fillStyle="rgb(0, 0, 0, 1)",Te.globalCompositeOperation="source-over";var n="".concat(Ve.users," users, ").concat(Math.round(1e3/e)," fps");t>70&&(n+=" ".concat(Math.ceil(t).toLocaleString(),"ms")),Te.fillText(n,2,15),n=Ve.backlog<100&&Ve.activity<1e3?"latency: ".concat(Ve.latency," ms"):"backlog: ".concat(Ve.backlog<100?"0.0":(Ve.backlog/1e3).toFixed(1)," s"),Te.fillText(n,2,33)}(r,i),Ze||Ne(xe),Se===xe.width?(Ge.globalCompositeOperation="copy",Ge.drawImage(xe,1,0,xe.width-1,xe.height,0,0,xe.width-1,xe.height),Ge.globalCompositeOperation="source-over",Ge.fillStyle="transparent",Ge.fillRect(xe.width-1,0,1,xe.height)):Se++;var o=function(e){return Me(e/Ye*-2*Ke)+5},s=Re[Re.length-1],a=Se-.5,c=Me(0);Ge.beginPath(),Ge.moveTo(a,c),Ge.lineTo(a,Me(s.total)),Ge.strokeStyle=Le[s.connected?"total":"network"],Ge.stroke(),Ge.beginPath(),Ge.moveTo(a,c),c=Me(s.total);var l,u=0,d=W(we);try{for(d.s();!(l=d.n()).done;){var h=l.value;s.items[h]&&(c=Me(u+=s.items[h]),Ge.lineTo(a,c),Ge.strokeStyle=Le[h],Ge.stroke(),Ge.beginPath(),Ge.moveTo(a,c))}}catch(e){d.e(e)}finally{d.f()}s.network&&(Ge.beginPath(),Ge.moveTo(a,o(0)),Ge.lineTo(a,o(s.network)),Ge.strokeStyle=Le.network,Ge.stroke())}}var ze=[],_e={animationFrame:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Fe(e),Ve=He(e);for(var n=0,r=Object.entries(t);n<r.length;n++){var i=Z(r[n],2),o=i[0],s=i[1];this[o](s)}},begin:function(e){var t=performance.now();Ve.items[e]=(Ve.items[e]||0)-t;var n=ze[ze.length-1];return n&&(Ve.items[n]+=t),ze.push(e),t},end:function(e){var t=performance.now();Ve.items[e]+=t;var n=ze.pop();if(n!==e)throw Error('Unmatched stats calls: expected end("'.concat(n,'"), got end("').concat(e,'")'));var r=ze[ze.length-1];return r&&(Ve.items[r]-=t),t},backlog:function(e){Ve.backlog=Math.max(e,Ve.backlog)},network:function(e){Ve.network=e},starvation:function(e){Ve.network=e},latency:function(e){Ve.latency=e},activity:function(e){Ve.activity=e},users:function(e){Ve.users=e},connected:function(e){var t=Ie;Ve.connected=Ie=e,t&&!Ie&&Ze&&(Ze.remove(),Xe=null)},perSecondTally:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(window.logMessageStats)for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Z(n[t],2),i=r[0],o=r[1];Pe[i]=(Pe[i]||0)+o}},stepSession:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Math.floor(Date.now()/1e3);if(!window.logMessageStats)return Pe={second:r},null;var i=null;if(r!==Pe.second){if(Pe.second&&n&&(Pe.requestedMessages||Pe.sentMessagesTotal)){i=t({},Pe);var o=r-Pe.second;1!==o&&(i.sampleSeconds=o),i.sentBundles&&(i.averageDelay=Math.round(10*i.sendDelay/i.sentMessagesTotal)/10,i.averageBundlePayload=Math.round(i.sentBundlePayload/i.sentBundles)),delete i.second,delete i.sendDelay,delete i.sentBundlePayload}Pe={second:r}}return i}},Ee="ontouchstart"in document.documentElement,je=window.parent!==window,Je=Ee?20:12,Ue=Ee?0:15,Qe=!1;function Oe(){if(!Qe){Qe=!0;var e="\n        #croquet_dock { position: fixed; z-index: 2; border: 3px solid white; bottom: 6px; left: 6px; width: 36px; height: 36px; box-sizing: border-box; background: white; opacity: 0.4; transition: all ".concat(.3,"s ease; }\n        #croquet_dock.active { opacity: 0.95; border-radius: 12px; }\n        #croquet_dock.debug { width: 84px; }\n        #croquet_dock_bar { position: absolute; border: 3px solid white; width: 100%; height: 30px; box-sizing: border-box; background: white; }\n\n        #croquet_badge { position: absolute; width: 72px; height: 24px; top: 50%; transform: translate(0px, -50%); cursor: none; }\n        #croquet_dock.active #croquet_badge { left: 2%; }\n        #croquet_dock:not(.debug) #croquet_badge { display: none; }\n\n        .croquet_dock_button { position: absolute; width: ").concat(Je,"%; height: 90%; top: 50%; transform: translate(0px, -50%); border-radius: 20%; }\n        .croquet_dock_button:focus { outline: 0; }\n        .croquet_dock_button canvas { position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; }\n        #croquet_dock:not(.active) .croquet_dock_button { display: none; }\n        #croquet_dock_left { right: ").concat(2+Ue+Je+2,"% }\n        #croquet_dock:not(.debug) #croquet_dock_left { display: none; }\n        #croquet_dock_right { right: ").concat(2+Ue,"%; }\n        #croquet_dock:not(.debug) #croquet_dock_right { display: none; }\n        #croquet_dock_pin { right: ").concat(2,"%; }\n        #croquet_dock_pin.pinned { background: #cce6ff; }\n\n        #croquet_dock_content { position: absolute; left: ").concat(2,"px; top: ").concat(2,"px; right: ").concat(2,"px; bottom: ").concat(2,"px; background: white; overflow: hidden; }\n        #croquet_dock.debug:not(.active) #croquet_dock_content { display: none; }\n        #croquet_dock.debug:not(.active) #croquet_dock_content div { display: none; }\n\n        #croquet_qrcode { position: absolute; width: 100%; height: 100%;box-sizing: border-box; cursor: crosshair; }\n        #croquet_dock.active #croquet_qrcode { border: 6px solid white; }\n        #croquet_dock.debug #croquet_qrcode:not(.active) { display: none; }\n        #croquet_qrcode canvas { image-rendering: pixelated; }\n\n        #croquet_stats { position: absolute; width: 70%; height: 90%; left: 15%; top: 5%; opacity: 0.8; font-family: sans-serif; }\n        #croquet_stats:not(.active) { display: none; }\n"),t=document.createElement("style");t.innerHTML=e,document.head.insertBefore(t,document.head.getElementsByTagName("style")[0])}}var De=!1;var Be,Ae=!1;function qe(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&pt.showMessage(e,t(t({},n),{},{level:"warning"}))}function $e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&pt.showMessage(e,t(t({},n),{},{level:"status"}))}function et(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";console.error("Error during ".concat(e),t);var r=(t.stack||"").split("\n").filter((function(e){return!e.match(/croquet-.*\.min.js/)})).join("\n");pt.showMessage("Error during ".concat(e,": ").concat(t.message,"\n\n").concat(r),{level:n,duration:"error"===n?1e4:void 0,stopOnFocus:!0})}function tt(e,n){var r=ht(pt.root,(function(){return document.body}));if(!1===r)return null;!function(){if(!Ae){Ae=!0;var e=document.createElement("style");e.innerHTML="/*!\n        * Toastify js 1.5.0\n        * https://github.com/apvarun/toastify-js\n        * @license MIT licensed\n        *\n        * Copyright (C) 2018 Varun A P\n        */\n        .toastify {\n            padding: 12px 20px;\n            color: #ffffff;\n            display: inline-block;\n            box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n            background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n            background: linear-gradient(135deg, #73a5ff, #5477f5);\n            position: fixed;\n            opacity: 0;\n            transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n            border-radius: 2px;\n            cursor: pointer;\n            text-decoration: none;\n            max-width: calc(50% - 20px);\n            z-index: 2147483647;\n        }\n        .toastify.on {\n            opacity: 1;\n        }\n        .toast-close {\n            opacity: 0.4;\n            padding: 0 5px;\n        }\n        .toastify-right {\n            right: 15px;\n        }\n        .toastify-left {\n            left: 15px;\n        }\n        .toastify-top {\n            top: -150px;\n        }\n        .toastify-bottom {\n            bottom: -150px;\n        }\n        .toastify-rounded {\n            border-radius: 25px;\n        }\n        .toastify-avatar {\n            width: 1.5em;\n            height: 1.5em;\n            margin: 0 5px;\n            border-radius: 2px;\n        }\n        @media only screen and (max-width: 360px) {\n            .toastify-right, .toastify-left {\n                margin-left: auto;\n                margin-right: auto;\n                left: 0;\n                right: 0;\n                max-width: fit-content;\n            }\n        }\n\n        .toastify {\n            font-family: sans-serif;\n            border-radius: 8px;\n        }\n\n        .toastify-center {\n            margin-left: auto;\n            margin-right: auto;\n            left: 0;\n            right: 0;\n            max-width: fit-content;\n            max-width: -moz-fit-content;\n        }\n",document.head.insertBefore(e,document.head.getElementsByTagName("style")[0])}}();var i,o=t({text:e,duration:3e3,gravity:"bottom",position:"right",stopOnFocus:!0},n);return r instanceof Element&&r!==document.body?(i=r.id)||(r.id=i="_croquetToastParent"):"string"==typeof r&&(i=r),i&&(o.selector=i),z(o).showToast()}try{if((Be=window.localStorage)["croquet-debug-persist-allowed"]="true","true"!==Be["croquet-debug-persist-allowed"])throw Error("localStorage not persisted");delete Be["croquet-debug-persist-allowed"]}catch(ws){console.warn("localStorage not allowed"),Be={}}var nt,rt,it={get pinned(){return"true"===Be[window.location.pathname+"/croquet-debug-ui-pinned"]},set pinned(e){Be[window.location.pathname+"/croquet-debug-ui-pinned"]=!!e},get activePage(){return Be[window.location.pathname+"/croquet-debug-ui-activePage"]},set activePage(e){Be[window.location.pathname+"/croquet-debug-ui-activePage"]=e}},ot=function(e){e.preventDefault(),e.stopPropagation()};function st(e,t,n){var r=document.createElement("canvas"),i=r.width=40*Je/12,o=r.height=60,s=r.getContext("2d");s.font="36px Arial",s.textAlign="center",s.textBaseline="middle",s.fillStyle="black",s.fillText(e,i/2,.55*o);var a=document.createElement("button");a.id=t,a.className="croquet_dock_button";var c=function(e){e.preventDefault(),e.stopPropagation(),n()};return Ee?(a.ontouchstart=c,a.ontouchend=ot,a.onpointerdown=ot,a.onpointerup=ot):(a.onclick=c,a.onpointerdown=ot,a.onpointerup=ot),a.appendChild(r),a}function at(e,t){if(!1!==pt.badge){var n=function(e){for(var t=new j(e),n=["bcdfghjklmnpqrstvwxyz","aeiou"],r="",i=0;i<5;i++)r+=n[i%2][t.quick()*n[i%2].length|0];return r}(t);for(document.title=document.title.replace(/:.*/,""),document.title+=":"+n;e.firstChild;)e.removeChild(e.firstChild);var r=document.createElement("canvas"),i=r.width=120,o=r.height=40;r.style.width="100%",e.appendChild(r);var s=r.getContext("2d"),a=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new j(e),r=[],i=0;i<t;i++)r.push("hsl(".concat(360*n.quick(),", 50%, 70%)"));return r}(t,2);s.fillStyle=a[0],s.beginPath(),s.moveTo(0,0),s.lineTo(0,o),s.lineTo(i,0),s.closePath(),s.fill(),s.fillStyle=a[1],s.beginPath(),s.moveTo(i,o),s.lineTo(i,0),s.lineTo(0,o),s.closePath(),s.fill(),s.font="30px Arial",s.textAlign="center",s.textBaseline="middle",s.fillStyle="black",s.fillText(n,i/2,o/2)}}function ct(e,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e.firstChild;)e.removeChild(e.firstChild);return new U(e,t({text:n,width:128,height:128,colorDark:"#000000",colorLight:"#ffffff",correctLevel:U.CorrectLevel.L},r))}function lt(){if(!1!==pt.root&&!1!==pt.qrcode&&!H.noqr){var e=pt.sessionURL;if(e){var t=ht(pt.qrcode);if(t)Ee||(t.onclick=function(t){var n;t.preventDefault(),t.stopPropagation(),t.shiftKey?(n=document.getElementById("croquet_dock"))&&n.classList.toggle("debug"):window.open(e)}),ct(t,e).getCanvas().style.width="100%"}else console.warn("App.sessionURL is not set")}}var ut=0;function dt(){!function(){if(!De){De=!0;var e="\n        ".concat(je?"body { min-height: 100vh }":"","\n        #croquet_spinnerOverlay {\n            z-index: 1000;\n            position: fixed;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color:#333;\n            opacity:0.9;\n            display:flex;\n            align-items:center;\n            justify-content:center;\n            transition: opacity 1.0s ease-out;\n        }\n        /* https://github.com/lukehaas/css-loaders */\n        @keyframes croquet_dots {\n            0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em; }\n            40% { box-shadow: 0 2.5em 0 0; }\n        }\n        #croquet_loader,\n        #croquet_loader::before,\n        #croquet_loader::after {\n          border-radius: 50%;\n          width: 2.5em;\n          height: 2.5em;\n          animation: croquet_dots 1.8s infinite ease-in-out;\n        }\n        #croquet_loader {\n          color: #fff;\n          font-size: 10px;\n          margin: 80px auto;\n          position: relative;\n          text-indent: -9999em;\n          animation-delay: -0.16s;\n        }\n        #croquet_loader::before,\n        #croquet_loader::after {\n          content: '';\n          position: absolute;\n          top: 0;\n        }\n        #croquet_loader::before { left: -3.5em; animation-delay: -0.32s; }\n        #croquet_loader::after { left: 3.5em; }\n        #croquet_spinnerOverlay.croquet_error>*,\n        #croquet_spinnerOverlay.croquet_error>*::before,\n        #croquet_spinnerOverlay.croquet_error>*::after {\n            color: #f00;\n        }\n        #croquet_spinnerOverlay.croquet_fatal>*,\n        #croquet_spinnerOverlay.croquet_fatal>*::before,\n        #croquet_spinnerOverlay.croquet_fatal>*::after {\n            color: #f00;\n            box-shadow: 0 2.5em 0 0 !important;\n            animation: none !important;\n        }\n"),t=document.createElement("style");t.innerHTML=e,document.head.insertBefore(t,document.head.getElementsByTagName("style")[0])}}();var e=document.createElement("div");e.id="croquet_spinnerOverlay";var t=document.createElement("div");return t.id="croquet_loader",t.innerText="Catching up...",e.appendChild(t),e}function ht(e,t){if(!1===e)return!1;if(e instanceof Element)return e;if("string"==typeof e){var n=document.getElementById(e);if(n)return n}return t?t():null}var ft=new Set,pt={sessionURL:function(){var e,t=null,n=W(document.getElementsByTagName("link"));try{for(n.s();!(e=n.n()).done;){var r=e.value;if("canonical"===r.getAttribute("rel")){t=r.getAttribute("href");break}}}catch(e){n.e(e)}finally{n.f()}return t||window.location.href}(),root:null,sync:!0,messages:!1,badge:!1,stats:!1,qrcode:!1,makeWidgetDock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!H.nodock){var t=e.debug||H.debug,n=document.getElementById("croquet_dock");n&&n.parentElement.removeChild(n);var r=ht(pt.root,(function(){return document.body}));if(r){Oe();var i=document.createElement("div");i.id="croquet_dock",t&&i.classList.add("debug"),je&&!e.iframe&&(i.style.display="none"),r.appendChild(i);var o,s=document.createElement("div");s.id="croquet_dock_bar",i.appendChild(s),!1!==e.badge&&((o=document.createElement("div")).id="croquet_badge",s.appendChild(o),pt.badge=o);var a=document.createElement("div");a.id="croquet_dock_content",i.appendChild(a);var c,l,u=[];if(!1!==e.qrcode){var d=pt.sessionURL;d&&((c=document.createElement("div")).id="croquet_qrcode",a.appendChild(c),u.push(c.id),pt.qrcode=c,t||(it.activePage=c.id))}if(!1!==e.stats&&((l=document.createElement("div")).id="croquet_stats",a.appendChild(l),u.push(l.id),pt.stats=l),u.length){var h=function(e){var t,n=u.length,r=0;if(it.activePage){var i=u.indexOf(it.activePage);i>=0?(r=i,t=document.getElementById(it.activePage)):it.activePage=null}var o,s=u[(r+n+e)%n];s===it.activePage?o=t:(t&&t.classList.remove("active"),o=document.getElementById(s)),o&&o.classList.add("active"),it.activePage=s};u.length>1&&(s.appendChild(st("<","croquet_dock_left",(function(){return h(-1)}))),s.appendChild(st(">","croquet_dock_right",(function(){return h(1)})))),h(0)}if(!Ee&&!e.alwaysPinned){var f=st("📌","croquet_dock_pin",(function(){it.pinned=!it.pinned,p()})),p=function(){it.pinned?f.classList.add("pinned"):f.classList.remove("pinned")};p(),s.appendChild(f)}var m=200,y=166,b=8,v=function(e){i.style.width="".concat(e,"px");var t=1.18*e;i.style.height="".concat(t,"px");var n=18*e/100;s.style.height="".concat(n,"px"),a.style.top="".concat(n+2,"px"),o&&(o.style.height="".concat(.9*n,"px"),o.style.width="".concat(.9*n*3,"px")),c&&(c.style.border="".concat(b*e/m,"px solid white"))},g=function(){i.style.width=i.style.height="",s.style.height="",a.style.top="",o&&(o.style.height=o.style.width=""),c&&(c.style.border="")},Z=e.fixedSize||m,X=function(){return i.classList.contains("active")},w=function(){i.classList.add("active"),v(Z),setTimeout((function(){return i.style.transition="none"}),300)},L=function(){i.style.transition="",i.classList.remove("active"),g()};if(Ee)L(),i.ontouchstart=function(e){e.preventDefault(),e.stopPropagation(),X()?L():w()},i.ontouchend=ot,i.onpointerdown=ot,i.onpointerup=ot;else if(e.alwaysPinned?w():(it.pinned?w():L(),i.onmouseenter=w,i.onmouseleave=function(){it.pinned||L()}),!e.fixedSize){var k=0;i.addEventListener("wheel",(function(e){e.stopPropagation();var t=Date.now();if(!(t-k<100)){k=t;var n=e.deltaY;n=Math.sign(n)*Math.min(5,Math.abs(n));var r=.8*Math.min(window.innerWidth,window.innerHeight);Z=Math.max(y,Math.min(r,i.offsetWidth/Math.pow(1.05,n))),v(Z)}}),{passive:!0})}}}},makeSessionWidgets:function(e){!function(e){if(e&&!1!==pt.root){var t=ht(pt.badge);t&&at(t,e)}}(e),lt(),function(){if(!1!==pt.root&&!H.nostats){var e=ht(pt.stats);e&&Ce(e)}}()},makeQRCanvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!pt.sessionURL)return null;var t=document.createElement("div"),n=ct(t,pt.sessionURL,e);return n&&n.getCanvas()},clearSessionMoniker:function(){!1!==pt.badge&&(document.title=document.title.replace(/:.*/,""))},showSyncWait:function(e){!1===pt.root?e=!1:nt||(nt=dt()),function(e){if(rt!==e&&("string"!=typeof rt||!0!==e))if(!1===pt.sync&&(e=!1),rt=e,e)clearTimeout(ut),ut=setTimeout((function(){rt&&(ht(pt.root,(function(){return document.body})).appendChild(nt),nt.style.opacity=.9,nt.className="error"===rt?"croquet_error":"fatal"===rt?"croquet_fatal":"")}),500);else{if(!nt)return;clearTimeout(ut),nt.style.opacity=0,nt.className="",ut=setTimeout((function(){rt||nt.parentElement&&nt.parentElement.removeChild(nt)}),500)}}(e)},messageFunction:function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.level;return"error"===i?(n="orangered,red",console.error(e)):"warning"===i?(n="gold,orange",console.warn(e)):n="silver,gray",tt(e,t({style:{background:"linear-gradient(90deg,".concat(n,")")}},r))},showMessage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("once"===t.only){if(ft.has(e))return null;ft.add(e)}return"fatal"===t.level&&(t.level="error",t.showSyncWait="fatal"),t.showSyncWait&&("fatal"!==t.showSyncWait||t.duration||(t.duration=-1),pt.showSyncWait(t.showSyncWait)),H.nomessages||!1===pt.root||!1===pt.messages||!pt.messageFunction?("warning"===t.level&&console.warn(e),"error"===t.level&&console.error(e),null):pt.messageFunction(e,t)},isCroquetHost:function(e){return e.endsWith("croquet.io")||["localhost","127.0.0.1","[::1]"].includes(e)||e.endsWith("ngrok.io")},referrerURL:function(){var e=new URL(pt.sessionURL),t=this.isCroquetHost(e.hostname);return"".concat(e.origin).concat(e.pathname).concat(t?e.search:"")},autoSession:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"q"};"string"==typeof e&&(e={key:e}),e||(e={});var t=e.key||"q",n=new URL(pt.sessionURL),r="",i=n.search.slice(1).split("&"),o=i.find((function(e){return e.split("=")[0]===t}));if(o?r=o.replace(/[^=]*=/,""):(r=i.find((function(e){return!e.includes("=")})))||(r=n.hash.slice(1))&&(n.hash="",n.search?n.searchParams.set(t,r):n.search=r),r)try{r=decodeURIComponent(r)}catch(e){}else r=Math.floor(Math.random()*Math.pow(36,10)).toString(36),n.searchParams.set(t,r);var s=n.toString("");window.location.href!==s&&(window.history.replaceState({},"",s),pt.sessionURL=s),H.has("debug","session")&&console.log('Croquet.App.autoSession: "'.concat(r,'"'));var a=Promise.resolve(r);return a[Symbol.toPrimitive]=function(){return console.warn("Deprecated: Croquet.App.autoSession() return value used directly. It returns a promise now!"),r},a},autoPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"pw",scrub:!1,keyless:!1},t=e.key||"pw",n=e.scrub&&!H.has("debug","password"),r=e.keyless,i=new URL(pt.sessionURL),o="",s=i.hash.slice(1);if(s){var a=s.split("&"),c=a.find((function(e){return e.split("=")[0]===t}));c?(o=c.replace(/[^=]*=/,""))&&n&&(i.hash=a.filter((function(e){return e.split("=")[0]!==t})).join("&")):r&&(o=a.find((function(e){return!e.includes("=")})))&&n&&(i.hash=a.filter((function(e){return e!==o})).join("&"))}if(!o){var l=new Uint8Array(16);window.crypto.getRandomValues(l),o=ie(l.buffer),i.hash=s?"".concat(s,"&").concat(t,"=").concat(o):r?o:"".concat(t,"=").concat(o),pt.sessionURL=i.href,n&&(i.hash=s)}if(H.has("debug","session")&&console.log("Croquet.App.sessionUrl: ".concat(pt.sessionURL)),window.location.href!==i.href&&window.history.replaceState({},"",i.href),o)try{o=decodeURIComponent(o)}catch(e){}H.has("debug","session")&&console.log('Croquet.App.autoPassword: "'.concat(o,'"'));var u=Promise.resolve(o);return u[Symbol.toPrimitive]=function(){return console.warn("Deprecated: Croquet.App.autoPassword() return value used directly. It returns a promise now!"),o},u}},mt=function(){function e(){var t;o(this,e),this.subscriptions={},this.queuedEvents=[],this.perFrameEvents=new Map,this.perSyncedFrameEvents=new Map,this.id=(t=function(){return crypto.getRandomValues(new Uint8Array(1))[0]},([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^t()&15>>e/4).toString(16)}))),this.lastId=0}return a(e,[{key:"register",value:function(e){return"V"+ ++this.lastId}},{key:"deregister",value:function(e){}},{key:"addSubscription",value:function(e,t,n,r,i){if("vote"!==i){var o=e+":"+t,s=r;s.for=n;var a=this.subscriptions[o];if(a||(a=this.subscriptions[o]={immediate:new Set,queued:new Set,oncePerFrame:new Set,oncePerFrameWhileSynced:new Set}),!a[i])throw Error('Unknown subscribe() option: handling="'.concat(i,'"'));a[i].add(s)}else this.addSubscription(e,t+"#__vote",n,r,"immediate")}},{key:"removeSubscription",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e+":"+t,o=this.subscriptions[i];if(o){var s=yt(o,n,r);0===s&&delete this.subscriptions[i]}t.endsWith("#__vote")||this.removeSubscription(e,t+"#__vote",n)}},{key:"removeAllSubscriptionsFor",value:function(e){for(var t="".concat(e,":"),n=0,r=Object.entries(this.subscriptions);n<r.length;n++){var i=Z(r[n],2),o=i[0],s=i[1];if(o.startsWith(t))delete this.subscriptions[o];else 0===yt(s,e)&&delete this.subscriptions[o]}}},{key:"handleEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e()},r=this.subscriptions[e];r&&(r.queued.size>0&&this.queuedEvents.push({topic:e,data:t}),r.oncePerFrame.size>0&&this.perFrameEvents.set(e,t),r.oncePerFrameWhileSynced.size>0&&this.perSyncedFrameEvents.set(e,t),r.immediate.size>0&&n((function(){var n,i=W(r.immediate);try{for(i.s();!(n=i.n()).done;){var o=n.value;try{o(t)}catch(t){console.error(t),console.warn('Croquet: error "'.concat(t.message,'" in "immediate" subscription ').concat(e))}}}catch(e){i.e(e)}finally{i.f()}})))}},{key:"processFrameEvents",value:function(e,t){var n,r=this,i=0,o=function(e,t,n){var o=r.subscriptions[e];if(o){var s,a=W(o[n]);try{for(a.s();!(s=a.n()).done;){var c=s.value;try{c(t)}catch(t){console.error(t),console.warn('Croquet: error "'.concat(t.message,'" in "').concat(n,'" subscription ').concat(e))}i++}}catch(e){a.e(e)}finally{a.f()}}},s=W(this.queuedEvents);try{for(s.s();!(n=s.n()).done;){var a=n.value;o(a.topic,a.data,"queued")}}catch(e){s.e(e)}finally{s.f()}if(this.queuedEvents.length=0,e){var c,l=W(this.perFrameEvents);try{for(l.s();!(c=l.n()).done;){var u=Z(c.value,2);o(u[0],u[1],"oncePerFrame")}}catch(e){l.e(e)}finally{l.f()}if(this.perFrameEvents.clear(),t){var d,h=W(this.perSyncedFrameEvents);try{for(h.s();!(d=h.n()).done;){var f=Z(d.value,2);o(f[0],f[1],"oncePerFrameWhileSynced")}}catch(e){h.e(e)}finally{h.f()}this.perSyncedFrameEvents.clear()}var p,m=W(this.queuedEvents);try{for(m.s();!(p=m.n()).done;){var y=p.value;o(y.topic,y.data,"queued")}}catch(e){m.e(e)}finally{m.f()}this.queuedEvents.length=0}return i}}]),e}();function yt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function r(e){var r,i=W(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;(null!==n&&o.unbound===n||null===n&&o.for===t)&&e.delete(o)}}catch(e){i.e(e)}finally{i.f()}}return r(e.immediate),r(e.oncePerFrame),r(e.oncePerFrameWhileSynced),r(e.queued),e.immediate.size+e.queued.size+e.oncePerFrame.size+e.oncePerFrameWhileSynced.size}var bt=new mt;var vt={get subscribe(){return(vt={subscribe:H.has("debug","subscribe",!1)}).subscribe}},gt=function(){function e(t){o(this,e),this.vm=t}return a(e,[{key:"register",value:function(e){return this.vm.registerModel(e)}},{key:"deregister",value:function(e){this.vm.deregisterModel(e.id)}},{key:"publish",value:function(e,t,n){this.vm.publishFromModel(n,e,t)}},{key:"subscribe",value:function(e,t,n,r){return vt.subscribe&&console.log('Model.subscribe("'.concat(t,":").concat(n,'", ').concat(e," ").concat((""+r).replace(/\([\s\S]*/,""),")")),this.vm.addSubscription(e,t,n,r)}},{key:"unsubscribe",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"*";vt.subscribe&&console.log("Model.unsubscribe(".concat(t,":").concat(n,'", ').concat(e," ").concat((""+r).replace(/\([\s\S]*/,""),")")),this.vm.removeSubscription(e,t,n,r)}},{key:"unsubscribeAll",value:function(e){vt.subscribe&&console.log("Model.unsubscribeAll(".concat(e," ").concat(e.id,")")),this.vm.removeAllSubscriptionsFor(e)}},{key:"future",value:function(e,t,n,r){if(Xt&&Xt.equal(this))return this.vm.future(e,t,n,r);throw Error("Model.future() called from outside: ".concat(e))}},{key:"random",value:function(){return this.vm.random()}},{key:"now",value:function(){return this.vm.time}},{key:"equal",value:function(t){return t instanceof e&&t.vm===this.vm}},{key:"isViewRealm",value:function(){return!1}}]),e}(),Zt=function(){function e(t){o(this,e),this.vm=t}return a(e,[{key:"register",value:function(e){return bt.register(e)}},{key:"deregister",value:function(e){bt.deregister(e)}},{key:"publish",value:function(e,t,n){this.vm.publishFromView(n,e,t)}},{key:"subscribe",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"queued";vt.subscribe&&console.log('View.subscribe("'.concat(r,":").concat(e,'", ').concat(t," ").concat(n.name||(""+n).replace(/\([\s\S]*/,"")," [").concat(i,"])")),bt.addSubscription(r,e,t,n,i)}},{key:"unsubscribe",value:function(e,t,n,r){vt.subscribe&&console.log('View.unsubscribe("'.concat(r,":").concat(e,'", ').concat(t," ").concat(n.name||(""+n).replace(/\([\s\S]*/,""),")")),bt.removeSubscription(r,e,t,n)}},{key:"unsubscribeAll",value:function(e){vt.subscribe&&console.log("View.unsubscribeAll(".concat(e,")")),bt.removeAllSubscriptionsFor(e)}},{key:"future",value:function(e,t){var n=this.vm;return new Proxy(e,{get:function(r,i){if("function"==typeof e[i])return new Proxy(e[i],{apply:function(r,o,s){setTimeout((function(){e.id&&kt(n,(function(){return e[i].apply(e,w(s))}),!0)}),t)}});throw Error("Tried to call "+i+"() on future of "+Object.getPrototypeOf(e).constructor.name+" which is not a function")}})}},{key:"random",value:function(){return Math.random()}},{key:"now",value:function(){return this.vm.time}},{key:"externalNow",value:function(){return this.vm.controller.reflectorTime}},{key:"extrapolatedNow",value:function(){return this.vm.controller.extrapolatedTime}},{key:"isSynced",value:function(){return!!this.vm.controller.synced}},{key:"equal",value:function(t){return t instanceof e&&t.vm===this.vm}},{key:"isViewRealm",value:function(){return!0}}]),e}(),Xt=null;function wt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Tried to execute code that requires realm outside of realm.";if(!Xt&&e)throw Error(e);return Xt}function Lt(e,t){if(null!==Xt)throw Error("Can't switch realms from inside realm");try{return Xt=new gt(e),t()}finally{Xt=null}}function kt(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null!==Xt&&!n)throw Error("Can't switch realms from inside realm");var r=Xt;try{return Xt=new Zt(e),t()}finally{Xt=r}}var xt=function(e){return e!=e},Gt=Math.sqrt,St=.7853981633974483;var Wt=function(e){var t,n;return 0===e?.16666666666666713:((e<0?-e:e)<=1?(t=e*(19.562619833175948+e*(e*(5.444622390564711+e*(.004253011369004428*e-.6019598008014124))-16.262479672107002))-8.198089802484825,n=e*(139.51056146574857+e*(e*(70.49610280856842+e*(1*e-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(e=1/e)*(e*(5.444622390564711+e*(e*(19.562619833175948+-8.198089802484825*e)-16.262479672107002))-.6019598008014124),n=1+e*(e*(70.49610280856842+e*(e*(139.51056146574857+-49.18853881490881*e)-147.1791292232726))-14.740913729888538)),t/n)};var Tt=function(e){var t,n;return 0===e?.08333333333333809:((e<0?-e:e)<=1?(t=28.536655482610616+e*(e*(6.968710824104713+e*(.002967721961301243*e-.5634242780008963))-25.56901049652825),n=342.43986579130785+e*(e*(147.0656354026815+e*(1*e-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(e=1/e)*(e*(6.968710824104713+e*(28.536655482610616*e-25.56901049652825))-.5634242780008963),n=1+e*(e*(147.0656354026815+e*(342.43986579130785*e-383.8770957603691))-21.947795316429207)),t/n)};var Ct=function(e){var t,n,r,i,o;if(xt(e))return NaN;if(e>0?r=e:(t=!0,r=-e),r>1)return NaN;if(r>.625)i=(n=1-r)*Tt(n),n=Gt(n+n),o=St-n,o-=n=n*i-6123233995736766e-32,o+=St;else{if(r<1e-8)return e;o=r*(o=(n=r*r)*Wt(n))+r}return t?-o:o};var Rt=function(e){var t;return xt(e)||e<-1||e>1?NaN:e>.5?2*Ct(Gt(.5-.5*e)):(t=St-Ct(e),t+=6123233995736766e-32,t+=St)};var Yt=function(){return"function"==typeof Symbol&&"symbol"===n(Symbol("foo"))}();var It=function(){return Yt&&"symbol"===n(Symbol.toStringTag)},Vt=Object.prototype.toString;var Pt=function(e){return Vt.call(e)},Kt=Object.prototype.hasOwnProperty;var Mt=function(e,t){return null!=e&&Kt.call(e,t)},Nt="function"==typeof Symbol?Symbol.toStringTag:"";var Ht=function(e){var t,n,r;if(null==e)return Vt.call(e);n=e[Nt],t=Mt(e,Nt);try{e[Nt]=void 0}catch(t){return Vt.call(e)}return r=Vt.call(e),t?e[Nt]=n:delete e[Nt],r},Ft=It()?Ht:Pt,zt="function"==typeof Uint32Array;var _t=function(e){return zt&&e instanceof Uint32Array||"[object Uint32Array]"===Ft(e)},Et="function"==typeof Uint32Array?Uint32Array:null;var jt=function(){var e,t;if("function"!=typeof Et)return!1;try{t=new Et(t=[1,3.14,-3.14,4294967296,4294967297]),e=_t(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){e=!1}return e},Jt="function"==typeof Uint32Array?Uint32Array:null;var Ut=function(){throw new Error("not implemented")},Qt=jt()?Jt:Ut,Ot="function"==typeof Float64Array;var Dt=function(e){return Ot&&e instanceof Float64Array||"[object Float64Array]"===Ft(e)},Bt="function"==typeof Float64Array?Float64Array:null;var At=function(){var e,t;if("function"!=typeof Bt)return!1;try{t=new Bt([1,3.14,-3.14,NaN]),e=Dt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){e=!1}return e},qt="function"==typeof Float64Array?Float64Array:null;var $t=function(){throw new Error("not implemented")},en=At()?qt:$t,tn="function"==typeof Uint8Array;var nn=function(e){return tn&&e instanceof Uint8Array||"[object Uint8Array]"===Ft(e)},rn="function"==typeof Uint8Array?Uint8Array:null;var on=function(){var e,t;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,256,257]),e=nn(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){e=!1}return e},sn="function"==typeof Uint8Array?Uint8Array:null;var an=function(){throw new Error("not implemented")},cn=on()?sn:an,ln="function"==typeof Uint16Array;var un=function(e){return ln&&e instanceof Uint16Array||"[object Uint16Array]"===Ft(e)},dn="function"==typeof Uint16Array?Uint16Array:null;var hn=function(){var e,t;if("function"!=typeof dn)return!1;try{t=new dn(t=[1,3.14,-3.14,65536,65537]),e=un(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){e=!1}return e},fn="function"==typeof Uint16Array?Uint16Array:null;var pn,mn=function(){throw new Error("not implemented")},yn={uint16:hn()?fn:mn,uint8:cn};(pn=new yn.uint16(1))[0]=4660;var bn=52===new yn.uint8(pn.buffer)[0],vn=!0===bn?1:0,gn=new en(1),Zn=new Qt(gn.buffer);var Xn=function(e){return gn[0]=e,Zn[vn]},wn=!0===bn?1:0,Ln=new en(1),kn=new Qt(Ln.buffer);var xn=function(e,t){return Ln[0]=e,kn[wn]=t>>>0,Ln[0]},Gn=xn,Sn=Number.POSITIVE_INFINITY,Wn=Number.NEGATIVE_INFINITY;var Tn=function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+.14798198605116586*e)))))},Cn=.6931471803691238,Rn=1.9082149292705877e-10;var Yn=function(e){var t,n,r,i,o,s,a,c,l,u;if(e<-1||xt(e))return NaN;if(-1===e)return Wn;if(e===Sn)return e;if(0===e)return e;if(u=1,(r=e<0?-e:e)<.41421356237309503){if(r<1.862645149230957e-9)return r<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(u=0,i=e,n=1)}return 0!==u&&(r<9007199254740992?(o=(u=((n=Xn(l=1+e))>>20)-1023)>0?1-(l-e):e-(l-1),o/=l):(u=((n=Xn(l=e))>>20)-1023,o=0),(n&=1048575)<434334?l=Gn(l,1072693248|n):(u+=1,l=Gn(l,1071644672|n),n=1048576-n>>2),i=l-1),t=.5*i*i,0===n?0===i?u*Cn+(o+=u*Rn):u*Cn-((c=t*(1-.6666666666666666*i))-(u*Rn+o)-i):(c=(a=(s=i/(2+i))*s)*Tn(a),0===u?i-(t-s*(t+c)):u*Cn-(t-(s*(t+c)+(u*Rn+o))-i))},In=.6931471805599453;var Vn=function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)};var Pn=function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))},Kn=.6931471803691238,Mn=1.9082149292705877e-10;var Nn=function(e){var t,n,r,i,o,s,a,c,l,u,d;return 0===e?Wn:xt(e)||e<0?NaN:(i=0,(n=Xn(e))<1048576&&(i-=54,n=Xn(e*=0x40000000000000)),n>=2146435072?e+e:(i+=(n>>20)-1023|0,i+=(a=(n&=1048575)+614244&1048576|0)>>20|0,s=(e=Gn(e,n|1072693248^a))-1,(1048575&2+n)<3?0===s?0===i?0:i*Kn+i*Mn:(o=s*s*(.5-.3333333333333333*s),0===i?s-o:i*Kn-(o-i*Mn-s)):(a=n-398458|0,c=440401-n|0,r=(u=(d=(l=s/(2+s))*l)*d)*Vn(u),o=d*Pn(u)+r,(a|=c)>0?(t=.5*s*s,0===i?s-(t-l*(t+o)):i*Kn-(t-(l*(t+o)+i*Mn)-s)):0===i?s-l*(s-o):i*Kn-(l*(s-o)-i*Mn-s))))},Hn=Nn;var Fn=function(e){var t;return xt(e)||e<1?NaN:1===e?0:e>=268435456?Hn(e)+In:e>2?Hn(2*e-1/(e+Gt(e*e-1))):Yn((t=e-1)+Gt(2*t+t*t))};var zn=function(e){return e===Sn||e===Wn};var _n=function(e){var t,n,r;return xt(e)||zn(e)?e:(e<0&&(e=-e,t=!0),r=e<3.725290298461914e-9?e:e>268435456?Hn(e)+In:e>2?Hn(2*e+1/(Gt(e*e+1)+e)):Yn(e+(n=e*e)/(1+Gt(1+n))),t?-r:r)},En=1.5707963267948966;var jn=function(e){return 0===e?-64.85021904942025:e*(e*(e*(-.8750608600031904*e-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025};var Jn=function(e){return 0===e?194.5506571482614:194.5506571482614+e*(485.3903996359137+e*(432.88106049129027+e*(165.02700983169885+e*(24.858464901423062+1*e))))};var Un=function(e){var t,n,r,i;return xt(e)||0===e?e:e===Sn?En:e===Wn?-En:(e<0&&(n=!0,e=-e),t=0,e>2.414213562373095?(r=En,t=1,e=-1/e):e<=.66?r=0:(r=St,t=2,e=(e-1)/(e+1)),i=e*(i=(i=e*e)*jn(i)/Jn(i))+e,2===t?i+=3061616997868383e-32:1===t&&(i+=6123233995736766e-32),r+=i,n?-r:r)};var Qn,On,Dn=function(e){var t,n;return xt(e)||e<-1||e>1?NaN:1===e?Sn:-1===e?Wn:(e<0&&(t=!0,e=-e),e<3.725290298461914e-9?t?-e:e:(n=e<.5?.5*Yn((n=e+e)+n*e/(1-e)):.5*Yn((e+e)/(1-e)),t?-n:n))};!0===bn?(Qn=1,On=0):(Qn=0,On=1);var Bn={HIGH:Qn,LOW:On},An=new en(1),qn=new Qt(An.buffer),$n=Bn.HIGH,er=Bn.LOW;var tr=function(e,t){return An[0]=t,e[0]=qn[$n],e[1]=qn[er],e};var nr,rr,ir=function(e,t){return 1===arguments.length?tr([0,0],e):tr(e,t)};!0===bn?(nr=1,rr=0):(nr=0,rr=1);var or={HIGH:nr,LOW:rr},sr=new en(1),ar=new Qt(sr.buffer),cr=or.HIGH,lr=or.LOW;var ur=function(e,t){return ar[cr]=e,ar[lr]=t,sr[0]},dr=ur,hr=[0,0];var fr=function(e,t){var n,r;return ir(hr,e),n=hr[0],n&=2147483647,r=Xn(t),dr(n|=r&=2147483648,hr[1])};var pr=function(e){return!!(Xn(e)>>>31)},mr=3.141592653589793;var yr=function(e,t){var n;return xt(t)||xt(e)?NaN:zn(t)?t===Sn?zn(e)?fr(mr/4,e):fr(0,e):zn(e)?fr(3*mr/4,e):fr(mr,e):zn(e)?fr(mr/2,e):0===e?t>=0&&!pr(t)?fr(0,e):fr(mr,e):0===t?fr(mr/2,e):(n=Un(e/t),t<0?n<=0?n+mr:n-mr:n)},br=yr,vr=22250738585072014e-324;var gr=function(e){return 0===e?1.87595182427177:1.87595182427177+e*(e*(1.6214297201053545+e*(.14599619288661245*e-.758397934778766))-1.8849797954337717)};var Zr=function(e){var t,n,r,i,o;return xt(e)||zn(e)||0===e?e:(n=-2147483648&(r=Xn(e)),r&=2147483647,o=0,e<vr?(o=0x40000000000000,t=Xn(o*=e),o=dr(n|(t=(2147483647&t)/3+696219795),0)):o=Gn(o,n|(t=r/3+715094163)),o*=gr(i=o*o*(o/e)),t=Xn(o),o=dr(t+1,0),o+=o*(i=((i=e/(o*o))-o)/(o+o+i)))},Xr=Zr;var wr=function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)};var Lr=function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7};var kr=function(e,t){var n,r,i,o;return i=(o=e*e)*o,r=o*wr(o),r+=i*i*Lr(o),(i=1-(n=.5*o))+(1-i-n+(o*r-e*t))},xr=-.16666666666666632;var Gr=function(e,t){var n,r,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),r=i*e,0===t?e+r*(xr+i*n):e-(i*(.5*t-r*n)-t-r*xr)},Sr=!0===bn?0:1,Wr=new en(1),Tr=new Qt(Wr.buffer);var Cr=function(e){return Wr[0]=e,Tr[Sr]},Rr=Math.floor;var Yr=function(e){return e<0?-e:0===e?0:e};var Ir=function(e,t){return xt(t)||zn(t)?(e[0]=t,e[1]=0,e):0!==t&&Yr(t)<vr?(e[0]=4503599627370496*t,e[1]=-52,e):(e[0]=t,e[1]=0,e)};var Vr=function(e,t){return 1===arguments.length?Ir([0,0],e):Ir(e,t)};var Pr=function(e){var t=Xn(e);return(t=(2146435072&t)>>>20)-1023|0},Kr=Pr,Mr=[0,0],Nr=[0,0];var Hr=function(e,t){var n,r;return 0===e||xt(e)||zn(e)?e:(Vr(Mr,e),t+=Mr[1],(t+=Kr(e=Mr[0]))<-1074?fr(0,e):t>1023?e<0?Wn:Sn:(t<=-1023?(t+=52,r=2220446049250313e-31):r=1,ir(Nr,e),n=Nr[0],n&=2148532223,r*dr(n|=t+1023<<20,Nr[1])))},Fr=Hr,zr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_r=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Er=5.960464477539063e-8,jr=Or(new Array(20)),Jr=Or(new Array(20)),Ur=Or(new Array(20)),Qr=Or(new Array(20));function Or(e){var t,n=e.length;for(t=0;t<n;t++)e[t]=0;return e}function Dr(e,t,n,r,i,o,s,a,c){var l,u,d,h,f,p,m,y,b;for(h=o,b=r[n],y=n,f=0;y>0;f++)u=Er*b|0,Qr[f]=b-16777216*u|0,b=r[y-1]+u,y-=1;if(b=Fr(b,i),b-=8*Rr(.125*b),b-=m=0|b,d=0,i>0?(m+=f=Qr[n-1]>>24-i,Qr[n-1]-=f<<24-i,d=Qr[n-1]>>23-i):0===i?d=Qr[n-1]>>23:b>=.5&&(d=2),d>0){for(m+=1,l=0,f=0;f<n;f++)y=Qr[f],0===l?0!==y&&(l=1,Qr[f]=16777216-y):Qr[f]=16777215-y;if(i>0)switch(i){case 1:Qr[n-1]&=8388607;break;case 2:Qr[n-1]&=4194303}2===d&&(b=1-b,0!==l&&(b-=Fr(1,i)))}if(0===b){for(y=0,f=n-1;f>=o;f--)y|=Qr[f];if(0===y){for(p=1;0===Qr[o-p];p++);for(f=n+1;f<=n+p;f++){for(c[a+f]=zr[s+f],u=0,y=0;y<=a;y++)u+=e[y]*c[a+(f-y)];r[f]=u}return Dr(e,t,n+=p,r,i,o,s,a,c)}}if(0===b)for(n-=1,i-=24;0===Qr[n];)n-=1,i-=24;else(b=Fr(b,-i))>=16777216?(u=Er*b|0,Qr[n]=b-16777216*u|0,i+=24,Qr[n+=1]=u):Qr[n]=0|b;for(u=Fr(1,i),f=n;f>=0;f--)r[f]=u*Qr[f],u*=Er;for(f=n;f>=0;f--){for(u=0,p=0;p<=h&&p<=n-f;p++)u+=_r[p]*r[f+p];Ur[n-f]=u}for(u=0,f=n;f>=0;f--)u+=Ur[f];for(t[0]=0===d?u:-u,u=Ur[0]-u,f=1;f<=n;f++)u+=Ur[f];return t[1]=0===d?u:-u,7&m}var Br=function(e,t,n,r){var i,o,s,a,c,l,u;for(4,(o=(n-3)/24|0)<0&&(o=0),a=n-24*(o+1),l=o-(s=r-1),u=s+4,c=0;c<=u;c++)jr[c]=l<0?0:zr[l],l+=1;for(c=0;c<=4;c++){for(i=0,l=0;l<=s;l++)i+=e[l]*jr[s+(c-l)];Jr[c]=i}return 4,Dr(e,t,4,Jr,a,4,o,s,jr)},Ar=Math.round;var qr=function(e,t,n){var r,i,o,s,a;return o=e-1.5707963267341256*(r=Ar(.6366197723675814*e)),s=6077100506506192e-26*r,a=t>>20|0,n[0]=o-s,a-(Xn(n[0])>>20&2047)>16&&(s=20222662487959506e-37*r-((i=o)-(o=i-(s=6077100506303966e-26*r))-s),n[0]=o-s,a-(Xn(n[0])>>20&2047)>49&&(s=84784276603689e-45*r-((i=o)-(o=i-(s=20222662487111665e-37*r))-s),n[0]=o-s)),n[1]=o-n[0]-s,r},$r=1.5707963267341256,ei=6077100506506192e-26,ti=2*ei,ni=4*ei,ri=new Array(3),ii=new Array(2);var oi=function(e,t){var n,r,i,o,s,a,c;if((i=2147483647&Xn(e)|0)<=1072243195)return t[0]=e,t[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?qr(e,i,t):i<=1073928572?e>0?(c=e-$r,t[0]=c-ei,t[1]=c-t[0]-ei,1):(c=e+$r,t[0]=c+ei,t[1]=c-t[0]+ei,-1):e>0?(c=e-2*$r,t[0]=c-ti,t[1]=c-t[0]-ti,2):(c=e+2*$r,t[0]=c+ti,t[1]=c-t[0]+ti,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?qr(e,i,t):e>0?(c=e-3*$r,t[0]=c-1.8231301519518578e-10,t[1]=c-t[0]-1.8231301519518578e-10,3):(c=e+3*$r,t[0]=c+1.8231301519518578e-10,t[1]=c-t[0]+1.8231301519518578e-10,-3):1075388923===i?qr(e,i,t):e>0?(c=e-4*$r,t[0]=c-ni,t[1]=c-t[0]-ni,4):(c=e+4*$r,t[0]=c+ni,t[1]=c-t[0]+ni,-4);if(i<1094263291)return qr(e,i,t);if(i>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Cr(e),c=dr(i-((r=(i>>20)-1046)<<20|0),n),s=0;s<2;s++)ri[s]=0|c,c=16777216*(c-ri[s]);for(ri[2]=c,o=3;0===ri[o-1];)o-=1;return a=Br(ri,ii,r,o),e<0?(t[0]=-ii[0],t[1]=-ii[1],-a):(t[0]=ii[0],t[1]=ii[1],a)},si=oi,ai=[0,0];var ci=function(e){var t;if(t=Xn(e),(t&=2147483647)<=1072243195)return t<1044381696?1:kr(e,0);if(t>=2146435072)return NaN;switch(3&si(e,ai)){case 0:return kr(ai[0],ai[1]);case 1:return-Gr(ai[0],ai[1]);case 2:return-kr(ai[0],ai[1]);default:return Gr(ai[0],ai[1])}},li=Math.ceil;var ui=function(e){return e<0?li(e):Rr(e)};var di=function(e){return 0===e?.16666666666666602:.16666666666666602+e*(e*(6613756321437934e-20+e*(4.1381367970572385e-8*e-16533902205465252e-22))-.0027777777777015593)};var hi=function(e,t,n){var r,i,o;return o=(r=e-t)-(i=r*r)*di(i),Fr(1-(t-r*o/(2-o)-e),n)};var fi=function(e){var t;return xt(e)||e===Sn?e:e===Wn?0:e>709.782712893384?Sn:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:(t=ui(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5),hi(e-.6931471803691238*t,1.9082149292705877e-10*t,t))};var pi=function(e){return xt(e)?e:(e<0&&(e=-e),e>21?fi(e)/2:(fi(e)+fi(-e))/2)};var mi=function(e){return 0===e?-.03333333333333313:e*(.0015873015872548146+e*(e*(4008217827329362e-21+-2.0109921818362437e-7*e)-793650757867488e-19))-.03333333333333313},yi=.6931471803691238,bi=1.9082149292705877e-10;var vi=function(e){var t,n,r,i,o,s,a,c,l,u,d,h;if(e===Sn||xt(e))return e;if(e===Wn)return-1;if(0===e)return e;if(e<0?(n=!0,a=-e):(n=!1,a=e),a>=38.816242111356935){if(n)return-1;if(a>=709.782712893384)return Sn}if(o=0|Xn(a),a>.34657359027997264)a<1.0397207708399179?n?(r=e+yi,i=-bi,h=-1):(r=e-yi,i=bi,h=1):(h=n?1.4426950408889634*e-.5:1.4426950408889634*e+.5,r=e-(u=h|=0)*yi,i=u*bi),l=r-(e=r-i)-i;else{if(o<1016070144)return e;h=0}return d=(c=e*(t=.5*e))*(((s=1+c*mi(c))-(u=3-s*t))/(6-e*u)),0===h?e-(e*d-c):(d=e*(d-l)-l,d-=c,-1===h?.5*(e-d)-.5:1===h?e<-.25?-2*(d-(e+.5)):1+2*(e-d):h<=-2||h>56?(r=Xn(a=1-(d-e))+(h<<20)|0,(a=Gn(a,r))-1):(u=1,h<20?a=(u=Gn(u,r=1072693248-(2097152>>h)|0))-(d-e):(a=e-(d+(u=Gn(u,r=1023-h<<20|0))),a+=1),r=Xn(a)+(h<<20)|0,Gn(a,r)))},gi=!0===bn?0:1,Zi=new en(1),Xi=new Qt(Zi.buffer);var wi=function(e,t){return Zi[0]=e,Xi[gi]=t>>>0,Zi[0]},Li=wi;var ki=function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)};var xi=function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))};var Gi=function(e){var t,n,r,i,o,s,a,c,l,u;return i=e-1,(1048575&2+(r=Xn(e)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(r&=1048575)-398458|0,u=440401-r|0,n=(c=(s=(o=i/(2+i))*o)*s)*ki(c),a=s*xi(c)+n,(l|=u)>0?o*((t=.5*i*i)+a)-t:o*(a-i))};var Si=function(e){var t,n,r,i,o,s,a;return xt(e)||e<0?NaN:0===e?Wn:(o=0,(n=Xn(e))<1048576&&(o-=54,n=Xn(e*=0x40000000000000)),n>=2146435072?e+e:(o+=(n>>20)-1023|0,e=Gn(e,(n&=1048575)|1072693248^(i=n+614244&1048576|0)),s=o+=i>>20|0,r=Gi(e),a=3694239077158931e-28*s+25082946711645275e-27*((e-=1)+r),(a+=.4342944818781689*(e-(t=Li(e,0))+r)+.4342944818781689*t)+.30102999566361177*s))},Wi=Si;var Ti=function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)};var Ci=function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))};var Ri=function(e){var t,n,r,i,o,s,a,c,l,u;return i=e-1,(1048575&2+(r=Xn(e)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(r&=1048575)-398458|0,u=440401-r|0,n=(c=(s=(o=i/(2+i))*o)*s)*Ti(c),a=s*Ci(c)+n,(l|=u)>0?o*((t=.5*i*i)+a)-t:o*(a-i))},Yi=[0,0];var Ii=function(e){var t,n,r,i,o;if(xt(e)||e<0)return NaN;if(ir(Yi,e),o=0,(n=Yi[0])<1048576){if(0==(2147483647&n|Yi[1]))return Wn;o-=54,n=Xn(e*=0x40000000000000)}return n>=2146435072?e+e:(o+=(n>>20)-1023|0,e=Gn(e,(n&=1048575)|1072693248^(i=n+614244&1048576|0)),o+=i>>20|0,r=Ri(e),1.6751713164886512e-10*((e-=1)+r)+1.4426950407214463*(e-(t=Li(e,0))+r)+1.4426950407214463*t+o)},Vi=Ii,Pi=[0,0];var Ki=function(e){var t;if(t=Xn(e),(t&=2147483647)<=1072243195)return t<1045430272?e:Gr(e,0);if(t>=2146435072)return NaN;switch(3&si(e,Pi)){case 0:return Gr(Pi[0],Pi[1]);case 1:return kr(Pi[0],Pi[1]);case 2:return-Gr(Pi[0],Pi[1]);default:return-kr(Pi[0],Pi[1])}};var Mi=function(e){var t,n;return 0===e?.16666666666666666:((e<0?-e:e)<=1?(t=e*(e*(-.789474443963537*e-163.72585752598383)-11561.443576500522)-351754.9648081514,n=e*(36157.827983443196+e*(1*e-277.7110814206028))-2110529.7888489086):(t=(e=1/e)*(e*(-351754.9648081514*e-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+e*(e*(36157.827983443196+-2110529.7888489086*e)-277.7110814206028)),t/n)};var Ni=function(e){var t;return 0===e?e:(t=Yr(e),e>710.4758600739439||e<-709.089565712824?e>0?Sn:Wn:t>1?t>=709.0895657128241?(t=fi(.5*t),t*=.5*t,e<0&&(t=-t),t):(t=.5*(t=fi(t))-.5/t,e<0&&(t=-t),t):e+e*(t*=t)*Mi(t))};var Hi=function(e){return 0===e?.13333333333320124:.13333333333320124+e*(.021869488294859542+e*(.0035920791075913124+e*(.0005880412408202641+e*(7817944429395571e-20+-18558637485527546e-21*e))))};var Fi=function(e){return 0===e?.05396825397622605:.05396825397622605+e*(.0088632398235993+e*(.0014562094543252903+e*(.0002464631348184699+e*(7140724913826082e-20+2590730518636337e-20*e))))};var zi=function(e,t,n){var r,i,o,s,a,c,l,u,d;return(i=2147483647&(r=Xn(e))|0)>=1072010280&&(e<0&&(e=-e,t=-t),e=(d=.7853981633974483-e)+(u=3061616997868383e-32-t),t=0),s=t+(d=e*e)*((a=d*e)*((s=Hi(u=d*d))+(l=d*Fi(u)))+t),u=e+(s+=.3333333333333341*a),i>=1072010280?(1-(r>>30&2))*((l=n)-2*(e-(u*u/(u+l)-s))):1===n?u:(Li(d=u,0),l=s-(d-e),Li(c=o=-1/u,0),c+o*((a=1+c*d)+c*l))},_i=[0,0];var Ei=function(e){var t,n;return t=Xn(e),(t&=2147483647)<=1072243195?t<1044381696?e:zi(e,0,1):t>=2146435072?NaN:(n=si(e,_i),zi(_i[0],_i[1],1-((1&n)<<1)))};var ji=function(e){var t,n;return 0===e?-.3333333333333332:((e<0?-e:e)<=1?(t=e*(e*(0*e-.9643991794250523)-99.28772310019185)-1614.6876844170845,n=4844.063053251255+e*(2235.4883906010045+e*(112.81167849163293+1*e))):(t=0+(e=1/e)*(e*(-1614.6876844170845*e-99.28772310019185)-.9643991794250523),n=1+e*(112.81167849163293+e*(2235.4883906010045+4844.063053251255*e))),t/n)};var Ji=function(e){var t,n;if((n=Yr(e))>44.014845965556525)return e<0?-1:1;if(n>=.625)n=1-2/((t=fi(2*n))+1),e<0&&(n=-n);else{if(0===e)return e;n=e+e*(t=e*e)*ji(t)}return n};void 0===globalThis.CroquetMath&&(globalThis.CroquetMath={}),Object.assign(globalThis.CroquetMath,{acos:Rt,acosh:Fn,asin:Ct,asinh:_n,atan:Un,atanh:Dn,atan2:br,cbrt:Xr,cos:ci,cosh:pi,exp:fi,expm1:vi,log:Hn,log1p:Yn,log10:Wi,log2:Vi,sin:Ki,sinh:Ni,tan:Ei,tanh:Ji});var Ui=Math.pow;function Qi(e){return e===1/0||e===-1/0}globalThis.CroquetMath.pow=function(e,t){if(isNaN(e)||isNaN(t))return NaN;if(Qi(e)||Qi(t))return Ui(e,t);if(0===e||0===t)return Ui(e,t);if(e<0&&!function(e){return Number.isInteger(e)}(t))return NaN;if(1===t)return e;if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return e*e*e*e;var n=1;return e<0&&(e*=-1,n=Ui(-1,t)),globalThis.CroquetMath.exp(globalThis.CroquetMath.log(e)*t)*n};var Oi=function(e,t){return e<t};function Di(e){if(!(this instanceof Di))return new Di(e);this.array=[],this.size=0,this.compare=e||Oi}Di.prototype.clone=function(){var e=new Di(this.compare);return e.size=this.size,e.array=this.array.slice(0,this.size),e},Di.prototype.add=function(e){var t,n,r=this.size;for(this.array[this.size]=e,this.size+=1;r>0&&(t=r-1>>1,n=this.array[t],this.compare(e,n));)this.array[r]=n,r=t;this.array[r]=e},Di.prototype.heapify=function(e){var t;for(this.array=e,this.size=e.length,t=this.size>>1;t>=0;t--)this._percolateDown(t)},Di.prototype._percolateUp=function(e,t){for(var n,r,i=this.array[e];e>0&&(n=e-1>>1,r=this.array[n],t||this.compare(i,r));)this.array[e]=r,e=n;this.array[e]=i},Di.prototype._percolateDown=function(e){for(var t,n,r,i=this.size,o=this.size>>>1,s=this.array[e];e<o&&(n=(t=1+(e<<1))+1,r=this.array[t],n<i&&this.compare(this.array[n],r)&&(t=n,r=this.array[n]),this.compare(r,s));)this.array[e]=r,e=t;this.array[e]=s},Di.prototype._removeAt=function(e){if(!(e>this.size-1||e<0))return this._percolateUp(e,!0),this.poll()},Di.prototype.remove=function(e){for(var t=0;t<this.size;t++)if(!this.compare(this.array[t],e)&&!this.compare(e,this.array[t]))return this._removeAt(t),!0;return!1},Di.prototype.removeOne=function(e){if("function"==typeof e)for(var t=0;t<this.size;t++)if(e(this.array[t]))return this._removeAt(t)},Di.prototype.removeMany=function(e,t){if("function"!=typeof e||this.size<1)return[];t=t?Math.min(t,this.size):this.size;for(var n=0,r=new Array(t),i=0,o=new Array(this.size);n<t&&!this.isEmpty();){var s=this.poll();e(s)?r[n++]=s:o[i++]=s}r.length=n;for(var a=0;a<i;)this.add(o[a++]);return r},Di.prototype.peek=function(){if(0!=this.size)return this.array[0]},Di.prototype.poll=function(){if(0!=this.size){var e=this.array[0];return this.size>1?(this.array[0]=this.array[--this.size],this._percolateDown(0)):this.size-=1,e}},Di.prototype.replaceTop=function(e){if(0!=this.size){var t=this.array[0];return this.array[0]=e,this._percolateDown(0),t}},Di.prototype.trim=function(){this.array=this.array.slice(0,this.size)},Di.prototype.isEmpty=function(){return 0===this.size},Di.prototype.forEach=function(e){if(!this.isEmpty()&&"function"==typeof e)for(var t=0,n=this.clone();!n.isEmpty();)e(n.poll(),t++)},Di.prototype.kSmallest=function(e){if(0==this.size)return[];e=Math.min(this.size,e);var t=new Di(this.compare),n=Math.min((e>0?Math.pow(2,e-1):0)+1,this.size);t.size=n,t.array=this.array.slice(0,n);for(var r=new Array(e),i=0;i<e;i++)r[i]=t.poll();return r};var Bi=Di,Ai=function(e){l(n,Bi);var t=b(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"poll",value:function(){var e=g(u(n.prototype),"poll",this).call(this);return this.array[this.size]=null,e}},{key:"asArray",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"asUnsortedArray",value:function(){return this.array.slice(0,this.size)}}]),n}(),qi={exports:{}},$i=qi.exports=function(e){return function(){var t=e,n=t.lib.WordArray;function r(e,t,r){for(var i=[],o=0,s=0;s<t;s++)if(s%4){var a=r[e.charCodeAt(s-1)]<<s%4*2|r[e.charCodeAt(s)]>>>6-s%4*2;i[o>>>2]|=a<<24-o%4*8,o++}return n.create(i,o)}t.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var i=[],o=0;o<n;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<n;a++)i.push(r.charAt(s>>>6*(3-a)&63));var c=r.charAt(64);if(c)for(;i.length%4;)i.push(c);return i.join("")},parse:function(e){var t=e.length,n=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<n.length;o++)i[n.charCodeAt(o)]=o}var s=n.charAt(64);if(s){var a=e.indexOf(s);-1!==a&&(t=a)}return r(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64}(D.exports),eo={exports:{}},to=eo.exports=function(e){return e.enc.Utf8}(D.exports),no={exports:{}},ro={exports:{}};ro.exports=function(e){return function(){var t=e,n=t.lib,r=n.WordArray,i=n.Hasher,o=t.algo,s=[],a=o.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],a=n[3],c=n[4],l=0;l<80;l++){if(l<16)s[l]=0|e[t+l];else{var u=s[l-3]^s[l-8]^s[l-14]^s[l-16];s[l]=u<<1|u>>>31}var d=(r<<5|r>>>27)+c+s[l];d+=l<20?1518500249+(i&o|~i&a):l<40?1859775393+(i^o^a):l<60?(i&o|i&a|o&a)-1894007588:(i^o^a)-899497514,c=a,a=o,o=i<<30|i>>>2,i=r,r=d}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+a|0,n[4]=n[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=i._createHelper(a),t.HmacSHA1=i._createHmacHelper(a)}(),e.SHA1}(D.exports);var io={exports:{}};io.exports=function(e){!function(){var t=e,n=t.lib.Base,r=t.enc.Utf8;t.algo.HMAC=n.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=r.parse(t));var n=e.blockSize,i=4*n;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var o=this._oKey=t.clone(),s=this._iKey=t.clone(),a=o.words,c=s.words,l=0;l<n;l++)a[l]^=1549556828,c[l]^=909522486;o.sigBytes=s.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(n))}})}()}(D.exports);var oo=no.exports=function(e){return function(){var t=e,n=t.lib,r=n.Base,i=n.WordArray,o=t.algo,s=o.SHA1,a=o.HMAC,c=o.PBKDF2=r.extend({cfg:r.extend({keySize:4,hasher:s,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=a.create(n.hasher,e),o=i.create(),s=i.create([1]),c=o.words,l=s.words,u=n.keySize,d=n.iterations;c.length<u;){var h=r.update(t).finalize(s);r.reset();for(var f=h.words,p=f.length,m=h,y=1;y<d;y++){m=r.finalize(m),r.reset();for(var b=m.words,v=0;v<p;v++)f[v]^=b[v]}o.concat(h),l[0]++}return o.sigBytes=4*u,o}});t.PBKDF2=function(e,t,n){return c.create(n).compute(e,t)}}(),e.PBKDF2}(D.exports),so={exports:{}},ao={exports:{}};ao.exports=function(e){return function(t){var n=e,r=n.lib,i=r.WordArray,o=r.Hasher,s=n.algo,a=[];!function(){for(var e=0;e<64;e++)a[e]=4294967296*t.abs(t.sin(e+1))|0}();var c=s.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,i=e[r];e[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,s=e[t+0],c=e[t+1],f=e[t+2],p=e[t+3],m=e[t+4],y=e[t+5],b=e[t+6],v=e[t+7],g=e[t+8],Z=e[t+9],X=e[t+10],w=e[t+11],L=e[t+12],k=e[t+13],x=e[t+14],G=e[t+15],S=o[0],W=o[1],T=o[2],C=o[3];S=l(S,W,T,C,s,7,a[0]),C=l(C,S,W,T,c,12,a[1]),T=l(T,C,S,W,f,17,a[2]),W=l(W,T,C,S,p,22,a[3]),S=l(S,W,T,C,m,7,a[4]),C=l(C,S,W,T,y,12,a[5]),T=l(T,C,S,W,b,17,a[6]),W=l(W,T,C,S,v,22,a[7]),S=l(S,W,T,C,g,7,a[8]),C=l(C,S,W,T,Z,12,a[9]),T=l(T,C,S,W,X,17,a[10]),W=l(W,T,C,S,w,22,a[11]),S=l(S,W,T,C,L,7,a[12]),C=l(C,S,W,T,k,12,a[13]),T=l(T,C,S,W,x,17,a[14]),S=u(S,W=l(W,T,C,S,G,22,a[15]),T,C,c,5,a[16]),C=u(C,S,W,T,b,9,a[17]),T=u(T,C,S,W,w,14,a[18]),W=u(W,T,C,S,s,20,a[19]),S=u(S,W,T,C,y,5,a[20]),C=u(C,S,W,T,X,9,a[21]),T=u(T,C,S,W,G,14,a[22]),W=u(W,T,C,S,m,20,a[23]),S=u(S,W,T,C,Z,5,a[24]),C=u(C,S,W,T,x,9,a[25]),T=u(T,C,S,W,p,14,a[26]),W=u(W,T,C,S,g,20,a[27]),S=u(S,W,T,C,k,5,a[28]),C=u(C,S,W,T,f,9,a[29]),T=u(T,C,S,W,v,14,a[30]),S=d(S,W=u(W,T,C,S,L,20,a[31]),T,C,y,4,a[32]),C=d(C,S,W,T,g,11,a[33]),T=d(T,C,S,W,w,16,a[34]),W=d(W,T,C,S,x,23,a[35]),S=d(S,W,T,C,c,4,a[36]),C=d(C,S,W,T,m,11,a[37]),T=d(T,C,S,W,v,16,a[38]),W=d(W,T,C,S,X,23,a[39]),S=d(S,W,T,C,k,4,a[40]),C=d(C,S,W,T,s,11,a[41]),T=d(T,C,S,W,p,16,a[42]),W=d(W,T,C,S,b,23,a[43]),S=d(S,W,T,C,Z,4,a[44]),C=d(C,S,W,T,L,11,a[45]),T=d(T,C,S,W,G,16,a[46]),S=h(S,W=d(W,T,C,S,f,23,a[47]),T,C,s,6,a[48]),C=h(C,S,W,T,v,10,a[49]),T=h(T,C,S,W,x,15,a[50]),W=h(W,T,C,S,y,21,a[51]),S=h(S,W,T,C,L,6,a[52]),C=h(C,S,W,T,p,10,a[53]),T=h(T,C,S,W,X,15,a[54]),W=h(W,T,C,S,c,21,a[55]),S=h(S,W,T,C,g,6,a[56]),C=h(C,S,W,T,G,10,a[57]),T=h(T,C,S,W,b,15,a[58]),W=h(W,T,C,S,k,21,a[59]),S=h(S,W,T,C,m,6,a[60]),C=h(C,S,W,T,w,10,a[61]),T=h(T,C,S,W,f,15,a[62]),W=h(W,T,C,S,Z,21,a[63]),o[0]=o[0]+S|0,o[1]=o[1]+W|0,o[2]=o[2]+T|0,o[3]=o[3]+C|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;n[i>>>5]|=128<<24-i%32;var o=t.floor(r/4294967296),s=r;n[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,c=a.words,l=0;l<4;l++){var u=c[l];c[l]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function l(e,t,n,r,i,o,s){var a=e+(t&n|~t&r)+i+s;return(a<<o|a>>>32-o)+t}function u(e,t,n,r,i,o,s){var a=e+(t&r|n&~r)+i+s;return(a<<o|a>>>32-o)+t}function d(e,t,n,r,i,o,s){var a=e+(t^n^r)+i+s;return(a<<o|a>>>32-o)+t}function h(e,t,n,r,i,o,s){var a=e+(n^(t|~r))+i+s;return(a<<o|a>>>32-o)+t}n.MD5=o._createHelper(c),n.HmacMD5=o._createHmacHelper(c)}(Math),e.MD5}(D.exports);var co={exports:{}};co.exports=function(e){return function(){var t=e,n=t.lib,r=n.Base,i=n.WordArray,o=t.algo,s=o.MD5,a=o.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:s,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n,r=this.cfg,o=r.hasher.create(),s=i.create(),a=s.words,c=r.keySize,l=r.iterations;a.length<c;){n&&o.update(n),n=o.update(e).finalize(t),o.reset();for(var u=1;u<l;u++)n=o.finalize(n),o.reset();s.concat(n)}return s.sigBytes=4*c,s}});t.EvpKDF=function(e,t,n){return a.create(n).compute(e,t)}}(),e.EvpKDF}(D.exports);var lo={exports:{}};lo.exports=function(e){e.lib.Cipher||function(t){var n=e,r=n.lib,i=r.Base,o=r.WordArray,s=r.BufferedBlockAlgorithm,a=n.enc;a.Utf8;var c=a.Base64,l=n.algo.EvpKDF,u=r.Cipher=s.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?g:b}return function(t){return{encrypt:function(n,r,i){return e(r).encrypt(t,n,r,i)},decrypt:function(n,r,i){return e(r).decrypt(t,n,r,i)}}}}()});r.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var d=n.mode={},h=r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),f=d.CBC=function(){var e=h.extend();function n(e,n,r){var i,o=this._iv;o?(i=o,this._iv=t):i=this._prevBlock;for(var s=0;s<r;s++)e[n+s]^=i[s]}return e.Encryptor=e.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;n.call(this,e,t,i),r.encryptBlock(e,t),this._prevBlock=e.slice(t,t+i)}}),e.Decryptor=e.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,o=e.slice(t,t+i);r.decryptBlock(e,t),n.call(this,e,t,i),this._prevBlock=o}}),e}(),p=(n.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,r=n-e.sigBytes%n,i=r<<24|r<<16|r<<8|r,s=[],a=0;a<r;a+=4)s.push(i);var c=o.create(s,r);e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}};r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:f,padding:p}),reset:function(){var e;u.reset.call(this);var t=this.cfg,n=t.iv,r=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=r.createEncryptor:(e=r.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,n&&n.words):(this._mode=e.call(r,this,n&&n.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4});var m=r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),y=(n.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt;return(n?o.create([1398893684,1701076831]).concat(n).concat(t):t).toString(c)},parse:function(e){var t,n=c.parse(e),r=n.words;return 1398893684==r[0]&&1701076831==r[1]&&(t=o.create(r.slice(2,4)),r.splice(0,4),n.sigBytes-=16),m.create({ciphertext:n,salt:t})}},b=r.SerializableCipher=i.extend({cfg:i.extend({format:y}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r),o=i.finalize(t),s=i.cfg;return m.create({ciphertext:o,key:n,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),v=(n.kdf={}).OpenSSL={execute:function(e,t,n,r){r||(r=o.random(8));var i=l.create({keySize:t+n}).compute(e,r),s=o.create(i.words.slice(t),4*n);return i.sigBytes=4*t,m.create({key:i,iv:s,salt:r})}},g=r.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:v}),encrypt:function(e,t,n,r){var i=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize);r.iv=i.iv;var o=b.encrypt.call(this,e,t,i.key,r);return o.mixIn(i),o},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var i=r.kdf.execute(n,e.keySize,e.ivSize,t.salt);return r.iv=i.iv,b.decrypt.call(this,e,t,i.key,r)}})}()}(D.exports);var uo=so.exports=function(e){return function(){var t=e,n=t.lib.BlockCipher,r=t.algo,i=[],o=[],s=[],a=[],c=[],l=[],u=[],d=[],h=[],f=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var n=0,r=0;for(t=0;t<256;t++){var p=r^r<<1^r<<2^r<<3^r<<4;p=p>>>8^255&p^99,i[n]=p,o[p]=n;var m=e[n],y=e[m],b=e[y],v=257*e[p]^16843008*p;s[n]=v<<24|v>>>8,a[n]=v<<16|v>>>16,c[n]=v<<8|v>>>24,l[n]=v,v=16843009*b^65537*y^257*m^16843008*n,u[p]=v<<24|v>>>8,d[p]=v<<16|v>>>16,h[p]=v<<8|v>>>24,f[p]=v,n?(n=m^e[e[e[b^m]]],r^=e[e[r]]):n=r=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],m=r.AES=n.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,n=e.sigBytes/4,r=4*((this._nRounds=n+6)+1),o=this._keySchedule=[],s=0;s<r;s++)s<n?o[s]=t[s]:(l=o[s-1],s%n?n>6&&s%n==4&&(l=i[l>>>24]<<24|i[l>>>16&255]<<16|i[l>>>8&255]<<8|i[255&l]):(l=i[(l=l<<8|l>>>24)>>>24]<<24|i[l>>>16&255]<<16|i[l>>>8&255]<<8|i[255&l],l^=p[s/n|0]<<24),o[s]=o[s-n]^l);for(var a=this._invKeySchedule=[],c=0;c<r;c++){if(s=r-c,c%4)var l=o[s];else l=o[s-4];a[c]=c<4||s<=4?l:u[i[l>>>24]]^d[i[l>>>16&255]]^h[i[l>>>8&255]]^f[i[255&l]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,s,a,c,l,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,u,d,h,f,o),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,o,s,a){for(var c=this._nRounds,l=e[t]^n[0],u=e[t+1]^n[1],d=e[t+2]^n[2],h=e[t+3]^n[3],f=4,p=1;p<c;p++){var m=r[l>>>24]^i[u>>>16&255]^o[d>>>8&255]^s[255&h]^n[f++],y=r[u>>>24]^i[d>>>16&255]^o[h>>>8&255]^s[255&l]^n[f++],b=r[d>>>24]^i[h>>>16&255]^o[l>>>8&255]^s[255&u]^n[f++],v=r[h>>>24]^i[l>>>16&255]^o[u>>>8&255]^s[255&d]^n[f++];l=m,u=y,d=b,h=v}m=(a[l>>>24]<<24|a[u>>>16&255]<<16|a[d>>>8&255]<<8|a[255&h])^n[f++],y=(a[u>>>24]<<24|a[d>>>16&255]<<16|a[h>>>8&255]<<8|a[255&l])^n[f++],b=(a[d>>>24]<<24|a[h>>>16&255]<<16|a[l>>>8&255]<<8|a[255&u])^n[f++],v=(a[h>>>24]<<24|a[l>>>16&255]<<16|a[u>>>8&255]<<8|a[255&d])^n[f++],e[t]=m,e[t+1]=y,e[t+2]=b,e[t+3]=v},keySize:8});t.AES=n._createHelper(m)}(),e.AES}(D.exports),ho={exports:{}},fo=ho.exports=function(e){return e.HmacSHA256}(D.exports);function po(e){for(var t=e.length;--t>=0;)e[t]=0}var mo=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),yo=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),bo=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),vo=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),go=new Array(576);po(go);var Zo=new Array(60);po(Zo);var Xo=new Array(512);po(Xo);var wo=new Array(256);po(wo);var Lo=new Array(29);po(Lo);var ko,xo,Go,So=new Array(30);function Wo(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function To(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}po(So);var Co=function(e){return e<256?Xo[e]:Xo[256+(e>>>7)]},Ro=function(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255},Yo=function(e,t,n){e.bi_valid>16-n?(e.bi_buf|=t<<e.bi_valid&65535,Ro(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=n-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)},Io=function(e,t,n){Yo(e,n[2*t],n[2*t+1])},Vo=function(e,t){var n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1},Po=function(e,t,n){var r,i,o=new Array(16),s=0;for(r=1;r<=15;r++)o[r]=s=s+n[r-1]<<1;for(i=0;i<=t;i++){var a=e[2*i+1];0!==a&&(e[2*i]=Vo(o[a]++,a))}},Ko=function(e){var t;for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0},Mo=function(e){e.bi_valid>8?Ro(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0},No=function(e,t,n,r){var i=2*t,o=2*n;return e[i]<e[o]||e[i]===e[o]&&r[t]<=r[n]},Ho=function(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&No(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!No(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r},Fo=function(e,t,n){var r,i,o,s,a=0;if(0!==e.last_lit)do{r=e.pending_buf[e.d_buf+2*a]<<8|e.pending_buf[e.d_buf+2*a+1],i=e.pending_buf[e.l_buf+a],a++,0===r?Io(e,i,t):(o=wo[i],Io(e,o+256+1,t),0!==(s=mo[o])&&(i-=Lo[o],Yo(e,i,s)),r--,o=Co(r),Io(e,o,n),0!==(s=yo[o])&&(r-=So[o],Yo(e,r,s)))}while(a<e.last_lit);Io(e,256,t)},zo=function(e,t){var n,r,i,o=t.dyn_tree,s=t.stat_desc.static_tree,a=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=573,n=0;n<c;n++)0!==o[2*n]?(e.heap[++e.heap_len]=l=n,e.depth[n]=0):o[2*n+1]=0;for(;e.heap_len<2;)o[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,a&&(e.static_len-=s[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;n>=1;n--)Ho(e,o,n);i=c;do{n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Ho(e,o,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,o[2*i]=o[2*n]+o[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,o[2*n+1]=o[2*r+1]=i,e.heap[1]=i++,Ho(e,o,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,o,s,a,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,h=t.stat_desc.extra_bits,f=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(o=0;o<=15;o++)e.bl_count[o]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<573;n++)(o=c[2*c[2*(r=e.heap[n])+1]+1]+1)>p&&(o=p,m++),c[2*r+1]=o,r>l||(e.bl_count[o]++,s=0,r>=f&&(s=h[r-f]),a=c[2*r],e.opt_len+=a*(o+s),d&&(e.static_len+=a*(u[2*r+1]+s)));if(0!==m){do{for(o=p-1;0===e.bl_count[o];)o--;e.bl_count[o]--,e.bl_count[o+1]+=2,e.bl_count[p]--,m-=2}while(m>0);for(o=p;0!==o;o--)for(r=e.bl_count[o];0!==r;)(i=e.heap[--n])>l||(c[2*i+1]!==o&&(e.opt_len+=(o-c[2*i+1])*c[2*i],c[2*i+1]=o),r--)}}(e,t),Po(o,l,e.bl_count)},_o=function(e,t,n){var r,i,o=-1,s=t[1],a=0,c=7,l=4;for(0===s&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=s,s=t[2*(r+1)+1],++a<c&&i===s||(a<l?e.bl_tree[2*i]+=a:0!==i?(i!==o&&e.bl_tree[2*i]++,e.bl_tree[32]++):a<=10?e.bl_tree[34]++:e.bl_tree[36]++,a=0,o=i,0===s?(c=138,l=3):i===s?(c=6,l=3):(c=7,l=4))},Eo=function(e,t,n){var r,i,o=-1,s=t[1],a=0,c=7,l=4;for(0===s&&(c=138,l=3),r=0;r<=n;r++)if(i=s,s=t[2*(r+1)+1],!(++a<c&&i===s)){if(a<l)do{Io(e,i,e.bl_tree)}while(0!=--a);else 0!==i?(i!==o&&(Io(e,i,e.bl_tree),a--),Io(e,16,e.bl_tree),Yo(e,a-3,2)):a<=10?(Io(e,17,e.bl_tree),Yo(e,a-3,3)):(Io(e,18,e.bl_tree),Yo(e,a-11,7));a=0,o=i,0===s?(c=138,l=3):i===s?(c=6,l=3):(c=7,l=4)}},jo=!1,Jo=function(e,t,n,r){Yo(e,0+(r?1:0),3),function(e,t,n,r){Mo(e),r&&(Ro(e,n),Ro(e,~n)),e.pending_buf.set(e.window.subarray(t,t+n),e.pending),e.pending+=n}(e,t,n,!0)},Uo=function(e,t,n,r){var i,o,s=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),zo(e,e.l_desc),zo(e,e.d_desc),s=function(e){var t;for(_o(e,e.dyn_ltree,e.l_desc.max_code),_o(e,e.dyn_dtree,e.d_desc.max_code),zo(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*vo[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=i&&(i=o)):i=o=n+5,n+4<=i&&-1!==t?Jo(e,t,n,r):4===e.strategy||o===i?(Yo(e,2+(r?1:0),3),Fo(e,go,Zo)):(Yo(e,4+(r?1:0),3),function(e,t,n,r){var i;for(Yo(e,t-257,5),Yo(e,n-1,5),Yo(e,r-4,4),i=0;i<r;i++)Yo(e,e.bl_tree[2*vo[i]+1],3);Eo(e,e.dyn_ltree,t-1),Eo(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,s+1),Fo(e,e.dyn_ltree,e.dyn_dtree)),Ko(e),r&&Mo(e)},Qo={_tr_init:function(e){jo||(!function(){var e,t,n,r,i,o=new Array(16);for(n=0,r=0;r<28;r++)for(Lo[r]=n,e=0;e<1<<mo[r];e++)wo[n++]=r;for(wo[n-1]=r,i=0,r=0;r<16;r++)for(So[r]=i,e=0;e<1<<yo[r];e++)Xo[i++]=r;for(i>>=7;r<30;r++)for(So[r]=i<<7,e=0;e<1<<yo[r]-7;e++)Xo[256+i++]=r;for(t=0;t<=15;t++)o[t]=0;for(e=0;e<=143;)go[2*e+1]=8,e++,o[8]++;for(;e<=255;)go[2*e+1]=9,e++,o[9]++;for(;e<=279;)go[2*e+1]=7,e++,o[7]++;for(;e<=287;)go[2*e+1]=8,e++,o[8]++;for(Po(go,287,o),e=0;e<30;e++)Zo[2*e+1]=5,Zo[2*e]=Vo(e,5);ko=new Wo(go,mo,257,286,15),xo=new Wo(Zo,yo,0,30,15),Go=new Wo(new Array(0),bo,0,19,7)}(),jo=!0),e.l_desc=new To(e.dyn_ltree,ko),e.d_desc=new To(e.dyn_dtree,xo),e.bl_desc=new To(e.bl_tree,Go),e.bi_buf=0,e.bi_valid=0,Ko(e)},_tr_stored_block:Jo,_tr_flush_block:Uo,_tr_tally:function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(wo[n]+256+1)]++,e.dyn_dtree[2*Co(t)]++),e.last_lit===e.lit_bufsize-1},_tr_align:function(e){Yo(e,2,3),Io(e,256,go),function(e){16===e.bi_valid?(Ro(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},Oo=function(e,t,n,r){for(var i=65535&e|0,o=e>>>16&65535|0,s=0;0!==n;){n-=s=n>2e3?2e3:n;do{o=o+(i=i+t[r++]|0)|0}while(--s);i%=65521,o%=65521}return i|o<<16|0},Do=new Uint32Array(function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}()),Bo=function(e,t,n,r){var i=Do,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^i[255&(e^t[s])];return-1^e},Ao={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},qo={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},$o=Qo._tr_init,es=Qo._tr_stored_block,ts=Qo._tr_flush_block,ns=Qo._tr_tally,rs=Qo._tr_align,is=qo.Z_NO_FLUSH,os=qo.Z_PARTIAL_FLUSH,ss=qo.Z_FULL_FLUSH,as=qo.Z_FINISH,cs=qo.Z_BLOCK,ls=qo.Z_OK,us=qo.Z_STREAM_END,ds=qo.Z_STREAM_ERROR,hs=qo.Z_DATA_ERROR,fs=qo.Z_BUF_ERROR,ps=qo.Z_DEFAULT_COMPRESSION,ms=qo.Z_FILTERED,ys=qo.Z_HUFFMAN_ONLY,bs=qo.Z_RLE,vs=qo.Z_FIXED,gs=qo.Z_DEFAULT_STRATEGY,Zs=qo.Z_UNKNOWN,Xs=qo.Z_DEFLATED,ws=function(e,t){return e.msg=Ao[t],t},Ls=function(e){return(e<<1)-(e>4?9:0)},ks=function(e){for(var t=e.length;--t>=0;)e[t]=0},xs=function(e,t,n){return(t<<e.hash_shift^n)&e.hash_mask},Gs=function(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(e.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+n),e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0))},Ss=function(e,t){ts(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Gs(e.strm)},Ws=function(e,t){e.pending_buf[e.pending++]=t},Ts=function(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t},Cs=function(e,t){var n,r,i=e.max_chain_length,o=e.strstart,s=e.prev_length,a=e.nice_match,c=e.strstart>e.w_size-262?e.strstart-(e.w_size-262):0,l=e.window,u=e.w_mask,d=e.prev,h=e.strstart+258,f=l[o+s-1],p=l[o+s];e.prev_length>=e.good_match&&(i>>=2),a>e.lookahead&&(a=e.lookahead);do{if(l[(n=t)+s]===p&&l[n+s-1]===f&&l[n]===l[o]&&l[++n]===l[o+1]){o+=2,n++;do{}while(l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&o<h);if(r=258-(h-o),o=h-258,r>s){if(e.match_start=t,s=r,r>=a)break;f=l[o+s-1],p=l[o+s]}}}while((t=d[t&u])>c&&0!=--i);return s<=e.lookahead?s:e.lookahead},Rs=function(e){var t,n,r,i,o,s,a,c,l,u,d=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=d+(d-262)){e.window.set(e.window.subarray(d,d+d),0),e.match_start-=d,e.strstart-=d,e.block_start-=d,t=n=e.hash_size;do{r=e.head[--t],e.head[t]=r>=d?r-d:0}while(--n);t=n=d;do{r=e.prev[--t],e.prev[t]=r>=d?r-d:0}while(--n);i+=d}if(0===e.strm.avail_in)break;if(s=e.strm,a=e.window,c=e.strstart+e.lookahead,l=i,u=void 0,(u=s.avail_in)>l&&(u=l),n=0===u?0:(s.avail_in-=u,a.set(s.input.subarray(s.next_in,s.next_in+u),c),1===s.state.wrap?s.adler=Oo(s.adler,a,u,c):2===s.state.wrap&&(s.adler=Bo(s.adler,a,u,c)),s.next_in+=u,s.total_in+=u,u),e.lookahead+=n,e.lookahead+e.insert>=3)for(o=e.strstart-e.insert,e.ins_h=e.window[o],e.ins_h=xs(e,e.ins_h,e.window[o+1]);e.insert&&(e.ins_h=xs(e,e.ins_h,e.window[o+3-1]),e.prev[o&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=o,o++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<262&&0!==e.strm.avail_in)},Ys=function(e,t){for(var n,r;;){if(e.lookahead<262){if(Rs(e),e.lookahead<262&&t===is)return 1;if(0===e.lookahead)break}if(n=0,e.lookahead>=3&&(e.ins_h=xs(e,e.ins_h,e.window[e.strstart+3-1]),n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-262&&(e.match_length=Cs(e,n)),e.match_length>=3)if(r=ns(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=xs(e,e.ins_h,e.window[e.strstart+3-1]),n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=xs(e,e.ins_h,e.window[e.strstart+1]);else r=ns(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(Ss(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,t===as?(Ss(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ss(e,!1),0===e.strm.avail_out)?1:2},Is=function(e,t){for(var n,r,i;;){if(e.lookahead<262){if(Rs(e),e.lookahead<262&&t===is)return 1;if(0===e.lookahead)break}if(n=0,e.lookahead>=3&&(e.ins_h=xs(e,e.ins_h,e.window[e.strstart+3-1]),n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-262&&(e.match_length=Cs(e,n),e.match_length<=5&&(e.strategy===ms||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-3,r=ns(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=i&&(e.ins_h=xs(e,e.ins_h,e.window[e.strstart+3-1]),n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,r&&(Ss(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((r=ns(e,0,e.window[e.strstart-1]))&&Ss(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=ns(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,t===as?(Ss(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ss(e,!1),0===e.strm.avail_out)?1:2};function Vs(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}var Ps=[new Vs(0,0,0,0,(function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(Rs(e),0===e.lookahead&&t===is)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,Ss(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-262&&(Ss(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,t===as?(Ss(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(Ss(e,!1),e.strm.avail_out),1)})),new Vs(4,4,8,4,Ys),new Vs(4,5,16,8,Ys),new Vs(4,6,32,32,Ys),new Vs(4,4,16,16,Is),new Vs(8,16,32,32,Is),new Vs(8,16,128,128,Is),new Vs(8,32,128,256,Is),new Vs(32,128,258,1024,Is),new Vs(32,258,258,4096,Is)];function Ks(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Xs,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),ks(this.dyn_ltree),ks(this.dyn_dtree),ks(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),ks(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),ks(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Ms=function(e){if(!e||!e.state)return ws(e,ds);e.total_in=e.total_out=0,e.data_type=Zs;var t=e.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:113,e.adler=2===t.wrap?0:1,t.last_flush=is,$o(t),ls},Ns=function(e){var t,n=Ms(e);return n===ls&&((t=e.state).window_size=2*t.w_size,ks(t.head),t.max_lazy_match=Ps[t.level].max_lazy,t.good_match=Ps[t.level].good_length,t.nice_match=Ps[t.level].nice_length,t.max_chain_length=Ps[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=2,t.match_available=0,t.ins_h=0),n},Hs=function(e,t,n,r,i,o){if(!e)return ds;var s=1;if(t===ps&&(t=6),r<0?(s=0,r=-r):r>15&&(s=2,r-=16),i<1||i>9||n!==Xs||r<8||r>15||t<0||t>9||o<0||o>vs)return ws(e,ds);8===r&&(r=9);var a=new Ks;return e.state=a,a.strm=e,a.wrap=s,a.gzhead=null,a.w_bits=r,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=i+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+3-1)/3),a.window=new Uint8Array(2*a.w_size),a.head=new Uint16Array(a.hash_size),a.prev=new Uint16Array(a.w_size),a.lit_bufsize=1<<i+6,a.pending_buf_size=4*a.lit_bufsize,a.pending_buf=new Uint8Array(a.pending_buf_size),a.d_buf=1*a.lit_bufsize,a.l_buf=3*a.lit_bufsize,a.level=t,a.strategy=o,a.method=n,Ns(e)},Fs={deflateInit:function(e,t){return Hs(e,t,Xs,15,8,gs)},deflateInit2:Hs,deflateReset:Ns,deflateResetKeep:Ms,deflateSetHeader:function(e,t){return e&&e.state?2!==e.state.wrap?ds:(e.state.gzhead=t,ls):ds},deflate:function(e,t){var n,r;if(!e||!e.state||t>cs||t<0)return e?ws(e,ds):ds;var i=e.state;if(!e.output||!e.input&&0!==e.avail_in||666===i.status&&t!==as)return ws(e,0===e.avail_out?fs:ds);i.strm=e;var o=i.last_flush;if(i.last_flush=t,42===i.status)if(2===i.wrap)e.adler=0,Ws(i,31),Ws(i,139),Ws(i,8),i.gzhead?(Ws(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),Ws(i,255&i.gzhead.time),Ws(i,i.gzhead.time>>8&255),Ws(i,i.gzhead.time>>16&255),Ws(i,i.gzhead.time>>24&255),Ws(i,9===i.level?2:i.strategy>=ys||i.level<2?4:0),Ws(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(Ws(i,255&i.gzhead.extra.length),Ws(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=Bo(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(Ws(i,0),Ws(i,0),Ws(i,0),Ws(i,0),Ws(i,0),Ws(i,9===i.level?2:i.strategy>=ys||i.level<2?4:0),Ws(i,3),i.status=113);else{var s=Xs+(i.w_bits-8<<4)<<8;s|=(i.strategy>=ys||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(s|=32),s+=31-s%31,i.status=113,Ts(i,s),0!==i.strstart&&(Ts(i,e.adler>>>16),Ts(i,65535&e.adler)),e.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(e.adler=Bo(e.adler,i.pending_buf,i.pending-n,n)),Gs(e),n=i.pending,i.pending!==i.pending_buf_size));)Ws(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(e.adler=Bo(e.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(e.adler=Bo(e.adler,i.pending_buf,i.pending-n,n)),Gs(e),n=i.pending,i.pending===i.pending_buf_size)){r=1;break}r=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,Ws(i,r)}while(0!==r);i.gzhead.hcrc&&i.pending>n&&(e.adler=Bo(e.adler,i.pending_buf,i.pending-n,n)),0===r&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(e.adler=Bo(e.adler,i.pending_buf,i.pending-n,n)),Gs(e),n=i.pending,i.pending===i.pending_buf_size)){r=1;break}r=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,Ws(i,r)}while(0!==r);i.gzhead.hcrc&&i.pending>n&&(e.adler=Bo(e.adler,i.pending_buf,i.pending-n,n)),0===r&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&Gs(e),i.pending+2<=i.pending_buf_size&&(Ws(i,255&e.adler),Ws(i,e.adler>>8&255),e.adler=0,i.status=113)):i.status=113),0!==i.pending){if(Gs(e),0===e.avail_out)return i.last_flush=-1,ls}else if(0===e.avail_in&&Ls(t)<=Ls(o)&&t!==as)return ws(e,fs);if(666===i.status&&0!==e.avail_in)return ws(e,fs);if(0!==e.avail_in||0!==i.lookahead||t!==is&&666!==i.status){var a=i.strategy===ys?function(e,t){for(var n;;){if(0===e.lookahead&&(Rs(e),0===e.lookahead)){if(t===is)return 1;break}if(e.match_length=0,n=ns(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(Ss(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,t===as?(Ss(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ss(e,!1),0===e.strm.avail_out)?1:2}(i,t):i.strategy===bs?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=258){if(Rs(e),e.lookahead<=258&&t===is)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+258;do{}while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=258-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(n=ns(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=ns(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(Ss(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,t===as?(Ss(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ss(e,!1),0===e.strm.avail_out)?1:2}(i,t):Ps[i.level].func(i,t);if(3!==a&&4!==a||(i.status=666),1===a||3===a)return 0===e.avail_out&&(i.last_flush=-1),ls;if(2===a&&(t===os?rs(i):t!==cs&&(es(i,0,0,!1),t===ss&&(ks(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),Gs(e),0===e.avail_out))return i.last_flush=-1,ls}return t!==as?ls:i.wrap<=0?us:(2===i.wrap?(Ws(i,255&e.adler),Ws(i,e.adler>>8&255),Ws(i,e.adler>>16&255),Ws(i,e.adler>>24&255),Ws(i,255&e.total_in),Ws(i,e.total_in>>8&255),Ws(i,e.total_in>>16&255),Ws(i,e.total_in>>24&255)):(Ts(i,e.adler>>>16),Ts(i,65535&e.adler)),Gs(e),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?ls:us)},deflateEnd:function(e){if(!e||!e.state)return ds;var t=e.state.status;return 42!==t&&69!==t&&73!==t&&91!==t&&103!==t&&113!==t&&666!==t?ws(e,ds):(e.state=null,113===t?ws(e,hs):ls)},deflateSetDictionary:function(e,t){var n=t.length;if(!e||!e.state)return ds;var r=e.state,i=r.wrap;if(2===i||1===i&&42!==r.status||r.lookahead)return ds;if(1===i&&(e.adler=Oo(e.adler,t,n,0)),r.wrap=0,n>=r.w_size){0===i&&(ks(r.head),r.strstart=0,r.block_start=0,r.insert=0);var o=new Uint8Array(r.w_size);o.set(t.subarray(n-r.w_size,n),0),t=o,n=r.w_size}var s=e.avail_in,a=e.next_in,c=e.input;for(e.avail_in=n,e.next_in=0,e.input=t,Rs(r);r.lookahead>=3;){var l=r.strstart,u=r.lookahead-2;do{r.ins_h=xs(r,r.ins_h,r.window[l+3-1]),r.prev[l&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=l,l++}while(--u);r.strstart=l,r.lookahead=2,Rs(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=2,r.match_available=0,e.next_in=a,e.input=c,e.avail_in=s,r.wrap=i,ls},deflateInfo:"pako deflate (from Nodeca project)"},zs=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_s=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!==n(r))throw new TypeError(r+"must be non-object");for(var i in r)zs(r,i)&&(e[i]=r[i])}}return e},Es=function(e){for(var t=0,n=0,r=e.length;n<r;n++)t+=e[n].length;for(var i=new Uint8Array(t),o=0,s=0,a=e.length;o<a;o++){var c=e[o];i.set(c,s),s+=c.length}return i},js=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){js=!1}for(var Js=new Uint8Array(256),Us=0;Us<256;Us++)Js[Us]=Us>=252?6:Us>=248?5:Us>=240?4:Us>=224?3:Us>=192?2:1;Js[254]=Js[254]=1;var Qs=function(e){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);var t,n,r,i,o,s=e.length,a=0;for(i=0;i<s;i++)55296==(64512&(n=e.charCodeAt(i)))&&i+1<s&&56320==(64512&(r=e.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),a+=n<128?1:n<2048?2:n<65536?3:4;for(t=new Uint8Array(a),o=0,i=0;o<a;i++)55296==(64512&(n=e.charCodeAt(i)))&&i+1<s&&56320==(64512&(r=e.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),n<128?t[o++]=n:n<2048?(t[o++]=192|n>>>6,t[o++]=128|63&n):n<65536?(t[o++]=224|n>>>12,t[o++]=128|n>>>6&63,t[o++]=128|63&n):(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63,t[o++]=128|n>>>6&63,t[o++]=128|63&n);return t},Os=function(e,t){var n,r,i=t||e.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(e.subarray(0,t));var o=new Array(2*i);for(r=0,n=0;n<i;){var s=e[n++];if(s<128)o[r++]=s;else{var a=Js[s];if(a>4)o[r++]=65533,n+=a-1;else{for(s&=2===a?31:3===a?15:7;a>1&&n<i;)s=s<<6|63&e[n++],a--;a>1?o[r++]=65533:s<65536?o[r++]=s:(s-=65536,o[r++]=55296|s>>10&1023,o[r++]=56320|1023&s)}}}return function(e,t){if(t<65534&&e.subarray&&js)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));for(var n="",r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n}(o,r)},Ds=function(e,t){(t=t||e.length)>e.length&&(t=e.length);for(var n=t-1;n>=0&&128==(192&e[n]);)n--;return n<0||0===n?t:n+Js[e[n]]>t?n:t};var Bs=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},As=Object.prototype.toString,qs=qo.Z_NO_FLUSH,$s=qo.Z_SYNC_FLUSH,ea=qo.Z_FULL_FLUSH,ta=qo.Z_FINISH,na=qo.Z_OK,ra=qo.Z_STREAM_END,ia=qo.Z_DEFAULT_COMPRESSION,oa=qo.Z_DEFAULT_STRATEGY,sa=qo.Z_DEFLATED;function aa(e){this.options=_s({level:ia,method:sa,chunkSize:16384,windowBits:15,memLevel:8,strategy:oa},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Bs,this.strm.avail_out=0;var n=Fs.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==na)throw new Error(Ao[n]);if(t.header&&Fs.deflateSetHeader(this.strm,t.header),t.dictionary){var r;if(r="string"==typeof t.dictionary?Qs(t.dictionary):"[object ArrayBuffer]"===As.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(n=Fs.deflateSetDictionary(this.strm,r))!==na)throw new Error(Ao[n]);this._dict_set=!0}}function ca(e,t){var n=new aa(t);if(n.push(e,!0),n.err)throw n.msg||Ao[n.err];return n.result}aa.prototype.push=function(e,t){var n,r,i=this.strm,o=this.options.chunkSize;if(this.ended)return!1;for(r=t===~~t?t:!0===t?ta:qs,"string"==typeof e?i.input=Qs(e):"[object ArrayBuffer]"===As.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;;)if(0===i.avail_out&&(i.output=new Uint8Array(o),i.next_out=0,i.avail_out=o),(r===$s||r===ea)&&i.avail_out<=6)this.onData(i.output.subarray(0,i.next_out)),i.avail_out=0;else{if((n=Fs.deflate(i,r))===ra)return i.next_out>0&&this.onData(i.output.subarray(0,i.next_out)),n=Fs.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===na;if(0!==i.avail_out){if(r>0&&i.next_out>0)this.onData(i.output.subarray(0,i.next_out)),i.avail_out=0;else if(0===i.avail_in)break}else this.onData(i.output)}return!0},aa.prototype.onData=function(e){this.chunks.push(e)},aa.prototype.onEnd=function(e){e===na&&(this.result=Es(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var la={Deflate:aa,deflate:ca,deflateRaw:function(e,t){return(t=t||{}).raw=!0,ca(e,t)},gzip:function(e,t){return(t=t||{}).gzip=!0,ca(e,t)},constants:qo},ua=function(e,t){var n,r,i,o,s,a,c,l,u,d,h,f,p,m,y,b,v,g,Z,X,w,L,k,x,G=e.state;n=e.next_in,k=e.input,r=n+(e.avail_in-5),i=e.next_out,x=e.output,o=i-(t-e.avail_out),s=i+(e.avail_out-257),a=G.dmax,c=G.wsize,l=G.whave,u=G.wnext,d=G.window,h=G.hold,f=G.bits,p=G.lencode,m=G.distcode,y=(1<<G.lenbits)-1,b=(1<<G.distbits)-1;e:do{f<15&&(h+=k[n++]<<f,f+=8,h+=k[n++]<<f,f+=8),v=p[h&y];t:for(;;){if(h>>>=g=v>>>24,f-=g,0===(g=v>>>16&255))x[i++]=65535&v;else{if(!(16&g)){if(0==(64&g)){v=p[(65535&v)+(h&(1<<g)-1)];continue t}if(32&g){G.mode=12;break e}e.msg="invalid literal/length code",G.mode=30;break e}Z=65535&v,(g&=15)&&(f<g&&(h+=k[n++]<<f,f+=8),Z+=h&(1<<g)-1,h>>>=g,f-=g),f<15&&(h+=k[n++]<<f,f+=8,h+=k[n++]<<f,f+=8),v=m[h&b];n:for(;;){if(h>>>=g=v>>>24,f-=g,!(16&(g=v>>>16&255))){if(0==(64&g)){v=m[(65535&v)+(h&(1<<g)-1)];continue n}e.msg="invalid distance code",G.mode=30;break e}if(X=65535&v,f<(g&=15)&&(h+=k[n++]<<f,(f+=8)<g&&(h+=k[n++]<<f,f+=8)),(X+=h&(1<<g)-1)>a){e.msg="invalid distance too far back",G.mode=30;break e}if(h>>>=g,f-=g,X>(g=i-o)){if((g=X-g)>l&&G.sane){e.msg="invalid distance too far back",G.mode=30;break e}if(w=0,L=d,0===u){if(w+=c-g,g<Z){Z-=g;do{x[i++]=d[w++]}while(--g);w=i-X,L=x}}else if(u<g){if(w+=c+u-g,(g-=u)<Z){Z-=g;do{x[i++]=d[w++]}while(--g);if(w=0,u<Z){Z-=g=u;do{x[i++]=d[w++]}while(--g);w=i-X,L=x}}}else if(w+=u-g,g<Z){Z-=g;do{x[i++]=d[w++]}while(--g);w=i-X,L=x}for(;Z>2;)x[i++]=L[w++],x[i++]=L[w++],x[i++]=L[w++],Z-=3;Z&&(x[i++]=L[w++],Z>1&&(x[i++]=L[w++]))}else{w=i-X;do{x[i++]=x[w++],x[i++]=x[w++],x[i++]=x[w++],Z-=3}while(Z>2);Z&&(x[i++]=x[w++],Z>1&&(x[i++]=x[w++]))}break}}break}}while(n<r&&i<s);n-=Z=f>>3,h&=(1<<(f-=Z<<3))-1,e.next_in=n,e.next_out=i,e.avail_in=n<r?r-n+5:5-(n-r),e.avail_out=i<s?s-i+257:257-(i-s),G.hold=h,G.bits=f},da=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ha=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),fa=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),pa=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),ma=function(e,t,n,r,i,o,s,a){var c,l,u,d,h,f,p,m,y,b=a.bits,v=0,g=0,Z=0,X=0,w=0,L=0,k=0,x=0,G=0,S=0,W=null,T=0,C=new Uint16Array(16),R=new Uint16Array(16),Y=null,I=0;for(v=0;v<=15;v++)C[v]=0;for(g=0;g<r;g++)C[t[n+g]]++;for(w=b,X=15;X>=1&&0===C[X];X--);if(w>X&&(w=X),0===X)return i[o++]=20971520,i[o++]=20971520,a.bits=1,0;for(Z=1;Z<X&&0===C[Z];Z++);for(w<Z&&(w=Z),x=1,v=1;v<=15;v++)if(x<<=1,(x-=C[v])<0)return-1;if(x>0&&(0===e||1!==X))return-1;for(R[1]=0,v=1;v<15;v++)R[v+1]=R[v]+C[v];for(g=0;g<r;g++)0!==t[n+g]&&(s[R[t[n+g]]++]=g);if(0===e?(W=Y=s,f=19):1===e?(W=da,T-=257,Y=ha,I-=257,f=256):(W=fa,Y=pa,f=-1),S=0,g=0,v=Z,h=o,L=w,k=0,u=-1,d=(G=1<<w)-1,1===e&&G>852||2===e&&G>592)return 1;for(;;){p=v-k,s[g]<f?(m=0,y=s[g]):s[g]>f?(m=Y[I+s[g]],y=W[T+s[g]]):(m=96,y=0),c=1<<v-k,Z=l=1<<L;do{i[h+(S>>k)+(l-=c)]=p<<24|m<<16|y|0}while(0!==l);for(c=1<<v-1;S&c;)c>>=1;if(0!==c?(S&=c-1,S+=c):S=0,g++,0==--C[v]){if(v===X)break;v=t[n+s[g]]}if(v>w&&(S&d)!==u){for(0===k&&(k=w),h+=Z,x=1<<(L=v-k);L+k<X&&!((x-=C[L+k])<=0);)L++,x<<=1;if(G+=1<<L,1===e&&G>852||2===e&&G>592)return 1;i[u=S&d]=w<<24|L<<16|h-o|0}}return 0!==S&&(i[h+S]=v-k<<24|64<<16|0),a.bits=w,0},ya=qo.Z_FINISH,ba=qo.Z_BLOCK,va=qo.Z_TREES,ga=qo.Z_OK,Za=qo.Z_STREAM_END,Xa=qo.Z_NEED_DICT,wa=qo.Z_STREAM_ERROR,La=qo.Z_DATA_ERROR,ka=qo.Z_MEM_ERROR,xa=qo.Z_BUF_ERROR,Ga=qo.Z_DEFLATED,Sa=function(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)};function Wa(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var Ta,Ca,Ra=function(e){if(!e||!e.state)return wa;var t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,ga},Ya=function(e){if(!e||!e.state)return wa;var t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,Ra(e)},Ia=function(e,t){var n;if(!e||!e.state)return wa;var r=e.state;return t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?wa:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,Ya(e))},Va=function(e,t){if(!e)return wa;var n=new Wa;e.state=n,n.window=null;var r=Ia(e,t);return r!==ga&&(e.state=null),r},Pa=!0,Ka=function(e){if(Pa){Ta=new Int32Array(512),Ca=new Int32Array(32);for(var t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(ma(1,e.lens,0,288,Ta,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;ma(2,e.lens,0,32,Ca,0,e.work,{bits:5}),Pa=!1}e.lencode=Ta,e.lenbits=9,e.distcode=Ca,e.distbits=5},Ma=function(e,t,n,r){var i,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new Uint8Array(o.wsize)),r>=o.wsize?(o.window.set(t.subarray(n-o.wsize,n),0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>r&&(i=r),o.window.set(t.subarray(n-r,n-r+i),o.wnext),(r-=i)?(o.window.set(t.subarray(n-r,n),0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0},Na=function(e,t){var n,r,i,o,s,a,c,l,u,d,h,f,p,m,y,b,v,g,Z,X,w,L,k,x,G=0,S=new Uint8Array(4),W=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return wa;12===(n=e.state).mode&&(n.mode=13),s=e.next_out,i=e.output,c=e.avail_out,o=e.next_in,r=e.input,a=e.avail_in,l=n.hold,u=n.bits,d=a,h=c,L=ga;e:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13;break}for(;u<16;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(2&n.wrap&&35615===l){n.check=0,S[0]=255&l,S[1]=l>>>8&255,n.check=Bo(n.check,S,2,0),l=0,u=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&l)<<8)+(l>>8))%31){e.msg="incorrect header check",n.mode=30;break}if((15&l)!==Ga){e.msg="unknown compression method",n.mode=30;break}if(u-=4,w=8+(15&(l>>>=4)),0===n.wbits)n.wbits=w;else if(w>n.wbits){e.msg="invalid window size",n.mode=30;break}n.dmax=1<<n.wbits,e.adler=n.check=1,n.mode=512&l?10:12,l=0,u=0;break;case 2:for(;u<16;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(n.flags=l,(255&n.flags)!==Ga){e.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=l>>8&1),512&n.flags&&(S[0]=255&l,S[1]=l>>>8&255,n.check=Bo(n.check,S,2,0)),l=0,u=0,n.mode=3;case 3:for(;u<32;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}n.head&&(n.head.time=l),512&n.flags&&(S[0]=255&l,S[1]=l>>>8&255,S[2]=l>>>16&255,S[3]=l>>>24&255,n.check=Bo(n.check,S,4,0)),l=0,u=0,n.mode=4;case 4:for(;u<16;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}n.head&&(n.head.xflags=255&l,n.head.os=l>>8),512&n.flags&&(S[0]=255&l,S[1]=l>>>8&255,n.check=Bo(n.check,S,2,0)),l=0,u=0,n.mode=5;case 5:if(1024&n.flags){for(;u<16;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}n.length=l,n.head&&(n.head.extra_len=l),512&n.flags&&(S[0]=255&l,S[1]=l>>>8&255,n.check=Bo(n.check,S,2,0)),l=0,u=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((f=n.length)>a&&(f=a),f&&(n.head&&(w=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Uint8Array(n.head.extra_len)),n.head.extra.set(r.subarray(o,o+f),w)),512&n.flags&&(n.check=Bo(n.check,r,f,o)),a-=f,o+=f,n.length-=f),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===a)break e;f=0;do{w=r[o+f++],n.head&&w&&n.length<65536&&(n.head.name+=String.fromCharCode(w))}while(w&&f<a);if(512&n.flags&&(n.check=Bo(n.check,r,f,o)),a-=f,o+=f,w)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===a)break e;f=0;do{w=r[o+f++],n.head&&w&&n.length<65536&&(n.head.comment+=String.fromCharCode(w))}while(w&&f<a);if(512&n.flags&&(n.check=Bo(n.check,r,f,o)),a-=f,o+=f,w)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;u<16;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(l!==(65535&n.check)){e.msg="header crc mismatch",n.mode=30;break}l=0,u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;u<32;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}e.adler=n.check=Sa(l),l=0,u=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=s,e.avail_out=c,e.next_in=o,e.avail_in=a,n.hold=l,n.bits=u,Xa;e.adler=n.check=1,n.mode=12;case 12:if(t===ba||t===va)break e;case 13:if(n.last){l>>>=7&u,u-=7&u,n.mode=27;break}for(;u<3;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}switch(n.last=1&l,u-=1,3&(l>>>=1)){case 0:n.mode=14;break;case 1:if(Ka(n),n.mode=20,t===va){l>>>=2,u-=2;break e}break;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=30}l>>>=2,u-=2;break;case 14:for(l>>>=7&u,u-=7&u;u<32;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if((65535&l)!=(l>>>16^65535)){e.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&l,l=0,u=0,n.mode=15,t===va)break e;case 15:n.mode=16;case 16:if(f=n.length){if(f>a&&(f=a),f>c&&(f=c),0===f)break e;i.set(r.subarray(o,o+f),s),a-=f,o+=f,c-=f,s+=f,n.length-=f;break}n.mode=12;break;case 17:for(;u<14;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(n.nlen=257+(31&l),l>>>=5,u-=5,n.ndist=1+(31&l),l>>>=5,u-=5,n.ncode=4+(15&l),l>>>=4,u-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;u<3;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}n.lens[W[n.have++]]=7&l,l>>>=3,u-=3}for(;n.have<19;)n.lens[W[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,k={bits:n.lenbits},L=ma(0,n.lens,0,19,n.lencode,0,n.work,k),n.lenbits=k.bits,L){e.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;b=(G=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,v=65535&G,!((y=G>>>24)<=u);){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(v<16)l>>>=y,u-=y,n.lens[n.have++]=v;else{if(16===v){for(x=y+2;u<x;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(l>>>=y,u-=y,0===n.have){e.msg="invalid bit length repeat",n.mode=30;break}w=n.lens[n.have-1],f=3+(3&l),l>>>=2,u-=2}else if(17===v){for(x=y+3;u<x;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}u-=y,w=0,f=3+(7&(l>>>=y)),l>>>=3,u-=3}else{for(x=y+7;u<x;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}u-=y,w=0,f=11+(127&(l>>>=y)),l>>>=7,u-=7}if(n.have+f>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=30;break}for(;f--;)n.lens[n.have++]=w}}if(30===n.mode)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,k={bits:n.lenbits},L=ma(1,n.lens,0,n.nlen,n.lencode,0,n.work,k),n.lenbits=k.bits,L){e.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,k={bits:n.distbits},L=ma(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,k),n.distbits=k.bits,L){e.msg="invalid distances set",n.mode=30;break}if(n.mode=20,t===va)break e;case 20:n.mode=21;case 21:if(a>=6&&c>=258){e.next_out=s,e.avail_out=c,e.next_in=o,e.avail_in=a,n.hold=l,n.bits=u,ua(e,h),s=e.next_out,i=e.output,c=e.avail_out,o=e.next_in,r=e.input,a=e.avail_in,l=n.hold,u=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;b=(G=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,v=65535&G,!((y=G>>>24)<=u);){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(b&&0==(240&b)){for(g=y,Z=b,X=v;b=(G=n.lencode[X+((l&(1<<g+Z)-1)>>g)])>>>16&255,v=65535&G,!(g+(y=G>>>24)<=u);){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}l>>>=g,u-=g,n.back+=g}if(l>>>=y,u-=y,n.back+=y,n.length=v,0===b){n.mode=26;break}if(32&b){n.back=-1,n.mode=12;break}if(64&b){e.msg="invalid literal/length code",n.mode=30;break}n.extra=15&b,n.mode=22;case 22:if(n.extra){for(x=n.extra;u<x;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;b=(G=n.distcode[l&(1<<n.distbits)-1])>>>16&255,v=65535&G,!((y=G>>>24)<=u);){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(0==(240&b)){for(g=y,Z=b,X=v;b=(G=n.distcode[X+((l&(1<<g+Z)-1)>>g)])>>>16&255,v=65535&G,!(g+(y=G>>>24)<=u);){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}l>>>=g,u-=g,n.back+=g}if(l>>>=y,u-=y,n.back+=y,64&b){e.msg="invalid distance code",n.mode=30;break}n.offset=v,n.extra=15&b,n.mode=24;case 24:if(n.extra){for(x=n.extra;u<x;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===c)break e;if(f=h-c,n.offset>f){if((f=n.offset-f)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=30;break}f>n.wnext?(f-=n.wnext,p=n.wsize-f):p=n.wnext-f,f>n.length&&(f=n.length),m=n.window}else m=i,p=s-n.offset,f=n.length;f>c&&(f=c),c-=f,n.length-=f;do{i[s++]=m[p++]}while(--f);0===n.length&&(n.mode=21);break;case 26:if(0===c)break e;i[s++]=n.length,c--,n.mode=21;break;case 27:if(n.wrap){for(;u<32;){if(0===a)break e;a--,l|=r[o++]<<u,u+=8}if(h-=c,e.total_out+=h,n.total+=h,h&&(e.adler=n.check=n.flags?Bo(n.check,i,h,s-h):Oo(n.check,i,h,s-h)),h=c,(n.flags?l:Sa(l))!==n.check){e.msg="incorrect data check",n.mode=30;break}l=0,u=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;u<32;){if(0===a)break e;a--,l+=r[o++]<<u,u+=8}if(l!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=30;break}l=0,u=0}n.mode=29;case 29:L=Za;break e;case 30:L=La;break e;case 31:return ka;default:return wa}return e.next_out=s,e.avail_out=c,e.next_in=o,e.avail_in=a,n.hold=l,n.bits=u,(n.wsize||h!==e.avail_out&&n.mode<30&&(n.mode<27||t!==ya))&&Ma(e,e.output,e.next_out,h-e.avail_out),d-=e.avail_in,h-=e.avail_out,e.total_in+=d,e.total_out+=h,n.total+=h,n.wrap&&h&&(e.adler=n.check=n.flags?Bo(n.check,i,h,e.next_out-h):Oo(n.check,i,h,e.next_out-h)),e.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0===d&&0===h||t===ya)&&L===ga&&(L=xa),L},Ha={inflateReset:Ya,inflateReset2:Ia,inflateResetKeep:Ra,inflateInit:function(e){return Va(e,15)},inflateInit2:Va,inflate:Na,inflateEnd:function(e){if(!e||!e.state)return wa;var t=e.state;return t.window&&(t.window=null),e.state=null,ga},inflateGetHeader:function(e,t){if(!e||!e.state)return wa;var n=e.state;return 0==(2&n.wrap)?wa:(n.head=t,t.done=!1,ga)},inflateSetDictionary:function(e,t){var n,r=t.length;return e&&e.state?0!==(n=e.state).wrap&&11!==n.mode?wa:11===n.mode&&Oo(1,t,r,0)!==n.check?La:Ma(e,t,r,r)?(n.mode=31,ka):(n.havedict=1,ga):wa},inflateInfo:"pako inflate (from Nodeca project)"};var Fa=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},za=Object.prototype.toString,_a=qo.Z_NO_FLUSH,Ea=qo.Z_FINISH,ja=qo.Z_OK,Ja=qo.Z_STREAM_END,Ua=qo.Z_NEED_DICT,Qa=qo.Z_STREAM_ERROR,Oa=qo.Z_DATA_ERROR,Da=qo.Z_MEM_ERROR;function Ba(e){this.options=_s({chunkSize:65536,windowBits:15,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Bs,this.strm.avail_out=0;var n=Ha.inflateInit2(this.strm,t.windowBits);if(n!==ja)throw new Error(Ao[n]);if(this.header=new Fa,Ha.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=Qs(t.dictionary):"[object ArrayBuffer]"===za.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=Ha.inflateSetDictionary(this.strm,t.dictionary))!==ja))throw new Error(Ao[n])}function Aa(e,t){var n=new Ba(t);if(n.push(e),n.err)throw n.msg||Ao[n.err];return n.result}Ba.prototype.push=function(e,t){var n,r,i,o=this.strm,s=this.options.chunkSize,a=this.options.dictionary;if(this.ended)return!1;for(r=t===~~t?t:!0===t?Ea:_a,"[object ArrayBuffer]"===za.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;;){for(0===o.avail_out&&(o.output=new Uint8Array(s),o.next_out=0,o.avail_out=s),(n=Ha.inflate(o,r))===Ua&&a&&((n=Ha.inflateSetDictionary(o,a))===ja?n=Ha.inflate(o,r):n===Oa&&(n=Ua));o.avail_in>0&&n===Ja&&o.state.wrap>0&&0!==e[o.next_in];)Ha.inflateReset(o),n=Ha.inflate(o,r);switch(n){case Qa:case Oa:case Ua:case Da:return this.onEnd(n),this.ended=!0,!1}if(i=o.avail_out,o.next_out&&(0===o.avail_out||n===Ja))if("string"===this.options.to){var c=Ds(o.output,o.next_out),l=o.next_out-c,u=Os(o.output,c);o.next_out=l,o.avail_out=s-l,l&&o.output.set(o.output.subarray(c,c+l),0),this.onData(u)}else this.onData(o.output.length===o.next_out?o.output:o.output.subarray(0,o.next_out));if(n!==ja||0!==i){if(n===Ja)return n=Ha.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,!0;if(0===o.avail_in)break}}return!0},Ba.prototype.onData=function(e){this.chunks.push(e)},Ba.prototype.onEnd=function(e){e===ja&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Es(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var qa={Inflate:Ba,inflate:Aa,inflateRaw:function(e,t){return(t=t||{}).raw=!0,Aa(e,t)},ungzip:Aa,constants:qo},$a={Deflate:la.Deflate,deflate:la.deflate,deflateRaw:la.deflateRaw,gzip:la.gzip,Inflate:qa.Inflate,inflate:qa.inflate,inflateRaw:qa.inflateRaw,ungzip:qa.ungzip,constants:qo};function ec(e,t,n){var r=void 0===t?null:t,i=function(e,t){var n=atob(e);if(t){for(var r=new Uint8Array(n.length),i=0,o=n.length;i<o;++i)r[i]=n.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(r.buffer))}return n}(e,void 0!==n&&n),o=i.indexOf("\n",10)+1,s=i.substring(o)+(r?"\/\/# sourceMappingURL="+r:""),a=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(a)}var tc,nc,rc,ic,oc=(tc="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKioKICogQ29weXJpZ2h0IENyb3F1ZXQgQ29ycG9yYXRpb24gMjAyMgogKiBCdW5kbGUgb2YgQGNyb3F1ZXQvY3JvcXVldAogKiBEYXRlOiAyMDIyLTA1LTAyCiAqIFZlcnNpb246IDEuMS4wLTEyCiAqLwoKIWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIHQoZSl7cmV0dXJuIHQ9ImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmInN5bWJvbCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/InN5bWJvbCI6dHlwZW9mIHR9LHQoZSl9ZnVuY3Rpb24gZSh0LGUscixuLGksYSxvKXt0cnl7dmFyIHM9dFthXShvKSxjPXMudmFsdWV9Y2F0Y2godCl7cmV0dXJuIHZvaWQgcih0KX1zLmRvbmU/ZShjKTpQcm9taXNlLnJlc29sdmUoYykudGhlbihuLGkpfWZ1bmN0aW9uIHIodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHI9dGhpcyxuPWFyZ3VtZW50cztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGksYSl7dmFyIG89dC5hcHBseShyLG4pO2Z1bmN0aW9uIHModCl7ZShvLGksYSxzLGMsIm5leHQiLHQpfWZ1bmN0aW9uIGModCl7ZShvLGksYSxzLGMsInRocm93Iix0KX1zKHZvaWQgMCl9KSl9fWZ1bmN0aW9uIG4odCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheShlKTtyPGU7cisrKW5bcl09dFtyXTtyZXR1cm4gbn1mdW5jdGlvbiBpKHQsZSl7dmFyIHI9InVuZGVmaW5lZCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFsiQEBpdGVyYXRvciJdO2lmKCFyKXtpZihBcnJheS5pc0FycmF5KHQpfHwocj1mdW5jdGlvbih0LGUpe2lmKHQpe2lmKCJzdHJpbmciPT10eXBlb2YgdClyZXR1cm4gbih0LGUpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm4iT2JqZWN0Ij09PXImJnQuY29uc3RydWN0b3ImJihyPXQuY29uc3RydWN0b3IubmFtZSksIk1hcCI9PT1yfHwiU2V0Ij09PXI/QXJyYXkuZnJvbSh0KToiQXJndW1lbnRzIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpP24odCxlKTp2b2lkIDB9fSh0KSl8fGUmJnQmJiJudW1iZXIiPT10eXBlb2YgdC5sZW5ndGgpe3ImJih0PXIpO3ZhciBpPTAsYT1mdW5jdGlvbigpe307cmV0dXJue3M6YSxuOmZ1bmN0aW9uKCl7cmV0dXJuIGk+PXQubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTp0W2krK119fSxlOmZ1bmN0aW9uKHQpe3Rocm93IHR9LGY6YX19dGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLiIpfXZhciBvLHM9ITAsYz0hMTtyZXR1cm57czpmdW5jdGlvbigpe3I9ci5jYWxsKHQpfSxuOmZ1bmN0aW9uKCl7dmFyIHQ9ci5uZXh0KCk7cmV0dXJuIHM9dC5kb25lLHR9LGU6ZnVuY3Rpb24odCl7Yz0hMCxvPXR9LGY6ZnVuY3Rpb24oKXt0cnl7c3x8bnVsbD09ci5yZXR1cm58fHIucmV0dXJuKCl9ZmluYWxseXtpZihjKXRocm93IG99fX19dmFyIGE9InVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6InVuZGVmaW5lZCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OiJ1bmRlZmluZWQiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDoidW5kZWZpbmVkIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTshZnVuY3Rpb24oZSl7dmFyIHI9ZnVuY3Rpb24oZSl7dmFyIHIsbj1PYmplY3QucHJvdG90eXBlLGk9bi5oYXNPd25Qcm9wZXJ0eSxhPSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2w/U3ltYm9sOnt9LG89YS5pdGVyYXRvcnx8IkBAaXRlcmF0b3IiLHM9YS5hc3luY0l0ZXJhdG9yfHwiQEBhc3luY0l0ZXJhdG9yIixjPWEudG9TdHJpbmdUYWd8fCJAQHRvU3RyaW5nVGFnIjtmdW5jdGlvbiBoKHQsZSxyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pLHRbZV19dHJ5e2goe30sIiIpfWNhdGNoKHQpe2g9ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0W2VdPXJ9fWZ1bmN0aW9uIGwodCxlLHIsbil7dmFyIGk9ZSYmZS5wcm90b3R5cGUgaW5zdGFuY2VvZiB2P2U6dixhPU9iamVjdC5jcmVhdGUoaS5wcm90b3R5cGUpLG89bmV3IFIobnx8W10pO3JldHVybiBhLl9pbnZva2U9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWY7cmV0dXJuIGZ1bmN0aW9uKGksYSl7aWYobj09PV8pdGhyb3cgbmV3IEVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nIik7aWYobj09PXApe2lmKCJ0aHJvdyI9PT1pKXRocm93IGE7cmV0dXJuIEwoKX1mb3Ioci5tZXRob2Q9aSxyLmFyZz1hOzspe3ZhciBvPXIuZGVsZWdhdGU7aWYobyl7dmFyIHM9RShvLHIpO2lmKHMpe2lmKHM9PT1nKWNvbnRpbnVlO3JldHVybiBzfX1pZigibmV4dCI9PT1yLm1ldGhvZClyLnNlbnQ9ci5fc2VudD1yLmFyZztlbHNlIGlmKCJ0aHJvdyI9PT1yLm1ldGhvZCl7aWYobj09PWYpdGhyb3cgbj1wLHIuYXJnO3IuZGlzcGF0Y2hFeGNlcHRpb24oci5hcmcpfWVsc2UicmV0dXJuIj09PXIubWV0aG9kJiZyLmFicnVwdCgicmV0dXJuIixyLmFyZyk7bj1fO3ZhciBjPXUodCxlLHIpO2lmKCJub3JtYWwiPT09Yy50eXBlKXtpZihuPXIuZG9uZT9wOmQsYy5hcmc9PT1nKWNvbnRpbnVlO3JldHVybnt2YWx1ZTpjLmFyZyxkb25lOnIuZG9uZX19InRocm93Ij09PWMudHlwZSYmKG49cCxyLm1ldGhvZD0idGhyb3ciLHIuYXJnPWMuYXJnKX19fSh0LHIsbyksYX1mdW5jdGlvbiB1KHQsZSxyKXt0cnl7cmV0dXJue3R5cGU6Im5vcm1hbCIsYXJnOnQuY2FsbChlLHIpfX1jYXRjaCh0KXtyZXR1cm57dHlwZToidGhyb3ciLGFyZzp0fX19ZS53cmFwPWw7dmFyIGY9InN1c3BlbmRlZFN0YXJ0IixkPSJzdXNwZW5kZWRZaWVsZCIsXz0iZXhlY3V0aW5nIixwPSJjb21wbGV0ZWQiLGc9e307ZnVuY3Rpb24gdigpe31mdW5jdGlvbiB5KCl7fWZ1bmN0aW9uIHcoKXt9dmFyIG09e307aChtLG8sKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSk7dmFyIGI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHg9YiYmYihiKEQoW10pKSk7eCYmeCE9PW4mJmkuY2FsbCh4LG8pJiYobT14KTt2YXIgaz13LnByb3RvdHlwZT12LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG0pO2Z1bmN0aW9uIHoodCl7WyJuZXh0IiwidGhyb3ciLCJyZXR1cm4iXS5mb3JFYWNoKChmdW5jdGlvbihlKXtoKHQsZSwoZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ludm9rZShlLHQpfSkpfSkpfWZ1bmN0aW9uIEEoZSxyKXtmdW5jdGlvbiBuKGEsbyxzLGMpe3ZhciBoPXUoZVthXSxlLG8pO2lmKCJ0aHJvdyIhPT1oLnR5cGUpe3ZhciBsPWguYXJnLGY9bC52YWx1ZTtyZXR1cm4gZiYmIm9iamVjdCI9PT10KGYpJiZpLmNhbGwoZiwiX19hd2FpdCIpP3IucmVzb2x2ZShmLl9fYXdhaXQpLnRoZW4oKGZ1bmN0aW9uKHQpe24oIm5leHQiLHQscyxjKX0pLChmdW5jdGlvbih0KXtuKCJ0aHJvdyIsdCxzLGMpfSkpOnIucmVzb2x2ZShmKS50aGVuKChmdW5jdGlvbih0KXtsLnZhbHVlPXQscyhsKX0pLChmdW5jdGlvbih0KXtyZXR1cm4gbigidGhyb3ciLHQscyxjKX0pKX1jKGguYXJnKX12YXIgYTt0aGlzLl9pbnZva2U9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBpKCl7cmV0dXJuIG5ldyByKChmdW5jdGlvbihyLGkpe24odCxlLHIsaSl9KSl9cmV0dXJuIGE9YT9hLnRoZW4oaSxpKTppKCl9fWZ1bmN0aW9uIEUodCxlKXt2YXIgbj10Lml0ZXJhdG9yW2UubWV0aG9kXTtpZihuPT09cil7aWYoZS5kZWxlZ2F0ZT1udWxsLCJ0aHJvdyI9PT1lLm1ldGhvZCl7aWYodC5pdGVyYXRvci5yZXR1cm4mJihlLm1ldGhvZD0icmV0dXJuIixlLmFyZz1yLEUodCxlKSwidGhyb3ciPT09ZS5tZXRob2QpKXJldHVybiBnO2UubWV0aG9kPSJ0aHJvdyIsZS5hcmc9bmV3IFR5cGVFcnJvcigiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZCIpfXJldHVybiBnfXZhciBpPXUobix0Lml0ZXJhdG9yLGUuYXJnKTtpZigidGhyb3ciPT09aS50eXBlKXJldHVybiBlLm1ldGhvZD0idGhyb3ciLGUuYXJnPWkuYXJnLGUuZGVsZWdhdGU9bnVsbCxnO3ZhciBhPWkuYXJnO3JldHVybiBhP2EuZG9uZT8oZVt0LnJlc3VsdE5hbWVdPWEudmFsdWUsZS5uZXh0PXQubmV4dExvYywicmV0dXJuIiE9PWUubWV0aG9kJiYoZS5tZXRob2Q9Im5leHQiLGUuYXJnPXIpLGUuZGVsZWdhdGU9bnVsbCxnKTphOihlLm1ldGhvZD0idGhyb3ciLGUuYXJnPW5ldyBUeXBlRXJyb3IoIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0IiksZS5kZWxlZ2F0ZT1udWxsLGcpfWZ1bmN0aW9uIFModCl7dmFyIGU9e3RyeUxvYzp0WzBdfTsxIGluIHQmJihlLmNhdGNoTG9jPXRbMV0pLDIgaW4gdCYmKGUuZmluYWxseUxvYz10WzJdLGUuYWZ0ZXJMb2M9dFszXSksdGhpcy50cnlFbnRyaWVzLnB1c2goZSl9ZnVuY3Rpb24gQih0KXt2YXIgZT10LmNvbXBsZXRpb258fHt9O2UudHlwZT0ibm9ybWFsIixkZWxldGUgZS5hcmcsdC5jb21wbGV0aW9uPWV9ZnVuY3Rpb24gUih0KXt0aGlzLnRyeUVudHJpZXM9W3t0cnlMb2M6InJvb3QifV0sdC5mb3JFYWNoKFMsdGhpcyksdGhpcy5yZXNldCghMCl9ZnVuY3Rpb24gRCh0KXtpZih0KXt2YXIgZT10W29dO2lmKGUpcmV0dXJuIGUuY2FsbCh0KTtpZigiZnVuY3Rpb24iPT10eXBlb2YgdC5uZXh0KXJldHVybiB0O2lmKCFpc05hTih0Lmxlbmd0aCkpe3ZhciBuPS0xLGE9ZnVuY3Rpb24gZSgpe2Zvcig7KytuPHQubGVuZ3RoOylpZihpLmNhbGwodCxuKSlyZXR1cm4gZS52YWx1ZT10W25dLGUuZG9uZT0hMSxlO3JldHVybiBlLnZhbHVlPXIsZS5kb25lPSEwLGV9O3JldHVybiBhLm5leHQ9YX19cmV0dXJue25leHQ6TH19ZnVuY3Rpb24gTCgpe3JldHVybnt2YWx1ZTpyLGRvbmU6ITB9fXJldHVybiB5LnByb3RvdHlwZT13LGgoaywiY29uc3RydWN0b3IiLHcpLGgodywiY29uc3RydWN0b3IiLHkpLHkuZGlzcGxheU5hbWU9aCh3LGMsIkdlbmVyYXRvckZ1bmN0aW9uIiksZS5pc0dlbmVyYXRvckZ1bmN0aW9uPWZ1bmN0aW9uKHQpe3ZhciBlPSJmdW5jdGlvbiI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yO3JldHVybiEhZSYmKGU9PT15fHwiR2VuZXJhdG9yRnVuY3Rpb24iPT09KGUuZGlzcGxheU5hbWV8fGUubmFtZSkpfSxlLm1hcms9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCx3KToodC5fX3Byb3RvX189dyxoKHQsYywiR2VuZXJhdG9yRnVuY3Rpb24iKSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShrKSx0fSxlLmF3cmFwPWZ1bmN0aW9uKHQpe3JldHVybntfX2F3YWl0OnR9fSx6KEEucHJvdG90eXBlKSxoKEEucHJvdG90eXBlLHMsKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSksZS5Bc3luY0l0ZXJhdG9yPUEsZS5hc3luYz1mdW5jdGlvbih0LHIsbixpLGEpe3ZvaWQgMD09PWEmJihhPVByb21pc2UpO3ZhciBvPW5ldyBBKGwodCxyLG4saSksYSk7cmV0dXJuIGUuaXNHZW5lcmF0b3JGdW5jdGlvbihyKT9vOm8ubmV4dCgpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRvbmU/dC52YWx1ZTpvLm5leHQoKX0pKX0seihrKSxoKGssYywiR2VuZXJhdG9yIiksaChrLG8sKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSksaChrLCJ0b1N0cmluZyIsKGZ1bmN0aW9uKCl7cmV0dXJuIltvYmplY3QgR2VuZXJhdG9yXSJ9KSksZS5rZXlzPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO2Zvcih2YXIgciBpbiB0KWUucHVzaChyKTtyZXR1cm4gZS5yZXZlcnNlKCksZnVuY3Rpb24gcigpe2Zvcig7ZS5sZW5ndGg7KXt2YXIgbj1lLnBvcCgpO2lmKG4gaW4gdClyZXR1cm4gci52YWx1ZT1uLHIuZG9uZT0hMSxyfXJldHVybiByLmRvbmU9ITAscn19LGUudmFsdWVzPUQsUi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlIscmVzZXQ6ZnVuY3Rpb24odCl7aWYodGhpcy5wcmV2PTAsdGhpcy5uZXh0PTAsdGhpcy5zZW50PXRoaXMuX3NlbnQ9cix0aGlzLmRvbmU9ITEsdGhpcy5kZWxlZ2F0ZT1udWxsLHRoaXMubWV0aG9kPSJuZXh0Iix0aGlzLmFyZz1yLHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKEIpLCF0KWZvcih2YXIgZSBpbiB0aGlzKSJ0Ij09PWUuY2hhckF0KDApJiZpLmNhbGwodGhpcyxlKSYmIWlzTmFOKCtlLnNsaWNlKDEpKSYmKHRoaXNbZV09cil9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmRvbmU9ITA7dmFyIHQ9dGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247aWYoInRocm93Ij09PXQudHlwZSl0aHJvdyB0LmFyZztyZXR1cm4gdGhpcy5ydmFsfSxkaXNwYXRjaEV4Y2VwdGlvbjpmdW5jdGlvbih0KXtpZih0aGlzLmRvbmUpdGhyb3cgdDt2YXIgZT10aGlzO2Z1bmN0aW9uIG4obixpKXtyZXR1cm4gcy50eXBlPSJ0aHJvdyIscy5hcmc9dCxlLm5leHQ9bixpJiYoZS5tZXRob2Q9Im5leHQiLGUuYXJnPXIpLCEhaX1mb3IodmFyIGE9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2E+PTA7LS1hKXt2YXIgbz10aGlzLnRyeUVudHJpZXNbYV0scz1vLmNvbXBsZXRpb247aWYoInJvb3QiPT09by50cnlMb2MpcmV0dXJuIG4oImVuZCIpO2lmKG8udHJ5TG9jPD10aGlzLnByZXYpe3ZhciBjPWkuY2FsbChvLCJjYXRjaExvYyIpLGg9aS5jYWxsKG8sImZpbmFsbHlMb2MiKTtpZihjJiZoKXtpZih0aGlzLnByZXY8by5jYXRjaExvYylyZXR1cm4gbihvLmNhdGNoTG9jLCEwKTtpZih0aGlzLnByZXY8by5maW5hbGx5TG9jKXJldHVybiBuKG8uZmluYWxseUxvYyl9ZWxzZSBpZihjKXtpZih0aGlzLnByZXY8by5jYXRjaExvYylyZXR1cm4gbihvLmNhdGNoTG9jLCEwKX1lbHNle2lmKCFoKXRocm93IG5ldyBFcnJvcigidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHkiKTtpZih0aGlzLnByZXY8by5maW5hbGx5TG9jKXJldHVybiBuKG8uZmluYWxseUxvYyl9fX19LGFicnVwdDpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7cj49MDstLXIpe3ZhciBuPXRoaXMudHJ5RW50cmllc1tyXTtpZihuLnRyeUxvYzw9dGhpcy5wcmV2JiZpLmNhbGwobiwiZmluYWxseUxvYyIpJiZ0aGlzLnByZXY8bi5maW5hbGx5TG9jKXt2YXIgYT1uO2JyZWFrfX1hJiYoImJyZWFrIj09PXR8fCJjb250aW51ZSI9PT10KSYmYS50cnlMb2M8PWUmJmU8PWEuZmluYWxseUxvYyYmKGE9bnVsbCk7dmFyIG89YT9hLmNvbXBsZXRpb246e307cmV0dXJuIG8udHlwZT10LG8uYXJnPWUsYT8odGhpcy5tZXRob2Q9Im5leHQiLHRoaXMubmV4dD1hLmZpbmFsbHlMb2MsZyk6dGhpcy5jb21wbGV0ZShvKX0sY29tcGxldGU6ZnVuY3Rpb24odCxlKXtpZigidGhyb3ciPT09dC50eXBlKXRocm93IHQuYXJnO3JldHVybiJicmVhayI9PT10LnR5cGV8fCJjb250aW51ZSI9PT10LnR5cGU/dGhpcy5uZXh0PXQuYXJnOiJyZXR1cm4iPT09dC50eXBlPyh0aGlzLnJ2YWw9dGhpcy5hcmc9dC5hcmcsdGhpcy5tZXRob2Q9InJldHVybiIsdGhpcy5uZXh0PSJlbmQiKToibm9ybWFsIj09PXQudHlwZSYmZSYmKHRoaXMubmV4dD1lKSxnfSxmaW5pc2g6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTtlPj0wOy0tZSl7dmFyIHI9dGhpcy50cnlFbnRyaWVzW2VdO2lmKHIuZmluYWxseUxvYz09PXQpcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLHIuYWZ0ZXJMb2MpLEIociksZ319LGNhdGNoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7ZT49MDstLWUpe3ZhciByPXRoaXMudHJ5RW50cmllc1tlXTtpZihyLnRyeUxvYz09PXQpe3ZhciBuPXIuY29tcGxldGlvbjtpZigidGhyb3ciPT09bi50eXBlKXt2YXIgaT1uLmFyZztCKHIpfXJldHVybiBpfX10aHJvdyBuZXcgRXJyb3IoImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdCIpfSxkZWxlZ2F0ZVlpZWxkOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5kZWxlZ2F0ZT17aXRlcmF0b3I6RCh0KSxyZXN1bHROYW1lOmUsbmV4dExvYzpufSwibmV4dCI9PT10aGlzLm1ldGhvZCYmKHRoaXMuYXJnPXIpLGd9fSxlfShlLmV4cG9ydHMpO3RyeXtnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZT1yfWNhdGNoKGUpeyJvYmplY3QiPT09KCJ1bmRlZmluZWQiPT10eXBlb2YgZ2xvYmFsVGhpcz8idW5kZWZpbmVkIjp0KGdsb2JhbFRoaXMpKT9nbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZT1yOkZ1bmN0aW9uKCJyIiwicmVnZW5lcmF0b3JSdW50aW1lID0gciIpKHIpfX0oe2V4cG9ydHM6e319KTt2YXIgbz17ZXhwb3J0czp7fX07KGZ1bmN0aW9uKGUpe3ZhciByPTQsbj0wLGk9MSxhPTI7ZnVuY3Rpb24gbyh0KXtmb3IodmFyIGU9dC5sZW5ndGg7LS1lPj0wOyl0W2VdPTB9dmFyIHM9MCxjPTEsaD0yLGw9Myx1PTI1OCxmPTI5LGQ9MjU2LF89ZCsxK2YscD0zMCxnPTE5LHY9MipfKzEseT0xNSx3PTE2LG09NyxiPTI1Nix4PTE2LGs9MTcsej0xOCxBPW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdKSxFPW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSksUz1uZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN10pLEI9bmV3IFVpbnQ4QXJyYXkoWzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdKSxSPTUxMixEPW5ldyBBcnJheSgyKihfKzIpKTtvKEQpO3ZhciBMPW5ldyBBcnJheSgyKnApO28oTCk7dmFyIFU9bmV3IEFycmF5KFIpO28oVSk7dmFyIE89bmV3IEFycmF5KHUtbCsxKTtvKE8pO3ZhciBDPW5ldyBBcnJheShmKTtvKEMpO3ZhciBULEYsSCxaPW5ldyBBcnJheShwKTtmdW5jdGlvbiBNKHQsZSxyLG4saSl7dGhpcy5zdGF0aWNfdHJlZT10LHRoaXMuZXh0cmFfYml0cz1lLHRoaXMuZXh0cmFfYmFzZT1yLHRoaXMuZWxlbXM9bix0aGlzLm1heF9sZW5ndGg9aSx0aGlzLmhhc19zdHJlZT10JiZ0Lmxlbmd0aH1mdW5jdGlvbiBJKHQsZSl7dGhpcy5keW5fdHJlZT10LHRoaXMubWF4X2NvZGU9MCx0aGlzLnN0YXRfZGVzYz1lfW8oWik7dmFyIE49ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MjU2P1VbdF06VVsyNTYrKHQ+Pj43KV19LFA9ZnVuY3Rpb24odCxlKXt0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmZSx0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT1lPj4+OCYyNTV9LGo9ZnVuY3Rpb24odCxlLHIpe3QuYmlfdmFsaWQ+dy1yPyh0LmJpX2J1Znw9ZTw8dC5iaV92YWxpZCY2NTUzNSxQKHQsdC5iaV9idWYpLHQuYmlfYnVmPWU+PnctdC5iaV92YWxpZCx0LmJpX3ZhbGlkKz1yLXcpOih0LmJpX2J1Znw9ZTw8dC5iaV92YWxpZCY2NTUzNSx0LmJpX3ZhbGlkKz1yKX0sSz1mdW5jdGlvbih0LGUscil7aih0LHJbMiplXSxyWzIqZSsxXSl9LFg9ZnVuY3Rpb24odCxlKXt2YXIgcj0wO2Rve3J8PTEmdCx0Pj4+PTEscjw8PTF9d2hpbGUoLS1lPjApO3JldHVybiByPj4+MX0scT1mdW5jdGlvbih0KXsxNj09PXQuYmlfdmFsaWQ/KFAodCx0LmJpX2J1ZiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTApOnQuYmlfdmFsaWQ+PTgmJih0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmdC5iaV9idWYsdC5iaV9idWY+Pj04LHQuYmlfdmFsaWQtPTgpfSxHPWZ1bmN0aW9uKHQsZSl7dmFyIHIsbixpLGEsbyxzLGM9ZS5keW5fdHJlZSxoPWUubWF4X2NvZGUsbD1lLnN0YXRfZGVzYy5zdGF0aWNfdHJlZSx1PWUuc3RhdF9kZXNjLmhhc19zdHJlZSxmPWUuc3RhdF9kZXNjLmV4dHJhX2JpdHMsZD1lLnN0YXRfZGVzYy5leHRyYV9iYXNlLF89ZS5zdGF0X2Rlc2MubWF4X2xlbmd0aCxwPTA7Zm9yKGE9MDthPD15O2ErKyl0LmJsX2NvdW50W2FdPTA7Zm9yKGNbMip0LmhlYXBbdC5oZWFwX21heF0rMV09MCxyPXQuaGVhcF9tYXgrMTtyPHY7cisrKShhPWNbMipjWzIqKG49dC5oZWFwW3JdKSsxXSsxXSsxKT5fJiYoYT1fLHArKyksY1syKm4rMV09YSxuPmh8fCh0LmJsX2NvdW50W2FdKyssbz0wLG4+PWQmJihvPWZbbi1kXSkscz1jWzIqbl0sdC5vcHRfbGVuKz1zKihhK28pLHUmJih0LnN0YXRpY19sZW4rPXMqKGxbMipuKzFdK28pKSk7aWYoMCE9PXApe2Rve2ZvcihhPV8tMTswPT09dC5ibF9jb3VudFthXTspYS0tO3QuYmxfY291bnRbYV0tLSx0LmJsX2NvdW50W2ErMV0rPTIsdC5ibF9jb3VudFtfXS0tLHAtPTJ9d2hpbGUocD4wKTtmb3IoYT1fOzAhPT1hO2EtLSlmb3Iobj10LmJsX2NvdW50W2FdOzAhPT1uOykoaT10LmhlYXBbLS1yXSk+aHx8KGNbMippKzFdIT09YSYmKHQub3B0X2xlbis9KGEtY1syKmkrMV0pKmNbMippXSxjWzIqaSsxXT1hKSxuLS0pfX0sVz1mdW5jdGlvbih0LGUscil7dmFyIG4saSxhPW5ldyBBcnJheSh5KzEpLG89MDtmb3Iobj0xO248PXk7bisrKWFbbl09bz1vK3Jbbi0xXTw8MTtmb3IoaT0wO2k8PWU7aSsrKXt2YXIgcz10WzIqaSsxXTswIT09cyYmKHRbMippXT1YKGFbc10rKyxzKSl9fSxZPWZ1bmN0aW9uKCl7dmFyIHQsZSxyLG4saSxhPW5ldyBBcnJheSh5KzEpO2ZvcihyPTAsbj0wO248Zi0xO24rKylmb3IoQ1tuXT1yLHQ9MDt0PDE8PEFbbl07dCsrKU9bcisrXT1uO2ZvcihPW3ItMV09bixpPTAsbj0wO248MTY7bisrKWZvcihaW25dPWksdD0wO3Q8MTw8RVtuXTt0KyspVVtpKytdPW47Zm9yKGk+Pj03O248cDtuKyspZm9yKFpbbl09aTw8Nyx0PTA7dDwxPDxFW25dLTc7dCsrKVVbMjU2K2krK109bjtmb3IoZT0wO2U8PXk7ZSsrKWFbZV09MDtmb3IodD0wO3Q8PTE0MzspRFsyKnQrMV09OCx0KyssYVs4XSsrO2Zvcig7dDw9MjU1OylEWzIqdCsxXT05LHQrKyxhWzldKys7Zm9yKDt0PD0yNzk7KURbMip0KzFdPTcsdCsrLGFbN10rKztmb3IoO3Q8PTI4NzspRFsyKnQrMV09OCx0KyssYVs4XSsrO2ZvcihXKEQsXysxLGEpLHQ9MDt0PHA7dCsrKUxbMip0KzFdPTUsTFsyKnRdPVgodCw1KTtUPW5ldyBNKEQsQSxkKzEsXyx5KSxGPW5ldyBNKEwsRSwwLHAseSksSD1uZXcgTShuZXcgQXJyYXkoMCksUywwLGcsbSl9LFY9ZnVuY3Rpb24odCl7dmFyIGU7Zm9yKGU9MDtlPF87ZSsrKXQuZHluX2x0cmVlWzIqZV09MDtmb3IoZT0wO2U8cDtlKyspdC5keW5fZHRyZWVbMiplXT0wO2ZvcihlPTA7ZTxnO2UrKyl0LmJsX3RyZWVbMiplXT0wO3QuZHluX2x0cmVlWzIqYl09MSx0Lm9wdF9sZW49dC5zdGF0aWNfbGVuPTAsdC5sYXN0X2xpdD10Lm1hdGNoZXM9MH0sJD1mdW5jdGlvbih0KXt0LmJpX3ZhbGlkPjg/UCh0LHQuYmlfYnVmKTp0LmJpX3ZhbGlkPjAmJih0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT10LmJpX2J1ZiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTB9LFE9ZnVuY3Rpb24odCxlLHIsbil7JCh0KSxuJiYoUCh0LHIpLFAodCx+cikpLHQucGVuZGluZ19idWYuc2V0KHQud2luZG93LnN1YmFycmF5KGUsZStyKSx0LnBlbmRpbmcpLHQucGVuZGluZys9cn0sSj1mdW5jdGlvbih0LGUscixuKXt2YXIgaT0yKmUsYT0yKnI7cmV0dXJuIHRbaV08dFthXXx8dFtpXT09PXRbYV0mJm5bZV08PW5bcl19LHR0PWZ1bmN0aW9uKHQsZSxyKXtmb3IodmFyIG49dC5oZWFwW3JdLGk9cjw8MTtpPD10LmhlYXBfbGVuJiYoaTx0LmhlYXBfbGVuJiZKKGUsdC5oZWFwW2krMV0sdC5oZWFwW2ldLHQuZGVwdGgpJiZpKyssIUooZSxuLHQuaGVhcFtpXSx0LmRlcHRoKSk7KXQuaGVhcFtyXT10LmhlYXBbaV0scj1pLGk8PD0xO3QuaGVhcFtyXT1ufSxldD1mdW5jdGlvbih0LGUscil7dmFyIG4saSxhLG8scz0wO2lmKDAhPT10Lmxhc3RfbGl0KWRve249dC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqc108PDh8dC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqcysxXSxpPXQucGVuZGluZ19idWZbdC5sX2J1ZitzXSxzKyssMD09PW4/Syh0LGksZSk6KGE9T1tpXSxLKHQsYStkKzEsZSksMCE9PShvPUFbYV0pJiYoaS09Q1thXSxqKHQsaSxvKSksbi0tLGE9TihuKSxLKHQsYSxyKSwwIT09KG89RVthXSkmJihuLT1aW2FdLGoodCxuLG8pKSl9d2hpbGUoczx0Lmxhc3RfbGl0KTtLKHQsYixlKX0scnQ9ZnVuY3Rpb24odCxlKXt2YXIgcixuLGksYT1lLmR5bl90cmVlLG89ZS5zdGF0X2Rlc2Muc3RhdGljX3RyZWUscz1lLnN0YXRfZGVzYy5oYXNfc3RyZWUsYz1lLnN0YXRfZGVzYy5lbGVtcyxoPS0xO2Zvcih0LmhlYXBfbGVuPTAsdC5oZWFwX21heD12LHI9MDtyPGM7cisrKTAhPT1hWzIqcl0/KHQuaGVhcFsrK3QuaGVhcF9sZW5dPWg9cix0LmRlcHRoW3JdPTApOmFbMipyKzFdPTA7Zm9yKDt0LmhlYXBfbGVuPDI7KWFbMiooaT10LmhlYXBbKyt0LmhlYXBfbGVuXT1oPDI/KytoOjApXT0xLHQuZGVwdGhbaV09MCx0Lm9wdF9sZW4tLSxzJiYodC5zdGF0aWNfbGVuLT1vWzIqaSsxXSk7Zm9yKGUubWF4X2NvZGU9aCxyPXQuaGVhcF9sZW4+PjE7cj49MTtyLS0pdHQodCxhLHIpO2k9Yztkb3tyPXQuaGVhcFsxXSx0LmhlYXBbMV09dC5oZWFwW3QuaGVhcF9sZW4tLV0sdHQodCxhLDEpLG49dC5oZWFwWzFdLHQuaGVhcFstLXQuaGVhcF9tYXhdPXIsdC5oZWFwWy0tdC5oZWFwX21heF09bixhWzIqaV09YVsyKnJdK2FbMipuXSx0LmRlcHRoW2ldPSh0LmRlcHRoW3JdPj10LmRlcHRoW25dP3QuZGVwdGhbcl06dC5kZXB0aFtuXSkrMSxhWzIqcisxXT1hWzIqbisxXT1pLHQuaGVhcFsxXT1pKyssdHQodCxhLDEpfXdoaWxlKHQuaGVhcF9sZW4+PTIpO3QuaGVhcFstLXQuaGVhcF9tYXhdPXQuaGVhcFsxXSxHKHQsZSksVyhhLGgsdC5ibF9jb3VudCl9LG50PWZ1bmN0aW9uKHQsZSxyKXt2YXIgbixpLGE9LTEsbz1lWzFdLHM9MCxjPTcsaD00O2ZvcigwPT09byYmKGM9MTM4LGg9MyksZVsyKihyKzEpKzFdPTY1NTM1LG49MDtuPD1yO24rKylpPW8sbz1lWzIqKG4rMSkrMV0sKytzPGMmJmk9PT1vfHwoczxoP3QuYmxfdHJlZVsyKmldKz1zOjAhPT1pPyhpIT09YSYmdC5ibF90cmVlWzIqaV0rKyx0LmJsX3RyZWVbMip4XSsrKTpzPD0xMD90LmJsX3RyZWVbMiprXSsrOnQuYmxfdHJlZVsyKnpdKysscz0wLGE9aSwwPT09bz8oYz0xMzgsaD0zKTppPT09bz8oYz02LGg9Myk6KGM9NyxoPTQpKX0saXQ9ZnVuY3Rpb24odCxlLHIpe3ZhciBuLGksYT0tMSxvPWVbMV0scz0wLGM9NyxoPTQ7Zm9yKDA9PT1vJiYoYz0xMzgsaD0zKSxuPTA7bjw9cjtuKyspaWYoaT1vLG89ZVsyKihuKzEpKzFdLCEoKytzPGMmJmk9PT1vKSl7aWYoczxoKWRve0sodCxpLHQuYmxfdHJlZSl9d2hpbGUoMCE9LS1zKTtlbHNlIDAhPT1pPyhpIT09YSYmKEsodCxpLHQuYmxfdHJlZSkscy0tKSxLKHQseCx0LmJsX3RyZWUpLGoodCxzLTMsMikpOnM8PTEwPyhLKHQsayx0LmJsX3RyZWUpLGoodCxzLTMsMykpOihLKHQseix0LmJsX3RyZWUpLGoodCxzLTExLDcpKTtzPTAsYT1pLDA9PT1vPyhjPTEzOCxoPTMpOmk9PT1vPyhjPTYsaD0zKTooYz03LGg9NCl9fSxhdD1mdW5jdGlvbih0KXt2YXIgZTtmb3IobnQodCx0LmR5bl9sdHJlZSx0LmxfZGVzYy5tYXhfY29kZSksbnQodCx0LmR5bl9kdHJlZSx0LmRfZGVzYy5tYXhfY29kZSkscnQodCx0LmJsX2Rlc2MpLGU9Zy0xO2U+PTMmJjA9PT10LmJsX3RyZWVbMipCW2VdKzFdO2UtLSk7cmV0dXJuIHQub3B0X2xlbis9MyooZSsxKSs1KzUrNCxlfSxvdD1mdW5jdGlvbih0LGUscixuKXt2YXIgaTtmb3Ioaih0LGUtMjU3LDUpLGoodCxyLTEsNSksaih0LG4tNCw0KSxpPTA7aTxuO2krKylqKHQsdC5ibF90cmVlWzIqQltpXSsxXSwzKTtpdCh0LHQuZHluX2x0cmVlLGUtMSksaXQodCx0LmR5bl9kdHJlZSxyLTEpfSxzdD1mdW5jdGlvbih0KXt2YXIgZSxyPTQwOTM2MjQ0NDc7Zm9yKGU9MDtlPD0zMTtlKysscj4+Pj0xKWlmKDEmciYmMCE9PXQuZHluX2x0cmVlWzIqZV0pcmV0dXJuIG47aWYoMCE9PXQuZHluX2x0cmVlWzE4XXx8MCE9PXQuZHluX2x0cmVlWzIwXXx8MCE9PXQuZHluX2x0cmVlWzI2XSlyZXR1cm4gaTtmb3IoZT0zMjtlPGQ7ZSsrKWlmKDAhPT10LmR5bl9sdHJlZVsyKmVdKXJldHVybiBpO3JldHVybiBufSxjdD0hMSxodD1mdW5jdGlvbih0LGUscixuKXtqKHQsKHM8PDEpKyhuPzE6MCksMyksUSh0LGUsciwhMCl9LGx0PWZ1bmN0aW9uKHQsZSxuLGkpe3ZhciBvLHMsbD0wO3QubGV2ZWw+MD8odC5zdHJtLmRhdGFfdHlwZT09PWEmJih0LnN0cm0uZGF0YV90eXBlPXN0KHQpKSxydCh0LHQubF9kZXNjKSxydCh0LHQuZF9kZXNjKSxsPWF0KHQpLG89dC5vcHRfbGVuKzMrNz4+PjMsKHM9dC5zdGF0aWNfbGVuKzMrNz4+PjMpPD1vJiYobz1zKSk6bz1zPW4rNSxuKzQ8PW8mJi0xIT09ZT9odCh0LGUsbixpKTp0LnN0cmF0ZWd5PT09cnx8cz09PW8/KGoodCwoYzw8MSkrKGk/MTowKSwzKSxldCh0LEQsTCkpOihqKHQsKGg8PDEpKyhpPzE6MCksMyksb3QodCx0LmxfZGVzYy5tYXhfY29kZSsxLHQuZF9kZXNjLm1heF9jb2RlKzEsbCsxKSxldCh0LHQuZHluX2x0cmVlLHQuZHluX2R0cmVlKSksVih0KSxpJiYkKHQpfSx1dD17X3RyX2luaXQ6ZnVuY3Rpb24odCl7Y3R8fChZKCksY3Q9ITApLHQubF9kZXNjPW5ldyBJKHQuZHluX2x0cmVlLFQpLHQuZF9kZXNjPW5ldyBJKHQuZHluX2R0cmVlLEYpLHQuYmxfZGVzYz1uZXcgSSh0LmJsX3RyZWUsSCksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTAsVih0KX0sX3RyX3N0b3JlZF9ibG9jazpodCxfdHJfZmx1c2hfYmxvY2s6bHQsX3RyX3RhbGx5OmZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqdC5sYXN0X2xpdF09ZT4+PjgmMjU1LHQucGVuZGluZ19idWZbdC5kX2J1ZisyKnQubGFzdF9saXQrMV09MjU1JmUsdC5wZW5kaW5nX2J1Zlt0LmxfYnVmK3QubGFzdF9saXRdPTI1NSZyLHQubGFzdF9saXQrKywwPT09ZT90LmR5bl9sdHJlZVsyKnJdKys6KHQubWF0Y2hlcysrLGUtLSx0LmR5bl9sdHJlZVsyKihPW3JdK2QrMSldKyssdC5keW5fZHRyZWVbMipOKGUpXSsrKSx0Lmxhc3RfbGl0PT09dC5saXRfYnVmc2l6ZS0xfSxfdHJfYWxpZ246ZnVuY3Rpb24odCl7aih0LGM8PDEsMyksSyh0LGIsRCkscSh0KX19LGZ0PWZ1bmN0aW9uKHQsZSxyLG4pe2Zvcih2YXIgaT02NTUzNSZ0fDAsYT10Pj4+MTYmNjU1MzV8MCxvPTA7MCE9PXI7KXtyLT1vPXI+MmUzPzJlMzpyO2Rve2E9YSsoaT1pK2VbbisrXXwwKXwwfXdoaWxlKC0tbyk7aSU9NjU1MjEsYSU9NjU1MjF9cmV0dXJuIGl8YTw8MTZ8MH0sZHQ9bmV3IFVpbnQzMkFycmF5KGZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9W10scj0wO3I8MjU2O3IrKyl7dD1yO2Zvcih2YXIgbj0wO248ODtuKyspdD0xJnQ/Mzk4ODI5MjM4NF50Pj4+MTp0Pj4+MTtlW3JdPXR9cmV0dXJuIGV9KCkpLF90PWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBpPWR0LGE9bityO3RePS0xO2Zvcih2YXIgbz1uO288YTtvKyspdD10Pj4+OF5pWzI1NSYodF5lW29dKV07cmV0dXJuLTFedH0scHQ9ezI6Im5lZWQgZGljdGlvbmFyeSIsMToic3RyZWFtIGVuZCIsMDoiIiwiLTEiOiJmaWxlIGVycm9yIiwiLTIiOiJzdHJlYW0gZXJyb3IiLCItMyI6ImRhdGEgZXJyb3IiLCItNCI6Imluc3VmZmljaWVudCBtZW1vcnkiLCItNSI6ImJ1ZmZlciBlcnJvciIsIi02IjoiaW5jb21wYXRpYmxlIHZlcnNpb24ifSxndD17Wl9OT19GTFVTSDowLFpfUEFSVElBTF9GTFVTSDoxLFpfU1lOQ19GTFVTSDoyLFpfRlVMTF9GTFVTSDozLFpfRklOSVNIOjQsWl9CTE9DSzo1LFpfVFJFRVM6NixaX09LOjAsWl9TVFJFQU1fRU5EOjEsWl9ORUVEX0RJQ1Q6MixaX0VSUk5POi0xLFpfU1RSRUFNX0VSUk9SOi0yLFpfREFUQV9FUlJPUjotMyxaX01FTV9FUlJPUjotNCxaX0JVRl9FUlJPUjotNSxaX05PX0NPTVBSRVNTSU9OOjAsWl9CRVNUX1NQRUVEOjEsWl9CRVNUX0NPTVBSRVNTSU9OOjksWl9ERUZBVUxUX0NPTVBSRVNTSU9OOi0xLFpfRklMVEVSRUQ6MSxaX0hVRkZNQU5fT05MWToyLFpfUkxFOjMsWl9GSVhFRDo0LFpfREVGQVVMVF9TVFJBVEVHWTowLFpfQklOQVJZOjAsWl9URVhUOjEsWl9VTktOT1dOOjIsWl9ERUZMQVRFRDo4fSx2dD11dC5fdHJfaW5pdCx5dD11dC5fdHJfc3RvcmVkX2Jsb2NrLHd0PXV0Ll90cl9mbHVzaF9ibG9jayxtdD11dC5fdHJfdGFsbHksYnQ9dXQuX3RyX2FsaWduLHh0PWd0LlpfTk9fRkxVU0gsa3Q9Z3QuWl9QQVJUSUFMX0ZMVVNILHp0PWd0LlpfRlVMTF9GTFVTSCxBdD1ndC5aX0ZJTklTSCxFdD1ndC5aX0JMT0NLLFN0PWd0LlpfT0ssQnQ9Z3QuWl9TVFJFQU1fRU5ELFJ0PWd0LlpfU1RSRUFNX0VSUk9SLER0PWd0LlpfREFUQV9FUlJPUixMdD1ndC5aX0JVRl9FUlJPUixVdD1ndC5aX0RFRkFVTFRfQ09NUFJFU1NJT04sT3Q9Z3QuWl9GSUxURVJFRCxDdD1ndC5aX0hVRkZNQU5fT05MWSxUdD1ndC5aX1JMRSxGdD1ndC5aX0ZJWEVELEh0PWd0LlpfREVGQVVMVF9TVFJBVEVHWSxadD1ndC5aX1VOS05PV04sTXQ9Z3QuWl9ERUZMQVRFRCxJdD05LE50PTE1LFB0PTgsanQ9Mjg2LEt0PTMwLFh0PTE5LHF0PTIqanQrMSxHdD0xNSxXdD0zLFl0PTI1OCxWdD1ZdCtXdCsxLCR0PTMyLFF0PTQyLEp0PTY5LHRlPTczLGVlPTkxLHJlPTEwMyxuZT0xMTMsaWU9NjY2LGFlPTEsb2U9MixzZT0zLGNlPTQsaGU9MyxsZT1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1zZz1wdFtlXSxlfSx1ZT1mdW5jdGlvbih0KXtyZXR1cm4odDw8MSktKHQ+ND85OjApfSxmZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5sZW5ndGg7LS1lPj0wOyl0W2VdPTB9LGRlPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4oZTw8dC5oYXNoX3NoaWZ0XnIpJnQuaGFzaF9tYXNrfSxfZT1mdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLHI9ZS5wZW5kaW5nO3I+dC5hdmFpbF9vdXQmJihyPXQuYXZhaWxfb3V0KSwwIT09ciYmKHQub3V0cHV0LnNldChlLnBlbmRpbmdfYnVmLnN1YmFycmF5KGUucGVuZGluZ19vdXQsZS5wZW5kaW5nX291dCtyKSx0Lm5leHRfb3V0KSx0Lm5leHRfb3V0Kz1yLGUucGVuZGluZ19vdXQrPXIsdC50b3RhbF9vdXQrPXIsdC5hdmFpbF9vdXQtPXIsZS5wZW5kaW5nLT1yLDA9PT1lLnBlbmRpbmcmJihlLnBlbmRpbmdfb3V0PTApKX0scGU9ZnVuY3Rpb24odCxlKXt3dCh0LHQuYmxvY2tfc3RhcnQ+PTA/dC5ibG9ja19zdGFydDotMSx0LnN0cnN0YXJ0LXQuYmxvY2tfc3RhcnQsZSksdC5ibG9ja19zdGFydD10LnN0cnN0YXJ0LF9lKHQuc3RybSl9LGdlPWZ1bmN0aW9uKHQsZSl7dC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109ZX0sdmU9ZnVuY3Rpb24odCxlKXt0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT1lPj4+OCYyNTUsdC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109MjU1JmV9LHllPWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBpPXQuYXZhaWxfaW47cmV0dXJuIGk+biYmKGk9biksMD09PWk/MDoodC5hdmFpbF9pbi09aSxlLnNldCh0LmlucHV0LnN1YmFycmF5KHQubmV4dF9pbix0Lm5leHRfaW4raSksciksMT09PXQuc3RhdGUud3JhcD90LmFkbGVyPWZ0KHQuYWRsZXIsZSxpLHIpOjI9PT10LnN0YXRlLndyYXAmJih0LmFkbGVyPV90KHQuYWRsZXIsZSxpLHIpKSx0Lm5leHRfaW4rPWksdC50b3RhbF9pbis9aSxpKX0sd2U9ZnVuY3Rpb24odCxlKXt2YXIgcixuLGk9dC5tYXhfY2hhaW5fbGVuZ3RoLGE9dC5zdHJzdGFydCxvPXQucHJldl9sZW5ndGgscz10Lm5pY2VfbWF0Y2gsYz10LnN0cnN0YXJ0PnQud19zaXplLVZ0P3Quc3Ryc3RhcnQtKHQud19zaXplLVZ0KTowLGg9dC53aW5kb3csbD10LndfbWFzayx1PXQucHJldixmPXQuc3Ryc3RhcnQrWXQsZD1oW2Erby0xXSxfPWhbYStvXTt0LnByZXZfbGVuZ3RoPj10Lmdvb2RfbWF0Y2gmJihpPj49Mikscz50Lmxvb2thaGVhZCYmKHM9dC5sb29rYWhlYWQpO2Rve2lmKGhbKHI9ZSkrb109PT1fJiZoW3Irby0xXT09PWQmJmhbcl09PT1oW2FdJiZoWysrcl09PT1oW2ErMV0pe2ErPTIscisrO2Rve313aGlsZShoWysrYV09PT1oWysrcl0mJmhbKythXT09PWhbKytyXSYmaFsrK2FdPT09aFsrK3JdJiZoWysrYV09PT1oWysrcl0mJmhbKythXT09PWhbKytyXSYmaFsrK2FdPT09aFsrK3JdJiZoWysrYV09PT1oWysrcl0mJmhbKythXT09PWhbKytyXSYmYTxmKTtpZihuPVl0LShmLWEpLGE9Zi1ZdCxuPm8pe2lmKHQubWF0Y2hfc3RhcnQ9ZSxvPW4sbj49cylicmVhaztkPWhbYStvLTFdLF89aFthK29dfX19d2hpbGUoKGU9dVtlJmxdKT5jJiYwIT0tLWkpO3JldHVybiBvPD10Lmxvb2thaGVhZD9vOnQubG9va2FoZWFkfSxtZT1mdW5jdGlvbih0KXt2YXIgZSxyLG4saSxhLG89dC53X3NpemU7ZG97aWYoaT10LndpbmRvd19zaXplLXQubG9va2FoZWFkLXQuc3Ryc3RhcnQsdC5zdHJzdGFydD49bysoby1WdCkpe3Qud2luZG93LnNldCh0LndpbmRvdy5zdWJhcnJheShvLG8rbyksMCksdC5tYXRjaF9zdGFydC09byx0LnN0cnN0YXJ0LT1vLHQuYmxvY2tfc3RhcnQtPW8sZT1yPXQuaGFzaF9zaXplO2Rve249dC5oZWFkWy0tZV0sdC5oZWFkW2VdPW4+PW8/bi1vOjB9d2hpbGUoLS1yKTtlPXI9bztkb3tuPXQucHJldlstLWVdLHQucHJldltlXT1uPj1vP24tbzowfXdoaWxlKC0tcik7aSs9b31pZigwPT09dC5zdHJtLmF2YWlsX2luKWJyZWFrO2lmKHI9eWUodC5zdHJtLHQud2luZG93LHQuc3Ryc3RhcnQrdC5sb29rYWhlYWQsaSksdC5sb29rYWhlYWQrPXIsdC5sb29rYWhlYWQrdC5pbnNlcnQ+PVd0KWZvcihhPXQuc3Ryc3RhcnQtdC5pbnNlcnQsdC5pbnNfaD10LndpbmRvd1thXSx0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1thKzFdKTt0Lmluc2VydCYmKHQuaW5zX2g9ZGUodCx0Lmluc19oLHQud2luZG93W2ErV3QtMV0pLHQucHJldlthJnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPWEsYSsrLHQuaW5zZXJ0LS0sISh0Lmxvb2thaGVhZCt0Lmluc2VydDxXdCkpOyk7fXdoaWxlKHQubG9va2FoZWFkPFZ0JiYwIT09dC5zdHJtLmF2YWlsX2luKX0sYmU9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIsbjs7KXtpZih0Lmxvb2thaGVhZDxWdCl7aWYobWUodCksdC5sb29rYWhlYWQ8VnQmJmU9PT14dClyZXR1cm4gYWU7aWYoMD09PXQubG9va2FoZWFkKWJyZWFrfWlmKHI9MCx0Lmxvb2thaGVhZD49V3QmJih0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1t0LnN0cnN0YXJ0K1d0LTFdKSxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpLDAhPT1yJiZ0LnN0cnN0YXJ0LXI8PXQud19zaXplLVZ0JiYodC5tYXRjaF9sZW5ndGg9d2UodCxyKSksdC5tYXRjaF9sZW5ndGg+PVd0KWlmKG49bXQodCx0LnN0cnN0YXJ0LXQubWF0Y2hfc3RhcnQsdC5tYXRjaF9sZW5ndGgtV3QpLHQubG9va2FoZWFkLT10Lm1hdGNoX2xlbmd0aCx0Lm1hdGNoX2xlbmd0aDw9dC5tYXhfbGF6eV9tYXRjaCYmdC5sb29rYWhlYWQ+PVd0KXt0Lm1hdGNoX2xlbmd0aC0tO2Rve3Quc3Ryc3RhcnQrKyx0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1t0LnN0cnN0YXJ0K1d0LTFdKSxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnR9d2hpbGUoMCE9LS10Lm1hdGNoX2xlbmd0aCk7dC5zdHJzdGFydCsrfWVsc2UgdC5zdHJzdGFydCs9dC5tYXRjaF9sZW5ndGgsdC5tYXRjaF9sZW5ndGg9MCx0Lmluc19oPXQud2luZG93W3Quc3Ryc3RhcnRdLHQuaW5zX2g9ZGUodCx0Lmluc19oLHQud2luZG93W3Quc3Ryc3RhcnQrMV0pO2Vsc2Ugbj1tdCh0LDAsdC53aW5kb3dbdC5zdHJzdGFydF0pLHQubG9va2FoZWFkLS0sdC5zdHJzdGFydCsrO2lmKG4mJihwZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGFlfXJldHVybiB0Lmluc2VydD10LnN0cnN0YXJ0PFd0LTE/dC5zdHJzdGFydDpXdC0xLGU9PT1BdD8ocGUodCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/c2U6Y2UpOnQubGFzdF9saXQmJihwZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCk/YWU6b2V9LHhlPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByLG4saTs7KXtpZih0Lmxvb2thaGVhZDxWdCl7aWYobWUodCksdC5sb29rYWhlYWQ8VnQmJmU9PT14dClyZXR1cm4gYWU7aWYoMD09PXQubG9va2FoZWFkKWJyZWFrfWlmKHI9MCx0Lmxvb2thaGVhZD49V3QmJih0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1t0LnN0cnN0YXJ0K1d0LTFdKSxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpLHQucHJldl9sZW5ndGg9dC5tYXRjaF9sZW5ndGgsdC5wcmV2X21hdGNoPXQubWF0Y2hfc3RhcnQsdC5tYXRjaF9sZW5ndGg9V3QtMSwwIT09ciYmdC5wcmV2X2xlbmd0aDx0Lm1heF9sYXp5X21hdGNoJiZ0LnN0cnN0YXJ0LXI8PXQud19zaXplLVZ0JiYodC5tYXRjaF9sZW5ndGg9d2UodCxyKSx0Lm1hdGNoX2xlbmd0aDw9NSYmKHQuc3RyYXRlZ3k9PT1PdHx8dC5tYXRjaF9sZW5ndGg9PT1XdCYmdC5zdHJzdGFydC10Lm1hdGNoX3N0YXJ0PjQwOTYpJiYodC5tYXRjaF9sZW5ndGg9V3QtMSkpLHQucHJldl9sZW5ndGg+PVd0JiZ0Lm1hdGNoX2xlbmd0aDw9dC5wcmV2X2xlbmd0aCl7aT10LnN0cnN0YXJ0K3QubG9va2FoZWFkLVd0LG49bXQodCx0LnN0cnN0YXJ0LTEtdC5wcmV2X21hdGNoLHQucHJldl9sZW5ndGgtV3QpLHQubG9va2FoZWFkLT10LnByZXZfbGVuZ3RoLTEsdC5wcmV2X2xlbmd0aC09Mjtkb3srK3Quc3Ryc3RhcnQ8PWkmJih0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1t0LnN0cnN0YXJ0K1d0LTFdKSxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpfXdoaWxlKDAhPS0tdC5wcmV2X2xlbmd0aCk7aWYodC5tYXRjaF9hdmFpbGFibGU9MCx0Lm1hdGNoX2xlbmd0aD1XdC0xLHQuc3Ryc3RhcnQrKyxuJiYocGUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBhZX1lbHNlIGlmKHQubWF0Y2hfYXZhaWxhYmxlKXtpZigobj1tdCh0LDAsdC53aW5kb3dbdC5zdHJzdGFydC0xXSkpJiZwZSh0LCExKSx0LnN0cnN0YXJ0KyssdC5sb29rYWhlYWQtLSwwPT09dC5zdHJtLmF2YWlsX291dClyZXR1cm4gYWV9ZWxzZSB0Lm1hdGNoX2F2YWlsYWJsZT0xLHQuc3Ryc3RhcnQrKyx0Lmxvb2thaGVhZC0tfXJldHVybiB0Lm1hdGNoX2F2YWlsYWJsZSYmKG49bXQodCwwLHQud2luZG93W3Quc3Ryc3RhcnQtMV0pLHQubWF0Y2hfYXZhaWxhYmxlPTApLHQuaW5zZXJ0PXQuc3Ryc3RhcnQ8V3QtMT90LnN0cnN0YXJ0Old0LTEsZT09PUF0PyhwZSh0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9zZTpjZSk6dC5sYXN0X2xpdCYmKHBlKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9hZTpvZX0sa2U9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIsbixpLGEsbz10LndpbmRvdzs7KXtpZih0Lmxvb2thaGVhZDw9WXQpe2lmKG1lKHQpLHQubG9va2FoZWFkPD1ZdCYmZT09PXh0KXJldHVybiBhZTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCx0Lmxvb2thaGVhZD49V3QmJnQuc3Ryc3RhcnQ+MCYmKG49b1tpPXQuc3Ryc3RhcnQtMV0pPT09b1srK2ldJiZuPT09b1srK2ldJiZuPT09b1srK2ldKXthPXQuc3Ryc3RhcnQrWXQ7ZG97fXdoaWxlKG49PT1vWysraV0mJm49PT1vWysraV0mJm49PT1vWysraV0mJm49PT1vWysraV0mJm49PT1vWysraV0mJm49PT1vWysraV0mJm49PT1vWysraV0mJm49PT1vWysraV0mJmk8YSk7dC5tYXRjaF9sZW5ndGg9WXQtKGEtaSksdC5tYXRjaF9sZW5ndGg+dC5sb29rYWhlYWQmJih0Lm1hdGNoX2xlbmd0aD10Lmxvb2thaGVhZCl9aWYodC5tYXRjaF9sZW5ndGg+PVd0PyhyPW10KHQsMSx0Lm1hdGNoX2xlbmd0aC1XdCksdC5sb29rYWhlYWQtPXQubWF0Y2hfbGVuZ3RoLHQuc3Ryc3RhcnQrPXQubWF0Y2hfbGVuZ3RoLHQubWF0Y2hfbGVuZ3RoPTApOihyPW10KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0XSksdC5sb29rYWhlYWQtLSx0LnN0cnN0YXJ0KyspLHImJihwZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGFlfXJldHVybiB0Lmluc2VydD0wLGU9PT1BdD8ocGUodCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/c2U6Y2UpOnQubGFzdF9saXQmJihwZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCk/YWU6b2V9LHplPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByOzspe2lmKDA9PT10Lmxvb2thaGVhZCYmKG1lKHQpLDA9PT10Lmxvb2thaGVhZCkpe2lmKGU9PT14dClyZXR1cm4gYWU7YnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCxyPW10KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0XSksdC5sb29rYWhlYWQtLSx0LnN0cnN0YXJ0KyssciYmKHBlKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gYWV9cmV0dXJuIHQuaW5zZXJ0PTAsZT09PUF0PyhwZSh0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9zZTpjZSk6dC5sYXN0X2xpdCYmKHBlKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KT9hZTpvZX07ZnVuY3Rpb24gQWUodCxlLHIsbixpKXt0aGlzLmdvb2RfbGVuZ3RoPXQsdGhpcy5tYXhfbGF6eT1lLHRoaXMubmljZV9sZW5ndGg9cix0aGlzLm1heF9jaGFpbj1uLHRoaXMuZnVuYz1pfXZhciBFZT1bbmV3IEFlKDAsMCwwLDAsKGZ1bmN0aW9uKHQsZSl7dmFyIHI9NjU1MzU7Zm9yKHI+dC5wZW5kaW5nX2J1Zl9zaXplLTUmJihyPXQucGVuZGluZ19idWZfc2l6ZS01KTs7KXtpZih0Lmxvb2thaGVhZDw9MSl7aWYobWUodCksMD09PXQubG9va2FoZWFkJiZlPT09eHQpcmV0dXJuIGFlO2lmKDA9PT10Lmxvb2thaGVhZClicmVha310LnN0cnN0YXJ0Kz10Lmxvb2thaGVhZCx0Lmxvb2thaGVhZD0wO3ZhciBuPXQuYmxvY2tfc3RhcnQrcjtpZigoMD09PXQuc3Ryc3RhcnR8fHQuc3Ryc3RhcnQ+PW4pJiYodC5sb29rYWhlYWQ9dC5zdHJzdGFydC1uLHQuc3Ryc3RhcnQ9bixwZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGFlO2lmKHQuc3Ryc3RhcnQtdC5ibG9ja19zdGFydD49dC53X3NpemUtVnQmJihwZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGFlfXJldHVybiB0Lmluc2VydD0wLGU9PT1BdD8ocGUodCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/c2U6Y2UpOih0LnN0cnN0YXJ0PnQuYmxvY2tfc3RhcnQmJihwZSh0LCExKSx0LnN0cm0uYXZhaWxfb3V0KSxhZSl9KSksbmV3IEFlKDQsNCw4LDQsYmUpLG5ldyBBZSg0LDUsMTYsOCxiZSksbmV3IEFlKDQsNiwzMiwzMixiZSksbmV3IEFlKDQsNCwxNiwxNix4ZSksbmV3IEFlKDgsMTYsMzIsMzIseGUpLG5ldyBBZSg4LDE2LDEyOCwxMjgseGUpLG5ldyBBZSg4LDMyLDEyOCwyNTYseGUpLG5ldyBBZSgzMiwxMjgsMjU4LDEwMjQseGUpLG5ldyBBZSgzMiwyNTgsMjU4LDQwOTYseGUpXSxTZT1mdW5jdGlvbih0KXt0LndpbmRvd19zaXplPTIqdC53X3NpemUsZmUodC5oZWFkKSx0Lm1heF9sYXp5X21hdGNoPUVlW3QubGV2ZWxdLm1heF9sYXp5LHQuZ29vZF9tYXRjaD1FZVt0LmxldmVsXS5nb29kX2xlbmd0aCx0Lm5pY2VfbWF0Y2g9RWVbdC5sZXZlbF0ubmljZV9sZW5ndGgsdC5tYXhfY2hhaW5fbGVuZ3RoPUVlW3QubGV2ZWxdLm1heF9jaGFpbix0LnN0cnN0YXJ0PTAsdC5ibG9ja19zdGFydD0wLHQubG9va2FoZWFkPTAsdC5pbnNlcnQ9MCx0Lm1hdGNoX2xlbmd0aD10LnByZXZfbGVuZ3RoPVd0LTEsdC5tYXRjaF9hdmFpbGFibGU9MCx0Lmluc19oPTB9O2Z1bmN0aW9uIEJlKCl7dGhpcy5zdHJtPW51bGwsdGhpcy5zdGF0dXM9MCx0aGlzLnBlbmRpbmdfYnVmPW51bGwsdGhpcy5wZW5kaW5nX2J1Zl9zaXplPTAsdGhpcy5wZW5kaW5nX291dD0wLHRoaXMucGVuZGluZz0wLHRoaXMud3JhcD0wLHRoaXMuZ3poZWFkPW51bGwsdGhpcy5nemluZGV4PTAsdGhpcy5tZXRob2Q9TXQsdGhpcy5sYXN0X2ZsdXNoPS0xLHRoaXMud19zaXplPTAsdGhpcy53X2JpdHM9MCx0aGlzLndfbWFzaz0wLHRoaXMud2luZG93PW51bGwsdGhpcy53aW5kb3dfc2l6ZT0wLHRoaXMucHJldj1udWxsLHRoaXMuaGVhZD1udWxsLHRoaXMuaW5zX2g9MCx0aGlzLmhhc2hfc2l6ZT0wLHRoaXMuaGFzaF9iaXRzPTAsdGhpcy5oYXNoX21hc2s9MCx0aGlzLmhhc2hfc2hpZnQ9MCx0aGlzLmJsb2NrX3N0YXJ0PTAsdGhpcy5tYXRjaF9sZW5ndGg9MCx0aGlzLnByZXZfbWF0Y2g9MCx0aGlzLm1hdGNoX2F2YWlsYWJsZT0wLHRoaXMuc3Ryc3RhcnQ9MCx0aGlzLm1hdGNoX3N0YXJ0PTAsdGhpcy5sb29rYWhlYWQ9MCx0aGlzLnByZXZfbGVuZ3RoPTAsdGhpcy5tYXhfY2hhaW5fbGVuZ3RoPTAsdGhpcy5tYXhfbGF6eV9tYXRjaD0wLHRoaXMubGV2ZWw9MCx0aGlzLnN0cmF0ZWd5PTAsdGhpcy5nb29kX21hdGNoPTAsdGhpcy5uaWNlX21hdGNoPTAsdGhpcy5keW5fbHRyZWU9bmV3IFVpbnQxNkFycmF5KDIqcXQpLHRoaXMuZHluX2R0cmVlPW5ldyBVaW50MTZBcnJheSgyKigyKkt0KzEpKSx0aGlzLmJsX3RyZWU9bmV3IFVpbnQxNkFycmF5KDIqKDIqWHQrMSkpLGZlKHRoaXMuZHluX2x0cmVlKSxmZSh0aGlzLmR5bl9kdHJlZSksZmUodGhpcy5ibF90cmVlKSx0aGlzLmxfZGVzYz1udWxsLHRoaXMuZF9kZXNjPW51bGwsdGhpcy5ibF9kZXNjPW51bGwsdGhpcy5ibF9jb3VudD1uZXcgVWludDE2QXJyYXkoR3QrMSksdGhpcy5oZWFwPW5ldyBVaW50MTZBcnJheSgyKmp0KzEpLGZlKHRoaXMuaGVhcCksdGhpcy5oZWFwX2xlbj0wLHRoaXMuaGVhcF9tYXg9MCx0aGlzLmRlcHRoPW5ldyBVaW50MTZBcnJheSgyKmp0KzEpLGZlKHRoaXMuZGVwdGgpLHRoaXMubF9idWY9MCx0aGlzLmxpdF9idWZzaXplPTAsdGhpcy5sYXN0X2xpdD0wLHRoaXMuZF9idWY9MCx0aGlzLm9wdF9sZW49MCx0aGlzLnN0YXRpY19sZW49MCx0aGlzLm1hdGNoZXM9MCx0aGlzLmluc2VydD0wLHRoaXMuYmlfYnVmPTAsdGhpcy5iaV92YWxpZD0wfXZhciBSZT1mdW5jdGlvbih0KXtpZighdHx8IXQuc3RhdGUpcmV0dXJuIGxlKHQsUnQpO3QudG90YWxfaW49dC50b3RhbF9vdXQ9MCx0LmRhdGFfdHlwZT1adDt2YXIgZT10LnN0YXRlO3JldHVybiBlLnBlbmRpbmc9MCxlLnBlbmRpbmdfb3V0PTAsZS53cmFwPDAmJihlLndyYXA9LWUud3JhcCksZS5zdGF0dXM9ZS53cmFwP1F0Om5lLHQuYWRsZXI9Mj09PWUud3JhcD8wOjEsZS5sYXN0X2ZsdXNoPXh0LHZ0KGUpLFN0fSxEZT1mdW5jdGlvbih0KXt2YXIgZT1SZSh0KTtyZXR1cm4gZT09PVN0JiZTZSh0LnN0YXRlKSxlfSxMZT1mdW5jdGlvbih0LGUscixuLGksYSl7aWYoIXQpcmV0dXJuIFJ0O3ZhciBvPTE7aWYoZT09PVV0JiYoZT02KSxuPDA/KG89MCxuPS1uKTpuPjE1JiYobz0yLG4tPTE2KSxpPDF8fGk+SXR8fHIhPT1NdHx8bjw4fHxuPjE1fHxlPDB8fGU+OXx8YTwwfHxhPkZ0KXJldHVybiBsZSh0LFJ0KTs4PT09biYmKG49OSk7dmFyIHM9bmV3IEJlO3JldHVybiB0LnN0YXRlPXMscy5zdHJtPXQscy53cmFwPW8scy5nemhlYWQ9bnVsbCxzLndfYml0cz1uLHMud19zaXplPTE8PHMud19iaXRzLHMud19tYXNrPXMud19zaXplLTEscy5oYXNoX2JpdHM9aSs3LHMuaGFzaF9zaXplPTE8PHMuaGFzaF9iaXRzLHMuaGFzaF9tYXNrPXMuaGFzaF9zaXplLTEscy5oYXNoX3NoaWZ0PX5+KChzLmhhc2hfYml0cytXdC0xKS9XdCkscy53aW5kb3c9bmV3IFVpbnQ4QXJyYXkoMipzLndfc2l6ZSkscy5oZWFkPW5ldyBVaW50MTZBcnJheShzLmhhc2hfc2l6ZSkscy5wcmV2PW5ldyBVaW50MTZBcnJheShzLndfc2l6ZSkscy5saXRfYnVmc2l6ZT0xPDxpKzYscy5wZW5kaW5nX2J1Zl9zaXplPTQqcy5saXRfYnVmc2l6ZSxzLnBlbmRpbmdfYnVmPW5ldyBVaW50OEFycmF5KHMucGVuZGluZ19idWZfc2l6ZSkscy5kX2J1Zj0xKnMubGl0X2J1ZnNpemUscy5sX2J1Zj0zKnMubGl0X2J1ZnNpemUscy5sZXZlbD1lLHMuc3RyYXRlZ3k9YSxzLm1ldGhvZD1yLERlKHQpfSxVZT17ZGVmbGF0ZUluaXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gTGUodCxlLE10LE50LFB0LEh0KX0sZGVmbGF0ZUluaXQyOkxlLGRlZmxhdGVSZXNldDpEZSxkZWZsYXRlUmVzZXRLZWVwOlJlLGRlZmxhdGVTZXRIZWFkZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmdC5zdGF0ZT8yIT09dC5zdGF0ZS53cmFwP1J0Oih0LnN0YXRlLmd6aGVhZD1lLFN0KTpSdH0sZGVmbGF0ZTpmdW5jdGlvbih0LGUpe3ZhciByLG47aWYoIXR8fCF0LnN0YXRlfHxlPkV0fHxlPDApcmV0dXJuIHQ/bGUodCxSdCk6UnQ7dmFyIGk9dC5zdGF0ZTtpZighdC5vdXRwdXR8fCF0LmlucHV0JiYwIT09dC5hdmFpbF9pbnx8aS5zdGF0dXM9PT1pZSYmZSE9PUF0KXJldHVybiBsZSh0LDA9PT10LmF2YWlsX291dD9MdDpSdCk7aS5zdHJtPXQ7dmFyIGE9aS5sYXN0X2ZsdXNoO2lmKGkubGFzdF9mbHVzaD1lLGkuc3RhdHVzPT09UXQpaWYoMj09PWkud3JhcCl0LmFkbGVyPTAsZ2UoaSwzMSksZ2UoaSwxMzkpLGdlKGksOCksaS5nemhlYWQ/KGdlKGksKGkuZ3poZWFkLnRleHQ/MTowKSsoaS5nemhlYWQuaGNyYz8yOjApKyhpLmd6aGVhZC5leHRyYT80OjApKyhpLmd6aGVhZC5uYW1lPzg6MCkrKGkuZ3poZWFkLmNvbW1lbnQ/MTY6MCkpLGdlKGksMjU1JmkuZ3poZWFkLnRpbWUpLGdlKGksaS5nemhlYWQudGltZT4+OCYyNTUpLGdlKGksaS5nemhlYWQudGltZT4+MTYmMjU1KSxnZShpLGkuZ3poZWFkLnRpbWU+PjI0JjI1NSksZ2UoaSw5PT09aS5sZXZlbD8yOmkuc3RyYXRlZ3k+PUN0fHxpLmxldmVsPDI/NDowKSxnZShpLDI1NSZpLmd6aGVhZC5vcyksaS5nemhlYWQuZXh0cmEmJmkuZ3poZWFkLmV4dHJhLmxlbmd0aCYmKGdlKGksMjU1JmkuZ3poZWFkLmV4dHJhLmxlbmd0aCksZ2UoaSxpLmd6aGVhZC5leHRyYS5sZW5ndGg+PjgmMjU1KSksaS5nemhlYWQuaGNyYyYmKHQuYWRsZXI9X3QodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZywwKSksaS5nemluZGV4PTAsaS5zdGF0dXM9SnQpOihnZShpLDApLGdlKGksMCksZ2UoaSwwKSxnZShpLDApLGdlKGksMCksZ2UoaSw5PT09aS5sZXZlbD8yOmkuc3RyYXRlZ3k+PUN0fHxpLmxldmVsPDI/NDowKSxnZShpLGhlKSxpLnN0YXR1cz1uZSk7ZWxzZXt2YXIgbz1NdCsoaS53X2JpdHMtODw8NCk8PDg7b3w9KGkuc3RyYXRlZ3k+PUN0fHxpLmxldmVsPDI/MDppLmxldmVsPDY/MTo2PT09aS5sZXZlbD8yOjMpPDw2LDAhPT1pLnN0cnN0YXJ0JiYob3w9JHQpLG8rPTMxLW8lMzEsaS5zdGF0dXM9bmUsdmUoaSxvKSwwIT09aS5zdHJzdGFydCYmKHZlKGksdC5hZGxlcj4+PjE2KSx2ZShpLDY1NTM1JnQuYWRsZXIpKSx0LmFkbGVyPTF9aWYoaS5zdGF0dXM9PT1KdClpZihpLmd6aGVhZC5leHRyYSl7Zm9yKHI9aS5wZW5kaW5nO2kuZ3ppbmRleDwoNjU1MzUmaS5nemhlYWQuZXh0cmEubGVuZ3RoKSYmKGkucGVuZGluZyE9PWkucGVuZGluZ19idWZfc2l6ZXx8KGkuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5yJiYodC5hZGxlcj1fdCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLXIscikpLF9lKHQpLHI9aS5wZW5kaW5nLGkucGVuZGluZyE9PWkucGVuZGluZ19idWZfc2l6ZSkpOylnZShpLDI1NSZpLmd6aGVhZC5leHRyYVtpLmd6aW5kZXhdKSxpLmd6aW5kZXgrKztpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+ciYmKHQuYWRsZXI9X3QodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1yLHIpKSxpLmd6aW5kZXg9PT1pLmd6aGVhZC5leHRyYS5sZW5ndGgmJihpLmd6aW5kZXg9MCxpLnN0YXR1cz10ZSl9ZWxzZSBpLnN0YXR1cz10ZTtpZihpLnN0YXR1cz09PXRlKWlmKGkuZ3poZWFkLm5hbWUpe3I9aS5wZW5kaW5nO2Rve2lmKGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSYmKGkuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5yJiYodC5hZGxlcj1fdCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLXIscikpLF9lKHQpLHI9aS5wZW5kaW5nLGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSkpe249MTticmVha31uPWkuZ3ppbmRleDxpLmd6aGVhZC5uYW1lLmxlbmd0aD8yNTUmaS5nemhlYWQubmFtZS5jaGFyQ29kZUF0KGkuZ3ppbmRleCsrKTowLGdlKGksbil9d2hpbGUoMCE9PW4pO2kuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5yJiYodC5hZGxlcj1fdCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLXIscikpLDA9PT1uJiYoaS5nemluZGV4PTAsaS5zdGF0dXM9ZWUpfWVsc2UgaS5zdGF0dXM9ZWU7aWYoaS5zdGF0dXM9PT1lZSlpZihpLmd6aGVhZC5jb21tZW50KXtyPWkucGVuZGluZztkb3tpZihpLnBlbmRpbmc9PT1pLnBlbmRpbmdfYnVmX3NpemUmJihpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+ciYmKHQuYWRsZXI9X3QodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1yLHIpKSxfZSh0KSxyPWkucGVuZGluZyxpLnBlbmRpbmc9PT1pLnBlbmRpbmdfYnVmX3NpemUpKXtuPTE7YnJlYWt9bj1pLmd6aW5kZXg8aS5nemhlYWQuY29tbWVudC5sZW5ndGg/MjU1JmkuZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChpLmd6aW5kZXgrKyk6MCxnZShpLG4pfXdoaWxlKDAhPT1uKTtpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+ciYmKHQuYWRsZXI9X3QodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1yLHIpKSwwPT09biYmKGkuc3RhdHVzPXJlKX1lbHNlIGkuc3RhdHVzPXJlO2lmKGkuc3RhdHVzPT09cmUmJihpLmd6aGVhZC5oY3JjPyhpLnBlbmRpbmcrMj5pLnBlbmRpbmdfYnVmX3NpemUmJl9lKHQpLGkucGVuZGluZysyPD1pLnBlbmRpbmdfYnVmX3NpemUmJihnZShpLDI1NSZ0LmFkbGVyKSxnZShpLHQuYWRsZXI+PjgmMjU1KSx0LmFkbGVyPTAsaS5zdGF0dXM9bmUpKTppLnN0YXR1cz1uZSksMCE9PWkucGVuZGluZyl7aWYoX2UodCksMD09PXQuYXZhaWxfb3V0KXJldHVybiBpLmxhc3RfZmx1c2g9LTEsU3R9ZWxzZSBpZigwPT09dC5hdmFpbF9pbiYmdWUoZSk8PXVlKGEpJiZlIT09QXQpcmV0dXJuIGxlKHQsTHQpO2lmKGkuc3RhdHVzPT09aWUmJjAhPT10LmF2YWlsX2luKXJldHVybiBsZSh0LEx0KTtpZigwIT09dC5hdmFpbF9pbnx8MCE9PWkubG9va2FoZWFkfHxlIT09eHQmJmkuc3RhdHVzIT09aWUpe3ZhciBzPWkuc3RyYXRlZ3k9PT1DdD96ZShpLGUpOmkuc3RyYXRlZ3k9PT1UdD9rZShpLGUpOkVlW2kubGV2ZWxdLmZ1bmMoaSxlKTtpZihzIT09c2UmJnMhPT1jZXx8KGkuc3RhdHVzPWllKSxzPT09YWV8fHM9PT1zZSlyZXR1cm4gMD09PXQuYXZhaWxfb3V0JiYoaS5sYXN0X2ZsdXNoPS0xKSxTdDtpZihzPT09b2UmJihlPT09a3Q/YnQoaSk6ZSE9PUV0JiYoeXQoaSwwLDAsITEpLGU9PT16dCYmKGZlKGkuaGVhZCksMD09PWkubG9va2FoZWFkJiYoaS5zdHJzdGFydD0wLGkuYmxvY2tfc3RhcnQ9MCxpLmluc2VydD0wKSkpLF9lKHQpLDA9PT10LmF2YWlsX291dCkpcmV0dXJuIGkubGFzdF9mbHVzaD0tMSxTdH1yZXR1cm4gZSE9PUF0P1N0Omkud3JhcDw9MD9CdDooMj09PWkud3JhcD8oZ2UoaSwyNTUmdC5hZGxlciksZ2UoaSx0LmFkbGVyPj44JjI1NSksZ2UoaSx0LmFkbGVyPj4xNiYyNTUpLGdlKGksdC5hZGxlcj4+MjQmMjU1KSxnZShpLDI1NSZ0LnRvdGFsX2luKSxnZShpLHQudG90YWxfaW4+PjgmMjU1KSxnZShpLHQudG90YWxfaW4+PjE2JjI1NSksZ2UoaSx0LnRvdGFsX2luPj4yNCYyNTUpKToodmUoaSx0LmFkbGVyPj4+MTYpLHZlKGksNjU1MzUmdC5hZGxlcikpLF9lKHQpLGkud3JhcD4wJiYoaS53cmFwPS1pLndyYXApLDAhPT1pLnBlbmRpbmc/U3Q6QnQpfSxkZWZsYXRlRW5kOmZ1bmN0aW9uKHQpe2lmKCF0fHwhdC5zdGF0ZSlyZXR1cm4gUnQ7dmFyIGU9dC5zdGF0ZS5zdGF0dXM7cmV0dXJuIGUhPT1RdCYmZSE9PUp0JiZlIT09dGUmJmUhPT1lZSYmZSE9PXJlJiZlIT09bmUmJmUhPT1pZT9sZSh0LFJ0KToodC5zdGF0ZT1udWxsLGU9PT1uZT9sZSh0LER0KTpTdCl9LGRlZmxhdGVTZXREaWN0aW9uYXJ5OmZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS5sZW5ndGg7aWYoIXR8fCF0LnN0YXRlKXJldHVybiBSdDt2YXIgbj10LnN0YXRlLGk9bi53cmFwO2lmKDI9PT1pfHwxPT09aSYmbi5zdGF0dXMhPT1RdHx8bi5sb29rYWhlYWQpcmV0dXJuIFJ0O2lmKDE9PT1pJiYodC5hZGxlcj1mdCh0LmFkbGVyLGUsciwwKSksbi53cmFwPTAscj49bi53X3NpemUpezA9PT1pJiYoZmUobi5oZWFkKSxuLnN0cnN0YXJ0PTAsbi5ibG9ja19zdGFydD0wLG4uaW5zZXJ0PTApO3ZhciBhPW5ldyBVaW50OEFycmF5KG4ud19zaXplKTthLnNldChlLnN1YmFycmF5KHItbi53X3NpemUsciksMCksZT1hLHI9bi53X3NpemV9dmFyIG89dC5hdmFpbF9pbixzPXQubmV4dF9pbixjPXQuaW5wdXQ7Zm9yKHQuYXZhaWxfaW49cix0Lm5leHRfaW49MCx0LmlucHV0PWUsbWUobik7bi5sb29rYWhlYWQ+PVd0Oyl7dmFyIGg9bi5zdHJzdGFydCxsPW4ubG9va2FoZWFkLShXdC0xKTtkb3tuLmluc19oPWRlKG4sbi5pbnNfaCxuLndpbmRvd1toK1d0LTFdKSxuLnByZXZbaCZuLndfbWFza109bi5oZWFkW24uaW5zX2hdLG4uaGVhZFtuLmluc19oXT1oLGgrK313aGlsZSgtLWwpO24uc3Ryc3RhcnQ9aCxuLmxvb2thaGVhZD1XdC0xLG1lKG4pfXJldHVybiBuLnN0cnN0YXJ0Kz1uLmxvb2thaGVhZCxuLmJsb2NrX3N0YXJ0PW4uc3Ryc3RhcnQsbi5pbnNlcnQ9bi5sb29rYWhlYWQsbi5sb29rYWhlYWQ9MCxuLm1hdGNoX2xlbmd0aD1uLnByZXZfbGVuZ3RoPVd0LTEsbi5tYXRjaF9hdmFpbGFibGU9MCx0Lm5leHRfaW49cyx0LmlucHV0PWMsdC5hdmFpbF9pbj1vLG4ud3JhcD1pLFN0fSxkZWZsYXRlSW5mbzoicGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KSJ9LE9lPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxDZT1mdW5jdGlvbihlKXtmb3IodmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3IubGVuZ3RoOyl7dmFyIG49ci5zaGlmdCgpO2lmKG4pe2lmKCJvYmplY3QiIT09dChuKSl0aHJvdyBuZXcgVHlwZUVycm9yKG4rIm11c3QgYmUgbm9uLW9iamVjdCIpO2Zvcih2YXIgaSBpbiBuKU9lKG4saSkmJihlW2ldPW5baV0pfX1yZXR1cm4gZX0sVGU9e2Fzc2lnbjpDZSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLHI9MCxuPXQubGVuZ3RoO3I8bjtyKyspZSs9dFtyXS5sZW5ndGg7Zm9yKHZhciBpPW5ldyBVaW50OEFycmF5KGUpLGE9MCxvPTAscz10Lmxlbmd0aDthPHM7YSsrKXt2YXIgYz10W2FdO2kuc2V0KGMsbyksbys9Yy5sZW5ndGh9cmV0dXJuIGl9fSxGZT0hMDt0cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG5ldyBVaW50OEFycmF5KDEpKX1jYXRjaCh0KXtGZT0hMX1mb3IodmFyIEhlPW5ldyBVaW50OEFycmF5KDI1NiksWmU9MDtaZTwyNTY7WmUrKylIZVtaZV09WmU+PTI1Mj82OlplPj0yNDg/NTpaZT49MjQwPzQ6WmU+PTIyND8zOlplPj0xOTI/MjoxO0hlWzI1NF09SGVbMjU0XT0xO3ZhciBNZT1mdW5jdGlvbih0LGUpe2lmKGU8NjU1MzQmJnQuc3ViYXJyYXkmJkZlKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5sZW5ndGg9PT1lP3Q6dC5zdWJhcnJheSgwLGUpKTtmb3IodmFyIHI9IiIsbj0wO248ZTtuKyspcis9U3RyaW5nLmZyb21DaGFyQ29kZSh0W25dKTtyZXR1cm4gcn0sSWU9e3N0cmluZzJidWY6ZnVuY3Rpb24odCl7aWYoImZ1bmN0aW9uIj09dHlwZW9mIFRleHRFbmNvZGVyJiZUZXh0RW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlKXJldHVybihuZXcgVGV4dEVuY29kZXIpLmVuY29kZSh0KTt2YXIgZSxyLG4saSxhLG89dC5sZW5ndGgscz0wO2ZvcihpPTA7aTxvO2krKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChpKSkpJiZpKzE8byYmNTYzMjA9PSg2NDUxMiYobj10LmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLHMrPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKGU9bmV3IFVpbnQ4QXJyYXkocyksYT0wLGk9MDthPHM7aSsrKTU1Mjk2PT0oNjQ1MTImKHI9dC5jaGFyQ29kZUF0KGkpKSkmJmkrMTxvJiY1NjMyMD09KDY0NTEyJihuPXQuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykscjwxMjg/ZVthKytdPXI6cjwyMDQ4PyhlW2ErK109MTkyfHI+Pj42LGVbYSsrXT0xMjh8NjMmcik6cjw2NTUzNj8oZVthKytdPTIyNHxyPj4+MTIsZVthKytdPTEyOHxyPj4+NiY2MyxlW2ErK109MTI4fDYzJnIpOihlW2ErK109MjQwfHI+Pj4xOCxlW2ErK109MTI4fHI+Pj4xMiY2MyxlW2ErK109MTI4fHI+Pj42JjYzLGVbYSsrXT0xMjh8NjMmcik7cmV0dXJuIGV9LGJ1ZjJzdHJpbmc6ZnVuY3Rpb24odCxlKXt2YXIgcixuLGk9ZXx8dC5sZW5ndGg7aWYoImZ1bmN0aW9uIj09dHlwZW9mIFRleHREZWNvZGVyJiZUZXh0RGVjb2Rlci5wcm90b3R5cGUuZGVjb2RlKXJldHVybihuZXcgVGV4dERlY29kZXIpLmRlY29kZSh0LnN1YmFycmF5KDAsZSkpO3ZhciBhPW5ldyBBcnJheSgyKmkpO2ZvcihuPTAscj0wO3I8aTspe3ZhciBvPXRbcisrXTtpZihvPDEyOClhW24rK109bztlbHNle3ZhciBzPUhlW29dO2lmKHM+NClhW24rK109NjU1MzMscis9cy0xO2Vsc2V7Zm9yKG8mPTI9PT1zPzMxOjM9PT1zPzE1Ojc7cz4xJiZyPGk7KW89bzw8Nnw2MyZ0W3IrK10scy0tO3M+MT9hW24rK109NjU1MzM6bzw2NTUzNj9hW24rK109bzooby09NjU1MzYsYVtuKytdPTU1Mjk2fG8+PjEwJjEwMjMsYVtuKytdPTU2MzIwfDEwMjMmbyl9fX1yZXR1cm4gTWUoYSxuKX0sdXRmOGJvcmRlcjpmdW5jdGlvbih0LGUpeyhlPWV8fHQubGVuZ3RoKT50Lmxlbmd0aCYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgcj1lLTE7cj49MCYmMTI4PT0oMTkyJnRbcl0pOylyLS07cmV0dXJuIHI8MHx8MD09PXI/ZTpyK0hlW3Rbcl1dPmU/cjplfX07ZnVuY3Rpb24gTmUoKXt0aGlzLmlucHV0PW51bGwsdGhpcy5uZXh0X2luPTAsdGhpcy5hdmFpbF9pbj0wLHRoaXMudG90YWxfaW49MCx0aGlzLm91dHB1dD1udWxsLHRoaXMubmV4dF9vdXQ9MCx0aGlzLmF2YWlsX291dD0wLHRoaXMudG90YWxfb3V0PTAsdGhpcy5tc2c9IiIsdGhpcy5zdGF0ZT1udWxsLHRoaXMuZGF0YV90eXBlPTIsdGhpcy5hZGxlcj0wfXZhciBQZT1OZSxqZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLEtlPWd0LlpfTk9fRkxVU0gsWGU9Z3QuWl9TWU5DX0ZMVVNILHFlPWd0LlpfRlVMTF9GTFVTSCxHZT1ndC5aX0ZJTklTSCxXZT1ndC5aX09LLFllPWd0LlpfU1RSRUFNX0VORCxWZT1ndC5aX0RFRkFVTFRfQ09NUFJFU1NJT04sJGU9Z3QuWl9ERUZBVUxUX1NUUkFURUdZLFFlPWd0LlpfREVGTEFURUQ7ZnVuY3Rpb24gSmUodCl7dGhpcy5vcHRpb25zPVRlLmFzc2lnbih7bGV2ZWw6VmUsbWV0aG9kOlFlLGNodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjE1LG1lbUxldmVsOjgsc3RyYXRlZ3k6JGV9LHR8fHt9KTt2YXIgZT10aGlzLm9wdGlvbnM7ZS5yYXcmJmUud2luZG93Qml0cz4wP2Uud2luZG93Qml0cz0tZS53aW5kb3dCaXRzOmUuZ3ppcCYmZS53aW5kb3dCaXRzPjAmJmUud2luZG93Qml0czwxNiYmKGUud2luZG93Qml0cys9MTYpLHRoaXMuZXJyPTAsdGhpcy5tc2c9IiIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IFBlLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1VZS5kZWZsYXRlSW5pdDIodGhpcy5zdHJtLGUubGV2ZWwsZS5tZXRob2QsZS53aW5kb3dCaXRzLGUubWVtTGV2ZWwsZS5zdHJhdGVneSk7aWYociE9PVdlKXRocm93IG5ldyBFcnJvcihwdFtyXSk7aWYoZS5oZWFkZXImJlVlLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLGUuaGVhZGVyKSxlLmRpY3Rpb25hcnkpe3ZhciBuO2lmKG49InN0cmluZyI9PXR5cGVvZiBlLmRpY3Rpb25hcnk/SWUuc3RyaW5nMmJ1ZihlLmRpY3Rpb25hcnkpOiJbb2JqZWN0IEFycmF5QnVmZmVyXSI9PT1qZS5jYWxsKGUuZGljdGlvbmFyeSk/bmV3IFVpbnQ4QXJyYXkoZS5kaWN0aW9uYXJ5KTplLmRpY3Rpb25hcnksKHI9VWUuZGVmbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLG4pKSE9PVdlKXRocm93IG5ldyBFcnJvcihwdFtyXSk7dGhpcy5fZGljdF9zZXQ9ITB9fWZ1bmN0aW9uIHRyKHQsZSl7dmFyIHI9bmV3IEplKGUpO2lmKHIucHVzaCh0LCEwKSxyLmVycil0aHJvdyByLm1zZ3x8cHRbci5lcnJdO3JldHVybiByLnJlc3VsdH1mdW5jdGlvbiBlcih0LGUpe3JldHVybihlPWV8fHt9KS5yYXc9ITAsdHIodCxlKX1mdW5jdGlvbiBycih0LGUpe3JldHVybihlPWV8fHt9KS5nemlwPSEwLHRyKHQsZSl9SmUucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCxlKXt2YXIgcixuLGk9dGhpcy5zdHJtLGE9dGhpcy5vcHRpb25zLmNodW5rU2l6ZTtpZih0aGlzLmVuZGVkKXJldHVybiExO2ZvcihuPWU9PT1+fmU/ZTohMD09PWU/R2U6S2UsInN0cmluZyI9PXR5cGVvZiB0P2kuaW5wdXQ9SWUuc3RyaW5nMmJ1Zih0KToiW29iamVjdCBBcnJheUJ1ZmZlcl0iPT09amUuY2FsbCh0KT9pLmlucHV0PW5ldyBVaW50OEFycmF5KHQpOmkuaW5wdXQ9dCxpLm5leHRfaW49MCxpLmF2YWlsX2luPWkuaW5wdXQubGVuZ3RoOzspaWYoMD09PWkuYXZhaWxfb3V0JiYoaS5vdXRwdXQ9bmV3IFVpbnQ4QXJyYXkoYSksaS5uZXh0X291dD0wLGkuYXZhaWxfb3V0PWEpLChuPT09WGV8fG49PT1xZSkmJmkuYXZhaWxfb3V0PD02KXRoaXMub25EYXRhKGkub3V0cHV0LnN1YmFycmF5KDAsaS5uZXh0X291dCkpLGkuYXZhaWxfb3V0PTA7ZWxzZXtpZigocj1VZS5kZWZsYXRlKGksbikpPT09WWUpcmV0dXJuIGkubmV4dF9vdXQ+MCYmdGhpcy5vbkRhdGEoaS5vdXRwdXQuc3ViYXJyYXkoMCxpLm5leHRfb3V0KSkscj1VZS5kZWZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1XZTtpZigwIT09aS5hdmFpbF9vdXQpe2lmKG4+MCYmaS5uZXh0X291dD4wKXRoaXMub25EYXRhKGkub3V0cHV0LnN1YmFycmF5KDAsaS5uZXh0X291dCkpLGkuYXZhaWxfb3V0PTA7ZWxzZSBpZigwPT09aS5hdmFpbF9pbilicmVha31lbHNlIHRoaXMub25EYXRhKGkub3V0cHV0KX1yZXR1cm4hMH0sSmUucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNodW5rcy5wdXNoKHQpfSxKZS5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24odCl7dD09PVdlJiYodGhpcy5yZXN1bHQ9VGUuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPXQsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ307dmFyIG5yPUplLGlyPXRyLGFyPWVyLG9yPXJyLHNyPWd0LGNyPXtEZWZsYXRlOm5yLGRlZmxhdGU6aXIsZGVmbGF0ZVJhdzphcixnemlwOm9yLGNvbnN0YW50czpzcn07ZS5EZWZsYXRlPW5yLGUuY29uc3RhbnRzPXNyLGUuZGVmYXVsdD1jcixlLmRlZmxhdGU9aXIsZS5kZWZsYXRlUmF3PWFyLGUuZ3ppcD1vcixPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwiX19lc01vZHVsZSIse3ZhbHVlOiEwfSl9KShvLmV4cG9ydHMpO3ZhciBzLGM9e2V4cG9ydHM6e319LGg9e2V4cG9ydHM6e319O2guZXhwb3J0cz0ocz1zfHxmdW5jdGlvbih0LGUpe3ZhciByO2lmKCJ1bmRlZmluZWQiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuY3J5cHRvJiYocj13aW5kb3cuY3J5cHRvKSwidW5kZWZpbmVkIiE9dHlwZW9mIHNlbGYmJnNlbGYuY3J5cHRvJiYocj1zZWxmLmNyeXB0byksInVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWxUaGlzJiZnbG9iYWxUaGlzLmNyeXB0byYmKHI9Z2xvYmFsVGhpcy5jcnlwdG8pLCFyJiYidW5kZWZpbmVkIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm1zQ3J5cHRvJiYocj13aW5kb3cubXNDcnlwdG8pLCFyJiZ2b2lkIDAhPT1hJiZhLmNyeXB0byYmKHI9YS5jcnlwdG8pLCFyKXRyeXtyPXVuZGVmaW5lZH1jYXRjaCh0KXt9dmFyIG49ZnVuY3Rpb24oKXtpZihyKXtpZigiZnVuY3Rpb24iPT10eXBlb2Ygci5nZXRSYW5kb21WYWx1ZXMpdHJ5e3JldHVybiByLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdfWNhdGNoKHQpe31pZigiZnVuY3Rpb24iPT10eXBlb2Ygci5yYW5kb21CeXRlcyl0cnl7cmV0dXJuIHIucmFuZG9tQnl0ZXMoNCkucmVhZEludDMyTEUoKX1jYXRjaCh0KXt9fXRocm93IG5ldyBFcnJvcigiTmF0aXZlIGNyeXB0byBtb2R1bGUgY291bGQgbm90IGJlIHVzZWQgdG8gZ2V0IHNlY3VyZSByYW5kb20gbnVtYmVyLiIpfSxpPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI7cmV0dXJuIHQucHJvdG90eXBlPWUscj1uZXcgdCx0LnByb3RvdHlwZT1udWxsLHJ9fSgpLG89e30scz1vLmxpYj17fSxjPXMuQmFzZT17ZXh0ZW5kOmZ1bmN0aW9uKHQpe3ZhciBlPWkodGhpcyk7cmV0dXJuIHQmJmUubWl4SW4odCksZS5oYXNPd25Qcm9wZXJ0eSgiaW5pdCIpJiZ0aGlzLmluaXQhPT1lLmluaXR8fChlLmluaXQ9ZnVuY3Rpb24oKXtlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLGUuaW5pdC5wcm90b3R5cGU9ZSxlLiRzdXBlcj10aGlzLGV9LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZXh0ZW5kKCk7cmV0dXJuIHQuaW5pdC5hcHBseSh0LGFyZ3VtZW50cyksdH0saW5pdDpmdW5jdGlvbigpe30sbWl4SW46ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShlKSYmKHRoaXNbZV09dFtlXSk7dC5oYXNPd25Qcm9wZXJ0eSgidG9TdHJpbmciKSYmKHRoaXMudG9TdHJpbmc9dC50b1N0cmluZyl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpfX0saD1zLldvcmRBcnJheT1jLmV4dGVuZCh7aW5pdDpmdW5jdGlvbih0LHIpe3Q9dGhpcy53b3Jkcz10fHxbXSx0aGlzLnNpZ0J5dGVzPXIhPWU/cjo0KnQubGVuZ3RofSx0b1N0cmluZzpmdW5jdGlvbih0KXtyZXR1cm4odHx8dSkuc3RyaW5naWZ5KHRoaXMpfSxjb25jYXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy53b3JkcyxyPXQud29yZHMsbj10aGlzLnNpZ0J5dGVzLGk9dC5zaWdCeXRlcztpZih0aGlzLmNsYW1wKCksbiU0KWZvcih2YXIgYT0wO2E8aTthKyspe3ZhciBvPXJbYT4+PjJdPj4+MjQtYSU0KjgmMjU1O2VbbithPj4+Ml18PW88PDI0LShuK2EpJTQqOH1lbHNlIGZvcih2YXIgcz0wO3M8aTtzKz00KWVbbitzPj4+Ml09cltzPj4+Ml07cmV0dXJuIHRoaXMuc2lnQnl0ZXMrPWksdGhpc30sY2xhbXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLndvcmRzLHI9dGhpcy5zaWdCeXRlcztlW3I+Pj4yXSY9NDI5NDk2NzI5NTw8MzItciU0KjgsZS5sZW5ndGg9dC5jZWlsKHIvNCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIHQ9Yy5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiB0LndvcmRzPXRoaXMud29yZHMuc2xpY2UoMCksdH0scmFuZG9tOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxyPTA7cjx0O3IrPTQpZS5wdXNoKG4oKSk7cmV0dXJuIG5ldyBoLmluaXQoZSx0KX19KSxsPW8uZW5jPXt9LHU9bC5IZXg9e3N0cmluZ2lmeTpmdW5jdGlvbih0KXtmb3IodmFyIGU9dC53b3JkcyxyPXQuc2lnQnl0ZXMsbj1bXSxpPTA7aTxyO2krKyl7dmFyIGE9ZVtpPj4+Ml0+Pj4yNC1pJTQqOCYyNTU7bi5wdXNoKChhPj4+NCkudG9TdHJpbmcoMTYpKSxuLnB1c2goKDE1JmEpLnRvU3RyaW5nKDE2KSl9cmV0dXJuIG4uam9pbigiIil9LHBhcnNlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10Lmxlbmd0aCxyPVtdLG49MDtuPGU7bis9MilyW24+Pj4zXXw9cGFyc2VJbnQodC5zdWJzdHIobiwyKSwxNik8PDI0LW4lOCo0O3JldHVybiBuZXcgaC5pbml0KHIsZS8yKX19LGY9bC5MYXRpbjE9e3N0cmluZ2lmeTpmdW5jdGlvbih0KXtmb3IodmFyIGU9dC53b3JkcyxyPXQuc2lnQnl0ZXMsbj1bXSxpPTA7aTxyO2krKyl7dmFyIGE9ZVtpPj4+Ml0+Pj4yNC1pJTQqOCYyNTU7bi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYSkpfXJldHVybiBuLmpvaW4oIiIpfSxwYXJzZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5sZW5ndGgscj1bXSxuPTA7bjxlO24rKylyW24+Pj4yXXw9KDI1NSZ0LmNoYXJDb2RlQXQobikpPDwyNC1uJTQqODtyZXR1cm4gbmV3IGguaW5pdChyLGUpfX0sZD1sLlV0Zjg9e3N0cmluZ2lmeTpmdW5jdGlvbih0KXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoZi5zdHJpbmdpZnkodCkpKX1jYXRjaCh0KXt0aHJvdyBuZXcgRXJyb3IoIk1hbGZvcm1lZCBVVEYtOCBkYXRhIil9fSxwYXJzZTpmdW5jdGlvbih0KXtyZXR1cm4gZi5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodCkpKX19LF89cy5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtPWMuZXh0ZW5kKHtyZXNldDpmdW5jdGlvbigpe3RoaXMuX2RhdGE9bmV3IGguaW5pdCx0aGlzLl9uRGF0YUJ5dGVzPTB9LF9hcHBlbmQ6ZnVuY3Rpb24odCl7InN0cmluZyI9PXR5cGVvZiB0JiYodD1kLnBhcnNlKHQpKSx0aGlzLl9kYXRhLmNvbmNhdCh0KSx0aGlzLl9uRGF0YUJ5dGVzKz10LnNpZ0J5dGVzfSxfcHJvY2VzczpmdW5jdGlvbihlKXt2YXIgcixuPXRoaXMuX2RhdGEsaT1uLndvcmRzLGE9bi5zaWdCeXRlcyxvPXRoaXMuYmxvY2tTaXplLHM9YS8oNCpvKSxjPShzPWU/dC5jZWlsKHMpOnQubWF4KCgwfHMpLXRoaXMuX21pbkJ1ZmZlclNpemUsMCkpKm8sbD10Lm1pbig0KmMsYSk7aWYoYyl7Zm9yKHZhciB1PTA7dTxjO3UrPW8pdGhpcy5fZG9Qcm9jZXNzQmxvY2soaSx1KTtyPWkuc3BsaWNlKDAsYyksbi5zaWdCeXRlcy09bH1yZXR1cm4gbmV3IGguaW5pdChyLGwpfSxjbG9uZTpmdW5jdGlvbigpe3ZhciB0PWMuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gdC5fZGF0YT10aGlzLl9kYXRhLmNsb25lKCksdH0sX21pbkJ1ZmZlclNpemU6MH0pO3MuSGFzaGVyPV8uZXh0ZW5kKHtjZmc6Yy5leHRlbmQoKSxpbml0OmZ1bmN0aW9uKHQpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZCh0KSx0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7Xy5yZXNldC5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9hcHBlbmQodCksdGhpcy5fcHJvY2VzcygpLHRoaXN9LGZpbmFsaXplOmZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0aGlzLl9hcHBlbmQodCksdGhpcy5fZG9GaW5hbGl6ZSgpfSxibG9ja1NpemU6MTYsX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gbmV3IHQuaW5pdChyKS5maW5hbGl6ZShlKX19LF9jcmVhdGVIbWFjSGVscGVyOmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBuZXcgcC5ITUFDLmluaXQodCxyKS5maW5hbGl6ZShlKX19fSk7dmFyIHA9by5hbGdvPXt9O3JldHVybiBvfShNYXRoKSxzKSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10LHI9ZS5saWIuV29yZEFycmF5O2Z1bmN0aW9uIG4odCxlLG4pe2Zvcih2YXIgaT1bXSxhPTAsbz0wO288ZTtvKyspaWYobyU0KXt2YXIgcz1uW3QuY2hhckNvZGVBdChvLTEpXTw8byU0KjJ8blt0LmNoYXJDb2RlQXQobyldPj4+Ni1vJTQqMjtpW2E+Pj4yXXw9czw8MjQtYSU0KjgsYSsrfXJldHVybiByLmNyZWF0ZShpLGEpfWUuZW5jLkJhc2U2ND17c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe3ZhciBlPXQud29yZHMscj10LnNpZ0J5dGVzLG49dGhpcy5fbWFwO3QuY2xhbXAoKTtmb3IodmFyIGk9W10sYT0wO2E8cjthKz0zKWZvcih2YXIgbz0oZVthPj4+Ml0+Pj4yNC1hJTQqOCYyNTUpPDwxNnwoZVthKzE+Pj4yXT4+PjI0LShhKzEpJTQqOCYyNTUpPDw4fGVbYSsyPj4+Ml0+Pj4yNC0oYSsyKSU0KjgmMjU1LHM9MDtzPDQmJmErLjc1KnM8cjtzKyspaS5wdXNoKG4uY2hhckF0KG8+Pj42KigzLXMpJjYzKSk7dmFyIGM9bi5jaGFyQXQoNjQpO2lmKGMpZm9yKDtpLmxlbmd0aCU0OylpLnB1c2goYyk7cmV0dXJuIGkuam9pbigiIil9LHBhcnNlOmZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoLHI9dGhpcy5fbWFwLGk9dGhpcy5fcmV2ZXJzZU1hcDtpZighaSl7aT10aGlzLl9yZXZlcnNlTWFwPVtdO2Zvcih2YXIgYT0wO2E8ci5sZW5ndGg7YSsrKWlbci5jaGFyQ29kZUF0KGEpXT1hfXZhciBvPXIuY2hhckF0KDY0KTtpZihvKXt2YXIgcz10LmluZGV4T2Yobyk7LTEhPT1zJiYoZT1zKX1yZXR1cm4gbih0LGUsaSl9LF9tYXA6IkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89In19KCksdC5lbmMuQmFzZTY0fShoLmV4cG9ydHMpfShjKTt2YXIgbD1jLmV4cG9ydHMsdT17ZXhwb3J0czp7fX0sZj17ZXhwb3J0czp7fX07IWZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj10LG49ci5saWIsaT1uLldvcmRBcnJheSxhPW4uSGFzaGVyLG89ci5hbGdvLHM9W107IWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDw2NDt0Kyspc1t0XT00Mjk0OTY3Mjk2KmUuYWJzKGUuc2luKHQrMSkpfDB9KCk7dmFyIGM9by5NRDU9YS5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5faGFzaD1uZXcgaS5pbml0KFsxNzMyNTg0MTkzLDQwMjMyMzM0MTcsMjU2MjM4MzEwMiwyNzE3MzM4NzhdKX0sX2RvUHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPTA7cjwxNjtyKyspe3ZhciBuPWUrcixpPXRbbl07dFtuXT0xNjcxMTkzNSYoaTw8OHxpPj4+MjQpfDQyNzgyNTUzNjAmKGk8PDI0fGk+Pj44KX12YXIgYT10aGlzLl9oYXNoLndvcmRzLG89dFtlKzBdLGM9dFtlKzFdLGQ9dFtlKzJdLF89dFtlKzNdLHA9dFtlKzRdLGc9dFtlKzVdLHY9dFtlKzZdLHk9dFtlKzddLHc9dFtlKzhdLG09dFtlKzldLGI9dFtlKzEwXSx4PXRbZSsxMV0saz10W2UrMTJdLHo9dFtlKzEzXSxBPXRbZSsxNF0sRT10W2UrMTVdLFM9YVswXSxCPWFbMV0sUj1hWzJdLEQ9YVszXTtTPWgoUyxCLFIsRCxvLDcsc1swXSksRD1oKEQsUyxCLFIsYywxMixzWzFdKSxSPWgoUixELFMsQixkLDE3LHNbMl0pLEI9aChCLFIsRCxTLF8sMjIsc1szXSksUz1oKFMsQixSLEQscCw3LHNbNF0pLEQ9aChELFMsQixSLGcsMTIsc1s1XSksUj1oKFIsRCxTLEIsdiwxNyxzWzZdKSxCPWgoQixSLEQsUyx5LDIyLHNbN10pLFM9aChTLEIsUixELHcsNyxzWzhdKSxEPWgoRCxTLEIsUixtLDEyLHNbOV0pLFI9aChSLEQsUyxCLGIsMTcsc1sxMF0pLEI9aChCLFIsRCxTLHgsMjIsc1sxMV0pLFM9aChTLEIsUixELGssNyxzWzEyXSksRD1oKEQsUyxCLFIseiwxMixzWzEzXSksUj1oKFIsRCxTLEIsQSwxNyxzWzE0XSksUz1sKFMsQj1oKEIsUixELFMsRSwyMixzWzE1XSksUixELGMsNSxzWzE2XSksRD1sKEQsUyxCLFIsdiw5LHNbMTddKSxSPWwoUixELFMsQix4LDE0LHNbMThdKSxCPWwoQixSLEQsUyxvLDIwLHNbMTldKSxTPWwoUyxCLFIsRCxnLDUsc1syMF0pLEQ9bChELFMsQixSLGIsOSxzWzIxXSksUj1sKFIsRCxTLEIsRSwxNCxzWzIyXSksQj1sKEIsUixELFMscCwyMCxzWzIzXSksUz1sKFMsQixSLEQsbSw1LHNbMjRdKSxEPWwoRCxTLEIsUixBLDksc1syNV0pLFI9bChSLEQsUyxCLF8sMTQsc1syNl0pLEI9bChCLFIsRCxTLHcsMjAsc1syN10pLFM9bChTLEIsUixELHosNSxzWzI4XSksRD1sKEQsUyxCLFIsZCw5LHNbMjldKSxSPWwoUixELFMsQix5LDE0LHNbMzBdKSxTPXUoUyxCPWwoQixSLEQsUyxrLDIwLHNbMzFdKSxSLEQsZyw0LHNbMzJdKSxEPXUoRCxTLEIsUix3LDExLHNbMzNdKSxSPXUoUixELFMsQix4LDE2LHNbMzRdKSxCPXUoQixSLEQsUyxBLDIzLHNbMzVdKSxTPXUoUyxCLFIsRCxjLDQsc1szNl0pLEQ9dShELFMsQixSLHAsMTEsc1szN10pLFI9dShSLEQsUyxCLHksMTYsc1szOF0pLEI9dShCLFIsRCxTLGIsMjMsc1szOV0pLFM9dShTLEIsUixELHosNCxzWzQwXSksRD11KEQsUyxCLFIsbywxMSxzWzQxXSksUj11KFIsRCxTLEIsXywxNixzWzQyXSksQj11KEIsUixELFMsdiwyMyxzWzQzXSksUz11KFMsQixSLEQsbSw0LHNbNDRdKSxEPXUoRCxTLEIsUixrLDExLHNbNDVdKSxSPXUoUixELFMsQixFLDE2LHNbNDZdKSxTPWYoUyxCPXUoQixSLEQsUyxkLDIzLHNbNDddKSxSLEQsbyw2LHNbNDhdKSxEPWYoRCxTLEIsUix5LDEwLHNbNDldKSxSPWYoUixELFMsQixBLDE1LHNbNTBdKSxCPWYoQixSLEQsUyxnLDIxLHNbNTFdKSxTPWYoUyxCLFIsRCxrLDYsc1s1Ml0pLEQ9ZihELFMsQixSLF8sMTAsc1s1M10pLFI9ZihSLEQsUyxCLGIsMTUsc1s1NF0pLEI9ZihCLFIsRCxTLGMsMjEsc1s1NV0pLFM9ZihTLEIsUixELHcsNixzWzU2XSksRD1mKEQsUyxCLFIsRSwxMCxzWzU3XSksUj1mKFIsRCxTLEIsdiwxNSxzWzU4XSksQj1mKEIsUixELFMseiwyMSxzWzU5XSksUz1mKFMsQixSLEQscCw2LHNbNjBdKSxEPWYoRCxTLEIsUix4LDEwLHNbNjFdKSxSPWYoUixELFMsQixkLDE1LHNbNjJdKSxCPWYoQixSLEQsUyxtLDIxLHNbNjNdKSxhWzBdPWFbMF0rU3wwLGFbMV09YVsxXStCfDAsYVsyXT1hWzJdK1J8MCxhWzNdPWFbM10rRHwwfSxfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2RhdGEscj10LndvcmRzLG49OCp0aGlzLl9uRGF0YUJ5dGVzLGk9OCp0LnNpZ0J5dGVzO3JbaT4+PjVdfD0xMjg8PDI0LWklMzI7dmFyIGE9ZS5mbG9vcihuLzQyOTQ5NjcyOTYpLG89bjtyWzE1KyhpKzY0Pj4+OTw8NCldPTE2NzExOTM1JihhPDw4fGE+Pj4yNCl8NDI3ODI1NTM2MCYoYTw8MjR8YT4+PjgpLHJbMTQrKGkrNjQ+Pj45PDw0KV09MTY3MTE5MzUmKG88PDh8bz4+PjI0KXw0Mjc4MjU1MzYwJihvPDwyNHxvPj4+OCksdC5zaWdCeXRlcz00KihyLmxlbmd0aCsxKSx0aGlzLl9wcm9jZXNzKCk7Zm9yKHZhciBzPXRoaXMuX2hhc2gsYz1zLndvcmRzLGg9MDtoPDQ7aCsrKXt2YXIgbD1jW2hdO2NbaF09MTY3MTE5MzUmKGw8PDh8bD4+PjI0KXw0Mjc4MjU1MzYwJihsPDwyNHxsPj4+OCl9cmV0dXJuIHN9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIHQ9YS5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiB0Ll9oYXNoPXRoaXMuX2hhc2guY2xvbmUoKSx0fX0pO2Z1bmN0aW9uIGgodCxlLHIsbixpLGEsbyl7dmFyIHM9dCsoZSZyfH5lJm4pK2krbztyZXR1cm4oczw8YXxzPj4+MzItYSkrZX1mdW5jdGlvbiBsKHQsZSxyLG4saSxhLG8pe3ZhciBzPXQrKGUmbnxyJn5uKStpK287cmV0dXJuKHM8PGF8cz4+PjMyLWEpK2V9ZnVuY3Rpb24gdSh0LGUscixuLGksYSxvKXt2YXIgcz10KyhlXnJebikraStvO3JldHVybihzPDxhfHM+Pj4zMi1hKStlfWZ1bmN0aW9uIGYodCxlLHIsbixpLGEsbyl7dmFyIHM9dCsocl4oZXx+bikpK2krbztyZXR1cm4oczw8YXxzPj4+MzItYSkrZX1yLk1ENT1hLl9jcmVhdGVIZWxwZXIoYyksci5IbWFjTUQ1PWEuX2NyZWF0ZUhtYWNIZWxwZXIoYyl9KE1hdGgpLHQuTUQ1fShoLmV4cG9ydHMpfShmKTt2YXIgZD17ZXhwb3J0czp7fX0sXz17ZXhwb3J0czp7fX07IWZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXQscj1lLmxpYixuPXIuV29yZEFycmF5LGk9ci5IYXNoZXIsYT1lLmFsZ28sbz1bXSxzPWEuU0hBMT1pLmV4dGVuZCh7X2RvUmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9oYXNoPW5ldyBuLmluaXQoWzE3MzI1ODQxOTMsNDAyMzIzMzQxNywyNTYyMzgzMTAyLDI3MTczMzg3OCwzMjg1Mzc3NTIwXSl9LF9kb1Byb2Nlc3NCbG9jazpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10aGlzLl9oYXNoLndvcmRzLG49clswXSxpPXJbMV0sYT1yWzJdLHM9clszXSxjPXJbNF0saD0wO2g8ODA7aCsrKXtpZihoPDE2KW9baF09MHx0W2UraF07ZWxzZXt2YXIgbD1vW2gtM11eb1toLThdXm9baC0xNF1eb1toLTE2XTtvW2hdPWw8PDF8bD4+PjMxfXZhciB1PShuPDw1fG4+Pj4yNykrYytvW2hdO3UrPWg8MjA/MTUxODUwMDI0OSsoaSZhfH5pJnMpOmg8NDA/MTg1OTc3NTM5MysoaV5hXnMpOmg8NjA/KGkmYXxpJnN8YSZzKS0xODk0MDA3NTg4OihpXmFecyktODk5NDk3NTE0LGM9cyxzPWEsYT1pPDwzMHxpPj4+MixpPW4sbj11fXJbMF09clswXStufDAsclsxXT1yWzFdK2l8MCxyWzJdPXJbMl0rYXwwLHJbM109clszXStzfDAscls0XT1yWzRdK2N8MH0sX2RvRmluYWxpemU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9kYXRhLGU9dC53b3JkcyxyPTgqdGhpcy5fbkRhdGFCeXRlcyxuPTgqdC5zaWdCeXRlcztyZXR1cm4gZVtuPj4+NV18PTEyODw8MjQtbiUzMixlWzE0KyhuKzY0Pj4+OTw8NCldPU1hdGguZmxvb3Ioci80Mjk0OTY3Mjk2KSxlWzE1KyhuKzY0Pj4+OTw8NCldPXIsdC5zaWdCeXRlcz00KmUubGVuZ3RoLHRoaXMuX3Byb2Nlc3MoKSx0aGlzLl9oYXNofSxjbG9uZTpmdW5jdGlvbigpe3ZhciB0PWkuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gdC5faGFzaD10aGlzLl9oYXNoLmNsb25lKCksdH19KTtlLlNIQTE9aS5fY3JlYXRlSGVscGVyKHMpLGUuSG1hY1NIQTE9aS5fY3JlYXRlSG1hY0hlbHBlcihzKX0oKSx0LlNIQTF9KGguZXhwb3J0cyl9KF8pO3ZhciBwPXtleHBvcnRzOnt9fTshZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUscixuO3I9KGU9dCkubGliLkJhc2Usbj1lLmVuYy5VdGY4LGUuYWxnby5ITUFDPXIuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKHQsZSl7dD10aGlzLl9oYXNoZXI9bmV3IHQuaW5pdCwic3RyaW5nIj09dHlwZW9mIGUmJihlPW4ucGFyc2UoZSkpO3ZhciByPXQuYmxvY2tTaXplLGk9NCpyO2Uuc2lnQnl0ZXM+aSYmKGU9dC5maW5hbGl6ZShlKSksZS5jbGFtcCgpO2Zvcih2YXIgYT10aGlzLl9vS2V5PWUuY2xvbmUoKSxvPXRoaXMuX2lLZXk9ZS5jbG9uZSgpLHM9YS53b3JkcyxjPW8ud29yZHMsaD0wO2g8cjtoKyspc1toXV49MTU0OTU1NjgyOCxjW2hdXj05MDk1MjI0ODY7YS5zaWdCeXRlcz1vLnNpZ0J5dGVzPWksdGhpcy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2hhc2hlcjt0LnJlc2V0KCksdC51cGRhdGUodGhpcy5faUtleSl9LHVwZGF0ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faGFzaGVyLnVwZGF0ZSh0KSx0aGlzfSxmaW5hbGl6ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9oYXNoZXIscj1lLmZpbmFsaXplKHQpO3JldHVybiBlLnJlc2V0KCksZS5maW5hbGl6ZSh0aGlzLl9vS2V5LmNsb25lKCkuY29uY2F0KHIpKX19KX0oaC5leHBvcnRzKX0ocCksZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dCxyPWUubGliLG49ci5CYXNlLGk9ci5Xb3JkQXJyYXksYT1lLmFsZ28sbz1hLk1ENSxzPWEuRXZwS0RGPW4uZXh0ZW5kKHtjZmc6bi5leHRlbmQoe2tleVNpemU6NCxoYXNoZXI6byxpdGVyYXRpb25zOjF9KSxpbml0OmZ1bmN0aW9uKHQpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZCh0KX0sY29tcHV0ZTpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcixuPXRoaXMuY2ZnLGE9bi5oYXNoZXIuY3JlYXRlKCksbz1pLmNyZWF0ZSgpLHM9by53b3JkcyxjPW4ua2V5U2l6ZSxoPW4uaXRlcmF0aW9ucztzLmxlbmd0aDxjOyl7ciYmYS51cGRhdGUocikscj1hLnVwZGF0ZSh0KS5maW5hbGl6ZShlKSxhLnJlc2V0KCk7Zm9yKHZhciBsPTE7bDxoO2wrKylyPWEuZmluYWxpemUociksYS5yZXNldCgpO28uY29uY2F0KHIpfXJldHVybiBvLnNpZ0J5dGVzPTQqYyxvfX0pO2UuRXZwS0RGPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gcy5jcmVhdGUocikuY29tcHV0ZSh0LGUpfX0oKSx0LkV2cEtERn0oaC5leHBvcnRzKX0oZCk7dmFyIGc9e2V4cG9ydHM6e319OyFmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0LmxpYi5DaXBoZXJ8fGZ1bmN0aW9uKGUpe3ZhciByPXQsbj1yLmxpYixpPW4uQmFzZSxhPW4uV29yZEFycmF5LG89bi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtLHM9ci5lbmM7cy5VdGY4O3ZhciBjPXMuQmFzZTY0LGg9ci5hbGdvLkV2cEtERixsPW4uQ2lwaGVyPW8uZXh0ZW5kKHtjZmc6aS5leHRlbmQoKSxjcmVhdGVFbmNyeXB0b3I6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jcmVhdGUodGhpcy5fRU5DX1hGT1JNX01PREUsdCxlKX0sY3JlYXRlRGVjcnlwdG9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0RFQ19YRk9STV9NT0RFLHQsZSl9LGluaXQ6ZnVuY3Rpb24odCxlLHIpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChyKSx0aGlzLl94Zm9ybU1vZGU9dCx0aGlzLl9rZXk9ZSx0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7by5yZXNldC5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX0scHJvY2VzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fYXBwZW5kKHQpLHRoaXMuX3Byb2Nlc3MoKX0sZmluYWxpemU6ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnRoaXMuX2FwcGVuZCh0KSx0aGlzLl9kb0ZpbmFsaXplKCl9LGtleVNpemU6NCxpdlNpemU6NCxfRU5DX1hGT1JNX01PREU6MSxfREVDX1hGT1JNX01PREU6MixfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4ic3RyaW5nIj09dHlwZW9mIHQ/dzp2fXJldHVybiBmdW5jdGlvbihlKXtyZXR1cm57ZW5jcnlwdDpmdW5jdGlvbihyLG4saSl7cmV0dXJuIHQobikuZW5jcnlwdChlLHIsbixpKX0sZGVjcnlwdDpmdW5jdGlvbihyLG4saSl7cmV0dXJuIHQobikuZGVjcnlwdChlLHIsbixpKX19fX0oKX0pO24uU3RyZWFtQ2lwaGVyPWwuZXh0ZW5kKHtfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wcm9jZXNzKCEwKX0sYmxvY2tTaXplOjF9KTt2YXIgdT1yLm1vZGU9e30sZj1uLkJsb2NrQ2lwaGVyTW9kZT1pLmV4dGVuZCh7Y3JlYXRlRW5jcnlwdG9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuRW5jcnlwdG9yLmNyZWF0ZSh0LGUpfSxjcmVhdGVEZWNyeXB0b3I6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5EZWNyeXB0b3IuY3JlYXRlKHQsZSl9LGluaXQ6ZnVuY3Rpb24odCxlKXt0aGlzLl9jaXBoZXI9dCx0aGlzLl9pdj1lfX0pLGQ9dS5DQkM9ZnVuY3Rpb24oKXt2YXIgdD1mLmV4dGVuZCgpO2Z1bmN0aW9uIHIodCxyLG4pe3ZhciBpLGE9dGhpcy5faXY7YT8oaT1hLHRoaXMuX2l2PWUpOmk9dGhpcy5fcHJldkJsb2NrO2Zvcih2YXIgbz0wO288bjtvKyspdFtyK29dXj1pW29dfXJldHVybiB0LkVuY3J5cHRvcj10LmV4dGVuZCh7cHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5fY2lwaGVyLGk9bi5ibG9ja1NpemU7ci5jYWxsKHRoaXMsdCxlLGkpLG4uZW5jcnlwdEJsb2NrKHQsZSksdGhpcy5fcHJldkJsb2NrPXQuc2xpY2UoZSxlK2kpfX0pLHQuRGVjcnlwdG9yPXQuZXh0ZW5kKHtwcm9jZXNzQmxvY2s6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9jaXBoZXIsaT1uLmJsb2NrU2l6ZSxhPXQuc2xpY2UoZSxlK2kpO24uZGVjcnlwdEJsb2NrKHQsZSksci5jYWxsKHRoaXMsdCxlLGkpLHRoaXMuX3ByZXZCbG9jaz1hfX0pLHR9KCksXz0oci5wYWQ9e30pLlBrY3M3PXtwYWQ6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9NCplLG49ci10LnNpZ0J5dGVzJXIsaT1uPDwyNHxuPDwxNnxuPDw4fG4sbz1bXSxzPTA7czxuO3MrPTQpby5wdXNoKGkpO3ZhciBjPWEuY3JlYXRlKG8sbik7dC5jb25jYXQoYyl9LHVucGFkOmZ1bmN0aW9uKHQpe3ZhciBlPTI1NSZ0LndvcmRzW3Quc2lnQnl0ZXMtMT4+PjJdO3Quc2lnQnl0ZXMtPWV9fTtuLkJsb2NrQ2lwaGVyPWwuZXh0ZW5kKHtjZmc6bC5jZmcuZXh0ZW5kKHttb2RlOmQscGFkZGluZzpffSkscmVzZXQ6ZnVuY3Rpb24oKXt2YXIgdDtsLnJlc2V0LmNhbGwodGhpcyk7dmFyIGU9dGhpcy5jZmcscj1lLml2LG49ZS5tb2RlO3RoaXMuX3hmb3JtTW9kZT09dGhpcy5fRU5DX1hGT1JNX01PREU/dD1uLmNyZWF0ZUVuY3J5cHRvcjoodD1uLmNyZWF0ZURlY3J5cHRvcix0aGlzLl9taW5CdWZmZXJTaXplPTEpLHRoaXMuX21vZGUmJnRoaXMuX21vZGUuX19jcmVhdG9yPT10P3RoaXMuX21vZGUuaW5pdCh0aGlzLHImJnIud29yZHMpOih0aGlzLl9tb2RlPXQuY2FsbChuLHRoaXMsciYmci53b3JkcyksdGhpcy5fbW9kZS5fX2NyZWF0b3I9dCl9LF9kb1Byb2Nlc3NCbG9jazpmdW5jdGlvbih0LGUpe3RoaXMuX21vZGUucHJvY2Vzc0Jsb2NrKHQsZSl9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLmNmZy5wYWRkaW5nO3JldHVybiB0aGlzLl94Zm9ybU1vZGU9PXRoaXMuX0VOQ19YRk9STV9NT0RFPyhlLnBhZCh0aGlzLl9kYXRhLHRoaXMuYmxvY2tTaXplKSx0PXRoaXMuX3Byb2Nlc3MoITApKToodD10aGlzLl9wcm9jZXNzKCEwKSxlLnVucGFkKHQpKSx0fSxibG9ja1NpemU6NH0pO3ZhciBwPW4uQ2lwaGVyUGFyYW1zPWkuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKHQpe3RoaXMubWl4SW4odCl9LHRvU3RyaW5nOmZ1bmN0aW9uKHQpe3JldHVybih0fHx0aGlzLmZvcm1hdHRlcikuc3RyaW5naWZ5KHRoaXMpfX0pLGc9KHIuZm9ybWF0PXt9KS5PcGVuU1NMPXtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7dmFyIGU9dC5jaXBoZXJ0ZXh0LHI9dC5zYWx0O3JldHVybihyP2EuY3JlYXRlKFsxMzk4ODkzNjg0LDE3MDEwNzY4MzFdKS5jb25jYXQocikuY29uY2F0KGUpOmUpLnRvU3RyaW5nKGMpfSxwYXJzZTpmdW5jdGlvbih0KXt2YXIgZSxyPWMucGFyc2UodCksbj1yLndvcmRzO3JldHVybiAxMzk4ODkzNjg0PT1uWzBdJiYxNzAxMDc2ODMxPT1uWzFdJiYoZT1hLmNyZWF0ZShuLnNsaWNlKDIsNCkpLG4uc3BsaWNlKDAsNCksci5zaWdCeXRlcy09MTYpLHAuY3JlYXRlKHtjaXBoZXJ0ZXh0OnIsc2FsdDplfSl9fSx2PW4uU2VyaWFsaXphYmxlQ2lwaGVyPWkuZXh0ZW5kKHtjZmc6aS5leHRlbmQoe2Zvcm1hdDpnfSksZW5jcnlwdDpmdW5jdGlvbih0LGUscixuKXtuPXRoaXMuY2ZnLmV4dGVuZChuKTt2YXIgaT10LmNyZWF0ZUVuY3J5cHRvcihyLG4pLGE9aS5maW5hbGl6ZShlKSxvPWkuY2ZnO3JldHVybiBwLmNyZWF0ZSh7Y2lwaGVydGV4dDphLGtleTpyLGl2Om8uaXYsYWxnb3JpdGhtOnQsbW9kZTpvLm1vZGUscGFkZGluZzpvLnBhZGRpbmcsYmxvY2tTaXplOnQuYmxvY2tTaXplLGZvcm1hdHRlcjpuLmZvcm1hdH0pfSxkZWNyeXB0OmZ1bmN0aW9uKHQsZSxyLG4pe3JldHVybiBuPXRoaXMuY2ZnLmV4dGVuZChuKSxlPXRoaXMuX3BhcnNlKGUsbi5mb3JtYXQpLHQuY3JlYXRlRGVjcnlwdG9yKHIsbikuZmluYWxpemUoZS5jaXBoZXJ0ZXh0KX0sX3BhcnNlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuInN0cmluZyI9PXR5cGVvZiB0P2UucGFyc2UodCx0aGlzKTp0fX0pLHk9KHIua2RmPXt9KS5PcGVuU1NMPXtleGVjdXRlOmZ1bmN0aW9uKHQsZSxyLG4pe258fChuPWEucmFuZG9tKDgpKTt2YXIgaT1oLmNyZWF0ZSh7a2V5U2l6ZTplK3J9KS5jb21wdXRlKHQsbiksbz1hLmNyZWF0ZShpLndvcmRzLnNsaWNlKGUpLDQqcik7cmV0dXJuIGkuc2lnQnl0ZXM9NCplLHAuY3JlYXRlKHtrZXk6aSxpdjpvLHNhbHQ6bn0pfX0sdz1uLlBhc3N3b3JkQmFzZWRDaXBoZXI9di5leHRlbmQoe2NmZzp2LmNmZy5leHRlbmQoe2tkZjp5fSksZW5jcnlwdDpmdW5jdGlvbih0LGUscixuKXt2YXIgaT0obj10aGlzLmNmZy5leHRlbmQobikpLmtkZi5leGVjdXRlKHIsdC5rZXlTaXplLHQuaXZTaXplKTtuLml2PWkuaXY7dmFyIGE9di5lbmNyeXB0LmNhbGwodGhpcyx0LGUsaS5rZXksbik7cmV0dXJuIGEubWl4SW4oaSksYX0sZGVjcnlwdDpmdW5jdGlvbih0LGUscixuKXtuPXRoaXMuY2ZnLmV4dGVuZChuKSxlPXRoaXMuX3BhcnNlKGUsbi5mb3JtYXQpO3ZhciBpPW4ua2RmLmV4ZWN1dGUocix0LmtleVNpemUsdC5pdlNpemUsZS5zYWx0KTtyZXR1cm4gbi5pdj1pLml2LHYuZGVjcnlwdC5jYWxsKHRoaXMsdCxlLGkua2V5LG4pfX0pfSgpfShoLmV4cG9ydHMpfShnKSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10LHI9ZS5saWIuQmxvY2tDaXBoZXIsbj1lLmFsZ28saT1bXSxhPVtdLG89W10scz1bXSxjPVtdLGg9W10sbD1bXSx1PVtdLGY9W10sZD1bXTshZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8MjU2O2UrKyl0W2VdPWU8MTI4P2U8PDE6ZTw8MV4yODM7dmFyIHI9MCxuPTA7Zm9yKGU9MDtlPDI1NjtlKyspe3ZhciBfPW5ebjw8MV5uPDwyXm48PDNebjw8NDtfPV8+Pj44XjI1NSZfXjk5LGlbcl09XyxhW19dPXI7dmFyIHA9dFtyXSxnPXRbcF0sdj10W2ddLHk9MjU3KnRbX11eMTY4NDMwMDgqXztvW3JdPXk8PDI0fHk+Pj44LHNbcl09eTw8MTZ8eT4+PjE2LGNbcl09eTw8OHx5Pj4+MjQsaFtyXT15LHk9MTY4NDMwMDkqdl42NTUzNypnXjI1NypwXjE2ODQzMDA4KnIsbFtfXT15PDwyNHx5Pj4+OCx1W19dPXk8PDE2fHk+Pj4xNixmW19dPXk8PDh8eT4+PjI0LGRbX109eSxyPyhyPXBedFt0W3Rbdl5wXV1dLG5ePXRbdFtuXV0pOnI9bj0xfX0oKTt2YXIgXz1bMCwxLDIsNCw4LDE2LDMyLDY0LDEyOCwyNyw1NF0scD1uLkFFUz1yLmV4dGVuZCh7X2RvUmVzZXQ6ZnVuY3Rpb24oKXtpZighdGhpcy5fblJvdW5kc3x8dGhpcy5fa2V5UHJpb3JSZXNldCE9PXRoaXMuX2tleSl7Zm9yKHZhciB0PXRoaXMuX2tleVByaW9yUmVzZXQ9dGhpcy5fa2V5LGU9dC53b3JkcyxyPXQuc2lnQnl0ZXMvNCxuPTQqKCh0aGlzLl9uUm91bmRzPXIrNikrMSksYT10aGlzLl9rZXlTY2hlZHVsZT1bXSxvPTA7bzxuO28rKylvPHI/YVtvXT1lW29dOihoPWFbby0xXSxvJXI/cj42JiZvJXI9PTQmJihoPWlbaD4+PjI0XTw8MjR8aVtoPj4+MTYmMjU1XTw8MTZ8aVtoPj4+OCYyNTVdPDw4fGlbMjU1JmhdKTooaD1pWyhoPWg8PDh8aD4+PjI0KT4+PjI0XTw8MjR8aVtoPj4+MTYmMjU1XTw8MTZ8aVtoPj4+OCYyNTVdPDw4fGlbMjU1JmhdLGhePV9bby9yfDBdPDwyNCksYVtvXT1hW28tcl1eaCk7Zm9yKHZhciBzPXRoaXMuX2ludktleVNjaGVkdWxlPVtdLGM9MDtjPG47YysrKXtpZihvPW4tYyxjJTQpdmFyIGg9YVtvXTtlbHNlIGg9YVtvLTRdO3NbY109Yzw0fHxvPD00P2g6bFtpW2g+Pj4yNF1dXnVbaVtoPj4+MTYmMjU1XV1eZltpW2g+Pj44JjI1NV1dXmRbaVsyNTUmaF1dfX19LGVuY3J5cHRCbG9jazpmdW5jdGlvbih0LGUpe3RoaXMuX2RvQ3J5cHRCbG9jayh0LGUsdGhpcy5fa2V5U2NoZWR1bGUsbyxzLGMsaCxpKX0sZGVjcnlwdEJsb2NrOmZ1bmN0aW9uKHQsZSl7dmFyIHI9dFtlKzFdO3RbZSsxXT10W2UrM10sdFtlKzNdPXIsdGhpcy5fZG9DcnlwdEJsb2NrKHQsZSx0aGlzLl9pbnZLZXlTY2hlZHVsZSxsLHUsZixkLGEpLHI9dFtlKzFdLHRbZSsxXT10W2UrM10sdFtlKzNdPXJ9LF9kb0NyeXB0QmxvY2s6ZnVuY3Rpb24odCxlLHIsbixpLGEsbyxzKXtmb3IodmFyIGM9dGhpcy5fblJvdW5kcyxoPXRbZV1eclswXSxsPXRbZSsxXV5yWzFdLHU9dFtlKzJdXnJbMl0sZj10W2UrM11eclszXSxkPTQsXz0xO188YztfKyspe3ZhciBwPW5baD4+PjI0XV5pW2w+Pj4xNiYyNTVdXmFbdT4+PjgmMjU1XV5vWzI1NSZmXV5yW2QrK10sZz1uW2w+Pj4yNF1eaVt1Pj4+MTYmMjU1XV5hW2Y+Pj44JjI1NV1eb1syNTUmaF1ecltkKytdLHY9blt1Pj4+MjRdXmlbZj4+PjE2JjI1NV1eYVtoPj4+OCYyNTVdXm9bMjU1JmxdXnJbZCsrXSx5PW5bZj4+PjI0XV5pW2g+Pj4xNiYyNTVdXmFbbD4+PjgmMjU1XV5vWzI1NSZ1XV5yW2QrK107aD1wLGw9Zyx1PXYsZj15fXA9KHNbaD4+PjI0XTw8MjR8c1tsPj4+MTYmMjU1XTw8MTZ8c1t1Pj4+OCYyNTVdPDw4fHNbMjU1JmZdKV5yW2QrK10sZz0oc1tsPj4+MjRdPDwyNHxzW3U+Pj4xNiYyNTVdPDwxNnxzW2Y+Pj44JjI1NV08PDh8c1syNTUmaF0pXnJbZCsrXSx2PShzW3U+Pj4yNF08PDI0fHNbZj4+PjE2JjI1NV08PDE2fHNbaD4+PjgmMjU1XTw8OHxzWzI1NSZsXSlecltkKytdLHk9KHNbZj4+PjI0XTw8MjR8c1toPj4+MTYmMjU1XTw8MTZ8c1tsPj4+OCYyNTVdPDw4fHNbMjU1JnVdKV5yW2QrK10sdFtlXT1wLHRbZSsxXT1nLHRbZSsyXT12LHRbZSszXT15fSxrZXlTaXplOjh9KTtlLkFFUz1yLl9jcmVhdGVIZWxwZXIocCl9KCksdC5BRVN9KGguZXhwb3J0cyl9KHUpO3ZhciB2PXUuZXhwb3J0cyx5PXtleHBvcnRzOnt9fTshZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByPXQsbj1yLmxpYixpPW4uV29yZEFycmF5LGE9bi5IYXNoZXIsbz1yLmFsZ28scz1bXSxjPVtdOyFmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7Zm9yKHZhciByPWUuc3FydCh0KSxuPTI7bjw9cjtuKyspaWYoISh0JW4pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIHIodCl7cmV0dXJuIDQyOTQ5NjcyOTYqKHQtKDB8dCkpfDB9Zm9yKHZhciBuPTIsaT0wO2k8NjQ7KXQobikmJihpPDgmJihzW2ldPXIoZS5wb3cobiwuNSkpKSxjW2ldPXIoZS5wb3cobiwxLzMpKSxpKyspLG4rK30oKTt2YXIgaD1bXSxsPW8uU0hBMjU2PWEuZXh0ZW5kKHtfZG9SZXNldDpmdW5jdGlvbigpe3RoaXMuX2hhc2g9bmV3IGkuaW5pdChzLnNsaWNlKDApKX0sX2RvUHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXRoaXMuX2hhc2gud29yZHMsbj1yWzBdLGk9clsxXSxhPXJbMl0sbz1yWzNdLHM9cls0XSxsPXJbNV0sdT1yWzZdLGY9cls3XSxkPTA7ZDw2NDtkKyspe2lmKGQ8MTYpaFtkXT0wfHRbZStkXTtlbHNle3ZhciBfPWhbZC0xNV0scD0oXzw8MjV8Xz4+PjcpXihfPDwxNHxfPj4+MTgpXl8+Pj4zLGc9aFtkLTJdLHY9KGc8PDE1fGc+Pj4xNyleKGc8PDEzfGc+Pj4xOSleZz4+PjEwO2hbZF09cCtoW2QtN10rditoW2QtMTZdfXZhciB5PW4maV5uJmFeaSZhLHc9KG48PDMwfG4+Pj4yKV4objw8MTl8bj4+PjEzKV4objw8MTB8bj4+PjIyKSxtPWYrKChzPDwyNnxzPj4+NileKHM8PDIxfHM+Pj4xMSleKHM8PDd8cz4+PjI1KSkrKHMmbF5+cyZ1KStjW2RdK2hbZF07Zj11LHU9bCxsPXMscz1vK218MCxvPWEsYT1pLGk9bixuPW0rKHcreSl8MH1yWzBdPXJbMF0rbnwwLHJbMV09clsxXStpfDAsclsyXT1yWzJdK2F8MCxyWzNdPXJbM10rb3wwLHJbNF09cls0XStzfDAscls1XT1yWzVdK2x8MCxyWzZdPXJbNl0rdXwwLHJbN109cls3XStmfDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZGF0YSxyPXQud29yZHMsbj04KnRoaXMuX25EYXRhQnl0ZXMsaT04KnQuc2lnQnl0ZXM7cmV0dXJuIHJbaT4+PjVdfD0xMjg8PDI0LWklMzIsclsxNCsoaSs2ND4+Pjk8PDQpXT1lLmZsb29yKG4vNDI5NDk2NzI5NiksclsxNSsoaSs2ND4+Pjk8PDQpXT1uLHQuc2lnQnl0ZXM9NCpyLmxlbmd0aCx0aGlzLl9wcm9jZXNzKCksdGhpcy5faGFzaH0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgdD1hLmNsb25lLmNhbGwodGhpcyk7cmV0dXJuIHQuX2hhc2g9dGhpcy5faGFzaC5jbG9uZSgpLHR9fSk7ci5TSEEyNTY9YS5fY3JlYXRlSGVscGVyKGwpLHIuSG1hY1NIQTI1Nj1hLl9jcmVhdGVIbWFjSGVscGVyKGwpfShNYXRoKSx0LlNIQTI1Nn0oaC5leHBvcnRzKX0oeSk7dmFyIHc9eS5leHBvcnRzLG09e2V4cG9ydHM6e319OyFmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtpZigiZnVuY3Rpb24iPT10eXBlb2YgQXJyYXlCdWZmZXIpe3ZhciBlPXQubGliLldvcmRBcnJheSxyPWUuaW5pdCxuPWUuaW5pdD1mdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXImJih0PW5ldyBVaW50OEFycmF5KHQpKSwodCBpbnN0YW5jZW9mIEludDhBcnJheXx8InVuZGVmaW5lZCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmdCBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5fHx0IGluc3RhbmNlb2YgSW50MTZBcnJheXx8dCBpbnN0YW5jZW9mIFVpbnQxNkFycmF5fHx0IGluc3RhbmNlb2YgSW50MzJBcnJheXx8dCBpbnN0YW5jZW9mIFVpbnQzMkFycmF5fHx0IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5fHx0IGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSYmKHQ9bmV3IFVpbnQ4QXJyYXkodC5idWZmZXIsdC5ieXRlT2Zmc2V0LHQuYnl0ZUxlbmd0aCkpLHQgaW5zdGFuY2VvZiBVaW50OEFycmF5KXtmb3IodmFyIGU9dC5ieXRlTGVuZ3RoLG49W10saT0wO2k8ZTtpKyspbltpPj4+Ml18PXRbaV08PDI0LWklNCo4O3IuY2FsbCh0aGlzLG4sZSl9ZWxzZSByLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07bi5wcm90b3R5cGU9ZX19KCksdC5saWIuV29yZEFycmF5fShoLmV4cG9ydHMpfShtKTt2YXIgYj1tLmV4cG9ydHMseD17ZXhwb3J0czp7fX07IWZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0LkhtYWNTSEEyNTZ9KGguZXhwb3J0cyl9KHgpO3ZhciBrLHosQT14LmV4cG9ydHM7b25tZXNzYWdlPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YSxuPWUuam9iLGE9ZS5jbWQscz1lLnNlcnZlcixjPWUucGF0aCxoPWUuYXBpS2V5LHU9ZS5idWZmZXIsZj1lLmtleUJhc2U2NCxkPWUuZ3ppcCxfPWUucmVmZXJyZXIscD1lLmlkLGc9ZS5hcHBJZCx5PWUucGVyc2lzdGVudElkLG09ZS5DUk9RVUVUX1ZFUlNJT04seD1lLmRlYnVnLEU9ZS53aGF0O2lmKCJ1cGxvYWRFbmNyeXB0ZWQiPT09YSlVKGMpO2Vsc2UgY29uc29sZS5lcnJvcigiVW5rbm93biB3b3JrZXIgY29tbWFuZCIsYSk7ZnVuY3Rpb24gUyh0KXt2YXIgZT1EYXRlLm5vdygpLHI9Yi5jcmVhdGUodCksbj1sLnBhcnNlKGYpLGE9QShyLG4pLG89Yi5yYW5kb20oMTYpLHM9di5lbmNyeXB0KHIsbix7aXY6b30pLmNpcGhlcnRleHQsYz1uZXcgQXJyYXlCdWZmZXIoNCtvLnNpZ0J5dGVzK2Euc2lnQnl0ZXMrcy5zaWdCeXRlcyksaD1uZXcgRGF0YVZpZXcoYyksdT0wO2guc2V0VWludDMyKHUsMTEyOTQ2ODIwOSwhMSksdSs9NDtmb3IodmFyIGQ9MCxfPVtvLGEsc107ZDxfLmxlbmd0aDtkKyspe3ZhciBnLHk9aShfW2RdLndvcmRzKTt0cnl7Zm9yKHkucygpOyEoZz15Lm4oKSkuZG9uZTspe3ZhciB3PWcudmFsdWU7aC5zZXRJbnQzMih1LHcsITEpLHUrPTR9fWNhdGNoKHQpe3kuZSh0KX1maW5hbGx5e3kuZigpfX1yZXR1cm4geCYmY29uc29sZS5sb2coIiIuY29uY2F0KHAsIiAiKS5jb25jYXQoRSwiIGVuY3J5cHRlZCAoIikuY29uY2F0KGMuYnl0ZUxlbmd0aCwiIGJ5dGVzKSBpbiAiKS5jb25jYXQoRGF0ZS5ub3coKS1lLCJtcyIpKSxjfWZ1bmN0aW9uIEIodCl7dmFyIGU9RGF0ZS5ub3coKSxyPW8uZXhwb3J0cy5kZWZsYXRlKHQse2d6aXA6ITAsbGV2ZWw6MX0pO3JldHVybiB4JiZjb25zb2xlLmxvZygiIi5jb25jYXQocCwiICIpLmNvbmNhdChFLCIgY29tcHJlc3NlZCAoIikuY29uY2F0KHIubGVuZ3RoLCIgYnl0ZXMpIGluICIpLmNvbmNhdChEYXRlLm5vdygpLWUsIm1zIikpLHJ9ZnVuY3Rpb24gUih0KXt2YXIgZT1EYXRlLm5vdygpLHI9dyhiLmNyZWF0ZSh0KSksbj1sLnN0cmluZ2lmeShyKS5yZXBsYWNlKC89L2csIiIpLnJlcGxhY2UoL1wrL2csIi0iKS5yZXBsYWNlKC9cLy9nLCJfIik7cmV0dXJuIHgmJmNvbnNvbGUubG9nKCIiLmNvbmNhdChwLCIgIikuY29uY2F0KEUsIiBoYXNoZWQgKCIpLmNvbmNhdCh0Lmxlbmd0aCwiIGJ5dGVzKSBpbiAiKS5jb25jYXQoRGF0ZS5ub3coKS1lLCJtcyIpKSxufWZ1bmN0aW9uIEQodCl7cmV0dXJuIEwuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIEwoKXtyZXR1cm4oTD1yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKChmdW5jdGlvbiB0KGUpe3ZhciByLG4saSxhLG8sYyxsLHUsZixkO3JldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcCgoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6aWYocj1EYXRlLm5vdygpLG49IiIuY29uY2F0KHMsIi8iKS5jb25jYXQoZSksaCl7dC5uZXh0PTQ7YnJlYWt9cmV0dXJuIHQuYWJydXB0KCJyZXR1cm4iLHt1cmw6bix1cGxvYWRVcmw6bn0pO2Nhc2UgNDpyZXR1cm4gdC5uZXh0PTYsayhuLHtoZWFkZXJzOnsiWC1Dcm9xdWV0LUF1dGgiOmgsIlgtQ3JvcXVldC1BcHAiOmcsIlgtQ3JvcXVldC1JZCI6eSwiWC1Dcm9xdWV0LVNlc3Npb24iOnAsIlgtQ3JvcXVldC1WZXJzaW9uIjptfSxyZWZlcnJlcjpffSk7Y2FzZSA2OmlmKGk9dC5zZW50LGE9aS5vayxvPWkuc3RhdHVzLGM9aS5zdGF0dXNUZXh0LGEpe3QubmV4dD0xMDticmVha310aHJvdyBFcnJvcigiRXJyb3IgaW4gc2lnbmluZyBVUkw6ICIuY29uY2F0KG8sIiAtICIpLmNvbmNhdChjKSk7Y2FzZSAxMDpyZXR1cm4gdC5uZXh0PTEyLGkuanNvbigpO2Nhc2UgMTI6aWYobD10LnNlbnQsdT1sLmVycm9yLGY9bC5yZWFkLGQ9bC53cml0ZSwhdSl7dC5uZXh0PTE4O2JyZWFrfXRocm93IEVycm9yKHUpO2Nhc2UgMTg6cmV0dXJuIHgmJmNvbnNvbGUubG9nKCIiLmNvbmNhdChwLCIgIikuY29uY2F0KEUsIiBhdXRob3JpemVkIGluICIpLmNvbmNhdChEYXRlLm5vdygpLXIsIm1zIikpLHQuYWJydXB0KCJyZXR1cm4iLHt1cmw6Zix1cGxvYWRVcmw6ZH0pO2Nhc2UgMjA6Y2FzZSJlbmQiOnJldHVybiB0LnN0b3AoKX19KSx0KX0pKSkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBVKHQpe3JldHVybiBPLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBPKCl7cmV0dXJuKE89cihyZWdlbmVyYXRvclJ1bnRpbWUubWFyaygoZnVuY3Rpb24gdChlKXt2YXIgcixpLGEsbyxzLGMsaCxsLGY7cmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDpyZXR1cm4gdC5wcmV2PTAscj1TKGQ/Qih1KTp1KSxlLmluY2x1ZGVzKCIlSEFTSCUiKSYmKGU9ZS5yZXBsYWNlKCIlSEFTSCUiLFIocikpKSx0Lm5leHQ9NixEKGUpO2Nhc2UgNjpyZXR1cm4gaT10LnNlbnQsYT1pLnVwbG9hZFVybCxvPWkudXJsLHM9RGF0ZS5ub3coKSx0Lm5leHQ9MTIsayhhLHttZXRob2Q6IlBVVCIsbW9kZToiY29ycyIsaGVhZGVyczp7IkNvbnRlbnQtVHlwZSI6ImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSIsIlgtQ3JvcXVldC1BcHAiOmcsIlgtQ3JvcXVldC1JZCI6eSwiWC1Dcm9xdWV0LVNlc3Npb24iOnAsIlgtQ3JvcXVldC1WZXJzaW9uIjptfSxyZWZlcnJlcjpfLGJvZHk6cn0pO2Nhc2UgMTI6aWYoYz10LnNlbnQsaD1jLm9rLGw9Yy5zdGF0dXMsZj1jLnN0YXR1c1RleHQsaCl7dC5uZXh0PTE4O2JyZWFrfXRocm93IEVycm9yKCJzZXJ2ZXIgcmV0dXJuZWQgIi5jb25jYXQobCwiICIpLmNvbmNhdChmLCIgZm9yIFBVVCAiKS5jb25jYXQoYSkpO2Nhc2UgMTg6eCYmY29uc29sZS5sb2coIiIuY29uY2F0KHAsIiAiKS5jb25jYXQoRSwiIHVwbG9hZGVkICgiKS5jb25jYXQobCwiKSBpbiAiKS5jb25jYXQoRGF0ZS5ub3coKS1zLCJtcyAiKS5jb25jYXQobykpLHooe2pvYjpuLHVybDpvLG9rOmgsc3RhdHVzOmwsc3RhdHVzVGV4dDpmfSksdC5uZXh0PTI2O2JyZWFrO2Nhc2UgMjI6dC5wcmV2PTIyLHQudDA9dC5jYXRjaCgwKSx4JiZjb25zb2xlLmxvZygiIi5jb25jYXQocCwiIHVwbG9hZCBlcnJvciAiKS5jb25jYXQodC50MC5tZXNzYWdlKSkseih7am9iOm4sb2s6ITEsc3RhdHVzOi0xLHN0YXR1c1RleHQ6dC50MC5tZXNzYWdlfSk7Y2FzZSAyNjpjYXNlImVuZCI6cmV0dXJuIHQuc3RvcCgpfX0pLHQsbnVsbCxbWzAsMjJdXSl9KSkpKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSxrPWZldGNoLHo9cG9zdE1lc3NhZ2V9KCk7Cgo=",nc=null,rc=!1,function(e){return ic=ic||ec(tc,nc,rc),new Worker(ic,e)}),sc=C.CROQUET_VERSION,ac="node"===C.CROQUET_PLATFORM;ac||window.location.hostname.match(/co?de?pe?n\.io/)?console.log("Croquet "+sc):console.log("%cCroquet%c %c"+sc,"color:#F0493E","color:inherit","color:".concat(sc.includes("+")?"#909":"inherit"));var cc=!ac&&!!window.location.hostname.match(/^(.*\.)?croquet\.io$/i),lc=cc&&window.location.pathname.startsWith("/dev/"),uc=!ac&&!!window.location.hostname.match(/^(.*\.)?croquet\.dev$/i),dc=cc?window.location.host:"croquet.io",hc="wss://".concat(dc,"/reflector/v").concat(1),fc=function(){var e=H.backend;if(e)return{SIGN_SERVER:"https://api.".concat(e,".croquet.dev/sign"),REFLECTOR:"wss://api.".concat(e,".croquet.dev/reflector/v").concat(1)};if(uc){var t=window.location.hostname.slice(0,-12);return{SIGN_SERVER:"https://api.".concat(t,".croquet.dev/sign"),REFLECTOR:"wss://api.".concat(t,".croquet.dev/reflector/v").concat(1)}}if(lc||H.dev)return{SIGN_SERVER:"https://api.croquet.io/dev/sign",REFLECTOR:"wss://croquet.io/reflector-dev/dev"};return{SIGN_SERVER:"https://api.croquet.io/sign",REFLECTOR:hc}}(),pc=fc.SIGN_SERVER,mc=fc.REFLECTOR;var yc=null;var bc,vc=H.nocheat,gc=[0];var Zc=new oc;Zc.onerror=function(e){return console.error("UploadWorker error: ".concat(e.message))};var Xc=0,wc=new Set;function Lc(e){var t,r=W(wc);try{var i=function(){var n=t.value;if(n.id===e){var r=n.sessionSpec;return{v:{appId:r.appId,persistentId:r.persistentId,uploadEncrypted:function(e){return n.uploadEncrypted(e)},downloadEncrypted:function(e){return n.downloadEncrypted(e)}}}}};for(r.s();!(t=r.n()).done;){var o=i();if("object"===n(o))return o.v}}catch(e){r.e(e)}finally{r.f()}return{}}function kc(e){var t,n=W(wc);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id===e)return r}}catch(e){n.e(e)}finally{n.f()}return null}var xc=function(e){function r(){var e,t;o(this,r),e=H.dev||!1!==H.dev&&"localhost",t=H.dev||!1!==H.dev&&(lc||uc),yc={messages:H.has("debug","messages",!1),sends:H.has("debug","sends",!1),ticks:H.has("debug","ticks",!1),pong:H.has("debug","pong",!1),snapshot:H.has("debug","snapshot",!1),session:H.has("debug","session",!1),initsnapshot:H.has("debug","initsnapshot",e),reflector:H.has("debug","reflector",t)},this.reset()}var s,c,l,u,d,h,f,p,m,y,b,v,g,L;return a(r,[{key:"reset",value:function(){globalThis.CROQUETVM===this.vm&&delete globalThis.CROQUETVM,this.vm=null,this.session=null,this.connection=this.connection||new Gc(this),this.networkQueue=[],this.reflectorTime=0,this.msPerTick=this.msPerTick||0,this.tickMultiplier=this.tickMultiplier||1,this.extrapolatedTimeBase=Date.now(),this.key=this.key||null,this.tove=this.tove||null,this.viewId=this.viewId||Math.floor(Math.random()*Math.pow(36,10)).toString(36),this.timeline="",this.rejoinTimeout&&clearTimeout(this.rejoinTimeout),this.rejoinTimeout=0,this.sendBuffer=[],this.users=0,this.usersTotal=0,this.cpuTime=0,this.triggeringCpuTime=null,this.synced=null,this.latency=0,this.latencyHistory&&(this.latencyHistory=[]),this.localTicker&&(globalThis.clearInterval(this.localTicker),delete this.localTicker),this.syncTimer&&(globalThis.clearTimeout(this.syncTimer),delete this.syncTimer),this.tuttiHistory=[],this.lastAnimationEnd=0,this.animationGapCheck=[],this.rateLimitedSendTimes=[],this.rateLimitBuffer=[],this.rateLimitSoftWarned=!1,this.rateLimitBufferWarned=!1,this.rateLimitLastLogged=0,this.payloadSizeWarned=!1,bt.removeAllSubscriptionsFor(this.viewId),bt.addSubscription(this.viewId,"__peers__",this.viewId,(function(e){return $e("users now ".concat(e.count))}),"oncePerFrameWhileSynced"),this.leaving||pt.showSyncWait(!0)}},{key:"id",get:function(){return this.vm?this.vm.id:this.sessionSpec.id}},{key:"persistentId",get:function(){return this.sessionSpec.persistentId}},{key:"versionId",get:function(){return this.sessionSpec.codeHash}},{key:"extrapolatedTime",get:function(){return Date.now()-this.extrapolatedTimeBase}},{key:"viewOnly",get:function(){return this.sessionSpec.viewOnly}},{key:"backlog",get:function(){return this.vm?this.reflectorTime-this.vm.time:0}},{key:"starvation",get:function(){return Date.now()-this.lastReceived}},{key:"lag",get:function(){return this.vm?Math.max(0,this.extrapolatedTime-this.vm.time-this.msPerTick):0}},{key:"activity",get:function(){return Date.now()-this.lastSent}},{key:"viewed",get:function(){return!(!this.session||!this.session.view)}},{key:"connected",get:function(){return this.connection.connected}},{key:"shouldLeaveWhenDisconnected",get:function(){return this.leaving||!this.canRejoinSeamlessly||0===this.sessionSpec.rejoinLimit}},{key:"canRejoinSeamlessly",get:function(){return!!this.timeline}},{key:"checkForConnection",value:function(e){this.connection.checkForConnection(e)}},{key:"dormantDisconnect",value:function(){this.connected&&this.connection.dormantDisconnect()}},{key:"initFromSessionSpec",value:(L=i(regeneratorRuntime.mark((function e(n){var r,i,o,s,a,c,l,u,d,h,f,p,m,y,b,v,g,Z,X,w,L,k,x,G,S,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.name,i=n.optionsFromUrl,o=n.password,s=n.appId,a=n.apiKey,c=n.viewIdDebugSuffix,l=s?"".concat(s,"/").concat(r):r,c&&(this.viewId=this.viewId.replace(/_.*$/,"")+"_"+encodeURIComponent((""+c).slice(0,16)).replace(/[^a-z0-9]/gi,(function(e){return"_".concat("%"===e?"":e.charCodeAt(0).toString(16).toUpperCase())}))),u=t({},n.options),i){d=W(i);try{for(d.s();!(h=d.n()).done;)(f=h.value)in H&&(u[f]=H[f])}catch(e){d.e(e)}finally{d.f()}}for(p={},m=0,y=["hashOverride"];m<y.length;m++)(b=y[m])in H?p[b]=H[b]:b in n&&(p[b]=n[b]);return this.key=oo(o,"",{keySize:8}),e.next=10,pe(l,u);case 10:return v=e.sent,e.next=13,this.verifyApiKey(a,s,v);case 13:return g=e.sent,Z=g.developerId,X=g.token,e.next=18,be(v,Z,p,sc);case 18:return w=e.sent,L=w.id,k=w.codeHash,x=w.computedCodeHash,e.next=24,this.encrypt(L);case 24:this.tove=e.sent,yc.session&&console.log('Croquet session "'.concat(l,'":\n        sessionId=').concat(L).concat(s?"\n        persistentId=".concat(v):"","\n        versionId=").concat(k===x?k:"".concat(k," (specified in hashOverride)\n        versionId=").concat(x," (computed)"),"\n        viewId=").concat(this.viewId)),this.eventRateLimit=n.eventRateLimit,this.eventHistoryLimit=this.eventRateLimit,this.eventMaxBundles=this.eventRateLimit,this.sessionSpec=t(t({},n),{},{options:u,name:l,id:L,persistentId:v,developerId:Z,token:X,codeHash:k,computedCodeHash:x}),G=this.getTickAndMultiplier(),S=G.msPerTick,T=G.multiplier,this.msPerTick=S,this.tickMultiplier=T,this.setUpActivityChecks();case 34:case"end":return e.stop()}}),e,this)}))),function(e){return L.apply(this,arguments)})},{key:"establishSession",value:(g=i(regeneratorRuntime.mark((function e(){var t,n,r,i,o,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.sessionSpec,n=t.id,r=t.persistentId,i=t.codeHash,this.sessionSpec.snapshot={id:n,time:0,meta:{id:n,persistentId:r,codeHash:i,created:(new Date).toISOString()}},o=new Promise((function(e){return s.sessionSpec.sessionJoined=e})),this.checkForConnection(!1),yc.session&&console.log(n,"waiting for SYNC"),e.next=7,o;case 7:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"verifyApiKey",value:(v=i(regeneratorRuntime.mark((function e(t,n,r){var i,o,s,a,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=pc,e.next=4,fetch("".concat(i,"/join?meta=login"),{method:"GET",mode:"cors",headers:{"X-Croquet-Auth":t,"X-Croquet-App":n,"X-Croquet-Id":r,"X-Croquet-Version":sc,"X-Croquet-Path":new URL(pt.referrerURL()).pathname},referrer:pt.referrerURL(),referrerPolicy:"no-referrer-when-downgrade"});case 4:return o=e.sent,e.next=7,o.json();case 7:if(s=e.sent,a=s.error,c=s.developerId,l=s.token,!a){e.next=13;break}throw Error(a);case 13:return yc.session&&console.log("Croquet: verified API key"),e.abrupt("return",{developerId:c,token:l});case 17:throw e.prev=17,e.t0=e.catch(0),Error("Error verifying Croquet API key: ".concat(e.t0.message));case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),function(e,t,n){return v.apply(this,arguments)})},{key:"lastKnownTime",value:function(e){return Math.max(e.time,e.externalTime)}},{key:"takeSnapshot",value:function(){var e=this.vm.snapshot(),n=this.lastKnownTime(e),r=e.externalSeq;return e.meta=t(t({},this.sessionSpec.snapshot.meta),{},{options:this.sessionSpec.options,time:n,seq:r,date:(new globalThis.CroquetViewDate).toISOString(),host:ac?"localhost":window.location.hostname,sdk:sc}),delete e.meta.hash,e}},{key:"takeSnapshotHandleErrors",value:function(){var e,t,n;try{e=_e.begin("snapshot"),n=this.takeSnapshot()}catch(e){return et("snapshot",e),null}finally{t=_e.end("snapshot")-e}return yc.snapshot&&console.log(this.id,"snapshot taken in ".concat(Math.ceil(t)," ms")),n}},{key:"scheduleSnapshot",value:function(){if(this.connected&&this.vm&&!this.viewOnly){var e=this.vm.time,t=e-this.vm.lastSnapshotPoll;if(t<5e3)yc.snapshot&&console.log("not requesting snapshot poll (".concat(t,"ms since poll scheduled)"));else{var n=new tl(e,0,"_","handlePollForSnapshot",[]);this.sendTagged(n,{debounce:5e3,msgID:"pollForSnapshot"}),yc.snapshot&&console.log(this.id,"requesting snapshot poll via reflector")}}}},{key:"handlePollForSnapshot",value:function(e){var t=this;if(!0!==this.synced||this.viewOnly)this.triggeringCpuTime=null;else{var n,r,i,o=this.triggeringCpuTime||this.cpuTime;this.triggeringCpuTime=null,this.cpuTime=0;try{n=_e.begin("snapshot"),r={cpuTime:o,hash:this.vm.getSummaryHash(),viewId:this.viewId}}catch(e){return void et("snapshot",e)}finally{i=_e.end("snapshot")-n,this.cpuTime-=i}yc.snapshot&&console.log(this.id,"Summary hashing took ".concat(Math.ceil(i),"ms")),Promise.resolve().then((function(){return t.pollForSnapshot(e,r)}))}}},{key:"pollForSnapshot",value:function(e,t){t.cpuTime+=Math.random(),yc.snapshot&&console.log(this.id,"sending snapshot vote",t),this.sendTutti({time:e,topic:"snapshot",data:t,tallyTarget:["handleSnapshotVote"]})}},{key:"handleSnapshotVote",value:function(e){var t=this;if(!0===this.synced){var n=e.tally;yc.snapshot&&console.log(this.id,"received snapshot votes",n);var r=this.analyzeTally(n,"cpuTime"),i=r.numberOfGroups,o=r.shouldUpload,s=r.dissidentFlag;if(i>1&&console.error(this.id,"Session diverged! Snapshots fall into ".concat(i," groups")),o){var a=this.takeSnapshotHandleErrors();a&&Promise.resolve().then((function(){return t.uploadSnapshot(a,s)}))}}else yc.snapshot&&console.log(this.id,"Ignoring snapshot vote during sync")}},{key:"analyzeTally",value:function(e,t){var n=this,r=!1,i=null,o=[],s={},a=null;Object.keys(e).forEach((function(e,t){var r=JSON.parse(e);o.push(r);var i=r.hash;r.viewId===n.viewId&&(a=t),s[i]||(s[i]=[]),s[i].push(t)}));var c=Object.keys(s),l=c.length,u=0;l>1&&(c.sort((function(e,t){return s[t].length-s[e].length})),s[c[0]].length===s[c[1]].length&&(yc.snapshot&&console.log(this.id,"Deciding consensus by tie-break"),c[1]<c[0]&&(u=1)));var d=c[u];if(null!==a){var h=o[a].hash,f=s[h];f.length>1&&f.sort((function(e,n){return o[e][t]-o[n][t]})),f[0]===a&&(r=!0,h!==d&&(i={groupVotes:f.length,allVotes:o.length}))}return{numberOfGroups:l,shouldUpload:r,dissidentFlag:i}}},{key:"snapshotPath",value:function(e,t,n){var r=Math.ceil(e).toString().padStart(10,"0"),i=this.sessionSpec,o=i.appId,s=i.persistentId,a=i.codeHash;return i.apiKey?"apps/".concat(o,"/snap/").concat(a,"/").concat(s,".").concat(this.id,"/").concat(r,"_").concat(t,".").concat(n):"snapshots/".concat(this.id,"/").concat(r,"_").concat(t,"-").concat(n,".snap")}},{key:"hashSnapshot",value:function(e){return e.meta.hash?e.meta.hash:(e.meta.hashPromise||(e.meta.hashPromise=new Promise((function(n){var r=t({},e);delete r.meta,ue(JSON.stringify(r)).then((function(t){e.meta.hash=t,delete e.meta.hashPromise,n(t)}))}))),e.meta.hashPromise)}},{key:"uploadServer",value:function(){var e=pc;return this.sessionSpec.apiKey||(e="https://croquet.io/files/v1"),"string"==typeof H.files&&(e=H.files).endsWith("/")&&(e=e.slice(0,-1)),e}},{key:"uploadSnapshot",value:(b=i(regeneratorRuntime.mark((function e(t){var n,r,i,o,s,a,c,l,u,d,h=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:null,e.next=3,this.hashSnapshot(t);case 3:return r=_e.begin("snapshot"),i=JSON.stringify(t),o=_e.end("snapshot")-r,yc.snapshot&&console.log(this.id,"snapshot stringified (".concat(i.length," bytes) in ").concat(Math.ceil(o),"ms")),s=t.meta,a=s.time,c=s.seq,l=s.hash,u=this.connection.socket,e.prev=9,e.next=12,this.uploadEncrypted({content:i,path:this.snapshotPath(a,c,l),key:this.key,gzip:!0,debug:yc.snapshot,what:"snapshot"});case 12:if(d=e.sent,this.connection.socket===u){e.next=16;break}return console.warn(this.id,"Controller was reset while trying to upload snapshot"),e.abrupt("return",!1);case 16:return this.announceSnapshotUrl(a,c,l,d,n),e.abrupt("return",!0);case 20:return e.prev=20,e.t0=e.catch(9),console.error(this.id,"Failed to upload snapshot"),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,this,[[9,20]])}))),function(e){return b.apply(this,arguments)})},{key:"announceSnapshotUrl",value:function(e,t,n,r,i){if(yc.snapshot){var o="time: ".concat(e,", seq: ").concat(t,", hash: ").concat(n);i&&(o+=", as dissident; "+JSON.stringify(i)),console.log(this.id,"sending snapshot url to reflector (".concat(o,"): ").concat(r))}try{this.connection.send(JSON.stringify({id:this.id,action:"SNAP",args:{time:e,seq:t,hash:n,url:r,dissident:i}}))}catch(e){console.error("ERROR while sending",e)}}},{key:"downloadEncrypted",value:(y=i(regeneratorRuntime.mark((function e(t){var n,r,i,o,s,a,c,l,u,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.gzip,i=t.key,o=t.debug,s=t.json,a=t.what,n.startsWith("https://croquet.io/files/v1")&&(n=n.replace("https://croquet.io/files/v1","https://files.croquet.io")),c=Date.now(),e.next=5,fetch(n,{method:"GET",mode:"cors",headers:{"X-Croquet-App":this.sessionSpec.appId,"X-Croquet-Id":this.sessionSpec.persistentId,"X-Croquet-Session":this.sessionSpec.id,"X-Croquet-Version":sc},referrer:pt.referrerURL()});case 5:return l=e.sent,e.next=8,l.arrayBuffer();case 8:return u=e.sent,o&&console.log(this.id,"".concat(a," fetched (").concat(u.byteLength," bytes) in ").concat(-c+(c=Date.now()),"ms")),d=this.decryptBinary(u,i),o&&console.log(this.id,"".concat(a," decrypted (").concat(d.length," bytes) in ").concat(-c+(c=Date.now()),"ms")),h=r?$a.inflate(d):d,o&&r&&console.log(this.id,"".concat(a," inflated (").concat(h.length," bytes) in ").concat(-c+(c=Date.now()),"ms")),e.abrupt("return",s?JSON.parse((new TextDecoder).decode(h)):h);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"uploadEncrypted",value:(m=i(regeneratorRuntime.mark((function e(t){var n,r,i,o,s,a,c,l,u,d,h,f,p,m,y,b=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.content,r=t.path,i=t.key,o=t.gzip,s=t.keep,a=t.debug,c=t.what,l="string"==typeof n?(new TextEncoder).encode(n).buffer:n,u=s?void 0:[l],d="string"==typeof i?i:$i.stringify(i),h=this.sessionSpec,f=h.apiKey,p=h.appId,m=h.persistentId,y=++Xc,e.abrupt("return",new Promise((function(e,t){var n=ac?"addListener":"addEventListener",i=ac?"removeListener":"removeEventListener";Zc.postMessage({job:y,cmd:"uploadEncrypted",server:b.uploadServer(),path:r,apiKey:f,buffer:l,keyBase64:d,gzip:o,referrer:pt.referrerURL(),id:b.id,appId:p,persistentId:m,CROQUET_VERSION:sc,debug:a,what:c},u);try{Zc[n]("message",(function n(r){if(y===r.data.job){var o=r.data,s=o.url,a=o.ok,c=o.status,l=o.statusText;Zc[i]("message",n),a?e(s):t(Error("".concat(c,": ").concat(l)))}}))}catch(e){console.log("failed to add listener",e)}})));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"persistentPath",value:function(e){var t=this.sessionSpec,n=t.appId,r=t.persistentId;return"apps/".concat(n,"/").concat(r,"/save/").concat(e)}},{key:"pollForPersist",value:function(e,t,n,r,i){if(this.synced){if(!this.sessionSpec.appId)throw Error("Persistence API requires appId");var o={viewId:this.viewId,hash:r,ms:i+.001*Math.random()},s={persistTime:t,persistentHash:r,persistentString:n};yc.snapshot&&console.log(this.id,"sending persistence vote for time @".concat(t),o),this.sendTutti({time:e,topic:"persist",data:o,localContext:s,tallyTarget:["handlePersistVote"]})}}},{key:"handlePersistVote",value:(p=i(regeneratorRuntime.mark((function e(t){var n,r,i,o,s,a,c,l,u,d,h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.tally,r=t.localContext,yc.snapshot&&(i=r?"for time @".concat(r.persistTime):"that we didn't participate in",console.log(this.id,"received persistence vote ".concat(i),n)),o=this.analyzeTally(n,"ms"),s=o.numberOfGroups,a=o.shouldUpload,c=o.dissidentFlag,s>1&&console.warn(this.id,"Persistence records fall into ".concat(s," groups")),a&&r){e.next=6;break}return e.abrupt("return");case 6:return l=r.persistTime,u=r.persistentHash,d=r.persistentString,e.next=9,this.uploadEncrypted({path:this.persistentPath(u),content:d,key:this.key,gzip:!0,debug:yc.snapshot,what:"persistent data"});case 9:h=e.sent,yc.snapshot&&(f=c?" (as dissident; ".concat(JSON.stringify(c),")"):"",console.log(this.id,"sending persistent data url to reflector".concat(f,": ").concat(h)));try{this.connection.send(JSON.stringify({id:this.id,action:"SAVE",args:{persistTime:l,url:h,dissident:c}}))}catch(e){console.error("ERROR while sending",e)}case 12:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"convertReflectorMessage",value:function(e){var t="noop",n=[];switch(e[2].what){case"users":var r=e[2],i=r.joined,o=r.left,s=r.active,a=r.total;this.users=s,this.usersTotal=a;var c="__peers__",l={entered:i||[],exited:o||[],count:s};t="publishFromModelOnly",n=["__VM__",c,l],bt.handleEvent(this.viewId+":"+c,l);break;case"tally":var u=e[2],d=u.tuttiSeq,h=u.tuttiKey,f=u.tally,p=u.tallyTarget,m=u.missingClients;(yc.messages||yc.snapshot)&&m&&console.log("".concat(m," ").concat(1===m?"client":"clients"," failed to participate in tally ").concat(h||d)),t="handleTuttiResult",n=[{tuttiSeq:d,tuttiKey:h,tally:f,tallyTarget:p}]}var y=new tl(0,0,"_",t,n);e[2]=y.asState()[2]}},{key:"handleTuttiResult",value:function(e){var t=e.tuttiSeq,n=e.tuttiKey,r=e.tally,i=e.tallyTarget,o=n?function(e){return e.tuttiKey===n}:function(e){return e.dummyTuttiSeq===t},s=this.tuttiHistory.findIndex(o),a=-1!==s&&this.tuttiHistory.splice(s,1)[0],c=null,l=null;if(a&&(c=a.payload,l=a.localContext),i){var u=X(i),d=u[0],h=u.slice(1),f=[].concat(w(h),[{tally:r,localPayload:c,localContext:l}]),p=new tl(0,0,"_",d,f);this.vm.verifyExternal(p),p.executeOn(this.vm,!0)}}},{key:"receive",value:(f=i(regeneratorRuntime.mark((function e(t,n){var r,i,o,s,a,c,l,u,d,h,f,p,m,y,b,v,g,X,L,k,x,G,S,T,C,R,Y,I,V,P,K,M,N,H,F,z,_,E,j,J,U,Q,O=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.lastReceived,this.lastReceived=this.connection.lastReceived,e.t0=t,e.next="SYNC"===e.t0?5:"RECV"===e.t0?87:"TICK"===e.t0?111:"INFO"===e.t0?119:"REQU"===e.t0?122:125;break;case 5:if(this.syncReceived=!0,this.clearSyncReceiptTimeout(),wc.add(this),o=n.messages,s=n.url,a=n.persisted,c=n.time,l=n.seq,u=n.snapshotSeq,d=n.tove,h=n.reflector,f=n.flags,!d||d===this.tove){e.next=19;break}if(e.prev=10,this.decrypt(d)===this.id){e.next=13;break}throw Error("wrong sessionId in tove?!");case 13:e.next=19;break;case 15:return e.prev=15,e.t1=e.catch(10),this.connection.closeConnectionWithError("SYNC",Error("failed to decrypt session secret: ".concat(e.t1.message)),4200),e.abrupt("return");case 19:if(p=n.timeline||n.reflectorSession,this.flags=f||{},m=a?"persisted session":"snapshot",yc.session&&console.log(this.id,"received SYNC from ".concat(h," reflector: time ").concat(c,", ").concat(o.length," messages, ").concat(m," ").concat(s||"<none>")),y=!!this.vm){if(this.networkQueue.length=0,b=!!p&&p===this.timeline,v=o[0],g=l,X=void 0!==u?u:v?v[1]:g,yc.messages&&console.log(this.id,"rejoin: we have #".concat(this.vm.seq," SYNC has #").concat(X,"-#").concat(g)),L=b&&el(X,this.vm.seq)&&el(this.vm.seq,g)&&c>=this.reflectorTime){for(k=0,v&&el(v[1],this.vm.seq)&&(k=this.vm.seq-v[1]+1>>>0),x=k;L&&x<o.length;x++)"string"!=typeof(G=o[x][2])&&"users"===G.what&&G.left&&G.left.includes(this.viewId)&&(yc.session&&console.log(this.id,"reflector reports that this view has left"),L=!1);L&&k&&(yc.messages&&console.log(this.id,"rejoin: discarding ".concat(k," messages #").concat(v[1],"-#").concat(this.vm.seq)),o.splice(0,k))}if(L){if(this.sendBuffer.length>0){S=this.sendBuffer,this.sendBuffer=[],yc.session&&console.log(this.id,"rejoin: sending ".concat(S.length," messages buffered while disconnected")),T=W(S);try{for(T.s();!(C=T.n()).done;)(0,C.value)()}catch(e){T.e(e)}finally{T.f()}}}else yc.session&&console.log(this.id,"cannot rejoin seamlessly; rebooting model/view"),this.leave(!0),y=!1}R=this.networkQueue,this.networkQueue=[],Y=W(o),e.prev=28,Y.s();case 30:if((I=Y.n()).done){e.next=48;break}if("string"==typeof(V=I.value)[2]){e.next=36;break}this.convertReflectorMessage(V),e.next=44;break;case 36:e.prev=36,V[2]=this.decryptPayload(V[2])[0],e.next=44;break;case 40:return e.prev=40,e.t2=e.catch(36),this.connection.closeConnectionWithError("SYNC",Error("failed to decrypt message: ".concat(e.t2.message)),4200),e.abrupt("return");case 44:yc.messages&&console.log(this.id,"received in SYNC "+JSON.stringify(V)),this.networkQueue.push(V);case 46:e.next=30;break;case 48:e.next=53;break;case 50:e.prev=50,e.t3=e.catch(28),Y.e(e.t3);case 53:return e.prev=53,Y.f(),e.finish(53);case 56:if((i=this.networkQueue).push.apply(i,w(R)),c>this.reflectorTime&&this.timeFromReflector(c,"reflector"),!y){e.next=62;break}return yc.session&&console.log(this.id,"seamless rejoin successful"),this.sessionSpec.sessionJoined(),e.abrupt("return");case 62:if(this.timeline=p||"",yc.snapshot&&s&&console.log("".concat(this.id," fetching ").concat(m," ").concat(s)),!s){e.next=75;break}return e.prev=65,e.next=68,this.downloadEncrypted({url:s,gzip:!0,key:this.key,debug:yc.snapshot,json:!0,what:m});case 68:P=e.sent,e.next=75;break;case 71:return e.prev=71,e.t4=e.catch(65),this.connection.closeConnectionWithError("SYNC",Error("failed to fetch ".concat(m,": ").concat(e.t4.message)),4200),e.abrupt("return");case 75:if(this.connected){e.next=78;break}return console.log(this.id,"disconnected during SYNC"),e.abrupt("return");case 78:return a?this.install(P):(P&&(this.sessionSpec.snapshot=P),this.install()),yc.session&&console.log("".concat(this.id," fast-forwarding from ").concat(Math.round(this.vm.time))),e.next=82,new Promise((function(e){O.fastForwardHandler=function(t){O.connected&&O.vm?"error"===t?e(!1):t&&O.viewId in O.vm.views&&e(!0):(console.log(O.id,"disconnected during SYNC fast-forwarding"),e(!1))},Promise.resolve().then((function(){return O.stepSession("fastForward",{budget:200})}))}));case 82:return K=e.sent,delete this.fastForwardHandler,K&&yc.session&&console.log("".concat(this.id," fast-forwarded to ").concat(Math.round(this.vm.time))),K&&this.sessionSpec.sessionJoined(),e.abrupt("return");case 87:if((M=n)[1]>>>=0,"string"==typeof M[2]){e.next=95;break}yc.messages&&console.log(this.id,"received META "+JSON.stringify(M)),this.convertReflectorMessage(M),yc.messages&&console.log(this.id,"converted to "+JSON.stringify(M)),e.next=106;break;case 95:e.prev=95,N=this.decryptPayload(M[2]),H=Z(N,3),F=H[0],z=H[1],_=H[2],M[2]=F,z===this.viewId&&this.addToStatistics(_,this.lastReceived),yc.messages&&console.log(this.id,"received "+JSON.stringify(M)),e.next=106;break;case 102:return e.prev=102,e.t5=e.catch(95),this.connection.closeConnectionWithError("RECV",Error("failed to decrypt message: ".concat(e.t5.message)),4200),e.abrupt("return");case 106:return this.networkQueue.push(M),this.flags.rawtime&&(E=M[M.length-1]),this.timeFromReflector(M[0],"reflector",E),this.simulateIfNeeded&&Promise.resolve().then((function(){return O.simulateIfNeeded()})),e.abrupt("return");case 111:if(this.vm){e.next=113;break}return e.abrupt("return");case 113:return j="number"==typeof n?n:n.time,yc.ticks&&(J=r&&this.lastReceived-r-this.msPerTick*this.tickMultiplier|0,console.log(this.id,"Controller received TICK ".concat(j," ").concat(Math.abs(J)<5?"on time":J<0?"early":"late"," (").concat(J," ms)"))),this.timeFromReflector(j,"reflector"),this.tickMultiplier>1&&this.multiplyTick(j),this.simulateIfNeeded&&Promise.resolve().then((function(){return O.simulateIfNeeded()})),e.abrupt("return");case 119:return U=n.msg,Q=n.options,pt.showMessage(U,Q),e.abrupt("return");case 122:return yc.snapshot&&console.log("received REQU (snapshot request) from reflector"),this.cpuTime=12345,e.abrupt("return");case 125:console.warn("Unknown action:",t,n);case 126:case"end":return e.stop()}}),e,this,[[10,15],[28,50,53,56],[36,40],[65,71],[95,102]])}))),function(e,t){return f.apply(this,arguments)})},{key:"install",value:function(e){var t=Date.now(),n=this.sessionSpec,r=n.snapshot,i=n.initFn,o=n.options,s=Z(r.modelsById?["deserializ","snapshot"]:["initializ","root model"],2),a=s[0],c=s[1];yc.session&&console.log("".concat(this.id," ").concat(a,"ing ").concat(c));var l=new Ac(r,(function(){try{return i(o,e)}catch(e){throw et("init",e,"fatal"),e}}));if((yc.session||yc.snapshot&&r.modelsById)&&console.log("".concat(this.id," ").concat(c," ").concat(a,"ed in ").concat(Date.now()-t,"ms")),yc.initsnapshot&&!r.modelsById){yc.snapshot&&console.log("".concat(this.id," exercising snapshot and restore after init()"));var u=null;try{u=JSON.stringify(l.snapshot())}catch(e){throw et("initial snapshot",e,"fatal"),e}try{l=new Ac(JSON.parse(u),(function(){return i(o)}))}catch(e){throw et("initial snapshot resume",e,"fatal"),e}}var d=this.lastKnownTime(l);this.reflectorTime=Math.max(this.reflectorTime,d),this.setVM(l)}},{key:"setVM",value:function(e){this.vm=e,this.vm.controller=this}},{key:"sendJoin",value:function(){var e=this;this.syncReceived=!1,delete this.fastForwardHandler,this.rejoinTimeout&&(clearTimeout(this.rejoinTimeout),this.rejoinTimeout=0),yc.session&&console.log(this.id,"Controller sending JOIN");var t=this.getTickAndMultiplier(),n=t.tick,r=t.delay,i=this.sessionSpec,o=i.name,s=i.codeHash,a=i.appId,c=i.apiKey,l=i.persistentId,u=i.developerId,d=i.heraldUrl,h=i.rejoinLimit,f=i.autoSleep,p=i.computedCodeHash,m=i.flags,y={name:o,apiKey:c,appId:a,persistentId:l,url:pt.referrerURL(),sdk:sc,developerId:u,version:1,user:this.viewId,ticks:{tick:n,delay:r},dormantDelay:f,tove:this.tove,codeHash:s};d&&Object.assign(y,{heraldUrl:d}),h&&Object.assign(y,{leaveDelay:h+250}),p!==s&&Object.assign(y,{computedCodeHash:p}),m&&Object.assign(y,{flags:m}),this.connection.send(JSON.stringify({id:this.id,action:"JOIN",args:y})),this.syncReceiptTimeout=setTimeout((function(){delete e.syncReceiptTimeout,e.syncReceived||e.connection.closeConnectionWithError("join",Error("SYNC not received in time"))}),5e3)}},{key:"clearSyncReceiptTimeout",value:function(){this.syncReceiptTimeout&&(clearTimeout(this.syncReceiptTimeout),delete this.syncReceiptTimeout)}},{key:"connectionInterrupted",value:function(){var e=this;this.syncReceived&&(this.shouldLeaveWhenDisconnected?this.leave():this.rejoinTimeout||(this.rejoinTimeout=setTimeout((function(){yc.session&&console.log(e.id,"rejoin timed out"),e.rejoinTimeout=0,e.leave()}),this.sessionSpec.rejoinLimit)))}},{key:"leave",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.sessionSpec.rebootModelView;if(this.reset(),yc.session&&console.log(this.id,"resetting ".concat(e?"(but keeping)":"and discarding"," controller")),e||wc.delete(this),!this.sessionSpec)throw Error("do not discard sessionSpec!");t()}},{key:"encrypt",value:(h=i(regeneratorRuntime.mark((function e(t){var n,r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=A.random(16),r=uo.encrypt(t,this.key,{iv:n}),i=fo(t,this.key),o="".concat($i.stringify(n)).concat($i.stringify(i)).concat(r),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"deprecatedDefaultKey",get:function(){return bc||(bc=oo("THIS SHOULDN'T BE IN LOGS","",{keySize:8})),bc}},{key:"decrypt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.key,n=$i.parse(e.slice(0,24)),r=$i.parse(e.slice(24,68)),i=e.slice(68),o=uo.decrypt(i,t,{iv:n}),s="";try{s=to.stringify(o)}catch(e){}var a=fo(s,this.key);if(this.compareHmacs(r.words,a.words))return s;if(t!==this.deprecatedDefaultKey)return this.decrypt(e,this.deprecatedDefaultKey);throw Error("Decryption error")}},{key:"decryptBinary",value:function(e,t){var n,r,i,o,s,a=(new TextDecoder).decode(new Uint8Array(e,0,4));switch("string"==typeof t&&(t=$i.parse(t)),a){case"CRQ0":n=(new TextDecoder).decode(e),r=$i.parse(n.slice(4,28)),i=$i.parse(n.slice(28,72)),o=n.slice(72),s=uo.decrypt(o,t,{iv:r});break;case"CRQ1":n=new Uint8Array(e),r=A.create(n.subarray(4,20)),i=A.create(n.subarray(20,52)),o=A.create(n.subarray(52)),s=uo.decrypt({ciphertext:o},t,{iv:r});break;default:throw Error("".concat(this.id," unknown encryption version ").concat(a))}s.clamp();var c=fo(s,t);if(this.compareHmacs(i.words,c.words))return ne(s);if(t!==this.deprecatedDefaultKey)return this.decryptBinary(e,this.deprecatedDefaultKey);throw Error("Decryption error")}},{key:"encryptMessage",value:(d=i(regeneratorRuntime.mark((function e(t,n,r){var i,o,s,a,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.asState(),o=Z(i,3),s=o[0],a=o[1],c=o[2],e.next=3,this.encryptPayload([c,n,r]);case 3:return l=e.sent,e.abrupt("return",[s,a,l]);case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return d.apply(this,arguments)})},{key:"encryptPayload",value:(u=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.encrypt(JSON.stringify(t)));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"decryptPayload",value:function(e){return JSON.parse(this.decrypt(e))}},{key:"compareHmacs",value:function(e,t){for(var n=e.length===t.length,r=0;r<e.length;r++)e[r]!==t[r]&&(n=!1);return n}},{key:"sendMessage",value:function(e){var t=this;if(!this.viewOnly&&this.vm){var n=e.asState()[2].length;if(n>16384)console.warn("".concat(this.id," Message with payload of ").concat(n," bytes exceeds maximum ").concat(16384," and will not be sent to reflector."));else{!this.payloadSizeWarned&&n>4096&&(console.log("".concat(this.id," Message with payload of ").concat(n," bytes being sent to reflector. Maximum recommended is ").concat(4096,".")),this.payloadSizeWarned=!0);var r=Date.now(),i=this.rateLimitedSendTimes,o=this.rateLimitBuffer;if(_e.perSecondTally({requestedMessages:1}),o.length)this.addToRateLimitBuffer(e);else{var s=0;if(i.length&&this.synced){var a=i[i.length-1],c=1e3/this.eventRateLimit-(r-a);c>1&&(s=Math.ceil(c))}s?(this.addToRateLimitBuffer(e),setTimeout((function(){return t.serviceRateLimitBuffer()}),s)):(this.recordRateLimitedSend(r),this.socketSendMessage(e),_e.perSecondTally({sentSingleMessages:1,sentMessagesTotal:1,sentPayloadTotal:n}))}}}}},{key:"recordRateLimitedSend",value:function(e){var t=this.rateLimitedSendTimes;!this.synced&&t.length&&t[t.length-1]===e||(t.push(e),t.length>this.eventHistoryLimit&&t.shift()),!this.rateLimitSoftWarned&&t.length===this.eventHistoryLimit&&e-t[0]<1010&&(console.warn("".concat(this.id," Sends to reflector are at or above recommended limit of ").concat(this.eventHistoryLimit," within one second. Events will be bundled as necessary to keep to the limit.")),this.rateLimitSoftWarned=!0)}},{key:"addToRateLimitBuffer",value:function(e){_e.perSecondTally({bundledMessages:1});var t=Date.now(),n=e.asState(),r=n[2].length,i=this.rateLimitBuffer;if(i.length){var o=i[i.length-1],s=o.msgStates;if(o.totalPayload<4096)return s.push({msgState:n,bufferTime:t}),void(o.totalPayload+=r)}_e.perSecondTally({newBundles:1}),i.push({msgStates:[{msgState:n,bufferTime:t}],totalPayload:r});var a=i.length;yc.session&&a%5==0&&a!==this.rateLimitLastLogged&&(console.log("".concat(this.id," SEND rate-limit buffer grew to ").concat(a," event bundles (max ").concat(this.eventMaxBundles,")")),this.rateLimitLastLogged=a),a>this.eventMaxBundles?(console.error("".concat(this.id," Disconnecting after overflow of SEND rate-limit buffer.")),this.connection.closeConnectionWithError("SEND",Error("Send rate exceeded"),4200)):!this.rateLimitBufferWarned&&a>this.eventMaxBundles/2&&(console.warn("".concat(this.id," SEND rate-limit buffer is 50% full. If send rate does not drop, the app will be disconnected.")),this.rateLimitBufferWarned=!0)}},{key:"serviceRateLimitBuffer",value:function(){var e=this;if(this.connected){var t=this.rateLimitBuffer;if(t.length){var n=Date.now(),r=1e3/this.eventRateLimit,i=this.rateLimitedSendTimes;if(i.length){var o=i[i.length-1];if(r-(n-o)>0)return}var s=t.shift(),a=s.msgStates,c=s.totalPayload,l=[],u=0;if(a.forEach((function(e){l.push(e.msgState),u+=n-e.bufferTime})),1===l.length){var d=tl.fromState(l[0],this.vm);this.socketSendMessage(d)}else{var h=new tl(this.vm.time,0,"_","handleBundledEvents",[l]);this.socketSendMessage(h)}if(this.recordRateLimitedSend(n),_e.perSecondTally({sentBundles:1,sentMessagesTotal:a.length,sendDelay:u,sentBundlePayload:c,sentPayloadTotal:c}),yc.session&&this.connected){var f=t.length;f&&f%5==0&&f!==this.rateLimitLastLogged&&(console.log("".concat(this.id," SEND rate-limit buffer dropped to ").concat(f," event bundles")),this.rateLimitLastLogged=f)}t.length&&setTimeout((function(){return e.serviceRateLimitBuffer()}),r)}}}},{key:"socketSendMessage",value:(l=i(regeneratorRuntime.mark((function e(t){var n,r,i,o,s=this,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,e.next=3,this.encryptMessage(t,this.viewId,Date.now());case 3:if(r=e.sent,i=n?"tagged SEND ".concat(t.asState()," with tags ").concat(JSON.stringify(n)):"SEND ".concat(t.asState()),this.connected){e.next=8;break}return this.vm&&(yc.sends&&console.log(this.id,"buffering ".concat(i)),this.sendBuffer.push((function(){return s.socketSendMessage(t,n)}))),e.abrupt("return");case 8:yc.sends&&console.log(this.id,"sending ".concat(i)),o={id:this.id,action:"SEND",args:[].concat(w(r),[this.latency])},n&&(o.tags=n),this.lastSent=Date.now(),this.connection.send(JSON.stringify(o));case 13:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"sendTagged",value:(c=i(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.viewOnly){e.next=2;break}return e.abrupt("return");case 2:this.socketSendMessage(t,n);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return c.apply(this,arguments)})},{key:"sendTutti",value:(s=i(regeneratorRuntime.mark((function e(t){var n,r,i,o,s,a,c,l,u,d,h,f,p,m,y=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.time,r=t.topic,i=t.data,o=t.localContext,s=void 0===o?null:o,a=t.firstMessage,c=void 0===a?null:a,l=t.wantsVote,u=void 0===l||l,d=t.tallyTarget,h=void 0===d?null:d,!this.viewOnly){e.next=3;break}return e.abrupt("return");case 3:if(e.t0=c,!e.t0){e.next=8;break}return e.next=7,this.encryptMessage(c,this.viewId,Date.now());case 7:e.t0=e.sent;case 8:if(f=e.t0,p=Q(i),this.connected){e.next=13;break}return this.vm&&(yc.sends&&console.log(this.id,'buffering "'.concat(r,'" TUTTI ').concat(p," ").concat(c&&c.asState())),this.sendBuffer.push((function(){return y.sendTutti({time:n,topic:r,data:i,localContext:s,firstMessage:c,wantsVote:u,tallyTarget:h})}))),e.abrupt("return");case 13:yc.sends&&console.log(this.id,'sending "'.concat(r,'" TUTTI ').concat(p," ").concat(c&&c.asState())),this.lastSent=Date.now(),m="".concat(r,"@").concat(n),this.connection.send(JSON.stringify({id:this.id,action:"TUTTI",args:[n,0,p,f,u,h,m]})),this.tuttiHistory.length>100&&this.tuttiHistory.shift(),this.tuttiHistory.push({time:n,tuttiKey:m,dummyTuttiSeq:0,payload:p,localContext:s});case 20:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"sendLog",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.connected?(yc.sends&&console.log(this.id,"sending LOG"),n.length<2&&(n=n[0]),this.connection.send(JSON.stringify({action:"LOG",args:n}))):this.vm&&(yc.sends&&console.log(this.id,"buffering LOG"),this.sendBuffer.push((function(){return e.sendLog.apply(e,w(n))})))}},{key:"addToStatistics",value:function(e,t){this.latency=t-e,this.latencyHistory&&(this.latencyHistory.length>=100&&this.latencyHistory.shift(),this.latencyHistory.push({time:t,ms:this.latency}))}},{key:"latencies",get:function(){return this.latencyHistory||(this.latencyHistory=[]),this.latencyHistory}},{key:"getTickAndMultiplier",value:function(){var e=this.sessionSpec.options,t=Z(((["number","string"].includes(n(e.tps))?e.tps:["number","string"].includes(n(this.sessionSpec.tps))?this.sessionSpec.tps:20)+"x").split("x").map((function(e){return Number.parseFloat("0"+e)})),2),r=t[0],i=t[1],o=1e3/Math.max(1/30,Math.min(60,r)),s=Math.max(1,i),a=o,c=0;return s>1&&!vc&&(a=o/s,c=Math.ceil(a*(s-1))),{msPerTick:a,multiplier:s,tick:o,delay:c}}},{key:"simulate",value:function(e){var t=this;if(!this.vm)return!0;try{var n=!0;if(this.networkQueue.length+this.vm.messages.size===0)n=this.vm.advanceTo(this.reflectorTime,e);else{for(var r=_e.begin("simulate");n;){var i=this.networkQueue[0];if(!i)break;if(!(n=this.vm.advanceTo(i[0],e)))break;this.networkQueue.shift();var o=this.vm.scheduleExternalMessage(i);n=this.vm.advanceTo(o.time,e),this.cpuTime+=5}n&&(n=this.vm.advanceTo(this.reflectorTime,e)),this.cpuTime+=Math.max(.01,_e.end("simulate")-r)}_e.backlog(this.backlog);var s=this.lag,a=Math.max(200,.1*this.msPerTick),c=Math.max(2e3,.2*this.msPerTick);if("boolean"==typeof this.synced&&this.viewed&&(this.synced&&s>c||!this.synced&&s<a))!this.synced?this.syncTimer||(this.syncTimer=setTimeout((function(){delete t.syncTimer,t.connected&&t.lag<a&&t.applySyncChange(!0)}),200)):this.applySyncChange(!1);return this.synced&&n&&this.cpuTime>5e3&&(this.triggeringCpuTime=this.cpuTime,this.cpuTime=0,this.isBeingAnimated()?setTimeout((function(){return t.scheduleSnapshot()}),Math.floor(2e3*Math.random())):this.scheduleSnapshot()),n}catch(e){return et("simulate",e),this.connection.closeConnectionWithError("simulate",e),"error"}}},{key:"stepSession",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=_e.stepSession(t.frameTime,!0);n&&console.log(n);var r=this.backlog,i=this.latency,o=this.starvation,s=this.activity;if("animation"===e){_e.animationFrame(t.frameTime,{backlog:r,starvation:o,latency:i,activity:s,users:this.users});var a=Date.now();if(this.lastAnimationEnd){var c=a-this.lastAnimationEnd;if(!0===this.animationGapCheck&&c>200&&(this.animationGapCheck=[],yc.session&&console.log("".concat(this.id," animation has stopped (too long between steps)"))),!0!==this.animationGapCheck){var l=this.animationGapCheck;l.push(c),l.length>4&&l.shift(),4===l.length&&l.reduce((function(e,t){return e+t}),0)<=400&&(this.animationGapCheck=!0,yc.session&&console.log("".concat(this.id," animation has started")))}}this.lastAnimationEnd=a}if(this.connected){if(this.vm){var u;switch(e){case"animation":var d=t.expectedSimFPS,h=Date.now(),f=gc.reduce((function(e,t){return e+t}),0)/gc.length;if(!1===(u=this.simulate(h+Math.min(f,200)))){var p=0===d?0:1e3/d*4;this.backlog>p&&(u=this.simulate(h+200-f))}"error"!==u&&(gc.push(Date.now()-h),gc.length>4&&gc.shift());break;case"fastForward":case"background":u=this.simulate(Date.now()+t.budget);break;default:console.warn(e)}this.fastForwardHandler&&this.fastForwardHandler(u),"error"!==u&&(_e.begin("update"),this.processModelViewEvents("animation"===e),_e.end("update"),this.serviceRateLimitBuffer(),"animation"===e&&(t.view&&(_e.begin("render"),this.inViewRealm((function(){return t.view.update(t.frameTime)})),_e.end("render")),this.lastAnimationEnd=Date.now()))}}else this.isInBackground()||this.checkForConnection(!0)}},{key:"applySyncChange",value:function(e){yc.session&&console.log(this.id,"synced=".concat(e)),this.synced=e,pt.showSyncWait(!e),this.vm.publishFromView(this.viewId,"synced",e)}},{key:"inViewRealm",value:function(e){var t=this;return kt(this.vm,(function(){return e(t.vm)}))}},{key:"processModelViewEvents",value:function(e){return this.vm?this.vm.processModelViewEvents(e):0}},{key:"timeFromReflector",value:function(e,t,n){e<this.reflectorTime?("controller"!==t||yc.ticks)&&console.warn("time is ".concat(this.reflectorTime,", ignoring time ").concat(e," from ").concat(t)):("boolean"!=typeof this.synced&&(this.synced=!1),this.reflectorTime=e,this.extrapolatedTimeBase=Date.now()-e,this.vm&&_e.backlog(this.backlog),this.tickHook&&this.tickHook(e,n))}},{key:"multiplyTick",value:function(e){var t=this;this.localTicker&&globalThis.clearInterval(this.localTicker);var n=this.msPerTick,r=this.tickMultiplier,i=1;this.localTicker=globalThis.setInterval((function(){t.timeFromReflector(Math.round(e+i*n),"controller"),yc.ticks&&console.log(t.id,"Controller generate TICK "+t.reflectorTime,i),++i>=r&&(globalThis.clearInterval(t.localTicker),t.localTicker=0)}),n)}},{key:"startStepping",value:function(e){var t=this;window.requestAnimationFrame((function n(r){t.leaving||(t.isOutOfSight()||e(r),window.requestAnimationFrame(n))}))}},{key:"setUpActivityChecks",value:function(){var e=this,t=null;if(this.isOutOfSight=function(){return!(ac||"hidden"!==document.visibilityState&&t)},this.isBeingAnimated=function(){var t=!0===e.animationGapCheck,n=Date.now()-e.lastAnimationEnd<200;return t&&!n&&(e.animationGapCheck=[],yc.session&&console.log("".concat(e.id," animation has stopped (too long since last step)"))),t&&n},this.isInBackground=function(){return e.isOutOfSight()||!e.isBeingAnimated()},!ac){new IntersectionObserver((function(e,n){return t=e[0].isIntersecting})).observe(document.body)}var n,r=this.sessionSpec.autoSleep;if(r){var i=1e3*r,o=0,s=0;n=function(){var t=Date.now();t-o<980||(o=t,e.isOutOfSight()?s?t-s>i&&(e.dormantDisconnect(),s=0):s=t:s=0)}}var a=function(){e.leaving?c&&(clearInterval(c),c=null):e.connected&&e.vm&&(n&&n(),e.isBeingAnimated()||e.connection.keepAlive(Date.now()))},c=setInterval(a,1e3);this.simulateIfNeeded=function(){if(!e.isBeingAnimated()&&(a(),e.connected)){var t=.9*e.msPerTick;r&&(t=Math.min(t,200));var n=e.synced?"background":"fastForward";e.stepSession(n,{budget:t})}}}},{key:"toString",value:function(){return"Controller[".concat(this.id,"]")}},{key:e,value:function(){return this.toString()}}]),r}(Symbol.toPrimitive),Gc=function(){function e(t){o(this,e),this.controller=t,this.socketLastSent=0,this.connectBlocked=!1,this.connectRestricted=!1,this.connectHasBeenCalled=!1,this.reconnectDelay=0,this.missingTickThreshold=1/0}return a(e,[{key:"id",get:function(){return this.controller.id}},{key:"setTick",value:function(e){this.missingTickThreshold=Math.min(3*e,45e3)}},{key:"connected",get:function(){return!(!this.socket||this.socket.readyState!==WebSocket.OPEN)}},{key:"checkForConnection",value:function(e){this.socket||this.connectHasBeenCalled||this.connectBlocked||this.connectRestricted&&!e||this.connectToReflector()}},{key:"connectToReflector",value:function(){var e=this;if(!this.socket&&!this.connectHasBeenCalled){this.connectHasBeenCalled=!0,this.connectBlocked=!1,this.connectRestricted=!1;var t=mc,n={},r=this.controller.sessionSpec.token;if(r&&(n.token=r),H.reflector){var i=H.reflector.toUpperCase();"CF"===i||i.match(/^[A-Z]{3}$/)?(t=yc.reflector?"wss://croquet.network/reflector/dev/":"wss://croquet.network/reflector/",3===i.length&&(n.colo=i)):H.reflector.match(/^[-a-z0-9]+$/i)?n.region=H.reflector:t=H.reflector}if(!t.match(/^wss?:/))throw Error("Cannot interpret reflector address "+t);t.endsWith("/")||(t+="/");for(var o=new URL(t+this.id),s=0,a=Object.entries(n);s<a.length;s++){var c=Z(a[s],2),l=c[0],u=c[1];o.searchParams.append(l,u)}var d=new WebSocket(o);d.onopen=function(t){var n=e.socket;n&&(n.onopen=n.onmessage=n.onerror=n.onclose=null),e.socket=d,e.connectHasBeenCalled=!1,yc.session&&console.log(e.id,e.socket.constructor.name,"connected to",e.socket.url),e.reconnectDelay=0,_e.connected(!0),e.controller.sendJoin()},d.onmessage=function(t){d===e.socket&&e.receive(t.data)},d.onerror=function(t){yc.session&&console.log(e.id,d.constructor.name,"connection error"),e.connectHasBeenCalled=!1,e.controller.clearSyncReceiptTimeout()},d.onclose=function(t){e.socketClosed(t.code,t.reason)}}}},{key:"socketClosed",value:function(e,t){var n=this;this.controller.clearSyncReceiptTimeout();var r=1e3!==e&&e<4100,i=4110===e;i||1e3===e||this.reconnectDelay||setTimeout((function(){n.connected||pt.showMessage("Connection closed: ".concat(e," ").concat(t),{level:r?"error":"fatal"})}),500),yc.session&&console.log(this.id,"".concat(this.socket?this.socket.constructor.name+" closed":"closed before opening,"," with code: ").concat(e," ").concat(t)),_e.connected(!1),i?this.connectRestricted=!0:this.connectBlocked=!0,this.disconnected(),r&&(yc.session&&console.log(this.id,"reconnecting in ".concat(this.reconnectDelay," ms")),this.reconnectTimeout=globalThis.setTimeout((function(){delete n.reconnectTimeout,n.connectToReflector()}),this.reconnectDelay),this.reconnectDelay=Math.min(3e4,Math.round((this.reconnectDelay+100)*(1+Math.random()))))}},{key:"disconnected",value:function(){this.socket&&(this.socket=null,this.lastReceived=0,this.socketLastSent=0,this.stalledSince=0,this.connectHasBeenCalled=!1,this.controller.connectionInterrupted())}},{key:"send",value:function(e){this.socketLastSent=Date.now(),this.socket.send(e)}},{key:"receive",value:function(e){this.lastReceived=Date.now();var t=JSON.parse(e),n=t.id,r=t.action,i=t.args;if(n)try{this.controller.receive(r,i)}catch(e){this.closeConnectionWithError("receive",e)}else if("PONG"===r){if(yc.pong&&console.log("PONG after",Date.now()-i,"ms"),this.pongHook)try{this.pongHook(i)}catch(e){console.error(e)}}else console.warn("Unknown action",r)}},{key:"dormantDisconnect",value:function(){this.connected&&(yc.session&&console.log(this.id,"dormant; disconnecting from reflector"),this.closeConnection(4110,"Going dormant"))}},{key:"closeConnectionWithError",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4e3;console.error(t),console.warn("closing socket"),n>=4100&&4110!==n&&(this.controller.leaving=function(){}),this.closeConnection(n,"Error in "+e)}},{key:"closeConnection",value:function(e,t){this.socket&&(this.socket.onclose=null,this.socket.close(e,t),this.socketClosed(e,t))}},{key:"PULSE",value:function(e){this.connected&&(0===this.socket.bufferedAmount?(this.send(JSON.stringify({action:"PULSE"})),this.stalledSince=0):this.stalledSince&&e-this.stalledSince>500?console.log("".concat(this.id," Reflector connection stalled: ").concat(this.socket.bufferedAmount," bytes unsent for ").concat(e-this.stalledSince," ms")):this.stalledSince=Date.now())}},{key:"keepAlive",value:function(e){0!==this.lastReceived&&(e-this.socketLastSent>25e3?this.PULSE(e):e-this.lastReceived>5e4?this.closeConnectionWithError("connection",Error("Reflector has gone away")):e-this.lastReceived>this.missingTickThreshold&&this.PULSE(e))}},{key:"PING",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();this.connected&&this.send(JSON.stringify({action:"PING",args:e}))}}]),e}();globalThis.setInterval((function(){var e,t=W(wc);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.connected&&n.vm&&n.connection.keepAlive(Date.now())}}catch(e){t.e(e)}finally{t.f()}}),100);var Sc=Symbol("hash"),Wc=Symbol("key"),Tc=Symbol("url"),Cc=new Map;function Rc(e){return H.has("debug",e,!1)}function Yc(e){return e.replace(/.*\//,"")}function Ic(e){return e.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Vc(e){return e.replace(/-/g,"+").replace(/_/g,"/").padEnd(e.length+3&-4,"=")}function Pc(e,t){return t.replace(/[\s\S]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)^e.charCodeAt(0))}))}var Kc=function(){function e(t,n,r){o(this,e);var i=Cc.get(t);if(i)return Rc("data")&&console.log("Croquet.Data: using cached handle for ".concat(t)),i;if(r.slice(-43)!==t)throw Error("Croquet Data: malformed URL");Object.defineProperty(this,Sc,{value:t}),Object.defineProperty(this,Wc,{value:n}),Object.defineProperty(this,Tc,{value:r}),Cc.set(t,this),Rc("data")&&console.log("Croquet.Data: created new handle for ".concat(t))}var t,r;return a(e,null,[{key:"store",value:(r=i(regeneratorRuntime.mark((function t(r,i){var o,s,a,c,l,u,d,h,f,p=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=p.length>2&&void 0!==p[2]&&p[2],"object"===n(r)&&(console.warn("Deprecated: Croquet.Data.store(sessionId, data) called without sessionId"),i=r),!Ac.hasCurrent()){t.next=4;break}throw Error("Croquet.Data.store() called from Model code");case 4:return s=Lc(r),a=s.appId,c=s.persistentId,l=s.uploadEncrypted,u=A.random(32).toString($i),d="apps/".concat(a,"/").concat(c,"/data/%HASH%"),t.next=9,l({path:d,content:i,key:u,keep:o,debug:Rc("data"),what:"shared data"});case 9:return h=t.sent,f=Yc(h),t.abrupt("return",new e(f,u,h));case 12:case"end":return t.stop()}}),t)}))),function(e,t){return r.apply(this,arguments)})},{key:"fetch",value:(t=i(regeneratorRuntime.mark((function e(t,r){var i,o,s,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"===n(t)&&(console.warn("Deprecated: Croquet.Data.fetch(sessionId, handle) called without sessionId"),r=t),!Ac.hasCurrent()){e.next=3;break}throw Error("Croquet.Data.fetch() called from Model code");case 3:if(i=Lc(t),o=i.downloadEncrypted,s=r&&r[Sc],a=r&&r[Wc],c=r&&r[Tc],"string"==typeof s&&"string"==typeof a&&"string"==typeof c){e.next=9;break}throw Error("Croquet.Data.fetch() called with invalid handle");case 9:return e.abrupt("return",o({url:c,key:a,debug:Rc("data"),what:"shared data"}));case 10:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})},{key:"hash",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base64url";"function"==typeof e&&(e=Function.prototype.toString.call(e)),"string"==typeof e?e=(new TextEncoder).encode(e):e&&e.constructor===DataView?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e&&e.constructor===ArrayBuffer?e=new Uint8Array(e):ArrayBuffer.isView(e)||(e=(new TextEncoder).encode(Q(e)));var n=$(A.create(e));switch(t){case"hex":return n.toString();case"base64":return n.toString($i);case"base64url":return Ic(n.toString($i));default:throw Error('Croquet.Data: unknown hash output "'.concat(t,'", expected "hex"/"base64"/"base64url"'))}}},{key:"fromId",value:function(e){var t,n,r,i,o=e.slice(0,1);switch(o){case"0":t=e.slice(1,44),n=e.slice(44),r="".concat("https://files.croquet.io","/sessiondata/").concat(t);break;case"1":t=e.slice(1,44),n=e.slice(44,87)+"=",i=e.slice(87),r="".concat("https://files.croquet.io","/apps/").concat(i,"/data/").concat(t);break;case"2":t=e.slice(1,44),i=Pc(n=Vc(e.slice(44,87)),atob(Vc(e.slice(87)))),r="".concat("https://files.croquet.io","/apps/").concat(i,"/data/").concat(t);break;case"3":t=(r=Pc(n=Vc(e.slice(1,44)),atob(Vc(e.slice(44))))).slice(-43);break;default:throw Error("Croquet.Data expected handle v0-v".concat("3"," got v").concat(o))}return new this(t,n,r)}},{key:"toId",value:function(e){if(!e)return"";var t=e[Sc],n=e[Wc],r=e[Tc];if(r.slice(-43)!==t)throw Error("Croquet Data: malformed URL");var i=Ic(n),o=Ic(btoa(Pc(n,r)));return"".concat("3").concat(i).concat(o)}}]),e}(),Mc={cls:Kc,write:function(e){return Kc.toId(e)},read:function(e){return Kc.fromId(e)}},Nc=null,Hc=null;var Fc=function(e){l(n,p(Error));var t=b(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n)}();function zc(){if(!globalThis.CroquetViewMath){globalThis.CroquetMath.random=function(){return Nc.random()},globalThis.CroquetViewMath=t({},Math);for(var e=function(){var e=Z(r[n],2),t=e[0],i=e[1],o=Math[t];Math[t]=1===i.length?function(e){return Nc?i(e):o(e)}:function(e,t){return Nc?i(e,t):o(e,t)}},n=0,r=Object.entries(globalThis.CroquetMath);n<r.length;n++)e()}if(!globalThis.CroquetViewDate){var i=function(e,t){return a||(a=!0,console.warn(new Fc("".concat(e," used in Model code")))),t},o=function e(t,n,r,o,a,c,l){var u=this instanceof e,d=[t,n,r,o,a,c,l];if(d.length=arguments.length,Nc)switch(i(u?"new Date()":"Date()"),arguments.length){case 0:d.push(Nc.time);break;case 1:break;default:d[0]=s.UTC.apply(s,d),d.length=1}var h=f(s,d);return u?h:""+h},s=globalThis.Date,a=!1;o.prototype=s.prototype,o.UTC=s.UTC,o.now=function(){return Nc?i("Date.now()",Nc.time):s.now()},o.parse=function(){return Nc?i("Date.parse()",0):s.parse.apply(s,arguments)},globalThis.CroquetViewDate=s,globalThis.Date=o}}Object.defineProperty(Fc.prototype,"name",{value:"CroquetWarning"});var _c={};function Ec(e,t){var n=JSON.parse(atob(e.slice(1,-1))),r=n.qPara,i=n.qArgs,o=n.qFn,s=JSON.stringify(r),a=_c[s]||(_c[s]=f(Function,w(r)));return"number"==typeof o&&(i[o]=a),a.call.apply(a,[t].concat(w(i))).bind(t)}function jc(e,t){if(Nc)throw Error("VirtualMachine confusion");if(!(e instanceof Ac))throw Error("not a VM: "+e);var n=Nc;try{Nc=e,globalThis.CROQUETVM=e,t()}finally{Nc=n}}for(var Jc=["handleModelEventInModel","handleBundledEvents","publishFromModelOnly","handlePollForSnapshot","handleTuttiResult","handleTuttiDivergence","handleSnapshotVote","handlePersistVote","handleModelEventInView","noop"],Uc={},Qc=0;Qc<Jc.length;Qc++)Uc[Jc[Qc]]=Qc;var Oc=new WeakMap;function Dc(e){Oc.set(e,null)}var Bc=function(){function e(){o(this,e)}return a(e,[{key:"random",value:function(){throw Error("Math.random() cannot be used in Model.evaluate()")}}]),e}(),Ac=function(e){function t(e,n){var r=this;o(this,t),zc(),Hc={snapshot:H.has("debug","snapshot",!1),session:H.has("debug","session",!1)},Dc(this),jc(this,(function(){Lt(r,(function(){if(r.modelsById={},r.modelsByName={},r.messages=new Ai((function(e,t){return e.before(t)})),r.subscriptions={},r.views={},r._random=function(){throw Error("You must not use random when applying state!")},r.id=e.id,r.time=0,r.seq=4294967280,r.externalTime=0,r.externalSeq=r.seq,r.futureSeq=0,r.lastSnapshotPoll=0,r.lastPersistencePoll=0,r.inPersistenceCoolOff=!1,r.persisted="",r.modelsId=0,r.controller=null,e.modelsById){for(var t=ol.newOrRecycled(r).readVM(e,"_"),i=[],o=0,s=Object.keys(t);o<s.length;o++){var a=s[o];a in r||"meta"===a?"messages"===a?i=t.messages:r[a]=t[a]:console.warn("Ignoring property snapshot.".concat(a))}var c,l=W(i);try{for(l.s();!(c=l.n()).done;){var u=c.value;r.messages.add(u.convertIfNeeded(r))}}catch(e){l.e(e)}finally{l.f()}}else r._random=new j(e.id,{state:!0}),n(r),r.addSubscription(r,"__VM__","__peers__",r.generateJoinExit)}))}))}return a(t,[{key:"registerModel",value:function(e,t){if(Nc!==this)throw Error("You can only create models from model code!");return t||(t="M"+ ++this.modelsId),this.modelsById[t]=e,t}},{key:"deregisterModel",value:function(e){if(Nc!==this)throw Error("You can only destroy models from model code!");var t=this.modelsById;delete this.modelsById[e];for(var n=0,r=Object.entries(this.modelsByName);n<r.length;n++){var i=Z(r[n],2),o=i[0];t===i[1]&&delete this.modelsByName[o]}this.messages.removeMany((function(t){return t.hasReceiver(e)}))}},{key:"lookUpModel",value:function(e){if("_"===e)return this;var t=this.modelsById[e];if(t)return t;var n=Z(e.match(/^([^#]+)#(.*)$/),3);n[0];var r=n[1],i=n[2];return this.modelsById[r].lookUp(i)}},{key:"get",value:function(e){return this.modelsByName[e]}},{key:"set",value:function(e,t){if(Nc!==this)throw Error("You can only make a model well-known from model code!");this.modelsByName[e]=t}},{key:"noop",value:function(){}},{key:"generateJoinExit",value:function(e){var t=e.entered,n=e.exited,r=e.count;if(t.length===r){var i,o=W(n=Object.keys(this.views));try{for(o.s();!(i=o.n()).done;){var s=i.value;this.views[s].extraConnections=0}}catch(e){o.e(e)}finally{o.f()}}if(0!==t.length&&0!==n.length){var a=t.filter((function(e){return n.includes(e)}));if(0!==a.length&&(t=t.filter((function(e){return!a.includes(e)})),n=n.filter((function(e){return!a.includes(e)})),0===t.length&&0===n.length))return}var c,l=W(n);try{for(l.s();!(c=l.n()).done;){var u=c.value;if(this.views[u]){if(this.views[u].extraConnections){this.views[u].extraConnections--,Hc.session&&console.log("".concat(this.id," @").concat(this.time,"#").concat(this.seq," view ").concat(u," closed extra connection"));continue}delete this.views[u],this.publishFromModelOnly(this.id,"view-exit",u)}else console.error("".concat(this.id," @").concat(this.time,"#").concat(this.seq," view ").concat(u," exited without being present - this should not happen")),this.controller.sendLog("view-exit-mismatch @".concat(this.time,"#").concat(this.seq," ").concat(u," left without being present"))}}catch(e){l.e(e)}finally{l.f()}var d,h=W(t);try{for(h.s();!(d=h.n()).done;){var f=d.value;this.views[f]?(Hc.session&&console.log("".concat(this.id," @").concat(this.time,"#").concat(this.seq," view ").concat(f," opened another connection")),this.views[f].extraConnections=(this.views[f].extraConnections||0)+1):(this.views[f]={},this.publishFromModelOnly(this.id,"view-join",f))}}catch(e){h.e(e)}finally{h.f()}var p=Object.values(this.views).reduce((function(e,t){return e+1+(t.extraConnections||0)}),0);r!==p&&(console.error("@".concat(this.time,"#").concat(this.seq," view count mismatch (model: ").concat(p,", reflector: ").concat(r,") - this should not happen")),this.controller.sendLog("view-exit-mismatch @".concat(this.time,"#").concat(this.seq," connections model: ").concat(p," reflector: ").concat(r)))}},{key:"scheduleExternalMessage",value:function(e){var t=tl.fromState(e,this);if(t.time<this.time)throw Error("past message from reflector "+e);var n=this.externalSeq+1>>>0;if(t.seq!==n)throw Error("External message error. Expected message #".concat(n," got #").concat(t.seq));return this.externalTime=t.time,this.externalSeq=t.seq,t.seq=2*t.seq+1,this.verifyExternal(t),this.messages.add(t),t}},{key:"verifyExternal",value:function(e){if("_"!==e.receiver)throw Error("invalid receiver in external message: ".concat(e));if(!(e.selector in Uc))throw Error("unexpected external message: ".concat(e.selector))}},{key:"futureSend",value:function(e,t,n,r){if(e.every)return this.futureRepeat(e.every,t,n,r);if(e<0)throw Error("attempt to send future message into the past");this.futureSeq=this.futureSeq+1>>>0;var i=new tl(this.time+e,2*this.futureSeq,t,n,r);return this.messages.add(i),i}},{key:"futureRepeat",value:function(e,t,n,r){this.futureSend(e,this.id,"futureExecAndRepeat",[e,t,n,r])}},{key:"futureExecAndRepeat",value:function(e,t,n,r){var i=this.lookUpModel(t);if("function"==typeof i[n])try{i[n].apply(i,w(r))}catch(e){et("future message ".concat(i,".").concat(n),e)}else{var o=Ec(n,i);try{o.apply(void 0,w(r))}catch(e){et("future message ".concat(i," ").concat(o),e)}}this.futureRepeat(e,t,n,r)}},{key:"future",value:function(e,t,n,r){var i=this.asQFunc(e,n);if("string"==typeof i)return this.futureSend(t,e.id,i,r);var o=this;return new Proxy(e,{get:function(n,r){if("function"==typeof e[r])return function(){if(o.lookUpModel(e.id)!==e)throw Error("future send to unregistered model");for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.futureSend(t,e.id,r,i)};throw Error("Tried to call "+r+"() on future of "+Object.getPrototypeOf(e).constructor.name+" which is not a function")}})}},{key:"advanceTo",value:function(e,t){if(Nc)throw Error("cannot advance time from model code");for(var n,r=0;(n=this.messages.peek())&&n.time<=e;){var i=n,o=i.time,s=i.seq;if(o<this.time)throw Error("past message encountered: "+n);if(1&s&&(this.seq=this.seq+1>>>0,s/2>>>0!==this.seq))throw Error("Sequence error: expected ".concat(this.seq," got ").concat(s/2>>>0," in ").concat(n));if(this.messages.poll(),this.time=n.time,n.executeOn(this),++r>100&&(r=0,Date.now()>t))return!1}return this.time=e,!0}},{key:"asQFunc",value:function(e,t){if("string"==typeof t)return t;if("function"==typeof t){if(e[t.name]===t)return t.name;for(var n=e;null!==n;){for(var r=0,i=Object.entries(Object.getOwnPropertyDescriptors(n));r<i.length;r++){var o=Z(i[r],2),s=o[0];if(o[1].value===t)return s}n=Object.getPrototypeOf(n)}qe("subscription handler is not a method of ".concat(e,": ").concat(t,"\n"),{only:"once"});var a=t.toString().match(/^\(?([a-z][a-z0-9]*)?\)? *=> *this\.([a-z][a-z0-9]*) *\( *([a-z][a-z0-9]*)? *\) *$/i);return!a||a[3]&&a[3]!==a[1]?function(e,t){"function"==typeof e&&(t=e,e={});var n=Object.keys(e).concat(["return "+t]),r=Object.values(e),i={qPara:n,qArgs:r},o=r.indexOf(t);return o>=0&&(r[o]=n[o],i.qFn=o),"{".concat(btoa(JSON.stringify(i)),"}")}(t):a[2]}return null}},{key:"addSubscription",value:function(e,t,n,r){if(Nc!==this)throw Error("Cannot add a model subscription from outside model code");var i=this.asQFunc(e,r);if("string"!=typeof i)throw Error('Subscription handler for "'.concat(n,'" must be a method name'));if(i.indexOf(".")<0&&"function"!=typeof e[i]&&"{"!==i[0])throw Error('Subscriber method for "'.concat(n,'" not found: ').concat(e,".").concat(i,"()"));var o=t+":"+n,s=(e===this?"_":e.id)+"."+i;if(this.subscriptions[o]){if(-1!==this.subscriptions[o].indexOf(s))throw Error("".concat(e,".").concat(i," already subscribed to ").concat(n))}else this.subscriptions[o]=[];this.subscriptions[o].push(s)}},{key:"removeSubscription",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"*";if(Nc!==this)throw Error("Cannot remove a model subscription from outside model code");var i=t+":"+n,o=this.subscriptions[i];if(o)if("*"===r){var s=o.filter((function(t){return Z(t.split("."),1)[0]!==e.id}));0===s.length?delete this.subscriptions[i]:this.subscriptions[i]=s}else{var a=this.asQFunc(e,r);if("string"!=typeof a)throw Error('Invalid unsubscribe args for "'.concat(n,'" in ').concat(e,": ").concat(r));var c=e.id+"."+a,l=o.indexOf(c);-1!==l&&(o.splice(l,1),0===o.length&&delete this.subscriptions[i])}}},{key:"removeAllSubscriptionsFor",value:function(e){for(var t="".concat(e.id,":"),n="".concat(e.id,"."),r=0,i=Object.entries(this.subscriptions);r<i.length;r++){var o=Z(i[r],2),s=o[0],a=o[1];if(s.startsWith(t))delete this.subscriptions[s];else{for(var c=a.length-1;c>=0;c--)a[c].startsWith(n)&&a.splice(c,1);0===a.size&&delete this.subscriptions[s]}}}},{key:"publishFromModel",value:function(e,t,n){if(Nc!==this)throw Error("Cannot publish a model event from outside model code");var r=t.endsWith("#reflected");r&&(t=t.slice(0,t.length-"#reflected".length));var i=e+":"+t;this.handleModelEventInModel(i,n,r),this.handleModelEventInView(i,n)}},{key:"publishFromModelOnly",value:function(e,t,n){if(Nc!==this)throw Error("Cannot publish a model event from outside model code");var r=e+":"+t;this.handleModelEventInModel(r,n)}},{key:"publishFromView",value:function(e,t,n){if(Nc)throw Error("Cannot publish a view event from model code");var r=e+":"+t;this.handleViewEventInModel(r,n),this.handleViewEventInView(r,n)}},{key:"handleBundledEvents",value:function(e){var t,n=W(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=tl.fromState(r,this);this.verifyExternal(i),i.executeOn(this,!0)}}catch(e){n.e(e)}finally{n.f()}}},{key:"handleModelEventInModel",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Nc!==this)throw Error("handleModelEventInModel called from outside model code");if(r){if(!0!==this.controller.synced)return;var i=e+"#__vote",o=e+"#divergence",s=!!bt.subscriptions[i],a=!!this.subscriptions[e],c=!!this.subscriptions[o];s&&c&&console.log("divergence subscription for ".concat(e," overridden by vote subscription"));var l,u=a?new tl(this.time,0,"_","handleModelEventInModel",[e,t]):null;l=s?["handleModelEventInView",i]:["handleTuttiDivergence",o],Promise.resolve().then((function(){return n.controller.sendTutti({time:n.time,topic:e,data:t,firstMessage:u,wantsVote:s,tallyTarget:l})}))}else if(this.subscriptions[e]){var d,h=W(this.subscriptions[e]);try{for(h.s();!(d=h.n()).done;){var f=d.value,p=f.split("."),m=X(p),y=m[0],b=m.slice(1),v=b.join("."),g=this.lookUpModel(y);if(g)if("{"!==v[0])if(v.indexOf(".")>=0){var Z=v.indexOf("."),w=v.slice(0,Z),L=v.slice(Z+1);try{g.call(w,L,t)}catch(t){et("event ".concat(e," ").concat(g,".call(").concat(JSON.stringify(w),", ").concat(JSON.stringify(L),")"),t)}}else if("function"==typeof g[v])try{g[v](t)}catch(t){et("event ".concat(e," ").concat(g,".").concat(v,"()"),t)}else et("event ".concat(e," ").concat(g,".").concat(v,"(): method not found"));else{var k=Ec(v,g);try{k(t)}catch(t){et("event ".concat(e," ").concat(g," ").concat(k),t)}}else qe("event ".concat(e," .").concat(v,"(): subscriber not found"))}}catch(e){h.e(e)}finally{h.f()}}}},{key:"handleViewEventInModel",value:function(e,t){if(this.subscriptions[e]){var n=[e];void 0!==t&&n.push(t);var r=new tl(this.time,0,"_","handleModelEventInModel",n);this.controller.sendMessage(r)}}},{key:"handleModelEventInView",value:function(e,t){var n=this;bt.handleEvent(e,t,(function(e){return function(e){if(!Nc)throw Error("VirtualMachine confusion");var t=Nc;try{Nc=null,e()}finally{Nc=t}}((function(){return kt(n,e,!0)}))}))}},{key:"handleViewEventInView",value:function(e,t){bt.handleEvent(e,t)}},{key:"handleTuttiDivergence",value:function(e,t){if(this.subscriptions[e])this.handleModelEventInModel(e,t);else{var n=e.split(":").slice(-1)[0];console.warn("uncaptured divergence in ".concat(n,":"),t)}}},{key:"processModelViewEvents",value:function(e){var t=this;if(Nc)throw Error("cannot process view events in model code");return kt(this,(function(){return bt.processFrameEvents(e,!!t.controller.synced)}))}},{key:"handlePollForSnapshot",value:function(){var e=this.time,t=e-this.lastSnapshotPoll;t<5e3?console.log("rejecting snapshot poll ".concat(t,"ms after previous")):(this.lastSnapshotPoll=e,this.controller.handlePollForSnapshot(e))}},{key:"handleTuttiResult",value:function(e){this.controller.handleTuttiResult(e)}},{key:"handleSnapshotVote",value:function(e){this.controller.handleSnapshotVote(e)}},{key:"handlePersistVote",value:function(e){this.controller.handlePersistVote(e)}},{key:"snapshot",value:function(){return il.newOrRecycled(this).snapshot(this,"_")}},{key:"getSummaryHash",value:function(){return Q((new rl).getHash(this))}},{key:"persist",value:function(e,t){var r=_e.begin("snapshot"),i="function"==typeof t?t.call(e):t;if("object"!==n(i))throw Error("Croquet: persistSession() can only persist objects (got ".concat(n(i),")"));var o,s,a=Q(i),c=Kc.hash(a),l=_e.end("snapshot")-r,u=this.persisted===c,d=this.time;if(Hc.snapshot&&console.log("".concat(this.id," persistent data @").concat(d," collected, stringified and hashed in ").concat(Math.ceil(l),"ms").concat(u?" (unchanged, ignoring)":"")),!u)if(o=this,s={persistTime:d,persistentString:a,persistentHash:c,ms:l},Oc.set(o,s),this.persisted=c,this.inPersistenceCoolOff)Hc.snapshot&&console.log("".concat(this.id," persistence poll postponed by cooloff"));else{var h=this.lastPersistencePoll?this.lastPersistencePoll+25e3-this.time:0;h>0?(Hc.snapshot&&console.log("".concat(this.id," postponing persistence poll by ").concat(h,"ms")),this.futureSend(h,this.id,"triggerPersistencePoll",[]),this.inPersistenceCoolOff=!0):this.triggerPersistencePoll()}}},{key:"triggerPersistencePoll",value:function(){var e=this;this.inPersistenceCoolOff=!1,this.lastPersistencePoll=this.controller?this.time:0;var t,n=(t=this,Oc.get(t));if(n){var r=n.persistTime,i=n.persistentString,o=n.persistentHash,s=n.ms;if(Dc(this),this.controller&&this.controller.synced){Hc.snapshot&&console.log("".concat(this.id," asking controller to poll for persistence @").concat(r));var a=this.time;Promise.resolve().then((function(){return e.controller.pollForPersist(a,r,i,o,s)}))}}}},{key:"random",value:function(){if(Nc!==this)throw Error("replicated random accessed from outside the model");return this._random()}},{key:"randomID",value:function(){if(Nc!==this)throw Error("replicated random accessed from outside the model");for(var e="",t=0;t<4;t++)e+=(this._random.int32()>>>0).toString(16).padStart(8,"0");return e}},{key:"toString",value:function(){return"VirtualMachine[".concat(this.id,"]")}},{key:Symbol.toPrimitive,value:function(){return this.toString()}}],[{key:"current",value:function(){return Nc||console.warn("VirtualMachine.current() called from outside the vm!"),Nc}},{key:"hasCurrent",value:function(){return!!Nc}},{key:"evaluate",value:function(e){if(Nc)return e();zc();var t=Nc;try{return Nc=new Bc,e()}finally{Nc=t}}}]),t}();function qc(e,t,n){var r;if("_"===e){var i=Uc[t];"number"==typeof i&&(r=i.toString(36))}if(void 0===r&&(r="".concat(e,">").concat(t)),n.length>0){var o=sl.newOrRecycled();r+=JSON.stringify(o.encode(n))}return r}function $c(e,t){var n,r,i;if(1===e.length||"["===e[1]){var o=parseInt(e[0],36);n="_",r=Jc[o],i=e.slice(1)}else{var s=e.indexOf(">"),a=e.indexOf("[");-1===a&&(a=e.length),n=e.slice(0,s),r=e.slice(s+1,a),i=e.slice(a)}var c=[];i&&(c=al.newOrRecycled(t).decode(JSON.parse(i)));return{receiver:n,selector:r,args:c}}function el(e,t){return(t-e|0)>=0}var tl=function(e){function t(e,n,r,i,s){o(this,t),this.time=e,this.seq=n,this.receiver=r,this.selector=i,this.args=s}return a(t,[{key:"convertIfNeeded",value:function(e){if(this.payload){var t=$c(this.payload,e),n=t.receiver,r=t.selector,i=t.args;delete this.payload,this.receiver=n,this.selector=r,this.args=i}return this}},{key:"before",value:function(e){return this.time!==e.time?this.time<e.time:this.isExternal()!==e.isExternal()?e.isExternal():this.isExternal()?el(this.externalSeq,e.externalSeq):el(this.internalSeq,e.internalSeq)}},{key:"hasReceiver",value:function(e){return this.receiver===e}},{key:"isExternal",value:function(){return 1&this.seq}},{key:"externalSeq",get:function(){return this.seq/2>>>0},set:function(e){this.seq=2*e+1}},{key:"internalSeq",get:function(){return this.seq/2>>>0},set:function(e){this.seq=2*e}},{key:"asState",value:function(){return[this.time,this.seq,qc(this.receiver,this.selector,this.args)]}},{key:"executeOn",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=n?function(e){return e()}:function(t){return jc(e,(function(){return Lt(e,t)}))},i=this.receiver,o=this.selector,s=this.args,a=e.lookUpModel(i);if(a)if("{"===o[0]){var c=Ec(o,a);r((function(){try{c.apply(void 0,w(s))}catch(e){et("".concat(t.shortString()," ").concat(c),e)}}))}else o.indexOf(".")>=0?r((function(){var e=o.indexOf("."),n=o.slice(0,e),r=o.slice(e+1);try{a.call.apply(a,[n,r].concat(w(s)))}catch(e){et("".concat(t.shortString()," ").concat(a,".call(").concat(JSON.stringify(n),", ").concat(JSON.stringify(r),")"),e)}})):"function"!=typeof a[o]?qe("".concat(this.shortString()," ").concat(a,".").concat(o,"(): method not found")):r((function(){try{a[o].apply(a,w(s))}catch(e){et("".concat(t.shortString()," ").concat(a,".").concat(o,"()"),e)}}));else qe("".concat(this.shortString()," ").concat(o,"(): receiver not found"))}},{key:"shortString",value:function(){return"".concat(this.isExternal()?"External":"Future","Message")}},{key:"toString",value:function(){var e=this.receiver,t=this.selector,n=this.args,r=this.isExternal(),i=r?this.externalSeq:this.internalSeq;return"".concat(r?"External":"Future","Message[").concat(this.time).concat(":#"[+r]).concat(i," ").concat(e,".").concat(t,"(").concat(n.map(JSON.stringify).join(", "),")]")}},{key:Symbol.toPrimitive,value:function(){return this.toString()}}],[{key:"fromState",value:function(e,n){var r=Z(e,3),i=r[0],o=r[1],s=$c(r[2],n);return new t(i,o,s.receiver,s.selector,s.args)}}]),t}(),nl=function(){var e=new ArrayBuffer(8),t=new DataView(e);return function(e){return t.setFloat64(0,e,!0),t.getInt32(0,!0)+t.getInt32(4,!0)}}(),rl=function(){function e(){o(this,e),this.refs=new Map,this.todo=[],this.hashers=new Map,this.addHasher("Teatime:Message",tl),this.addHasher("Teatime:Data",Mc);var t,n=W(fl.allClassTypes());try{for(n.s();!(t=n.n()).done;){var r=Z(t.value,2),i=r[0],s=r[1];this.addHasher(i,s)}}catch(e){n.e(e)}finally{n.f()}}return a(e,[{key:"addHasher",value:function(e,n){var r=this,i=Object.getPrototypeOf(n)===Object.prototype?n:{cls:n,write:function(e){return t({},e)}},o=i.cls,s=i.write;this.hashers.set(o,(function(e){return r.hashStructure(e,s(e))}))}},{key:"getHash",value:function(e){this.hashState={oC:0,mC:0,nanC:0,infC:0,zC:0,nC:0,nH:0,sC:0,sL:0,fC:0};for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Z(n[t],2),i=r[0],o=r[1];if("controller"!==i&&"meta"!==i)if("_random"===i)this.hash(o.state(),!1);else if("messages"===i){var s=o.asArray();(this.hashState.fC=s.length)&&this.hash(s,!1)}else this.hashEntry(i,o)}return this.hashDeferred(),this.hashState}},{key:"hashDeferred",value:function(){for(;this.todo.length>0;){var e=this.todo.shift(),t=e.key,n=e.value;this.hashEntry(t,n,!1)}}},{key:"hash",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(n(e)){case"number":return void(Number.isNaN(e)?this.hashState.nanC++:Number.isFinite(e)?0===e?this.hashState.zC++:(this.hashState.nC++,this.hashState.nH+=nl(e)):this.hashState.infC++);case"string":return this.hashState.sC++,void(this.hashState.sL+=e.length);case"boolean":case"undefined":return;default:if(this.refs.has(e))return;var r=Object.prototype.toString.call(e).slice(8,-1);switch(r){case"Array":return void this.hashArray(e,t);case"ArrayBuffer":return void this.hashArray(new Uint8Array(e),!1);case"Set":case"Map":return void this.hashStructure(e,w(e));case"DataView":return void this.hashArray(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),!1);case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":return void this.hashArray(e,!1);case"Object":if(e instanceof fl)this.hashModel(e);else if(e.constructor===Object)this.hashObject(e,t);else{var i=this.hashers.get(e.constructor);i&&i(e)}}}}},{key:"hashModel",value:function(e){this.hashState.mC++,this.refs.set(e,!0);for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Z(n[t],2),i=r[0],o=r[1];"__realm"!==i&&(void 0!==o&&this.hashEntry(i,o))}}},{key:"hashObject",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.hashState.oC++,this.refs.set(e,!0);for(var n=0,r=Object.entries(e);n<r.length;n++){var i=Z(r[n],2),o=i[0],s=i[1];void 0!==s&&this.hashEntry(o,s,t)}}},{key:"hashArray",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.refs.set(e,!0);for(var n=0;n<e.length;n++)this.hashEntry(n,e[n],t)}},{key:"hashStructure",value:function(e,t){void 0!==t&&(this.refs.set(e,!0),this.hash(t,!1))}},{key:"hashEntry",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];"$"!==e[0]&&(r&&"object"===n(t)?this.todo.push({key:e,value:t}):this.hash(t))}}]),e}(),il=function(){function e(t){o(this,e),this.vm=t,this.nextRef=1,this.refs=new Map,this.todo=[],this.writers=new Map,this.addWriter("Teatime:Message",tl),this.addWriter("Teatime:Data",Mc);var n,r=W(fl.allClassTypes());try{for(r.s();!(n=r.n()).done;){var i=Z(n.value,2),s=i[0],a=i[1];this.addWriter(s,a)}}catch(e){r.e(e)}finally{r.f()}this.okayToIgnore={};var c,l=W(fl.allClasses());try{for(l.s();!(c=l.n()).done;){var u=c.value;if(Object.prototype.hasOwnProperty.call(u,"okayToIgnore")){var d=u.okayToIgnore();if(!Array.isArray(d))throw new Error("okayToIgnore() must return an array");var h,f=W(d);try{for(f.s();!(h=f.n()).done;){var p=h.value;if("$"!==p[0])throw Error('okayToIgnore: ignored prop "'.concat(p,"\" must start with '$'"));this.okayToIgnore[p]=!0}}catch(e){f.e(e)}finally{f.f()}}}}catch(e){l.e(e)}finally{l.f()}}return a(e,[{key:"addWriter",value:function(e,n){var r=this,i=Object.getPrototypeOf(n)===Object.prototype?n:{cls:n,write:function(e){return t({},e)}},o=i.cls,s=i.write;this.writers.set(o,(function(t,n){return r.writeAs(e,t,s(t),n)}))}},{key:"snapshot",value:function(e){for(var t={_random:e._random.state(),messages:this.write(e.messages.asArray())},n=0,r=Object.entries(e);n<r.length;n++){var i=Z(r[n],2),o=i[0],s=i[1];"controller"!==o&&(t[o]||this.writeInto(t,o,s,"_"))}return this.writeDeferred(),t}},{key:"writeDeferred",value:function(){for(;this.todo.length>0;){var e=this.todo.shift(),t=e.state,n=e.key,r=e.value,i=e.path;this.writeInto(t,n,r,i,!1)}}},{key:"write",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(n(e)){case"number":return Object.is(e,-0)?{$class:"NegZero"}:Number.isSafeInteger(e)?e:Number.isNaN(e)?{$class:"NaN"}:Number.isFinite(e)?this.writeFloat(e):{$class:"Infinity",$value:Math.sign(e)};case"string":case"boolean":return e;case"undefined":return{$class:"Undefined"};default:if(this.refs.has(e))return this.writeRef(e);var i=Object.prototype.toString.call(e).slice(8,-1);switch(i){case"Array":return this.writeArray(e,t,r);case"ArrayBuffer":return this.writeArrayBuffer(e);case"Set":return this.writeAs(i,e,w(e),t);case"Map":return this.writeAs(i,e,w(e).flat(),t);case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":return this.writeTypedArray(i,e);case"Object":if(e instanceof fl)return this.writeModel(e,t);if(e.constructor===Object||"function"!=typeof e.constructor)return this.writeObject(e,t,r);var o=this.writers.get(e.constructor);if(o)return o(e,t);throw console.error("Croquet Snapshot: unknown class ".concat(t,":"),e),Error("Croquet Snapshot: class not registered in Model.types(): ".concat(e.constructor.name));case"Null":return e;default:throw console.error("Croquet Snapshot: unsupported property ".concat(t,":"),e),Error("Croquet Snapshot: ".concat(i,"s are not supported as model properties"))}}}},{key:"writeModel",value:function(e,t){var n={$model:fl.classToID(e.constructor)};this.refs.set(e,n);var r,i=W(Object.keys(e).sort());try{for(i.s();!(r=i.n()).done;){var o=r.value;if("__realm"!==o){var s=e[o];this.writeInto(n,o,s,t)}}}catch(e){i.e(e)}finally{i.f()}return n}},{key:"writeObject",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r={};this.refs.set(e,r);var i,o=W(Object.keys(e).sort());try{for(o.s();!(i=o.n()).done;){var s=i.value,a=e[s];this.writeInto(r,s,a,t,n)}}catch(e){o.e(e)}finally{o.f()}return r}},{key:"writeArray",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[];this.refs.set(e,r);for(var i=0;i<e.length;i++)this.writeInto(r,i,e[i],t,n);return r}},{key:"writeArrayBuffer",value:function(e){var t={$class:"ArrayBuffer",$value:ll(e)};return this.refs.set(e,t),t}},{key:"writeTypedArray",value:function(e,t){var n={$class:e,$value:[this.writeArrayBuffer(t.buffer),t.byteOffset,"DataView"===e?t.byteLength:t.length]};return this.refs.set(t,n),n}},{key:"writeFloat",value:function(e){return e}},{key:"writeAs",value:function(e,t,r,i){if(void 0===r)return r;var o={$class:e};this.refs.set(t,o);var s=this.write(r,i,!1);return"object"!==n(s)||s.$class||Array.isArray(s)?o.$value=s:Object.assign(o,s),o}},{key:"writeRef",value:function(e){var t=this.refs.get(e);if("object"!==n(t))throw Error("Non-object in refs: "+e);return Array.isArray(t)&&(t.toJSON=function(){return{$id:this.$id,$class:"Array",$value:w(this)}}),{$ref:t.$id||(t.$id=this.nextRef++)}}},{key:"writeInto",value:function(e,t,r,i){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if("$"!==t[0])if(o&&"object"===n(r))this.todo.push({state:e,key:t,value:r,path:i});else{var s="string"==typeof t&&t.match(/^[_a-z][_a-z0-9]*$/i),a=i+(s?".".concat(t):"[".concat(JSON.stringify(t),"]")),c=this.write(r,a);void 0!==c&&(e[t]=c)}else this.okayToIgnore[t]||(qe("snapshot: ignoring property ".concat(t," (declare as okayToIgnore to suppress warning)"),{only:"once"}),this.okayToIgnore[t]=!0)}}],[{key:"newOrRecycled",value:function(e){var t=this.reusableInstance;return t?(t.vm=e,t.nextRef=1,t.refs=new Map,t.todo=[]):t=this.reusableInstance=new this(e),t}},{key:"reusableInstance",get:function(){return this[this.name+"-instance"]},set:function(e){this[this.name+"-instance"]=e}},{key:"resetInstance",value:function(){this.reusableInstance=null}}]),e}(),ol=function(){function e(t){o(this,e),this.vm=t,this.refs=new Map,this.todo=[],this.unresolved=[],this.readers=new Map,this.addReader("Teatime:Message",tl),this.addReader("Teatime:Data",Mc),this.readers.set("Undefined",(function(){})),this.readers.set("NaN",(function(){return NaN})),this.readers.set("Infinity",(function(e){return e*(1/0)})),this.readers.set("NegZero",(function(){return-0})),this.readers.set("ArrayBuffer",(function(e){return function(e){for(var t=globalThis.atob(e),n=t.length,r=new Uint8Array(n),i=0;i<n;i++)r[i]=t.charCodeAt(i);return r.buffer}(e)})),this.readers.set("DataView",(function(e){return f(DataView,w(e))})),this.readers.set("Int8Array",(function(e){return f(Int8Array,w(e))})),this.readers.set("Uint8Array",(function(e){return f(Uint8Array,w(e))})),this.readers.set("Uint8ClampedArray",(function(e){return f(Uint8ClampedArray,w(e))})),this.readers.set("Int16Array",(function(e){return f(Int16Array,w(e))})),this.readers.set("Uint16Array",(function(e){return f(Uint16Array,w(e))})),this.readers.set("Int32Array",(function(e){return f(Int32Array,w(e))})),this.readers.set("Uint32Array",(function(e){return f(Uint32Array,w(e))})),this.readers.set("Float32Array",(function(e){return f(Float32Array,w(e))})),this.readers.set("Float64Array",(function(e){return f(Float64Array,w(e))}));var n,r=W(fl.allClassTypes());try{for(r.s();!(n=r.n()).done;){var i=Z(n.value,2),s=i[0],a=i[1];this.addReader(s,a)}}catch(e){r.e(e)}finally{r.f()}}return a(e,[{key:"addReader",value:function(e,t){var r="object"===n(t)?t.read:function(e){return Object.assign(Object.create(t.prototype),e)};this.readers.set(e,r)}},{key:"readVM",value:function(e,t){if("_"!==t)throw Error("VirtualMachine must be root object");for(var n={_random:new j(null,{state:e._random})},r=0,i=Object.entries(e);r<i.length;r++){var o=Z(i[r],2),s=o[0],a=o[1];n[s]||this.readInto(n,s,a,t)}return this.readDeferred(),this.resolveRefs(),n}},{key:"readDeferred",value:function(){for(;this.todo.length>0;){var e=this.todo.shift(),t=e.object,n=e.key,r=e.value,i=e.path;this.readInto(t,n,r,i,!1)}}},{key:"resolveRefs",value:function(){var e,t=W(this.unresolved);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.object,i=n.key,o=n.ref,s=n.path;if(!this.refs.has(o))throw Error("Unresolved ref: ".concat(o," at ").concat(s,"[").concat(JSON.stringify(i),"]"));r[i]=this.refs.get(o)}}catch(e){t.e(e)}finally{t.f()}}},{key:"read",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(n(e)){case"number":case"string":case"boolean":return e;default:var i=Object.prototype.toString.call(e).slice(8,-1);switch(i){case"Array":return this.readArray(e,t,r);case"Null":return null;case"Object":var o=e.$class,s=e.$model,a=e.$ref;if(a)throw Error("refs should have been handled in readInto()");return s?this.readModel(e,t):o?this.readAs(o,e,t):this.readObject(Object,e,t,r);default:throw Error("Don't know how to deserialize ".concat(i," at ").concat(t))}}}},{key:"readModel",value:function(e,t){var n=fl.instantiateClassID(e.$model,e.id);e.$id&&this.refs.set(e.$id,n);for(var r=0,i=Object.entries(e);r<i.length;r++){var o=Z(i[r],2),s=o[0],a=o[1];"id"!==s&&"$"!==s[0]&&this.readInto(n,s,a,t)}return n}},{key:"readObject",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=new e;t.$id&&this.refs.set(t.$id,i);for(var o=0,s=Object.entries(t);o<s.length;o++){var a=Z(s[o],2),c=a[0],l=a[1];"$"!==c[0]&&this.readInto(i,c,l,n,r)}return i}},{key:"readArray",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[];e.$id&&this.refs.set(e.$id,r);for(var i=0;i<e.length;i++)void 0!==e[i]&&this.readInto(r,i,e[i],t,n);return r}},{key:"readAsArray",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.$value;return e.$id&&(r.$id=e.$id),this.readArray(r,t,n)}},{key:"readAsSet",value:function(e,t){var n=new Set;e.$id&&this.refs.set(e.$id,n);var r,i=W(this.read(e.$value,t,!1));try{for(i.s();!(r=i.n()).done;){var o=r.value;n.add(o)}}catch(e){i.e(e)}finally{i.f()}return n}},{key:"readAsMap",value:function(e,t){var n=new Map;e.$id&&this.refs.set(e.$id,n);for(var r=this.read(e.$value,t,!1),i=0;i<r.length;i+=2)n.set(r[i],r[i+1]);return n}},{key:"readAsClass",value:function(e,t,n){var r={},i=new Map;if("$value"in t)r=this.read(t.$value,n,!1);else for(var o=0,s=Object.entries(t);o<s.length;o++){var a=Z(s[o],2),c=a[0],l=a[1];if("$"!==c[0]){var u=l&&l.$ref;u?this.refs.has(u)?r[c]=this.refs.get(u):(r[c]="<unresolved>",i.set(u,c)):this.readInto(r,c,l,n,!1)}}var d=this.readers.get(e)(r,n);d||"Undefined"===e||"NaN"===e||"NegZero"===e||console.warn('Reading "'.concat(e,'" returned ').concat(d," at ").concat(n)),t.$id&&this.refs.set(t.$id,d);var h,f=W(i.entries());try{for(f.s();!(h=f.n()).done;){var p=Z(h.value,2),m=p[0],y=p[1];this.unresolved.push({object:d,key:y,ref:m,path:n})}}catch(e){f.e(e)}finally{f.f()}return d}},{key:"readAs",value:function(e,t,n){switch(e){case"Array":return this.readAsArray(t,n);case"Set":return this.readAsSet(t,n);case"Map":return this.readAsMap(t,n);default:return this.readAsClass(e,t,n)}}},{key:"readRef",value:function(e,t,n,r){if(!n||!n.$ref)return!1;var i=n.$ref;return this.refs.has(i)?e[t]=this.refs.get(i):(e[t]="<unresolved>",this.unresolved.push({object:e,key:t,ref:i,path:r})),!0}},{key:"readInto",value:function(e,t,r,i){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(!this.readRef(e,t,r,i))if(o&&"object"===n(r))this.todo.push({object:e,key:t,value:r,path:i});else{var s="string"==typeof t&&t.match(/^[_a-z][_a-z0-9]*$/i),a=i+(s?".".concat(t):"[".concat(JSON.stringify(t),"]"));e[t]=this.read(r,a)}}}],[{key:"newOrRecycled",value:function(e){var t=this.reusableInstance;return t?(t.vm=e,t.refs=new Map,t.todo=[],t.unresolved=[]):t=this.reusableInstance=new this(e),t}},{key:"reusableInstance",get:function(){return this[this.name+"-instance"]},set:function(e){this[this.name+"-instance"]=e}},{key:"resetInstance",value:function(){this.reusableInstance=null}}]),e}(),sl=function(e){l(n,il);var t=b(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"encode",value:function(e){var t=this.writeArray(e,"$");return this.writeDeferred(),t}},{key:"writeModel",value:function(e){return{$ref:e.id}}}]),n}(),al=function(e){l(n,ol);var t=b(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"decode",value:function(e){var t=this.readArray(e,"$");return this.readDeferred(),this.resolveRefs(),t}},{key:"resolveRefs",value:function(){var e,t=W(this.unresolved);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.object,i=n.key,o=n.ref,s=n.path;if(this.refs.has(o))r[i]=this.refs.get(o);else{var a=this.vm.lookUpModel(o);if(!a)throw Error("Unresolved ref: ".concat(o," at ").concat(s,"[").concat(JSON.stringify(i),"]"));r[i]=a}}}catch(e){t.e(e)}finally{t.f()}}}]),n}();function cl(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Set,o=Object.values(e).filter((function(e){var t=Object.prototype.toString.call(e).slice(8,-1);return("Object"===t||"Array"===t)&&!i.has(e)})),s=W(o);try{for(s.s();!(t=s.n()).done;){var a=t.value;i.add(a);var c=n+"."+a.constructor.name;if(r[c]){if(r[c]!==a.constructor)throw new Error("Class with name "+c+" already gathered, but new one has different identity")}else r[c]=a.constructor}}catch(e){s.e(e)}finally{s.f()}var l,u=W(o);try{for(u.s();!(l=u.n()).done;){var d=l.value;cl(d,n,r,i)}}catch(e){u.e(e)}finally{u.f()}}function ll(e){for(var t=new Uint8Array(e),n=t.byteLength,r="",i=0;i<n;i++)r+=String.fromCharCode(t[i]);return globalThis.btoa(r)}var ul=H.has("debug","classes",!1),dl=Symbol("SECRET"),hl=new WeakSet,fl=function(e){function t(e){if(o(this,t),e!==dl)throw Error("You must create ".concat(this,' using create() not "new"!'))}return a(t,[{key:"init",value:function(e){hl.delete(this)}},{key:"destroy",value:function(){wt().unsubscribeAll(this),wt().deregister(this)}},{key:"publish",value:function(e,t,n){this.__realm||this.__realmError(),this.__realm.publish(t,n,e)}},{key:"subscribe",value:function(e,t,n){return this.__realm||this.__realmError(),this.__realm.subscribe(this,e,t,n)}},{key:"unsubscribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";this.__realm||this.__realmError(),this.__realm.unsubscribe(this,e,t,n)}},{key:"unsubscribeAll",value:function(){this.__realm||this.__realmError(),this.__realm.unsubscribeAll(this)}},{key:"__realmError",value:function(){if(!this.id)throw Error("".concat(this," has no ID, did you call super.init(options)?"))}},{key:"future",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;this.__realm||this.__realmError();for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return this.__realm.future(this,e,t,r)}},{key:"random",value:function(){return wt().random()}},{key:"now",value:function(){return wt().now()}},{key:"beWellKnownAs",value:function(e){wt().vm.set(e,this)}},{key:"getModel",value:function(e){return this.__realm.vm.lookUpModel(e)}},{key:"wellKnownModel",value:function(e){return this.__realm.vm.get(e)}},{key:"modelOnly",value:function(e){if(Ac.current()===this.__realm.vm)return!0;var t=Error(e||"".concat(this,".modelOnly() called from outside a model!"));throw et("view code",t),t}},{key:"sessionId",get:function(){return this.__realm.vm.id}},{key:"viewCount",get:function(){return Object.keys(this.__realm.vm.views).length}},{key:"persistSession",value:function(e){if(this!==this.wellKnownModel("modelRoot"))throw Error("persistSession() must only be called on the root model");this.__realm.vm.persist(this,e)}},{key:Symbol.toPrimitive,value:function(){var e=this.constructor[ml]||this.constructor.name;return e.includes("Model")?e:"".concat(e,"[Model]")}}],[{key:"create",value:function(e,n,r){if(!bl(this))throw Error('Model class "'.concat(this.name,'" not registered'));var i=wt(),o=new this(dl);return Object.defineProperty(o,"__realm",{value:i}),Object.defineProperty(o,"id",{value:i.register(o),enumerable:!0}),hl.add(o),"string"==typeof n&&(console.warn('Croquet: Model.create(..., "'.concat(n,'") with a well-known name argument is deprecated!')),o.beWellKnownAs(n),n=void 0),r&&o.beWellKnownAs(r),o.init(e,n),hl.has(o)&&(hl.delete(o),Object.getPrototypeOf(this)!==t&&console.warn("".concat(o," did not call super.init(options)"))),o}},{key:"createNoInit",value:function(e){var t=wt(),n=new this(dl);return Object.defineProperty(n,"__realm",{value:t}),Object.defineProperty(n,"id",{value:e,enumerable:!0}),n}},{key:"allowConstructors",value:function(){dl=void 0,console.warn("disabling error reporting for Model constructors")}},{key:"register",value:function(e){return e||(e=this.name,console.warn("Deprecation warning: ".concat(this.name,".register(classId) called without classId. See https://croquet.io/sdk/docs/Model.html#.register"))),ol.resetInstance(),il.resetInstance(),sl.resetInstance(),al.resetInstance(),function(e,t){var n=re(e),r=ue("".concat(t,":").concat(n));he.push(r),ae()&&r.then((function(e){ce[e].what="Class ".concat(t)}))}(this,e),function(e,t){var n=pl[t];if(n&&n!==e)throw Error("Registering model class ".concat(e.name,' failed, id "').concat(t,'" already used by ').concat(n.name));bl(e)?ul&&!n&&console.warn("ignoring re-exported model class ".concat(t)):(ul&&console.log("registering model class ".concat(t)),e[ml]=t);pl[t]=e}(this,e),this}},{key:"wellKnownModel",value:function(e){if(!Ac.hasCurrent())throw Error("static Model.wellKnownModel() called from outside model");return Ac.current().get(e)}},{key:"evaluate",value:function(e){return Ac.evaluate(e)}},{key:"types",value:function(){return{}}},{key:"okayToIgnore",value:function(){return[]}},{key:"classToID",value:function(e){return function(e){if(bl(e))return e[ml];throw Error('Class "'.concat(e.name,'" not found, did you call ').concat(e.name,'.register("').concat(e.name,'")?'))}(e)}},{key:"classFromID",value:function(e){return vl(e)}},{key:"allClasses",value:function(){return yl()}},{key:"allClassTypes",value:function(){return function(){var e,t={},n=W(yl());try{for(n.s();!(e=n.n()).done;){var r=e.value;Object.assign(t,r.types())}}catch(e){n.e(e)}finally{n.f()}return Object.entries(t)}()}},{key:"instantiateClassID",value:function(e,t){return vl(e).createNoInit(t)}}]),t}(),pl={},ml=Symbol("CLASS_ID");function yl(){return Object.values(pl)}function bl(e){return Object.prototype.hasOwnProperty.call(e,ml)}function vl(e){if(pl[e])return pl[e];throw Error('Class "'.concat(e,'" in snapshot, but not found in current source?'))}fl[ml]="Croquet.Model",pl["Croquet.Model"]=fl;var gl=function(e){function r(e){o(this,r),"object"===n(e)&&"__realm"in e||console.warn("Croquet: argument to View constructor needs to be a Model");var t=wt("");t&&t.isViewRealm()||(t=kt(e.__realm.vm,(function(){return wt()}),!0)),Object.defineProperty(this,"realm",{value:t}),Object.defineProperty(this,"id",{value:t.register(this),configurable:!0})}return a(r,[{key:"detach",value:function(){this.unsubscribeAll(),this.realm.deregister(this),Object.defineProperty(this,"id",{value:""})}},{key:"reattach",value:function(){Object.defineProperty(this,"id",{value:this.realm.register(this)})}},{key:"publish",value:function(e,t,n){this.realm.publish(t,n,e)}},{key:"subscribe",value:function(e,t,n){"string"==typeof n&&(n=this[n]);var r=n;(n=r.bind(this)).unbound=r;var i=t.event?t:{event:t},o=i.event,s=i.handling;this.realm.subscribe(o,this.id,n,e,s)}},{key:"unsubscribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;"string"==typeof n&&(n=this[n]),this.realm.unsubscribe(t,this.id,n,e)}},{key:"unsubscribeAll",value:function(){this.realm.unsubscribeAll(this.id)}},{key:"future",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.realm.future(this,e)}},{key:"random",value:function(){return wt().random()}},{key:"now",value:function(){return this.realm.now()}},{key:"externalNow",value:function(){return this.realm.externalNow()}},{key:"extrapolatedNow",value:function(){return this.realm.extrapolatedNow()}},{key:"update",value:function(e){}},{key:"wellKnownModel",value:function(e){return this.realm.vm.get(e)}},{key:"sessionId",get:function(){return this.realm.vm.id}},{key:"session",get:function(){return this.realm.vm.controller.session}},{key:"viewId",get:function(){return this.realm.vm.controller.viewId}},{key:Symbol.toPrimitive,value:function(){var e=this.constructor.name;return e.includes("View")?e:"".concat(e,"[View]")}}],[{key:"displayStatus",value:function(e,t){return $e(e,t)}},{key:"displayWarning",value:function(e,t){return qe(e,t)}},{key:"displayError",value:function(e,n){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&pt.showMessage(e,t(t({},n),{},{level:"error"}))}(e,n)}}]),r}(),Zl=new(function(){function e(){o(this,e),this.ready=!1,this.isInIframe=window.top!==window,this.subscriptions={},this.enumerator=null}return a(e,[{key:"setReceiver",value:function(e){this.receiver=e,this.ready=!0}},{key:"setIframeEnumerator",value:function(e){this.enumerator=e}},{key:"on",value:function(e,t){var n=this;if(!this.receiver)throw Error("setReceiver() has not been called");if("string"==typeof t&&(t=this.receiver[t]),!t)throw Error("Messenger.on: the second argument must be a method name or a function");if(this.subscriptions[e]){if(this.findIndex(this.subscriptions[e],t)>=0)throw Error("".concat(t," is already subscribed"))}else this.subscriptions[e]=[];this.subscriptions[e].push(t),this.listener||(this.listener=function(e){return n.receive(e)},window.addEventListener("message",this.listener))}},{key:"detach",value:function(){this.listener&&(window.removeEventListener("message",this.listener),this.listener=null),this.stopPublishingPointerMove(),this.receiver=null,this.subscriptions={},this.enumerator=null,this.ready=!1}},{key:"removeSubscription",value:function(e,t){"string"==typeof t&&(t=this.receiver[t]);var n=this.subscriptions[e];if(n){var r=this.findIndex(n,t);n.splice(r,1),0===n.length&&delete this.subscriptions[e]}}},{key:"removeAllSubscriptions",value:function(){this.subscriptions={}}},{key:"receive",value:function(e){var t=e.data,n=t.event,r=t.data,i=e.source;this.handleEvent(n,r,i)}},{key:"handleEvent",value:function(e,t,n){var r=this,i=this.subscriptions[e];i&&i.forEach((function(e){e.call(r.receiver,t,n)}))}},{key:"send",value:function(e,t,n){this.isInIframe?window.top.postMessage({event:e,data:t},"*"):n?n.postMessage({event:e,data:t},"*"):this.enumerator&&this.enumerator().forEach((function(n){n.contentWindow.postMessage({event:e,data:t},"*")}))}},{key:"findIndex",value:function(e,t){var n=t.name;return e.findIndex((function(e){var r=e.name;return n||r?n===r:t===e}))}},{key:"startPublishingPointerMove",value:function(){var e=this;this._moveHandler||(this._moveHandler=function(t){return e.send("pointerPosition",{x:t.clientX,y:t.clientY,type:t.type})},window.document.addEventListener("pointermove",this._moveHandler,!0))}},{key:"stopPublishingPointerMove",value:function(){this._moveHandler&&(window.document.removeEventListener("pointermove",this._moveHandler,!0),this._moveHandler=null)}}]),e}()),Xl="node"===C.CROQUET_PLATFORM;var wl=60,Ll=function(){function e(){o(this,e)}var r,s,c;return a(e,null,[{key:"join",value:(c=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.join_impl(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),pt.showMessage(e.t0.message,{level:"fatal"}),e.t0;case 10:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return c.apply(this,arguments)})},{key:"join_impl",value:(s=i(regeneratorRuntime.mark((function r(o){var s,a,c,l,u,d,h,f,p,m,y,b,v,g,X,L,k,x,G,S,W,T,C,R,Y,I,V;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(V=function(){k.model=null,k.view&&(H.has("debug","session",!1)&&console.log(k.id,"detaching root view"),k.view.detach(),""!==k.view.id&&console.warn("Croquet: ".concat(k.view," did not call super.detach()")),k.view=null),pt.clearSessionMoniker(),Zl.ready&&Zl.detach()},I=function(){return(I=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V(),!X.leaving){e.next=4;break}return X.leaving(!0),e.abrupt("return");case 4:if(!R){e.next=6;break}return e.abrupt("return");case 6:return R=!0,e.next=9,X.establishSession(x);case 9:R=!1,k.model=X.vm.get("modelRoot"),k.id=X.id,k.persistentId=X.persistentId,k.versionId=X.versionId,X.session=k,pt.makeSessionWidgets(k.id),X.inViewRealm((function(){H.has("debug","session",!1)&&console.log(k.id,"creating root view"),k.view=new f(k.model)}));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)},Y=function(){return I.apply(this,arguments)},d=function(e,t){return e===t||e.prototype instanceof t},"object"===n(o)){r.next=6;break}throw Error("Croquet: please use new Session.join( {apiKey, ...} ) API. See https://croquet.io/sdk/docs/Session.html#.join");case 6:s=0,a=Object.entries(o);case 7:if(!(s<a.length)){r.next=16;break}if(c=Z(a[s],2),l=c[0],!((u=c[1])instanceof Promise)){r.next=13;break}return r.next=12,u;case 12:o[l]=r.sent;case 13:s++,r.next=7;break;case 16:if("string"==typeof o.apiKey){r.next=18;break}throw Error("Croquet: no apiKey provided in Session.join()!");case 18:if(!(o.apiKey.length>128)){r.next=20;break}throw Error("Croquet: apiKey > 128 characters in Session.join()!");case 20:if("string"==typeof o.name){r.next=22;break}throw Error("Croquet: no session name provided in Session.join()!");case 22:if(!(o.name.length>128)){r.next=24;break}throw Error("Croquet: session name > 128 characters in Session.join()!");case 24:if("function"==typeof(h=o.model)&&d(h,fl)){r.next=27;break}throw Error("Croquet: bad model class in Session.join()");case 27:if("function"==typeof(f=o.view||gl)&&d(f,gl)){r.next=30;break}throw Error("Croquet: bad view class in Session.join()");case 30:if("string"==typeof o.appId){r.next=32;break}throw Error("Croquet: no appId provided in Session.join()");case 32:if(!(!o.appId.length>128)){r.next=34;break}throw Error("Croquet: appId > 128 characters in Session.join()");case 34:if(o.appId.match(/^[a-z](-?[a-z0-9_])*(\.[a-z0-9_](-?[a-z0-9_])*)+$/i)){r.next=36;break}throw Error("Croquet: malformed appId in Session.join()");case 36:if("string"==typeof o.password&&o.password){r.next=38;break}throw Error("Croquet: no password provided in Session.join()");case 38:if((p=H.reflector||o.reflector)&&(p.includes("://")||p.match(/^[-a-z0-9]+$/i)?H.reflector=p:console.warn('Croquet: Not a valid websocket url, ignoring reflector "'.concat(p,'"'))),!Xl||"manual"===o.step){r.next=42;break}throw Error("stepping must be manual in a Node.js app");case 42:if(!("rejoinLimit"in o)){r.next=47;break}if(!("number"!=typeof o.rejoinLimit||o.rejoinLimit<0||o.rejoinLimit>6e4)){r.next=45;break}throw Error("rejoinLimit range: 0-60000");case 45:r.next=48;break;case 47:o.rejoinLimit=1e3;case 48:if(!("eventRateLimit"in o)){r.next=53;break}if(!("number"!=typeof o.eventRateLimit||o.eventRateLimit<1||o.eventRateLimit>60)){r.next=51;break}throw Error("eventRateLimit range: 1-60");case 51:r.next=54;break;case 53:o.eventRateLimit=20;case 54:if(!o.heraldUrl){r.next=59;break}if(!(o.heraldUrl.length>256)){r.next=57;break}throw Error("heraldUrl can only be 256 characters");case 57:if(o.heraldUrl.startsWith("https://")){r.next=59;break}throw Error("heraldUrl needs to be https");case 59:if(!o.hashOverride){r.next=64;break}if(43===o.hashOverride.length){r.next=62;break}throw Error("hashOverride must be 43 characters");case 62:if(-1===o.hashOverride.search(/[^-_a-zA-Z0-9]/)){r.next=64;break}throw Error("hashOverride must be base64url encoded");case 64:if(o.debug&&(m=function(e){return"string"==typeof e&&(e=e.split(",")),e?Array.isArray(e)?e:[e]:[]},H.debug=[].concat(w(m(o.debug)),w(m(H.debug))).join(",")),!("autoSleep"in o)){r.next=80;break}if(y=o.autoSleep,"number"!==(b=n(y))){r.next=73;break}if(!(y<0)){r.next=71;break}throw Error("an autoSleep value must be >= 0");case 71:r.next=78;break;case 73:if("boolean"!==b){r.next=77;break}o.autoSleep=y?10:0,r.next=78;break;case 77:throw Error("autoSleep must be numeric or boolean");case 78:r.next=81;break;case 80:o.autoSleep=10;case 81:o.flags&&("string"==typeof(v=o.flags)&&(v=v.split(",")),(v=(v=v?Array.isArray(v)?v:[v]:[]).filter((function(e){return"object"!==n(e)}))).length?(o.flags={},v.forEach((function(e){return o.flags[e]=!0}))):o.flags=null),"expectedSimFPS"in o&&(wl=Math.min(o.expectedSimFPS,120)),g=["name","password","apiKey","appId","tps","autoSleep","heraldUrl","rejoinLimit","eventRateLimit","optionsFromUrl","viewIdDebugSuffix","hashOverride","flags"],Gl(),X=new xc,L=JSON.parse(JSON.stringify(t({},o.options))),r.t0=function(e){X.stepSession("animation",{frameTime:e,view:k.view,expectedSimFPS:wl})},r.t1=function(){return e.leave(k.id)},k={id:"",persistentId:"",versionId:"",model:null,view:null,step:r.t0,leave:r.t1,get latency(){return X.latency},get latencies(){return X.latencies}},x={options:L,initFn:function(e,t){return h.create(e,t,"modelRoot")},rebootModelView:Y};for(G=0,S=Object.entries(o);G<S.length;G++)W=Z(S[G],2),T=W[0],C=W[1],g.includes(T)&&(x[T]=C);return r.next=94,X.initFromSessionSpec(x);case 94:return R=!1,r.next=97,Y();case 97:return"manual"!==o.step&&X.startStepping(k.step),r.abrupt("return",k);case 99:case"end":return r.stop()}}),r)}))),function(e){return s.apply(this,arguments)})},{key:"leave",value:(r=i(regeneratorRuntime.mark((function e(t){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=kc(t)){e.next=3;break}return e.abrupt("return",!1);case 3:if(n.reconnectTimeout&&(clearTimeout(n.reconnectTimeout),delete n.reconnectTimeout),r=new Promise((function(e){return n.leaving=e})),(i=n.connection).connected){e.next=8;break}return e.abrupt("return",!1);case 8:return i.closeConnection(1e3),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"thisSession",value:function(){var e=Ac.current();return e?e.id:""}}]),e}(),kl={};function xl(e){if(!Object.isFrozen(e)){Object.freeze(e);for(var t=0,r=Object.values(e);t<r.length;t++){var i=r[t];!i||"object"!==n(i)&&"function"!=typeof i||xl(i)}}}function Gl(){Object.isFrozen(kl)||(xl(kl),function(e){var t=JSON.stringify(e,(function(e,t){return"function"==typeof t?re(t):t}));if("{}"!==t){var n=JSON.parse(t),r=ue(Q(n));he.push(r),ae()&&r.then((function(e){ce[e].what="Croquet Constants"}))}}(kl))}exports.App=pt,exports.Constants=kl,exports.Data=Kc,exports.Messenger=Zl,exports.Model=fl,exports.Session=Ll,exports.View=gl,exports.gatherInternalClassTypes=function(e,t){var n={};return cl({root:e},t,n,new Set),n},exports.startSession=function(){return pt.showMessage("Croquet.startSession() is deprecated, please use Croquet.Session.join()",{level:"warning",only:"once"}),Ll.join.apply(Ll,arguments)};



/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Avatar": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Avatar),
/* harmony export */   "AM_Player": () => (/* reexport safe */ _src_Player__WEBPACK_IMPORTED_MODULE_6__.AM_Player),
/* harmony export */   "AM_Predictive": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Predictive),
/* harmony export */   "AM_Smoothed": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Smoothed),
/* harmony export */   "AM_Spatial": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Spatial),
/* harmony export */   "Actor": () => (/* reexport safe */ _src_Actor__WEBPACK_IMPORTED_MODULE_1__.Actor),
/* harmony export */   "ActorManager": () => (/* reexport safe */ _src_Actor__WEBPACK_IMPORTED_MODULE_1__.ActorManager),
/* harmony export */   "CachedObject": () => (/* reexport safe */ _src_ObjectCache__WEBPACK_IMPORTED_MODULE_4__.CachedObject),
/* harmony export */   "ClearObjectCache": () => (/* reexport safe */ _src_ObjectCache__WEBPACK_IMPORTED_MODULE_4__.ClearObjectCache),
/* harmony export */   "FocusManager": () => (/* reexport safe */ _src_Focus__WEBPACK_IMPORTED_MODULE_2__.FocusManager),
/* harmony export */   "GetModelService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.GetModelService),
/* harmony export */   "GetPawn": () => (/* reexport safe */ _src_Pawn__WEBPACK_IMPORTED_MODULE_5__.GetPawn),
/* harmony export */   "GetViewService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.GetViewService),
/* harmony export */   "InputManager": () => (/* reexport safe */ _src_Input__WEBPACK_IMPORTED_MODULE_12__.InputManager),
/* harmony export */   "IsLoaded": () => (/* reexport safe */ _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__.IsLoaded),
/* harmony export */   "KeyDown": () => (/* reexport safe */ _src_Input__WEBPACK_IMPORTED_MODULE_12__.KeyDown),
/* harmony export */   "LoadFont": () => (/* reexport safe */ _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__.LoadFont),
/* harmony export */   "LoadImage": () => (/* reexport safe */ _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__.LoadImage),
/* harmony export */   "ModelRoot": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ModelRoot),
/* harmony export */   "ModelService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ModelService),
/* harmony export */   "PM_Avatar": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Avatar),
/* harmony export */   "PM_Camera": () => (/* reexport safe */ _src_Render__WEBPACK_IMPORTED_MODULE_7__.PM_Camera),
/* harmony export */   "PM_Driver": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Driver),
/* harmony export */   "PM_Focusable": () => (/* reexport safe */ _src_Focus__WEBPACK_IMPORTED_MODULE_2__.PM_Focusable),
/* harmony export */   "PM_Player": () => (/* reexport safe */ _src_Player__WEBPACK_IMPORTED_MODULE_6__.PM_Player),
/* harmony export */   "PM_Predictive": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Predictive),
/* harmony export */   "PM_Smoothed": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Smoothed),
/* harmony export */   "PM_Spatial": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Spatial),
/* harmony export */   "PM_Visible": () => (/* reexport safe */ _src_Render__WEBPACK_IMPORTED_MODULE_7__.PM_Visible),
/* harmony export */   "Pawn": () => (/* reexport safe */ _src_Pawn__WEBPACK_IMPORTED_MODULE_5__.Pawn),
/* harmony export */   "PawnManager": () => (/* reexport safe */ _src_Pawn__WEBPACK_IMPORTED_MODULE_5__.PawnManager),
/* harmony export */   "PerlinNoise": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.PerlinNoise),
/* harmony export */   "PlayerManager": () => (/* reexport safe */ _src_Player__WEBPACK_IMPORTED_MODULE_6__.PlayerManager),
/* harmony export */   "PriorityQueue": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.PriorityQueue),
/* harmony export */   "RegisterMixin": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.RegisterMixin),
/* harmony export */   "RenderManager": () => (/* reexport safe */ _src_Render__WEBPACK_IMPORTED_MODULE_7__.RenderManager),
/* harmony export */   "Shuffle": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.Shuffle),
/* harmony export */   "StartWorldcore": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.StartWorldcore),
/* harmony export */   "TAU": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.TAU),
/* harmony export */   "TO_DEG": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.TO_DEG),
/* harmony export */   "TO_RAD": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.TO_RAD),
/* harmony export */   "TwoWayMap": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.TwoWayMap),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ViewRoot),
/* harmony export */   "ViewService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ViewService),
/* harmony export */   "WorldcoreModel": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.WorldcoreModel),
/* harmony export */   "WorldcoreView": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.WorldcoreView),
/* harmony export */   "clampRad": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.clampRad),
/* harmony export */   "gaussian": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.gaussian),
/* harmony export */   "m2_identity": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m2_identity),
/* harmony export */   "m2_rotation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m2_rotation),
/* harmony export */   "m2_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m2_zero),
/* harmony export */   "m4_determinant": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_determinant),
/* harmony export */   "m4_getRotation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_getRotation),
/* harmony export */   "m4_getTranslation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_getTranslation),
/* harmony export */   "m4_identity": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_identity),
/* harmony export */   "m4_invert": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_invert),
/* harmony export */   "m4_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_multiply),
/* harmony export */   "m4_perspective": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_perspective),
/* harmony export */   "m4_rotation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotation),
/* harmony export */   "m4_rotationQ": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationQ),
/* harmony export */   "m4_rotationX": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationX),
/* harmony export */   "m4_rotationY": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationY),
/* harmony export */   "m4_rotationZ": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationZ),
/* harmony export */   "m4_scale": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_scale),
/* harmony export */   "m4_scaleRotationTranslation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_scaleRotationTranslation),
/* harmony export */   "m4_toNormal4": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_toNormal4),
/* harmony export */   "m4_translation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_translation),
/* harmony export */   "m4_transpose": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_transpose),
/* harmony export */   "m4_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_zero),
/* harmony export */   "mix": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.mix),
/* harmony export */   "q_axisAngle": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_axisAngle),
/* harmony export */   "q_conjugate": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_conjugate),
/* harmony export */   "q_dot": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_dot),
/* harmony export */   "q_equals": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_equals),
/* harmony export */   "q_euler": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_euler),
/* harmony export */   "q_identity": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_identity),
/* harmony export */   "q_invert": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_invert),
/* harmony export */   "q_isZero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_isZero),
/* harmony export */   "q_lookAt": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_lookAt),
/* harmony export */   "q_magnitude": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_magnitude),
/* harmony export */   "q_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_multiply),
/* harmony export */   "q_normalize": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_normalize),
/* harmony export */   "q_pitch": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_pitch),
/* harmony export */   "q_roll": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_roll),
/* harmony export */   "q_slerp": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_slerp),
/* harmony export */   "q_yaw": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_yaw),
/* harmony export */   "rayTriangleIntersect": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.rayTriangleIntersect),
/* harmony export */   "sphericalRandom": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.sphericalRandom),
/* harmony export */   "toDeg": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.toDeg),
/* harmony export */   "toRad": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.toRad),
/* harmony export */   "v2_abs": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_abs),
/* harmony export */   "v2_add": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_add),
/* harmony export */   "v2_angle": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_angle),
/* harmony export */   "v2_ceil": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_ceil),
/* harmony export */   "v2_divide": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_divide),
/* harmony export */   "v2_dot": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_dot),
/* harmony export */   "v2_equals": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_equals),
/* harmony export */   "v2_floor": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_floor),
/* harmony export */   "v2_inverse": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_inverse),
/* harmony export */   "v2_isZero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_isZero),
/* harmony export */   "v2_lerp": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_lerp),
/* harmony export */   "v2_magnitude": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_magnitude),
/* harmony export */   "v2_manhattan": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_manhattan),
/* harmony export */   "v2_max": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_max),
/* harmony export */   "v2_min": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_min),
/* harmony export */   "v2_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_multiply),
/* harmony export */   "v2_normalize": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_normalize),
/* harmony export */   "v2_random": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_random),
/* harmony export */   "v2_rotate": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_rotate),
/* harmony export */   "v2_scale": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_scale),
/* harmony export */   "v2_sqrMag": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_sqrMag),
/* harmony export */   "v2_sub": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_sub),
/* harmony export */   "v2_transform": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_transform),
/* harmony export */   "v2_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_zero),
/* harmony export */   "v3_abs": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_abs),
/* harmony export */   "v3_add": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_add),
/* harmony export */   "v3_angle": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_angle),
/* harmony export */   "v3_ceil": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_ceil),
/* harmony export */   "v3_cross": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_cross),
/* harmony export */   "v3_divide": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_divide),
/* harmony export */   "v3_dot": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_dot),
/* harmony export */   "v3_equals": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_equals),
/* harmony export */   "v3_floor": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_floor),
/* harmony export */   "v3_inverse": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_inverse),
/* harmony export */   "v3_isZero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_isZero),
/* harmony export */   "v3_lerp": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_lerp),
/* harmony export */   "v3_magnitude": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_magnitude),
/* harmony export */   "v3_manhattan": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_manhattan),
/* harmony export */   "v3_max": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_max),
/* harmony export */   "v3_min": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_min),
/* harmony export */   "v3_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_multiply),
/* harmony export */   "v3_normalize": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_normalize),
/* harmony export */   "v3_random": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_random),
/* harmony export */   "v3_rotate": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotate),
/* harmony export */   "v3_rotateX": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotateX),
/* harmony export */   "v3_rotateY": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotateY),
/* harmony export */   "v3_rotateZ": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotateZ),
/* harmony export */   "v3_scale": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_scale),
/* harmony export */   "v3_sqrMag": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_sqrMag),
/* harmony export */   "v3_sub": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_sub),
/* harmony export */   "v3_transform": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_transform),
/* harmony export */   "v3_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_zero),
/* harmony export */   "viewRoot": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.viewRoot)
/* harmony export */ });
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/croquet */ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js");
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Actor */ "./node_modules/@croquet/worldcore-kernel/src/Actor.js");
/* harmony import */ var _src_Focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Focus */ "./node_modules/@croquet/worldcore-kernel/src/Focus.js");
/* harmony import */ var _src_Mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Mixins */ "./node_modules/@croquet/worldcore-kernel/src/Mixins.js");
/* harmony import */ var _src_ObjectCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ObjectCache */ "./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js");
/* harmony import */ var _src_Pawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Pawn */ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js");
/* harmony import */ var _src_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Player */ "./node_modules/@croquet/worldcore-kernel/src/Player.js");
/* harmony import */ var _src_Render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Render */ "./node_modules/@croquet/worldcore-kernel/src/Render.js");
/* harmony import */ var _src_Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");
/* harmony import */ var _src_Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Utilities */ "./node_modules/@croquet/worldcore-kernel/src/Utilities.js");
/* harmony import */ var _src_Vector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Vector */ "./node_modules/@croquet/worldcore-kernel/src/Vector.js");
/* harmony import */ var _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/ViewAssetCache */ "./node_modules/@croquet/worldcore-kernel/src/ViewAssetCache.js");
/* harmony import */ var _src_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/Input */ "./node_modules/@croquet/worldcore-kernel/src/Input.js");
















/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Actor.js":
/*!*************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Actor.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Actor": () => (/* binding */ Actor),
/* harmony export */   "ActorManager": () => (/* binding */ ActorManager)
/* harmony export */ });
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pawn */ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");



//------------------------------------------------------------------------------------------
//-- ActorManager --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class ActorManager extends _Root__WEBPACK_IMPORTED_MODULE_1__.ModelService {
    init(name) {
        super.init(name || 'ActorManager');
        this.actors = new Map();
    }

    add(actor) {
        this.actors.set(actor.id, actor);
    }

    has(id) {
        return this.actors.has(id);
    }

    get(id) {
        return this.actors.get(id);
    }

    delete(actor) {
        this.actors.delete(actor.id);
    }

}
ActorManager.register("ActorManager");

//------------------------------------------------------------------------------------------
//-- Actor ---------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class Actor extends _Root__WEBPACK_IMPORTED_MODULE_1__.WorldcoreModel {
    get pawn() {return null;}
    get doomed() {return this._doomed} // About to be destroyed. This is used to prevent creating new future messages.
    get parent() { return this._parent; }


    init(options) {
        super.init();
        this.listen("parentSet", this.onParent);
        this.listen("_set", this.set);
        this.set(options);
        this.service('ActorManager').add(this);
        this.publish("actor", "createActor", this);
    }

    destroy() {
        new Set(this.children).forEach(child => child.destroy());
        this.set({parent: null});
        this._doomed = true; // About to be destroyed. This is used to prevent creating new future messages.
        this.say("destroyActor");
        this.service('ActorManager').delete(this);
        super.destroy();
    }

    set(options = {}) {
        const sorted = Object.entries(options).sort((a,b) => { return b[0] < a[0] ? 1 : -1 } );
        for (const option of sorted) {
            const name = option[0];
            const setEvent = name + "Set";
            const n = "_" + option[0];
            const v = option[1];
            const o = this[n];
            this[n] = v;
            this.say(setEvent, {v, o}); // Publish a local message whenever a property changes with its old and new value.
        }
    }

    addChild(child) {
        if (!this.children) this.children = new Set();
        this.children.add(child);
    }

    removeChild(child) {
        if (this.children) this.children.delete(child);
    }

    onParent(d) {
        if (d.o) d.o.removeChild(this);
        if (d.v) d.v.addChild(this);
    }

    say(event, data) {
        this.publish(this.id, event, data);
    }

    listen(event, callback) {
        this.subscribe(this.id, event, callback);
    }

    ignore(event) {
        this.unsubscribe(this.id, event);
    }

    actorFromId(id) {
        return this.service("ActorManager").get(id);
    }

}
Actor.register("Actor");



/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Focus.js":
/*!*************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Focus.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusManager": () => (/* binding */ FocusManager),
/* harmony export */   "PM_Focusable": () => (/* binding */ PM_Focusable)
/* harmony export */ });
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");


//------------------------------------------------------------------------------------------
//-- FocusManager -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Maintains a list of focus sets. Only one pawn can be focused per set.

class FocusManager extends _Root__WEBPACK_IMPORTED_MODULE_0__.ViewService {

    constructor(name) {
        super(name ||'FocusManager');
        this.sets = [];
    }

}

//------------------------------------------------------------------------------------------
//-- Focusable -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// The pawn interface to the focus manager. Adds methods to set and remove focus.

const PM_Focusable = superclass => class extends superclass {

    constructor(...args) {
        super(...args);
    }

    destroy() {
        super.destroy();
        this.blurAll();
    }

    hasFocus(set = 0) {
        const fm = this.service("FocusManager");
        return fm.sets[set] === this;
    }

    focus(set = 0) {
        const fm = this.service("FocusManager");
        const old = fm.sets[set];
        if (old === this) return; // Already has focus
        if (old) {
            fm.sets[set] = null;
            old.onBlur(set);
        }
        fm.sets[set] = this;
        this.onFocus(set);
    }

    blur(set = 0) {
        const fm = this.service("FocusManager");
        const old = fm.sets[set];
        if (old !== this) return; // Doesn't have focus
        fm.sets[set] = null;
        this.onBlur(set);
    }

    blurAll() {
        const fm = this.service("FocusManager");
        if(!fm) return;
        fm.sets.forEach(set =>  this.blur(set));
    }

    onFocus(set) {}
    onBlur(set) {}

};

/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Input.js":
/*!*************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Input.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputManager": () => (/* binding */ InputManager),
/* harmony export */   "KeyDown": () => (/* binding */ KeyDown)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./node_modules/@croquet/worldcore-kernel/src/Vector.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");



// Need to add doubletap

const DOUBLE_DURATION = 300; // milliseconds
const TRIPLE_DURATION = 600; // milliseconds

const TAP_DURATION = 300;   // milliseconds
const TAP_DISTANCE = 10;     // pixels

const SWIPE_DURATION = 300;   // milliseconds
const SWIPE_DISTANCE = 50;     // pixels

const keys = new Set();
const chordNames = new Map();
const upChordKeys = new Map();
const downChordKeys = new Map();

// Returns true if the key is pressed. Includes entries for mouse buttons.
function KeyDown(key) {
    return keys.has(key);
}

//Returns true if the combination of keys is pressed/unpressed.
// export function ChordDown(name) {
//     const chord = chordNames.get(name);
//     if (!chord) return false;
//     const down = chord.down;
//     const up = chord.up;
//     let all = true;
//     down.forEach(d => {all &= KeyDown(d);});
//     up.forEach(u => {all &= !KeyDown(u);});
//     return all;
// }

//----------------------------------------------------------------------------------------------------
// Input
//
// Catches all user input events and transforms them into Croquet events.
// We don't want other systems to install their own listeners because they may not get cleaned up properly on disconnect/reconnect.
// Supports adding chord events to report when multiple buttons are pressed simultaneously.
//----------------------------------------------------------------------------------------------------

class InputManager extends _Root__WEBPACK_IMPORTED_MODULE_1__.ViewService {
    constructor(name) {
        super(name || "InputManager");

        this.listeners = [];

        this.presses = new Map();
        this.lastDown = {};
        this.penultimateDown = {};

        document.body.style.touchAction = "none";
        this.addAllListeners();

        this.synthesizedModifierKeys = new Map();
    }

    destroy() {
        super.destroy();
        if (this.inPointerLock) document.exitPointerLock();
        if (this.inFullscreen) document.exitFullscreen();
        this.removeAllListeners();
    }

    addListener(element, type, callback) {
        element.addEventListener(type, callback, {passive: false});
        this.listeners.push({element, type, callback});
    }

    removeListener(type) {
        const remainingListeners = this.listeners.filter(listener => listener.type !== type);
        this.listeners.forEach(listener => {
            if (listener.type === type) listener.element.removeEventListener(listener.type, listener.callback, {passive: false});
        });
        this.listeners = remainingListeners;
    }

    removeAllListeners() {
        this.listeners.forEach(listener => listener.element.removeEventListener(listener.type, listener.callback, {passive: false}));
        this.listeners = [];
    }

    // adds all the default input manager listeners
    addAllListeners() {
        this.addListener(document, 'contextmenu', e => e.preventDefault());
        this.addListener(window, 'resize', e => this.onResize(e));
        this.addListener(window, 'focus', e => this.onFocus(e));
        this.addListener(window, 'blur', e => this.onBlur(e));
        this.addListener(window, 'deviceorientation', e => this.onOrientation(e));
        this.addListener(document, 'click', e => this.onClick(e));
        this.addListener(document, 'pointerlockchange', e => this.onPointerLock(e));
        this.addListener(document, 'pointerdown', e => this.onPointerDown(e));
        this.addListener(document, 'pointerup', e => this.onPointerUp(e));
        this.addListener(document, 'pointercancel', e => this.onPointerUp(e));
        this.addListener(document, 'pointermove', e => this.onPointerMove(e));
        this.addListener(document, 'wheel', e => this.onWheel(e));
        this.addListener(document,'keydown', e => this.onKeyDown(e));
        this.addListener(document,'keyup', e => this.onKeyUp(e));
    }

    // If you want the input handler to report a chord event, you need to add the chord and give it an event name.
    addChord(name, down = [], up = []) {
        chordNames.set(name, {down, up});
        down.forEach(d => {
            if (!downChordKeys.has(d)) downChordKeys.set(d, new Set());
            downChordKeys.get(d).add(name);
        });
        up.forEach(u => {
            if (!upChordKeys.has(u)) upChordKeys.set(u, new Set());
            upChordKeys.get(u).add(name);
        });
    }

    onChordDown(key) {
        const downs = [];
        const ups = [];

        if (downChordKeys.has(key)) {
            downChordKeys.get(key).forEach( name => {
                if (this.chordTest(name)) downs.push(name);
            });
        }

        if (upChordKeys.has(key)) {
            upChordKeys.get(key).forEach( name => {
                if (!this.chordTest(name)) ups.push(name);
            });
        }

        ups.forEach(name => {
            if (!KeyDown(name)) return;
            keys.delete(name);
            this.publish("input", name + "Up");
        });

        downs.forEach(name => {
            if (KeyDown(name)) return;
            keys.add(name);
            this.publish("input", name + "Down");
        });

    }

    onChordUp(key) {
        const downs = [];
        const ups = [];

        if (downChordKeys.has(key)) {
            downChordKeys.get(key).forEach( name => {
                if (!this.chordTest(name)) ups.push(name);
            });
        }

        if (upChordKeys.has(key)) {
            upChordKeys.get(key).forEach( name => {
                if (this.chordTest(name)) downs.push(name);
            });
        }

        ups.forEach(name => {
            if (!KeyDown(name)) return;
            keys.delete(name);
            this.publish("input", name + "Up");
        });

        downs.forEach(name => {
            if (KeyDown(name)) return;
            keys.add(name);
            this.publish("input", name + "Down");
        });

    }

    chordTest(name) {
        const chord = chordNames.get(name);
        if (!chord) return false;
        const down = chord.down;
        const up = chord.up;
        let all = true;
        down.forEach(d => {all &= KeyDown(d);});
        up.forEach(u => {all &= !KeyDown(u);});
        return all;
    }

    get inFullscreen() {
        return document.fullscreenElement;
    }

    get canFullscreen() {
        return document.documentElement.requestFullscreen;
    }

    enterFullscreen() {
        if (this.inFullscreen) return;
        if (!this.canFullscreen) return;
        document.documentElement.requestFullscreen();
    }

    exitFullscreen() {
        if (!this.inFullscreen) return;
        document.exitFullscreen();
    }

    get inPointerLock() {
        return document.pointerLockElement || document.mozPointerLockElement;
    }

    get canPointerLock() {
        return document.documentElement.requestPointerLock || document.documentElement.mozRequestPointerLock;
    }

    modifierKeysFrom(event) {
        let {altKey, ctrlKey, metaKey, shiftKey} = event;
        altKey = !!(altKey || this.synthesizedModifierKeys.get("altKey"));
        ctrlKey = !!(ctrlKey || this.synthesizedModifierKeys.get("ctrlKey"));
        metaKey = !!(metaKey || this.synthesizedModifierKeys.get("metaKey"));
        shiftKey = !!(shiftKey || this.synthesizedModifierKeys.get("shiftKey"));
        return {altKey, ctrlKey, metaKey, shiftKey};
    }

    setModifierKeys(obj) {
        for (let k in obj) {
            this.synthesizedModifierKeys.set(k, !!obj[k])
        }
    }

    modifierEqual(e1, e2) {
        return !!e1.altKey === !!e2.altKey && !!e1.ctrlKey === !!e2.ctrlKey && !!e1.metaKey === !!e2.metaKey && !!e1.shiftKey === !!e2.shiftKey;
    }

    enterPointerLock() {
        if (this.inPointerLock) return;
        if (!this.canPointerLock) return;
        document.documentElement.requestPointerLock = this.canPointerLock;
        document.documentElement.requestPointerLock();
    }

    exitPointerLock() {
        if (!this.inPointerLock) return;
        document.exitPointerLock();
    }

    onPointerLock(event) {
        this.publish("input", "pointerLock", this.inPointerLock);
    }

    onResize(event) {
        // Delay actual resize event to address iOS posting of resize before page layout finishes.
        // (Also it kind of looks better .... )
        this.publish("input", "beforeResize");
        this.future(500).futureResize();
    }

    futureResize() {
        this.publish("input", "resize", [window.innerWidth, window.innerHeight]);
    }

    onFocus(event) {
        this.publish("input", "focus");
    }

    onBlur(event) {
        this.publish("input", "blur");
    }

    // publishes  both keyDown + arg and "xDown" where "x" is the key

    onKeyDown(event) {
        const key = event.key;
        let modKeys = this.modifierKeysFrom(event);
        keys.add(key);
        if (event.repeat) {
            this.publish("input", key + "Repeat", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            this.publish("input", "keyRepeat", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            // This can generate a lot of events! Don't subscribe to in model.
        } else {
            this.publish("input", key + "Down", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            this.publish("input", "keyDown", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            this.onChordDown(key);
        }
    }

    // publish both keyUp + arg and "xUp" where "x" is the key
    onKeyUp(event) {
        const key = event.key;
        let modKeys = this.modifierKeysFrom(event);
        if (!KeyDown(key)) return;
        this.publish("input", key + "Up", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
        this.publish("input", "keyUp", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, modKeys});
        keys.delete(key);
        this.onChordUp(key);
    }

    onClick(event) {
        let modKeys = this.modifierKeysFrom(event);
        window.focus();
        this.publish("input", "click", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
    }

    onPointerDown(event) {
        let modKeys = this.modifierKeysFrom(event);
        this.presses.set(event.pointerId, {id: event.pointerId, time: event.timeStamp, start: [event.clientX, event.clientY], ...modKeys, xy: [event.clientX, event.clientY]});
        this.publish("input", "pointerDown", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
        if (event.button === this.lastDown.button && event.timeStamp - this.lastDown.time < DOUBLE_DURATION && this.modifierEqual(event, this.lastDown)) {
            if (event.button === this.penultimateDown.button && event.timeStamp - this.penultimateDown.time < TRIPLE_DURATION) {
                this.publish("input", "tripleDown", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            } else {
                this.publish("input", "doubleDown", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            }
        }
        this.penultimateDown = this.lastDown;
        this.lastDown = {id: event.pointerId, button: event.button, buttons: event.buttons, ...modKeys, time: event.timeStamp};
        this.zoomStart();
    }

    onPointerUp(event) {
        const press = this.presses.get(event.pointerId);
        let modKeys = this.modifierKeysFrom(event);
        if (press) {
            press.xy = [event.clientX, event.clientY];
            const duration = event.timeStamp - press.time;
            const dx = event.clientX - press.start[0];
            const dy = event.clientY - press.start[1];
            const ax = Math.abs(dx);
            const ay = Math.abs(dy);
            if (duration < TAP_DURATION && ax < TAP_DISTANCE && ay < TAP_DISTANCE) {
                this.publish("input", "tap", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            }
            if (duration < SWIPE_DURATION && ax > SWIPE_DISTANCE) {
                this.publish("input", "swipeX", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, distance: dx, ...modKeys});
            }
            if (duration < SWIPE_DURATION && ay > SWIPE_DISTANCE) {
                this.publish("input", "swipeY", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, distance: dy, ...modKeys});
            }
        }

        this.presses.delete(event.pointerId);
        this.publish("input", "pointerUp", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
        this.zoomEnd();
    }

    onPointerMove(event) {
        const press = this.presses.get(event.pointerId);
        let modKeys = this.modifierKeysFrom(event);
        if (press) {
            press.xy = [event.clientX, event.clientY];
            const duration = event.timeStamp - press.time;
            const dx = event.clientX - press.start[0];
            const dy = event.clientY - press.start[1];
            const ax = Math.abs(dx);
            const ay = Math.abs(dy);
            if (duration > TAP_DURATION || ax > TAP_DISTANCE || ay > TAP_DISTANCE) { // Only publish pressed move events that aren't taps
                this.publish("input", "pointerMove", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
                this.publish("input", "pointerDelta", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.movementX, event.movementY]});
            }
        } else {
            this.publish("input", "pointerMove", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            this.publish("input", "pointerDelta", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.movementX, event.movementY]});
        }
        this.zoomUpdate();
    }

    zoomStart() {
        if (this.presses.size !== 2) return;

        const values = Array.from(this.presses.values());
        const press0 = values[0];
        const press1 = values[1];
        const mid = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_scale)((0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_add)(press0.xy, press1.xy), 0.5);

        this.publish("input", "zoomStart", {mid, zoom: 1, dial: 0});
    }

    zoomEnd() {
        if (this.presses.size !== 1) return;
        this.publish("input", "zoomEnd");
    }

    zoomUpdate() {
        if (this.presses.size < 2) return;

        const values = Array.from(this.presses.values());
        const press0 = values[0];
        const press1 = values[1];
        const mid = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_scale)((0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_add)(press0.xy, press1.xy), 0.5);

        const delta0 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_sub)(press1.start, press0.start);
        const delta1 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_sub)(press1.xy, press0.xy);
        const gap0 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_magnitude)(delta0);
        const gap1 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_magnitude)(delta1);

        let zoom = 1;
        if (gap0 > 0) zoom = gap1 / gap0;

        const angle0 = Math.atan2(delta0[0], delta0[1]);
        const angle1 = Math.atan2(delta1[0], delta1[1]);
        let dial = (angle1 - angle0 + _Vector__WEBPACK_IMPORTED_MODULE_0__.TAU) % _Vector__WEBPACK_IMPORTED_MODULE_0__.TAU;
        if (dial > Math.PI) dial -= _Vector__WEBPACK_IMPORTED_MODULE_0__.TAU;

        this.publish("input", "zoomUpdate", {mid, zoom, dial});
    }

    onWheel(event) {
        let modKeys = this.modifierKeysFrom(event);
        event.preventDefault();
        const y = event.deltaY;
        this.publish("input", "wheel", {deltaY: y, ...modKeys, xy: [event.clientX, event.clientY]});
    }

    onOrientation(event) {
        const alpha = event.alpha; // yaw
        const beta = event.beta; // Pitch if in portrait,
        const gamma = event.gamma;
        const pitch = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.toRad)(beta);
        const yaw = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.toRad)(alpha);

        // For landscape mode depends on phone orientation ...
        // const pitch = gamma;
        // const yaw = alpha; // 90 off
        this.publish("input", "orientation", {pitch, yaw});
    }

}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Mixins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Mixins.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Avatar": () => (/* binding */ AM_Avatar),
/* harmony export */   "AM_Predictive": () => (/* binding */ AM_Predictive),
/* harmony export */   "AM_Smoothed": () => (/* binding */ AM_Smoothed),
/* harmony export */   "AM_Spatial": () => (/* binding */ AM_Spatial),
/* harmony export */   "PM_Avatar": () => (/* binding */ PM_Avatar),
/* harmony export */   "PM_Driver": () => (/* binding */ PM_Driver),
/* harmony export */   "PM_Predictive": () => (/* binding */ PM_Predictive),
/* harmony export */   "PM_Smoothed": () => (/* binding */ PM_Smoothed),
/* harmony export */   "PM_Spatial": () => (/* binding */ PM_Spatial),
/* harmony export */   "RegisterMixin": () => (/* binding */ RegisterMixin),
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/croquet */ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js");
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector */ "./node_modules/@croquet/worldcore-kernel/src/Vector.js");


// import { Constants } from "@croquet/worldcore-kernel";
// import { GetPawn } from "./Pawn";


// Mixin
//
// This contains support for mixins that can be added to Views and Models. You need to
// define View and Model mixins slightly differently, but they otherwise use the same
// syntax.
//
// This approach is based on:
//
// https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
// https://github.com/justinfagnani/mixwith.js


// -- View Mixins --
//
// Mixins are defined as functions that transform a class into an extended version
// of itself. The "mix" and "with" operators are semantic suger to make the construction
// of the composite class look nice.
//
// Since you don't know what class a mixin will be added to, you should generally set them
// up so they don't require arguments to their constructors and merely pass any parameter
// they receive straight through.


// -- Example --
//
// class Alpha {
//     constructor() {
//        }
// }
//
// const Beta = superclass => class extends superclass {
//     constructor(...args) {
//         super(...args);
//        }
// };
//
// const Gamma = superclass => class extends superclass {
//     constructor(...args) {
//         super(...args);
//        }
// };
//
// class Delta extends mix(Alpha).with(Beta, Gamma) {
//     constructor() {
//         super();
//     }
// }


// -- Model Mixins --
//
// Model mixins work just like View Mixins, but you need to define an init function instead
// of a constructor. Also you need to call RegisterMixin after you define them so they get
// added to the hash of the model code.


// -- Example --
//
// const ModelBeta = superclass => class extends superclass {
//     init(...args) {
//         super.init(...args);
//     }
// };
// RegisterMixin(ModelBeta);


//-- Inheritance --
//
// Mixins can "inherit" from other mixins by including the parent function in the child's extension
// definition:
//
// const ChildMixin = superclass => class extends ParentMixin(superclass) {};

//------------------------------------------------------------------------------------------
//-- Mixin ---------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_REGISTRY = [];
_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_USAGE = [];

const mix = superclass => new MixinFactory(superclass);
const RegisterMixin = mixin => _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_REGISTRY.push(mixin);

class MixinFactory  {
    constructor(superclass) {
        this.superclass = superclass;
    }

    with(...mixins) {
        _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_USAGE.push(mixins);
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}

//------------------------------------------------------------------------------------------
//-- Spatial -------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Spatial actors have a translation, rotation and scale in 3D space.
//
// They don't have any view-side smoothing, so the pawn will change its transform to exactly
// match the transform of the actor.

//-- Actor ---------------------------------------------------------------------------------

const AM_Spatial = superclass => class extends superclass {

    init(options) {
        super.init(options);
        this.listen("scaleSet", this.localChanged);
        this.listen("rotationSet", this.localChanged);
        this.listen("translationSet", this.localChanged);
    }

    localChanged() {
        this.$local = null;
        this.say("localChanged");
        this.globalChanged();
    }

    globalChanged() {
        this.$global = null;
        this.say("globalChanged");
        if (this.children) this.children.forEach(child => child.globalChanged());
    }

    get local() {
        if (!this.$local) this.$local = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_scaleRotationTranslation)(this.scale, this.rotation, this.translation);
        return [...this.$local];
    }

    get global() {
        if (this.$global) return [...this.$global];
        if (this.parent) {
            this.$global = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_multiply)(this.local, this.parent.global);
        } else {
            this.$global = this.local;
        }
        return [...this.$global];
    }

    get translation() { return this._translation?[...this._translation] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_zero)() };
    set translation(v) { this.set({translation: v}) };

    get rotation() { return this._rotation?[...this._rotation] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_identity)() };
    set rotation(q) { this.set({rotation: q}) };

    get scale() { return this._scale?[...this._scale] : [1,1,1] };
    set scale(v) { this.set({scale: v}) };
}
RegisterMixin(AM_Spatial);


//-- Pawn ----------------------------------------------------------------------------------

const PM_Spatial = superclass => class extends superclass {

constructor(...args) {
    super(...args);
    this.listenOnce("globalChanged", this.onGlobalChanged);
}

onGlobalChanged() { this.say("viewGlobalChanged"); }

get scale() { return this.actor.scale; }
get translation() { return this.actor.translation; }
get rotation() { return this.actor.rotation; }
get local() { return this.actor.local; }
get global() { return this.actor.global; }
get lookGlobal() { return this.global; } // Allows objects to have an offset camera position

};

//------------------------------------------------------------------------------------------
//-- Smoothed ------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Smoothed actors generate interpolation information when they get movement commands. Their
// pawns use this to reposition themselves on every frame update.
//
// Setting translation/rotation/scale will pop the pawn to the new value. If you want the transition
// to be interpolated, use moveTo, rotateTo, or scaleTo instead.

//-- Actor ---------------------------------------------------------------------------------

const AM_Smoothed = superclass => class extends AM_Spatial(superclass) {

    init(...args) {
        super.init(...args);
        this.listen("_scaleTo", this.scaleTo);
        this.listen("_rotateTo", this.rotateTo);
        this.listen("_translateTo", this.translateTo);
        this.listen("_positionTo", this.positionTo);
    }

    scaleTo(v) {
        this._scale = v;
        this.$local = null;
        this.$global = null;
        this.say("scaleTo", v);
    }

    rotateTo(q) {
        this._rotation = q;
        this.$local = null;
        this.$global = null;
        this.say("rotateTo", q);
    }

    translateTo(v) {
        this._translation = v;
        this.$local = null;
        this.$global = null;
        this.say("translateTo", v);
    }

    positionTo(data) {
        this._translation = data.v;
        this._rotation = data.q;
        this.$local = null;
        this.$global = null;
        this.say("rotateTo", data.q);
        this.say("translateTo", data.v);

    }

    moveTo(v) { this.translateTo(v)}

};
RegisterMixin(AM_Smoothed);

//-- Pawn ----------------------------------------------------------------------------------

// Tug is a value between 0 and 1 that controls the weighting between the two
// transforms. The closer tug is to 1, the more closely the pawn will track the actor,
// but the more vulnerable the pawn is to latency/stutters in the simulation.

// When the difference between actor and pawn scale/rotation/translation drops below an epsilon,
// interpolation is paused

const PM_Smoothed = superclass => class extends PM_Spatial(superclass) {

    constructor(...args) {
        super(...args);
        this.tug = 0.2;

        this._scale = this.actor.scale;
        this._rotation = this.actor.rotation;
        this._translation = this.actor.translation;
        this._global = this.actor.global;

        this.listenOnce("scaleSet", this.onScaleSet);
        this.listenOnce("rotationSet", this.onRotationSet);
        this.listenOnce("translationSet", this.onTranslationSet);

        this.listenOnce("scaleTo", this.onScaleTo);
        this.listenOnce("rotateTo", this.onRotateTo);
        this.listenOnce("translateTo", this.onTranslateTo);
    }

    set tug(t) {this._tug = t}
    get tug() { return this._tug; }

    set localOffset(m4) {
        this._localOffset = m4;
        this._local = null;
        this._global = null;
    }
    get localOffset() { return this._localOffset; }

    get scale() { return this._scale; }
    get rotation() { return this._rotation; }
    get translation() { return this._translation; }

    onLocalChanged(){
        this._local = null;
        this.onGlobalChanged();
    }

    onGlobalChanged(){
        this._global = null;
    }

    scaleTo(v, throttle) {
        this.say("_scaleTo", v, throttle)
    }

    rotateTo(q, throttle) {
        this.say("_rotateTo", q, throttle)
    }

    translateTo(v, throttle) {
        this.say("_translateTo", v, throttle)
    }

    positionTo(v, q, throttle) {
        this.say("_positionTo", {v,q}, throttle)
    }

    onScaleSet() {
        this._scale = this.actor.scale;
        this.onLocalChanged();
    }

    onRotationSet() {
        this._rotation = this.actor.rotation;
        this.onLocalChanged();
    }

    onTranslationSet() {
        this._translation = this.actor.translation;
        this.onLocalChanged();
    }

    onScaleTo(q) { this.isScaling = true; }
    onRotateTo(q) { this.isRotating = true; }
    onTranslateTo(v) { this.isTranslating = true; }

    get local() {
        if (this._local) return this. _local;
        if (this._localOffset) {
            this._local = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_multiply)(this._localOffset, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_scaleRotationTranslation)(this._scale, this._rotation, this._translation));
            return this._local;
        }
        this._local = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_scaleRotationTranslation)(this._scale, this._rotation, this._translation);
        return this._local;
    }

    get global() {
        if (this._global) return this._global;
        if (this.parent && this.parent.global) {
            this._global = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_multiply)(this.local, this.parent.global);
        } else {
            this._global = this.local;
        }
        return this._global;
    }

    update(time, delta) {
        super.update(time, delta);

        let tug = this.tug;
        if (delta) tug = Math.min(1, tug * delta / 15);

        if (this.isScaling) {
            if ((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_equals)(this._scale, this.actor.scale, .0001)) {
                this._scale = this.actor.scale;
                this.isScaling = false;
            } else {
                this._scale = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_lerp)(this._scale, this.actor.scale, tug);
            }
            this.onLocalChanged();
        }

        if (this.isRotating) {
            if ((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_equals)(this._rotation, this.actor.rotation, 0.000001)) {
                this._rotation = this.actor.rotation;
                this.isRotating = false;
            } else {
                this._rotation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_slerp)(this._rotation, this.actor.rotation, tug);
            }
            this.onLocalChanged();
        }

        if (this.isTranslating) {
            if ((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_equals)(this._translation, this.actor.translation, .0001)) {
                this._translation = this.actor.translation;
                this.isTranslating = false;
            } else {
                this._translation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_lerp)(this._translation, this.actor.translation, tug);
            }
            this.onLocalChanged();
        }

        if (!this._global) {
            this.say("viewGlobalChanged");
            if (this.children) this.children.forEach(child => child.onGlobalChanged()); // If our global changes, so do the globals of our children
        }


    }

}

//------------------------------------------------------------------------------------------
//-- PM_SmoothedDriver ---------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// This version of PM_Smoothed  sets the transform values instantly on the local pawn and only implements smoothing on other clients.

// export const PM_SmoothedDriver = superclass => class extends PM_Smoothed(superclass) {

//     constructor(...args) {
//         super(...args);
//         this.throttle = 100; //ms
//         this.ignore("scaleSet");
//         this.ignore("rotationSet");
//         this.ignore("translationSet");
//         this.ignore("positionSet");
//         }

//         positionTo(v, q, throttle) {
//             throttle = throttle || this.throttle;
//             this._translation = v;
//             this._rotation = q;
//             this.isTranslating = false;
//             this.isRotating = false;
//             this.onLocalChanged();
//             super.positionTo(v, q, throttle);
//         }

//         scaleTo(v, throttle) {
//             throttle = throttle || this.throttle;
//             this._scale = v;
//             this.isScaling = false;
//             this.onLocalChanged();
//             super.scaleTo(v, throttle);
//         }

//         rotateTo(q, throttle) {
//             throttle = throttle || this.throttle;
//             this._rotation = q;
//             this.isRotating = false;
//             this.onLocalChanged();
//             super.rotateTo(q, throttle);
//         }

//         translateTo(v, throttle)  {
//             throttle = throttle || this.throttle;
//             this._translation = v;
//             this.isTranslating = false;
//             this.onLocalChanged();
//             super.translateTo(v, throttle);

//         }

//     }

//------------------------------------------------------------------------------------------
//-- PM_Driver -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// You can add this to a PM_Smoothed pawn to make it more responsive to direct user input.
// Transform values are set instantly on the local pawn and smoothing only happens on remote instances.

    const PM_Driver = superclass => class extends superclass {

        constructor(...args) {
            super(...args);
            this.throttle = 100; //ms
            }

            positionTo(v, q, throttle) {
                throttle = throttle || this.throttle;
                this._translation = v;
                this._rotation = q;
                this.isTranslating = false;
                this.isRotating = false;
                this.onLocalChanged();
                super.positionTo(v, q, throttle);
            }

            scaleTo(v, throttle) {
                throttle = throttle || this.throttle;
                this._scale = v;
                this.isScaling = false;
                this.onLocalChanged();
                super.scaleTo(v, throttle);
            }

            rotateTo(q, throttle) {
                throttle = throttle || this.throttle;
                this._rotation = q;
                this.isRotating = false;
                this.onLocalChanged();
                super.rotateTo(q, throttle);
            }

            translateTo(v, throttle)  {
                throttle = throttle || this.throttle;
                this._translation = v;
                this.isTranslating = false;
                this.onLocalChanged();
                super.translateTo(v, throttle);
            }

        }

//------------------------------------------------------------------------------------------
//-- Predictive ----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Predictive actors maintain a primary view-side scale/rotation/translation that you can drive directly
// from player inputs so they responds quickly to player input. On every frame this
// transform is averaged with the official model-side values.
//
// If you're using them, you'll probably want to set:
//      * Session tps to 60 with no cheat beats
//      * AM_Predictive tick frequency to <16
//
// This will create the smoothest/fastest response.

//-- Actor ---------------------------------------------------------------------------------

const AM_Predictive = superclass => class extends AM_Smoothed(superclass) {

    get spin() { return this._spin?[...this._spin] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_identity)() }
    get velocity() { return this._velocity?[...this._velocity] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_zero)() }
    get tickStep() {return this._tickStep || 15}

    init(...args) {
        super.init(...args);
        this.future(0).tick(0);
    }

    tick(delta) {
        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_isZero)(this.spin)) {
            this.rotateTo((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_normalize)((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_slerp)(this.rotation, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_multiply)(this.rotation, this.spin), delta)));
        };
        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_isZero)(this.velocity)) {
            const relative = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_scale)(this.velocity, delta);
            const move = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_transform)(relative, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_rotationQ)(this.rotation));
            this.moveTo((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_add)(this.translation, move));
        }
        if (!this.doomed) this.future(this.tickStep).tick(this.tickStep);
    }

};
RegisterMixin(AM_Predictive);

//-- Pawn ----------------------------------------------------------------------------------

const PM_Predictive = superclass => class extends PM_Smoothed(superclass) {

    constructor(...args) {
        super(...args);
        this.spin = this.actor.spin;
        this.velocity = this.actor.velocity;
    }

    moveTo(v, throttle) {this.translateTo(v,throttle); }

    setVelocity(v, throttle) {
        this.set({velocity: v}, throttle)
    }

    setSpin(q, throttle) {
        this.set({spin: q}, throttle)
    }

    update(time, delta) {

        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_isZero)(this.spin)) {
            this._rotation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_normalize)((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_slerp)(this._rotation, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_multiply)(this._rotation, this.spin), delta));
            this.onLocalChanged();
        }

        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_isZero)(this.velocity))  {
            const relative = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_scale)(this.velocity, delta);
            const move = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_transform)(relative, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_rotationQ)(this.rotation));
            this._translation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_add)(this._translation, move);
            this.onLocalChanged();
        }
        super.update(time, delta);

    }

};

// Old name for Predictive objects

const AM_Avatar = AM_Predictive;
const PM_Avatar = PM_Predictive;


//------------------------------------------------------------------------------------------
//-- MouselookAvatar -----------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// MouselookAvatar is an extension of the normal avatar with a look direction that can be driven
// by mouse or other continous xy inputs. The avatar internally stores pitch and yaw information
// that can be used for animation if necessary. Both pitch and yaw are smoothed in the pawn.

// //-- Actor ---------------------------------------------------------------------------------

// export const AM_MouselookAvatar = superclass => class extends AM_Avatar(superclass) {

//     init(...args) {
//         this.listen("avatarLookTo", this.onLookTo);
//         super.init(...args);
//         this.set({rotation: q_euler(0, this.lookYaw, 0)});
//     }

//     get lookPitch() { return this._lookPitch || 0 };
//     get lookYaw() { return this._lookYaw || 0 };

//     onLookTo(e) {
//         this.set({lookPitch: e[0], lookYaw: e[1]});
//         this.rotateTo(q_euler(0, this.lookYaw, 0));
//     }

// }
// RegisterMixin(AM_MouselookAvatar);

// //-- Pawn ---------------------------------------------------------------------------------

// export const PM_MouselookAvatar = superclass => class extends PM_Avatar(superclass) {

//     constructor(...args) {
//         super(...args);

//         this._lookPitch = this.actor.lookPitch;
//         this._lookYaw = this.actor.lookYaw;

//         this.lookThrottle = 50;  // MS between throttled lookTo events
//         this.lastlookTime = this.time;

//         this.lookOffset = [0,0,0]; // Vector displacing the camera from the avatar origin.
//     }

//     get lookPitch() { return this._lookPitch}
//     get lookYaw() { return this._lookYaw}

//     lookTo(pitch, yaw) {
//         this.setLookAngles(pitch, yaw);
//         this.lastLookTime = this.time;
//         this.lastLookCache = null;
//         this.say("avatarLookTo", [pitch, yaw]);
//         this.say("lookGlobalChanged");
//     }

//     throttledLookTo(pitch, yaw) {
//         pitch = Math.min(Math.PI/2, Math.max(-Math.PI/2, pitch));
//         yaw = clampRad(yaw);
//         if (this.time < this.lastLookTime + this.lookThrottle) {
//             this.setLookAngles(pitch, yaw);
//             this.lastLookCache = {pitch, yaw};
//         } else {
//             this.lookTo(pitch,yaw);
//         }
//     }

//     setLookAngles(pitch, yaw) {
//         this._lookPitch = pitch;
//         this._lookYaw = yaw;
//         this._rotation = q_euler(0, yaw, 0);
//     }

//     get lookGlobal() {
//         const pitchRotation = q_axisAngle([1,0,0], this.lookPitch);
//         const yawRotation = q_axisAngle([0,1,0], this.lookYaw);

//         const modelLocal =  m4_scaleRotationTranslation(this.scale, yawRotation, this.translation)
//         let modelGlobal = modelLocal;
//         if (this.parent) modelGlobal = m4_multiply(modelLocal, this.parent.global);


//         const m0 = m4_translation(this.lookOffset);
//         const m1 = m4_rotationQ(pitchRotation);
//         const m2 = m4_multiply(m1, m0);
//         return m4_multiply(m2, modelGlobal);
//     }

//     update(time, delta) {
//         super.update(time, delta);

//         if (this.lastLookCache && this.time > this.lastLookTime + this.lookThrottle) {
//             this.lookTo(this.lastLookCache.pitch, this.lastLookCache.yaw);
//         }

//     }

// }




/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachedObject": () => (/* binding */ CachedObject),
/* harmony export */   "ClearObjectCache": () => (/* binding */ ClearObjectCache)
/* harmony export */ });
const objectCache = new Map();

function ClearObjectCache() {
    objectCache.forEach(value => value.destroy());
    objectCache.clear();
}

function CachedObject(name, generator) {
    if (objectCache.has(name)) return objectCache.get(name);
    const obj = generator();
    objectCache.set(name, obj);
    return obj;
}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js":
/*!************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Pawn.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPawn": () => (/* binding */ GetPawn),
/* harmony export */   "Pawn": () => (/* binding */ Pawn),
/* harmony export */   "PawnManager": () => (/* binding */ PawnManager)
/* harmony export */ });
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");
/* eslint-disable new-cap */


//------------------------------------------------------------------------------------------
//-- PawnManager ---------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

let pm; // Local pointer for pawns

class PawnManager extends _Root__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(name) {
        super(name || "PawnManager");
        pm = this;
        this.pawns = new Map();

        const actorManager = this.modelService("ActorManager");
        actorManager.actors.forEach(actor => this.spawnPawn(actor));

        for(const pawn of this.pawns.values()) { pawn.link() }; // recreate child links after all pawns are spawned

        this.subscribe("actor", "createActor", this.spawnPawn);
    }

    destroy() {
        const doomed = new Map(this.pawns);
        doomed.forEach(pawn => pawn.destroy());
        pm = null;
        super.destroy();
    }

    spawnPawn(actor) { if (actor.pawn) {
        const p = new actor.pawn(actor);
        p.link();}
    }

    add(pawn) {  this.pawns.set(pawn.actor.id, pawn); }
    has(id) { return this.pawns.has(id); }
    get(id) { return this.pawns.get(id); }
    delete(pawn) { this.pawns.delete(pawn.actor.id); }

    update(time, delta) {
        for(const pawn of this.pawns.values()) { if (!pawn.parent) pawn.fullUpdate(time, delta); };
    }
}

function GetPawn(actorId) { return pm.get(actorId); }

//------------------------------------------------------------------------------------------
//-- Pawn ----------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class Pawn extends _Root__WEBPACK_IMPORTED_MODULE_0__.WorldcoreView {

    constructor(actor) {
        super(actor);
        this._sayNext = {};
        this._sayCache = {};

        // this.sayLast = {};
        // this.sayCache ={};
        this._actor = actor;
        pm.add(this);
        this.link();

        this.listen("destroyActor", this.destroy);
        this.listen("parentSet", this.onParent);
    }

    link() { if(this.parent) this.parent.addChild(this); }

    get actor() {return this._actor};

    destroy() {
        this.doomed = true;
        pm.delete(this);
        this.detach(); // Calling View clean-up.
    }

    get parent() {
        if (this.actor.parent && !this._parent) this._parent = GetPawn(this.actor.parent.id);
        return this._parent;
    }

    get children() {
        return this._children;
    }

    addChild(child) {
        if (!this._children) this._children = new Set();
        this._children.add(child);
    }

    removeChild(child) {
        if (this._children) this._children.delete(child);
    }

    onParent(d) {
        if (d.o) {
            this._parent = null;
            GetPawn(d.o.id).removeChild(this);
        }
        if(this.parent) this.parent.addChild(this);
    }

    say(event, data, throttle = 0) {
        if (this.time < this._sayNext[event]) {
            this._sayCache[event] = { data, throttle };
        } else {
            this._sayNext[event] = this.time + throttle;
            this._sayCache[event] = null;
            this.publish(this.actor.id, event, data);
        }
    }

    // say(event, data, throttle = 0) {
    //     if (this.time < (this.sayLast[event] || 0) + throttle) {
    //         const expire = this.time + throttle;
    //         this.sayCache[event] = {data, expire};
    //     } else {
    //         this.sayLast[event] = this.time;
    //         this.publish(this.actor.id, event, data);
    //         this.sayCache[event] = null;
    //     }
    // }


    listen(event, callback) {
        this.subscribe(this.actor.id, event, callback);
    }

    listenImmediate(event, callback) {
        this.subscribe(this.actor.id,{event, handling: "immediate"}, callback);
    }

    ignore(event) {
        this.unsubscribe(this.actor.id, event);
    }

    listenOnce(event, callback) {
        this.subscribe(this.actor.id, {event, handling: "oncePerFrame"}, callback);
    }

    set(options, throttle = 0) {
        this.say("_set", options, throttle);
    }

    preUpdate(time, delta) {} // Called immediately before the main update
    update(time, delta) {}
    postUpdate(time, delta){} // Called immediately after the main update.

    fullUpdate(time, delta) {
        this.preUpdate(time, delta);
        this.update(time, delta);
        this.postUpdate(time, delta);

        for (const event in this._sayCache) { // Flushes expired cached events from throttled says
            const cache = this._sayCache[event];
            if (cache && time > this._sayNext[event]) {
                const { data, throttle } = cache;
                this._sayNext[event] = time + throttle;
                this._sayCache[event] = null;
                this.publish(this.actor.id, event, data);
            }
        }

        if (this.children) this.children.forEach(child => child.fullUpdate(time, delta));
    }

    // fullUpdate(time, delta) {
    //     this.preUpdate(time, delta);
    //     this.update(time, delta);
    //     this.postUpdate(time, delta);

    //     for (const event in this.sayCache) { // Flushes expired cached events from throttled says
    //         const cache = this.sayCache[event];
    //         // console.log(cache);
    //         if (cache) {
    //             console.log("flush");
    //             this.sayLast[event] = this.time;
    //             this.publish(this.actor.id, event, cache.data);
    //             this.sayCache[event] = null;
    //             // console.log(this.sayCache[event]);
    //         }
    //     }

    //     if (this.children) this.children.forEach(child => child.fullUpdate(time, delta));
    // }


}




/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Player.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Player.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Player": () => (/* binding */ AM_Player),
/* harmony export */   "PM_Player": () => (/* binding */ PM_Player),
/* harmony export */   "PlayerManager": () => (/* binding */ PlayerManager)
/* harmony export */ });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ "./node_modules/@croquet/worldcore-kernel/src/Actor.js");
/* harmony import */ var _Mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mixins */ "./node_modules/@croquet/worldcore-kernel/src/Mixins.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");




//------------------------------------------------------------------------------------------
//-- PlayerManager -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Maintains a list of players connected to the session. Your player manager should override the
// createPlayer() method.

class PlayerManager extends _Root__WEBPACK_IMPORTED_MODULE_2__.ModelService {

    init(name) {
        super.init(name ||'PlayerManager');
        this.players = new Map();
        this.subscribe(this.sessionId, "view-join", this.onJoin);
        this.subscribe(this.sessionId, "view-exit", this.onExit);
    }

    onJoin(viewId) {
        if (this.players.has(viewId)) console.warn("PlayerManager received duplicate view-join for viewId " + viewId);
        const player = this.createPlayer({playerId: viewId});
        if (!player) return;
        this.players.set(viewId, player);
        this.publish("playerManager", "create", player);
    }

    // This method can be overridden to create your specific actor type. Note that if you want to pass additional options
    // you need to add them to the existing options object.

    createPlayer(options) {
        return null;
    }

    destroyPlayer(player) {
        this.publish("playerManager", "destroy", player);
        player.destroy();
    }

    onExit(viewId) {
        const player = this.player(viewId);
        if (!player) return;
        this.destroyPlayer(player);
        this.players.delete(viewId);
    }

    get count() { return this.players.size }
    player(viewId) { return this.players.get(viewId) }

}
PlayerManager.register("PlayerManager");


//------------------------------------------------------------------------------------------
//-- Player --------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// A player actor is automatically created whenever a player joins. You should specify the player
// actor class in the playerActor method of your PlayerManager. The playerId is the viewId
// of the view that spawned the player actor.

//-- Actor ---------------------------------------------------------------------------------

const AM_Player = superclass => class extends superclass {

    get playerId() { return this._playerId }

};
(0,_Mixins__WEBPACK_IMPORTED_MODULE_1__.RegisterMixin)(AM_Player);

//-- Pawn ----------------------------------------------------------------------------------

const PM_Player = superclass => class extends superclass {

    // Returns true if this pawn or any of its parents is owned by the local player.

    get isMyPlayerPawn() {
        let p = this;
        do {
            if (p.actor && p.actor.playerId === p.viewId) return true;
            p = p.parent;
        } while (p);
        return false;
    }

};


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Render.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Render.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PM_Camera": () => (/* binding */ PM_Camera),
/* harmony export */   "PM_Visible": () => (/* binding */ PM_Visible),
/* harmony export */   "RenderManager": () => (/* binding */ RenderManager)
/* harmony export */ });
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");



//------------------------------------------------------------------------------------------
//-- PM_Visible  ---------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const PM_Visible = superclass => class extends superclass {

    destroy() {
        super.destroy();
        const render = this.service("RenderManager");
        for (const layerName in render.layers) {
            const layer = render.layers[layerName];
            if (layer.has(this)) render.dirtyLayer(layerName);
            render.layers[layerName].delete(this);
        }
    }

    addToLayers(...names) {
        const render = this.service("RenderManager");
        names.forEach(name => {
            if (!render.layers[name]) render.layers[name] = new Set();
            render.layers[name].add(this);
            render.dirtyLayer(name);
        });
    }

    removeFromLayers(...names) {
        const render = this.service("RenderManager");
        names.forEach(name => {
            if (!render.layers[name]) return;
            render.layers[name].delete(this);
            if (render.layers[name].size === 0) {
                delete render.layers[name];
            }
            render.dirtyLayer(name);
        });
    }

    layers() {
        let result = [];
        const render = this.service("RenderManager");
        for (const layerName in render.layers) {
            const layer = render.layers[layerName];
            if (layer.has(this)) result.push(layerName);
        }
        return result;
    }        
};

//------------------------------------------------------------------------------------------
//-- PM_Camera -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const PM_Camera = superclass => class extends superclass {};

//------------------------------------------------------------------------------------------
//-- RenderManager -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class RenderManager extends _Root__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(options = {}, name) {
        super(name);
        this.registerViewName("RenderManager"); // Alternate generic name
        this.layers = {};
    }

    dirtyLayer(name) {} // Renderer can use this to trigger a rebuild of renderer-specific layer data;

}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Root.js":
/*!************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Root.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetModelService": () => (/* binding */ GetModelService),
/* harmony export */   "GetViewService": () => (/* binding */ GetViewService),
/* harmony export */   "ModelRoot": () => (/* binding */ ModelRoot),
/* harmony export */   "ModelService": () => (/* binding */ ModelService),
/* harmony export */   "StartWorldcore": () => (/* binding */ StartWorldcore),
/* harmony export */   "ViewRoot": () => (/* binding */ ViewRoot),
/* harmony export */   "ViewService": () => (/* binding */ ViewService),
/* harmony export */   "WorldcoreModel": () => (/* binding */ WorldcoreModel),
/* harmony export */   "WorldcoreView": () => (/* binding */ WorldcoreView),
/* harmony export */   "viewRoot": () => (/* binding */ viewRoot)
/* harmony export */ });
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/croquet */ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js");
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actor */ "./node_modules/@croquet/worldcore-kernel/src/Actor.js");
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pawn */ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js");
/* harmony import */ var _ObjectCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectCache */ "./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js");





//------------------------------------------------------------------------------------------
//-- WorldcoreModel ------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Extends the model base class with Worldcore-specific methods.

class WorldcoreModel extends _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Model {

    service(name) { return this.wellKnownModel(name) }

}
WorldcoreModel.register("WorldcoreModel");

//------------------------------------------------------------------------------------------
//-- ModelRoot -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class ModelRoot extends WorldcoreModel {

    static modelServices() { return []; }

    init() {
        super.init();
        this.beWellKnownAs("ModelRoot");
        this.services = new Set();
        this.services.add(_Actor__WEBPACK_IMPORTED_MODULE_1__.ActorManager.create());
        this.constructor.modelServices().forEach( service => {
            let options;
            if (service.service) { // Process extended service object
                options = service.options;
                service = service.service;
            }
            this.services.add(service.create(options));
        });

    }

}
ModelRoot.register("ModelRoot");

//------------------------------------------------------------------------------------------
//-- ModelService --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// A model service is a named singleton that's created by the root model. Do not instantiate
// model services directly.

class ModelService extends WorldcoreModel {

    static async asyncStart() {}

    init(name, options = {}) {
        super.init();
        this.name = name;
        if (!name) console.error("All services must have public names!");
        else if (this.wellKnownModel(name)) console.error("Duplicate service!");
        else this.beWellKnownAs(name);
    }

}
ModelService.register('ModelService');

function GetModelService(name) { return viewRoot.wellKnownModel(name) }

//------------------------------------------------------------------------------------------
//-- WorldcoreView -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Extends the view base class with Worldcore-specific methods.

class WorldcoreView extends _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.View {

    service(name) { return viewServices.get(name) }
    modelService(name) { return this.wellKnownModel(name) }
    get time() {return time1}
    get delta()  {return time1 - time0}

}

//------------------------------------------------------------------------------------------
//-- ViewRoot ------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// viewRoot is a special public global variable that stores the viewRoot.

let viewRoot;
let time0 = 0;
let time1 = 0;
const viewServices = new Map();
let pawnManager;

class ViewRoot extends WorldcoreView {

    static viewServices() { return []; }

    constructor(model) {
        super(model);
        this.model = model;
        viewRoot = this;
        time0 = 0;
        time1 = 0;
        viewServices.clear();
        (0,_ObjectCache__WEBPACK_IMPORTED_MODULE_3__.ClearObjectCache)();
        this.constructor.viewServices().forEach( service => {
            let options;
            let name = service.name; // either the class name, or the name property;
            if (service.service) { // Process extended service object
                options = service.options;
                service = service.service;
            }
            new service(options, name);
        });
        pawnManager = new _Pawn__WEBPACK_IMPORTED_MODULE_2__.PawnManager();
    }

    detach() {
        [...viewServices.values()].reverse().forEach(s => s.destroy());
        viewServices.clear();
        super.detach();
    }

    update(time) {
        time0 = time1;
        time1 = time;
        const delta = time1 - time0;
        let done = new Set();

        pawnManager.update(time, delta); // Pawns update before other services
        viewServices.forEach(s => {
            if (done.has(s)) {return;}
            if (s === pawnManager) return;
            done.add(s);
            if (s.update) s.update(time, delta);
        });
    }

}

//------------------------------------------------------------------------------------------
//-- ViewService ---------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class ViewService extends WorldcoreView {

    static async asyncStart() {}

    constructor(name) {
        super(viewRoot.model);
        this.model = viewRoot.model;
        this.registerViewName(name);
    }

    registerViewName(name) {
        if (!name) console.error("All services must have public names!");
        else if (viewServices.has(name)) console.error("Duplicate service!");
        else viewServices.set(name, this);
    }

    destroy() {
        this.detach();
        viewServices.delete(this.name);
    }

}

function GetViewService(name) { return viewServices.get(name) }

//------------------------------------------------------------------------------------------
//-- StartWorldcore ------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

async function StartWorldcore(options) {

    await Promise.all(options.model.modelServices().map(service => {
        if (service.service) service = service.service;
        return service.asyncStart();
    }));

    await Promise.all(options.view.viewServices().map(service => {
        if (service.service) service = service.service;
        return service.asyncStart();
    }));

    const session = await _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Session.join(options);

    return session;
}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Utilities.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Utilities.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerlinNoise": () => (/* binding */ PerlinNoise),
/* harmony export */   "PriorityQueue": () => (/* binding */ PriorityQueue),
/* harmony export */   "Shuffle": () => (/* binding */ Shuffle),
/* harmony export */   "TwoWayMap": () => (/* binding */ TwoWayMap)
/* harmony export */ });
//------------------------------------------------------------------------------------------
//-- PriorityQueue -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Implements a basic priority queue.

// If you wanted to set up a queue that sorted on key/value pairs it would look like this:
// const q = new PriorityQueue((a, b) => a.key < b.key);

const defaultComparator = (a, b) => a < b;

class PriorityQueue {

    constructor(comparator = defaultComparator) {
        this.items = [];
        this.comparator = comparator;
    }

    get isEmpty() { return (this.items.length === 0); }
    get count() { return this.items.length; }
    get top() { return this.items[0]; }

    clear() { this.items.length = 0; }

    push(item) {
        let n = this.items.length;
        while (n > 0 && !this.comparator(this.items[n >> 1], item)) {
            this.items[n] = this.items[n >> 1];
            n >>= 1;
        }
        this.items[n] = item;
    }

    pop() {
        const top = this.items[0];
        const last = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = last;
            this.heapify(0);
        }
        return top;
    }

    traverse(callback) {
        this.items.forEach(callback);
    }

    heapify(n) {
        let m = n;
        const left = n << 1;
        const right = left + 1;
        if (left < this.items.length && this.comparator(this.items[left], this.items[m])) m = left;
        if (right < this.items.length && this.comparator(this.items[right], this.items[m])) m = right;
        if (m === n) return;
        const swap = this.items[n];
        this.items[n] = this.items[m];
        this.items[m] = swap;
        this.heapify(m);
    }
}

//------------------------------------------------------------------------------------------
//-- PerlinNoise -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class PerlinNoise  {
    constructor() {
        this.generate();
    }

    generate() {
        this.hashTable = this.generateHashTable();
    }

    generateHashTable() {
        const permutation = [];
        for (let n = 0; n < 256; n++) permutation.push({key: Math.random(), value: n});
        permutation.sort((a, b) => a.key - b.key);
        const table = permutation.map(a => a.value);
        const table2 = table.concat(table);
        return table2;
    }

    signedNoise2D(x,y) {
        return this.noise2D(x,y) - 0.5;
    }

    noise2D(x,y) {
        const table = this.hashTable;
        const xInt= Math.floor(x);
        const yInt = Math.floor(y);
        const xf = x - xInt;
        const yf = y - yInt;
        const u = this.fade(xf);
        const v = this.fade(yf);
        const xi = xInt & 0xff;
        const yi = yInt & 0xff;
        const aa = table[table[xi   ] + yi];
        const ab = table[table[xi+1 ] + yi];
        const ba = table[table[xi   ] + yi+1];
        const bb = table[table[xi+1 ] + yi+1];

        const aaGrad = this.grad(aa, xf, yf);
        const abGrad = this.grad(ab, xf-1, yf);
        const baGrad = this.grad(ba, xf, yf-1);
        const bbGrad = this.grad(bb, xf-1, yf-1);

        const lerp0 = this.lerp(aaGrad, abGrad, u);
        const lerp1 = this.lerp(baGrad, bbGrad, u);

        return (this.lerp(lerp0, lerp1, v) + 1) / 2;
    }

    lerp(a, b, t) {
        return a + t * (b - a);
    }

    fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    grad(hash, x, y) {
        switch (hash&0x3) {
            case 0: return x + y;
            case 1: return x - y;
            case 2: return -x + y;
            case 3: return -x - y;
            default: return 0;
        }
    }

}


//------------------------------------------------------------------------------------------
//-- TwoWayMap -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Holds a reverse map that maps values back onto keys

class TwoWayMap {
    constructor(map = new Map()) {
        this.map = map;
        this.rev = new Map();
        this.map.forEach((value, key) => { this.rev.set(value, key)})
    }

    clear() {
        this.map.clear();
        this.rev.clear();
    }

    set(key, value) {
        this.map.set(key, value);
        this.rev.set(value, key);
    }

    delete(key) {
        if (!this.map.has(key)) return;
        const value = this.map.get(key);
        this.map.delete(key);
        this.rev.delete(value);
    }

    get(key) { return this.map.get(key)}
    revGet(value) { return this.rev.get(value)}
    has(key) {return this.map.has(key)}
    revHas(value) {return this.rev.has(value)}

    forEach(callback) {this.map.forEach(callback)}
    revForEach(callback) {this.rev.forEach(callback)}
}

//------------------------------------------------------------------------------------------
//-- Shuffle -------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Returns an array of the specified length filled with random indices from 0 to length-1.
// Each index appears only once.

function Shuffle(length) {
    const out = new Array(length);
    for (let n = 0; n < length; n++) out[n] = n;
    let n = length;
    while(n) {
        const pick = Math.floor(Math.random() * n--);
        const swap = out[n];
        out[n] = out[pick];
        out[pick] = swap;
    }
    return out;
}


// shuffle(deck) {
//     let size = deck.length;
//     while (size) {
//         const pick = Math.floor(Math.random() * size--);
//         const swap = deck[size];
//         deck[size] = deck[pick];
//         deck[pick] = swap;
//     }
// }


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Vector.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Vector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAU": () => (/* binding */ TAU),
/* harmony export */   "TO_DEG": () => (/* binding */ TO_DEG),
/* harmony export */   "TO_RAD": () => (/* binding */ TO_RAD),
/* harmony export */   "clampRad": () => (/* binding */ clampRad),
/* harmony export */   "gaussian": () => (/* binding */ gaussian),
/* harmony export */   "m2_identity": () => (/* binding */ m2_identity),
/* harmony export */   "m2_rotation": () => (/* binding */ m2_rotation),
/* harmony export */   "m2_zero": () => (/* binding */ m2_zero),
/* harmony export */   "m4_determinant": () => (/* binding */ m4_determinant),
/* harmony export */   "m4_getRotation": () => (/* binding */ m4_getRotation),
/* harmony export */   "m4_getTranslation": () => (/* binding */ m4_getTranslation),
/* harmony export */   "m4_identity": () => (/* binding */ m4_identity),
/* harmony export */   "m4_invert": () => (/* binding */ m4_invert),
/* harmony export */   "m4_multiply": () => (/* binding */ m4_multiply),
/* harmony export */   "m4_perspective": () => (/* binding */ m4_perspective),
/* harmony export */   "m4_rotation": () => (/* binding */ m4_rotation),
/* harmony export */   "m4_rotationQ": () => (/* binding */ m4_rotationQ),
/* harmony export */   "m4_rotationX": () => (/* binding */ m4_rotationX),
/* harmony export */   "m4_rotationY": () => (/* binding */ m4_rotationY),
/* harmony export */   "m4_rotationZ": () => (/* binding */ m4_rotationZ),
/* harmony export */   "m4_scale": () => (/* binding */ m4_scale),
/* harmony export */   "m4_scaleRotationTranslation": () => (/* binding */ m4_scaleRotationTranslation),
/* harmony export */   "m4_toNormal4": () => (/* binding */ m4_toNormal4),
/* harmony export */   "m4_translation": () => (/* binding */ m4_translation),
/* harmony export */   "m4_transpose": () => (/* binding */ m4_transpose),
/* harmony export */   "m4_zero": () => (/* binding */ m4_zero),
/* harmony export */   "q_axisAngle": () => (/* binding */ q_axisAngle),
/* harmony export */   "q_conjugate": () => (/* binding */ q_conjugate),
/* harmony export */   "q_dot": () => (/* binding */ q_dot),
/* harmony export */   "q_equals": () => (/* binding */ q_equals),
/* harmony export */   "q_euler": () => (/* binding */ q_euler),
/* harmony export */   "q_identity": () => (/* binding */ q_identity),
/* harmony export */   "q_invert": () => (/* binding */ q_invert),
/* harmony export */   "q_isZero": () => (/* binding */ q_isZero),
/* harmony export */   "q_lookAt": () => (/* binding */ q_lookAt),
/* harmony export */   "q_magnitude": () => (/* binding */ q_magnitude),
/* harmony export */   "q_multiply": () => (/* binding */ q_multiply),
/* harmony export */   "q_normalize": () => (/* binding */ q_normalize),
/* harmony export */   "q_pitch": () => (/* binding */ q_pitch),
/* harmony export */   "q_roll": () => (/* binding */ q_roll),
/* harmony export */   "q_slerp": () => (/* binding */ q_slerp),
/* harmony export */   "q_yaw": () => (/* binding */ q_yaw),
/* harmony export */   "rayTriangleIntersect": () => (/* binding */ rayTriangleIntersect),
/* harmony export */   "sphericalRandom": () => (/* binding */ sphericalRandom),
/* harmony export */   "toDeg": () => (/* binding */ toDeg),
/* harmony export */   "toRad": () => (/* binding */ toRad),
/* harmony export */   "v2_abs": () => (/* binding */ v2_abs),
/* harmony export */   "v2_add": () => (/* binding */ v2_add),
/* harmony export */   "v2_angle": () => (/* binding */ v2_angle),
/* harmony export */   "v2_ceil": () => (/* binding */ v2_ceil),
/* harmony export */   "v2_divide": () => (/* binding */ v2_divide),
/* harmony export */   "v2_dot": () => (/* binding */ v2_dot),
/* harmony export */   "v2_equals": () => (/* binding */ v2_equals),
/* harmony export */   "v2_floor": () => (/* binding */ v2_floor),
/* harmony export */   "v2_inverse": () => (/* binding */ v2_inverse),
/* harmony export */   "v2_isZero": () => (/* binding */ v2_isZero),
/* harmony export */   "v2_lerp": () => (/* binding */ v2_lerp),
/* harmony export */   "v2_magnitude": () => (/* binding */ v2_magnitude),
/* harmony export */   "v2_manhattan": () => (/* binding */ v2_manhattan),
/* harmony export */   "v2_max": () => (/* binding */ v2_max),
/* harmony export */   "v2_min": () => (/* binding */ v2_min),
/* harmony export */   "v2_multiply": () => (/* binding */ v2_multiply),
/* harmony export */   "v2_normalize": () => (/* binding */ v2_normalize),
/* harmony export */   "v2_random": () => (/* binding */ v2_random),
/* harmony export */   "v2_rotate": () => (/* binding */ v2_rotate),
/* harmony export */   "v2_scale": () => (/* binding */ v2_scale),
/* harmony export */   "v2_sqrMag": () => (/* binding */ v2_sqrMag),
/* harmony export */   "v2_sub": () => (/* binding */ v2_sub),
/* harmony export */   "v2_transform": () => (/* binding */ v2_transform),
/* harmony export */   "v2_zero": () => (/* binding */ v2_zero),
/* harmony export */   "v3_abs": () => (/* binding */ v3_abs),
/* harmony export */   "v3_add": () => (/* binding */ v3_add),
/* harmony export */   "v3_angle": () => (/* binding */ v3_angle),
/* harmony export */   "v3_ceil": () => (/* binding */ v3_ceil),
/* harmony export */   "v3_cross": () => (/* binding */ v3_cross),
/* harmony export */   "v3_divide": () => (/* binding */ v3_divide),
/* harmony export */   "v3_dot": () => (/* binding */ v3_dot),
/* harmony export */   "v3_equals": () => (/* binding */ v3_equals),
/* harmony export */   "v3_floor": () => (/* binding */ v3_floor),
/* harmony export */   "v3_inverse": () => (/* binding */ v3_inverse),
/* harmony export */   "v3_isZero": () => (/* binding */ v3_isZero),
/* harmony export */   "v3_lerp": () => (/* binding */ v3_lerp),
/* harmony export */   "v3_magnitude": () => (/* binding */ v3_magnitude),
/* harmony export */   "v3_manhattan": () => (/* binding */ v3_manhattan),
/* harmony export */   "v3_max": () => (/* binding */ v3_max),
/* harmony export */   "v3_min": () => (/* binding */ v3_min),
/* harmony export */   "v3_multiply": () => (/* binding */ v3_multiply),
/* harmony export */   "v3_normalize": () => (/* binding */ v3_normalize),
/* harmony export */   "v3_random": () => (/* binding */ v3_random),
/* harmony export */   "v3_rotate": () => (/* binding */ v3_rotate),
/* harmony export */   "v3_rotateX": () => (/* binding */ v3_rotateX),
/* harmony export */   "v3_rotateY": () => (/* binding */ v3_rotateY),
/* harmony export */   "v3_rotateZ": () => (/* binding */ v3_rotateZ),
/* harmony export */   "v3_scale": () => (/* binding */ v3_scale),
/* harmony export */   "v3_sqrMag": () => (/* binding */ v3_sqrMag),
/* harmony export */   "v3_sub": () => (/* binding */ v3_sub),
/* harmony export */   "v3_transform": () => (/* binding */ v3_transform),
/* harmony export */   "v3_zero": () => (/* binding */ v3_zero)
/* harmony export */ });
// Vector and matrix math
//

//--------------------------------------------------------------------------------
//-- Math Utilities --------------------------------------------------------------
//--------------------------------------------------------------------------------

const TO_RAD = Math.PI / 180;
const TO_DEG = 1 / TO_RAD;
const TAU = Math.PI * 2;

function toRad(x) { return x * TO_RAD; }
function toDeg(x) { return x * TO_DEG; }

function clampRad(x) {
    while (x < 0) x += TAU;
    return x % TAU;
}

function gaussian(count, step = 1, standardDeviation = 1) {
    const sd = 2 * standardDeviation * standardDeviation;
    const a = 1/Math.sqrt(Math.PI * sd);
    const b = 1/sd;
    const out = [a];
    for (let i = 1; i < count; i++) {
        const x = step * i;
        out.push(a * Math.E ** -(b * x * x));
    }
    return out;
}

function rayTriangleIntersect(start, aim, triangle) {
    const epsilon = 0.00001;
    const v0 = triangle[0];
    const v1 = triangle[1];
    const v2 = triangle[2];
    const edge1 = v3_sub(v1,v0);
    const edge2 = v3_sub(v2,v0);
    const h = v3_cross(aim, edge2);
    const a = v3_dot(edge1, h);
    if (a > -epsilon && a < epsilon) return null; // Aim is parallel to triangle
    const f = 1/a;
    const s = v3_sub(start,v0);
    const u = f * v3_dot(s,h);
    if (u < 0 || u > 1) return null;
    const q = v3_cross(s, edge1);
    const v = f * v3_dot(aim, q);
    if (v < 0 || u+v > 1) return null;
    const t = f * v3_dot(edge2, q);
    if (t < epsilon || t > 1/epsilon) return null;
    return v3_add(start, v3_scale(aim, t));
}

// returns [xyz] on surface of sphere with values -1 > p > 1
function sphericalRandom() {
    const u = Math.random();
    const v = Math.random();
    const root = 2 * Math.sqrt(u - u * u);
    const angle = TAU * v;
    return [root * Math.cos(angle), root * Math.sin(angle), 1-2*u];
}

//--------------------------------------------------------------------------------
//-- 2 Vectors -------------------------------------------------------------------
//--------------------------------------------------------------------------------

function v2_zero() {
    return [0,0];
}

// export function v2_unit() {
//     return [1,0];
// }

function v2_random() {
    const a = Math.random() * 2 * Math.PI;
    return [Math.cos(a), Math.sin(a)];
}

function v2_magnitude(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

function v2_sqrMag(v) { // Squared magnitude
    return (v[0] * v[0] + v[1] * v[1]);
}

function v2_normalize(v) {
    const m = 1/v2_magnitude(v);
    return [v[0]*m, v[1]*m];
}

function v2_abs(v) {
    return [Math.abs(v[0]), Math.abs(v[1])];
}

function v2_ceil(v) {
    return [Math.ceil(v[0]), Math.ceil(v[1])];
}

function v2_floor(v) {
    return [Math.floor(v[0]), Math.floor(v[1])];
}

function v2_inverse(v) {
    return [1/v[0], 1/v[1]];
}

function v2_scale(v,s) {
    return [v[0] * s, v[1] * s];
}

function v2_multiply(a,b) {
    return [a[0] * b[0], a[1] * b[1]];
}

function v2_divide(a,b) {
    return [a[0] / b[0], a[1] / b[1]];
}

// Clockwise in radians
// export function v2_rotate(v,a,c) {
//     const sinA = Math.sin(a);
//     const cosA = Math.cos(a);
//     if (c) {
//         const vc = v2_sub(v, c);
//         return v2_add(c, [cosA*vc[0] - sinA*vc[1], sinA*vc[0] + cosA*vc[1]]);
//     }
//     return [cosA*v[0] - sinA*v[1], sinA*v[0] + cosA*v[1]];
// }

function v2_rotate(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [cosA*v[0] - sinA*v[1], sinA*v[0] + cosA*v[1]];
}

function v2_add(a,b) {
    return [a[0] + b[0], a[1] + b[1]];
}

function v2_sub(a,b) {
    return [a[0] - b[0], a[1] - b[1]];
}

function v2_dot(a,b) {
    return a[0] * b[0] + a[1] * b[1];
}

function v2_min(a,b) {
    return [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
}

function v2_max(a,b) {
    return [Math.max(a[0], b[0]), Math.max(a[1], b[1])];
}

function v2_angle(a,b) {
    return Math.acos(Math.min(1,(Math.max(-1, v2_dot(v2_normalize(a), v2_normalize(b))))));
}

function v2_lerp(a,b,t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function v2_equals(a,b,e = 0) { // e is an epsilon
    if (e) return (e > Math.abs(a[0]-b[0]) && e > Math.abs(a[1]-b[1]));
    return (a[0] === b[0] && a[1] === b[1]);
}

function v2_isZero(v) {
    return v[0] === 0 && v[1] === 0;
}

function v2_manhattan(a, b) {
    return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
}

function v2_transform(v, m) {
    const x = v[0], y = v[1];
    return ([
        m[0] * x + m[2] * y,
        m[1] * x + m[3] * y
    ]);
}

//--------------------------------------------------------------------------------
//-- 3 Vectors -------------------------------------------------------------------
//--------------------------------------------------------------------------------

function v3_zero() {
    return [0,0,0];
}

// export function v3_unit() {
//     return [1,1,1];
// }

// export function v3_random() {
//     const a = Math.random() * 2 * Math.PI;
//     const b = Math.acos(2 * Math.random() - 1);
//     return v3_rotateZ(v3_rotateY(v3_unit(),b),a);
// }

function v3_random() {
    const u = Math.random();
    const v = Math.random();
    const root = 2 * Math.sqrt(u - u * u);
    const angle = TAU * v;
    return [root * Math.cos(angle), root * Math.sin(angle), 1-2*u];
}

function v3_magnitude(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function v3_sqrMag(v) { // Squared magnitude
    return (v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function v3_normalize(v) {
    const m = 1/v3_magnitude(v);
    return [v[0]*m, v[1]*m, v[2]*m];
}

function v3_inverse(v) {
    return [1/v[0], 1/v[1], 1/v[2]];
}

function v3_abs(v) {
    return [Math.abs(v[0]), Math.v3_abs(v[1]), Math.abs(v[2])];
}

function v3_ceil(v) {
    return [Math.ceil(v[0]), Math.v3_ceil(v[1]), Math.ceil(v[2])];
}

function v3_floor(v) {
    return [Math.floor(v[0]), Math.floor(v[1]), Math.floor(v[2])];
}

function v3_scale(v,s) {
    return [v[0] * s, v[1] * s, v[2] * s];
}

// export function v3_opposite(v) {
//     return [v[0] * -1, v[1] * -1, v[2] * -1];
// }

function v3_multiply(a,b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function v3_divide(a,b) {
    return [a[0] / b[0], a[1] / b[1], a[2] / b[2]];
}

// Clockwise in radians looking along axis.
function v3_rotateX(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [v[0], cosA*v[1] - sinA*v[2], sinA*v[1] + cosA*v[2]];
}

function v3_rotateY(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [sinA*v[2] + cosA*v[0], v[1], cosA*v[2] - sinA*v[0]];
}

function v3_rotateZ(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [cosA*v[0] - sinA*v[1], sinA*v[0] + cosA*v[1], v[2]];
}

function v3_add(a,b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function v3_sub(a,b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function v3_dot(a,b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function v3_cross(a,b) {
    const a0 = a[0], a1 = a[1], a2 = a[2];
    const b0 = b[0], b1 = b[1], b2 = b[2];
    return [a1 * b2 - a2 * b1, a2 * b0 - a0 * b2, a0 * b1 - a1 * b0];
}

function v3_min(a,b) {
    return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])];
}

function v3_max(a,b) {
    return [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])];
}

// Returns manhattan disances between a and b
function v3_manhattan(a, b) {
    return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]) + Math.abs(a[2]-b[2]);
}

function v3_angle(a,b) {
    return Math.acos(Math.min(1,(Math.max(-1, v3_dot(v3_normalize(a), v3_normalize(b))))));
}

function v3_lerp(a,b,t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function v3_transform(v, m) {
    const x = v[0], y = v[1], z = v[2];
    const w = m[3] * x + m[7] * y + m[11] * z + m[15];
    return [
        (m[0] * x + m[4] * y + m[8] * z + m[12]) / w,
        (m[1] * x + m[5] * y + m[9] * z + m[13]) / w,
        (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    ];
}

function v3_rotate(v, q) {
    const qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    const x = v[0], y = v[1], z = v[2];
    let uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    return [x + uvx + uuvx, y + uvy + uuvy, z + uvz + uuvz];
}

function v3_equals(a,b,e = 0) { // e is an epsilon
    if (e) return (e > Math.abs(a[0]-b[0]) && e > Math.abs(a[1]-b[1]) && e > Math.abs(a[2]-b[2]));
    return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
}

function v3_isZero(v) {
    return v[0] === 0 && v[1] === 0 && v[2] === 0;
}

//--------------------------------------------------------------------------------
//-- 4 Vectors -------------------------------------------------------------------
//--------------------------------------------------------------------------------

// export function v4_zero() {
//     return [0,0,0,0];
// }

// // export function v4_unit() {
// //     return [1,0,0,0];
// // }

// export function v4_magnitude(v) {
//     return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2] + v[3] * v[3]);
// }

// export function v4_sqrMag(v) { // Squared magnitude
//     return (v[0] * v[0] + v[1] * v[1] + v[2] * v[2] + v[3] * v[3]);
// }

// export function v4_normalize(v) {
//     const m = 1/v4_magnitude(v);
//     return [v[0]*m, v[1]*m, v[2]*m, v[3]*m];
// }

// export function v4_inverse(v) {
//     return [1/v[0], 1/v[1], 1/v[2], 1/v[3]];
// }

// export function v4_ceil(v) {
//     return [Math.ceil(v[0]), Math.v3_ceil(v[1]), Math.v3_ceil(v[2]), Math.v3_ceil(v[3])];
// }

// export function v4_floor(v) {
//     return [Math.floor(v[0]), Math.floor(v[1]), Math.floor(v[2]), Math.floor(v[3])];
// }

// export function v4_scale(v,s) {
//     return [v[0] * s, v[1] * s, v[2] * s, v[3] * s];
// }

// export function v4_multiply(a,b) {
//     return [a[0] * b[0], a[1] * b[1], a[2] * b[2], a[3] * b[3]];
// }

// export function v4_add(a,b) {
//     return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
// }

// export function v4_sub(a,b) {
//     return [a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3]];
// }

// export function v4_dot(a,b) {
//     return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]  + a[3] * b[3];
// }

// export function v4_min(a,b) {
//     return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2]), Math.min(a[3], b[3])];
// }

// export function v4_max(a,b) {
//     return [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])];
// }

// export function v4_transform(v, m) {
//         const x = v[0], y = v[1], z = v[2], w = v[3];
//         return [
//             m[0] * x + m[4] * y + m[8] * z + m[12] * w,
//             m[1] * x + m[5] * y + m[9] * z + m[13] * w,
//             m[2] * x + m[6] * y + m[10] * z + m[14] * w,
//             m[3] * x + m[7] * y + m[11] * z + m[15] * w,
//         ];
//       }

// export function v4_equals(a,b,e = 0) { // e is an epsilon
//     if (e) return (e > Math.abs(a[0]-b[0]) && e > Math.abs(a[1]-b[1]) && e > Math.abs(a[2]-b[2]) && e > Math.abs(a[3]-b[3]));
//     return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]);
// }

//--------------------------------------------------------------------------------
//-- 2x2 Matrices ----------------------------------------------------------------
//--------------------------------------------------------------------------------

function m2_zero() {
    return [
        0,0,
        0,0
    ];
}

function m2_identity() {
    return [
        1,0,
        0,1
    ];
}

// Clockwise in radians
function m2_rotation(angle) {
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);
    return [
        cosA, -sinA,
        sinA,cosA
    ];
}

//--------------------------------------------------------------------------------
//-- 3x3 Matrices ----------------------------------------------------------------
//--------------------------------------------------------------------------------

// export function m3_zero() {
//     return [
//         0,0,0,
//         0,0,0,
//         0,0,0
//     ];
// }

// export function m3_identity() {
//     return [
//         1,0,0,
//         0,1,0,
//         0,0,1
//     ];
// }

// export function m3_transpose(m) {
//     return [
//         m[0], m[3], m[6],
//         m[1], m[4], m[7],
//         m[2], m[5], m[8]
//     ];
// }

// export function m3_invert(m) {
//     const a00 = m[0], a01 = m[1], a02 = m[2];
//     const a10 = m[3], a11 = m[4], a12 = m[5];
//     const a20 = m[6], a21 = m[7], a22 = m[8];

//     const b00 = a11 * a22 - a21 * a12;
//     const b10 = a01 * a22 - a21 * a02;
//     const b20 = a01 * a12 - a11 * a02;

//     const b01 = a10 * a22 - a20 * a12;
//     const b11 = a00 * a22 - a20 * a02;
//     const b21 = a00 * a12 - a10 * a02;

//     const b02 = a10 * a21 - a20 * a11;
//     const b12 = a00 * a21 - a20 * a01;
//     const b22 = a00 * a11 - a10 * a01;

//     // // Calculate the determinant
//     const d = a00 * b00 + a01 * -b01 + a02 * b02;

//     return [
//         b00/d, -b10/d, b20/d,
//         -b01/d, b11/d, -b21/d,
//         b02/d, -b12/d, b22/d
//     ];
// }

// export function m3_multiply(a, b) {
//     const a00 = a[0], a01 = a[1], a02 = a[2];
//     const a10 = a[3], a11 = a[4], a12 = a[5];
//     const a20 = a[6], a21 = a[7], a22 = a[8];

//     const b00 = b[0], b01 = b[1], b02 = b[2];
//     const b10 = b[3], b11 = b[4], b12 = b[5];
//     const b20 = b[6], b21 = b[7], b22 = b[8];

//     return [
//         b00 * a00 + b01 * a10 + b02 * a20,
//         b00 * a01 + b01 * a11 + b02 * a21,
//         b00 * a02 + b01 * a12 + b02 * a22,

//         b10 * a00 + b11 * a10 + b12 * a20,
//         b10 * a01 + b11 * a11 + b12 * a21,
//         b10 * a02 + b11 * a12 + b12 * a22,

//         b20 * a00 + b21 * a10 + b22 * a20,
//         b20 * a01 + b21 * a11 + b22 * a21,
//         b20 * a02 + b21 * a12 + b22 * a22
//     ];
//   }



// export function m3_normalFromMat4(out, a) {
//     let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
//     let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
//     let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
//     let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

//     let b00 = a00 * a11 - a01 * a10;
//     let b01 = a00 * a12 - a02 * a10;
//     let b02 = a00 * a13 - a03 * a10;
//     let b03 = a01 * a12 - a02 * a11;
//     let b04 = a01 * a13 - a03 * a11;
//     let b05 = a02 * a13 - a03 * a12;
//     let b06 = a20 * a31 - a21 * a30;
//     let b07 = a20 * a32 - a22 * a30;
//     let b08 = a20 * a33 - a23 * a30;
//     let b09 = a21 * a32 - a22 * a31;
//     let b10 = a21 * a33 - a23 * a31;
//     let b11 = a22 * a33 - a23 * a32;

//     // Calculate the determinant
//     let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

//     if (!det) {
//       return null;
//     }
//     det = 1.0 / det;

//     out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
//     out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
//     out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

//     out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
//     out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
//     out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

//     out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
//     out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
//     out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

//     return out;
//   }


//--------------------------------------------------------------------------------
//-- 4x4 Matrices ----------------------------------------------------------------
//--------------------------------------------------------------------------------

function m4_zero() {
    return [
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ];
}

function m4_identity() {
    return [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1
    ];
}

function m4_translation(v) {
    return [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        v[0],v[1],v[2],1
    ];
}

function m4_getTranslation(m) {
    return [m[12], m[13], m[14]];
}

// Accepts a scalar or a 3 vector
function m4_scale(s) {
    if (s instanceof Array) {
        return [
            s[0],0,0,0,
            0,s[1],0,0,
            0,0,s[2],0,
            0,0,0,1
        ];
    }
    return [
        s,0,0,0,
        0,s,0,0,
        0,0,s,0,
        0,0,0,1
    ];
}

// Clockwise in radians looking along axis.
function m4_rotation(axis, angle) {
    const n = v3_normalize(axis);
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);
    const minusCosA = 1-cosA;
    return [
        n[0] * n[0] * minusCosA + cosA,
        n[1] * n[0] * minusCosA + n[2] * sinA,
        n[2] * n[0] * minusCosA - n[1] * sinA,
        0,

        n[0] * n[1] * minusCosA - n[2] * sinA,
        n[1] * n[1] * minusCosA + cosA,
        n[2] * n[1] * minusCosA + n[0] * sinA,
        0,

        n[0] * n[2] * minusCosA + n[1] * sinA,
        n[1] * n[2] * minusCosA - n[0] * sinA,
        n[2] * n[2] * minusCosA + cosA,
        0,

        0,
        0,
        0,
        1
    ];
}

function m4_rotationX(a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [
        1,0,0,0,
        0,cosA,sinA,0,
        0,-sinA,cosA,0,
        0,0,0,1
    ];
}

function m4_rotationY(a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [
        cosA,0,-sinA,0,
        0,1,0,0,
        sinA,0,cosA,0,
        0,0,0,1
    ];
}

function m4_rotationZ(a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [
        cosA,sinA,0,0,
        -sinA,cosA,0,0,
        0,0,1,0,
        0,0,0,1
    ];
}

// Creates a rotation matrix from a quaternion
function m4_rotationQ(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;

    return [
        1 - yy - zz,
        yx + wz,
        zx - wy,
        0,

        yx - wz,
        1 - xx - zz,
        zy + wx,
        0,

        zx + wy,
        zy - wx,
        1 - xx - yy,
        0,

        0,
        0,
        0,
        1
    ];
}

// Extracts the rotation component and returns it as a quaternion

function m4_getRotation(m) {
    const trace = m[0] + m[5] + m[10];
    let s = 0;
    const q = [0,0,0,0];

    if (trace > 0) {
      s = Math.sqrt(trace + 1.0) * 2;
      q[3] = 0.25 * s;
      q[0] = (m[6] - m[9]) / s;
      q[1] = (m[8] - m[2]) / s;
      q[2] = (m[1] - m[4]) / s;
    } else if ((m[0] > m[5]) && (m[0] > m[10])) {
      s = Math.sqrt(1.0 + m[0] - m[5] - m[10]) * 2;
      q[3] = (m[6] - m[9]) / s;
      q[0] = 0.25 * s;
      q[1] = (m[1] + m[4]) / s;
      q[2] = (m[8] + m[2]) / s;
    } else if (m[5] > m[10]) {
      s = Math.sqrt(1.0 + m[5] - m[0] - m[10]) * 2;
      q[3] = (m[8] - m[2]) / s;
      q[0] = (m[1] + m[4]) / s;
      q[1] = 0.25 * s;
      q[2] = (m[6] + m[9]) / s;
    } else {
      s = Math.sqrt(1.0 + m[10] - m[0] - m[5]) * 2;
      q[3] = (m[1] - m[4]) / s;
      q[0] = (m[8] + m[2]) / s;
      q[1] = (m[6] + m[9]) / s;
      q[2] = 0.25 * s;
    }

    return q;
  }

// Applied in that order. Scale can be either a 3-vector or a scaler. Rotation is a quaternion.
function m4_scaleRotationTranslation(s, q, v) {

  const x = q[0], y = q[1], z = q[2], w = q[3];
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  let sx = 1, sy = 1, sz = 1;
  if (s instanceof Array) {
    sx = s[0]; sy = s[1]; sz = s[2];
  } else {
    sx = s; sy = s; sz = s;
  }
  return [
    (1 - (yy + zz)) * sx,
    (xy + wz) * sx,
    (xz - wy) * sx,
    0,

    (xy - wz) * sy,
    (1 - (xx + zz)) * sy,
    (yz + wx) * sy,
    0,

    (xz + wy) * sz,
    (yz - wx) * sz,
    (1 - (xx + yy)) * sz,
    0,

    v[0],
    v[1],
    v[2],
    1
  ];


}

// FOV is vertical field of view in radians
function m4_perspective(fov, aspect, near, far) {
    const f = 1.0 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, (2 * far * near) * nf, 0
    ];

  }

function m4_transpose(m) {
    return [
        m[0], m[4], m[8], m[12],
        m[1], m[5], m[9], m[13],
        m[2], m[6], m[10], m[14],
        m[3], m[7], m[11], m[15]
    ];
}

function m4_determinant(m) {

    const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
    const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
    const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
    const a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;

    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

function m4_invert(m) {

    const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
    const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
    const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
    const a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;

    const d =  b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    return [
        (a11 * b11 - a12 * b10 + a13 * b09) / d,
        (a02 * b10 - a01 * b11 - a03 * b09) / d,
        (a31 * b05 - a32 * b04 + a33 * b03) / d,
        (a22 * b04 - a21 * b05 - a23 * b03) / d,

        (a12 * b08 - a10 * b11 - a13 * b07) / d,
        (a00 * b11 - a02 * b08 + a03 * b07) / d,
        (a32 * b02 - a30 * b05 - a33 * b01) / d,
        (a20 * b05 - a22 * b02 + a23 * b01) / d,

        (a10 * b10 - a11 * b08 + a13 * b06) / d,
        (a01 * b08 - a00 * b10 - a03 * b06) / d,
        (a30 * b04 - a31 * b02 + a33 * b00) / d,
        (a21 * b02 - a20 * b04 - a23 * b00) / d,

        (a11 * b07 - a10 * b09 - a12 * b06) / d,
        (a00 * b09 - a01 * b07 + a02 * b06) / d,
        (a31 * b01 - a30 * b03 - a32 * b00) / d,
        (a20 * b03 - a21 * b01 + a22 * b00) / d
    ];
}

// A is applied before b
function m4_multiply(a,b) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    const b00 = b[0], b01 = b[1], b02 = b[2], b03 = b[3];
    const b10 = b[4], b11 = b[5], b12 = b[6], b13 = b[7];
    const b20 = b[8], b21 = b[9], b22 = b[10], b23 = b[11];
    const b30 = b[12], b31 = b[13], b32 = b[14], b33 = b[15];

    // Cache only the current line of the second matrix

    return [
        a00*b00 + a01*b10 + a02*b20 + a03*b30,
        a00*b01 + a01*b11 + a02*b21 + a03*b31,
        a00*b02 + a01*b12 + a02*b22 + a03*b32,
        a00*b03 + a01*b13 + a02*b23 + a03*b33,

        a10*b00 + a11*b10 + a12*b20 + a13*b30,
        a10*b01 + a11*b11 + a12*b21 + a13*b31,
        a10*b02 + a11*b12 + a12*b22 + a13*b32,
        a10*b03 + a11*b13 + a12*b23 + a13*b33,

        a20*b00 + a21*b10 + a22*b20 + a23*b30,
        a20*b01 + a21*b11 + a22*b21 + a23*b31,
        a20*b02 + a21*b12 + a22*b22 + a23*b32,
        a20*b03 + a21*b13 + a22*b23 + a23*b33,

        a30*b00 + a31*b10 + a32*b20 + a33*b30,
        a30*b01 + a31*b11 + a32*b21 + a33*b31,
        a30*b02 + a31*b12 + a32*b22 + a33*b32,
        a30*b03 + a31*b13 + a32*b23 + a33*b33,

    ];
}

// Extracts the scaling/rotation components and performs an inverse/transpose operation to generate a 4x4 normal transform matrix.
function m4_toNormal4(m) {
    const a00 = m[0], a01 = m[1], a02 = m[2];
    const a10 = m[4], a11 = m[5], a12 = m[6];
    const a20 = m[8], a21 = m[9], a22 = m[10];

    const b00 = a11 * a22 - a21 * a12;
    const b10 = a01 * a22 - a21 * a02;
    const b20 = a01 * a12 - a11 * a02;

    const b01 = a10 * a22 - a20 * a12;
    const b11 = a00 * a22 - a20 * a02;
    const b21 = a00 * a12 - a10 * a02;

    const b02 = a10 * a21 - a20 * a11;
    const b12 = a00 * a21 - a20 * a01;
    const b22 = a00 * a11 - a10 * a01;

    // // Calculate the determinant
    const d = a00 * b00 + a01 * -b01 + a02 * b02;

    return [
        b00/d, -b01/d, b02/d, 0,
        -b10/d, b11/d, -b12/d, 0,
        b20/d, -b21/d, b22/d, 0,
        0, 0, 0, 1
    ];
}

// Extracts the scaling/rotation components and performs an inverse/transpose operation to generate a 3x3 normal transform matrix.
// export function m4_toNormal3(m) {
//     const a00 = m[0], a01 = m[1], a02 = m[2];
//     const a10 = m[4], a11 = m[5], a12 = m[6];
//     const a20 = m[8], a21 = m[9], a22 = m[10];

//     const b00 = a11 * a22 - a21 * a12;
//     const b10 = a01 * a22 - a21 * a02;
//     const b20 = a01 * a12 - a11 * a02;

//     const b01 = a10 * a22 - a20 * a12;
//     const b11 = a00 * a22 - a20 * a02;
//     const b21 = a00 * a12 - a10 * a02;

//     const b02 = a10 * a21 - a20 * a11;
//     const b12 = a00 * a21 - a20 * a01;
//     const b22 = a00 * a11 - a10 * a01;

//     // // Calculate the determinant
//     const d = a00 * b00 + a01 * -b01 + a02 * b02;

//     return [
//         b00/d, -b01/d, b02/d,
//         -b10/d, b11/d, -b12/d,
//         b20/d, -b21/d, b22/d
//     ];
// }

// generate ground plane matrix - no rotation out of the x/z plane
// export function m4_grounded(m) {
//     const g = [0,1,0] // the up vector
//     var x = [m[0], m[1], m[2]];
//     var z = v3_cross(x, g);
//     z[1] = 0;
//     z = v3_normalize(z);
//     x = v3_cross(g, z);
//     x[1] = 0;
//     x = v3_normalize(x)
//     return [x[0], x[1], x[2], 0,
//             0, 1, 0, 0,
//             z[0], z[1], z[2],0,
//             0, 0, 0, 1];

// }

// // this is faster if we can assume that x and z projections in y-plane are perpendicular
// export function m4_fastGrounded(m) {
//     var x = v3_normalize([m[0], 0, m[2]]);
//     var z = v3_normalize([m[8], 0, m[10]]);
//     return [x[0], x[1], x[2], 0,
//             0, 1, 0, 0,
//             z[0], z[1], z[2], 0,
//             0, 0, 0, 1];
// }
//--------------------------------------------------------------------------------
//-- Quaternions -----------------------------------------------------------------
//--------------------------------------------------------------------------------

function q_identity() {
    return [0,0,0,1];
}

function q_magnitude(q) {
    return Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
}

function q_normalize(q) {
    const m = 1/q_magnitude(q);
    return [q[0]*m, q[1]*m, q[2]*m, q[3]*m];
}

// If the quaternion is normalized, this is also its inverse.
function q_conjugate(q) {
    return [-q[0], -q[1], -q[2], q[3]];
}

function q_invert(q) { return q_conjugate(q) }

// Clockwise in radians looking along axis.
// Axis should be normalized
function q_axisAngle(axis, angle) {
    const half = angle * 0.5;
    const sinH = Math.sin(half);
    const cosH = Math.cos(half);
    return [sinH * axis[0], sinH * axis[1], sinH * axis[2], cosH];
}

// Given a forward vector and an up vector, generates the quaternion that will rotate
// the forward vector to look at the target.
function q_lookAt(f, u, t) {
    const epsilon = 0.00001;
    const dot = v3_dot(f,t);
    if (Math.abs(dot+1) < epsilon) return q_axisAngle(u, Math.PI)
    if (Math.abs(dot-1) < epsilon) return q_identity();
    const angle = Math.acos(dot);
    const axis = v3_normalize(v3_cross(f,t));
    return q_axisAngle(axis, angle);
}

// Creates a quaternion from the given Euler angles.
function q_euler(x, y ,z) {
    x *= 0.5
    y *= 0.5
    z *= 0.5
    const sinX = Math.sin(x);
    const cosX = Math.cos(x);
    const sinY = Math.sin(y);
    const cosY = Math.cos(y);
    const sinZ = Math.sin(z);
    const cosZ = Math.cos(z);

    return [
        sinX * cosY * cosZ - cosX * sinY * sinZ,
        cosX * sinY * cosZ + sinX * cosY * sinZ,
        cosX * cosY * sinZ - sinX * sinY * cosZ,
        cosX * cosY * cosZ + sinX * sinY * sinZ
    ];

}

// Returns the equivalent Euler angle around the x axis
function q_pitch(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    return Math.atan2(2*x*w - 2*y*z, 1 - 2*x*x - 2*z*z);
}

// Returns the equivalent Euler angle around the y axis
function q_yaw(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    return Math.atan2(2*y*w - 2*x*z, 1 - 2*y*y - 2*z*z);
}

// Returns the equivalent Euler angle around the z axis
function q_roll(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    return Math.asin(2*x*y + 2*z*w);
}

// export function q_scale(q,s) {
//     return [q[0] * s, q[1] * s, q[2] * s, q[3] * s, q[4] * s];
// }

// export function q_add(a,b) {
//     return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
// }

function q_dot(a,b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]  + a[3] * b[3];
}

// A is applied before b
function q_multiply(a, b) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const bx = b[0], by = b[1], bz = b[2], bw = b[3];
    return [
        bx * aw + by * az - bz * ay + bw * ax,
        by * aw - bx * az + bw * ay + bz * ax,
        bz * aw + bw * az + bx * ay - by * ax,
        bw * aw - bz * az - by * ay - bx * ax
    ];
}

function q_slerp(a,b,t) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];

    let omega, cosom, sinom, scale0, scale1;

    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }

    if ( (1.0 - cosom) > 0.00001 ) {
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        scale0 = 1.0 - t;
        scale1 = t;
    }

    const c0 = scale0 * ax + scale1 * bx;
    const c1 = scale0 * ay + scale1 * by;
    const c2 = scale0 * az + scale1 * bz;
    const c3 = scale0 * aw + scale1 * bw;

    return [c0,c1,c2,c3];
}

function q_equals(a,b,e = 0) { // e is an epsilon
    if (e) return Math.abs(q_dot(a,b)) + e >= 1;
    return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]);
}

function q_isZero(q) {
    return q[0] === 0 && q[1] === 0 && q[2] === 0;
}




//--------------------------------------------------------------------------------
//-- Dual Quaternions ------------------------------------------------------------
//--------------------------------------------------------------------------------

// export function q2_identity() {
//     return [0,0,0,1,0,0,0,0];
// }

// export function q2_magnitude(q) {
//     return Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
// }

// export function q2_rotation(q) {
//     return [...q,0,0,0,0];
// }

// export function q2_translation(t) {
//     return [0,0,0,1,...v3_scale(t,0.5),0];
// }

// export function q2_axisAngle(axis, angle) {
//     return q2_rotation(q_axisAngle(axis,angle));
// }

// export function q2_rotationTranslation(q,t) {
//     const ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5;
//     const bx = q[0], by = q[1], bz = q[2], bw = q[3];
//     return [bx,by,bz,bw, ax*bw+ay*bz-az*by, ay*bw+az*bx-ax*bz, az*bw+ax*by-ay*bx, -ax*bx-ay*by-az*bz];
// }

// export function q2_axisAngleTranslation(axis, angle, t) {
//     return q2_rotationTranslation(q_axisAngle(axis,angle), t);
// }

// export function q2_normalize(q2) {
//     const m = 1/q2_magnitude(q2);
//     const a0 = q2[0] * m, a1 = q2[1] * m, a2 = q2[2] * m, a3 = q2[3] * m;
//     const b0 = q2[4],  b1 = q2[5], b2 = q2[6], b3 = q2[7];
//     const dot = (a0 * b0) + (a1 * b1) + (a2 * b2) + (a3 * b3);
//     return [a0, a1, a2, a3, (b0-(a0*dot))*m, (b1-(a1*dot))*m, (b2-(a2*dot))*m, (b3-(a3*dot))*m];

// }


// export function q2_multiply(a, b) {
//     const ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3];
//     const ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7];
//     const bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
//     const bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7];
//     return [
//         bx0 * aw0 + bw0 * ax0 + by0 * az0 - bz0 * ay0,
//         by0 * aw0 + bw0 * ay0 + bz0 * ax0 - bx0 * az0,
//         bz0 * aw0 + bw0 * az0 + bx0 * ay0 - by0 * ax0,
//         bw0 * aw0 - bx0 * ax0 - by0 * ay0 - bz0 * az0,

//         bx0 * aw1 + bw0 * ax1 + by0 * az1 - bz0 * ay1 + bx1 * aw0 + bw1 * ax0 + by1 * az0 - bz1 * ay0,
//         by0 * aw1 + bw0 * ay1 + bz0 * ax1 - bx0 * az1 + by1 * aw0 + bw1 * ay0 + bz1 * ax0 - bx1 * az0,
//         bz0 * aw1 + bw0 * az1 + bx0 * ay1 - by0 * ax1 + bz1 * aw0 + bw1 * az0 + bx1 * ay0 - by1 * ax0,
//         bw0 * aw1 - bx0 * ax1 - by0 * ay1 - bz0 * az1 + bw1 * aw0 - bx1 * ax0 - by1 * ay0 - bz1 * az0
//     ];
//   }


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/ViewAssetCache.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/ViewAssetCache.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsLoaded": () => (/* binding */ IsLoaded),
/* harmony export */   "LoadFont": () => (/* binding */ LoadFont),
/* harmony export */   "LoadImage": () => (/* binding */ LoadImage)
/* harmony export */ });
//----------------------------------------------------------------------------------------------------
// View Asset Cache
//
// Stores view assets that are loaded by URL. When you load an asset you can supply a callback that will be
// triggered when it finishes loading. (If the asset is already loaded, the callback is ignored.)
//----------------------------------------------------------------------------------------------------

const assetCache = new Map();
let assetID = 0;

function IsLoaded(url) {
    const entry = assetCache.get(url);
    return (entry && entry.isLoaded);
}

function LoadFont(url, onLoad) {
    let entry;
    if (assetCache.has(url)) {
        entry = assetCache.get(url);
    } else {
        const name = "font" + assetID++;
        entry = {
            name,
            element: new FontFace(name, "url(" + url + ")"),
            isLoaded: false,
            callbacks: []
        };
        assetCache.set(url, entry);
        entry.element.load().then(
            () => {
                document.fonts.add(entry.element);
                entry.isLoaded = true;
                entry.callbacks.forEach(callback => callback());
                entry.callbacks = [];
            },
            () => console.log("Font " + url + " not found!")
        );
    }
    if (onLoad && !entry.isLoaded) entry.callbacks.push(onLoad);
    return entry.name;
}

function LoadImage(url, onLoad) {
    let entry;
    if (assetCache.has(url)) {
        entry = assetCache.get(url);
        if (onLoad && !entry.isLoaded) {
            entry.callbacks.push(onLoad);
            return null;
        }
        return entry.element;
    }

    entry = {
        element: new Image(),
        isLoaded: false,
        callbacks: []
    };
    assetCache.set(url, entry);

    entry.element.onload = () => {
        entry.isLoaded = true;
        entry.callbacks.forEach(callback => callback(entry.element));
        entry.callbacks = [];
    };

    entry.element.onerror = () => console.log("Image " + url + " not found!");
    entry.element.src = url;

    if (onLoad && !entry.isLoaded) entry.callbacks.push(onLoad);
    return null;
}



/***/ })

}]);