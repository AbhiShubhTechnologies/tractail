(self.webpackChunkairtelTractail=self.webpackChunkairtelTractail||[]).push([[428],{4184:function(e,t,n){"use strict";n.r(t);var r=n(4165),a=n(5861),o=n(9439),i=n(2791),c=n(7689),s=n(1087),l=n(1243),u=n(3637),d=n(8472),f=n(184);t.default=function(){var e=(0,c.UO)().id,t=(0,c.s0)(),n=(0,s.lr)(),p=(0,o.Z)(n,1)[0],h=p.get("page"),y=(0,i.useState)([]),b=(0,o.Z)(y,2),v=b[0],m=b[1],g=(0,i.useState)(h||1),j=(0,o.Z)(g,2),w=j[0],k=j[1],x=(0,i.useState)(0),C=(0,o.Z)(x,2),O=C[0],_=C[1],P=p.get("status")||"",N=(0,i.useState)(!1),S=(0,o.Z)(N,2),F=S[0],A=S[1],R="/admin/codes";e&&(R="/admin/job/"+e+"/codes");var E="Unknown";E=P&&0===parseInt(P)?"Pending":P&&1===parseInt(P)?"Scanned":"All";var T=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var a,o=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return 0===(a=o.length>0&&void 0!==o[0]?o[0]:0)&&(a=w),t(window.location.pathname+"?status="+P+"&page="+a||1),A(!0),n.next=6,l.Z.get("http://3.109.190.119:3000/api/admin/codes",{params:{page:a,limit:100,jobId:e,code:"codes",status:P}}).then((function(e){m(e.data.data),k(e.data.page),_(e.data.total)})).catch((function(e){console.log(e)})).finally((function(){A(!1)}));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function U(e){return e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],(0,f.jsx)(f.Fragment,{children:e.map((function(e){return(0,f.jsx)("p",{className:"placeholder-wave mb-0",children:(0,f.jsx)("span",{className:"placeholder col-12 bg-secondary"})},e)}))})}return(0,i.useEffect)((function(){T()}),[]),F?(0,f.jsx)(U,{rows:"20"}):(0,f.jsx)("div",{className:"container-lg",children:(0,f.jsxs)("div",{className:"row my-3",children:[(0,f.jsx)("div",{className:"col-md-7",children:(0,f.jsx)("h3",{className:"text-primary",children:"Codes"})}),(0,f.jsxs)("div",{className:"col-md-5 text-end",children:[(0,f.jsx)(d.CSVLink,{filename:"code-".concat(e,"-").concat(E,"-").concat(h),data:v,className:"btn btn-primary btn-sm me-3",children:"Export Codes"}),(0,f.jsxs)("button",{className:"btn btn-secondary btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Filter by ",E]}),(0,f.jsxs)("ul",{className:"dropdown-menu ms-5",children:[(0,f.jsx)("li",{children:(0,f.jsx)("a",{className:"dropdown-item",href:"".concat(R),children:"All"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{className:"dropdown-item",href:"".concat(R,"?status=1"),children:"Scanned"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{className:"dropdown-item",href:"".concat(R,"?status=2"),children:"Error"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{className:"dropdown-item",href:"".concat(R,"?status=0"),children:"Pending"})})]})]}),(0,f.jsxs)("div",{className:"col-12",children:[(0,f.jsx)("div",{className:"table-responsive mb-3",children:(0,f.jsxs)("table",{className:"table table-hover table-sm table-striped mb-0",children:[(0,f.jsx)("thead",{className:"thead-dark",children:(0,f.jsxs)("tr",{className:"table-dark",children:[(0,f.jsx)("th",{scope:"col",children:"VPA "}),(0,f.jsx)("th",{scope:"col",children:"Name"}),(0,f.jsx)("th",{scope:"col",children:"CloseQR "}),(0,f.jsx)("th",{scope:"col",children:"Code  "})]})}),(0,f.jsx)("tbody",{children:v.map((function(e){return(0,f.jsxs)("tr",{className:"table-inner",children:[(0,f.jsx)("td",{valign:"center",className:"table_dtl1",children:e.vpa}),(0,f.jsx)("td",{valign:"center",className:"table_dtl",children:e.merchant}),(0,f.jsx)("td",{valign:"center",className:"table_dtl",children:e.closeQR}),(0,f.jsx)("td",{valign:"center",className:"table_dtl",children:e.code})]},e.codeId)}))})]})}),(0,f.jsx)(u.Z,{activePage:w,totalItemsCount:O,itemsCountPerPage:100,onChange:function(e){return T(e)},innerClass:"pagination justify-content-center small mb-0",itemClass:"page-item",linkClass:"page-link",activeLinkClass:"active",firstPageText:"First",lastPageText:"Last"})]})]})})}},8472:function(e,t,n){e.exports=n(3561)},8015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2791),i=(r=o)&&r.__esModule?r:{default:r},c=n(1509),s=n(8333);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.enclosingCharacter,o=e.uFEFF,i=e.target,c=e.specs,s=e.replace;this.state.page=window.open(this.buildURI(t,o,n,r,a),i,c,s)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);l.defaultProps=Object.assign(s.defaultProps,{target:"_blank"}),l.propTypes=s.propTypes,t.default=l},9088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2791),c=(r=i)&&r.__esModule?r:{default:r},s=n(1509),l=n(8333);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,a=n.headers,o=n.separator,i=n.filename,c=n.enclosingCharacter,l=n.uFEFF,u=t&&"function"===typeof r?r():r,d=new Blob([l?"\ufeff":"",(0,s.toCSV)(u,a,o,c)]);return window.navigator.msSaveBlob(d,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,o=t.separator,i=t.filename,s=t.uFEFF,l=t.children,u=(t.onClick,t.asyncOnClick,t.enclosingCharacter),d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),f="undefined"===typeof window?"":this.buildURI(n,s,r,o,u);return c.default.createElement("a",a({download:i},d,{ref:function(t){return e.link=t},target:"_self",href:f,onClick:this.handleClick()}),l)}}]),t}(c.default.Component);u.defaultProps=l.defaultProps,u.propTypes=l.propTypes,t.default=u},1509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},o=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},c=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},s=t.jsons2arrays=function(e,t){var n=t=t||c(e),a=t;o(t)&&(n=t.map((function(e){return e.label})),a=t.map((function(e){return e.key})));var i=e.map((function(e){return a.map((function(t){return l(t,e)}))}));return[n].concat(r(i))},l=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var a=e[t];if(void 0!==a&&null!==a)return a;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},u=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},f=t.arrays2csv=function(e,t,n,a){return d(t?[t].concat(r(e)):e,n,a)},p=t.jsons2csv=function(e,t,n,r){return d(s(e,t),n,r)},h=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},y=t.toCSV=function(e,t,n,r){if(o(e))return p(e,t,n,r);if(i(e))return f(e,t,n,r);if("string"===typeof e)return h(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,o){var i=y(e,n,r,o),c=a()?"application/csv":"text/csv",s=new Blob([t?"\ufeff":"",i],{type:c}),l="data:"+c+";charset=utf-8,"+(t?"\ufeff":"")+i,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?l:u.createObjectURL(s)}},3561:function(e,t,n){"use strict";t.CSVLink=void 0;var r=o(n(8015)),a=o(n(9088));function o(e){return e&&e.__esModule?e:{default:e}}r.default,t.CSVLink=a.default},8333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,a=n(2791),o=((r=a)&&r.__esModule,n(2007));t.propTypes={data:(0,o.oneOfType)([o.string,o.array,o.func]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool,enclosingCharacter:o.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);
//# sourceMappingURL=codes.698770f4.chunk.js.map