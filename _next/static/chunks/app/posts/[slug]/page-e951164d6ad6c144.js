(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{6496:function(e,t,r){Promise.resolve().then(r.t.bind(r,5969,23)),Promise.resolve().then(r.t.bind(r,3805,23)),Promise.resolve().then(r.bind(r,6398)),Promise.resolve().then(r.bind(r,6894)),Promise.resolve().then(r.bind(r,1137)),Promise.resolve().then(r.bind(r,1962)),Promise.resolve().then(r.bind(r,6432)),Promise.resolve().then(r.bind(r,9787)),Promise.resolve().then(r.bind(r,1368)),Promise.resolve().then(r.bind(r,7024)),Promise.resolve().then(r.bind(r,4547)),Promise.resolve().then(r.bind(r,2870))},6398:function(e,t,r){"use strict";r.d(t,{AuthorInfo:function(){return f}});var n=r(6943),i=r(518),a=r(1245);let l=async e=>{try{let t=await fetch("https://api.github.com/users/".concat(e)),r=await t.json();return{isFailed:!1,value:s(r),error:null}}catch(e){return{isFailed:!0,value:null,error:e}}},s=e=>{var t,r,n;return{name:e.login,nickname:e.name,avatarURL:e.avatar_url,githubURL:e.html_url,company:null!==(t=e.company)&&void 0!==t?t:void 0,location:null!==(r=e.location)&&void 0!==r?r:void 0,bio:null!==(n=e.bio)&&void 0!==n?n:void 0}};var o=r(830),c=r(7658),u=r(7879);let d="dev2820",h=()=>{let[e,t]=(0,u.useState)(null),[r,n]=(0,u.useState)(!0),i=async()=>{if((0,o.k)(d))return;let e=await l(d);(0,c.g)(e)||(t(e.value),n(!1))};return(0,u.useEffect)(()=>{i()},[]),{author:e,isFetching:r}};function f(e){let{className:t,...r}=e,{isFetching:l,author:s}=h();return(0,n.jsxs)("div",{className:(0,i.cx)("flex flex-row gap-4 items-center",t),...r,children:[(0,n.jsx)(a.Od,{isLoaded:!l,className:"rounded-full",children:(0,n.jsx)(a.qE,{size:64,src:null==s?void 0:s.avatarURL,className:"w-16 h-16"})}),(0,n.jsxs)("div",{className:"text-pretty flex flex-col gap-2",children:[(0,n.jsx)(a.Od,{isLoaded:!l,className:"h-fit w-fit",children:(0,n.jsxs)("strong",{className:"inline-block h-6 min-w-36",children:[null==s?void 0:s.name," ",(null==s?void 0:s.nickname)&&(0,n.jsxs)("span",{children:["(",s.nickname,")"]})]})}),(0,n.jsx)(a.Od,{isLoaded:!l,className:"h-fit w-fit",children:(0,n.jsx)("p",{className:"whitespace-pre-wrap h-6 min-w-64",children:null==s?void 0:s.bio})})]})]})}},4547:function(e,t,r){"use strict";r.d(t,{ShareButton:function(){return p}});var n=r(6943),i=r(1245),a=r(7879);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:d,...h}=e;return(0,a.createElement)("svg",{ref:t,...o,width:n,height:n,stroke:r,strokeWidth:l?24*Number(i)/Number(n):i,className:s("lucide",c),...h},[...d.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),u=(e,t)=>{let r=(0,a.forwardRef)((r,n)=>{let{className:i,...o}=r;return(0,a.createElement)(c,{ref:n,iconNode:t,className:s("lucide-".concat(l(e)),i),...o})});return r.displayName="".concat(e),r},d=u("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]),h=u("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var f=r(518),v=r(830);let m=e=>!(0,v.k)(e),x=async e=>{if(m(navigator.share)&&navigator.canShare&&navigator.canShare(e))try{return await navigator.share(e),{isFailed:!1,value:!0,error:null}}catch(e){return{isFailed:!0,value:null,error:e}}return{isFailed:!0,value:null,error:Error("share is not supported in this browser")}};var b=r(7658);function p(e){let{children:t,className:r,size:a,shareData:l,...s}=e,o=i.FN.createToaster({placement:"bottom",overlap:!0,gap:16,removeDelay:300,duration:3e3}),c=()=>{o.create({title:"Successfully shared your content!",type:"info"})},u=e=>{o.create({title:"Failed to share the content...",description:e.message,type:"info"})},v=async()=>{let e=await x(l);if((0,b.g)(e)){u(e.error);return}c()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.hU,{size:a,className:(0,f.cx)(r),onClick:v,...s,children:(0,n.jsx)(d,{size:24})}),(0,n.jsx)(i.FN.Toaster,{toaster:o,children:e=>(0,n.jsxs)(i.FN.Root,{className:"bg-gray-800",children:[(0,n.jsx)(i.FN.Title,{className:"text-white mb-0 font-normal text-md",children:e.title}),(0,n.jsx)(i.FN.Description,{className:"text-white font-light text-sm",children:e.description}),(0,n.jsx)(i.FN.CloseTrigger,{asChild:!0,children:(0,n.jsx)(i.hU,{size:"xs",theme:"whiteAlpha",variant:"ghost",children:(0,n.jsx)(h,{size:16})})})]},e.id)})]})}},2870:function(e,t,r){"use strict";r.d(t,{TableOfContents:function(){return o}});var n=r(6943),i=r(7879);let a=e=>{let{onVisible:t,onInvisible:r}=e,n=(0,i.useRef)(null);return(0,i.useEffect)(()=>(n.current=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?t&&t(e):r&&r(e)})},{root:null,rootMargin:"-30% 0px",threshold:0}),document.querySelectorAll("div#content section").forEach(e=>{var t;null===(t=n.current)||void 0===t||t.observe(e)}),()=>{n.current&&n.current.disconnect()}),[]),null};var l=r(518),s=r(1003);function o(e){let{toc:t,...r}=e,l=(0,i.useRef)([]);return a({onVisible:e=>{let t=e.target.getAttribute("aria-labelledby"),r=l.current.find(e=>(null==e?void 0:e.dataset.id)==="#".concat(t));r&&(r.dataset.active="true")},onInvisible:e=>{let t=e.target.getAttribute("aria-labelledby"),r=l.current.find(e=>(null==e?void 0:e.dataset.id)==="#".concat(t));r&&(r.dataset.active="false")}}),(0,n.jsx)("nav",{...r,children:(0,n.jsx)("ol",{children:t.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:e.slug,children:(0,n.jsx)(c,{item:e,"data-id":e.slug,ref:e=>{l.current[t]=e}})})},e.slug))})})}let c=(0,i.forwardRef)(function(e,t){let{item:r,className:i,...a}=e;return(0,n.jsx)("div",{className:(0,l.cx)('text-sm font-light data-[active="true"]:text-base data-[active="true"]:font-semibold py-0.5 text-neutral-400 data-[active="true"]:text-primary duration-200 hover:text-primary',1===r.level&&"pl-2",2===r.level&&"pl-4",3===r.level&&"pl-10",4===r.level&&"pl-16",i),...a,ref:t,children:r.content})})},6894:function(e,t,r){"use strict";r.r(t),r.d(t,{Anchor:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.rU,{className:(0,i.cx)("font-medium",t),...r})}},1137:function(e,t,r){"use strict";r.r(t),r.d(t,{Table:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.iA.Root,{className:(0,i.cx)(t),...r})}},1962:function(e,t,r){"use strict";r.r(t),r.d(t,{TableBody:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.iA.Body,{className:(0,i.cx)(t),...r})}},6432:function(e,t,r){"use strict";r.r(t),r.d(t,{TableCell:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.iA.Cell,{className:(0,i.cx)(t),...r})}},9787:function(e,t,r){"use strict";r.r(t),r.d(t,{TableHead:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.iA.Head,{className:(0,i.cx)(t),...r})}},1368:function(e,t,r){"use strict";r.r(t),r.d(t,{TableHeader:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.iA.Header,{className:(0,i.cx)(t),...r})}},7024:function(e,t,r){"use strict";r.r(t),r.d(t,{TableRow:function(){return l}});var n=r(6943),i=r(518),a=r(1245);function l(e){let{className:t,...r}=e;return(0,n.jsx)(a.iA.Row,{className:(0,i.cx)(t),...r})}},518:function(e,t,r){"use strict";r.d(t,{cx:function(){return a}});var n=r(689),i=r(1488);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,i.Z)(...t))}},7658:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});let n=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),i=e=>!!(n(e)&&Object.hasOwn(e,"isFailed")),a=e=>i(e)&&!0===e.isFailed},830:function(e,t,r){"use strict";r.d(t,{k:function(){return n}});let n=e=>Object.is(e,null)||Object.is(e,void 0)}},function(e){e.O(0,[587,618,372,805,922,465,744],function(){return e(e.s=6496)}),_N_E=e.O()}]);