(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{1794:function(e,l,t){Promise.resolve().then(t.bind(t,1365))},1365:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return k}});var a=t(6943),s=t(7879);let r=e=>{(0,s.useEffect)(e,[])};var n=t(3698);async function c(){try{let e=await (await fetch("/next-blog/post-list.json")).json();return{isFailed:!1,value:e,error:null}}catch(e){return{isFailed:!0,value:null,error:e}}}let i=(e,l)=>{let t=new n.Z(e,{includeScore:!0,includeMatches:!0,shouldSort:!0,minMatchCharLength:2,findAllMatches:!1,...l});return e=>t.search(e)},d=(e,l,t)=>i(l,t)(e);var u=t(1003),o=t(518);let h=async e=>{await new Promise(l=>{setTimeout(()=>{l()},e)})},x=async(e,l)=>{await h(e),l()};var m=t(5845),f={src:"/next-blog/_next/static/media/pepe-sad.83ae5666.png",height:1037,width:1092,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVZiz+KZjRHbTVVhzxQgjYCO+JSgDlMaXFZiThTf0AnXplJci54azMAIrsDOtVpYydzjGSGUC5OXEdhfTiouZ5jc1tNeTRdkD5ThUQSR7pjfTmHXjBei0pLfldBZy9nd17+xCvLAAAAHXRSTlP9/ne1/fuRAO/b7ib+PO5N/pT7n/z2of///////ja1kmcAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcGHAYAgEASwA4EHe7+nqPtvaQIZUrxTEEhHB+csArHu53chku1tagGUQvBA5FirMRv6R1XTIvA+5zxP8gN2RwOaEF0R0gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},g=t(7938),p=t(7313),j=t(885);let A=(0,s.forwardRef)((e,l)=>{let{onChangeSearch:t,onClearSearch:s,value:r,placeholder:n,defaultValue:c,className:i,...d}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("label",{className:(0,o.cx)("relative flex gap-3"),ref:l,children:[(0,a.jsx)(g.Z,{size:20,className:"absolute left-3 top-1/2 -translate-y-1/2"}),(0,a.jsx)("input",{type:"search",placeholder:n,className:(0,o.cx)("peer","flex-1 h-full rounded-lg text-md bg-white caret-primary pl-10 pr-10","duration-200","border-2 focus:outline-none border-primary/50 focus:border-primary","focus-visible:outline-none focus-visible:border-primary",i),value:r,onChange:e=>{let l=e.currentTarget.value;null==t||t(l)},...d}),(0,a.jsx)("button",{id:"search-cancel-btn",className:"peer-placeholder-shown:hidden absolute right-[84px] top-1/2 -translate-y-1/2 h-11 w-11 inline-flex justify-center place-items-center",type:"button",onClick:()=>{null==t||t("")},children:(0,a.jsx)(p.Z,{size:20})}),(0,a.jsx)(j.zx,{size:"lg",theme:"primary",type:"submit",className:"flex-none",children:(0,a.jsx)(g.Z,{size:24})})]})})});A.displayName="SearchInput";var b=t(7658),v=t(830);function y(e){let{text:l,className:t,...s}=e;return(0,a.jsx)("span",{className:(0,o.cx)("inline-block rounded-full border border-gray-400 text-gray-400","hover:border-gray-700 hover:text-gray-700 duration-200","font-light align-top","min-h-5 text-xs px-3")+" leading-5",...s,children:l})}var N=t(4970);let w="/next-blog";function k(){return(0,a.jsx)(s.Suspense,{children:(0,a.jsx)(S,{})})}let S=()=>{let e=(0,N.useSearchParams)().get("q"),[l,t]=(0,s.useState)([]),n=(0,s.useMemo)(()=>!e||l.length<=0?null:d(e,l,{keys:["data.title","data.tags","data.summary","content"]}),[e,l]),i=(0,s.useRef)(null),[h,g]=(0,s.useState)(null!=e?e:""),p=async()=>{let e=await c();(0,b.g)(e)||t(e.value)};return r(()=>{x(200,()=>{var e;null===(e=i.current)||void 0===e||e.focus()}),p()}),(0,a.jsxs)("search",{className:(0,o.cx)("rounded-md flex flex-col items-center"),children:["a"+w,(0,a.jsxs)("fieldset",{className:"rounded-lg w-full pt-20 pb-6 flex flex-col place-items-center",children:[(0,a.jsx)("h2",{className:"text-5xl font-bold mb-8",children:"Search"}),(0,a.jsx)("form",{className:"w-full max-w-[568px] flex flex-col gap-4",action:"".concat(w,"/search?q=").concat(h),method:"get",children:(0,a.jsx)(A,{className:"flex-1 h-11",placeholder:"Type to search",value:h,onChangeSearch:e=>{g(null!=e?e:"")},onClearSearch:()=>{g("")},ref:i,name:"q"})})]}),(0,a.jsx)("hr",{className:"w-full my-8"}),(0,a.jsx)("div",{className:"text-left w-full",children:e&&(0,a.jsxs)(a.Fragment,{children:[(0,v.k)(n)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.Od,{className:"",children:(0,a.jsx)("strong",{className:"block text-3xl font-bold",children:"loading..."})}),(0,a.jsx)(j.Od,{className:"mt-4 block h-32"})]}),!(0,v.k)(n)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("strong",{className:"block text-3xl font-bold",children:[(0,a.jsxs)(O,{children:['"',e,'"']})," 검색 결과:"," ",(0,a.jsx)(O,{children:null==n?void 0:n.length}),"개의 포스트"]}),n.length<=0&&(0,a.jsxs)("div",{className:"flex flex-col place-items-center mt-16",children:[(0,a.jsx)(m.default,{src:f,alt:"pepe-sad",width:192,height:0}),(0,a.jsx)("p",{className:"text-lg mt-8",children:"검색 결과가 없습니다요..."})]}),n.length>0&&(0,a.jsx)("ul",{className:"mt-4",children:n.map(e=>(0,a.jsx)("li",{className:"mb-4 last:mb-0",children:(0,a.jsx)(u.default,{href:"/posts/".concat(e.item.data.slug),children:(0,a.jsx)(E,{result:e,className:"bg-gray-100 hover:bg-gray-200 duration-200"})})},e.refIndex))})]})]})})]})},E=e=>{let{result:l,className:t,...s}=e,{item:r,matches:n}=l,c=null==n?void 0:n.find(e=>"data.title"===e.key),i=null==n?void 0:n.find(e=>"data.summary"===e.key);return(0,a.jsxs)("section",{className:(0,o.cx)("rounded-md p-4",t),...s,children:[c&&c.value&&c.indices?(0,a.jsx)("h3",{className:"text-2xl font-semibold",children:R(c.value,c.indices).map((e,l)=>l%2==1?(0,a.jsx)(O,{children:e},l):e)}):(0,a.jsx)("h3",{className:"text-2xl",children:r.data.title}),i&&i.value&&i.indices?(0,a.jsx)("p",{className:"mt-4",children:R(i.value,i.indices).map((e,l)=>l%2==1?(0,a.jsx)(O,{children:e},l):e)}):(0,a.jsx)("p",{className:"mt-4",children:r.data.summary}),(0,a.jsx)("div",{className:"mt-2 flex flex-row flex-wrap gap-1",children:r.data.tags.map(e=>(0,a.jsx)(u.default,{href:"/tags/".concat(e),children:(0,a.jsx)(y,{text:e})},e))})]})},O=e=>{let{children:l}=e;return(0,a.jsx)("span",{className:"text-primary",children:l})};function R(e,l){let t=[],a=0;return l.forEach(l=>{let[s,r]=l;t.push(e.slice(a,s)),t.push(e.slice(s,r+1)),a=r+1}),t.push(e.slice(a)),t}},518:function(e,l,t){"use strict";t.d(l,{cx:function(){return r}});var a=t(689),s=t(1488);function r(){for(var e=arguments.length,l=Array(e),t=0;t<e;t++)l[t]=arguments[t];return(0,a.m6)((0,s.Z)(...l))}},7658:function(e,l,t){"use strict";t.d(l,{g:function(){return r}});let a=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),s=e=>!!(a(e)&&Object.hasOwn(e,"isFailed")),r=e=>s(e)&&!0===e.isFailed},830:function(e,l,t){"use strict";t.d(l,{k:function(){return a}});let a=e=>Object.is(e,null)||Object.is(e,void 0)}},function(e){e.O(0,[973,618,825,97,922,465,744],function(){return e(e.s=1794)}),_N_E=e.O()}]);