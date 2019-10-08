window.Music=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Analyze=t.Lyric=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=l(r(2)),o=l(r(11)),a=l(r(12)),s=l(r(14));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=void 0,f=15,p=i.default.util,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=p.deepCopy({controls:!0,mediaType:"audio",ignores:["fullscreen","start","definition","makeBullet","textTrack","loading","pc","mobile","playbackRate","replay","error","poster"]},e);r.volumeShow||r.ignores.push("volume");var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r)),i=n;return n.rawConfig=e,n.list="Array"===p.typeOf(r.url)?r.url:[{src:r.url,name:r.name,vid:r.vid,poster:r.poster}],n.name=n.list[0].name,n.vid=n.list[0].vid,n.poster=n.list[0].poster,n.nextIndex=1,n.prevIndex=n.list.length-1,n.halfPass=!1,n.history=[],n.index=0,r.controls?(p.addClass(n.root,"xgplayer-music"),r.width||(n.config.width="100%",n.root.style.width="100%"),r.height||(n.config.height="50px",n.root.style.height="50px"),Object.defineProperty(n,"src",{get:function(){return this.video.currentSrc},set:function(e){var t="String"===p.typeOf(e)?{src:e,name:""}:e;this.history.push(t),this.video.src=t.src},configurable:!0}),n.config.autoplayMuted&&(n.config.volume=n.config.autoplay?0:n.config.volume),i.once("ready",function(){p.addClass(i.root,"xgplayer-skin-default"),i.config.lang&&"en"===i.config.lang?p.addClass(i.root,"lang-is-en"):"jp"===i.config.lang&&p.addClass(i.root,"lang-is-jp")}),n.once("canplay",function(){this.config.autoplay&&this.config.autoplayMuted?this.volume=0:this.volume=this.config.volume}),n.on("timeupdate",function(){!n.halfPass&&n.currentTime>n.duration/2&&n.confirmOrder()}),n.on("ended",function(){if("order"===n.mode&&n.index+1>=n.list.length)return n.pause(),void(n.currentTime=0);switch(n.mode){case"sloop":n.change();break;case"order":case"loop":default:n.next()}}),n.config.segPlay||n.checkOffline(i.list[0].src,i.list[0].vid||i.list[0].name).then(function(e){i.config.url=e,i.start(e)}),n):(n.root.style.display="none",c(n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),n(t,[{key:"lyric",value:function(e,t){return this.__lyric__&&this.__lyric__.unbind(this),"Array"!==i.default.util.typeOf(e)&&(e=[].concat(e)),this.__lyric__=new o.default(e,t),this.__lyric__.bind(this),this.__lyric__}},{key:"confirmOrder",value:function(){var e=this;this.halfPass=!0,this.nextComput(),this.prevComput(),this.config.preloadNext&&this.checkOffline(this.list[this.nextIndex].src,this.list[this.nextIndex].vid||this.list[this.nextIndex].name).then(function(t){if(t.indexOf("blob:")<0){var r=e.list[e.nextIndex].vid||e.list[e.nextIndex].name;new s.default(e.list[e.nextIndex].src,function(t){e.database.openDB(function(){e.database.addData(e.database.myDB.ojstore.name,[{vid:r,blob:new Blob([t],{type:'audio/mp4; codecs="mp4a.40.5"'})}]),setTimeout(function(){e.database.closeDB()},5e3)})})}})}},{key:"nextComput",value:function(){switch(this.mode){case"sloop":case"order":case"loop":this.index+1<this.list.length?this.nextIndex=this.index+1:this.nextIndex=0;break;default:this.nextIndex=Math.ceil(Math.random()*this.list.length)}}},{key:"prevComput",value:function(){switch(this.mode){case"sloop":case"order":case"loop":this.index-1>=0?this.prevIndev=this.index-1:this.prevIndev=this.list.length-1;break;default:this.prevIndev=Math.ceil(Math.random()*this.list.length)}}},{key:"add",value:function(e){this.list.push({src:e.src,name:e.name,vid:e.vid,poster:e.poster})}},{key:"remove",value:function(e){var t=-1;this.list.every(function(r,n){return r.src!==e&&r.name!==e&&r.vid!==e||(t=n,!1)}),t>-1&&this.list.splice(t,1)}},{key:"change",value:function(){var e=this,t=e.list[e.index].vid||e.list[e.index].name;this.halfPass=!1,this.checkOffline(e.list[e.index].src,t).then(function(t){i.default.m4a?(e.video.load(),e.name=e.list[e.index].name,e.vid=e.list[e.index].vid,e.poster=e.list[e.index].poster,e.emit("change",{src:t,name:e.name,vid:e.vid,poster:e.poster})):(e.video.pause(),e.currentTime=0,e.src=t,e.name=e.list[e.index].name,e.vid=e.list[e.index].vid,e.poster=e.list[e.index].poster,setTimeout(function(){e.video.play().then(function(){e.emit("change",{src:t,name:e.name,vid:e.vid,poster:e.poster})})},60))})}},{key:"checkOffline",value:function(e,t){var r=this;return new Promise(function(n){r.config.offline||n(e),r.database.openDB(function(){r.database.getDataByKey(r.database.myDB.ojstore.name,t,function(t){setTimeout(function(){r.database.closeDB()},5e3),n(t?URL.createObjectURL(t.blob):e)})})})}},{key:"next",value:function(){this.halfPass||(this.halfPass=!0,this.nextComput()),this.index=this.nextIndex,this.change()}},{key:"prev",value:function(){this.halfPass||(this.halfPass=!0,this.prevComput()),this.index=this.prevIndex,this.change()}},{key:"forward",value:function(){this.currentTime=this.currentTime+f<this.duration?this.currentTime+f:this.duration-.1}},{key:"backward",value:function(){this.currentTime=this.currentTime-f>0?this.currentTime-f:0}},{key:"analyze",value:function(e){return new a.default(this,e)}},{key:"mode",get:function(){return u||t.ModeType[2]},set:function(e){switch(e){case 0:case 1:case 2:case 3:u=t.ModeType[e]}this.confirmOrder()}},{key:"timeScale",get:function(){return f||15},set:function(e){f=e}}],[{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}},{key:"ModeType",get:function(){return["order","random","loop","sloop"]}}]),t}();t.default=d,t.Lyric=o.default,t.Analyze=a.default},function(e,t,r){"use strict";var n=r(27)();e.exports=function(e){return e!==n&&null!==e}},function(e,t){e.exports=window.Player},function(e,t,r){"use strict";e.exports=function(e){return null!=e}},function(e,t,r){e.exports=r(5)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(6);var n=c(r(0)),i=c(r(34)),o=c(r(35)),a=c(r(36)),s=c(r(37)),l=c(r(38));function c(e){return e&&e.__esModule?e:{default:e}}var u={};function f(e,t,r){var n=e;t.map(function(e,i){n[e]=i==t.length-1?r:n[e]||{},n=n[e]})}f(u,["controls","backward"],c(r(39)).default),f(u,["controls","cover"],l.default),f(u,["controls","forward"],s.default),f(u,["controls","meta"],a.default),f(u,["controls","next"],o.default),f(u,["controls","prev"],i.default),t.default=n.default,e.exports=t.default},function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(9)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(8)(!1)).push([e.i,'.xgplayer-skin-default.xgplayer-music .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;cursor:default}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-backward,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-backward-img{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;cursor:pointer}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-backward-img:hover,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-backward:hover{opacity:.85}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-prev,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-prev-img{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;cursor:pointer}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-prev-img:hover,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-prev:hover{opacity:.85}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-play,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-play-img{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-play-img .xgplayer-tips,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-play .xgplayer-tips{display:none}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-next,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-next-img{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;cursor:pointer}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-next-img:hover,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-next:hover{opacity:.85}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-forward,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-forward-img{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;cursor:pointer}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-forward-img:hover,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-forward:hover{opacity:.85}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-volume{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;cursor:pointer}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-volume .xgplayer-icon{bottom:-13px}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-cover{position:static;-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;width:40px;height:40px;text-align:center;vertical-align:middle;position:relative;top:50%;margin-top:-17px}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-cover img{max-width:100%;max-height:100%}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress{position:relative;-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7;top:70%;left:20px;margin-top:-11px;-webkit-box-flex:99;-ms-flex:99;flex:99}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-name{position:absolute;left:0;top:-120%;font-size:12px;color:#ddd}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress>*{height:3px;margin-top:8.5px}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-progress-played:after{top:-4px;width:10px;height:10px;content:" ";display:block}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-tips{display:none!important}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-progress:hover .xgplayer-progress-btn{top:-5px}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-time{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8;margin-left:30px;line-height:1;position:relative;top:55%}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-placeholder{-webkit-box-ordinal-group:1000;-ms-flex-order:999;order:999;width:0}.xgplayer-skin-default.xgplayer-music .xgplayer-controls .xgplayer-icon{padding-top:5px}.xgplayer-skin-default.xgplayer-music.xgplayer-ended .xgplayer-controls,.xgplayer-skin-default.xgplayer-music.xgplayer-nostart .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.xgplayer-skin-default .xgplayer-lyric-item{display:block;line-height:22px;font-size:14px;color:#000}.xgplayer-skin-default .xgplayer-lyric-item.xgplayer-lyric-item-active{color:#7fffd4}.xgplayer-skin-default .xgplayer-lrcWrap{overflow:auto;height:300px;border:1px solid #ddd;padding:20px}.xgplayer-skin-default .xgplayer-lrcForward{position:absolute;top:20%;left:300px;cursor:pointer;width:0;height:0;border-width:0 10px 10px;border-style:solid;border-color:transparent transparent #333}.xgplayer-skin-default .xgplayer-lrcBack{position:absolute;top:80%;left:300px;cursor:pointer;width:0;height:0;border-width:10px 10px 0;border-style:solid;border-color:#333 transparent transparent}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n,i,o={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],f=r(10);function p(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(m(n.parts[a],t));o[n.id]={id:n.id,refs:1,parts:s}}}}function d(e,t){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function y(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),x(t,e.attrs),y(e,t),t}function x(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function m(e,t){var r,n,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=c++;r=l||(l=g(t)),n=b.bind(null,r,a,!1),i=b.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",x(t,e.attrs),y(e,t),t}(t),n=function(e,t,r){var n=r.css,i=r.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(n=f(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),i=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){h(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=d(e,t);return p(r,t),function(e){for(var n=[],i=0;i<r.length;i++){var a=r[i];(s=o[a.id]).refs--,n.push(s)}e&&p(d(e,t),t);for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var v,_=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function b(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LyricTime=void 0;var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(2),a=(n=o)&&n.__esModule?n:{default:n};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function e(t){s(this,e),this.regRule=/(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g,this.regRule.test(t)?this.time=60*RegExp.$1+1*RegExp.$2+1*("0."+RegExp.$3):this.time=-1};t.LyricTime=l;var c=function(){function e(t,r){var n=this;s(this,e),this.rawTxts=t,this.txts=t.map(function(e){return e.replace(/^[\r\n]|[\r\n]$/g,"").match(/(\[.*\])[^[]+/g)}),this.isDynamics=t.map(function(e,t){return[].concat(e.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length===n.txts[t].length&&n.txts[t].length===n.txts[0].length&&n.txts[t].length>1}),this.isDynamic=this.isDynamics.some(function(e){return e}),this.__ainimateInterval__=0,this.__offset__=0,this.__offsetScale__=.5,this.dom=r,this.lists=[],this.isDynamics.map(function(e,t){e&&n.lists.push(n.txts[t].map(function(e,t){var r=/(\[[\d:\S]+\])([^[]+)/g.test(e),n=RegExp.$1,i=RegExp.$2;return{time:r?new l(n).time:-1,lyric:i,idx:t}}))}),this.list=this.lists.reduce(function(e,t){return e.map(function(e,r){return{time:e.time,lyric:"\n"===e.lyric?""+e.lyric+t[r].lyric:e.lyric+"<br/>"+t[r].lyric,idx:r}})}),this.line=0}return i(e,[{key:"adjust",value:function(){for(var e,t,r=this.list,n=0,i=r.length;n<i;n++){for(e=n+1;e<i&&!(r[e].time>r[n].time);e++);if(e<i){var o=(r[e].time-r[n].time)/(e-n);for(t=n+1;t<e;t++)r[t].time=r[t-1].time+o}}}},{key:"find",value:function(e){var t=this.list,r=this.__ainimateInterval__,n=this.__offset__;return e=e+n>0?e+n:0,t.filter(function(n,i){var o=n.time,a=i+1;return e>=o&&t[a]&&1*e+1*r<=t[a].time})}},{key:"bind",value:function(e){var t=this,r=this;return this.__player__=e,!!r.isDynamic&&(r.__handle__=function(){var r=t.find(e.currentTime)[0];r&&r.idx!==t.line&&(t.line=r.idx,e.emit("lyricUpdate",r))}.bind(r,e),e.on("timeupdate",r.__handle__),r.__startHandle__=function(){e.emit("lyricUpdate",r.list[0])}.bind(r,e),e.once("canplay",r.__startHandle__),r.__endHandle__=function(){e.emit("lyricUpdate",r.list[r.list.length-1])}.bind(r,e),e.on("ended",r.__endHandle__),!0)}},{key:"unbind",value:function(e){delete this.__player__,this.__handle__&&(e.off("lyricUpdate",this.__handle__),delete this.__handle__)}},{key:"show",value:function(){var e=this,t=this.dom,r=[],n=this,i=["click","touchstart"];if(t&&1===t.nodeType){var o=a.default.util.createDom("div","<div></div>",{},"xgplayer-lrcWrap");t.appendChild(o),this.list.forEach(function(e){r.push('<xg-lyric-item class="xgplayer-lyric-item" data-idx="'+e.idx+'">'+e.lyric.replace(/[\r\n]/g,"")+"</xg-lyric-item>")}),o.innerHTML=r.join("");var s=a.default.util.createDom("xg-lrcForward","<div></div>",{},"xgplayer-lrcForward");t.appendChild(s),i.forEach(function(e){s.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation(),n.offset-=n.offsetScale,console.log("lyric go forward "+n.offsetScale+"s")},!1)});var l=a.default.util.createDom("xg-lrcBack","<div></div>",{},"xgplayer-lrcBack");t.appendChild(l),i.forEach(function(e){l.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation(),n.offset+=n.offsetScale,console.log("lyric go back "+n.offsetScale+"s")},!1)}),this.__updateHandle__=function(t){var r=e.dom.querySelector(".xgplayer-lrcWrap"),n=r.querySelector(".xgplayer-lyric-item-active"),i=r.offsetHeight,o=void 0;n&&(n.className="xgplayer-lyric-item"),(n=r.querySelector('.xgplayer-lyric-item[data-idx="'+t.idx+'"]'))&&(n.className="xgplayer-lyric-item xgplayer-lyric-item-active",(o=n.getBoundingClientRect().top-r.getBoundingClientRect().top+r.scrollTop-i/2)&&(r.scrollTop=o))},this.__player__.on("lyricUpdate",this.__updateHandle__)}else this.__player__.emit("error","lyric container can not be empty")}},{key:"hide",value:function(){this.__updateHandle__.off("lyricUpdate",this.__updateHandle__)}},{key:"interval",set:function(e){this.__ainimateInterval__=e},get:function(){return this.__ainimateInterval__}},{key:"offset",set:function(e){this.__offset__=e},get:function(){return this.__offset__}},{key:"offsetScale",set:function(e){this.__offsetScale__=e},get:function(){return this.__offsetScale__}}]),e}();t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(13);var o=function(){function e(t,r){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=r,this.player=t,e.AudioCtx){var o=new e.AudioCtx,a=o.createAnalyser(),s=o.createGain();a.minDecibels=-90,a.maxDecibels=-10,a.smoothingTimeConstant=.85,s.gain.setValueAtTime(t.volume,t.currentTime),this.er=o.createMediaElementSource(t.video),this.analyser=a,this.ctx=r.getContext("2d"),this.er.connect(a),a.connect(s),s.connect(o.destination),this.style={bgColor:"#c8c8c8",color:"#643232"},this.__type__="bars",this.__size__=256,this.__status__={switch:"on"},["play","playing","seeked"].forEach(function(e){t.on(e,function(){n["__"+n.__type__+"__"]()})}),["seeking","waiting","pause","ended"].forEach(function(e){(0,i.cancelAnimationFrame)(n.__status__[n.__type__])}),t.on("volumechange",function(){s.gain.setValueAtTime(t.volume,t.currentTime)}),t.on("destroy",function(){o.close()})}}return n(e,[{key:"__wave__",value:function(){var e=this;if((0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars),"off"!==this.__status__.switch){var t=this.analyser,r=this.canvas,n=this.ctx,o=t.frequencyBinCount,a=new Uint8Array(o),s=r.width,l=r.height,c=new i.Color(this.style.color).toRGB(),u=new i.Color(this.style.color).toRGB();t.fftSize=this.__size__;!function f(){e.__status__.wave=(0,i.requestAnimationFrame)(f),t.getByteTimeDomainData(a),n.clearRect(0,0,s,l),n.fillStyle=u,n.lineWidth=2,n.strokeStyle=c,n.beginPath();for(var p=1*s/o,d=0,y=0;y<o;y++){var h=a[y]/128*l/2;0===y?n.moveTo(d,h):n.lineTo(d,h),d+=p}n.lineTo(r.width,r.height/2),n.stroke()}()}}},{key:"__bars__",value:function(){var e=this;if((0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars),"off"!==this.__status__.switch){var t=this.analyser,r=this.canvas,n=this.ctx,o=t.frequencyBinCount,a=new Uint8Array(o),s=r.width,l=r.height,c=new i.Color(this.style.color).toArray(),u=new i.Color(this.style.color).toRGB();t.fftSize=this.__size__;!function r(){e.__status__.bars=(0,i.requestAnimationFrame)(r),t.getByteFrequencyData(a),n.clearRect(0,0,s,l),n.fillStyle=u,n.fillRect(0,0,s,l);for(var f=s/o*2.5,p=void 0,d=0,y=0;y<o;y++)p=a[y],n.fillStyle="rgb("+(p+c[0])+","+c[1]+","+c[2]+")",n.fillRect(d,l-p/2,f,p/2),d+=f+1}()}}},{key:"on",value:function(){this.__status__.switch="on",this["__"+this.__type__+"__"]()}},{key:"off",value:function(){this.__status__.switch="off",(0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars)}},{key:"mode",set:function(t){e.Mode.filter(function(e){return e===t}).length&&(this.__type__=t,"on"===this.__status__.switch&&this["__"+t+"__"]())},get:function(){return this.__type__}},{key:"size",set:function(e){e<65536&&(0,i.isSqrt)(e,2)&&(this.__size__=e,this.analyser.fftSize=e,this["__"+this.__type__+"__"]())},get:function(){return this.__size__}},{key:"status",get:function(){return this.__status__.switch}}],[{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}},{key:"Mode",get:function(){return["wave","bars"]}}]),e}();t.default=o,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();for(var i,o=0,a="webkit moz ms o".split(" "),s=window.requestAnimationFrame,l=window.cancelAnimationFrame,c=0;c<a.length&&(!s||!l);c++)i=a[c],s=s||window[i+"RequestAnimationFrame"],l=l||window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"];s&&l||(s=function(e,t){var r=(new Date).getTime(),n=Math.max(0,16-(r-o)),i=window.setTimeout(function(){e.call(r+n)},n);return o=r+n,i},l=function(e){window.clearTimeout(e)});var u=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.color=e.Valid.test(t)?t:"#ffffff",this.opacity=r}return n(e,[{key:"toArray",value:function(){var e=this.color.slice(1),t=[];return 6===e.length&&(t=(e=e.match(/\d{2}/g)).map(function(e){return Number("0x"+e)})),t}},{key:"toRGB",value:function(){var e=this.toArray();return 3===e.length?"rgb("+e[0]+","+e[1]+","+e[2]+")":""}},{key:"toGRBA",value:function(){var e=this.toArray();return 3===e.length?"rgba("+e[0]+","+e[1]+","+e[2]+","+this.opacity+")":""}}],[{key:"Valid",get:function(){return/^#[0-9A-F]{6}$|^#[0-9A-F]{3}$/i}}]),e}();t.default={requestAnimationFrame:s,cancelAnimationFrame:l,isSqrt:function(e,t){if(1!==e){for(;1!==e;){if(e%t!=0)return!1;e/=t}return!0}return!0},Color:u},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(15),a=(n=o)&&n.__esModule?n:{default:n};var s=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,a.default)(this),this.url=t;var n=new window.XMLHttpRequest;n.target=this,n.responseType="arraybuffer",n.open("get",t),n.onload=function(){200!==n.status&&206!==n.status||r&&r instanceof Function&&r(n.response)},n.onerror=function(e){n.target.emit("error"+e.message)},this.xhr=n,this.run()}return i(e,[{key:"cancel",value:function(){this.xhr.abort()}},{key:"run",value:function(){1===this.xhr.readyState&&this.xhr.send()}}]),e}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";var n,i,o,a,s,l,c,u=r(16),f=r(33),p=Function.prototype.apply,d=Function.prototype.call,y=Object.create,h=Object.defineProperty,g=Object.defineProperties,x=Object.prototype.hasOwnProperty,m={configurable:!0,enumerable:!1,writable:!0};i=function(e,t){var r,i;return f(t),i=this,n.call(this,e,r=function(){o.call(i,e,r),p.call(t,this,arguments)}),r.__eeOnceListener__=t,this},s={on:n=function(e,t){var r;return f(t),x.call(this,"__ee__")?r=this.__ee__:(r=m.value=y(null),h(this,"__ee__",m),m.value=null),r[e]?"object"==typeof r[e]?r[e].push(t):r[e]=[r[e],t]:r[e]=t,this},once:i,off:o=function(e,t){var r,n,i,o;if(f(t),!x.call(this,"__ee__"))return this;if(!(r=this.__ee__)[e])return this;if("object"==typeof(n=r[e]))for(o=0;i=n[o];++o)i!==t&&i.__eeOnceListener__!==t||(2===n.length?r[e]=n[o?0:1]:n.splice(o,1));else n!==t&&n.__eeOnceListener__!==t||delete r[e];return this},emit:a=function(e){var t,r,n,i,o;if(x.call(this,"__ee__")&&(i=this.__ee__[e]))if("object"==typeof i){for(r=arguments.length,o=new Array(r-1),t=1;t<r;++t)o[t-1]=arguments[t];for(i=i.slice(),t=0;n=i[t];++t)p.call(n,this,o)}else switch(arguments.length){case 1:d.call(i,this);break;case 2:d.call(i,this,arguments[1]);break;case 3:d.call(i,this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),t=1;t<r;++t)o[t-1]=arguments[t];p.call(i,this,o)}}},l={on:u(n),once:u(i),off:u(o),emit:u(a)},c=g({},l),e.exports=t=function(e){return null==e?y(c):g(Object(e),l)},t.methods=s},function(e,t,r){"use strict";var n=r(3),i=r(17),o=r(21),a=r(29),s=r(30);(e.exports=function(e,t){var r,i,l,c,u;return arguments.length<2||"string"!=typeof e?(c=t,t=e,e=null):c=arguments[2],n(e)?(r=s.call(e,"c"),i=s.call(e,"e"),l=s.call(e,"w")):(r=l=!0,i=!1),u={value:t,configurable:r,enumerable:i,writable:l},c?o(a(c),u):u}).gs=function(e,t,r){var l,c,u,f;return"string"!=typeof e?(u=r,r=t,t=e,e=null):u=arguments[3],n(t)?i(t)?n(r)?i(r)||(u=r,r=void 0):r=void 0:(u=t,t=r=void 0):t=void 0,n(e)?(l=s.call(e,"c"),c=s.call(e,"e")):(l=!0,c=!1),f={get:t,set:r,configurable:l,enumerable:c},u?o(a(u),f):f}},function(e,t,r){"use strict";var n=r(18),i=/^\s*class[\s{\/}]/,o=Function.prototype.toString;e.exports=function(e){return!!n(e)&&!i.test(o.call(e))}},function(e,t,r){"use strict";var n=r(19);e.exports=function(e){if("function"!=typeof e)return!1;if(!hasOwnProperty.call(e,"length"))return!1;try{if("number"!=typeof e.length)return!1;if("function"!=typeof e.call)return!1;if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}},function(e,t,r){"use strict";var n=r(20);e.exports=function(e){if(!n(e))return!1;try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}},function(e,t,r){"use strict";var n=r(3),i={object:!0,function:!0,undefined:!0};e.exports=function(e){return!!n(e)&&hasOwnProperty.call(i,typeof e)}},function(e,t,r){"use strict";e.exports=r(22)()?Object.assign:r(23)},function(e,t,r){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,r){"use strict";var n=r(24),i=r(28),o=Math.max;e.exports=function(e,t){var r,a,s,l=o(arguments.length,2);for(e=Object(i(e)),s=function(n){try{e[n]=t[n]}catch(e){r||(r=e)}},a=1;a<l;++a)t=arguments[a],n(t).forEach(s);if(void 0!==r)throw r;return e}},function(e,t,r){"use strict";e.exports=r(25)()?Object.keys:r(26)},function(e,t,r){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t,r){"use strict";var n=r(1),i=Object.keys;e.exports=function(e){return i(n(e)?Object(e):e)}},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined");return e}},function(e,t,r){"use strict";var n=r(1),i=Array.prototype.forEach,o=Object.create,a=function(e,t){var r;for(r in e)t[r]=e[r]};e.exports=function(e){var t=o(null);return i.call(arguments,function(e){n(e)&&a(Object(e),t)}),t}},function(e,t,r){"use strict";e.exports=r(31)()?String.prototype.contains:r(32)},function(e,t,r){"use strict";var n="razdwatrzy";e.exports=function(){return"function"==typeof n.contains&&(!0===n.contains("dwa")&&!1===n.contains("foo"))}},function(e,t,r){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},function(e,t,r){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},function(e,t,r){"use strict";var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};o.default.install("prev",function(e){var t=o.default.util,r=e.controls,n=e.config.prevBtn?e.config.prevBtn:{},i=void 0;i="img"===n.type?o.default.util.createImgBtn("prev",n.url,n.width,n.height):t.createDom("xg-prev",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform = "scale(0.025 0.025)"\n              d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>\n          </svg></xg-icon>',{},"xgplayer-prev"),r.appendChild(i),["click","touchstart"].forEach(function(t){i.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.prev()},!1)})})},function(e,t,r){"use strict";var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};o.default.install("next",function(e){var t=o.default.util,r=e.controls,n=e.config.nextBtn?e.config.nextBtn:{},i=void 0;i="img"===n.type?o.default.util.createImgBtn("next",n.url,n.width,n.height):t.createDom("xg-next",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.025 0.025)"\n              d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n          </svg></xg-icon>',{},"xgplayer-next"),r.appendChild(i),["click","touchstart"].forEach(function(t){i.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.next()},!1)})})},function(e,t,r){"use strict";var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};o.default.install("meta",function(e){var t=o.default.util,r=e.controls.querySelector(".xgplayer-progress"),n=t.createDom("xg-name",""+(e.config.name||e.config.url[0].name),{},"xgplayer-name");r.appendChild(n),e.on("change",function(e){n.innerHTML=""+e.name})})},function(e,t,r){"use strict";var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};o.default.install("forward",function(e){var t=o.default.util,r=e.controls,n=e.config.forwardBtn?e.config.forwardBtn:{},i=void 0;i="img"===n.type?o.default.util.createImgBtn("forward",n.url,n.width,n.height):t.createDom("xg-forward",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform = "scale(1.5 1.5) translate(-2 4.5)"\n              d="m 2,2.99996 0,10 7,-5 -7,-5 z m 7,5 0,5 7,-5 -7,-5 0,5 z m 7,0 0,0 z"></path>\n          </svg></xg-icon>',{},"xgplayer-forward"),r.appendChild(i),["click","touchstart"].forEach(function(t){i.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.forward()},!1)})})},function(e,t,r){"use strict";var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};o.default.install("cover",function(e){var t=o.default.util,r=e.controls,n=t.createDom("xg-cover",'<img src="'+(e.config.poster||e.config.url[0].poster)+'">',{},"xgplayer-cover");r.appendChild(n),e.on("change",function(e){n.innerHTML='<img src="'+e.poster+'">'})})},function(e,t,r){"use strict";var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};o.default.install("backward",function(e){var t=o.default.util,r=e.controls,n=e.config.backwardBtn?e.config.backwardBtn:{},i=void 0;i="img"===n.type?o.default.util.createImgBtn("backward",n.url,n.width,n.height):t.createDom("xg-backward",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform = "scale(1.5 1.5) translate(8 4.5)"\n              d="m 14,2.99996 0,10 -7,-5 7,-5 z m -7,5 0,5 -7,-5 7,-5 0,5 z m -7,0 0,0 z"></path>\n          </svg></xg-icon>',{},"xgplayer-backward"),r.appendChild(i),["click","touchstart"].forEach(function(t){i.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.backward()},!1)})})}]);