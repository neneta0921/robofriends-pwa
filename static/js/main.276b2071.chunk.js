(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),c=t(3),i=t.n(c),s=t(2),a=t(6),l=t(15),u=t(16),h=(t(27),t(4)),d=t(5),b=t(8),j=t(7),f="CHANGE_SEARCHFIELD",g="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",v="REQUEST_ROBOTS_FAILED",O=function(){return function(e){var n;e({type:g}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:p,payload:n})})).catch((function(n){return e({type:v,payload:n})}))}},m=function(e){var n=e.name,t=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"nekos",src:"https://robohash.org/".concat(o,"?size=150x150&set=set4")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:"helvetica",children:n}),Object(r.jsx)("p",{className:"helvetica",children:t})]})]})},w=function(e){var n=e.robots;return Object(r.jsx)("div",{children:n.map((function(e,t){return Object(r.jsx)(m,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},x=function(e){e.searchfield;var n=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search nekos",onChange:n})})},y=function(e){return Object(r.jsx)("div",{style:{border:"5px solid black"},children:e.children})},E=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(o.Component),R=(t(28),function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,c=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{className:"f1 ttu",children:"Neko Friends"}),Object(r.jsx)(x,{searchChange:o})]}),Object(r.jsx)(y,{children:c?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsx)(E,{children:Object(r.jsx)(w,{robots:i})})})]})}}]),t}(o.Component)),k=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:f,payload:t}));var t},onRequestRobots:function(){return e(O())}}}))(R),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S={searchField:""},F={robots:[],isPending:!0},L=(t(29),Object(u.createLogger)()),P=Object(s.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return Object.assign({},e,{isPending:!0});case p:return Object.assign({},e,{robots:n.payload,isPending:!1});case v:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case f:return Object.assign({},e,{searchField:n.payload});default:return e}}}),_=Object(s.d)(P,Object(s.a)(l.a,L));i.a.render(Object(r.jsx)(a.a,{store:_,children:Object(r.jsx)(k,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");C?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.276b2071.chunk.js.map