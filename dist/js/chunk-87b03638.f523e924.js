(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87b03638"],{"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},3078:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.recipe.recipe_name))]),r("br"),r("img",{staticClass:"center",attrs:{src:t.recipe.img}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"mb-3"},[r("div",[t._v("This recipe will be ready in "+t._s(t.recipe.recipe_time))]),r("div",[t._v(" This recipe makes "+t._s(t.recipe.courses_num)+" servings")]),r("div",[t._v("👍 "+t._s(t.recipe.popularity)+" likes")]),r("div",{staticClass:"form-group",staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-evenly","align-items":"center"}},[t.recipe.gloten?r("label",{staticStyle:{"background-color":"rgb(151, 77, 34)"}},[t._v("Gluten Free")]):t._e(),t.recipe.vegan?r("label",{staticStyle:{"background-color":"rgb(154, 218, 95)"}},[t._v("Vegan")]):t._e(),t.recipe.vegetarian?r("label",{staticStyle:{"background-color":"rgb(21, 112, 25)"}},[t._v("Vegeterian")]):t._e()]),r("div",[t._v("This recipe is made by: "+t._s(t.recipe.maker))]),r("div",[t._v(" This recipe is made when: "+t._s(t.recipe.when_making))]),r("br"),r("div",[r("p",{staticStyle:{"text-decoration-line":"underline"}},[t._v("Ingredients:")]),r("ul",t._l(t.recipe._ingridiants,(function(e){return r("li",{key:e.index},[t._v(" "+t._s(e.ingridient)+" ")])})),0)])])]),r("div",{staticClass:"col",staticStyle:{"margin-right":"30%"}},[r("div",{staticClass:"wrapped"},[r("p",{staticStyle:{"text-decoration-line":"underline"}},[t._v("Instructions:")]),r("ol",t._l(t.recipe._instructions,(function(e){return r("li",{key:e.number},[t._v(" "+t._s(e.step)+" ")])})),0)])])])])])])]):t._e()])},i=[],o=r("53ca"),a=r("1da1");r("ac1f"),r("5319"),r("7a82"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("b8bf"),r("3410"),r("4160"),r("159b"),r("b0c0"),r("131a"),r("26e9"),r("fb6a");function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,r){return t[e]=r}}function f(t,e,r,i){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new j(i||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=f;var h={};function v(){}function d(){}function g(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(C([])));b&&b!==e&&r.call(b,a)&&(y=b);var _=g.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(n,a,c,u){var s=p(t[n],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==Object(o["a"])(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return O()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=p(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=g,n(_,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:d,configurable:!0}),d.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new x(f(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(_),l(_,s,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u={data:function(){return{recipe:null}},created:function(){var t=this;return Object(a["a"])(c().mark((function e(){var r,n,i,o,a,u,s,l,f,p,h,v,d,g,y,m,b,_,w,x,E;return c().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.prev=1,e.next=4,t.axios.get(t.$root.store.server_domain+"/users/returnMyFullFanilyRecipe/"+t.$route.params.recipeId,{withCredentials:!0});case 4:r=e.sent,200!==r.status&&t.$router.replace("/NotFound"),e.next=13;break;case 8:return e.prev=8,e.t0=e["catch"](1),console.log("error.response.status",e.t0.response.status),t.$router.replace("/NotFound"),e.abrupt("return");case 13:for(n=r.data,i=n.instructions,o=n.popularity,a=n.ingridiants,u=n.recipe_time,s=n.img,l=n.recipe_name,f=n.courses_num,p=n.vegan,h=n.vegetarian,v=n.gloten,d=n.maker,g=n.when_making,y=i.split(";"),m=[],b=0;b<y.length;b++)m.push({index:b,step:y[b]});for(_=a.split(";"),w=[],x=0;x<_.length;x++)w.push({index:x,ingridient:_[x]});E={_instructions:m,_ingridiants:w,popularity:o,recipe_time:u,img:s,recipe_name:l,courses_num:f,vegan:p,vegetarian:h,gloten:v,maker:d,when_making:g},t.recipe=E,e.next=27;break;case 24:e.prev=24,e.t1=e["catch"](0),console.log(e.t1);case 27:case"end":return e.stop()}}),e,null,[[0,24],[1,8]])})))()}},s=u,l=(r("39348"),r("2877")),f=Object(l["a"])(s,n,i,!1,null,"70f203b4",null);e["default"]=f.exports},39348:function(t,e,r){"use strict";var n=r("d4f9"),i=r.n(n);i.a},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),o=r("7b0b"),a=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,p=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var y=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,b=y?"$":"$0";return[function(r,n){var i=u(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!y&&m||"string"===typeof n&&-1===n.indexOf(b)){var o=r(e,t,this,n);if(o.done)return o.value}var u=i(t),h=String(this),v="function"===typeof n;v||(n=String(n));var d=u.global;if(d){var w=u.unicode;u.lastIndex=0}var x=[];while(1){var E=l(u,h);if(null===E)break;if(x.push(E),!d)break;var L=String(E[0]);""===L&&(u.lastIndex=s(h,a(u.lastIndex),w))}for(var S="",k=0,j=0;j<x.length;j++){E=x[j];for(var C=String(E[0]),O=f(p(c(E.index),h.length),0),T=[],$=1;$<E.length;$++)T.push(g(E[$]));var P=E.groups;if(v){var N=[C].concat(T,O,h);void 0!==P&&N.push(P);var R=String(n.apply(void 0,N))}else R=_(C,h,O,T,P,n);O>=k&&(S+=h.slice(k,O)+R,k=O+C.length)}return S+h.slice(k)}];function _(t,r,n,i,a,c){var u=n+t.length,s=i.length,l=d;return void 0!==a&&(a=o(a),l=v),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var f=h(l/10);return 0===f?e:f<=s?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},d4f9:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),o=r("b622"),a=r("9263"),c=r("9112"),u=o("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var v=o(t),d=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=d&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!d||!g||"replace"===t&&(!s||!l||p)||"split"===t&&!h){var y=/./[v],m=r(v,""[t],(function(t,e,r,n,i){return e.exec===a?d&&!i?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=m[0],_=m[1];n(String.prototype,t,b),n(RegExp.prototype,v,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-87b03638.f523e924.js.map