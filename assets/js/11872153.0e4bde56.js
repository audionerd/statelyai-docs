"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[56480],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Tags"},s=void 0,i={unversionedId:"tags",id:"tags",title:"Tags",description:'State nodes can have tags, which are string terms that help group or categorize the state node. For example, you can signify which state nodes represent states in which data is being loaded by using a "loading" tag, and determine if a state contains those tagged state nodes with state.hasTag(tag):',source:"@site/docs/tags.mdx",sourceDirName:".",slug:"/tags",permalink:"/statelyai-docs/docs/tags",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/tags.mdx",tags:[],version:"current",frontMatter:{title:"Tags"},sidebar:"docs",previous:{title:"Persistence",permalink:"/statelyai-docs/docs/persistence"},next:{title:"Actors ",permalink:"/statelyai-docs/docs/category/actors"}},l={},c=[{value:"Using tags in Stately Studio",id:"using-tags-in-stately-studio",level:2},{value:"On the canvas",id:"on-the-canvas",level:3},{value:"Using the event details panel",id:"using-the-event-details-panel",level:3},{value:"TypeScript",id:"typescript",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)},p=d("Plus"),m=d("Tag"),u=d("PlusSquare"),g=d("Info"),h={toc:c};function y(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"State nodes can have ",(0,r.mdx)("strong",{parentName:"p"},"tags"),', which are string terms that help group or categorize the state node. For example, you can signify which state nodes represent states in which data is being loaded by using a "loading" tag, and determine if a state contains those tagged state nodes with ',(0,r.mdx)("inlineCode",{parentName:"p"},"state.hasTag(tag)"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'prompt',\n  states: {\n    prompt: {\n      tags: ['visible'],\n      // ...\n    },\n    form: {\n      tags: ['visible'],\n      // ...\n    },\n    thanks: {\n      tags: ['visible', 'confetti'],\n      // ...\n    },\n    closed: {\n      tags: ['hidden'],\n    },\n  },\n});\n\nconst feedbackActor = createActor(feedbackMachine).start();\n\nconsole.log(feedbackActor..getSnapshot().hasTag('visible'));\n// logs true\n")),(0,r.mdx)("h2",{id:"using-tags-in-stately-studio"},"Using tags in Stately Studio"),(0,r.mdx)("p",null,"You can add tags to states and events in Stately Studio."),(0,r.mdx)("p",null,"First, select the state or event you want to tag."),(0,r.mdx)("h3",{id:"on-the-canvas"},"On the canvas"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)(p,{size:18,mdxType:"Plus"})," plus icon button to open the edit menu."),(0,r.mdx)("li",{parentName:"ol"},"Choose ",(0,r.mdx)(m,{size:18,mdxType:"Tag"})," ",(0,r.mdx)("strong",{parentName:"li"},"Tag")," from the menu to add a tag block."),(0,r.mdx)("li",{parentName:"ol"},"Write your tag\u2019s name in the tag\u2019s text input."),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)(u,{size:18,mdxType:"PlusSquare"})," plus icon button alongside your recent tag to add more tags.")),(0,r.mdx)("h3",{id:"using-the-event-details-panel"},"Using the event details panel"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Open the state or event ",(0,r.mdx)(g,{size:18,mdxType:"Info"})," ",(0,r.mdx)("strong",{parentName:"li"},"Details")," panel from the right tool menu."),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)("strong",{parentName:"li"},"+ Tag")," button to add a tag block."),(0,r.mdx)("li",{parentName:"ol"},"Write your tag\u2019s name in the tag\u2019s text input."),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)(u,{size:18,mdxType:"PlusSquare"})," plus icon button alongside your recent tag to add more tags.")),(0,r.mdx)("h2",{id:"typescript"},"TypeScript"),(0,r.mdx)("p",null,"You can strongly type the ",(0,r.mdx)("inlineCode",{parentName:"p"},"guards")," of your machine in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"types.guards")," property of the machine config."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine({\n  types: {} as {\n    // highlight-start\n    tags: 'pending' | 'success' | 'error';\n    // highlight-end\n  },\n  // ...\n  states: {\n    loadingUser: {\n      tags: ['pending'],\n    },\n  },\n});\n\nconst actor = createActor(machine).start();\n\nactor\n  .getSnapshot()\n  // Autocompleted\n  .hasTag('pending');\n")))}y.isMDXComponent=!0}}]);