(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{7131:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(1418).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},7938:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(1418).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},5845:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(198),s=r.n(n)},4970:function(e,t,r){"use strict";var n=r(4085);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}})},198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},getImageProps:function(){return o}});let n=r(8871),s=r(8968),i=r(5969),c=n._(r(6289));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next-blog/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let h=i.Image},5577:function(){},6863:function(e){e.exports={style:{fontFamily:"'__monospaceNeon_7691e4', '__monospaceNeon_Fallback_7691e4'"},className:"__className_7691e4",variable:"__variable_7691e4"}},2046:function(e){e.exports={style:{fontFamily:"'__pretendard_fa65fd', '__pretendard_Fallback_fa65fd'"},className:"__className_fa65fd",variable:"__variable_fa65fd"}},3698:function(e,t,r){"use strict";function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===l(e)}r.d(t,{Z:function(){return X}});let s=1/0;function i(e){return"string"==typeof e}function c(e){return"number"==typeof e}function o(e){return"object"==typeof e}function h(e){return null!=e}function a(e){return!e.trim().length}function l(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let u=e=>`Invalid value for key ${e}`,f=e=>`Pattern length exceeds max of ${e}.`,d=e=>`Missing ${e} property in key`,g=e=>`Property 'weight' in key '${e}' must be a positive integer`,p=Object.prototype.hasOwnProperty;class y{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let r=m(e);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function m(e){let t=null,r=null,s=null,c=1,o=null;if(i(e)||n(e))s=e,t=x(e),r=_(e);else{if(!p.call(e,"name"))throw Error(d("name"));let n=e.name;if(s=n,p.call(e,"weight")&&(c=e.weight)<=0)throw Error(g(n));t=x(n),r=_(n),o=e.getFn}return{path:t,id:r,weight:c,src:s,getFn:o}}function x(e){return n(e)?e:e.split(".")}function _(e){return n(e)?e.join("."):e}var M={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let r=[],a=!1,u=(e,t,f)=>{if(h(e)){if(t[f]){var d,g;let p=e[t[f]];if(h(p)){if(f===t.length-1&&(i(p)||c(p)||!0===(d=p)||!1===d||o(g=d)&&null!==g&&"[object Boolean]"==l(d)))r.push(null==p?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-s?"-0":t}(p));else if(n(p)){a=!0;for(let e=0,r=p.length;e<r;e+=1)u(p[e],t,f+1)}else t.length&&u(p,t,f+1)}}else r.push(e)}};return u(e,i(t)?t.split("."):t,0),a?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let k=/[^ ]+/g;class v{constructor({getFn:e=M.getFn,fieldNormWeight:t=M.fieldNormWeight}={}){this.norm=function(e=1,t=3){let r=new Map,n=Math.pow(10,t);return{get(t){let s=t.match(k).length;if(r.has(s))return r.get(s);let i=parseFloat(Math.round(1/Math.pow(s,.5*e)*n)/n);return r.set(s,i),i},clear(){r.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,i(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();i(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!h(e)||a(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((t,s)=>{let c=t.getFn?t.getFn(e):this.getFn(e,t.path);if(h(c)){if(n(c)){let e=[],t=[{nestedArrIndex:-1,value:c}];for(;t.length;){let{nestedArrIndex:r,value:s}=t.pop();if(h(s)){if(i(s)&&!a(s)){let t={v:s,i:r,n:this.norm.get(s)};e.push(t)}else n(s)&&s.forEach((e,r)=>{t.push({nestedArrIndex:r,value:e})})}}r.$[s]=e}else if(i(c)&&!a(c)){let e={v:c,n:this.norm.get(c)};r.$[s]=e}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function b(e,t,{getFn:r=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){let s=new v({getFn:r,fieldNormWeight:n});return s.setKeys(e.map(m)),s.setSources(t),s.create(),s}function I(e,{errors:t=0,currentLocation:r=0,expectedLocation:n=0,distance:s=M.distance,ignoreLocation:i=M.ignoreLocation}={}){let c=t/e.length;if(i)return c;let o=Math.abs(n-r);return s?c+o/s:o?1:c}class ${constructor(e,{location:t=M.location,threshold:r=M.threshold,distance:n=M.distance,includeMatches:s=M.includeMatches,findAllMatches:i=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:o=M.isCaseSensitive,ignoreLocation:h=M.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:n,includeMatches:s,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let a=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let r=0,n=e.length;r<n;r+=1){let s=e.charAt(r);t[s]=(t[s]||0)|1<<n-r-1}return t}(e),startIndex:t})},l=this.pattern.length;if(l>32){let e=0,t=l%32,r=l-t;for(;e<r;)a(this.pattern.substr(e,32),e),e+=32;if(t){let e=l-32;a(this.pattern.substr(e),e)}}else a(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:n,distance:s,threshold:i,findAllMatches:c,minMatchCharLength:o,ignoreLocation:h}=this.options,a=[],l=0,u=!1;this.chunks.forEach(({pattern:t,alphabet:d,startIndex:g})=>{let{isMatch:p,score:y,indices:m}=function(e,t,r,{location:n=M.location,distance:s=M.distance,threshold:i=M.threshold,findAllMatches:c=M.findAllMatches,minMatchCharLength:o=M.minMatchCharLength,includeMatches:h=M.includeMatches,ignoreLocation:a=M.ignoreLocation}={}){let l;if(t.length>32)throw Error(f(32));let u=t.length,d=e.length,g=Math.max(0,Math.min(n,d)),p=i,y=g,m=o>1||h,x=m?Array(d):[];for(;(l=e.indexOf(t,y))>-1;)if(p=Math.min(I(t,{currentLocation:l,expectedLocation:g,distance:s,ignoreLocation:a}),p),y=l+u,m){let e=0;for(;e<u;)x[l+e]=1,e+=1}y=-1;let _=[],k=1,v=u+d,b=1<<u-1;for(let n=0;n<u;n+=1){let i=0,o=v;for(;i<o;)I(t,{errors:n,currentLocation:g+o,expectedLocation:g,distance:s,ignoreLocation:a})<=p?i=o:v=o,o=Math.floor((v-i)/2+i);v=o;let h=Math.max(1,g-o+1),l=c?d:Math.min(g+o,d)+u,f=Array(l+2);f[l+1]=(1<<n)-1;for(let i=l;i>=h;i-=1){let c=i-1,o=r[e.charAt(c)];if(m&&(x[c]=+!!o),f[i]=(f[i+1]<<1|1)&o,n&&(f[i]|=(_[i+1]|_[i])<<1|1|_[i+1]),f[i]&b&&(k=I(t,{errors:n,currentLocation:c,expectedLocation:g,distance:s,ignoreLocation:a}))<=p){if(p=k,(y=c)<=g)break;h=Math.max(1,2*g-y)}}if(I(t,{errors:n+1,currentLocation:g,expectedLocation:g,distance:s,ignoreLocation:a})>p)break;_=f}let $={isMatch:y>=0,score:Math.max(.001,k)};if(m){let e=function(e=[],t=M.minMatchCharLength){let r=[],n=-1,s=-1,i=0;for(let c=e.length;i<c;i+=1){let c=e[i];c&&-1===n?n=i:c||-1===n||((s=i-1)-n+1>=t&&r.push([n,s]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}(x,o);e.length?h&&($.indices=e):$.isMatch=!1}return $}(e,t,d,{location:n+g,distance:s,threshold:i,findAllMatches:c,minMatchCharLength:o,includeMatches:r,ignoreLocation:h});p&&(u=!0),l+=y,p&&m&&(a=[...a,...m])});let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&r&&(d.indices=a),d}}class w{constructor(e){this.pattern=e}static isMultiMatch(e){return E(e,this.multiRegex)}static isSingleMatch(e){return E(e,this.singleRegex)}search(){}}function E(e,t){let r=e.match(t);return r?r[1]:null}class S extends w{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class A extends w{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class N extends w{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class L extends w{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class R extends w{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class C extends w{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class O extends w{constructor(e,{location:t=M.location,threshold:r=M.threshold,distance:n=M.distance,includeMatches:s=M.includeMatches,findAllMatches:i=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:o=M.isCaseSensitive,ignoreLocation:h=M.ignoreLocation}={}){super(e),this._bitapSearch=new $(e,{location:t,threshold:r,distance:n,includeMatches:s,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class F extends w{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,r=0,n=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,r))>-1;)r=t+s,n.push([t,r-1]);let i=!!n.length;return{isMatch:i,score:i?0:1,indices:n}}}let j=[S,F,N,L,C,R,A,O],P=j.length,W=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,z=new Set([O.type,F.type]);class T{constructor(e,{isCaseSensitive:t=M.isCaseSensitive,includeMatches:r=M.includeMatches,minMatchCharLength:n=M.minMatchCharLength,ignoreLocation:s=M.ignoreLocation,findAllMatches:i=M.findAllMatches,location:c=M.location,threshold:o=M.threshold,distance:h=M.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:n,findAllMatches:i,ignoreLocation:s,location:c,threshold:o,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map(e=>{let r=e.trim().split(W).filter(e=>e&&!!e.trim()),n=[];for(let e=0,s=r.length;e<s;e+=1){let s=r[e],i=!1,c=-1;for(;!i&&++c<P;){let e=j[c],r=e.isMultiMatch(s);r&&(n.push(new e(r,t)),i=!0)}if(!i)for(c=-1;++c<P;){let e=j[c],r=e.isSingleMatch(s);if(r){n.push(new e(r,t));break}}}return n})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,i=[],c=0;for(let n=0,o=t.length;n<o;n+=1){let o=t[n];i.length=0,s=0;for(let t=0,n=o.length;t<n;t+=1){let n=o[t],{isMatch:h,indices:a,score:l}=n.search(e);if(h){if(s+=1,c+=l,r){let e=n.constructor.type;z.has(e)?i=[...i,...a]:i.push(a)}}else{c=0,s=0,i.length=0;break}}if(s){let e={isMatch:!0,score:c/s};return r&&(e.indices=i),e}}return{isMatch:!1,score:1}}}let q=[];function K(e,t){for(let r=0,n=q.length;r<n;r+=1){let n=q[r];if(n.condition(e,t))return new n(e,t)}return new $(e,t)}let Z={AND:"$and",OR:"$or"},D={PATH:"$path",PATTERN:"$val"},H=e=>!!(e[Z.AND]||e[Z.OR]),J=e=>!!e[D.PATH],V=e=>!n(e)&&o(e)&&!H(e),B=e=>({[Z.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function G(e,t,{auto:r=!0}={}){let s=e=>{let c=Object.keys(e),o=J(e);if(!o&&c.length>1&&!H(e))return s(B(e));if(V(e)){let n=o?e[D.PATH]:c[0],s=o?e[D.PATTERN]:e[n];if(!i(s))throw Error(u(n));let h={keyId:_(n),pattern:s};return r&&(h.searcher=K(s,t)),h}let h={children:[],operator:c[0]};return c.forEach(t=>{let r=e[t];n(r)&&r.forEach(e=>{h.children.push(s(e))})}),h};return H(e)||(e=B(e)),s(e)}function Q(e,t){let r=e.matches;t.matches=[],h(r)&&r.forEach(e=>{if(!h(e.indices)||!e.indices.length)return;let{indices:r,value:n}=e,s={indices:r,value:n};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)})}function U(e,t){t.score=e.score}class X{constructor(e,t={},r){this.options={...M,...t},this.options.useExtendedSearch,this._keyStore=new y(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof v))throw Error("Incorrect 'index' type");this._myIndex=t||b(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){h(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let r=0,n=this._docs.length;r<n;r+=1){let s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,n-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:r,includeScore:n,shouldSort:s,sortFn:o,ignoreFieldNorm:h}=this.options,a=i(e)?i(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach(e=>{let r=1;e.matches.forEach(({key:e,norm:n,score:s})=>{let i=e?e.weight:null;r*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(t?1:n))}),e.score=r})}(a,{ignoreFieldNorm:h}),s&&a.sort(o),c(t)&&t>-1&&(a=a.slice(0,t)),function(e,t,{includeMatches:r=M.includeMatches,includeScore:n=M.includeScore}={}){let s=[];return r&&s.push(Q),n&&s.push(U),e.map(e=>{let{idx:r}=e,n={item:t[r],refIndex:r};return s.length&&s.forEach(t=>{t(e,n)}),n})}(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){let t=K(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:e,i:r,n:s})=>{if(!h(e))return;let{isMatch:i,score:c,indices:o}=t.searchIn(e);i&&n.push({item:e,idx:r,matches:[{score:c,value:e,norm:s,indices:o}]})}),n}_searchLogical(e){let t=G(e,this.options),r=(e,t,n)=>{if(!e.children){let{keyId:r,searcher:s}=e,i=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:s});return i&&i.length?[{idx:n,item:t,matches:i}]:[]}let s=[];for(let i=0,c=e.children.length;i<c;i+=1){let c=r(e.children[i],t,n);if(c.length)s.push(...c);else if(e.operator===Z.AND)return[]}return s},n=this._myIndex.records,s={},i=[];return n.forEach(({$:e,i:n})=>{if(h(e)){let c=r(t,e,n);c.length&&(s[n]||(s[n]={idx:n,item:e,matches:[]},i.push(s[n])),c.forEach(({matches:e})=>{s[n].matches.push(...e)}))}}),i}_searchObjectList(e){let t=K(e,this.options),{keys:r,records:n}=this._myIndex,s=[];return n.forEach(({$:e,i:n})=>{if(!h(e))return;let i=[];r.forEach((r,n)=>{i.push(...this._findMatches({key:r,value:e[n],searcher:t}))}),i.length&&s.push({idx:n,item:e,matches:i})}),s}_findMatches({key:e,value:t,searcher:r}){if(!h(t))return[];let s=[];if(n(t))t.forEach(({v:t,i:n,n:i})=>{if(!h(t))return;let{isMatch:c,score:o,indices:a}=r.searchIn(t);c&&s.push({score:o,key:e,value:t,idx:n,norm:i,indices:a})});else{let{v:n,n:i}=t,{isMatch:c,score:o,indices:h}=r.searchIn(n);c&&s.push({score:o,key:e,value:n,norm:i,indices:h})}return s}}X.version="7.0.0",X.createIndex=b,X.parseIndex=function(e,{getFn:t=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){let{keys:n,records:s}=e,i=new v({getFn:t,fieldNormWeight:r});return i.setKeys(n),i.setIndexRecords(s),i},X.config=M,X.parseQuery=G,function(...e){q.push(...e)}(T)}}]);