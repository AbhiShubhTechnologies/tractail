/*! For license information please see job-manage.2d75a0f4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[541],{9680:function(t,e,r){r.r(e);var n=r(4942),a=r(1413),o=r(8214),i=r(5861),c=r(885),s=r(2791),l=r(4569),u=r.n(l),h=r(6871),d=r(501),f=r(184);e.default=function(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),r=e[0],l=e[1],m=(0,s.useState)([]),p=(0,c.Z)(m,2),v=p[0],y=p[1],g=(0,s.useState)(""),b=(0,c.Z)(g,2),x=b[0],j=b[1],w=(0,s.useState)(!1),k=(0,c.Z)(w,2),N=k[0],O=k[1],L=(0,h.s0)(),E=function(){var t=(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("https://atl.tractail.in/api/admin/settings").then((function(t){l(t.data.accounts),y(t.data.templates)})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){E()}),[]);var S=(0,s.useReducer)((function(t,e){return(0,a.Z)((0,a.Z)({},t),e)}),{accountId:1,batch:"",template:"",total:0,files:0,background:1,data_file:"",status:1}),_=(0,c.Z)(S,2),P=_[0],F=_[1],Z=function(t){var e=t.target.name,r=t.target.value;F((0,n.Z)({},e,r))};return(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"row",children:(0,f.jsxs)("div",{className:"col-12",children:[(0,f.jsx)("h3",{className:"text-primary",children:"Add a Job"}),(0,f.jsx)("form",{onSubmit:function(t){t.preventDefault(),O(!0);var e=new FormData;e.append("file",x),e.append("accountId",P.accountId),e.append("status",P.status),e.append("template",P.template),e.append("batch",P.batch),e.append("background",P.background),u().post("https://atl.tractail.in/api/job",e).then((function(t){alert(t.data.message),O(!1),"success"===t.data.status&&L("/admin/jobs")})).catch((function(t){console.log(t)}))},encType:"multipart/form-data",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,f.jsxs)("label",{htmlFor:"batch",children:[" Batch ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsx)("input",{type:"text",className:"form-control",defaultValue:P.batch,name:"batch",required:!0,onChange:Z})]}),(0,f.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,f.jsxs)("label",{htmlFor:"name",children:[" Account ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsxs)("select",{className:"form-select",value:P.accountId,required:!0,name:"accountId",onChange:Z,children:[(0,f.jsx)("option",{children:"--Select Account--"}),r.map((function(t){return(0,f.jsx)("option",{value:t.metaId,children:t.meta_key||""},t.metaId)}))]})]}),(0,f.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,f.jsxs)("label",{htmlFor:"template",children:["Template ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsxs)("select",{className:"form-select",value:P.template,name:"template",required:!0,onChange:Z,children:[(0,f.jsx)("option",{children:"--Select Template--"}),v.map((function(t){return(0,f.jsx)("option",{value:t.metaId,children:t.meta_key||""},t.metaId)}))]})]}),(0,f.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,f.jsxs)("label",{htmlFor:"data_file",children:[" Upload file",(0,f.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,f.jsx)("input",{type:"file",onChange:function(t){j(t.target.files[0])},accept:".csv",className:"form-control",name:"data_file",required:!0,defaultValue:P.data_file})]}),(0,f.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,f.jsxs)("label",{htmlFor:"background",children:[" Background ",(0,f.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"form-check form-check-inline mt-2",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"background",id:"background1",value:"1",onChange:Z,defaultChecked:P.background}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"background1",children:"Yes"})]}),(0,f.jsxs)("div",{className:"form-check form-check-inline",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"background",id:"background2",value:"0",onChange:Z}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"background2",children:"No"})]})]}),(0,f.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,f.jsxs)("label",{htmlFor:"status",children:[" Status ",(0,f.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"form-check form-check-inline mt-2",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"status",id:"status0",value:"0",onChange:Z}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"status0",children:"Draft"})]}),(0,f.jsxs)("div",{className:"form-check form-check-inline",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"status",id:"status1",value:"1",onChange:Z,defaultChecked:P.status}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"status1",children:"Print"})]})]}),(0,f.jsxs)("div",{className:"col-12 mt-3",children:[(0,f.jsx)("button",{className:"btn btn-primary",disabled:N,style:{minWidth:"5.5rem"},children:N?(0,f.jsx)("div",{className:"spinner-border spinner-border-sm",role:"status",style:{borderWidth:"1px"}}):(0,f.jsx)("span",{children:"Save"})}),(0,f.jsxs)(d.rU,{className:"btn btn-outline-dark ms-3",to:"/admin/jobs",children:[(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"icon icon-chevron-left",viewBox:"0 0 16 16",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})}),(0,f.jsx)("span",{className:"ms-1",children:"Back"})]})]})]})})]})})})}},5861:function(t,e,r){function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return a}})},4942:function(t,e,r){function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},1413:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(4942);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},8214:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return E()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var d={};function f(){}function m(){}function p(){}var v={};l(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==e&&r.call(g,i)&&(v=g);var b=p.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function a(o,i,c,s){var l=h(t[o],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,c,s)}),(function(t){a("throw",t,c,s)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return a("throw",t,c,s)}))}s(l.arg)}var o;this._invoke=function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=p,l(b,"constructor",p),l(p,"constructor",m),m.displayName=l(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new j(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,s,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}r.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=job-manage.2d75a0f4.chunk.js.map