(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c517462"],{2413:function(t,e,r){},37906:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("br"),r("br"),r("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.onSearch(e)}}},[r("div",{staticClass:"input-group col-md-10"},[r("b-form-input",{attrs:{id:"search_text",placeholder:"Search...",required:""}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[r("b-icon",{attrs:{icon:"search","aria-hidden":"true"}})],1)])],1),r("div",[r("label",[t._v("optional: ")]),r("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"Cuisine",options:[{text:"Choose Cuisine",value:null},"African","Asian","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],value:null}}),r("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"Diet",options:[{text:"Choose Diet",value:null},"Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"],value:null}}),r("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"Intolerance",options:[{text:"Choose Intolerance",value:null},"Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],value:null}}),r("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"amount",options:[{text:"Search result amount",value:null},5,10,15],value:null}}),r("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"Search_by",options:[{text:"Search by",value:null},"Food Type","Title"],value:null}})],1),r("div")]),r("br"),r("div",{staticStyle:{"margin-left":"25%"}},[r("button",{staticStyle:{"margin-right":"3%"},attrs:{id:"popularity1"},on:{click:t.onFillterPop}},[t._v("filter by popularity")]),r("button",{attrs:{id:"time1"},on:{click:t.onFillterTime}},[t._v("filter by time")])]),r("br"),r("h3",{staticStyle:{"margin-left":"28%"},attrs:{id:"foind"}},[t._v(t._s(this.anooncment))]),r("b-col",[r("div",{staticClass:"a"},t._l(t.recipes,(function(t){return r("b-row",{key:t.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:t}})],1)})),1)])],1)},o=[],a=(r("7a82"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("b8bf"),r("3410"),r("4160"),r("159b"),r("b0c0"),r("131a"),r("26e9"),r("fb6a"),r("53ca")),i=r("2909"),s=r("1da1"),c=(r("4e82"),r("832a"));function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),s=new O(o||[]);return n(i,"_invoke",{value:S(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var p={};function v(){}function d(){}function m(){}var y={};l(y,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(j([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=m.prototype=v.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,s,c){var u=f(t[n],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==Object(a["a"])(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}var l={name:"Search",components:{RecipePreview:c["a"]},mounted:function(){this.$root.store.last_search_text&&(console.log("i'm here"),this.Search1())},data:function(){return{form:{Cuisine:null,Diet:null,Intolerance:null,amount:5,Search_by:"query",search_text:"",Fillter:"",submitError:void 0},anooncment:"",recipes:[]}},methods:{Search:function(t,e,r,n,o,a){var c=this;return Object(s["a"])(u().mark((function s(){var l,h,f;return u().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c.axios.get(c.$root.store.server_domain+"/recipes/search/"+o+"="+search_text.value+"&number="+n+"&cuisine="+t+"&diet="+e+"&intolerances="+r+"&sort="+a,{withCredentials:!0});case 3:h=s.sent,c.anooncment="",f=h.data,console.log(f),c.recipes=[],(l=c.recipes).push.apply(l,Object(i["a"])(f)),0==c.recipes.length?c.anooncment="No matching search result found":c.$root.store.set_lastSearch(search_text.value,n,t,e,r,a,o),s.next=16;break;case 12:s.prev=12,s.t0=s["catch"](0),console.log(s.t0.response),c.form.submitError=s.t0.response.data.message;case 16:case"end":return s.stop()}}),s,null,[[0,12]])})))()},onSearch:function(){var t="()",e="()",r="()",n=5,o="query";""!=Cuisine.value&&(t=Cuisine.value),""!=Diet.value&&(e=Diet.value),""!=Intolerance.value&&(r=Intolerance.value),""!=amount.value&&(n=amount.value),""!=Search_by.value&&"Title"==Search_by.value&&(o="titleMatch"),this.Search(t,e,r,n,o,"()")},onFillterPop:function(){this.recipes=this.recipes.sort((function(t,e){return e.popularity-t.popularity}))},onFillterTime:function(){this.recipes=this.recipes.sort((function(t,e){return e.readyInMinutes-t.readyInMinutes}))},Search1:function(){var t=this;return Object(s["a"])(u().mark((function e(){var r,n,o,a,s,c,l,h,f,p;return u().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("search1"),r=t.$root.store.last_search_text,n=t.$root.store.last_search_cuisine,o=t.$root.store.last_search_diet,a=t.$root.store.last_search_intolerance,s=t.$root.store.last_search_amount,c=t.$root.store.last_search_filter,l=t.$root.store.last_search_search_by,console.log(r),e.prev=9,console.log(t.$root.store.server_domain+"/recipes/search/"+c+"="+r+"&number="+s+"&cuisine="+n+"&diet="+o+"&intolerances="+a+"&sort="+l),e.next=13,t.axios.get(t.$root.store.server_domain+"/recipes/search/"+c+"="+r+"&number="+s+"&cuisine="+n+"&diet="+o+"&intolerances="+a+"&sort="+l,{withCredentials:!0});case 13:f=e.sent,t.anooncment="",p=f.data,console.log(p),t.recipes=[],(h=t.recipes).push.apply(h,Object(i["a"])(p)),0==t.recipes.length?t.anooncment="No matching search result found":t.anooncment="last search: "+t.$root.store.last_search_text,e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](9),console.log(e.t0.response),t.form.submitError=e.t0.response.data.message;case 26:case"end":return e.stop()}}),e,null,[[9,22]])})))()}}},h=l,f=(r("fb3f"),r("2877")),p=Object(f["a"])(h,n,o,!1,null,null,null);e["default"]=p.exports},"4e82":function(t,e,r){"use strict";var n=r("23e7"),o=r("1c0b"),a=r("7b0b"),i=r("d039"),s=r("a640"),c=[],u=c.sort,l=i((function(){c.sort(void 0)})),h=i((function(){c.sort(null)})),f=s("sort"),p=l||!h||!f;n({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?u.call(a(this)):u.call(a(this),o(t))}})},fb3f:function(t,e,r){"use strict";var n=r("2413"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-3c517462.ec57854b.js.map