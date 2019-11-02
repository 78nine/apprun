class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){let n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:s,options:i}=n;return i.delay?this.delay(t,s,e,i):s.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let e;const n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;n.app&&n._AppRunVersions?e=n.app:(e=new t,n.app=e,n._AppRunVersions="AppRun-2");var s=e;let i=0;function o(t,e,n=0){if(0===n&&(i=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>o(t,e,i));let r=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,n){const{tag:i,props:o,children:r}=t;let c=`_${n}`,h=o&&o.id;h?c=h:h=`_${n}${Date.now()}`,e.s||(e.s={});let u=e.s[c];u?h=u.i:(u=e.s[c]=new i(Object.assign(Object.assign({},o),{children:r})).mount(h)).i=h;let f=u.state;if(u.mounted){const t=u.mounted(o,r);void 0!==t&&(f=u.state=t)}let a="";return u.view&&(f instanceof Promise?f.then(()=>u.run(".")):(a=u._view(f,o),u.rendered&&setTimeout(()=>u.rendered(f,o)))),s.createElement("section",Object.assign({},o,{id:h}),a)}(t,e,i++)),r&&Array.isArray(r.children)&&(r.children=r.children.map(t=>o(t,e,i))),r}const r="_props";function c(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}const h={},u=function(t,e,n={}){if(null==e)return;if(e=o(e,n),!t)return;Array.isArray(e)?a(t,e):a(t,[e])};function f(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(a(t,e.children),p(t,e.props)):t.parentNode.replaceChild(d(e),t)}function a(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],i=t.childNodes[s];if(n instanceof HTMLElement)t.insertBefore(n,i);else if("string"==typeof n)i.textContent!==n&&(3===i.nodeType?i.textContent=n:t.replaceChild(l(n),i));else{const e=n.props&&n.props.key;if(e)if(i.key===e)f(t.childNodes[s],n);else{const o=h[e];o?(t.insertBefore(o,i),t.appendChild(i),f(t.childNodes[s],n)):t.insertBefore(d(n),i)}else f(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(d(e[t]));t.appendChild(s)}}function l(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function d(t,e=!1){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(d(t,e))),n}function p(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[r]||{},e||{}),t[r]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(h[s]=t)}}const b=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value);const i=this.children?Array.from(this.children):[];i.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},s),{children:i})).mount(this._shadowRoot,n),this._component.mounted&&this._component.mounted(s,i),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});var y=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,b(e,n))};const m={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function g(t,e={}){return(n,s,i)=>{const o=t?t.toString():s;return m.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n),i}}function j(t,e={}){return function(n,s){const i=t?t.toString():s;m.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n)}}function O(t,e){return function(n){return y(t,n,e),n}}const w=(t,e)=>(e?t.state[e]:t.state)||"",v=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};var A=(t,e,n,i)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>i.run(t,e);else if("string"==typeof n)e[t]=t=>i.run(n,t);else if("function"==typeof n)e[t]=t=>i.setState(n(i.state,t));else if(Array.isArray(n)){const[s,...o]=n;"string"==typeof s?e[t]=t=>i.run(s,...o,t):"function"==typeof s&&(e[t]=t=>i.setState(s(i.state,...o,t)))}}else if("$bind"===t){const s=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(s){case"checkbox":e.checked=w(i,o),e.onclick=t=>v(i,o||t.target.name,t.target.checked);break;case"radio":e.checked=w(i,o)===e.value,e.onclick=t=>v(i,o||t.target.name,t.target.value);break;case"number":case"range":e.value=w(i,o),e.oninput=t=>v(i,o||t.target.name,Number(t.target.value));break;default:e.value=w(i,o),e.oninput=t=>v(i,o||t.target.name,t.target.value)}else"select"===n?(e.value=w(i,o),e.onchange=t=>{t.target.multiple||v(i,o||t.target.name,t.target.value)}):"option"===n&&(e.selected=w(i,o),e.onclick=t=>v(i,o||t.target.name,t.target.selected))}else s.run("$",{key:t,tag:n,props:e,component:i})};const k={};s.on("get-components",t=>t.components=k);const $=t=>t;class M{constructor(e,n,s,i){this.state=e,this.view=n,this.update=s,this.options=i,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){s.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=s.createElement;s.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(A(n,e,t,this),delete e[n])}),n(t,e,...s));const i=e?this.view(t,e):this.view(t);return s.createElement=n,i}renderState(t){if(!this.view)return;const e=this._view(t);if(s.debug&&s.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";if(this.unload){if(n._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver)){const e=new MutationObserver(t=>{const{removedNodes:s,oldValue:i}=t[0];(i===this.tracking_id||Array.from(s).indexOf(n)>=0)&&(this.unload(this.state),e.disconnect())});n.parentNode&&e.observe(n.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else n.removeAttribute&&n.removeAttribute(t);n._component=this}this.render(n,e),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),s.debug){const e="string"==typeof t?t:t.id;k[e]=k[e]||[],k[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...i)=>{const o=e(this.state,...i);s.debug&&s.run("debug",{component:this,event:t,e:i,state:this.state,newState:o,options:n}),this.setState(o,n)},n))}add_actions(){const t=this.update||{};m.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=m.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,i]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,i])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=$),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?s.run(n,...e):this._app.run(n,...e)}on(t,e,n){const i=t.toString();return this._actions.push({name:i,fn:e}),this.is_global_event(i)?s.on(i,e,n):this._app.on(i,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.off(e,n):this._app.off(e,n)})}}M.t=!0;const _="//",E="///",C=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.run(e,...n)||s.run("///",e,...n),s.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...i]=t.split("/");s.run("/"+n,...i)||s.run("///","/"+n,...i),s.run("//","/"+n,...i)}else s.run(t)||s.run("///",t),s.run("//",t)};s.createElement=function(t,e,...n){const s=c(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)},s.render=function(t,e,n){u(t,e,n)},s.Fragment=function(t,...e){return c(e)},s.webComponent=y,s.start=(t,e,n,s,i)=>{const o=Object.assign(Object.assign({},i),{render:!0,global_event:!0}),r=new M(e,n,s);return i&&i.rendered&&(r.rendered=i.rendered),r.mount(t,o),r};const T=t=>{};s.on("$",T),s.on("debug",t=>T),s.on("//",T),s.on("#",T),s.route=C,s.on("route",t=>s.route&&s.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.route===C&&(window.onpopstate=()=>C(location.hash),C(location.hash))}),"object"==typeof window&&(window.Component=M,window.React=s);export default s;export{M as Component,E as ROUTER_404_EVENT,_ as ROUTER_EVENT,s as app,O as customElement,g as event,j as on,g as update};
//# sourceMappingURL=apprun.esm.js.map
