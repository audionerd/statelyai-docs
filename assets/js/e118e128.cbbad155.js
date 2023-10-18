"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[53634],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Should this be a state, or in context?",description:"How to decide when to use state or context.",tags:["context","state machine","xstate","state"],authors:["matt"],image:"/blog/2021-04-29-should-this-be-a-state-or-in-context.png",slug:"2021-04-29-should-this-be-a-state-or-in-context",date:new Date("2021-04-29T00:00:00.000Z")},s=void 0,i={permalink:"/statelyai-docs/blog/2021-04-29-should-this-be-a-state-or-in-context",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2021-04-29-should-this-be-a-state-or-in-context/index.mdx",source:"@site/blog/2021-04-29-should-this-be-a-state-or-in-context/index.mdx",title:"Should this be a state, or in context?",description:"How to decide when to use state or context.",date:"2021-04-29T00:00:00.000Z",formattedDate:"April 29, 2021",tags:[{label:"context",permalink:"/statelyai-docs/blog/tags/context"},{label:"state machine",permalink:"/statelyai-docs/blog/tags/state-machine"},{label:"xstate",permalink:"/statelyai-docs/blog/tags/xstate"},{label:"state",permalink:"/statelyai-docs/blog/tags/state"}],readingTime:3.48,hasTruncateMarker:!0,authors:[{name:"Matt Pocock",title:"Stately Team",url:"https://github.com/mattpocock",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/matt.png",key:"matt"}],frontMatter:{title:"Should this be a state, or in context?",description:"How to decide when to use state or context.",tags:["context","state machine","xstate","state"],authors:["matt"],image:"/blog/2021-04-29-should-this-be-a-state-or-in-context.png",slug:"2021-04-29-should-this-be-a-state-or-in-context",date:"2021-04-29T00:00:00.000Z"},prevItem:{title:"Should this be an action, or a service?",permalink:"/statelyai-docs/blog/2021-04-30-should-this-be-an-action-or-a-service"},nextItem:{title:"What\u2019s the difference between Machine and createMachine?",permalink:"/statelyai-docs/blog/2021-04-28-whats-the-difference-between-machine-and-createmachine"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"State machines offer several API\u2019s for expressing state. Like other tools, you can keep arbitrary values in a store (usually expressed as an object) called ",(0,r.mdx)("inlineCode",{parentName:"p"},"context"),"."))}p.isMDXComponent=!0}}]);