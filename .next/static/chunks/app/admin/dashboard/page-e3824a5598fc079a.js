(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{802:(e,t,a)=>{Promise.resolve().then(a.bind(a,201))},201:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(5155),r=a(9749),d=a(2115),n=a(4984),l=a(1621),o=a(2423),i=a(1567),c=a(3312),m=a(3518),x=a(6967),u=a(3237);function f(e){let{className:t,classNames:a,showOutsideDays:r=!0,...d}=e;return(0,s.jsx)(u.hv,{showOutsideDays:r,className:(0,i.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,i.cn)((0,c.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:(0,i.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md","range"===d.mode?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:(0,i.cn)((0,c.r)({variant:"ghost"}),"h-8 w-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start",day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...a},components:{IconLeft:e=>{let{...t}=e;return(0,s.jsx)(m.A,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,s.jsx)(x.A,{className:"h-4 w-4"})}},...d})}f.displayName="Calendar";var h=a(9095);function p(e){let{className:t}=e,[a,r]=d.useState({from:new Date(2022,0,20),to:(0,n.f)(new Date(2022,0,20),20)});return(0,s.jsx)("div",{className:(0,i.cn)("grid gap-2",t),children:(0,s.jsxs)(h.AM,{children:[(0,s.jsx)(h.Wv,{asChild:!0,children:(0,s.jsxs)(c.$,{id:"date",variant:"outline",className:(0,i.cn)("w-[300px] justify-start text-left font-normal",!a&&"text-muted-foreground"),children:[(0,s.jsx)(o.A,{}),(null==a?void 0:a.from)?a.to?(0,s.jsxs)(s.Fragment,{children:[(0,l.GP)(a.from,"LLL dd, y")," -"," ",(0,l.GP)(a.to,"LLL dd, y")]}):(0,l.GP)(a.from,"LLL dd, y"):(0,s.jsx)("span",{children:"Pick a date"})]})}),(0,s.jsx)(h.hl,{className:"w-auto p-0",align:"start",children:(0,s.jsx)(f,{initialFocus:!0,mode:"range",defaultMonth:null==a?void 0:a.from,selected:a,onSelect:r,numberOfMonths:2})})]})})}var g=a(7365);function v(){return(0,s.jsxs)("div",{className:"flex-1 overflow-auto p-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Dashboard Overview"}),(0,s.jsx)(p,{})]}),(0,s.jsxs)("div",{className:"mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:[(0,s.jsx)(r.Zp,{className:"p-6",children:(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)(g.GQ2,{className:"h-8 w-8 text-blue-500"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Total Students"}),(0,s.jsx)("h3",{className:"text-2xl font-bold",children:"1,234"})]})]})}),(0,s.jsx)(r.Zp,{className:"p-6",children:(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)(g.GQ2,{className:"h-8 w-8 text-green-500"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Active Resources"}),(0,s.jsx)("h3",{className:"text-2xl font-bold",children:"56"})]})]})}),(0,s.jsx)(r.Zp,{className:"p-6",children:(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)(g.GQ2,{className:"h-8 w-8 text-purple-500"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Total Downloads"}),(0,s.jsx)("h3",{className:"text-2xl font-bold",children:"892"})]})]})})]}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold text-gray-900",children:"Recent Activity"}),(0,s.jsx)(r.Zp,{className:"mt-4 p-6",children:(0,s.jsx)("div",{className:"space-y-4",children:(0,s.jsx)("p",{className:"text-gray-600",children:"No recent activity to display"})})})]})]})}},3312:(e,t,a)=>{"use strict";a.d(t,{$:()=>i,r:()=>o});var s=a(5155),r=a(2115),d=a(2317),n=a(652),l=a(1567);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:i=!1,...c}=e,m=i?d.DX:"button";return(0,s.jsx)(m,{className:(0,l.cn)(o({variant:r,size:n,className:a})),ref:t,...c})});i.displayName="Button"},9749:(e,t,a)=>{"use strict";a.d(t,{Zp:()=>n});var s=a(5155),r=a(2115),d=a(1567);let n=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...r})});n.displayName="Card",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",a),...r})}).displayName="CardHeader",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("font-semibold leading-none tracking-tight",a),...r})}).displayName="CardTitle",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",a),...r})}).displayName="CardDescription",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("p-6 pt-0",a),...r})}).displayName="CardContent",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex items-center p-6 pt-0",a),...r})}).displayName="CardFooter"},9095:(e,t,a)=>{"use strict";a.d(t,{AM:()=>l,Wv:()=>o,hl:()=>i});var s=a(5155),r=a(2115),d=a(5216),n=a(1567);let l=d.bL,o=d.l9;d.Mz;let i=r.forwardRef((e,t)=>{let{className:a,align:r="center",sideOffset:l=4,...o}=e;return(0,s.jsx)(d.ZL,{children:(0,s.jsx)(d.UC,{ref:t,align:r,sideOffset:l,className:(0,n.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})})});i.displayName=d.UC.displayName},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>d});var s=a(3463),r=a(9795);function d(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[105,780,749,161,216,384,441,517,358],()=>t(802)),_N_E=e.O()}]);