"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[9560],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){return function(t){var a=d(t.components);return n.createElement(e,i({},t,{components:a}))}},d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,h=c["".concat(o,".").concat(p)]||c[p]||u[p]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},11849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Share machine images using their image URL"},o=void 0,l={unversionedId:"image",id:"version-4/image",title:"Share machine images using their image URL",description:"You can share an image of your machine anywhere that supports images. You can use the image URL for live-updating images where the machine is always updated with your latest changes. Machine images can be helpful in documentation, including GitHub pull requests.",source:"@site/versioned_docs/version-4/image.mdx",sourceDirName:".",slug:"/image",permalink:"/statelyai-docs/docs/xstate-v4/image",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/image.mdx",tags:[],version:"4",frontMatter:{title:"Share machine images using their image URL"},sidebar:"tutorialSidebar",previous:{title:"Embed machines using their embed URL",permalink:"/statelyai-docs/docs/xstate-v4/embed"},next:{title:"Share machines using their share URL",permalink:"/statelyai-docs/docs/xstate-v4/url"}},m={},s=[{value:"Copy the image URL",id:"copy-the-image-url",level:2},{value:"Color mode",id:"color-mode",level:2},{value:"Examples",id:"examples",level:2},{value:"Markdown",id:"markdown",level:3},{value:"HTML",id:"html",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)},d=c("ThemedImage"),p=c("MoreHorizontal"),u=c("LinkIcon"),h={toc:s};function g(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"You can share an image of your machine anywhere that supports images. You can use the image URL for live-updating images where the machine is always updated with your latest changes. Machine images can be helpful in documentation, including GitHub pull requests."),(0,r.mdx)("p",null,"The image below is embedded using the copy image URL. Try switching between light and dark mode in the docs top bar; the image will change color mode too."),(0,r.mdx)("p",null,(0,r.mdx)(d,{alt:"State machine for the Copy image URL flow. An initial state of Viewing machine which transitions to Left drawer open via an event of Open left drawer. The use \u2026 icon event transitions from left drawer open to Machine options menu open.",sources:{light:"https://stately.ai/registry/machines/1b050e43-c8a5-4e28-b881-71eadcc5b8a1.light.png",dark:"https://stately.ai/registry/machines/1b050e43-c8a5-4e28-b881-71eadcc5b8a1.dark.png"},mdxType:"ThemedImage"})),(0,r.mdx)("p",null,"Your machine image will only be available if:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"the project visibility is ",(0,r.mdx)("strong",{parentName:"li"},"public")),(0,r.mdx)("li",{parentName:"ul"},"the project visibility is ",(0,r.mdx)("strong",{parentName:"li"},"unlisted"))),(0,r.mdx)("p",null,"Machine images are not available for private machines."),(0,r.mdx)("p",null,"Read ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/projects#change-a-projects-visibility"},"how to change a project\u2019s visibility settings"),"."),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"You can also ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/embed"},"embed your machine")," for a focused non-editable view of your machine in Stately Studio\u2019s editor.")),(0,r.mdx)("h2",{id:"copy-the-image-url"},"Copy the image URL"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Open the ",(0,r.mdx)("strong",{parentName:"li"},"Machines")," list from the left drawer menu."),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)(p,{size:18,mdxType:"MoreHorizontal"})," triple dot icon alongside your machine name to open the machine options menu."),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)(u,{size:16,mdxType:"LinkIcon"})," ",(0,r.mdx)("strong",{parentName:"li"},"Copy image URL")," option to copy the image URL to your clipboard."),(0,r.mdx)("li",{parentName:"ol"},"Paste the URL wherever you want it used.")),(0,r.mdx)("h2",{id:"color-mode"},"Color mode"),(0,r.mdx)("p",null,"By default, the image\u2019s color mode will be the same as your chosen Stately Studio color mode. Add ",(0,r.mdx)("inlineCode",{parentName:"p"},".light.png")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},".dark.png")," to the URL to force that color mode."),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("p",null,"The examples below show how you can use the image URL."),(0,r.mdx)("h3",{id:"markdown"},"Markdown"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-md"},"![State machine for the copy image URL flow in light mode.](https://stately.ai/registry/machines/1b050e43-c8a5-4e28-b881-71eadcc5b8a1.light.png)\n")),(0,r.mdx)("h3",{id:"html"},"HTML"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<img\n  src="https://stately.ai/registry/machines/1b050e43-c8a5-4e28-b881-71eadcc5b8a1.dark.png"\n  alt="State machine for the copy image URL flow in dark mode."\n/>\n')))}g.isMDXComponent=!0}}]);