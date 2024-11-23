(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2359:(e,r,t)=>{Promise.resolve().then(t.bind(t,9231))},7396:(e,r,t)=>{"use strict";t.d(r,{default:()=>a.a});var s=t(4839),a=t.n(s)},9231:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g});var s=t(5155),a=t(5565),d=t(7396),n=t(3312),l=t(3900),o=t(6195),i=t(2115),u=t(6046),c=t(5828);let f=(0,c.createServerReference)("409039e891662c6605bfa791d2e53948274f70f378",c.callServer,void 0,c.findSourceMapURL,"loginUser");function g(){let[e,r]=(0,i.useState)(null),t=(0,u.useRouter)();async function c(e){e.preventDefault();let s=new FormData(e.currentTarget),a=await f(s);a.success?t.push("/student/dashboard"):r("general"in a.error?a.error.general:"Login failed")}return(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 dark:bg-gray-800",children:[e&&(0,s.jsx)("div",{className:"p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg",role:"alert",children:"string"==typeof e?e:"Please fix the highlighted fields."}),(0,s.jsxs)("div",{className:"text-center mb-6",children:[(0,s.jsx)(a.default,{src:"/file.svg",alt:"Students Resource Centre Logo",width:100,height:100,className:"mx-auto"}),(0,s.jsx)("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Welcome Back!"}),(0,s.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Log in to access your resources."})]}),(0,s.jsxs)("form",{className:"space-y-4",onSubmit:c,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Label,{htmlFor:"studentNo",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Student Number"}),(0,s.jsx)(l.p,{type:"text",id:"studentNo",name:"studentNo",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Student Number",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Label,{htmlFor:"password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Password"}),(0,s.jsx)(l.p,{type:"password",id:"password",name:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter your password",required:!0})]}),(0,s.jsx)(n.$,{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600",children:"Log In"})]}),(0,s.jsx)("div",{className:"text-sm text-center text-gray-600 dark:text-gray-400 mt-4",children:(0,s.jsx)(d.default,{href:"/auth/forgot_password",className:"text-blue-600 hover:underline dark:text-blue-400",children:"Forgot password?"})}),(0,s.jsxs)("div",{className:"text-sm text-center text-gray-600 dark:text-gray-400 mt-2",children:["Don’t have an account?"," ",(0,s.jsx)(d.default,{href:"/auth/register",className:"text-blue-600 hover:underline dark:text-blue-400",children:"Sign up"})]}),(0,s.jsx)(n.$,{className:"w-full bg-red-100 text-grey-300  py-2 px-4 rounded-md hover:bg-red-300 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600",children:(0,s.jsx)(d.default,{href:"/auth/admin",children:"SignIn as Admin"})})]})})}},3312:(e,r,t)=>{"use strict";t.d(r,{$:()=>i,r:()=>o});var s=t(5155),a=t(2115),d=t(2317),n=t(652),l=t(1567);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=a.forwardRef((e,r)=>{let{className:t,variant:a,size:n,asChild:i=!1,...u}=e,c=i?d.DX:"button";return(0,s.jsx)(c,{className:(0,l.cn)(o({variant:a,size:n,className:t})),ref:r,...u})});i.displayName="Button"},3900:(e,r,t)=>{"use strict";t.d(r,{p:()=>n});var s=t(5155),a=t(2115),d=t(1567);let n=a.forwardRef((e,r)=>{let{className:t,type:a,...n}=e;return(0,s.jsx)("input",{type:a,className:(0,d.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...n})});n.displayName="Input"},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>d});var s=t(3463),a=t(9795);function d(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}},652:(e,r,t)=>{"use strict";t.d(r,{F:()=>d});let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e,r,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,s,a="";if("string"==typeof r||"number"==typeof r)a+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(s=e(r[t]))&&(a&&(a+=" "),a+=s);else for(t in r)r[t]&&(a&&(a+=" "),a+=t)}return a}(e))&&(s&&(s+=" "),s+=r);return s},d=(e,r)=>t=>{var d;if((null==r?void 0:r.variants)==null)return a(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:n,defaultVariants:l}=r,o=Object.keys(n).map(e=>{let r=null==t?void 0:t[e],a=null==l?void 0:l[e];if(null===r)return null;let d=s(r)||s(a);return n[e][d]}),i=t&&Object.entries(t).reduce((e,r)=>{let[t,s]=r;return void 0===s||(e[t]=s),e},{});return a(e,o,null==r?void 0:null===(d=r.compoundVariants)||void 0===d?void 0:d.reduce((e,r)=>{let{class:t,className:s,...a}=r;return Object.entries(a).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...l,...i}[r]):({...l,...i})[r]===t})?[...e,t,s]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},e=>{var r=r=>e(e.s=r);e.O(0,[780,839,149,441,517,358],()=>r(2359)),_N_E=e.O()}]);