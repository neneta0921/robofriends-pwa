(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),c=t.n(o),i=t(5),s=t(7),l=t(14),u=t(15),h=(t(26),t(1)),d=t(2),f=t(4),b=t(3),p=function(){return function(e){var n;e({type:"REQUEST_ROBOTS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}},g=function(e){var n=e.name,t=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"nekos",src:"https://robohash.org/".concat(r,"?size=150x150&set=set4")}),a.a.createElement("div",null,a.a.createElement("h3",{className:"helvetica"},n),a.a.createElement("p",{className:"helvetica"},t)))},m=function(e){var n=e.robots;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},v=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return console.log("Header"),a.a.createElement("h1",{className:"f1 ttu"},"Neko Friends")}}]),t}(r.PureComponent),E=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Box",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search nekos",onChange:n}))},w=function(e){return a.a.createElement("div",{style:{border:"5px solid black"}},e.children)},O=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.Component),y=(t(27),function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,c=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"tc"},a.a.createElement(v,{className:"header"}),a.a.createElement(E,{searchChange:o})),a.a.createElement(w,null,c?a.a.createElement("h1",null,"Loading"):a.a.createElement(O,null,a.a.createElement(m,{robots:i}))))}}]),t}(r.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCHFIELD",payload:n.target.value})},onRequestRobots:function(){return e(p())}}}))(y),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C={searchField:""},k={robots:[],isPending:!0},N=(t(28),Object(u.createLogger)()),T=Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}}),_=Object(i.d)(T,Object(i.a)(l.a,N));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-pwa","/service-worker.js");R?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.0e8f3a34.chunk.js.map