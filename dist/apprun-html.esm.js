class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:i,options:s}=n;return s.delay?this.delay(t,i,e,s):i.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,i){i._t&&clearTimeout(i._t),i._t=setTimeout(()=>{clearTimeout(i._t),e.apply(this,n)},i.delay)}}let e;const n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;n.app&&n._AppRunVersions?e=n.app:(e=new t,n.app=e,n._AppRunVersions="AppRun-2");var i=e;function s(t,e,n=0){var o;if("string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>s(t,e,n++));let r=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,n){const{tag:s,props:o,children:r}=t;let c="_"+n,f=o&&o.id;f?c=f:f=`_${n}${Date.now()}`,e.i||(e.i={});let u=e.i[c];u&&u instanceof s||(u=e.i[c]=new s(Object.assign(Object.assign({},o),{children:r})).mount(f));let h=u.state;if(u.mounted){const t=u.mounted(o,r,u.state);h=void 0!==t?t:u.state}if(h instanceof Promise){const t=t=>{u.element=t,Promise.all([h]).then(t=>{t[0]?u.setState(t[0]):u.setState(u.state)})};return i.h("section",Object.assign({},o,{ref:e=>t(e),_component:u}))}if(null!=h){const t=u._view(h,o),e=e=>{u.element=e,u.state=h,u.renderState(h,t)};return i.h("section",Object.assign({},o,{ref:t=>e(t),_component:u}),t)}return i.h("section",Object.assign({},o,{_component:u}))}(t,e,n)),r&&Array.isArray(r.children)){const t=null===(o=r.props)||void 0===o?void 0:o._component;if(t){let e=0;r.children=r.children.map(n=>s(n,t,e++))}else r.children=r.children.map(t=>s(t,e,n++))}return r}function o(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function r(t,e,...n){const i=o(n);if("string"==typeof t)return{tag:t,props:e,children:i};if(Array.isArray(t))return t;if(void 0===t&&n)return i;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:i};if("function"==typeof t)return t(e,i);throw new Error("Unknown tag in vdom "+t)}const c=new WeakMap,f=function(t,e,n={}){if(null==e||!1===e)return;e=s(e,n);const i="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?h(t,e,i):h(t,[e],i)};function u(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,!function(t,e){const n=t.nodeName,i=""+(e.tag||"");return n.toUpperCase()===i.toUpperCase()}(t,e)?t.parentNode.replaceChild(a(e,n),t):(!(2&e._op)&&h(t,e.children,n),!(1&e._op)&&d(t,e.props,n)))}function h(t,e,n){var i;const s=(null===(i=t.childNodes)||void 0===i?void 0:i.length)||0,o=(null==e?void 0:e.length)||0,r=Math.min(s,o);for(let i=0;i<r;i++){const s=e[i];if(3===s._op)continue;const o=t.childNodes[i];if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.nodeValue=s:t.replaceChild(l(s),o));else if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else{const e=s.props&&s.props.key;if(e)if(o.key===e)u(t.childNodes[i],s,n);else{const r=c[e];if(r){const e=r.nextSibling;t.insertBefore(r,o),e?t.insertBefore(o,e):t.appendChild(o)}u(t.childNodes[i],s,n)}else u(t.childNodes[i],s,n)}}let f=t.childNodes.length;for(;f>r;)t.removeChild(t.lastChild),f--;if(o>r){const i=document.createDocumentFragment();for(let t=r;t<e.length;t++)i.appendChild(a(e[t],n));t.appendChild(i)}}function l(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function a(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return d(n,t.props,e),t.children&&t.children.forEach(t=>n.appendChild(a(t,e))),n}function d(t,e,n){const i=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(i,e||{}),t._props=e;for(const i in e){const s=e[i];if(i.startsWith("data-")){const e=i.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else if("style"===i)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e]);else if(i.startsWith("xlink")){const e=i.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,s)}else i.startsWith("on")?s&&"function"!=typeof s?"string"==typeof s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]=s:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(i)||n?t.getAttribute(i)!==s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]!==s&&(t[i]=s);"key"===i&&s&&(c[s]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function p(t,...e){return o(e)}const v=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map(t=>t.toLowerCase())}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const i=n.observedAttributes||[],s=i.reduce((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t},{});this._attrMap=t=>s[t]||t;const o={};Array.from(this.attributes).forEach(t=>o[this._attrMap(t.name)]=t.value),i.forEach(t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(e){this.attributeChangedCallback(t,o[t],e)},configurable:!0,enumerable:!0})});const r=this.children?Array.from(this.children):[];if(r.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},o),{children:r})).mount(this._shadowRoot,n),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,i;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(i=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===i||i.call(n),this._component=null}attributeChangedCallback(t,n,i){if(this._component){const s=this._attrMap(t);this._component._props[s]=i,this._component.run("attributeChanged",s,n,i),i!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{this._component.run(".")})}}};var b=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,v(e,n))};const m={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function y(t,e={}){return(n,i,s)=>{const o=t?t.toString():i;return m.defineMetadata("apprun-update:"+o,{name:o,key:i,options:e},n),s}}function g(t,e={}){return function(n,i){const s=t?t.toString():i;m.defineMetadata("apprun-update:"+s,{name:s,key:i,options:e},n)}}function w(t,e){return function(n){return b(t,n,e),n}}const O=(t,e)=>(e?t.state[e]:t.state)||"",j=(t,e,n)=>{if(e){const i=t.state||{};i[e]=n,t.setState(i)}else t.setState(n)};const k={};i.on("get-components",t=>t.components=k);const T=t=>t;class A{constructor(e,n,i,s){this.state=e,this.view=n,this.update=i,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){i.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=i.createElement;i.h=i.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[i,...o]=n;"string"==typeof i?e[t]=t=>s.run(i,...o,t):"function"==typeof i&&(e[t]=t=>s.setState(i(s.state,...o,t)))}}else if("$bind"===t){const i=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(i){case"checkbox":e.checked=O(s,o),e.onclick=t=>j(s,o||t.target.name,t.target.checked);break;case"radio":e.checked=O(s,o)===e.value,e.onclick=t=>j(s,o||t.target.name,t.target.value);break;case"number":case"range":e.value=O(s,o),e.oninput=t=>j(s,o||t.target.name,Number(t.target.value));break;default:e.value=O(s,o),e.oninput=t=>j(s,o||t.target.name,t.target.value)}else"select"===n?(e.value=O(s,o),e.onchange=t=>{t.target.multiple||j(s,o||t.target.name,t.target.value)}):"option"===n?(e.selected=O(s,o),e.onclick=t=>j(s,o||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=O(s,o),e.oninput=t=>j(s,o||t.target.name,t.target.value))}else i.run("$",{key:t,tag:n,props:e,component:s})})(n,e,t,this),delete e[n])}),n(t,e,...s));const s=e?this.view(t,e):this.view(t);return i.h=i.createElement=n,s}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(i.debug&&i.run("debug",{component:this,_:n?".":"-",state:t,vdom:n,el:this.element}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}e||this.render(s,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)Promise.all([t,this._state]).then(t=>{t[0]&&this.setState(t[0])}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=T),this.add_actions(),this.state=null!==(s=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==s?s:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),i.debug){const e="string"==typeof t?t:t.id;k[e]=k[e]||[],k[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...s)=>{i.debug&&i.run("debug",{component:this,_:">",event:t,p:s,current_state:this.state,options:n});const o=e(this.state,...s);i.debug&&i.run("debug",{component:this,_:"<",event:t,p:s,newState:o,state:this.state,options:n}),this.setState(o,n)},n))}add_actions(){const t=this.update||{};m.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=m.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,i,s]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[i,s])}):Object.keys(t).forEach(n=>{const i=t[n];("function"==typeof i||Array.isArray(i))&&n.split(",").forEach(t=>e[t.trim()]=i)}),e["."]||(e["."]=T),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?i.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?i.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?i.off(e,n):this._app.off(e,n)})}}A.t=!0;const E="//",_="///",x=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");i.run(e,...n)||i.run("///",e,...n),i.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");i.run("/"+n,...s)||i.run("///","/"+n,...s),i.run("//","/"+n,...s)}else i.run(t)||i.run("///",t),i.run("//",t)};i.h=i.createElement=r,i.render=function(t,e,n){f(t,e,n)},i.Fragment=p,i.webComponent=b,i.start=(t,e,n,i,s)=>{const o=Object.assign(Object.assign({},s),{render:!0,global_event:!0}),r=new A(e,n,i);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,o),r};const M=t=>{};i.on("$",M),i.on("debug",t=>M),i.on("//",M),i.on("#",M),i.route=x,i.on("route",t=>i.route&&i.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{i.route===x&&(window.onpopstate=()=>x(location.hash),x(location.hash))}),"object"==typeof window&&(window.Component=A,window.React=i,window.on=g,window.customElement=w);var $;var P="undefined"==typeof document?void 0:document,C=!!P&&"content"in P.createElement("template"),S=!!P&&P.createRange&&"createContextualFragment"in P.createRange();function L(t){return t=t.trim(),C?function(t){var e=P.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(t):S?function(t){return $||($=P.createRange()).selectNode(P.body),$.createContextualFragment(t).childNodes[0]}(t):function(t){var e=P.createElement("body");return e.innerHTML=t,e.childNodes[0]}(t)}function N(t,e){var n,i,s=t.nodeName,o=e.nodeName;return s===o||(n=s.charCodeAt(0),i=o.charCodeAt(0),n<=90&&i>=97?s===o.toUpperCase():i<=90&&n>=97&&o===s.toUpperCase())}function G(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var R={OPTION:function(t,e){var n=t.parentNode;if(n){var i=n.nodeName.toUpperCase();"OPTGROUP"===i&&(i=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==i||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}G(t,e,"selected")},INPUT:function(t,e){G(t,e,"checked"),G(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var i=t.firstChild;if(i){var s=i.nodeValue;if(s==n||!n&&s==t.placeholder)return;i.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,i,s=-1,o=0,r=t.firstChild;r;)if("OPTGROUP"===(i=r.nodeName&&r.nodeName.toUpperCase()))r=(n=r).firstChild;else{if("OPTION"===i){if(r.hasAttribute("selected")){s=o;break}o++}!(r=r.nextSibling)&&n&&(r=n.nextSibling,n=null)}t.selectedIndex=s}}};function D(){}function H(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}var U=function(t){return function(e,n,i){if(i||(i={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var s=n;(n=P.createElement("html")).innerHTML=s}else n=L(n);var o=i.getNodeKey||H,r=i.onBeforeNodeAdded||D,c=i.onNodeAdded||D,f=i.onBeforeElUpdated||D,u=i.onElUpdated||D,h=i.onBeforeNodeDiscarded||D,l=i.onNodeDiscarded||D,a=i.onBeforeElChildrenUpdated||D,d=!0===i.childrenOnly,p=Object.create(null),v=[];function b(t){v.push(t)}function m(t,e){if(1===t.nodeType)for(var n=t.firstChild;n;){var i=void 0;e&&(i=o(n))?b(i):(l(n),n.firstChild&&m(n,e)),n=n.nextSibling}}function y(t,e,n){!1!==h(t)&&(e&&e.removeChild(t),l(t),m(t,n))}function g(t){c(t);for(var e=t.firstChild;e;){var n=e.nextSibling,i=o(e);if(i){var s=p[i];s&&N(e,s)?(e.parentNode.replaceChild(s,e),w(s,e)):g(e)}else g(e);e=n}}function w(e,n,i){var s=o(n);if(s&&delete p[s],!i){if(!1===f(e,n))return;if(t(e,n),u(e),!1===a(e,n))return}"TEXTAREA"!==e.nodeName?function(t,e){var n,i,s,c,f,u=e.firstChild,h=t.firstChild;t:for(;u;){for(c=u.nextSibling,n=o(u);h;){if(s=h.nextSibling,u.isSameNode&&u.isSameNode(h)){u=c,h=s;continue t}i=o(h);var l=h.nodeType,a=void 0;if(l===u.nodeType&&(1===l?(n?n!==i&&((f=p[n])?s===f?a=!1:(t.insertBefore(f,h),i?b(i):y(h,t,!0),h=f):a=!1):i&&(a=!1),(a=!1!==a&&N(h,u))&&w(h,u)):3!==l&&8!=l||(a=!0,h.nodeValue!==u.nodeValue&&(h.nodeValue=u.nodeValue))),a){u=c,h=s;continue t}i?b(i):y(h,t,!0),h=s}if(n&&(f=p[n])&&N(f,u))t.appendChild(f),w(f,u);else{var d=r(u);!1!==d&&(d&&(u=d),u.actualize&&(u=u.actualize(t.ownerDocument||P)),t.appendChild(u),g(u))}u=c,h=s}!function(t,e,n){for(;e;){var i=e.nextSibling;(n=o(e))?b(n):y(e,t,!0),e=i}}(t,h,i);var v=R[t.nodeName];v&&v(t,e)}(e,n):R.TEXTAREA(e,n)}!function t(e){if(1===e.nodeType||11===e.nodeType)for(var n=e.firstChild;n;){var i=o(n);i&&(p[i]=n),t(n),n=n.nextSibling}}(e);var O,j,k=e,T=k.nodeType,A=n.nodeType;if(!d)if(1===T)1===A?N(e,n)||(l(e),k=function(t,e){for(var n=t.firstChild;n;){var i=n.nextSibling;e.appendChild(n),n=i}return e}(e,(O=n.nodeName,(j=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==j?P.createElementNS(j,O):P.createElement(O)))):k=n;else if(3===T||8===T){if(A===T)return k.nodeValue!==n.nodeValue&&(k.nodeValue=n.nodeValue),k;k=n}if(k===n)l(e);else{if(n.isSameNode&&n.isSameNode(k))return;if(w(k,n,d),v)for(var E=0,_=v.length;E<_;E++){var x=p[v[E]];x&&y(x,x.parentNode,!1)}}return!d&&k!==e&&e.parentNode&&(k.actualize&&(k=k.actualize(e.ownerDocument||P)),e.parentNode.replaceChild(k,e)),k}}((function(t,e){var n,i,s,o,r=e.attributes;if(11!==e.nodeType&&11!==t.nodeType){for(var c=r.length-1;c>=0;c--)i=(n=r[c]).name,s=n.namespaceURI,o=n.value,s?(i=n.localName||i,t.getAttributeNS(s,i)!==o&&("xmlns"===n.prefix&&(i=n.name),t.setAttributeNS(s,i,o))):t.getAttribute(i)!==o&&t.setAttribute(i,o);for(var f=t.attributes,u=f.length-1;u>=0;u--)i=(n=f[u]).name,(s=n.namespaceURI)?(i=n.localName||i,e.hasAttributeNS(s,i)||t.removeAttributeNS(s,i)):e.hasAttribute(i)||t.removeAttribute(i)}}));i.createElement=r,i.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,U(t,n)}else t.innerHTML=e;else f(t,e,n)},i.Fragment=p;export default i;export{A as Component,_ as ROUTER_404_EVENT,E as ROUTER_EVENT,i as app,w as customElement,y as event,g as on,y as update};
//# sourceMappingURL=apprun-html.esm.js.map
