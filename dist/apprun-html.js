!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return(()=>{"use strict";var t={107:(t,e,n)=>{n.d(e,{Component:()=>y,ROUTER_404_EVENT:()=>_,ROUTER_EVENT:()=>v,app:()=>r,customElement:()=>p,default:()=>w,event:()=>d,on:()=>h,update:()=>d});class o{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this.getSubscribers(t,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+t),n.forEach((n=>{const{fn:o,options:i}=n;return i.delay?this.delay(t,o,e,i):Object.keys(i).length>0?o.apply(this,[...e,i]):o.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout((()=>{clearTimeout(o._t),Object.keys(o).length>0?e.apply(this,[...n,o]):e.apply(this,n)}),o.delay)}query(t,...e){const n=this.getSubscribers(t,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+t);const o=n.map((t=>{const{fn:n,options:o}=t;return Object.keys(o).length>0?n.apply(this,[...e,o]):n.apply(this,e)}));return Promise.all(o)}getSubscribers(t,e){const n=e[t]||[];return t.indexOf("*")<0&&(e[t]=n.filter((t=>!t.options.once))),Object.keys(e).filter((e=>e.endsWith("*")&&t.startsWith(e.replace("*","")))).sort(((t,e)=>e.length-t.length)).forEach((o=>n.push(...e[o].map((e=>Object.assign(Object.assign({},e),{options:Object.assign(Object.assign({},e.options),{event:t})})))))),n}}let i;const s="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;s.app&&s._AppRunVersions?i=s.app:(i=new o,s.app=i,s._AppRunVersions="AppRun-2");const r=i;var a=n(559);const c=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o=n.observedAttributes||[],i=o.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>i[t]||t;const s={};Array.from(this.attributes).forEach((t=>s[this._attrMap(t.name)]=t.value)),o.forEach((t=>{void 0!==this[t]&&(s[t]=this[t]),Object.defineProperty(this,t,{get:()=>s[t],set(e){this.attributeChangedCallback(t,s[t],e)},configurable:!0,enumerable:!0})}));const r=this.children?Array.from(this.children):[];if(r.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},s),{children:r})).mount(this._shadowRoot,n),this._component._props=s,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(s,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,o;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(o=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===o||o.call(n),this._component=null}attributeChangedCallback(t,n,o){if(this._component){const i=this._attrMap(t);this._component._props[i]=o,this._component.run("attributeChanged",i,n,o),o!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}},l=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,c(e,n))},u={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function d(t,e={}){return(n,o,i)=>{const s=t?t.toString():o;return u.defineMetadata(`apprun-update:${s}`,{name:s,key:o,options:e},n),i}}function h(t,e={}){return function(n,o){const i=t?t.toString():o;u.defineMetadata(`apprun-update:${i}`,{name:i,key:o,options:e},n)}}function p(t,e){return function(n){return l(t,n,e),n}}const f=(t,e)=>(e?t.state[e]:t.state)||"",m=(t,e,n)=>{if(e){const o=t.state||{};o[e]=n,t.setState(o)}else t.setState(n)},b=new Map;r.on("get-components",(t=>t.components=b));const g=t=>t;class y{constructor(t,e,n,i){this.state=t,this.view=e,this.update=n,this.options=i,this._app=new o,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){r.render(t,e,this)}_view(t){if(!this.view)return;const e=r.createElement;r.h=r.createElement=(t,n,...o)=>(n&&Object.keys(n).forEach((e=>{e.startsWith("$")&&(((t,e,n,o)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>o.run(t,e);else if("string"==typeof n)e[t]=t=>o.run(n,t);else if("function"==typeof n)e[t]=t=>o.setState(n(o.state,t));else if(Array.isArray(n)){const[i,...s]=n;"string"==typeof i?e[t]=t=>o.run(i,...s,t):"function"==typeof i&&(e[t]=t=>o.setState(i(o.state,...s,t)))}}else if("$bind"===t){const i=e.type||"text",s="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(i){case"checkbox":e.checked=f(o,s),e.onclick=t=>m(o,s||t.target.name,t.target.checked);break;case"radio":e.checked=f(o,s)===e.value,e.onclick=t=>m(o,s||t.target.name,t.target.value);break;case"number":case"range":e.value=f(o,s),e.oninput=t=>m(o,s||t.target.name,Number(t.target.value));break;default:e.value=f(o,s),e.oninput=t=>m(o,s||t.target.name,t.target.value)}else"select"===n?(e.value=f(o,s),e.onchange=t=>{t.target.multiple||m(o,s||t.target.name,t.target.value)}):"option"===n?(e.selected=f(o,s),e.onclick=t=>m(o,s||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=f(o,s),e.oninput=t=>m(o,s||t.target.name,t.target.value))}else r.run("$",{key:t,tag:n,props:e,component:o})})(e,n,t,this),delete n[e])})),e(t,n,...o));const n=this.view(t);return r.h=r.createElement=e,n}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(r.debug&&r.run("debug",{component:this,_:n?".":"-",state:t,vdom:n,el:this.element}),"object"!=typeof document)return;const o="string"==typeof this.element?document.getElementById(this.element):this.element;if(o){const t="_c";this.unload?o._component===this&&o.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),o.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(o)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):o.removeAttribute&&o.removeAttribute(t),o._component=this}e||this.render(o,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)Promise.all([t,this._state]).then((t=>{t[0]&&this.setState(t[0])})).catch((t=>{throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,o;return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=g),this.add_actions(),this.state=null!==(o=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==o?o:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),r.debug&&(b.get(t)?b.get(t).push(this):b.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,((...o)=>{r.debug&&r.run("debug",{component:this,_:">",event:t,p:o,current_state:this.state,options:n});const i=e(this.state,...o);r.debug&&r.run("debug",{component:this,_:"<",event:t,p:o,newState:i,state:this.state,options:n}),this.setState(i,n)}),n))}add_actions(){const t=this.update||{};u.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=u.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,o,i]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[o,i]))})):Object.keys(t).forEach((n=>{const o=t[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach((t=>e[t.trim()]=o))})),e["."]||(e["."]=g),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(t,...e){const n=t.toString();return this.is_global_event(n)?r.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?r.on(o,e,n):this._app.on(o,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:e,fn:n}=t;this.is_global_event(e)?r.off(e,n):this._app.off(e,n)}))}}y.__isAppRunComponent=!0;const v="//",_="///",E=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");r.run(e,...n)||r.run(_,e,...n),r.run(v,e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");r.run("/"+n,...o)||r.run(_,"/"+n,...o),r.run(v,"/"+n,...o)}else r.run(t)||r.run(_,t),r.run(v,t)};r.h=r.createElement=a.az,r.render=function(t,e,n){(0,a.yj)(t,e,n)},r.Fragment=a.HY,r.webComponent=l,r.start=(t,e,n,o,i)=>{const s=Object.assign(Object.assign({},i),{render:!0,global_event:!0}),r=new y(e,n,o);return i&&i.rendered&&(r.rendered=i.rendered),r.mount(t,s),r};const A=t=>{};r.on("$",A),r.on("debug",(t=>A)),r.on(v,A),r.on("#",A),r.route=E,r.on("route",(t=>r.route&&r.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{r.route===E&&(window.onpopstate=()=>E(location.hash),document.body.hasAttribute("apprun-no-init")||E(location.hash))}));const w=r;"object"==typeof window&&(window.Component=y,window.React=r,window.on=h,window.customElement=p)},559:(t,e,n)=>{function o(t,...e){return i(e)}function i(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}function s(t,e,...n){const o=i(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error(`Unknown tag in vdom ${t}`)}n.d(e,{HY:()=>o,az:()=>s,yj:()=>a});const r=new WeakMap,a=function(t,e,n={}){if(null==e||!1===e)return;e=p(e,n);const o="SVG"===(null==t?void 0:t.nodeName);t&&(Array.isArray(e)?l(t,e,o):l(t,[e],o))};function c(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,o=`${e.tag||""}`;return n.toUpperCase()===o.toUpperCase()}(t,e)?(!(2&e._op)&&l(t,e.children,n),!(1&e._op)&&h(t,e.props,n)):t.parentNode.replaceChild(d(e,n),t))}function l(t,e,n){var o;const i=(null===(o=t.childNodes)||void 0===o?void 0:o.length)||0,s=(null==e?void 0:e.length)||0,a=Math.min(i,s);for(let o=0;o<a;o++){const i=e[o];if(3===i._op)continue;const s=t.childNodes[o];if("string"==typeof i)s.textContent!==i&&(3===s.nodeType?s.nodeValue=i:t.replaceChild(u(i),s));else if(i instanceof HTMLElement||i instanceof SVGElement)t.insertBefore(i,s);else{const e=i.props&&i.props.key;if(e)if(s.key===e)c(t.childNodes[o],i,n);else{const a=r[e];if(a){const e=a.nextSibling;t.insertBefore(a,s),e?t.insertBefore(s,e):t.appendChild(s),c(t.childNodes[o],i,n)}else t.replaceChild(d(i,n),s)}else c(t.childNodes[o],i,n)}}let l=t.childNodes.length;for(;l>a;)t.removeChild(t.lastChild),l--;if(s>a){const o=document.createDocumentFragment();for(let t=a;t<e.length;t++)o.appendChild(d(e[t],n));t.appendChild(o)}}function u(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(null!=t?t:"")}function d(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return u(t);if(!t.tag||"function"==typeof t.tag)return u(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return h(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(d(t,e)))),n}function h(t,e,n){const o=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(o,e||{}),t._props=e;for(const o in e){const i=e[o];if(o.startsWith("data-")){const e=o.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==i&&(i||""===i?t.dataset[e]=i:delete t.dataset[e])}else if("style"===o)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof i)t.style.cssText=i;else for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e]);else if(o.startsWith("xlink")){const e=o.replace("xlink","").toLowerCase();null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}else o.startsWith("on")?i&&"function"!=typeof i?"string"==typeof i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]=i:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(o)||n?t.getAttribute(o)!==i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]!==i&&(t[o]=i);"key"===o&&i&&(r[i]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function p(t,e,n=0){var o;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>p(t,e,n++)));let i=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:o,props:i,children:s}=t;let r=`_${n}`,a=i&&i.id;a?r=a:a=`_${n}${Date.now()}`;let c="section";i&&i.as&&(c=i.as,delete i.as),e.__componentCache||(e.__componentCache={});let l=e.__componentCache[r];if(!(l&&l instanceof o&&l.element)){const t=document.createElement(c);l=e.__componentCache[r]=new o(Object.assign(Object.assign({},i),{children:s})).start(t)}if(l.mounted){const t=l.mounted(i,s,l.state);void 0!==t&&l.setState(t)}return h(l.element,i,!1),l.element}(t,e,n)),i&&Array.isArray(i.children)){const t=null===(o=i.props)||void 0===o?void 0:o._component;if(t){let e=0;i.children=i.children.map((n=>p(n,t,e++)))}else i.children=i.children.map((t=>p(t,e,n++)))}return i}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{Component:()=>e.Component,ROUTER_404_EVENT:()=>e.ROUTER_404_EVENT,ROUTER_EVENT:()=>e.ROUTER_EVENT,app:()=>e.app,customElement:()=>e.customElement,default:()=>f,event:()=>e.event,on:()=>e.on,update:()=>e.update});var t,e=n(107),i=n(559),s="undefined"==typeof document?void 0:document,r=!!s&&"content"in s.createElement("template"),a=!!s&&s.createRange&&"createContextualFragment"in s.createRange();function c(t,e){var n,o,i=t.nodeName,s=e.nodeName;return i===s||(n=i.charCodeAt(0),o=s.charCodeAt(0),n<=90&&o>=97?i===s.toUpperCase():o<=90&&n>=97&&s===i.toUpperCase())}function l(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var u={OPTION:function(t,e){var n=t.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}l(t,e,"selected")},INPUT:function(t,e){l(t,e,"checked"),l(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var o=t.firstChild;if(o){var i=o.nodeValue;if(i==n||!n&&i==t.placeholder)return;o.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,o,i=-1,s=0,r=t.firstChild;r;)if("OPTGROUP"===(o=r.nodeName&&r.nodeName.toUpperCase()))r=(n=r).firstChild;else{if("OPTION"===o){if(r.hasAttribute("selected")){i=s;break}s++}!(r=r.nextSibling)&&n&&(r=n.nextSibling,n=null)}t.selectedIndex=i}}};function d(){}function h(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}const p=function(e,n,o){if(o||(o={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var i=n;(n=s.createElement("html")).innerHTML=i}else l=(l=n).trim(),n=r?function(t){var e=s.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(l):a?function(e){return t||(t=s.createRange()).selectNode(s.body),t.createContextualFragment(e).childNodes[0]}(l):function(t){var e=s.createElement("body");return e.innerHTML=t,e.childNodes[0]}(l);var l,p=o.getNodeKey||h,f=o.onBeforeNodeAdded||d,m=o.onNodeAdded||d,b=o.onBeforeElUpdated||d,g=o.onElUpdated||d,y=o.onBeforeNodeDiscarded||d,v=o.onNodeDiscarded||d,_=o.onBeforeElChildrenUpdated||d,E=!0===o.childrenOnly,A=Object.create(null),w=[];function C(t){w.push(t)}function N(t,e){if(1===t.nodeType)for(var n=t.firstChild;n;){var o=void 0;e&&(o=p(n))?C(o):(v(n),n.firstChild&&N(n,e)),n=n.nextSibling}}function O(t,e,n){!1!==y(t)&&(e&&e.removeChild(t),v(t),N(t,n))}function S(t){m(t);for(var e=t.firstChild;e;){var n=e.nextSibling,o=p(e);if(o){var i=A[o];i&&c(e,i)?(e.parentNode.replaceChild(i,e),T(i,e)):S(e)}else S(e);e=n}}function T(t,e,n){var o=p(e);if(o&&delete A[o],!n){if(!1===b(t,e))return;if(function(t,e){var n,o,i,s,r=e.attributes;if(11!==e.nodeType&&11!==t.nodeType){for(var a=r.length-1;a>=0;a--)o=(n=r[a]).name,i=n.namespaceURI,s=n.value,i?(o=n.localName||o,t.getAttributeNS(i,o)!==s&&("xmlns"===n.prefix&&(o=n.name),t.setAttributeNS(i,o,s))):t.getAttribute(o)!==s&&t.setAttribute(o,s);for(var c=t.attributes,l=c.length-1;l>=0;l--)o=(n=c[l]).name,(i=n.namespaceURI)?(o=n.localName||o,e.hasAttributeNS(i,o)||t.removeAttributeNS(i,o)):e.hasAttribute(o)||t.removeAttribute(o)}}(t,e),g(t),!1===_(t,e))return}"TEXTAREA"!==t.nodeName?function(t,e){var n,o,i,r,a,l=e.firstChild,d=t.firstChild;t:for(;l;){for(r=l.nextSibling,n=p(l);d;){if(i=d.nextSibling,l.isSameNode&&l.isSameNode(d)){l=r,d=i;continue t}o=p(d);var h=d.nodeType,m=void 0;if(h===l.nodeType&&(1===h?(n?n!==o&&((a=A[n])?i===a?m=!1:(t.insertBefore(a,d),o?C(o):O(d,t,!0),d=a):m=!1):o&&(m=!1),(m=!1!==m&&c(d,l))&&T(d,l)):3!==h&&8!=h||(m=!0,d.nodeValue!==l.nodeValue&&(d.nodeValue=l.nodeValue))),m){l=r,d=i;continue t}o?C(o):O(d,t,!0),d=i}if(n&&(a=A[n])&&c(a,l))t.appendChild(a),T(a,l);else{var b=f(l);!1!==b&&(b&&(l=b),l.actualize&&(l=l.actualize(t.ownerDocument||s)),t.appendChild(l),S(l))}l=r,d=i}!function(t,e,n){for(;e;){var o=e.nextSibling;(n=p(e))?C(n):O(e,t,!0),e=o}}(t,d,o);var g=u[t.nodeName];g&&g(t,e)}(t,e):u.TEXTAREA(t,e)}!function t(e){if(1===e.nodeType||11===e.nodeType)for(var n=e.firstChild;n;){var o=p(n);o&&(A[o]=n),t(n),n=n.nextSibling}}(e);var x,j,k=e,R=k.nodeType,M=n.nodeType;if(!E)if(1===R)1===M?c(e,n)||(v(e),k=function(t,e){for(var n=t.firstChild;n;){var o=n.nextSibling;e.appendChild(n),n=o}return e}(e,(x=n.nodeName,(j=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==j?s.createElementNS(j,x):s.createElement(x)))):k=n;else if(3===R||8===R){if(M===R)return k.nodeValue!==n.nodeValue&&(k.nodeValue=n.nodeValue),k;k=n}if(k===n)v(e);else{if(n.isSameNode&&n.isSameNode(k))return;if(T(k,n,E),w)for(var U=0,V=w.length;U<V;U++){var L=A[w[U]];L&&O(L,L.parentNode,!1)}}return!E&&k!==e&&e.parentNode&&(k.actualize&&(k=k.actualize(e.ownerDocument||s)),e.parentNode.replaceChild(k,e)),k};e.default.createElement=i.az,e.default.render=function(t,e,n){if(t)if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,p(t,n)}else t.innerHTML=e;else(0,i.yj)(t,e,n)},e.default.Fragment=i.HY;const f=e.default})(),o})()}));
//# sourceMappingURL=apprun-html.js.map