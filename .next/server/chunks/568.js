"use strict";exports.id=568,exports.ids=[568],exports.modules={6568:(e,t,n)=>{n.d(t,{Mz:()=>tx,UC:()=>tw,ZL:()=>tv,bL:()=>tg,l9:()=>ty});var r=n(8009),o=n(1412),i=n(9952),l=n(6004),a=n(1675),s=n(9632),u=n(2534),f=n(96);let c=["top","right","bottom","left"],d=Math.min,p=Math.max,h=Math.round,m=Math.floor,g=e=>({x:e,y:e}),x={left:"right",right:"left",bottom:"top",top:"bottom"},y={start:"end",end:"start"};function v(e,t){return"function"==typeof e?e(t):e}function w(e){return e.split("-")[0]}function b(e){return e.split("-")[1]}function R(e){return"x"===e?"y":"x"}function A(e){return"y"===e?"height":"width"}function C(e){return["top","bottom"].includes(w(e))?"y":"x"}function P(e){return e.replace(/start|end/g,e=>y[e])}function O(e){return e.replace(/left|right|bottom|top/g,e=>x[e])}function E(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function T(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function j(e,t,n){let r,{reference:o,floating:i}=e,l=C(t),a=R(C(t)),s=A(a),u=w(t),f="y"===l,c=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[s]/2-i[s]/2;switch(u){case"top":r={x:c,y:o.y-i.height};break;case"bottom":r={x:c,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:d};break;case"left":r={x:o.x-i.width,y:d};break;default:r={x:o.x,y:o.y}}switch(b(t)){case"start":r[a]-=p*(n&&f?-1:1);break;case"end":r[a]+=p*(n&&f?-1:1)}return r}let L=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:c}=j(u,r,s),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:i,fn:m}=a[n],{x:g,y:x,data:y,reset:v}=await m({x:f,y:c,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:u,platform:l,elements:{reference:e,floating:t}});f=null!=g?g:f,c=null!=x?x:c,p={...p,[i]:{...p[i],...y}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(u=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):v.rects),{x:f,y:c}=j(u,d,s)),n=-1)}return{x:f,y:c,placement:d,strategy:o,middlewareData:p}};async function S(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:d=!1,padding:p=0}=v(t,e),h=E(p),m=a[d?"floating"===c?"reference":"floating":c],g=T(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:s})),x="floating"===c?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,y=await (null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),w=await (null==i.isElement?void 0:i.isElement(y))&&await (null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},b=T(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:y,strategy:s}):x);return{top:(g.top-b.top+h.top)/w.y,bottom:(b.bottom-g.bottom+h.bottom)/w.y,left:(g.left-b.left+h.left)/w.x,right:(b.right-g.right+h.right)/w.x}}function D(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function k(e){return c.some(t=>e[t]>=0)}async function F(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),l=w(n),a=b(n),s="y"===C(n),u=["left","top"].includes(l)?-1:1,f=i&&s?-1:1,c=v(t,e),{mainAxis:d,crossAxis:p,alignmentAxis:h}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&"number"==typeof h&&(p="end"===a?-1*h:h),s?{x:p*f,y:d*u}:{x:d*u,y:p*f}}function N(){return"undefined"!=typeof window}function H(e){return _(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function $(e){var t;return null==(t=(_(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function _(e){return!!N()&&(e instanceof Node||e instanceof M(e).Node)}function W(e){return!!N()&&(e instanceof Element||e instanceof M(e).Element)}function z(e){return!!N()&&(e instanceof HTMLElement||e instanceof M(e).HTMLElement)}function B(e){return!!N()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof M(e).ShadowRoot)}function I(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function V(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function G(e){let t=X(),n=W(e)?q(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function X(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function Y(e){return["html","body","#document"].includes(H(e))}function q(e){return M(e).getComputedStyle(e)}function Z(e){return W(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function U(e){if("html"===H(e))return e;let t=e.assignedSlot||e.parentNode||B(e)&&e.host||$(e);return B(t)?t.host:t}function K(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=U(t);return Y(n)?t.ownerDocument?t.ownerDocument.body:t.body:z(n)&&I(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),l=M(o);if(i){let e=J(l);return t.concat(l,l.visualViewport||[],I(o)?o:[],e&&n?K(e):[])}return t.concat(o,K(o,[],n))}function J(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Q(e){let t=q(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=z(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=h(n)!==i||h(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function ee(e){return W(e)?e:e.contextElement}function et(e){let t=ee(e);if(!z(t))return g(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Q(t),l=(i?h(n.width):n.width)/r,a=(i?h(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let en=g(0);function er(e){let t=M(e);return X()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:en}function eo(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),l=ee(e),a=g(1);t&&(r?W(r)&&(a=et(r)):a=et(e));let s=(void 0===(o=n)&&(o=!1),r&&(!o||r===M(l))&&o)?er(l):g(0),u=(i.left+s.x)/a.x,f=(i.top+s.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(l){let e=M(l),t=r&&W(r)?M(r):r,n=e,o=J(n);for(;o&&r&&t!==n;){let e=et(o),t=o.getBoundingClientRect(),r=q(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;u*=e.x,f*=e.y,c*=e.x,d*=e.y,u+=i,f+=l,o=J(n=M(o))}}return T({width:c,height:d,x:u,y:f})}function ei(e,t){let n=Z(e).scrollLeft;return t?t.left+n:eo($(e)).left+n}function el(e,t,n){void 0===n&&(n=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:ei(e,r)),y:r.top+t.scrollTop}}function ea(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=M(e),r=$(e),o=n.visualViewport,i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;let e=X();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}(e,n);else if("document"===t)r=function(e){let t=$(e),n=Z(e),r=e.ownerDocument.body,o=p(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=p(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+ei(e),a=-n.scrollTop;return"rtl"===q(r).direction&&(l+=p(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}($(e));else if(W(t))r=function(e,t){let n=eo(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=z(e)?et(e):g(1),l=e.clientWidth*i.x;return{width:l,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{let n=er(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return T(r)}function es(e){return"static"===q(e).position}function eu(e,t){if(!z(e)||"fixed"===q(e).position)return null;if(t)return t(e);let n=e.offsetParent;return $(e)===n&&(n=n.ownerDocument.body),n}function ef(e,t){let n=M(e);if(V(e))return n;if(!z(e)){let t=U(e);for(;t&&!Y(t);){if(W(t)&&!es(t))return t;t=U(t)}return n}let r=eu(e,t);for(;r&&["table","td","th"].includes(H(r))&&es(r);)r=eu(r,t);return r&&Y(r)&&es(r)&&!G(r)?n:r||function(e){let t=U(e);for(;z(t)&&!Y(t);){if(G(t))return t;if(V(t))break;t=U(t)}return null}(e)||n}let ec=async function(e){let t=this.getOffsetParent||ef,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=z(t),o=$(t),i="fixed"===n,l=eo(e,!0,i,t),a={scrollLeft:0,scrollTop:0},s=g(0);if(r||!r&&!i){if(("body"!==H(t)||I(o))&&(a=Z(t)),r){let e=eo(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=ei(o))}let u=!o||r||i?g(0):el(o,a);return{x:l.left+a.scrollLeft-s.x-u.x,y:l.top+a.scrollTop-s.y-u.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ed={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,i="fixed"===o,l=$(r),a=!!t&&V(t.floating);if(r===l||a&&i)return n;let s={scrollLeft:0,scrollTop:0},u=g(1),f=g(0),c=z(r);if((c||!c&&!i)&&(("body"!==H(r)||I(l))&&(s=Z(r)),z(r))){let e=eo(r);u=et(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}let d=!l||c||i?g(0):el(l,s,!0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-s.scrollLeft*u.x+f.x+d.x,y:n.y*u.y-s.scrollTop*u.y+f.y+d.y}},getDocumentElement:$,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i=[..."clippingAncestors"===n?V(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=K(e,[],!1).filter(e=>W(e)&&"body"!==H(e)),o=null,i="fixed"===q(e).position,l=i?U(e):e;for(;W(l)&&!Y(l);){let t=q(l),n=G(l);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||I(l)&&!n&&function e(t,n){let r=U(t);return!(r===n||!W(r)||Y(r))&&("fixed"===q(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):o=t,l=U(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],l=i[0],a=i.reduce((e,n)=>{let r=ea(t,n,o);return e.top=p(r.top,e.top),e.right=d(r.right,e.right),e.bottom=d(r.bottom,e.bottom),e.left=p(r.left,e.left),e},ea(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ef,getElementRects:ec,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=Q(e);return{width:t,height:n}},getScale:et,isElement:W,isRTL:function(e){return"rtl"===q(e).direction}},ep=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:s}=t,{element:u,padding:f=0}=v(e,t)||{};if(null==u)return{};let c=E(f),h={x:n,y:r},m=R(C(o)),g=A(m),x=await l.getDimensions(u),y="y"===m,w=y?"clientHeight":"clientWidth",P=i.reference[g]+i.reference[m]-h[m]-i.floating[g],O=h[m]-i.reference[m],T=await (null==l.getOffsetParent?void 0:l.getOffsetParent(u)),j=T?T[w]:0;j&&await (null==l.isElement?void 0:l.isElement(T))||(j=a.floating[w]||i.floating[g]);let L=j/2-x[g]/2-1,S=d(c[y?"top":"left"],L),D=d(c[y?"bottom":"right"],L),k=j-x[g]-D,F=j/2-x[g]/2+(P/2-O/2),N=p(S,d(F,k)),H=!s.arrow&&null!=b(o)&&F!==N&&i.reference[g]/2-(F<S?S:D)-x[g]/2<0,M=H?F<S?F-S:F-k:0;return{[m]:h[m]+M,data:{[m]:N,centerOffset:F-N-M,...H&&{alignmentOffset:M}},reset:H}}}),eh=(e,t,n)=>{let r=new Map,o={platform:ed,...n},i={...o.platform,_c:r};return L(e,t,{...o,platform:i})};var em=n(5740),eg="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ex(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!ex(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!ex(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ey(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ev(e,t){let n=ey(e);return Math.round(t*n)/n}function ew(e){let t=r.useRef(e);return eg(()=>{t.current=e}),t}let eb=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?ep({element:n.current,padding:r}).fn(t):{}:n?ep({element:n,padding:r}).fn(t):{}}}),eR=(e,t)=>({...function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:o,y:i,placement:l,middlewareData:a}=t,s=await F(t,e);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:l}}}}}(e),options:[e,t]}),eA=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=v(e,t),u={x:n,y:r},f=await S(t,s),c=C(w(o)),h=R(c),m=u[h],g=u[c];if(i){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=m+f[e],r=m-f[t];m=p(n,d(m,r))}if(l){let e="y"===c?"top":"left",t="y"===c?"bottom":"right",n=g+f[e],r=g-f[t];g=p(n,d(g,r))}let x=a.fn({...t,[h]:m,[c]:g});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[h]:i,[c]:l}}}}}}(e),options:[e,t]}),eC=(e,t)=>({...function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:o,rects:i,middlewareData:l}=t,{offset:a=0,mainAxis:s=!0,crossAxis:u=!0}=v(e,t),f={x:n,y:r},c=C(o),d=R(c),p=f[d],h=f[c],m=v(a,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(s){let e="y"===d?"height":"width",t=i.reference[d]-i.floating[e]+g.mainAxis,n=i.reference[d]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(u){var x,y;let e="y"===d?"width":"height",t=["top","left"].includes(w(o)),n=i.reference[c]-i.floating[e]+(t&&(null==(x=l.offset)?void 0:x[c])||0)+(t?0:g.crossAxis),r=i.reference[c]+i.reference[e]+(t?0:(null==(y=l.offset)?void 0:y[c])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[d]:p,[c]:h}}}}(e),options:[e,t]}),eP=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r,o,i,l;let{placement:a,middlewareData:s,rects:u,initialPlacement:f,platform:c,elements:d}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:y=!0,...E}=v(e,t);if(null!=(n=s.arrow)&&n.alignmentOffset)return{};let T=w(a),j=C(f),L=w(f)===f,D=await (null==c.isRTL?void 0:c.isRTL(d.floating)),k=m||(L||!y?[O(f)]:function(e){let t=O(e);return[P(e),t,P(t)]}(f)),F="none"!==x;!m&&F&&k.push(...function(e,t,n,r){let o=b(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(w(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(P)))),i}(f,y,x,D));let N=[f,...k],H=await S(t,E),M=[],$=(null==(r=s.flip)?void 0:r.overflows)||[];if(p&&M.push(H[T]),h){let e=function(e,t,n){void 0===n&&(n=!1);let r=b(e),o=R(C(e)),i=A(o),l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=O(l)),[l,O(l)]}(a,u,D);M.push(H[e[0]],H[e[1]])}if($=[...$,{placement:a,overflows:M}],!M.every(e=>e<=0)){let e=((null==(o=s.flip)?void 0:o.index)||0)+1,t=N[e];if(t)return{data:{index:e,overflows:$},reset:{placement:t}};let n=null==(i=$.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(g){case"bestFit":{let e=null==(l=$.filter(e=>{if(F){let t=C(e.placement);return t===j||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=f}if(a!==n)return{reset:{placement:n}}}return{}}}}(e),options:[e,t]}),eO=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var n,r;let o,i;let{placement:l,rects:a,platform:s,elements:u}=t,{apply:f=()=>{},...c}=v(e,t),h=await S(t,c),m=w(l),g=b(l),x="y"===C(l),{width:y,height:R}=a.floating;"top"===m||"bottom"===m?(o=m,i=g===(await (null==s.isRTL?void 0:s.isRTL(u.floating))?"start":"end")?"left":"right"):(i=m,o="end"===g?"top":"bottom");let A=R-h.top-h.bottom,P=y-h.left-h.right,O=d(R-h[o],A),E=d(y-h[i],P),T=!t.middlewareData.shift,j=O,L=E;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(L=P),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(j=A),T&&!g){let e=p(h.left,0),t=p(h.right,0),n=p(h.top,0),r=p(h.bottom,0);x?L=y-2*(0!==e||0!==t?e+t:p(h.left,h.right)):j=R-2*(0!==n||0!==r?n+r:p(h.top,h.bottom))}await f({...t,availableWidth:L,availableHeight:j});let D=await s.getDimensions(u.floating);return y!==D.width||R!==D.height?{reset:{rects:!0}}:{}}}}(e),options:[e,t]}),eE=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...o}=v(e,t);switch(r){case"referenceHidden":{let e=D(await S(t,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:k(e)}}}case"escaped":{let e=D(await S(t,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:k(e)}}}default:return{}}}}}(e),options:[e,t]}),eT=(e,t)=>({...eb(e),options:[e,t]});var ej=n(830),eL=n(5512),eS=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return(0,eL.jsx)(ej.sG.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eL.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eS.displayName="Arrow";var eD=n(447),ek=n(9397),eF="Popper",[eN,eH]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),l=n.length;function a(t){let{scope:n,children:o,...a}=t,s=n?.[e][l]||i,u=r.useMemo(()=>a,Object.values(a));return(0,eL.jsx)(s.Provider,{value:u,children:o})}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){let s=a?.[e][l]||i,u=r.useContext(s);if(u)return u;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}(eF),[eM,e$]=eN(eF),e_=e=>{let{__scopePopper:t,children:n}=e,[o,i]=r.useState(null);return(0,eL.jsx)(eM,{scope:t,anchor:o,onAnchorChange:i,children:n})};e_.displayName=eF;var eW="PopperAnchor",ez=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:o,...l}=e,a=e$(eW,n),s=r.useRef(null),u=(0,i.s)(t,s);return r.useEffect(()=>{a.onAnchorChange(o?.current||s.current)}),o?null:(0,eL.jsx)(ej.sG.div,{...l,ref:u})});ez.displayName=eW;var eB="PopperContent",[eI,eV]=eN(eB),eG=r.forwardRef((e,t)=>{let{__scopePopper:n,side:o="bottom",sideOffset:l=0,align:a="center",alignOffset:s=0,arrowPadding:u=0,avoidCollisions:f=!0,collisionBoundary:c=[],collisionPadding:h=0,sticky:g="partial",hideWhenDetached:x=!1,updatePositionStrategy:y="optimized",onPlaced:v,...w}=e,b=e$(eB,n),[R,A]=r.useState(null),C=(0,i.s)(t,e=>A(e)),[P,O]=r.useState(null),E=function(e){let[t,n]=r.useState(void 0);return(0,ek.N)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(P),T=E?.width??0,j=E?.height??0,L="number"==typeof h?h:{top:0,right:0,bottom:0,left:0,...h},S=Array.isArray(c)?c:[c],D=S.length>0,k={padding:L,boundary:S.filter(eZ),altBoundary:D},{refs:F,floatingStyles:N,placement:H,isPositioned:M,middlewareData:_}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:l,floating:a}={},transform:s=!0,whileElementsMounted:u,open:f}=e,[c,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(o);ex(p,o)||h(o);let[m,g]=r.useState(null),[x,y]=r.useState(null),v=r.useCallback(e=>{e!==A.current&&(A.current=e,g(e))},[]),w=r.useCallback(e=>{e!==C.current&&(C.current=e,y(e))},[]),b=l||m,R=a||x,A=r.useRef(null),C=r.useRef(null),P=r.useRef(c),O=null!=u,E=ew(u),T=ew(i),j=ew(f),L=r.useCallback(()=>{if(!A.current||!C.current)return;let e={placement:t,strategy:n,middleware:p};T.current&&(e.platform=T.current),eh(A.current,C.current,e).then(e=>{let t={...e,isPositioned:!1!==j.current};S.current&&!ex(P.current,t)&&(P.current=t,em.flushSync(()=>{d(t)}))})},[p,t,n,T,j]);eg(()=>{!1===f&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[f]);let S=r.useRef(!1);eg(()=>(S.current=!0,()=>{S.current=!1}),[]),eg(()=>{if(b&&(A.current=b),R&&(C.current=R),b&&R){if(E.current)return E.current(b,R,L);L()}},[b,R,L,E,O]);let D=r.useMemo(()=>({reference:A,floating:C,setReference:v,setFloating:w}),[v,w]),k=r.useMemo(()=>({reference:b,floating:R}),[b,R]),F=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!k.floating)return e;let t=ev(k.floating,c.x),r=ev(k.floating,c.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...ey(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,s,k.floating,c.x,c.y]);return r.useMemo(()=>({...c,update:L,refs:D,elements:k,floatingStyles:F}),[c,L,D,k,F])}({strategy:"fixed",placement:o+("center"!==a?"-"+a:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,f=ee(e),c=i||l?[...f?K(f):[],...K(t)]:[];c.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),l&&e.addEventListener("resize",n)});let h=f&&s?function(e,t){let n,r=null,o=$(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function l(a,s){void 0===a&&(a=!1),void 0===s&&(s=1),i();let{left:u,top:f,width:c,height:h}=e.getBoundingClientRect();if(a||t(),!c||!h)return;let g=m(f),x=m(o.clientWidth-(u+c)),y={rootMargin:-g+"px "+-x+"px "+-m(o.clientHeight-(f+h))+"px "+-m(u)+"px",threshold:p(0,d(1,s))||1},v=!0;function w(e){let t=e[0].intersectionRatio;if(t!==s){if(!v)return l();t?l(!1,t):n=setTimeout(()=>{l(!1,1e-7)},1e3)}v=!1}try{r=new IntersectionObserver(w,{...y,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(w,y)}r.observe(e)}(!0),i}(f,n):null,g=-1,x=null;a&&(x=new ResizeObserver(e=>{let[r]=e;r&&r.target===f&&x&&(x.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=x)||e.observe(t)})),n()}),f&&!u&&x.observe(f),x.observe(t));let y=u?eo(e):null;return u&&function t(){let r=eo(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,o=requestAnimationFrame(t)}(),n(),()=>{var e;c.forEach(e=>{i&&e.removeEventListener("scroll",n),l&&e.removeEventListener("resize",n)}),null==h||h(),null==(e=x)||e.disconnect(),x=null,u&&cancelAnimationFrame(o)}})(...e,{animationFrame:"always"===y}),elements:{reference:b.anchor},middleware:[eR({mainAxis:l+j,alignmentAxis:s}),f&&eA({mainAxis:!0,crossAxis:!1,limiter:"partial"===g?eC():void 0,...k}),f&&eP({...k}),eO({...k,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),P&&eT({element:P,padding:u}),eU({arrowWidth:T,arrowHeight:j}),x&&eE({strategy:"referenceHidden",...k})]}),[W,z]=eK(H),B=(0,eD.c)(v);(0,ek.N)(()=>{M&&B?.()},[M,B]);let I=_.arrow?.x,V=_.arrow?.y,G=_.arrow?.centerOffset!==0,[X,Y]=r.useState();return(0,ek.N)(()=>{R&&Y(window.getComputedStyle(R).zIndex)},[R]),(0,eL.jsx)("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...N,transform:M?N.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:X,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eL.jsx)(eI,{scope:n,placedSide:W,onArrowChange:O,arrowX:I,arrowY:V,shouldHideArrow:G,children:(0,eL.jsx)(ej.sG.div,{"data-side":W,"data-align":z,...w,ref:C,style:{...w.style,animation:M?void 0:"none"}})})})});eG.displayName=eB;var eX="PopperArrow",eY={top:"bottom",right:"left",bottom:"top",left:"right"},eq=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,o=eV(eX,n),i=eY[o.placedSide];return(0,eL.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,eL.jsx)(eS,{...r,ref:t,style:{...r.style,display:"block"}})})});function eZ(e){return null!==e}eq.displayName=eX;var eU=e=>({name:"transformOrigin",options:e,fn(t){let{placement:n,rects:r,middlewareData:o}=t,i=o.arrow?.centerOffset!==0,l=i?0:e.arrowWidth,a=i?0:e.arrowHeight,[s,u]=eK(n),f={start:"0%",center:"50%",end:"100%"}[u],c=(o.arrow?.x??0)+l/2,d=(o.arrow?.y??0)+a/2,p="",h="";return"bottom"===s?(p=i?f:`${c}px`,h=`${-a}px`):"top"===s?(p=i?f:`${c}px`,h=`${r.floating.height+a}px`):"right"===s?(p=`${-a}px`,h=i?f:`${d}px`):"left"===s&&(p=`${r.floating.width+a}px`,h=i?f:`${d}px`),{data:{x:p,y:h}}}});function eK(e){let[t,n="center"]=e.split("-");return[t,n]}var eJ=n(707),eQ=n(8060),e0=n(2705),e1=n(3024),e2=n(2421),e5=n(7783),e7="Popover",[e9,e3]=(0,l.A)(e7,[eH]),e6=eH(),[e4,e8]=e9(e7),te=e=>{let{__scopePopover:t,children:n,open:o,defaultOpen:i,onOpenChange:l,modal:a=!1}=e,s=e6(t),u=r.useRef(null),[c,d]=r.useState(!1),[p=!1,h]=(0,e1.i)({prop:o,defaultProp:i,onChange:l});return(0,eL.jsx)(e_,{...s,children:(0,eL.jsx)(e4,{scope:t,contentId:(0,f.B)(),triggerRef:u,open:p,onOpenChange:h,onOpenToggle:r.useCallback(()=>h(e=>!e),[h]),hasCustomAnchor:c,onCustomAnchorAdd:r.useCallback(()=>d(!0),[]),onCustomAnchorRemove:r.useCallback(()=>d(!1),[]),modal:a,children:n})})};te.displayName=e7;var tt="PopoverAnchor",tn=r.forwardRef((e,t)=>{let{__scopePopover:n,...o}=e,i=e8(tt,n),l=e6(n),{onCustomAnchorAdd:a,onCustomAnchorRemove:s}=i;return r.useEffect(()=>(a(),()=>s()),[a,s]),(0,eL.jsx)(ez,{...l,...o,ref:t})});tn.displayName=tt;var tr="PopoverTrigger",to=r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,l=e8(tr,n),a=e6(n),s=(0,i.s)(t,l.triggerRef),u=(0,eL.jsx)(ej.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":tm(l.open),...r,ref:s,onClick:(0,o.m)(e.onClick,l.onOpenToggle)});return l.hasCustomAnchor?u:(0,eL.jsx)(ez,{asChild:!0,...a,children:u})});to.displayName=tr;var ti="PopoverPortal",[tl,ta]=e9(ti,{forceMount:void 0}),ts=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=e8(ti,t);return(0,eL.jsx)(tl,{scope:t,forceMount:n,children:(0,eL.jsx)(eQ.C,{present:n||i.open,children:(0,eL.jsx)(eJ.Z,{asChild:!0,container:o,children:r})})})};ts.displayName=ti;var tu="PopoverContent",tf=r.forwardRef((e,t)=>{let n=ta(tu,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=e8(tu,e.__scopePopover);return(0,eL.jsx)(eQ.C,{present:r||i.open,children:i.modal?(0,eL.jsx)(tc,{...o,ref:t}):(0,eL.jsx)(td,{...o,ref:t})})});tf.displayName=tu;var tc=r.forwardRef((e,t)=>{let n=e8(tu,e.__scopePopover),l=r.useRef(null),a=(0,i.s)(t,l),s=r.useRef(!1);return r.useEffect(()=>{let e=l.current;if(e)return(0,e2.Eq)(e)},[]),(0,eL.jsx)(e5.A,{as:e0.DX,allowPinchZoom:!0,children:(0,eL.jsx)(tp,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{e.preventDefault(),s.current||n.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;s.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),td=r.forwardRef((e,t)=>{let n=e8(tu,e.__scopePopover),o=r.useRef(!1),i=r.useRef(!1);return(0,eL.jsx)(tp,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||n.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let r=t.target;n.triggerRef.current?.contains(r)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),tp=r.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:l,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,...h}=e,m=e8(tu,n),g=e6(n);return(0,s.Oh)(),(0,eL.jsx)(u.n,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,eL.jsx)(a.qW,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:p,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:d,onDismiss:()=>m.onOpenChange(!1),children:(0,eL.jsx)(eG,{"data-state":tm(m.open),role:"dialog",id:m.contentId,...g,...h,ref:t,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),th="PopoverClose";function tm(e){return e?"open":"closed"}r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=e8(th,n);return(0,eL.jsx)(ej.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>i.onOpenChange(!1))})}).displayName=th,r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=e6(n);return(0,eL.jsx)(eq,{...o,...r,ref:t})}).displayName="PopoverArrow";var tg=te,tx=tn,ty=to,tv=ts,tw=tf}};