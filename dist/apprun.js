!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var s=n(1),o=n(2);const i=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value);const o=this.children?Array.from(this.children):[];if(o.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},s),{children:o})).mount(this._shadowRoot,n),this._component.mounted){const t=this._component.mounted(s,o,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){this._component.unload&&this._component.unload(),this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});var r=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,i(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,s,o)=>{const i=t?t.toString():s;return a.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n),o}}function u(t,e={}){return function(n,s){const o=t?t.toString():s;a.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n)}}function h(t,e){return function(n){return r(t,n,e),n}}const l=(t,e)=>(e?t.state[e]:t.state)||"",d=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};var f=(t,e,n,o)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>o.run(t,e);else if("string"==typeof n)e[t]=t=>o.run(n,t);else if("function"==typeof n)e[t]=t=>o.setState(n(o.state,t));else if(Array.isArray(n)){const[s,...i]=n;"string"==typeof s?e[t]=t=>o.run(s,...i,t):"function"==typeof s&&(e[t]=t=>o.setState(s(o.state,...i,t)))}}else if("$bind"===t){const s=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(s){case"checkbox":e.checked=l(o,i),e.onclick=t=>d(o,i||t.target.name,t.target.checked);break;case"radio":e.checked=l(o,i)===e.value,e.onclick=t=>d(o,i||t.target.name,t.target.value);break;case"number":case"range":e.value=l(o,i),e.oninput=t=>d(o,i||t.target.name,Number(t.target.value));break;default:e.value=l(o,i),e.oninput=t=>d(o,i||t.target.name,t.target.value)}else"select"===n?(e.value=l(o,i),e.onchange=t=>{t.target.multiple||d(o,i||t.target.name,t.target.value)}):"option"===n&&(e.selected=l(o,i),e.onclick=t=>d(o,i||t.target.name,t.target.selected))}else s.b.run("$",{key:t,tag:n,props:e,component:o})};const p={};s.b.on("get-components",t=>t.components=p);const b=t=>t;class m{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){s.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=s.b.createElement;s.b.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(f(n,e,t,this),delete e[n])}),n(t,e,...s));const o=e?this.view(t,e):this.view(t);return s.b.createElement=n,o}renderState(t){if(!this.view)return;const e=this._view(t);if(s.b.debug&&s.b.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";this.unload?n._component===this&&n.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(n)||(this.unload(this.state),this.observer.disconnect())})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):n.removeAttribute&&n.removeAttribute(t),n._component=this}this.render(n,e),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,o;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),this.state=null!=(o=null!=(n=this.state)?n:this.model)?o:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),s.b.debug){const e="string"==typeof t?t:t.id;p[e]=p[e]||[],p[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...o)=>{const i=e(this.state,...o);s.b.debug&&s.b.run("debug",{component:this,event:t,e:o,state:this.state,newState:i,options:n}),this.setState(i,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,o]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,o])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=b),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?s.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?s.b.on(o,e,n):this._app.on(o,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.b.off(e,n):this._app.off(e,n)})}}m.__isAppRunComponent=!0;const _=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.b.run(e,...n)||s.b.run("///",e,...n),s.b.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");s.b.run("/"+n,...o)||s.b.run("///","/"+n,...o),s.b.run("//","/"+n,...o)}else s.b.run(t)||s.b.run("///",t),s.b.run("//",t)};n.d(e,"app",(function(){return s.b})),n.d(e,"Component",(function(){return m})),n.d(e,"on",(function(){return u})),n.d(e,"update",(function(){return c})),n.d(e,"event",(function(){return c})),n.d(e,"ROUTER_EVENT",(function(){return"//"})),n.d(e,"ROUTER_404_EVENT",(function(){return"///"})),n.d(e,"customElement",(function(){return h})),s.b.createElement=o.b,s.b.render=function(t,e,n){Object(o.c)(t,e,n)},s.b.Fragment=o.a,s.b.webComponent=r,s.b.start=(t,e,n,s,o)=>{const i=Object.assign(Object.assign({},o),{render:!0,global_event:!0}),r=new m(e,n,s);return o&&o.rendered&&(r.rendered=o.rendered),r.mount(t,i),r};const y=t=>{};s.b.on("$",y),s.b.on("debug",t=>y),s.b.on("//",y),s.b.on("#",y),s.b.route=_,s.b.on("route",t=>s.b.route&&s.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.b.route===_&&(window.onpopstate=()=>_(location.hash),_(location.hash))});e.default=s.b;"object"==typeof window&&(window.Component=m,window.React=s.b)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return s}));class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){let n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let o;const i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;i.app&&i._AppRunVersions?o=i.app:(o=new s,i.app=o,i._AppRunVersions="AppRun-2"),e.b=o}).call(this,n(3))},function(t,e,n){"use strict";var s=n(1);function o(t,e,n){const{tag:o,props:i,children:r}=t;let a=`_${n}`,c=i&&i.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[a];u?c=u.__eid:(u=e.__componentCache[a]=new o(Object.assign(Object.assign({},i),{children:r})).mount(c)).__eid=c;let h=u.state;if(u.mounted){const t=u.mounted(i,r,h);void 0!==t&&(h=u.state=t)}const l=h instanceof Promise?"":u._view(h,i);return s.b.createElement("section",Object.assign({},i,{id:c,ref:t=>(t=>{u.element=t,u.setState(h)})(t)}),l)}let i=0;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return m}));const r="_props";function a(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const s=a(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)}const u={},h=function(t,e,n={}){if(null==e)return;if(e=function t(e,n,s=0){if(0===s&&(i=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map(e=>t(e,n,i));let r=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(r=o(e,n,i++)),r&&Array.isArray(r.children)&&(r.children=r.children.map(e=>t(e,n,i))),r}(e,n),!t)return;Array.isArray(e)?d(t,e):d(t,[e])};function l(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(d(t,e.children),b(t,e.props)):t.parentNode.replaceChild(p(e),t)}function d(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if(n instanceof HTMLElement)t.insertBefore(n,o);else if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(f(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)l(t.childNodes[s],n);else{const i=u[e];i?(t.insertBefore(i,o),t.appendChild(o),l(t.childNodes[s],n)):t.insertBefore(p(n),o)}else l(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(p(e[t]));t.appendChild(s)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function p(t,e=!1){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return b(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(p(t,e))),n}function b(t,e){console.assert(!!t);const n=t[r]||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(n,e||{}),t[r]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(u[s]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function m(t,...e){return a(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])}));
//# sourceMappingURL=apprun.js.map