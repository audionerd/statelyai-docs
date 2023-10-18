"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[6597],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){return function(t){var r=p(t.components);return n.createElement(e,o({},t,{components:r}))}},p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Share machines using their share URL"},i=void 0,l={unversionedId:"url",id:"version-4/url",title:"Share machines using their share URL",description:"You can share machines with your team or publicly with the machine URL.",source:"@site/versioned_docs/version-4/url.mdx",sourceDirName:".",slug:"/url",permalink:"/statelyai-docs/docs/xstate-v4/url",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/url.mdx",tags:[],version:"4",frontMatter:{title:"Share machines using their share URL"},sidebar:"tutorialSidebar",previous:{title:"Share machine images using their image URL",permalink:"/statelyai-docs/docs/xstate-v4/image"},next:{title:"Accounts",permalink:"/statelyai-docs/docs/xstate-v4/category/accounts"}},s={},c=[{value:"Copy the URL from the browser address bar",id:"copy-the-url-from-the-browser-address-bar",level:2},{value:"Copy the URL from the Share modal",id:"copy-the-url-from-the-share-modal",level:2},{value:"Machine URL parameters",id:"machine-url-parameters",level:2}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"You can share machines with your team or publicly with the machine URL."),(0,a.mdx)("p",null,"Your machine will only be viewable if:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"the project visibility is ",(0,a.mdx)("strong",{parentName:"li"},"public")," or ",(0,a.mdx)("strong",{parentName:"li"},"unlisted")),(0,a.mdx)("li",{parentName:"ul"},"or the project visibility is ",(0,a.mdx)("strong",{parentName:"li"},"private"),", and the viewer is also a member of your team")),(0,a.mdx)("p",null,"Private machines stored in My Projects will only be viewable by you."),(0,a.mdx)("p",null,"Read ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/projects#change-a-projects-visibility"},"how to change a project\u2019s visibility settings"),"."),(0,a.mdx)("h2",{id:"copy-the-url-from-the-browser-address-bar"},"Copy the URL from the browser address bar"),(0,a.mdx)("p",null,"You can copy the machine URL from the browser address bar, which will share the machine in your current view and version."),(0,a.mdx)("h2",{id:"copy-the-url-from-the-share-modal"},"Copy the URL from the Share modal"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Use the ",(0,a.mdx)("strong",{parentName:"li"},"Share")," button in Stately Studio\u2019s top bar to open the Share dialog."),(0,a.mdx)("li",{parentName:"ol"},"Use the ",(0,a.mdx)("strong",{parentName:"li"},"Copy share URL")," button to copy the machine\u2019s URL to your clipboard.")),(0,a.mdx)("h2",{id:"machine-url-parameters"},"Machine URL parameters"),(0,a.mdx)("p",null,"Depending on where you copy your URL from, it may contain the following parameters:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"machineId"),": the unique ID for the machine. For example, ",(0,a.mdx)("inlineCode",{parentName:"li"},"machineId=491a4c60-5300-4e22-92cf-8a32a8ffffca"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"mode"),": the current machine mode. For example, ",(0,a.mdx)("inlineCode",{parentName:"li"},"mode=Simulate"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"version"),": the current ",(0,a.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/xstate-v4/versions"},"machine version"),". For example, ",(0,a.mdx)("inlineCode",{parentName:"li"},"version=78730cff-1e90-4190-9e41-426733b71c9f"),".")))}p.isMDXComponent=!0}}]);