class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this.getSubscribers(t,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+t),n.forEach((n=>{const{fn:i,options:s}=n;return s.delay?this.delay(t,i,e,s):Object.keys(s).length>0?i.apply(this,[...e,s]):i.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,i){i._t&&clearTimeout(i._t),i._t=setTimeout((()=>{clearTimeout(i._t),Object.keys(i).length>0?e.apply(this,[...n,i]):e.apply(this,n)}),i.delay)}query(t,...e){const n=this.getSubscribers(t,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+t);const i=n.map((t=>{const{fn:n,options:i}=t;return Object.keys(i).length>0?n.apply(this,[...e,i]):n.apply(this,e)}));return Promise.all(i)}getSubscribers(t,e){const n=e[t]||[];return e[t]=n.filter((t=>!t.options.once)),Object.keys(e).filter((e=>e.endsWith("*")&&t.startsWith(e.replace("*","")))).sort(((t,e)=>e.length-t.length)).forEach((i=>n.push(...e[i].map((e=>Object.assign(Object.assign({},e),{options:Object.assign(Object.assign({},e.options),{event:t})})))))),n}}let e;const n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;n.app&&n._AppRunVersions?e=n.app:(e=new t,n.app=e,n._AppRunVersions="AppRun-3");var i=e;function s(t,...e){return o(e)}function o(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}const r=new WeakMap,c=function(t,e,n={}){if(null==e||!1===e)return;e=d(e,n);const i="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?u(t,e,i):u(t,[e],i)};function h(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,!function(t,e){const n=t.nodeName,i=`${e.tag||""}`;return n.toUpperCase()===i.toUpperCase()}(t,e)?t.parentNode.replaceChild(f(e,n),t):(!(2&e._op)&&u(t,e.children,n),!(1&e._op)&&a(t,e.props,n)))}function u(t,e,n){var i;const s=(null===(i=t.childNodes)||void 0===i?void 0:i.length)||0,o=(null==e?void 0:e.length)||0,c=Math.min(s,o);for(let i=0;i<c;i++){const s=e[i];if(3===s._op)continue;const o=t.childNodes[i];if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.nodeValue=s:t.replaceChild(l(s),o));else if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else{const e=s.props&&s.props.key;if(e)if(o.key===e)h(t.childNodes[i],s,n);else{const c=r[e];if(c){const e=c.nextSibling;t.insertBefore(c,o),e?t.insertBefore(o,e):t.appendChild(o),h(t.childNodes[i],s,n)}else t.replaceChild(f(s,n),o)}else h(t.childNodes[i],s,n)}}let u=t.childNodes.length;for(;u>c;)t.removeChild(t.lastChild),u--;if(o>c){const i=document.createDocumentFragment();for(let t=c;t<e.length;t++)i.appendChild(f(e[t],n));t.appendChild(i)}}function l(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(null!=t?t:"")}function f(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return a(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(f(t,e)))),n}function a(t,e,n){const i=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(i,e||{}),t._props=e;for(const i in e){const s=e[i];if(i.startsWith("data-")){const e=i.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else if("style"===i)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e]);else if(i.startsWith("xlink")){const e=i.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,s)}else i.startsWith("on")?s&&"function"!=typeof s?"string"==typeof s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]=s:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(i)||n?t.getAttribute(i)!==s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]!==s&&(t[i]=s);"key"===i&&s&&(r[s]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function d(t,e,n=0){var i;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>d(t,e,n++)));let s=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(s=function(t,e,n){const{tag:i,props:s,children:o}=t;let r=`_${n}`,c=s&&s.id;c?r=c:c=`_${n}${Date.now()}`;let h="section";s&&s.as&&(h=s.as,delete s.as),e.i||(e.i={});let u=e.i[r];if(!(u&&u instanceof i&&u.element)){const t=document.createElement(h);u=e.i[r]=new i(Object.assign(Object.assign({},s),{children:o})).start(t)}if(u.mounted){const t=u.mounted(s,o,u.state);void 0!==t&&u.setState(t)}return a(u.element,s,!1),u.element}(t,e,n)),s&&Array.isArray(s.children)){const t=null===(i=s.props)||void 0===i?void 0:i._component;if(t){let e=0;s.children=s.children.map((n=>d(n,t,e++)))}else s.children=s.children.map((t=>d(t,e,n++)))}return s}const p=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const i=n.observedAttributes||[],s=i.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>s[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),i.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(e){this.attributeChangedCallback(t,o[t],e)},configurable:!0,enumerable:!0})}));const r=this.children?Array.from(this.children):[];if(r.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},o),{children:r})).mount(this._shadowRoot,n),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,i;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(i=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===i||i.call(n),this._component=null}attributeChangedCallback(t,n,i){if(this._component){const s=this._attrMap(t);this._component._props[s]=i,this._component.run("attributeChanged",s,n,i),i!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var b=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,p(e,n))};const y={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function m(t,e={}){return(n,i,s)=>{const o=t?t.toString():i;return y.defineMetadata(`apprun-update:${o}`,{name:o,key:i,options:e},n),s}}function g(t,e={}){return function(n,i){const s=t?t.toString():i;y.defineMetadata(`apprun-update:${s}`,{name:s,key:i,options:e},n)}}function v(t,e){return function(n){return b(t,n,e),n}}const w=(t,e)=>(e?t.state[e]:t.state)||"",j=(t,e,n)=>{if(e){const i=t.state||{};i[e]=n,t.setState(i)}else t.setState(n)},O=(t,e)=>{if(Array.isArray(t))return t.map((t=>O(t,e)));{let{tag:n,props:s,children:o}=t;return n?(s&&Object.keys(s).forEach((t=>{t.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[i,...o]=n;"string"==typeof i?e[t]=t=>s.run(i,...o,t):"function"==typeof i&&(e[t]=t=>s.setState(i(s.state,...o,t)))}}else if("$bind"===t){const i=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(i){case"checkbox":e.checked=w(s,o),e.onclick=t=>j(s,o||t.target.name,t.target.checked);break;case"radio":e.checked=w(s,o)===e.value,e.onclick=t=>j(s,o||t.target.name,t.target.value);break;case"number":case"range":e.value=w(s,o),e.oninput=t=>j(s,o||t.target.name,Number(t.target.value));break;default:e.value=w(s,o),e.oninput=t=>j(s,o||t.target.name,t.target.value)}else"select"===n?(e.value=w(s,o),e.onchange=t=>{t.target.multiple||j(s,o||t.target.name,t.target.value)}):"option"===n?(e.selected=w(s,o),e.onclick=t=>j(s,o||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=w(s,o),e.oninput=t=>j(s,o||t.target.name,t.target.value))}else i.run("$",{key:t,tag:n,props:e,component:s})})(t,s,n,e),delete s[t])})),o&&(o=O(o,e)),{tag:n,props:s,children:o}):t}},k=new Map;i.on("get-components",(t=>t.components=k));const $=t=>t;class A{constructor(e,n,i,s){this.state=e,this.view=n,this.update=i,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}renderState(t,e=null){if(!this.view)return;let n=e||this.view(t);if(i.debug&&i.run("debug",{component:this,_:n?".":"-",state:t,vdom:n,el:this.element}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}!e&&n&&(n=O(n,this),i.render(s,n,this)),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)Promise.all([t,this._state]).then((t=>{t[0]&&this.setState(t[0])})).catch((t=>{throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=$),this.add_actions(),this.state=null!==(s=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==s?s:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),i.debug&&(k.get(t)?k.get(t).push(this):k.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,((...s)=>{i.debug&&i.run("debug",{component:this,_:">",event:t,p:s,current_state:this.state,options:n});const o=e(this.state,...s);i.debug&&i.run("debug",{component:this,_:"<",event:t,p:s,newState:o,state:this.state,options:n}),this.setState(o,n)}),n))}add_actions(){const t=this.update||{};y.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=y.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,i,s]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[i,s]))})):Object.keys(t).forEach((n=>{const i=t[n];("function"==typeof i||Array.isArray(i))&&n.split(",").forEach((t=>e[t.trim()]=i))})),e["."]||(e["."]=$),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(t,...e){const n=t.toString();return this.is_global_event(n)?i.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?i.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:e,fn:n}=t;this.is_global_event(e)?i.off(e,n):this._app.off(e,n)}))}}A.t=!0;const M="//",_="///",x=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");i.run(e,...n)||i.run("///",e,...n),i.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");i.run("/"+n,...s)||i.run("///","/"+n,...s),i.run("//","/"+n,...s)}else i.run(t)||i.run("///",t),i.run("//",t)};i.h=i.createElement=function(t,e,...n){const i=o(n);if("string"==typeof t)return{tag:t,props:e,children:i};if(Array.isArray(t))return t;if(void 0===t&&n)return i;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:i};if("function"==typeof t)return t(e,i);throw new Error(`Unknown tag in vdom ${t}`)},i.render=function(t,e,n){c(t,e,n)},i.Fragment=s,i.webComponent=b,i.start=(t,e,n,i,s)=>{const o=Object.assign(Object.assign({},s),{render:!0,global_event:!0}),r=new A(e,n,i);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,o),r};const E=t=>{};i.on("$",E),i.on("debug",(t=>E)),i.on("//",E),i.on("#",E),i.route=x,i.on("route",(t=>i.route&&i.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{i.route===x&&(window.onpopstate=()=>x(location.hash),document.body.hasAttribute("apprun-no-init")||x(location.hash))})),"object"==typeof window&&(window.Component=A,window.React=i,window.on=g,window.customElement=v);export default i;export{A as Component,s as Fragment,_ as ROUTER_404_EVENT,M as ROUTER_EVENT,i as app,v as customElement,m as event,g as on,m as update};
//# sourceMappingURL=apprun.esm.js.map
