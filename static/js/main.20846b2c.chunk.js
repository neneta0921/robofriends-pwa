(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),c=t(7),i=t.n(c),a=t(6),s=t(8),l=t(14),u=(t(26),t(2)),h=t(3),d=t(5),b=t(4),f="CHANGE_SEARCHFIELD",j="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",g="REQUEST_ROBOTS_FAILED",v=function(){return function(e){var n;e({type:j}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:p,payload:n})})).catch((function(n){return e({type:g,payload:n})}))}},O=function(e){var n=e.name,t=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"nekos",src:"https://robohash.org/".concat(o,"?size=150x150&set=set4")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:"helvetica",children:n}),Object(r.jsx)("p",{className:"helvetica",children:t})]})]})},w=function(e){var n=e.robots;return Object(r.jsx)("div",{children:n.map((function(e,t){return Object(r.jsx)(O,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},m=function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsx)("h1",{className:"f1 ttu",children:"Neko Friends"})}}]),t}(o.PureComponent),y=function(e){e.searchfield;var n=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{"aria-label":"Search Box",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search nekos",onChange:n})})},x=function(e){return Object(r.jsx)("div",{style:{border:"5px solid black"},children:e.children})},k=function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(u.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(o.Component),S=(t(27),function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,c=e.onSearchChange,i=e.isPending,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsxs)(o.Fragment,{children:[Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(m,{className:"header"}),Object(r.jsx)(y,{searchChange:c})]}),Object(r.jsx)(x,{children:i?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsx)(k,{children:Object(r.jsx)(w,{robots:a})})})]})}}]),t}(o.Component)),E=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:f,payload:t}));var t},onRequestRobots:function(){return e(v())}}}))(S),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N={searchField:""},P={robots:[],isPending:!0},F=(t(28),Object(a.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object.assign({},e,{isPending:!0});case p:return Object.assign({},e,{robots:n.payload,isPending:!1});case g:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case f:return Object.assign({},e,{searchField:n.payload});default:return e}}})),T=Object(a.d)(F,Object(a.a)(l.a));i.a.render(Object(r.jsx)(s.a,{store:T,children:Object(r.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-pwa","/service-worker.js");R?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(n,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.20846b2c.chunk.js.map