"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[31577],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>m,MDXProvider:()=>d,mdx:()=>w,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={title:"Generate flow"},l=void 0,i={unversionedId:"generate-flow",id:"generate-flow",title:"Generate flow",description:"Generate flow is an experimental feature that helps you auto-create machines from text descriptions. You can generate a flow for a new machine or use the flow description to describe how you want to modify your current flow.",source:"@site/docs/generate-flow.mdx",sourceDirName:".",slug:"/generate-flow",permalink:"/docs/generate-flow",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/generate-flow.mdx",tags:[],version:"current",frontMatter:{title:"Generate flow"},sidebar:"docs",previous:{title:"Export as code",permalink:"/docs/export-as-code"},next:{title:"Colors",permalink:"/docs/colors"}},s={},m=[{value:"Generate a new flow",id:"generate-a-new-flow",level:2},{value:"Generate from current flow",id:"generate-from-current-flow",level:2},{value:"View history",id:"view-history",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)},u=p("YouTube"),d=p("History"),c={toc:m};function f(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Generate flow")," is an experimental feature that helps you auto-create machines from text descriptions. You can generate a flow for a new machine or use the flow description to describe how you want to modify your current flow."),(0,o.mdx)("admonition",{type:"studio"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("strong",{parentName:"p"},"Generate flow")," is a Pro feature of the Studio. ",(0,o.mdx)("a",{parentName:"p",href:"/docs/studio-pro-plan"},"Check out the features on our Pro plan")," or ",(0,o.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/billing"},"upgrade to try the Pro plan with a 30-day free trial"),".")),(0,o.mdx)("p",null,"You have 1000 generations available to use each month. The number of available generations is reset at the beginning of each calendar month."),(0,o.mdx)("p",null,"There are many reasons you might want to generate your flows, including:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"You have a complex machine in mind and want to get started quickly"),(0,o.mdx)("li",{parentName:"ul"},"You want an example of a state machine for a particular flow"),(0,o.mdx)("li",{parentName:"ul"},"You\u2019re new and want to get an idea of how you can model state machines")),(0,o.mdx)(u,{id:"wjZE39wCZXo",mdxType:"YouTube"}),(0,o.mdx)("h2",{id:"generate-a-new-flow"},"Generate a new flow"),(0,o.mdx)("p",null,"Generating a new flow will overwrite your current machine with an all-new flow created from your text description."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)("strong",{parentName:"li"},"Generate flow")," button to open the generate flow dialog."),(0,o.mdx)("li",{parentName:"ol"},"Deselect ",(0,o.mdx)("strong",{parentName:"li"},"Generate from current flow")," to create an all-new flow. ",(0,o.mdx)("a",{parentName:"li",href:"#generate-from-current-flow"},"Read more about generate from current flow below"),"."),(0,o.mdx)("li",{parentName:"ol"},"Enter a text description of the flow you want to generate in as much detail as possible."),(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)("strong",{parentName:"li"},"Generate")," button to generate your flow.")),(0,o.mdx)("p",null,"When you generate an all-new flow, only your prompt text is sent to OpenAI."),(0,o.mdx)("h2",{id:"generate-from-current-flow"},"Generate from current flow"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)("strong",{parentName:"li"},"Generate flow")," button to open the generate flow dialog."),(0,o.mdx)("li",{parentName:"ol"},"Ensure ",(0,o.mdx)("strong",{parentName:"li"},"Generate from current flow")," is selected to modify your current machine."),(0,o.mdx)("li",{parentName:"ol"},"Enter a text description of the changes you want to make to your machine in as much detail as possible."),(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)("strong",{parentName:"li"},"Generate")," button to generate your flow.")),(0,o.mdx)("p",null,"When you use ",(0,o.mdx)("strong",{parentName:"p"},"Generate from current flow"),", we share your machine definition with OpenAI to help build the response."),(0,o.mdx)("h2",{id:"view-history"},"View history"),(0,o.mdx)("p",null,"You can view a history of text descriptions used to generate flows for the current machine. Use the ",(0,o.mdx)("strong",{parentName:"p"},"View history")," button inside the ",(0,o.mdx)("strong",{parentName:"p"},"Generate flow")," dialog to find your ",(0,o.mdx)("strong",{parentName:"p"},"Prompt history"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Use ",(0,o.mdx)("strong",{parentName:"li"},"Open flow")," to preview the ",(0,o.mdx)("a",{parentName:"li",href:"/docs/versions"},"version")," of the machine generated from the selected prompt."),(0,o.mdx)("li",{parentName:"ul"},"Use ",(0,o.mdx)("strong",{parentName:"li"},"Copy to prompt")," to copy the selected prompt into the text description area of the ",(0,o.mdx)("strong",{parentName:"li"},"Generate flow")," dialog.")),(0,o.mdx)("p",null,"A new ",(0,o.mdx)("a",{parentName:"p",href:"/docs/versions"},"version")," is auto-saved every time you generate a flow. Use the ",(0,o.mdx)(d,{size:18,mdxType:"History"})," ",(0,o.mdx)("strong",{parentName:"p"},"Versions")," panel and switch the ",(0,o.mdx)("strong",{parentName:"p"},"Show auto-saved versions")," toggle on to browse auto-saved versions of your current machine."))}f.isMDXComponent=!0}}]);