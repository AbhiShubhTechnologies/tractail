"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[622],{7906:function(e,t,r){r.r(t);var n=r(4942),a=r(1413),c=r(885),s=r(2791),o=r(4569),i=r.n(o),l=r(184);t.default=function(){var e=(0,s.useReducer)((function(e,t){return(0,a.Z)((0,a.Z)({},e),t)}),{code:""}),t=(0,c.Z)(e,2),r=t[0],o=t[1];return(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row mt-5",children:(0,l.jsx)("div",{className:"col-md-6 col-lg-4 mx-auto mt-5",children:(0,l.jsx)("form",{className:"form",name:"form",onSubmit:function(e){e.preventDefault(),i().post("https://atl.tractail.in/api/admin/code/update",r).then((function(t){alert(t.data.message),e.target.reset()})).catch((function(e){console.log(e)}))},children:(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h3",{className:"card-header",children:"Get QR Code Status"}),(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("label",{htmlFor:"code",children:["Scan QR Code ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"code",name:"code",onChange:function(e){var t=e.target.name,r=e.target.value;o((0,n.Z)({},t,r))},autoFocus:!0,required:!0})]})}),(0,l.jsx)("div",{className:"card-footer",children:(0,l.jsxs)("button",{className:"btn btn-primary btn-lg w-100",type:"submit",disabled:!r.code,children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-save",viewBox:"0 0 16 16",style:{position:"relative",top:"-2px"},children:(0,l.jsx)("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"})}),(0,l.jsx)("span",{className:"ms-2",children:"Submit"})]})})]})})})})})}},4942:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},1413:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=scanner.9fb43f83.chunk.js.map