"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{5216:(e,t,n)=>{n.d(t,{Mz:()=>tv,UC:()=>tw,ZL:()=>ty,bL:()=>tg,l9:()=>tx});var r=n(2115),o=n(3610),i=n(8068),l=n(8166),a=n(9674),u=n(2292),s=n(196),f=n(7668);let c=["top","right","bottom","left"],d=Math.min,p=Math.max,h=Math.round,m=Math.floor,g=e=>({x:e,y:e}),v={left:"right",right:"left",bottom:"top",top:"bottom"},x={start:"end",end:"start"};function y(e,t){return"function"==typeof e?e(t):e}function w(e){return e.split("-")[0]}function b(e){return e.split("-")[1]}function R(e){return"x"===e?"y":"x"}function A(e){return"y"===e?"height":"width"}function C(e){return["top","bottom"].includes(w(e))?"y":"x"}function P(e){return e.replace(/start|end/g,e=>x[e])}function O(e){return e.replace(/left|right|bottom|top/g,e=>v[e])}function E(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function T(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function j(e,t,n){let r,{reference:o,floating:i}=e,l=C(t),a=R(C(t)),u=A(a),s=w(t),f="y"===l,c=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[u]/2-i[u]/2;switch(s){case"top":r={x:c,y:o.y-i.height};break;case"bottom":r={x:c,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:d};break;case"left":r={x:o.x-i.width,y:d};break;default:r={x:o.x,y:o.y}}switch(b(t)){case"start":r[a]-=p*(n&&f?-1:1);break;case"end":r[a]+=p*(n&&f?-1:1)}return r}let L=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),u=await (null==l.isRTL?void 0:l.isRTL(t)),s=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:c}=j(s,r,u),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:i,fn:m}=a[n],{x:g,y:v,data:x,reset:y}=await m({x:f,y:c,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});f=null!=g?g:f,c=null!=v?v:c,p={...p,[i]:{...p[i],...x}},y&&h<=50&&(h++,"object"==typeof y&&(y.placement&&(d=y.placement),y.rects&&(s=!0===y.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):y.rects),{x:f,y:c}=j(s,d,u)),n=-1)}return{x:f,y:c,placement:d,strategy:o,middlewareData:p}};async function S(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:l,elements:a,strategy:u}=e,{boundary:s="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:d=!1,padding:p=0}=y(t,e),h=E(p),m=a[d?"floating"===c?"reference":"floating":c],g=T(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:s,rootBoundary:f,strategy:u})),v="floating"===c?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,x=await (null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),w=await (null==i.isElement?void 0:i.isElement(x))&&await (null==i.getScale?void 0:i.getScale(x))||{x:1,y:1},b=T(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:x,strategy:u}):v);return{top:(g.top-b.top+h.top)/w.y,bottom:(b.bottom-g.bottom+h.bottom)/w.y,left:(g.left-b.left+h.left)/w.x,right:(b.right-g.right+h.right)/w.x}}function k(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function D(e){return c.some(t=>e[t]>=0)}async function N(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),l=w(n),a=b(n),u="y"===C(n),s=["left","top"].includes(l)?-1:1,f=i&&u?-1:1,c=y(t,e),{mainAxis:d,crossAxis:p,alignmentAxis:h}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&"number"==typeof h&&(p="end"===a?-1*h:h),u?{x:p*f,y:d*s}:{x:d*s,y:p*f}}function F(){return"undefined"!=typeof window}function H(e){return W(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function _(e){var t;return null==(t=(W(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function W(e){return!!F()&&(e instanceof Node||e instanceof M(e).Node)}function z(e){return!!F()&&(e instanceof Element||e instanceof M(e).Element)}function B(e){return!!F()&&(e instanceof HTMLElement||e instanceof M(e).HTMLElement)}function I(e){return!!F()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof M(e).ShadowRoot)}function V(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function $(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function G(e){let t=X(),n=z(e)?q(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function X(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function Y(e){return["html","body","#document"].includes(H(e))}function q(e){return M(e).getComputedStyle(e)}function Z(e){return z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function U(e){if("html"===H(e))return e;let t=e.assignedSlot||e.parentNode||I(e)&&e.host||_(e);return I(t)?t.host:t}function K(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=U(t);return Y(n)?t.ownerDocument?t.ownerDocument.body:t.body:B(n)&&V(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),l=M(o);if(i){let e=J(l);return t.concat(l,l.visualViewport||[],V(o)?o:[],e&&n?K(e):[])}return t.concat(o,K(o,[],n))}function J(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Q(e){let t=q(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=B(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=h(n)!==i||h(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function ee(e){return z(e)?e:e.contextElement}function et(e){let t=ee(e);if(!B(t))return g(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Q(t),l=(i?h(n.width):n.width)/r,a=(i?h(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let en=g(0);function er(e){let t=M(e);return X()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:en}function eo(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),l=ee(e),a=g(1);t&&(r?z(r)&&(a=et(r)):a=et(e));let u=(void 0===(o=n)&&(o=!1),r&&(!o||r===M(l))&&o)?er(l):g(0),s=(i.left+u.x)/a.x,f=(i.top+u.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(l){let e=M(l),t=r&&z(r)?M(r):r,n=e,o=J(n);for(;o&&r&&t!==n;){let e=et(o),t=o.getBoundingClientRect(),r=q(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,f*=e.y,c*=e.x,d*=e.y,s+=i,f+=l,o=J(n=M(o))}}return T({width:c,height:d,x:s,y:f})}function ei(e,t){let n=Z(e).scrollLeft;return t?t.left+n:eo(_(e)).left+n}function el(e,t,n){void 0===n&&(n=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:ei(e,r)),y:r.top+t.scrollTop}}function ea(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=M(e),r=_(e),o=n.visualViewport,i=r.clientWidth,l=r.clientHeight,a=0,u=0;if(o){i=o.width,l=o.height;let e=X();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,u=o.offsetTop)}return{width:i,height:l,x:a,y:u}}(e,n);else if("document"===t)r=function(e){let t=_(e),n=Z(e),r=e.ownerDocument.body,o=p(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=p(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+ei(e),a=-n.scrollTop;return"rtl"===q(r).direction&&(l+=p(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}(_(e));else if(z(t))r=function(e,t){let n=eo(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=B(e)?et(e):g(1),l=e.clientWidth*i.x;return{width:l,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{let n=er(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return T(r)}function eu(e){return"static"===q(e).position}function es(e,t){if(!B(e)||"fixed"===q(e).position)return null;if(t)return t(e);let n=e.offsetParent;return _(e)===n&&(n=n.ownerDocument.body),n}function ef(e,t){let n=M(e);if($(e))return n;if(!B(e)){let t=U(e);for(;t&&!Y(t);){if(z(t)&&!eu(t))return t;t=U(t)}return n}let r=es(e,t);for(;r&&["table","td","th"].includes(H(r))&&eu(r);)r=es(r,t);return r&&Y(r)&&eu(r)&&!G(r)?n:r||function(e){let t=U(e);for(;B(t)&&!Y(t);){if(G(t))return t;if($(t))break;t=U(t)}return null}(e)||n}let ec=async function(e){let t=this.getOffsetParent||ef,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=B(t),o=_(t),i="fixed"===n,l=eo(e,!0,i,t),a={scrollLeft:0,scrollTop:0},u=g(0);if(r||!r&&!i){if(("body"!==H(t)||V(o))&&(a=Z(t)),r){let e=eo(t,!0,i,t);u.x=e.x+t.clientLeft,u.y=e.y+t.clientTop}else o&&(u.x=ei(o))}let s=!o||r||i?g(0):el(o,a);return{x:l.left+a.scrollLeft-u.x-s.x,y:l.top+a.scrollTop-u.y-s.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ed={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,i="fixed"===o,l=_(r),a=!!t&&$(t.floating);if(r===l||a&&i)return n;let u={scrollLeft:0,scrollTop:0},s=g(1),f=g(0),c=B(r);if((c||!c&&!i)&&(("body"!==H(r)||V(l))&&(u=Z(r)),B(r))){let e=eo(r);s=et(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}let d=!l||c||i?g(0):el(l,u,!0);return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-u.scrollLeft*s.x+f.x+d.x,y:n.y*s.y-u.scrollTop*s.y+f.y+d.y}},getDocumentElement:_,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i=[..."clippingAncestors"===n?$(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=K(e,[],!1).filter(e=>z(e)&&"body"!==H(e)),o=null,i="fixed"===q(e).position,l=i?U(e):e;for(;z(l)&&!Y(l);){let t=q(l),n=G(l);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||V(l)&&!n&&function e(t,n){let r=U(t);return!(r===n||!z(r)||Y(r))&&("fixed"===q(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):o=t,l=U(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],l=i[0],a=i.reduce((e,n)=>{let r=ea(t,n,o);return e.top=p(r.top,e.top),e.right=d(r.right,e.right),e.bottom=d(r.bottom,e.bottom),e.left=p(r.left,e.left),e},ea(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ef,getElementRects:ec,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=Q(e);return{width:t,height:n}},getScale:et,isElement:z,isRTL:function(e){return"rtl"===q(e).direction}},ep=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:u}=t,{element:s,padding:f=0}=y(e,t)||{};if(null==s)return{};let c=E(f),h={x:n,y:r},m=R(C(o)),g=A(m),v=await l.getDimensions(s),x="y"===m,w=x?"clientHeight":"clientWidth",P=i.reference[g]+i.reference[m]-h[m]-i.floating[g],O=h[m]-i.reference[m],T=await (null==l.getOffsetParent?void 0:l.getOffsetParent(s)),j=T?T[w]:0;j&&await (null==l.isElement?void 0:l.isElement(T))||(j=a.floating[w]||i.floating[g]);let L=j/2-v[g]/2-1,S=d(c[x?"top":"left"],L),k=d(c[x?"bottom":"right"],L),D=j-v[g]-k,N=j/2-v[g]/2+(P/2-O/2),F=p(S,d(N,D)),H=!u.arrow&&null!=b(o)&&N!==F&&i.reference[g]/2-(N<S?S:k)-v[g]/2<0,M=H?N<S?N-S:N-D:0;return{[m]:h[m]+M,data:{[m]:F,centerOffset:N-F-M,...H&&{alignmentOffset:M}},reset:H}}}),eh=(e,t,n)=>{let r=new Map,o={platform:ed,...n},i={...o.platform,_c:r};return L(e,t,{...o,platform:i})};var em=n(7650),eg="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ev(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!ev(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!ev(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ex(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ey(e,t){let n=ex(e);return Math.round(t*n)/n}function ew(e){let t=r.useRef(e);return eg(()=>{t.current=e}),t}let eb=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?ep({element:n.current,padding:r}).fn(t):{}:n?ep({element:n,padding:r}).fn(t):{}}}),eR=(e,t)=>({...function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:o,y:i,placement:l,middlewareData:a}=t,u=await N(t,e);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:o+u.x,y:i+u.y,data:{...u,placement:l}}}}}(e),options:[e,t]}),eA=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...u}=y(e,t),s={x:n,y:r},f=await S(t,u),c=C(w(o)),h=R(c),m=s[h],g=s[c];if(i){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=m+f[e],r=m-f[t];m=p(n,d(m,r))}if(l){let e="y"===c?"top":"left",t="y"===c?"bottom":"right",n=g+f[e],r=g-f[t];g=p(n,d(g,r))}let v=a.fn({...t,[h]:m,[c]:g});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[h]:i,[c]:l}}}}}}(e),options:[e,t]}),eC=(e,t)=>({...function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:o,rects:i,middlewareData:l}=t,{offset:a=0,mainAxis:u=!0,crossAxis:s=!0}=y(e,t),f={x:n,y:r},c=C(o),d=R(c),p=f[d],h=f[c],m=y(a,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(u){let e="y"===d?"height":"width",t=i.reference[d]-i.floating[e]+g.mainAxis,n=i.reference[d]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(s){var v,x;let e="y"===d?"width":"height",t=["top","left"].includes(w(o)),n=i.reference[c]-i.floating[e]+(t&&(null==(v=l.offset)?void 0:v[c])||0)+(t?0:g.crossAxis),r=i.reference[c]+i.reference[e]+(t?0:(null==(x=l.offset)?void 0:x[c])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[d]:p,[c]:h}}}}(e),options:[e,t]}),eP=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r,o,i,l;let{placement:a,middlewareData:u,rects:s,initialPlacement:f,platform:c,elements:d}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...E}=y(e,t);if(null!=(n=u.arrow)&&n.alignmentOffset)return{};let T=w(a),j=C(f),L=w(f)===f,k=await (null==c.isRTL?void 0:c.isRTL(d.floating)),D=m||(L||!x?[O(f)]:function(e){let t=O(e);return[P(e),t,P(t)]}(f)),N="none"!==v;!m&&N&&D.push(...function(e,t,n,r){let o=b(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(w(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(P)))),i}(f,x,v,k));let F=[f,...D],H=await S(t,E),M=[],_=(null==(r=u.flip)?void 0:r.overflows)||[];if(p&&M.push(H[T]),h){let e=function(e,t,n){void 0===n&&(n=!1);let r=b(e),o=R(C(e)),i=A(o),l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=O(l)),[l,O(l)]}(a,s,k);M.push(H[e[0]],H[e[1]])}if(_=[..._,{placement:a,overflows:M}],!M.every(e=>e<=0)){let e=((null==(o=u.flip)?void 0:o.index)||0)+1,t=F[e];if(t)return{data:{index:e,overflows:_},reset:{placement:t}};let n=null==(i=_.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(g){case"bestFit":{let e=null==(l=_.filter(e=>{if(N){let t=C(e.placement);return t===j||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=f}if(a!==n)return{reset:{placement:n}}}return{}}}}(e),options:[e,t]}),eO=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var n,r;let o,i;let{placement:l,rects:a,platform:u,elements:s}=t,{apply:f=()=>{},...c}=y(e,t),h=await S(t,c),m=w(l),g=b(l),v="y"===C(l),{width:x,height:R}=a.floating;"top"===m||"bottom"===m?(o=m,i=g===(await (null==u.isRTL?void 0:u.isRTL(s.floating))?"start":"end")?"left":"right"):(i=m,o="end"===g?"top":"bottom");let A=R-h.top-h.bottom,P=x-h.left-h.right,O=d(R-h[o],A),E=d(x-h[i],P),T=!t.middlewareData.shift,j=O,L=E;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(L=P),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(j=A),T&&!g){let e=p(h.left,0),t=p(h.right,0),n=p(h.top,0),r=p(h.bottom,0);v?L=x-2*(0!==e||0!==t?e+t:p(h.left,h.right)):j=R-2*(0!==n||0!==r?n+r:p(h.top,h.bottom))}await f({...t,availableWidth:L,availableHeight:j});let k=await u.getDimensions(s.floating);return x!==k.width||R!==k.height?{reset:{rects:!0}}:{}}}}(e),options:[e,t]}),eE=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...o}=y(e,t);switch(r){case"referenceHidden":{let e=k(await S(t,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:D(e)}}}case"escaped":{let e=k(await S(t,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:D(e)}}}default:return{}}}}}(e),options:[e,t]}),eT=(e,t)=>({...eb(e),options:[e,t]});var ej=n(3360),eL=n(5155),eS=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return(0,eL.jsx)(ej.sG.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eL.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eS.displayName="Arrow";var ek=n(1524),eD=n(6611),eN="Popper",[eF,eH]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),l=n.length;function a(t){let{scope:n,children:o,...a}=t,u=n?.[e][l]||i,s=r.useMemo(()=>a,Object.values(a));return(0,eL.jsx)(u.Provider,{value:s,children:o})}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){let u=a?.[e][l]||i,s=r.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}(eN),[eM,e_]=eF(eN),eW=e=>{let{__scopePopper:t,children:n}=e,[o,i]=r.useState(null);return(0,eL.jsx)(eM,{scope:t,anchor:o,onAnchorChange:i,children:n})};eW.displayName=eN;var ez="PopperAnchor",eB=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:o,...l}=e,a=e_(ez,n),u=r.useRef(null),s=(0,i.s)(t,u);return r.useEffect(()=>{a.onAnchorChange((null==o?void 0:o.current)||u.current)}),o?null:(0,eL.jsx)(ej.sG.div,{...l,ref:s})});eB.displayName=ez;var eI="PopperContent",[eV,e$]=eF(eI),eG=r.forwardRef((e,t)=>{var n,o,l,a,u,s,f,c;let{__scopePopper:h,side:g="bottom",sideOffset:v=0,align:x="center",alignOffset:y=0,arrowPadding:w=0,avoidCollisions:b=!0,collisionBoundary:R=[],collisionPadding:A=0,sticky:C="partial",hideWhenDetached:P=!1,updatePositionStrategy:O="optimized",onPlaced:E,...T}=e,j=e_(eI,h),[L,S]=r.useState(null),k=(0,i.s)(t,e=>S(e)),[D,N]=r.useState(null),F=function(e){let[t,n]=r.useState(void 0);return(0,eD.N)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(D),H=null!==(f=null==F?void 0:F.width)&&void 0!==f?f:0,M=null!==(c=null==F?void 0:F.height)&&void 0!==c?c:0,W="number"==typeof A?A:{top:0,right:0,bottom:0,left:0,...A},z=Array.isArray(R)?R:[R],B=z.length>0,I={padding:W,boundary:z.filter(eZ),altBoundary:B},{refs:V,floatingStyles:$,placement:G,isPositioned:X,middlewareData:Y}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:l,floating:a}={},transform:u=!0,whileElementsMounted:s,open:f}=e,[c,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(o);ev(p,o)||h(o);let[m,g]=r.useState(null),[v,x]=r.useState(null),y=r.useCallback(e=>{e!==A.current&&(A.current=e,g(e))},[]),w=r.useCallback(e=>{e!==C.current&&(C.current=e,x(e))},[]),b=l||m,R=a||v,A=r.useRef(null),C=r.useRef(null),P=r.useRef(c),O=null!=s,E=ew(s),T=ew(i),j=ew(f),L=r.useCallback(()=>{if(!A.current||!C.current)return;let e={placement:t,strategy:n,middleware:p};T.current&&(e.platform=T.current),eh(A.current,C.current,e).then(e=>{let t={...e,isPositioned:!1!==j.current};S.current&&!ev(P.current,t)&&(P.current=t,em.flushSync(()=>{d(t)}))})},[p,t,n,T,j]);eg(()=>{!1===f&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[f]);let S=r.useRef(!1);eg(()=>(S.current=!0,()=>{S.current=!1}),[]),eg(()=>{if(b&&(A.current=b),R&&(C.current=R),b&&R){if(E.current)return E.current(b,R,L);L()}},[b,R,L,E,O]);let k=r.useMemo(()=>({reference:A,floating:C,setReference:y,setFloating:w}),[y,w]),D=r.useMemo(()=>({reference:b,floating:R}),[b,R]),N=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!D.floating)return e;let t=ey(D.floating,c.x),r=ey(D.floating,c.y);return u?{...e,transform:"translate("+t+"px, "+r+"px)",...ex(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,u,D.floating,c.x,c.y]);return r.useMemo(()=>({...c,update:L,refs:k,elements:D,floatingStyles:N}),[c,L,k,D,N])}({strategy:"fixed",placement:g+("center"!==x?"-"+x:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,f=ee(e),c=i||l?[...f?K(f):[],...K(t)]:[];c.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),l&&e.addEventListener("resize",n)});let h=f&&u?function(e,t){let n,r=null,o=_(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function l(a,u){void 0===a&&(a=!1),void 0===u&&(u=1),i();let{left:s,top:f,width:c,height:h}=e.getBoundingClientRect();if(a||t(),!c||!h)return;let g=m(f),v=m(o.clientWidth-(s+c)),x={rootMargin:-g+"px "+-v+"px "+-m(o.clientHeight-(f+h))+"px "+-m(s)+"px",threshold:p(0,d(1,u))||1},y=!0;function w(e){let t=e[0].intersectionRatio;if(t!==u){if(!y)return l();t?l(!1,t):n=setTimeout(()=>{l(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(w,{...x,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(w,x)}r.observe(e)}(!0),i}(f,n):null,g=-1,v=null;a&&(v=new ResizeObserver(e=>{let[r]=e;r&&r.target===f&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),n()}),f&&!s&&v.observe(f),v.observe(t));let x=s?eo(e):null;return s&&function t(){let r=eo(e);x&&(r.x!==x.x||r.y!==x.y||r.width!==x.width||r.height!==x.height)&&n(),x=r,o=requestAnimationFrame(t)}(),n(),()=>{var e;c.forEach(e=>{i&&e.removeEventListener("scroll",n),l&&e.removeEventListener("resize",n)}),null==h||h(),null==(e=v)||e.disconnect(),v=null,s&&cancelAnimationFrame(o)}}(...t,{animationFrame:"always"===O})},elements:{reference:j.anchor},middleware:[eR({mainAxis:v+M,alignmentAxis:y}),b&&eA({mainAxis:!0,crossAxis:!1,limiter:"partial"===C?eC():void 0,...I}),b&&eP({...I}),eO({...I,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:o}=e,{width:i,height:l}=n.reference,a=t.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(o,"px")),a.setProperty("--radix-popper-anchor-width","".concat(i,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&eT({element:D,padding:w}),eU({arrowWidth:H,arrowHeight:M}),P&&eE({strategy:"referenceHidden",...I})]}),[q,Z]=eK(G),U=(0,ek.c)(E);(0,eD.N)(()=>{X&&(null==U||U())},[X,U]);let J=null===(n=Y.arrow)||void 0===n?void 0:n.x,Q=null===(o=Y.arrow)||void 0===o?void 0:o.y,et=(null===(l=Y.arrow)||void 0===l?void 0:l.centerOffset)!==0,[en,er]=r.useState();return(0,eD.N)(()=>{L&&er(window.getComputedStyle(L).zIndex)},[L]),(0,eL.jsx)("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:X?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,"--radix-popper-transform-origin":[null===(a=Y.transformOrigin)||void 0===a?void 0:a.x,null===(u=Y.transformOrigin)||void 0===u?void 0:u.y].join(" "),...(null===(s=Y.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eL.jsx)(eV,{scope:h,placedSide:q,onArrowChange:N,arrowX:J,arrowY:Q,shouldHideArrow:et,children:(0,eL.jsx)(ej.sG.div,{"data-side":q,"data-align":Z,...T,ref:k,style:{...T.style,animation:X?void 0:"none"}})})})});eG.displayName=eI;var eX="PopperArrow",eY={top:"bottom",right:"left",bottom:"top",left:"right"},eq=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,o=e$(eX,n),i=eY[o.placedSide];return(0,eL.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,eL.jsx)(eS,{...r,ref:t,style:{...r.style,display:"block"}})})});function eZ(e){return null!==e}eq.displayName=eX;var eU=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;let{placement:a,rects:u,middlewareData:s}=t,f=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[p,h]=eK(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(i=null===(r=s.arrow)||void 0===r?void 0:r.x)&&void 0!==i?i:0)+c/2,v=(null!==(l=null===(o=s.arrow)||void 0===o?void 0:o.y)&&void 0!==l?l:0)+d/2,x="",y="";return"bottom"===p?(x=f?m:"".concat(g,"px"),y="".concat(-d,"px")):"top"===p?(x=f?m:"".concat(g,"px"),y="".concat(u.floating.height+d,"px")):"right"===p?(x="".concat(-d,"px"),y=f?m:"".concat(v,"px")):"left"===p&&(x="".concat(u.floating.width+d,"px"),y=f?m:"".concat(v,"px")),{data:{x,y}}}});function eK(e){let[t,n="center"]=e.split("-");return[t,n]}var eJ=n(7323),eQ=n(7028),e0=n(2317),e1=n(1488),e2=n(5587),e5=n(4065),e6="Popover",[e3,e8]=(0,l.A)(e6,[eH]),e7=eH(),[e9,e4]=e3(e6),te=e=>{let{__scopePopover:t,children:n,open:o,defaultOpen:i,onOpenChange:l,modal:a=!1}=e,u=e7(t),s=r.useRef(null),[c,d]=r.useState(!1),[p=!1,h]=(0,e1.i)({prop:o,defaultProp:i,onChange:l});return(0,eL.jsx)(eW,{...u,children:(0,eL.jsx)(e9,{scope:t,contentId:(0,f.B)(),triggerRef:s,open:p,onOpenChange:h,onOpenToggle:r.useCallback(()=>h(e=>!e),[h]),hasCustomAnchor:c,onCustomAnchorAdd:r.useCallback(()=>d(!0),[]),onCustomAnchorRemove:r.useCallback(()=>d(!1),[]),modal:a,children:n})})};te.displayName=e6;var tt="PopoverAnchor",tn=r.forwardRef((e,t)=>{let{__scopePopover:n,...o}=e,i=e4(tt,n),l=e7(n),{onCustomAnchorAdd:a,onCustomAnchorRemove:u}=i;return r.useEffect(()=>(a(),()=>u()),[a,u]),(0,eL.jsx)(eB,{...l,...o,ref:t})});tn.displayName=tt;var tr="PopoverTrigger",to=r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,l=e4(tr,n),a=e7(n),u=(0,i.s)(t,l.triggerRef),s=(0,eL.jsx)(ej.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":tm(l.open),...r,ref:u,onClick:(0,o.m)(e.onClick,l.onOpenToggle)});return l.hasCustomAnchor?s:(0,eL.jsx)(eB,{asChild:!0,...a,children:s})});to.displayName=tr;var ti="PopoverPortal",[tl,ta]=e3(ti,{forceMount:void 0}),tu=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=e4(ti,t);return(0,eL.jsx)(tl,{scope:t,forceMount:n,children:(0,eL.jsx)(eQ.C,{present:n||i.open,children:(0,eL.jsx)(eJ.Z,{asChild:!0,container:o,children:r})})})};tu.displayName=ti;var ts="PopoverContent",tf=r.forwardRef((e,t)=>{let n=ta(ts,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=e4(ts,e.__scopePopover);return(0,eL.jsx)(eQ.C,{present:r||i.open,children:i.modal?(0,eL.jsx)(tc,{...o,ref:t}):(0,eL.jsx)(td,{...o,ref:t})})});tf.displayName=ts;var tc=r.forwardRef((e,t)=>{let n=e4(ts,e.__scopePopover),l=r.useRef(null),a=(0,i.s)(t,l),u=r.useRef(!1);return r.useEffect(()=>{let e=l.current;if(e)return(0,e2.Eq)(e)},[]),(0,eL.jsx)(e5.A,{as:e0.DX,allowPinchZoom:!0,children:(0,eL.jsx)(tp,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),u.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;u.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),td=r.forwardRef((e,t)=>{let n=e4(ts,e.__scopePopover),o=r.useRef(!1),i=r.useRef(!1);return(0,eL.jsx)(tp,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,l;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:t=>{var r,l;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let a=t.target;(null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),tp=r.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:l,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,...h}=e,m=e4(ts,n),g=e7(n);return(0,u.Oh)(),(0,eL.jsx)(s.n,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,eL.jsx)(a.qW,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:p,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:d,onDismiss:()=>m.onOpenChange(!1),children:(0,eL.jsx)(eG,{"data-state":tm(m.open),role:"dialog",id:m.contentId,...g,...h,ref:t,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),th="PopoverClose";function tm(e){return e?"open":"closed"}r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=e4(th,n);return(0,eL.jsx)(ej.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>i.onOpenChange(!1))})}).displayName=th,r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=e7(n);return(0,eL.jsx)(eq,{...o,...r,ref:t})}).displayName="PopoverArrow";var tg=te,tv=tn,tx=to,ty=tu,tw=tf}}]);