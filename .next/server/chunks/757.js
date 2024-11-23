"use strict";exports.id=757,exports.ids=[757],exports.modules={2421:(e,t,n)=>{n.d(t,{Eq:()=>l});var r=new WeakMap,o=new WeakMap,a={},i=0,u=function(e){return e&&(e.host||u(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var s=a[n],d=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(c),a=null!==t&&"false"!==t,i=(r.get(e)||0)+1,u=(s.get(e)||0)+1;r.set(e,i),s.set(e,u),d.push(e),1===i&&a&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),i++,function(){d.forEach(function(e){var t=r.get(e)-1,a=s.get(e)-1;r.set(e,t),s.set(e,a),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),a||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),c(o,a,n,"aria-hidden")):function(){return null}}},7783:(e,t,n)=>{n.d(t,{A:()=>G});var r,o,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var u=("function"==typeof SuppressedError&&SuppressedError,n(8009)),c="right-scroll-bar-position",l="width-before-scroll-bar";function s(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var d="undefined"!=typeof window?u.useLayoutEffect:u.useEffect,f=new WeakMap;function v(e){return e}var p=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=v),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=a({async:!0,ssr:!1},e),o}(),m=function(){},h=u.forwardRef(function(e,t){var n,r,o,c,l=u.useRef(null),v=u.useState({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:m}),h=v[0],y=v[1],g=e.forwardProps,E=e.children,b=e.className,w=e.removeScrollBar,S=e.enabled,C=e.shards,L=e.sideCar,k=e.noIsolation,A=e.inert,x=e.allowPinchZoom,N=e.as,P=e.gapMode,O=i(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=(n=[l,t],r=function(e){return n.forEach(function(t){return s(t,e)})},(o=(0,u.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,c=o.facade,d(function(){var e=f.get(c);if(e){var t=new Set(e),r=new Set(n),o=c.current;t.forEach(function(e){r.has(e)||s(e,null)}),r.forEach(function(e){t.has(e)||s(e,o)})}f.set(c,n)},[n]),c),R=a(a({},O),h);return u.createElement(u.Fragment,null,S&&u.createElement(L,{sideCar:p,removeScrollBar:w,shards:C,noIsolation:k,inert:A,setCallbacks:y,allowPinchZoom:!!x,lockRef:l,gapMode:P}),g?u.cloneElement(u.Children.only(E),a(a({},R),{ref:T})):u.createElement(void 0===N?"div":N,a({},R,{className:b,ref:T}),E))});h.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},h.classNames={fullWidth:l,zeroRight:c};var y=function(e){var t=e.sideCar,n=i(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return u.createElement(r,a({},n))};y.isSideCarExport=!0;var g=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},E=function(){var e=g();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},b=function(){var e=E();return function(t){return e(t.styles,t.dynamic),null}},w={left:0,top:0,right:0,gap:0},S=function(e){return parseInt(e||"",10)||0},C=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[S(n),S(r),S(o)]},L=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return w;var t=C(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},k=b(),A="data-scroll-locked",x=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(A,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(l," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(A,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},N=function(){var e=parseInt(document.body.getAttribute(A)||"0",10);return isFinite(e)?e:0},P=function(){u.useEffect(function(){return document.body.setAttribute(A,(N()+1).toString()),function(){var e=N()-1;e<=0?document.body.removeAttribute(A):document.body.setAttribute(A,e.toString())}},[])},O=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;P();var a=u.useMemo(function(){return L(o)},[o]);return u.createElement(k,{styles:x(a,!t,o,n?"":"!important")})},T=!1;if("undefined"!=typeof window)try{var R=Object.defineProperty({},"passive",{get:function(){return T=!0,!0}});window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch(e){T=!1}var M=!!T&&{passive:!1},D=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},W=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),j(e,r)){var o=F(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},j=function(e,t){return"v"===e?D(t,"overflowY"):D(t,"overflowX")},F=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},I=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var p=F(e,c),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&j(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-u>v)&&(s=!0),s},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},K=function(e){return[e.deltaX,e.deltaY]},X=function(e){return e&&"current"in e?e.current:e},Y=0,z=[];let q=(r=function(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),o=u.useState(Y++)[0],a=u.useState(b)[0],i=u.useRef(e);u.useEffect(function(){i.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(X),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=u.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var o,a=B(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=W(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=W(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return I(v,t,e,"h"===v?c:l,!0)},[]),l=u.useCallback(function(e){if(z.length&&z[z.length-1]===a){var n="deltaY"in e?K(e):B(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(X).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=u.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=u.useCallback(function(e){n.current=B(e),r.current=void 0},[]),f=u.useCallback(function(t){s(t.type,K(t),t.target,c(t,e.lockRef.current))},[]),v=u.useCallback(function(t){s(t.type,B(t),t.target,c(t,e.lockRef.current))},[]);u.useEffect(function(){return z.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",l,M),document.addEventListener("touchmove",l,M),document.addEventListener("touchstart",d,M),function(){z=z.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,M),document.removeEventListener("touchmove",l,M),document.removeEventListener("touchstart",d,M)}},[]);var p=e.removeScrollBar,m=e.inert;return u.createElement(u.Fragment,null,m?u.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?u.createElement(O,{gapMode:e.gapMode}):null)},p.useMedium(r),y);var Z=u.forwardRef(function(e,t){return u.createElement(h,a({},e,{ref:t,sideCar:q}))});Z.classNames=h.classNames;let G=Z},1675:(e,t,n)=>{n.d(t,{qW:()=>f});var r,o=n(8009),a=n(1412),i=n(830),u=n(9952),c=n(447),l=n(5512),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:f,onPointerDownOutside:m,onFocusOutside:h,onInteractOutside:y,onDismiss:g,...E}=e,b=o.useContext(d),[w,S]=o.useState(null),C=w?.ownerDocument??globalThis?.document,[,L]=o.useState({}),k=(0,u.s)(t,e=>S(e)),A=Array.from(b.layers),[x]=[...b.layersWithOutsidePointerEventsDisabled].slice(-1),N=A.indexOf(x),P=w?A.indexOf(w):-1,O=b.layersWithOutsidePointerEventsDisabled.size>0,T=P>=N,R=function(e,t=globalThis?.document){let n=(0,c.c)(e),r=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){p("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",a.current),a.current=r,t.addEventListener("click",a.current,{once:!0})):r()}else t.removeEventListener("click",a.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...b.branches].some(e=>e.contains(t));!T||n||(m?.(e),y?.(e),e.defaultPrevented||g?.())},C),M=function(e,t=globalThis?.document){let n=(0,c.c)(e),r=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...b.branches].some(e=>e.contains(t))||(h?.(e),y?.(e),e.defaultPrevented||g?.())},C);return function(e,t=globalThis?.document){let n=(0,c.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P!==b.layers.size-1||(f?.(e),!e.defaultPrevented&&g&&(e.preventDefault(),g()))},C),o.useEffect(()=>{if(w)return n&&(0===b.layersWithOutsidePointerEventsDisabled.size&&(r=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),b.layersWithOutsidePointerEventsDisabled.add(w)),b.layers.add(w),v(),()=>{n&&1===b.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=r)}},[w,C,n,b]),o.useEffect(()=>()=>{w&&(b.layers.delete(w),b.layersWithOutsidePointerEventsDisabled.delete(w),v())},[w,b]),o.useEffect(()=>{let e=()=>L({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(i.sG.div,{...E,ref:k,style:{pointerEvents:O?T?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.m)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,a.m)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,a.m)(e.onPointerDownCapture,R.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,i.hO)(o,a):o.dispatchEvent(a)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),a=(0,u.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.sG.div,{...e,ref:a})}).displayName="DismissableLayerBranch"},9632:(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n(8009),o=0;function a(){r.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??i()),document.body.insertAdjacentElement("beforeend",e[1]??i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},2534:(e,t,n)=>{n.d(t,{n:()=>d});var r=n(8009),o=n(9952),a=n(830),i=n(447),u=n(5512),c="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:h,onUnmountAutoFocus:y,...g}=e,[E,b]=r.useState(null),w=(0,i.c)(h),S=(0,i.c)(y),C=r.useRef(null),L=(0,o.s)(t,e=>b(e)),k=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(d){let e=function(e){if(k.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:p(C.current,{select:!0})},t=function(e){if(k.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||p(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[d,E,k.paused]),r.useEffect(()=>{if(E){m.add(k);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(c,s);E.addEventListener(c,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(f(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(E))}return()=>{E.removeEventListener(c,w),setTimeout(()=>{let t=new CustomEvent(l,s);E.addEventListener(l,S),E.dispatchEvent(t),t.defaultPrevented||p(e??document.body,{select:!0}),E.removeEventListener(l,S),m.remove(k)},0)}}},[E,w,S,k]);let A=r.useCallback(e=>{if(!n&&!d||k.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[v(t,e),v(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&p(a,{select:!0})):(e.preventDefault(),n&&p(o,{select:!0})):r===t&&e.preventDefault()}},[n,d,k.paused]);return(0,u.jsx)(a.sG.div,{tabIndex:-1,...g,ref:L,onKeyDown:A})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}d.displayName="FocusScope";var m=function(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),(e=h(e,t)).unshift(t)},remove(t){e=h(e,t),e[0]?.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},96:(e,t,n)=>{n.d(t,{B:()=>c});var r,o=n(8009),a=n(9397),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[t,n]=o.useState(i());return(0,a.N)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},707:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8009),o=n(5740),a=n(830),i=n(9397),u=n(5512),c=r.forwardRef((e,t)=>{let{container:n,...c}=e,[l,s]=r.useState(!1);(0,i.N)(()=>s(!0),[]);let d=n||l&&globalThis?.document?.body;return d?o.createPortal((0,u.jsx)(a.sG.div,{...c,ref:t}),d):null});c.displayName="Portal"},3024:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(8009),o=n(447);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[a]=n,i=r.useRef(a),u=(0,o.c)(t);return r.useEffect(()=>{i.current!==a&&(u(a),i.current=a)},[a,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,c=u?e:a,l=(0,o.c)(n);return[c,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[u,e,i,l])]}},2101:(e,t,n)=>{n.d(t,{F:()=>a});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:u}=t,c=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],o=null==u?void 0:u[e];if(null===t)return null;let a=r(t)||r(o);return i[e][a]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,c,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...u,...l}[t]):({...u,...l})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}};