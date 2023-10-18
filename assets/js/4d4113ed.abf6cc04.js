"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[51032],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},64527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"How to manage global state with XState and React",description:"Everything you need to know to manage global state with XState and React.",authors:["matt"],date:new Date("2021-05-27T00:00:00.000Z"),tags:["xstate","react","redux","webdev"],category:"entry",image:"/blog/2021-05-27-global-state-xstate-react.png",slug:"2021-05-27-global-state-xstate-react"},l=void 0,s={permalink:"/statelyai-docs/blog/2021-05-27-global-state-xstate-react",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2021-05-27-global-state-xstate-react/index.mdx",source:"@site/blog/2021-05-27-global-state-xstate-react/index.mdx",title:"How to manage global state with XState and React",description:"Everything you need to know to manage global state with XState and React.",date:"2021-05-27T00:00:00.000Z",formattedDate:"May 27, 2021",tags:[{label:"xstate",permalink:"/statelyai-docs/blog/tags/xstate"},{label:"react",permalink:"/statelyai-docs/blog/tags/react"},{label:"redux",permalink:"/statelyai-docs/blog/tags/redux"},{label:"webdev",permalink:"/statelyai-docs/blog/tags/webdev"}],readingTime:4.025,hasTruncateMarker:!0,authors:[{name:"Matt Pocock",title:"Stately Team",url:"https://github.com/mattpocock",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/matt.png",key:"matt"}],frontMatter:{title:"How to manage global state with XState and React",description:"Everything you need to know to manage global state with XState and React.",authors:["matt"],date:"2021-05-27T00:00:00.000Z",tags:["xstate","react","redux","webdev"],category:"entry",image:"/blog/2021-05-27-global-state-xstate-react.png",slug:"2021-05-27-global-state-xstate-react"},prevItem:{title:"useState vs useReducer vs XState - Part 1: Modals",permalink:"/statelyai-docs/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals"},nextItem:{title:"Why I love invoked callbacks",permalink:"/statelyai-docs/blog/2021-05-13-why-i-love-invoked-callbacks"}},i={authorsImageUrls:[void 0]},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Many React applications follow the Flux architecture popularised by ",(0,n.mdx)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux"),". This setup can be characterised by a few key ideas:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"It uses a single object at the top of your app which stores all application state, often called the ",(0,n.mdx)("strong",{parentName:"li"},"store"),"."),(0,n.mdx)("li",{parentName:"ol"},"It provides a single ",(0,n.mdx)("inlineCode",{parentName:"li"},"dispatch")," function which can be used to send messages up to the store. Redux calls these ",(0,n.mdx)("inlineCode",{parentName:"li"},"action"),"s, but I'll be calling them ",(0,n.mdx)("inlineCode",{parentName:"li"},"events")," - as they're known in XState."),(0,n.mdx)("li",{parentName:"ol"},"How the store responds to these messages from the app are expressed in pure functions - most often in ",(0,n.mdx)("strong",{parentName:"li"},"reducers"),".")),(0,n.mdx)("p",null,"This article won't go into depth on whether the Flux architecture is a good idea. David Khourshid's article ",(0,n.mdx)("a",{parentName:"p",href:"https://dev.to/davidkpiano/redux-is-half-of-a-pattern-1-2-1hd7"},"Redux is half a pattern")," goes into great detail here. For the purposes of this article, we're going to assume that you like having a global store, and you want to replicate it in XState."))}d.isMDXComponent=!0}}]);