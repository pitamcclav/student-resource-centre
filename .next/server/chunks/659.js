"use strict";exports.id=659,exports.ids=[659],exports.modules={8755:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(1680).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1675:(e,t,n)=>{n.d(t,{qW:()=>f});var r,o=n(8009),i=n(1412),a=n(830),s=n(9952),u=n(447),l=n(5512),c="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:w,onInteractOutside:h,onDismiss:y,...g}=e,E=o.useContext(d),[b,x]=o.useState(null),C=b?.ownerDocument??globalThis?.document,[,R]=o.useState({}),N=(0,s.s)(t,e=>x(e)),j=Array.from(E.layers),[M]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),P=j.indexOf(M),T=b?j.indexOf(b):-1,L=E.layersWithOutsidePointerEventsDisabled.size>0,D=T>=P,S=function(e,t=globalThis?.document){let n=(0,u.c)(e),r=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){m("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!D||n||(p?.(e),h?.(e),e.defaultPrevented||y?.())},C),k=function(e,t=globalThis?.document){let n=(0,u.c)(e),r=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(w?.(e),h?.(e),e.defaultPrevented||y?.())},C);return function(e,t=globalThis?.document){let n=(0,u.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{T!==E.layers.size-1||(f?.(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},C),o.useEffect(()=>{if(b)return n&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(b)),E.layers.add(b),v(),()=>{n&&1===E.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=r)}},[b,C,n,E]),o.useEffect(()=>()=>{b&&(E.layers.delete(b),E.layersWithOutsidePointerEventsDisabled.delete(b),v())},[b,E]),o.useEffect(()=>{let e=()=>R({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,l.jsx)(a.sG.div,{...g,ref:N,style:{pointerEvents:L?D?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.m)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,i.m)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,i.m)(e.onPointerDownCapture,S.onPointerDownCapture)})});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.hO)(o,i):o.dispatchEvent(i)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),i=(0,s.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(a.sG.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},96:(e,t,n)=>{n.d(t,{B:()=>u});var r,o=n(8009),i=n(9397),a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),s=0;function u(e){let[t,n]=o.useState(a());return(0,i.N)(()=>{e||n(e=>e??String(s++))},[e]),e||(t?`radix-${t}`:"")}},2709:(e,t,n)=>{n.d(t,{UC:()=>eg,C1:()=>ey,q7:()=>ep,N_:()=>eh,B8:()=>em,bL:()=>ev,l9:()=>ew,LM:()=>eE});var r=n(8009),o=n(5740),i=n(6004),a=n(1412),s=n(830),u=n(3024),l=n(9952),c=n(9018),d=n(8060),f=n(96),v=n(5512),m=n(2705);function p(e){let t=e+"CollectionProvider",[n,o]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),a=n.length;function s(t){let{scope:n,children:o,...s}=t,u=n?.[e][a]||i,l=r.useMemo(()=>s,Object.values(s));return(0,v.jsx)(u.Provider,{value:l,children:o})}return n=[...n,o],s.displayName=t+"Provider",[s,function(n,s){let u=s?.[e][a]||i,l=r.useContext(u);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return(0,v.jsx)(i,{scope:t,itemMap:a,collectionRef:o,children:n})};s.displayName=t;let u=e+"CollectionSlot",c=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=a(u,n),i=(0,l.s)(t,o.collectionRef);return(0,v.jsx)(m.DX,{ref:i,children:r})});c.displayName=u;let d=e+"CollectionItemSlot",f="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,s=r.useRef(null),u=(0,l.s)(t,s),c=a(d,n);return r.useEffect(()=>(c.itemMap.set(s,{ref:s,...i}),()=>void c.itemMap.delete(s))),(0,v.jsx)(m.DX,{[f]:"",ref:u,children:o})});return p.displayName=d,[{Provider:s,Slot:c,ItemSlot:p},function(t){let n=a(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${f}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}var w=n(1675),h=n(9397),y=n(447),g=r.forwardRef((e,t)=>(0,v.jsx)(s.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));g.displayName="VisuallyHidden";var E="NavigationMenu",[b,x,C]=p(E),[R,N,j]=p(E),[M,P]=(0,i.A)(E,[C,j]),[T,L]=M(E),[D,S]=M(E),k=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:i,defaultValue:a,delayDuration:d=200,skipDelayDuration:f=300,orientation:m="horizontal",dir:p,...w}=e,[h,y]=r.useState(null),g=(0,l.s)(t,e=>y(e)),E=(0,c.jH)(p),b=r.useRef(0),x=r.useRef(0),C=r.useRef(0),[R,N]=r.useState(!0),[j="",M]=(0,u.i)({prop:o,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(C.current),t&&N(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>N(!0),f)),i?.(e)},defaultProp:a}),P=r.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>M(""),150)},[M]),T=r.useCallback(e=>{window.clearTimeout(x.current),M(e)},[M]),L=r.useCallback(e=>{j===e?window.clearTimeout(x.current):b.current=window.setTimeout(()=>{window.clearTimeout(x.current),M(e)},d)},[j,M,d]);return r.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(x.current),window.clearTimeout(C.current)},[]),(0,v.jsx)(A,{scope:n,isRootMenu:!0,value:j,dir:E,orientation:m,rootNavigationMenu:h,onTriggerEnter:e=>{window.clearTimeout(b.current),R?L(e):T(e)},onTriggerLeave:()=>{window.clearTimeout(b.current),P()},onContentEnter:()=>window.clearTimeout(x.current),onContentLeave:P,onItemSelect:e=>{M(t=>t===e?"":e)},onItemDismiss:()=>M(""),children:(0,v.jsx)(s.sG.nav,{"aria-label":"Main","data-orientation":m,dir:E,...w,ref:g})})});k.displayName=E;var O="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",...l}=e,c=L(O,n),[d="",f]=(0,u.i)({prop:r,onChange:o,defaultProp:i});return(0,v.jsx)(A,{scope:n,isRootMenu:!1,value:d,dir:c.dir,orientation:a,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,v.jsx)(s.sG.div,{"data-orientation":a,...l,ref:t})})}).displayName=O;var A=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:i,orientation:a,children:s,value:u,onItemSelect:l,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:m,onContentEnter:p,onContentLeave:w}=e,[h,g]=r.useState(null),[E,x]=r.useState(new Map),[C,R]=r.useState(null);return(0,v.jsx)(T,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:function(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,f.B)(),dir:i,orientation:a,viewport:h,onViewportChange:g,indicatorTrack:C,onIndicatorTrackChange:R,onTriggerEnter:(0,y.c)(d),onTriggerLeave:(0,y.c)(m),onContentEnter:(0,y.c)(p),onContentLeave:(0,y.c)(w),onItemSelect:(0,y.c)(l),onItemDismiss:(0,y.c)(c),onViewportContentChange:r.useCallback((e,t)=>{x(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{x(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,v.jsx)(b.Provider,{scope:t,children:(0,v.jsx)(D,{scope:t,items:E,children:s})})})},I="NavigationMenuList",_=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=L(I,n),i=(0,v.jsx)(s.sG.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,v.jsx)(s.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,v.jsx)(b.Slot,{scope:n,children:o.isRootMenu?(0,v.jsx)(er,{asChild:!0,children:i}):i})})});_.displayName=I;var F="NavigationMenuItem",[G,K]=M(F),W=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...i}=e,a=(0,f.B)(),u=r.useRef(null),l=r.useRef(null),c=r.useRef(null),d=r.useRef(()=>{}),m=r.useRef(!1),p=r.useCallback((e="start")=>{if(u.current){d.current();let t=ea(u.current);t.length&&es("start"===e?t:t.reverse())}},[]),w=r.useCallback(()=>{if(u.current){let e=ea(u.current);e.length&&(d.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,v.jsx)(G,{scope:n,value:o||a||"LEGACY_REACT_AUTO_VALUE",triggerRef:l,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:m,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:w,onContentFocusOutside:w,children:(0,v.jsx)(s.sG.li,{...i,ref:t})})});W.displayName=F;var $="NavigationMenuTrigger",z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...i}=e,u=L($,e.__scopeNavigationMenu),c=K($,e.__scopeNavigationMenu),d=r.useRef(null),f=(0,l.s)(d,c.triggerRef,t),m=ec(u.baseId,c.value),p=ed(u.baseId,c.value),w=r.useRef(!1),h=r.useRef(!1),y=c.value===u.value;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.ItemSlot,{scope:n,value:c.value,children:(0,v.jsx)(ei,{asChild:!0,children:(0,v.jsx)(s.sG.button,{id:m,disabled:o,"data-disabled":o?"":void 0,"data-state":el(y),"aria-expanded":y,"aria-controls":p,...i,ref:f,onPointerEnter:(0,a.m)(e.onPointerEnter,()=>{h.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,a.m)(e.onPointerMove,ef(()=>{o||h.current||c.wasEscapeCloseRef.current||w.current||(u.onTriggerEnter(c.value),w.current=!0)})),onPointerLeave:(0,a.m)(e.onPointerLeave,ef(()=>{o||(u.onTriggerLeave(),w.current=!1)})),onClick:(0,a.m)(e.onClick,()=>{u.onItemSelect(c.value),h.current=y}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];y&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),y&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===d.current,o=t?.contains(n);(r||!o)&&c.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,v.jsx)("span",{"aria-owns":p})]})]})});z.displayName=$;var V="navigationMenu.linkSelect",B=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return(0,v.jsx)(ei,{asChild:!0,children:(0,v.jsx)(s.sG.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:(0,a.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(V,{bubbles:!0,cancelable:!0});if(t.addEventListener(V,e=>o?.(e),{once:!0}),(0,s.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(Q,{bubbles:!0,cancelable:!0});(0,s.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});B.displayName="NavigationMenuLink";var q="NavigationMenuIndicator",H=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,i=L(q,e.__scopeNavigationMenu),a=!!i.value;return i.indicatorTrack?o.createPortal((0,v.jsx)(d.C,{present:n||a,children:(0,v.jsx)(U,{...r,ref:t})}),i.indicatorTrack):null});H.displayName=q;var U=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,i=L(q,n),a=x(n),[u,l]=r.useState(null),[c,d]=r.useState(null),f="horizontal"===i.orientation,m=!!i.value;r.useEffect(()=>{let e=a(),t=e.find(e=>e.value===i.value)?.ref.current;t&&l(t)},[a,i.value]);let p=()=>{u&&d({size:f?u.offsetWidth:u.offsetHeight,offset:f?u.offsetLeft:u.offsetTop})};return eu(u,p),eu(i.indicatorTrack,p),c?(0,v.jsx)(s.sG.div,{"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":i.orientation,...o,ref:t,style:{position:"absolute",...f?{left:0,width:c.size+"px",transform:`translateX(${c.offset}px)`}:{top:0,height:c.size+"px",transform:`translateY(${c.offset}px)`},...o.style}}):null}),X="NavigationMenuContent",Y=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=L(X,e.__scopeNavigationMenu),i=K(X,e.__scopeNavigationMenu),s=(0,l.s)(i.contentRef,t),u=i.value===o.value,c={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?(0,v.jsx)(J,{forceMount:n,...c,ref:s}):(0,v.jsx)(d.C,{present:n||u,children:(0,v.jsx)(Z,{"data-state":el(u),...c,ref:s,onPointerEnter:(0,a.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ef(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...c.style}})})});Y.displayName=X;var J=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=L(X,e.__scopeNavigationMenu);return(0,h.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,h.N)(()=>()=>r(e.value),[e.value,r]),null}),Q="navigationMenu.rootContentDismiss",Z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:i,focusProxyRef:s,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:d,...f}=e,m=L(X,n),p=r.useRef(null),h=(0,l.s)(p,t),y=ec(m.baseId,o),g=ed(m.baseId,o),E=x(n),b=r.useRef(null),{onItemDismiss:C}=m;r.useEffect(()=>{let e=p.current;if(m.isRootMenu&&e){let t=()=>{C(),c(),e.contains(document.activeElement)&&i.current?.focus()};return e.addEventListener(Q,t),()=>e.removeEventListener(Q,t)}},[m.isRootMenu,e.value,i,C,c]);let R=r.useMemo(()=>{let e=E().map(e=>e.value);"rtl"===m.dir&&e.reverse();let t=e.indexOf(m.value),n=e.indexOf(m.previousValue),r=o===m.value,i=n===e.indexOf(o);if(!r&&!i)return b.current;let a=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return b.current=a,a},[m.previousValue,m.value,m.dir,E,o]);return(0,v.jsx)(er,{asChild:!0,children:(0,v.jsx)(w.qW,{id:g,"aria-labelledby":y,"data-motion":R,"data-orientation":m.orientation,...f,ref:h,disableOutsidePointerEvents:!1,onDismiss:()=>{let e=new Event(Q,{bubbles:!0,cancelable:!0});p.current?.dispatchEvent(e)},onFocusOutside:(0,a.m)(e.onFocusOutside,e=>{d();let t=e.target;m.rootNavigationMenu?.contains(t)&&e.preventDefault()}),onPointerDownOutside:(0,a.m)(e.onPointerDownOutside,e=>{let t=e.target,n=E().some(e=>e.ref.current?.contains(t)),r=m.isRootMenu&&m.viewport?.contains(t);(n||r||!m.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),n=document.activeElement,r=t.findIndex(e=>e===n);es(e.shiftKey?t.slice(0,r).reverse():t.slice(r+1,t.length))?e.preventDefault():s.current?.focus()}}),onEscapeKeyDown:(0,a.m)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),ee="NavigationMenuViewport",et=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!L(ee,e.__scopeNavigationMenu).value;return(0,v.jsx)(d.C,{present:n||o,children:(0,v.jsx)(en,{...r,ref:t})})});et.displayName=ee;var en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...i}=e,u=L(ee,n),c=(0,l.s)(t,u.onViewportChange),f=S(X,e.__scopeNavigationMenu),[m,p]=r.useState(null),[w,h]=r.useState(null),y=m?m?.width+"px":void 0,g=m?m?.height+"px":void 0,E=!!u.value,b=E?u.value:u.previousValue;return eu(w,()=>{w&&p({width:w.offsetWidth,height:w.offsetHeight})}),(0,v.jsx)(s.sG.div,{"data-state":el(E),"data-orientation":u.orientation,...i,ref:c,style:{pointerEvents:!E&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":g,...i.style},onPointerEnter:(0,a.m)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ef(u.onContentLeave)),children:Array.from(f.items).map(([e,{ref:t,forceMount:n,...r}])=>{let o=b===e;return(0,v.jsx)(d.C,{present:n||o,children:(0,v.jsx)(Z,{...r,ref:(0,l.t)(t,e=>{o&&e&&h(e)})})},e)})})}),er=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=L("FocusGroup",n);return(0,v.jsx)(R.Provider,{scope:n,children:(0,v.jsx)(R.Slot,{scope:n,children:(0,v.jsx)(s.sG.div,{dir:o.dir,...r,ref:t})})})}),eo=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ei=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=N(n),i=L("FocusGroupItem",n);return(0,v.jsx)(R.ItemSlot,{scope:n,children:(0,v.jsx)(s.sG.button,{...r,ref:t,onKeyDown:(0,a.m)(e.onKeyDown,e=>{if(["Home","End",...eo].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),eo.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>es(t)),e.preventDefault()}})})})});function ea(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function es(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eu(e,t){let n=(0,y.c)(t);(0,h.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function el(e){return e?"open":"closed"}function ec(e,t){return`${e}-trigger-${t}`}function ed(e,t){return`${e}-content-${t}`}function ef(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ev=k,em=_,ep=W,ew=z,eh=B,ey=H,eg=Y,eE=et},3024:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(8009),o=n(447);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,a]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,a=r.useRef(i),s=(0,o.c)(t);return r.useEffect(()=>{a.current!==i&&(s(i),a.current=i)},[i,a,s]),n}({defaultProp:t,onChange:n}),s=void 0!==e,u=s?e:i,l=(0,o.c)(n);return[u,r.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else a(t)},[s,e,a,l])]}},2101:(e,t,n)=>{n.d(t,{F:()=>i});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:s}=t,u=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],o=null==s?void 0:s[e];if(null===t)return null;let i=r(t)||r(o);return a[e][i]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,u,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...s,...l}[t]):({...s,...l})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}};