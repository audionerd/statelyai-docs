"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[69315],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){return function(t){var a=p(t.components);return n.createElement(e,o({},t,{components:a}))}},p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(a),s=r,h=c["".concat(i,".").concat(s)]||c[s]||u[s]||o;return a?n.createElement(h,m(m({ref:t},l),{},{components:a})):n.createElement(h,m({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93634:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const r="embed_rxbU";var o=a(92949);function i(e){let{name:t,embedURL:a}=e;const{colorMode:i}=(0,o.I)();return n.createElement("iframe",{loading:"lazy",src:m(a,{colorMode:i}),className:r},n.createElement("a",{href:a},"View the ",n.createElement("em",null,t)," machine in Stately Studio"),".")}function m(e,t){const a=new URL(e);for(const n in t)a.searchParams.set(n,t[n]);return a.toString()}},20457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(93634);const i={title:"Embed machines using their embed URL",description:"You can embed your machines anywhere that supports iframes. Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned."},m=void 0,d={unversionedId:"embed",id:"embed",title:"Embed machines using their embed URL",description:"You can embed your machines anywhere that supports iframes. Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned.",source:"@site/docs/embed.mdx",sourceDirName:".",slug:"/embed",permalink:"/docs/embed",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/embed.mdx",tags:[],version:"current",frontMatter:{title:"Embed machines using their embed URL",description:"You can embed your machines anywhere that supports iframes. Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned."},sidebar:"docs",previous:{title:"Share",permalink:"/docs/category/share"},next:{title:"Share machine images using their image URL",permalink:"/docs/image"}},l={},c=[{value:"Copy the embed URL",id:"copy-the-embed-url",level:2},{value:"Example <code>&lt;iframe&gt;</code> code",id:"example-iframe-code",level:2},{value:"URL parameters, including color mode",id:"url-parameters-including-color-mode",level:2}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"You can embed your machines anywhere that supports ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},(0,r.mdx)("inlineCode",{parentName:"a"},"<iframe>")),". Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned."),(0,r.mdx)("p",null,"We love to use embedded machines in our docs! Below is an example of an embedded machine:"),(0,r.mdx)(o.Z,{name:"Embed feature machine",embedURL:"https://stately.ai/registry/editor/embed/9e7f6b1e-416a-491f-a4a0-bba386a02d8d?mode=Design&machineId=e94d5674-7ab7-4a4e-b7a8-781609bfe523",mdxType:"EmbedMachine"}),(0,r.mdx)("p",null,"Your machine will only be embeddable if:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"the project visibility is ",(0,r.mdx)("strong",{parentName:"li"},"public")),(0,r.mdx)("li",{parentName:"ul"},"the project visibility is ",(0,r.mdx)("strong",{parentName:"li"},"unlisted"))),(0,r.mdx)("p",null,"Embed URLs are not available for private machines."),(0,r.mdx)("p",null,"Read ",(0,r.mdx)("a",{parentName:"p",href:"/docs/projects#change-a-projects-visibility"},"how to change a project\u2019s visibility settings"),"."),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"You can also ",(0,r.mdx)("a",{parentName:"p",href:"/docs/image"},"get your machine as an image")," for platforms where ",(0,r.mdx)("inlineCode",{parentName:"p"},"<iframe>")," is not supported.")),(0,r.mdx)("h2",{id:"copy-the-embed-url"},"Copy the embed URL"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)("strong",{parentName:"li"},"Share")," button in Stately Studio\u2019s top bar to open the Share dialog."),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)("strong",{parentName:"li"},"Copy embed URL")," button to copy the machine\u2019s embed URL to your clipboard."),(0,r.mdx)("li",{parentName:"ol"},"Use the embed URL in an ",(0,r.mdx)("inlineCode",{parentName:"li"},"<iframe>")," to embed the machine anywhere that supports iframes. ",(0,r.mdx)("a",{parentName:"li",href:"#example-iframe-code"},"Find some example code below"),".")),(0,r.mdx)("h2",{id:"example-iframe-code"},"Example ",(0,r.mdx)("inlineCode",{parentName:"h2"},"<iframe>")," code"),(0,r.mdx)("p",null,"The following HTML embeds the same machine at the top of this page in dark mode:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<iframe\n  loading="lazy"\n  src="https://stately.ai/registry/editor/embed/9e7f6b1e-416a-491f-a4a0-bba386a02d8d?mode=Design&machineId=e94d5674-7ab7-4a4e-b7a8-781609bfe523&colorMode=dark"\n  style="display: block; width: 100%; aspect-ratio: 6 / 4;"\n>\n  <a\n    href="https://stately.ai/registry/editor/embed/9e7f6b1e-416a-491f-a4a0-bba386a02d8d?mode=Design&machineId=e94d5674-7ab7-4a4e-b7a8-781609bfe523"\n  >\n    View the <em>Embed feature machine</em> machine in Stately Studio </a\n  >.\n</iframe>\n')),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"In the future, we plan to provide configurable embeds with copy-and-paste code."),(0,r.mdx)("p",{parentName:"admonition"},"If you want us to prioritize improving embed mode, please ",(0,r.mdx)("a",{parentName:"p",href:"https://feedback.stately.ai/editor/p/improve-embed-mode"},"upvote it on our feedback page"),".")),(0,r.mdx)("h2",{id:"url-parameters-including-color-mode"},"URL parameters, including color mode"),(0,r.mdx)("p",null,"The embed URL has some of the same parameters as the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/url"},"machine URL"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"machineId"),": the unique ID for the machine. For example, ",(0,r.mdx)("inlineCode",{parentName:"li"},"machineId=491a4c60-5300-4e22-92cf-8a32a8ffffca")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"mode"),": the current machine mode. For example, ",(0,r.mdx)("inlineCode",{parentName:"li"},"mode=Design")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"mode=Simulate")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"colorMode"),": the color mode for the embedded machine. For example, ",(0,r.mdx)("inlineCode",{parentName:"li"},"colorMode=light")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"colorMode=dark"))),(0,r.mdx)("p",null,"By default, the color mode will be the same as your chosen Stately Studio color mode. Add ",(0,r.mdx)("inlineCode",{parentName:"p"},"&colorMode=light")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"&colorMode=dark")," to the URL to force that color mode."))}s.isMDXComponent=!0}}]);