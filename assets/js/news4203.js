!function(){"use strict";var e,t={304:function(e,t,n){n.r(t);var r=new(n(305).default);r.init(document),r.activate()},305:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});n(41),n(70),n(306),n(2),n(108),n(79),n(115),n(116),n(122),n(215),n(218),n(219),n(216),n(220),n(224),n(225);var r=n(1),o=n(126),i=n(229),a=(n(124),n(206)),l=n.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,w(e,t,"set"),n),n}function v(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,w(e,t,"get"))}function w(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var g=new WeakMap,m=new WeakMap,O=new WeakMap,k=new WeakMap,j=new WeakMap,E=new WeakMap,P=new WeakMap,_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,a=f(u);function u(){var e,t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),t=a.call(this),g.set(y(t),{writable:!0,value:new o.default}),m.set(y(t),{writable:!0,value:new i.default}),O.set(y(t),{writable:!0,value:null}),k.set(y(t),{writable:!0,value:null}),j.set(y(t),{writable:!0,value:null}),E.set(y(t),{writable:!0,value:function(){v(y(t),m).beforeOpen().subscribe((function(n){n.preventDefault(),n.stopPropagation(),null!=v(y(t),O)&&(v(y(t),O).destroy(),b(y(t),O,null));var r,o,i=(r=n.target,null!=(o=r.getAttribute("data-youtube-url"))&&""!==o?o:r.getAttribute("href")).replace("https://www.youtube.com/embed/","").replace("https://youtu.be/","");h((e=y(t),d(u.prototype)),"readyYoutubeApi",e).call(e,(function(){b(y(t),O,new YT.Player(document.querySelector("#youtube-modal-player"),{width:"960",height:"540",videoId:i,events:{onReady:function(e){e.target.playVideo()}},playerVars:{playsinline:0,fullscreen:!0,rel:0,enablejsapi:1}}))}))})),v(y(t),m).afterOpen().subscribe((function(){}))}}),P.set(y(t),{writable:!0,value:function(){v(y(t),m).beforeClose().subscribe((function(){null!=v(y(t),O)&&v(y(t),O).pauseVideo()})),v(y(t),m).afterClose().subscribe((function(){null!=v(y(t),O)&&(v(y(t),O).destroy(),b(y(t),O,null))}))}}),t.limit=12,t}return t=u,(n=[{key:"init",value:function(e){var t=this;h(d(u.prototype),"init",this).call(this,e);var n=[],r=[],o=[],i=[],a=[],c=e.querySelectorAll(".news-card"),s=Array.prototype.slice.call(c);s.forEach((function(e){n.push(e),e.getElementsByClassName("news-category-context").forEach((function(t){switch(t.classList[1]){case"is-news":r.push(e);break;case"is-game":o.push(e);break;case"is-movie":i.push(e);break;case"is-campaign":a.push(e)}}))}));var f=e.getElementById("news-top-card-lists"),p=e.getElementById("newsMore");l()(".news-top-category-context").on("click",(function(e){e.preventDefault(),p.style.display="flex",f.textContent="",l()(this).hasClass("sort-all")?b(n):l()(this).hasClass("sort-news")?b(r):l()(this).hasClass("sort-game")?b(o):l()(this).hasClass("sort-movie")?b(i):l()(this).hasClass("sort-campaign")&&b(a)})),p.addEventListener("click",(function(e){e.preventDefault(),p.style.display="none",s.forEach((function(e){e.style.display="block"}))}));var y=function(e){if(e.length>t.limit)for(var n=t.limit;n<e.length;n++)e[n].style.display="none";else p.style.display="none"},b=function(e){e.forEach((function(e){e.style.display="block",f.append(e)})),y(e)};y(c),v(this,m).init(".js-modal-movie","#youtube-modal")}},{key:"activate",value:function(){h(d(u.prototype),"activate",this).call(this),v(this,m).activate(),v(this,E).call(this),v(this,P).call(this)}},{key:"deactivate",value:function(){h(d(u.prototype),"deactivate",this).call(this),v(this,m).deactivate(),null!=v(this,O)&&v(this,O).destroy(),v(this,j).unsubscribe(),b(this,O,null),b(this,k,null),b(this,j,null)}}])&&c(t.prototype,n),r&&c(t,r),u}(r.default)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(l=!1,i<a&&(a=i));l&&(e.splice(c--,1),t=o())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={4:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],u=n[2],c=0;for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var s=u(r);for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return r.O(s)},n=self.webpackChunklegends_arceus=self.webpackChunklegends_arceus||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[1],(function(){return r(304)}));o=r.O(o)}();