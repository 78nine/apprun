!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return(()=>{"use strict";var t={559:(t,e,n)=>{function s(t,...e){return o(e)}function o(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}function i(t,e,...n){const s=o(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)}n.d(e,{HY:()=>s,az:()=>i,yj:()=>a});const r=new WeakMap,a=function(t,e,n={}){if(null==e||!1===e)return;e=d(e,n);const s="SVG"===(null==t?void 0:t.nodeName);t&&(Array.isArray(e)?h(t,e,s):h(t,[e],s))};function c(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(!(2&e._op)&&h(t,e.children,n),!(1&e._op)&&p(t,e.props,n)):t.parentNode.replaceChild(u(e,n),t))}function h(t,e,n){var s;const o=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0,i=(null==e?void 0:e.length)||0,a=Math.min(o,i);for(let s=0;s<a;s++){const o=e[s];if(3===o._op)continue;const i=t.childNodes[s];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.nodeValue=o:t.replaceChild(l(o),i));else if(o instanceof HTMLElement||o instanceof SVGElement)t.insertBefore(o,i);else{const e=o.props&&o.props.key;if(e)if(i.key===e)c(t.childNodes[s],o,n);else{const a=r[e];if(a){const e=a.nextSibling;t.insertBefore(a,i),e?t.insertBefore(i,e):t.appendChild(i),c(t.childNodes[s],o,n)}else t.replaceChild(u(o,n),i)}else c(t.childNodes[s],o,n)}}let h=t.childNodes.length;for(;h>a;)t.removeChild(t.lastChild),h--;if(i>a){const s=document.createDocumentFragment();for(let t=a;t<e.length;t++)s.appendChild(u(e[t],n));t.appendChild(s)}}function l(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(null!=t?t:"")}function u(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(u(t,e)))),n}function p(t,e,n){const s=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(s,e||{}),t._props=e;for(const s in e){const o=e[s];if(s.startsWith("data-")){const e=s.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==o&&(o||""===o?t.dataset[e]=o:delete t.dataset[e])}else if("style"===s)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof o)t.style.cssText=o;else for(const e in o)t.style[e]!==o[e]&&(t.style[e]=o[e]);else if(s.startsWith("xlink")){const e=s.replace("xlink","").toLowerCase();null==o||!1===o?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,o)}else s.startsWith("on")?o&&"function"!=typeof o?"string"==typeof o&&(o?t.setAttribute(s,o):t.removeAttribute(s)):t[s]=o:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(s)||n?t.getAttribute(s)!==o&&(o?t.setAttribute(s,o):t.removeAttribute(s)):t[s]!==o&&(t[s]=o);"key"===s&&o&&(r[o]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function d(t,e,n=0){var s;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>d(t,e,n++)));let o=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(o=function(t,e,n){const{tag:s,props:o,children:i}=t;let r=`_${n}`,a=o&&o.id;a?r=a:a=`_${n}${Date.now()}`;let c="section";o&&o.as&&(c=o.as,delete o.as),e.__componentCache||(e.__componentCache={});let h=e.__componentCache[r];if(!(h&&h instanceof s&&h.element)){const t=document.createElement(c);h=e.__componentCache[r]=new s(Object.assign(Object.assign({},o),{children:i})).start(t)}if(h.mounted){const t=h.mounted(o,i,h.state);void 0!==t&&h.setState(t)}return p(h.element,o,!1),h.element}(t,e,n)),o&&Array.isArray(o.children)){const t=null===(s=o.props)||void 0===s?void 0:s._component;if(t){let e=0;o.children=o.children.map((n=>d(n,t,e++)))}else o.children=o.children.map((t=>d(t,e,n++)))}return o}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{n.r(s),n.d(s,{Component:()=>_,Fragment:()=>r.HY,ROUTER_404_EVENT:()=>b,ROUTER_EVENT:()=>y,app:()=>i,customElement:()=>p,default:()=>O,event:()=>l,on:()=>u,update:()=>l});class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this.getSubscribers(t,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+t),n.forEach((n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):Object.keys(o).length>0?s.apply(this,[...e,o]):s.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout((()=>{clearTimeout(s._t),Object.keys(s).length>0?e.apply(this,[...n,s]):e.apply(this,n)}),s.delay)}query(t,...e){const n=this.getSubscribers(t,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+t);const s=n.map((t=>{const{fn:n,options:s}=t;return Object.keys(s).length>0?n.apply(this,[...e,s]):n.apply(this,e)}));return Promise.all(s)}getSubscribers(t,e){const n=e[t]||[];return t.indexOf("*")<0&&(e[t]=n.filter((t=>!t.options.once))),Object.keys(e).filter((e=>e.endsWith("*")&&t.startsWith(e.replace("*","")))).sort(((t,e)=>e.length-t.length)).forEach((s=>n.push(...e[s].map((e=>Object.assign(Object.assign({},e),{options:Object.assign(Object.assign({},e.options),{event:t})})))))),n}}let e;const o="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;o.app&&o._AppRunVersions?e=o.app:(e=new t,o.app=e,o._AppRunVersions="AppRun-2");const i=e;var r=n(559);const a=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s=n.observedAttributes||[],o=s.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>o[t]||t;const i={};Array.from(this.attributes).forEach((t=>i[this._attrMap(t.name)]=t.value)),s.forEach((t=>{void 0!==this[t]&&(i[t]=this[t]),Object.defineProperty(this,t,{get:()=>i[t],set(e){this.attributeChangedCallback(t,i[t],e)},configurable:!0,enumerable:!0})}));const r=this.children?Array.from(this.children):[];if(r.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},i),{children:r})).mount(this._shadowRoot,n),this._component._props=i,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(i,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,s;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(s=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===s||s.call(n),this._component=null}attributeChangedCallback(t,n,s){if(this._component){const o=this._attrMap(t);this._component._props[o]=s,this._component.run("attributeChanged",o,n,s),s!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}},c=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,a(e,n))},h={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function l(t,e={}){return(n,s,o)=>{const i=t?t.toString():s;return h.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n),o}}function u(t,e={}){return function(n,s){const o=t?t.toString():s;h.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n)}}function p(t,e){return function(n){return c(t,n,e),n}}const d=(t,e)=>(e?t.state[e]:t.state)||"",f=(t,e,n)=>{if(e){const s=t.state||{};s[e]=n,t.setState(s)}else t.setState(n)},m=new Map;i.on("get-components",(t=>t.components=m));const g=t=>t;class _{constructor(e,n,s,o){this.state=e,this.view=n,this.update=s,this.options=o,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){i.render(t,e,this)}_view(t){if(!this.view)return;const e=i.createElement;i.h=i.createElement=(t,n,...s)=>(n&&Object.keys(n).forEach((e=>{e.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[o,...i]=n;"string"==typeof o?e[t]=t=>s.run(o,...i,t):"function"==typeof o&&(e[t]=t=>s.setState(o(s.state,...i,t)))}}else if("$bind"===t){const o=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=d(s,i),e.onclick=t=>f(s,i||t.target.name,t.target.checked);break;case"radio":e.checked=d(s,i)===e.value,e.onclick=t=>f(s,i||t.target.name,t.target.value);break;case"number":case"range":e.value=d(s,i),e.oninput=t=>f(s,i||t.target.name,Number(t.target.value));break;default:e.value=d(s,i),e.oninput=t=>f(s,i||t.target.name,t.target.value)}else"select"===n?(e.value=d(s,i),e.onchange=t=>{t.target.multiple||f(s,i||t.target.name,t.target.value)}):"option"===n?(e.selected=d(s,i),e.onclick=t=>f(s,i||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=d(s,i),e.oninput=t=>f(s,i||t.target.name,t.target.value))}else i.run("$",{key:t,tag:n,props:e,component:s})})(e,n,t,this),delete n[e])})),e(t,n,...s));const n=this.view(t);return i.h=i.createElement=e,n}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(i.debug&&i.run("debug",{component:this,_:n?".":"-",state:t,vdom:n,el:this.element}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}e||this.render(s,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)Promise.all([t,this._state]).then((t=>{t[0]&&this.setState(t[0])})).catch((t=>{throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=g),this.add_actions(),this.state=null!==(s=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==s?s:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),i.debug&&(m.get(t)?m.get(t).push(this):m.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,((...s)=>{i.debug&&i.run("debug",{component:this,_:">",event:t,p:s,current_state:this.state,options:n});const o=e(this.state,...s);i.debug&&i.run("debug",{component:this,_:"<",event:t,p:s,newState:o,state:this.state,options:n}),this.setState(o,n)}),n))}add_actions(){const t=this.update||{};h.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=h.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,s,o]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[s,o]))})):Object.keys(t).forEach((n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach((t=>e[t.trim()]=s))})),e["."]||(e["."]=g),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(t,...e){const n=t.toString();return this.is_global_event(n)?i.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?i.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:e,fn:n}=t;this.is_global_event(e)?i.off(e,n):this._app.off(e,n)}))}}_.__isAppRunComponent=!0;const y="//",b="///",v=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");i.run(e,...n)||i.run(b,e,...n),i.run(y,e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");i.run("/"+n,...s)||i.run(b,"/"+n,...s),i.run(y,"/"+n,...s)}else i.run(t)||i.run(b,t),i.run(y,t)};i.h=i.createElement=r.az,i.render=function(t,e,n){(0,r.yj)(t,e,n)},i.Fragment=r.HY,i.webComponent=c,i.start=(t,e,n,s,o)=>{const i=Object.assign(Object.assign({},o),{render:!0,global_event:!0}),r=new _(e,n,s);return o&&o.rendered&&(r.rendered=o.rendered),r.mount(t,i),r};const w=t=>{};i.on("$",w),i.on("debug",(t=>w)),i.on(y,w),i.on("#",w),i.route=v,i.on("route",(t=>i.route&&i.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{i.route===v&&(window.onpopstate=()=>v(location.hash),document.body.hasAttribute("apprun-no-init")||v(location.hash))}));const O=i;"object"==typeof window&&(window.Component=_,window.React=i,window.on=u,window.customElement=p)})(),s})()}));
//# sourceMappingURL=apprun.js.map