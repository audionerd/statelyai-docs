"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[28818],{3905:(e,o,r)=>{r.r(o),r.d(o,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>d});var t=r(67294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(){return n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},n.apply(this,arguments)}function s(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?s(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){return function(o){var r=u(o.components);return t.createElement(e,n({},o,{components:r}))}},u=function(e){var o=t.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},m=function(e){var o=u(e.components);return t.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},f=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?t.createElement(f,i(i({ref:o},c),{},{components:r})):t.createElement(f,i({ref:o},c))}));function h(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=f;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68886:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const n={title:"Improving your flows with color",description:"As part of our recent colossal release, we\u2019ve launched a new feature for pro users - colors.",tags:["stately studio","state machines","color","pro features"],authors:["laura"],slug:"2023-07-24-improving-your-flows-with-color",image:"/blog/2023-07-24-improving-your-flows-with-color.png",date:new Date("2023-07-24T00:00:00.000Z")},s=void 0,i={permalink:"/blog/2023-07-24-improving-your-flows-with-color",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-07-24-improving-your-flows-with-color/index.mdx",source:"@site/blog/2023-07-24-improving-your-flows-with-color/index.mdx",title:"Improving your flows with color",description:"As part of our recent colossal release, we\u2019ve launched a new feature for pro users - colors.",date:"2023-07-24T00:00:00.000Z",formattedDate:"July 24, 2023",tags:[{label:"stately studio",permalink:"/blog/tags/stately-studio"},{label:"state machines",permalink:"/blog/tags/state-machines"},{label:"color",permalink:"/blog/tags/color"},{label:"pro features",permalink:"/blog/tags/pro-features"}],readingTime:3.3,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Improving your flows with color",description:"As part of our recent colossal release, we\u2019ve launched a new feature for pro users - colors.",tags:["stately studio","state machines","color","pro features"],authors:["laura"],slug:"2023-07-24-improving-your-flows-with-color",image:"/blog/2023-07-24-improving-your-flows-with-color.png",date:"2023-07-24T00:00:00.000Z"},prevItem:{title:"Stately minor improvements",permalink:"/blog/2023-07-26-stately-minor-improvements"},nextItem:{title:"Export to Mermaid",permalink:"/blog/2023-07-20-export-to-mermaid"}},l={authorsImageUrls:[void 0]},c=[{value:"How can I use colors in Stately?",id:"how-can-i-use-colors-in-stately",level:2},{value:"Why use colors?",id:"why-use-colors",level:2},{value:"Color coding groups or types of states or events",id:"color-coding-groups-or-types-of-states-or-events",level:3},{value:"Organize flows into regions with distinct colors",id:"organize-flows-into-regions-with-distinct-colors",level:3},{value:"Use color for fun!",id:"use-color-for-fun",level:3},{value:"How to use colors in your flows",id:"how-to-use-colors-in-your-flows",level:2},{value:"More Pro features",id:"more-pro-features",level:2}],d=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",o)},u=d("ThemedImage"),m=d("EmbedMachine"),p={toc:c};function f(e){let{components:o,...r}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"As part of our recent colossal release, we\u2019ve launched a new feature for pro users - ",(0,a.mdx)("a",{parentName:"p",href:"/docs/colors"},"colors"),". With this feature, you can add a layer of visual distinction to your statecharts, making them more organized, informative, and accessible for your team to understand."),(0,a.mdx)("p",null,(0,a.mdx)(u,{alt:"State machine showing how to choose colors from the color palette, and the colors for default (grey in darkmode, white in lightmode), pink, purple, red, orange, yellow, green, and blue states and transitions.",sources:{light:"/blog/2023-07-24-improving-your-flows-with-color/choosing-colors.png",dark:"/blog/2023-07-24-improving-your-flows-with-color/choosing-colors-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("h2",{id:"how-can-i-use-colors-in-stately"},"How can I use colors in Stately?"),(0,a.mdx)("p",null,"You can assign colors from the palette menu to different states and transitions in your flows. You can choose from various color options, including pink, purple, red, orange, yellow, green, and blue. You can also reset a state or transition back to the default color; gray in dark mode and white in light mode."),(0,a.mdx)("h2",{id:"why-use-colors"},"Why use colors?"),(0,a.mdx)("p",null,"Many folks requested colors for their state machines, not just because colors make everything prettier! The bigger a machine gets, the more you want to distinguish or draw attention to particular states or transitions."),(0,a.mdx)("h3",{id:"color-coding-groups-or-types-of-states-or-events"},"Color coding groups or types of states or events"),(0,a.mdx)("p",null,"One common use is to connect color to a meaning, such as making error states red and success states green. You could set transition colors to identify a common target, shared source, or group states and transitions meaningfully for your team."),(0,a.mdx)(m,{name:"Editor page machine",embedURL:"https://stately.ai/registry/editor/embed/7b5d60dc-94b0-4a1e-9ade-ea644b8cc35f?machineId=8b2c257c-2060-45a5-bdb1-e91b7f5c9318",mdxType:"EmbedMachine"}),(0,a.mdx)("p",null,"The machine above uses yellow for user events, purple for system events, and red for errors."),(0,a.mdx)("h3",{id:"organize-flows-into-regions-with-distinct-colors"},"Organize flows into regions with distinct colors"),(0,a.mdx)("p",null,"Some other ways to use color are to use different colors to highlight different user personas or stories or mark popular paths through your app based on usage data."),(0,a.mdx)(m,{name:"",embedURL:"https://stately.ai/registry/editor/embed/7b5d60dc-94b0-4a1e-9ade-ea644b8cc35f?machineId=35d9c021-9b00-4c6f-85c9-1f2fece5d0c5",mdxType:"EmbedMachine"}),(0,a.mdx)("h3",{id:"use-color-for-fun"},"Use color for fun!"),(0,a.mdx)("p",null,"Or maybe you want to use color for fun. You can use color to decorate your flows to fit your brand or decorate your states and transitions."),(0,a.mdx)(m,{name:"Traffic light machine",embedURL:"https://stately.ai/registry/editor/embed/7b5d60dc-94b0-4a1e-9ade-ea644b8cc35f?machineId=e35f9079-722e-4812-8103-e63ada46456f",mdxType:"EmbedMachine"}),(0,a.mdx)("h2",{id:"how-to-use-colors-in-your-flows"},"How to use colors in your flows"),(0,a.mdx)("p",null,"Read more about ",(0,a.mdx)("a",{parentName:"p",href:"/docs/colors"},"adding colors")," and ",(0,a.mdx)("a",{parentName:"p",href:"/docs/upgrade"},"upgrading to a Pro account")," in our docs."),(0,a.mdx)("p",null,"If you want to explain your color coding, we\u2019ve had success using an annotation box as a key to help others understand the meaning behind each color."),(0,a.mdx)("p",null,(0,a.mdx)(u,{alt:"State machine with red, yellow, and purple transitions, and an annotation containing a key with yellow for user events, purple for system events and red for errors.",sources:{light:"/blog/2023-07-24-improving-your-flows-with-color/color-key.png",dark:"/blog/2023-07-24-improving-your-flows-with-color/color-key-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("p",null,"When using colors to convey information, it is essential to keep accessibility in mind. Not everyone perceives color the same way, and as many as 8% of men and 0.5% of women are color blind. Ensure your statecharts are inclusive by using color to emphasize or decorate your machines, and ",(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"},"do not use color as the only way to convey information"),"."),(0,a.mdx)("p",null,"To make your colored machines more accessible, add the color or symbolic name as a tag on your states and transitions, or include them in their descriptions."),(0,a.mdx)(m,{name:"Expense machine",embedURL:"https://stately.ai/registry/editor/embed/7b5d60dc-94b0-4a1e-9ade-ea644b8cc35f?machineId=9a62b8b1-b5a3-4b15-a5ed-acfe5f65da80",mdxType:"EmbedMachine"}),(0,a.mdx)("p",null,"Colors are a powerful feature that helps you improve your statecharts' organization, clarity, and user-friendliness. To learn more about using Colors, check out our ",(0,a.mdx)("a",{parentName:"p",href:"/docs/colors"},"documentation"),"."),(0,a.mdx)("h2",{id:"more-pro-features"},"More Pro features"),(0,a.mdx)("p",null,"Colors is one of many Pro features we've recently added to Stately. Our current Pro features include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/teams"},"Teams and shared projects")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/projects#change-a-projects-visibility"},"Private and unlisted projects")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/versions"},"Version history")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/import-from-github"},"Import from GitHub")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/live-simulation"},"Live simulation mode")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/colors"},"Color states and transitions")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/studio-pro-plan#priority-support"},"Priority support")),(0,a.mdx)("li",{parentName:"ul"},"GitHub Sync (coming soon!)"),(0,a.mdx)("li",{parentName:"ul"},"Workflows (coming soon!)"),(0,a.mdx)("li",{parentName:"ul"},"Live collaboration (coming soon!)")),(0,a.mdx)("p",null,"And we've got many more coming soon! Want to suggest a feature? Leave a feature request on our feedback board or upvote other features we should prioritize."),(0,a.mdx)("p",null,"Want to try the Pro plan? You can get a 30-day free trial when you ",(0,a.mdx)("a",{parentName:"p",href:"/pricing"},"join from our website")," or ",(0,a.mdx)("a",{parentName:"p",href:"/docs/upgrade"},"upgrade")," from ",(0,a.mdx)("a",{parentName:"p",href:"https://state.new"},"the editor"),"."))}f.isMDXComponent=!0}}]);