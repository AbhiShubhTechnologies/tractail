/*! For license information please see job-manage.2947a76e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkairtelTractail=self.webpackChunkairtelTractail||[]).push([[541],{9680:function(e,t,n){n.r(t);var r=n(1413),a=n(4942),o=n(4165),c=n(5861),i=n(9439),s=n(2791),l=n(7689),u=n(1087),d=n(1243),h=n(184);t.default=function(){var e=(0,l.s0)(),t=(0,l.UO)().id,n=(0,s.useState)(!1),f=(0,i.Z)(n,2),m=f[0],p=f[1],v=(0,s.useState)([]),b=(0,i.Z)(v,2),g=b[0],x=b[1],y=(0,s.useState)([]),j=(0,i.Z)(y,2),w=j[0],N=j[1],_=(0,s.useState)(""),k=(0,i.Z)(_,2),O=k[0],E=k[1],S=(0,s.useState)(!1),I=(0,i.Z)(S,2),L=I[0],C=I[1],P=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL+"/admin/settings").then((function(e){x(e.data.accounts),N(e.data.templates)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,d.Z.get({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL+"/job",{params:{jobId:t}}).then((function(e){p(!1),Object.keys(e.data.data).forEach((function(t,n){D((0,a.Z)({},t,e.data.data[t]))}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){t&&T(),P()}),[t]);var F=(0,s.useReducer)((function(e,t){return(0,r.Z)((0,r.Z)({},e),t)}),{jobId:t,accountId:1,templateId:0,batch:"",total:0,files:0,background:1,data_file:"",status:1,clone:0}),Z=(0,i.Z)(F,2),A=Z[0],D=Z[1],R=function(e){var t=e.target.name,n=e.target.value;D((0,a.Z)({},t,n))};if(!m)return(0,h.jsx)("div",{className:"container-lg",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col-12",children:[(0,h.jsx)("h3",{className:"text-primary",children:A.jobId?"Manage Job #"+t:"Add a Job"}),(0,h.jsx)("form",{onSubmit:function(n){n.preventDefault(),C(!0);var r=new FormData;if(t&&r.append("jobId",A.jobId),r.append("accountId",A.accountId),r.append("templateId",A.templateId),r.append("status",A.status),r.append("clone",A.clone),r.append("batch",A.batch),r.append("background",A.background),r.append("total",A.total),r.append("files",A.files),A.templateId){var a=w.findIndex((function(e){return e.metaId===parseInt(A.templateId)}));-1!==a&&r.append("meta_value",JSON.stringify(w[a].meta_value))}r.append("file",O),d.Z.post({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL+"/job",r).then((function(t){alert(t.data.message),C(!1),"success"===t.data.status&&e("/admin/job/"+t.data.data.jobId)})).catch((function(e){console.log(e)}))},encType:"multipart/form-data",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"name",children:[" Account ",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsxs)("select",{className:"form-select",value:A.accountId,required:!0,name:"accountId",onChange:R,children:[(0,h.jsx)("option",{value:"0",disabled:!0,children:"--Select Account--"}),g.map((function(e){return(0,h.jsx)("option",{value:e.metaId,children:e.meta_key||""},e.metaId)}))]})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"templateId",children:["Template ",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsxs)("select",{className:"form-select",value:A.templateId,name:"templateId",required:!0,onChange:R,children:[(0,h.jsx)("option",{value:"0",disabled:!0,children:"--Select Template--"}),w.map((function(e){return(0,h.jsx)("option",{value:e.metaId,children:e.meta_value.title||e.meta_key},e.metaId)}))]})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"batch",children:["Batch ",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)("input",{type:"text",className:"form-control",defaultValue:A.batch,name:"batch",required:!0,onChange:R})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"background",children:["Show Background ",(0,h.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"form-check form-check-inline mt-2",children:[(0,h.jsx)("input",{className:"form-check-input",type:"radio",name:"background",id:"background1",value:"1",onChange:R,defaultChecked:1===parseInt(A.background)}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"background1",children:"Yes"})]}),(0,h.jsxs)("div",{className:"form-check form-check-inline",children:[(0,h.jsx)("input",{className:"form-check-input",type:"radio",name:"background",id:"background2",value:"0",onChange:R,defaultChecked:0===parseInt(A.background)}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"background2",children:"No"})]})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"status",children:[" Status ",(0,h.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"form-check form-check-inline mt-2",children:[(0,h.jsx)("input",{className:"form-check-input",type:"radio",name:"status",id:"status0",value:"0",onChange:R,defaultChecked:0===parseInt(A.status)}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"status0",children:"Draft"})]}),(0,h.jsxs)("div",{className:"form-check form-check-inline",children:[(0,h.jsx)("input",{className:"form-check-input",type:"radio",name:"status",id:"status1",value:"1",onChange:R,defaultChecked:1===parseInt(A.status)}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"status1",children:"Print"})]})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsx)("label",{htmlFor:"status",children:"Duplicate"}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"form-check form-check-inline mt-2",children:[(0,h.jsx)("input",{className:"form-check-input",type:"radio",name:"clone",id:"clone_1",value:"1",onChange:R,defaultChecked:1===parseInt(A.clone)}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"clone_1",children:"No"})]}),(0,h.jsxs)("div",{className:"form-check form-check-inline",children:[(0,h.jsx)("input",{className:"form-check-input",type:"radio",name:"clone",id:"clone_2",value:"2",onChange:R,defaultChecked:2===parseInt(A.clone)}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"clone_2",children:"Yes"})]})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"data_file",children:[" Upload file",A.data_file?null:(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)("input",{type:"file",onChange:function(e){E(e.target.files[0])},accept:".csv",className:"form-control",name:"data_file",required:!A.data_file})]}),A.jobId&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"total",children:["Total ",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)("input",{type:"number",step:"1",className:"form-control",defaultValue:A.total,name:"total",required:!0,onChange:R})]}),(0,h.jsxs)("div",{className:"col-md-4 mb-3",children:[(0,h.jsxs)("label",{htmlFor:"files",children:["Files ",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)("input",{type:"number",step:"1",className:"form-control",defaultValue:A.files,name:"files",required:!0,onChange:R})]})]}),(0,h.jsxs)("div",{className:"col-12 mt-3",children:[(0,h.jsxs)("button",{className:"btn btn-primary",type:"submit",disabled:L,style:{minWidth:"5.5rem"},children:[L?(0,h.jsx)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",style:{borderWidth:"1px"}}):(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"icon icon-save",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"})}),(0,h.jsx)("span",{className:"ms-2",children:"Save"})]}),(0,h.jsxs)(u.rU,{className:"btn btn-outline-dark ms-3",to:t?"/admin/job/"+t:"/admin/jobs",children:[(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"icon icon-chevron-left",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})}),(0,h.jsx)("span",{className:"ms-1",children:"Back"})]})]})]})})]})})})}},5861:function(e,t,n){function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(l){return void n(l)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})},4942:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},4165:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1002);function a(){a=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(L){u=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,c=Object.create(a.prototype),i=new E(r||[]);return o(c,"_invoke",{value:N(e,n,i)}),c}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=d;var f={};function m(){}function p(){}function v(){}var b={};u(b,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(S([])));x&&x!==t&&n.call(x,i)&&(b=x);var y=v.prototype=m.prototype=Object.create(b);function j(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(o,c,i,s){var l=h(e[o],e,c);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==(0,r.Z)(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,s)}),(function(e){a("throw",e,i,s)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,s)}))}s(l.arg)}var c;o(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){a(e,n,t,r)}))}return c=c?c.then(r,r):r()}})}function N(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return I()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=_(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=h(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return p.prototype=v,o(y,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},j(w.prototype),u(w.prototype,s,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new w(d(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},j(y),u(y,l,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}}}]);
//# sourceMappingURL=job-manage.2947a76e.chunk.js.map