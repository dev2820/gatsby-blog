(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{6496:function(e,t,r){Promise.resolve().then(r.t.bind(r,5969,23)),Promise.resolve().then(r.t.bind(r,3805,23)),Promise.resolve().then(r.bind(r,4201)),Promise.resolve().then(r.bind(r,6894)),Promise.resolve().then(r.bind(r,1137)),Promise.resolve().then(r.bind(r,1962)),Promise.resolve().then(r.bind(r,6432)),Promise.resolve().then(r.bind(r,9787)),Promise.resolve().then(r.bind(r,1368)),Promise.resolve().then(r.bind(r,7024)),Promise.resolve().then(r.bind(r,1232)),Promise.resolve().then(r.bind(r,2870))},4201:function(e,t,r){"use strict";r.d(t,{AuthorInfo:function(){return l}});var n=r(6943),i=r(518),s=r(9123),a=JSON.parse('{"name":"dev2820","nickname":"Terra","avatarURL":"https://avatars.githubusercontent.com/u/40891497?v=4","githubURL":"https://github.com/dev2820","company":"neosapience","location":"seoul","bio":"FE Developer"}');function l(e){let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,i.cx)("flex flex-row gap-4 items-center",t),...r,children:[(0,n.jsx)(s.qE,{size:64,src:null==a?void 0:a.avatarURL,className:"w-16 h-16"}),(0,n.jsxs)("div",{className:"text-pretty flex flex-col gap-2",children:[(0,n.jsxs)("strong",{className:"inline-block h-6 min-w-36",children:[null==a?void 0:a.name," ",(null==a?void 0:a.nickname)&&(0,n.jsxs)("span",{children:["(",a.nickname,")"]})]}),(0,n.jsx)("p",{className:"whitespace-pre-wrap h-6 min-w-64",children:null==a?void 0:a.bio})]})]})}},1232:function(e,t,r){"use strict";r.d(t,{ShareButton:function(){return f}});var n=r(6943),i=r(9123);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(1418).Z)("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);var a=r(7313),l=r(518);let o=e=>Object.is(e,null)||Object.is(e,void 0),c=e=>!o(e),u=async e=>{if(c(navigator.share)&&navigator.canShare&&navigator.canShare(e))try{return await navigator.share(e),{isFailed:!1,value:!0,error:null}}catch(e){return{isFailed:!0,value:null,error:e}}return{isFailed:!0,value:null,error:Error("share is not supported in this browser")}},d=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),h=e=>!!(d(e)&&Object.hasOwn(e,"isFailed")),v=e=>h(e)&&!0===e.isFailed;function f(e){let{children:t,className:r,size:o,shareData:c,...d}=e,h=i.FN.createToaster({placement:"bottom",overlap:!0,gap:16,removeDelay:300,duration:3e3}),f=()=>{h.create({title:"Successfully shared your content!",type:"info"})},m=e=>{h.create({title:"Failed to share the content...",description:e.message,type:"info"})},x=async()=>{let e=await u(c);if(v(e)){m(e.error);return}f()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.hU,{size:o,className:(0,l.cx)(r),onClick:x,...d,children:(0,n.jsx)(s,{size:24})}),(0,n.jsx)(i.FN.Toaster,{toaster:h,children:e=>(0,n.jsxs)(i.FN.Root,{className:"bg-gray-800",children:[(0,n.jsx)(i.FN.Title,{className:"text-white mb-0 font-normal text-md",children:e.title}),(0,n.jsx)(i.FN.Description,{className:"text-white font-light text-sm",children:e.description}),(0,n.jsx)(i.FN.CloseTrigger,{asChild:!0,children:(0,n.jsx)(i.hU,{size:"xs",theme:"whiteAlpha",variant:"ghost",children:(0,n.jsx)(a.Z,{size:16})})})]},e.id)})]})}},2870:function(e,t,r){"use strict";r.d(t,{TableOfContents:function(){return o}});var n=r(6943),i=r(7879);let s=e=>{let{onVisible:t,onInvisible:r}=e,n=(0,i.useRef)(null);return(0,i.useEffect)(()=>(n.current=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?t&&t(e):r&&r(e)})},{root:null,rootMargin:"-30% 0px",threshold:0}),document.querySelectorAll("div#content section").forEach(e=>{var t;null===(t=n.current)||void 0===t||t.observe(e)}),()=>{n.current&&n.current.disconnect()}),[t,r]),null};var a=r(518),l=r(1003);function o(e){let{toc:t,...r}=e,a=(0,i.useRef)([]);return s({onVisible:e=>{let t=e.target.getAttribute("aria-labelledby"),r=a.current.find(e=>(null==e?void 0:e.dataset.id)==="#".concat(t));r&&(r.dataset.active="true")},onInvisible:e=>{let t=e.target.getAttribute("aria-labelledby"),r=a.current.find(e=>(null==e?void 0:e.dataset.id)==="#".concat(t));r&&(r.dataset.active="false")}}),(0,n.jsx)("nav",{...r,children:(0,n.jsx)("ol",{children:t.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)(l.default,{href:e.slug,children:(0,n.jsx)(c,{item:e,"data-id":e.slug,ref:e=>{a.current[t]=e}})})},e.slug))})})}let c=(0,i.forwardRef)(function(e,t){let{item:r,className:i,...s}=e;return(0,n.jsx)("div",{className:(0,a.cx)('text-sm font-light data-[active="true"]:text-base data-[active="true"]:font-semibold py-0.5 text-neutral-400 data-[active="true"]:text-primary duration-200 hover:text-primary',1===r.level&&"pl-2",2===r.level&&"pl-4",3===r.level&&"pl-10",4===r.level&&"pl-16",i),...s,ref:t,children:r.content})})},6894:function(e,t,r){"use strict";r.r(t),r.d(t,{Anchor:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.rU,{className:(0,i.cx)(t),...r})}},1137:function(e,t,r){"use strict";r.r(t),r.d(t,{Table:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.iA.Root,{className:(0,i.cx)(t),...r})}},1962:function(e,t,r){"use strict";r.r(t),r.d(t,{TableBody:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.iA.Body,{className:(0,i.cx)(t),...r})}},6432:function(e,t,r){"use strict";r.r(t),r.d(t,{TableCell:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.iA.Cell,{className:(0,i.cx)(t),...r})}},9787:function(e,t,r){"use strict";r.r(t),r.d(t,{TableHead:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.iA.Head,{className:(0,i.cx)(t),...r})}},1368:function(e,t,r){"use strict";r.r(t),r.d(t,{TableHeader:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.iA.Header,{className:(0,i.cx)(t),...r})}},7024:function(e,t,r){"use strict";r.r(t),r.d(t,{TableRow:function(){return a}});var n=r(6943),i=r(518),s=r(9123);function a(e){let{className:t,...r}=e;return(0,n.jsx)(s.iA.Row,{className:(0,i.cx)(t),...r})}},518:function(e,t,r){"use strict";r.d(t,{cx:function(){return s}});var n=r(689),i=r(1488);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,i.Z)(...t))}}},function(e){e.O(0,[46,618,825,805,922,465,744],function(){return e(e.s=6496)}),_N_E=e.O()}]);