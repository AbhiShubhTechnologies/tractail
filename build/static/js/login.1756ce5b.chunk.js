"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[535],{9758:function(e,t,r){r.r(t);var n=r(4942),a=r(1413),o=r(885),s=r(2791),c=r(4569),i=r.n(c),l=r(184);t.default=function(){var e=(0,s.useReducer)((function(e,t){return(0,a.Z)((0,a.Z)({},e),t)}),{email:"",password:""}),t=(0,o.Z)(e,2),r=t[0],c=t[1],u=function(e){var t=e.target.name,r=e.target.value;c((0,n.Z)({},t,r))};return(0,l.jsxs)("div",{className:"col-md-3 mx-auto mt-5",children:[(0,l.jsx)("h2",{className:"text-center mb-3",children:"Login"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i().post("https://atl.tractail.in/api/login",r).then((function(e){"success"===e.data.status?(localStorage.setItem("token",e.data.data[0].token),localStorage.setItem("user_id",e.data.data[0].userID),window.location.href="/admin/dashboard"):alert(e.data.message)})).catch((function(e){console.log(e)}))},children:[(0,l.jsxs)("div",{className:"form-floating mb-3",children:[(0,l.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",onChange:u}),(0,l.jsx)("label",{htmlFor:"email",children:"Email address"})]}),(0,l.jsxs)("div",{className:"form-floating mb-3",children:[(0,l.jsx)("input",{type:"password",className:"form-control",name:"password",id:"pwd",onChange:u}),(0,l.jsx)("label",{htmlFor:"pwd",children:"Password"})]}),(0,l.jsx)("button",{type:"submit",className:"form-control btn btn-primary",children:"Submit"})]})]})}},4942:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},1413:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(4942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=login.1756ce5b.chunk.js.map