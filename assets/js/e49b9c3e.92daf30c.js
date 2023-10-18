"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[78439],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){return function(t){var a=d(t.components);return n.createElement(e,o({},t,{components:a}))}},d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,h=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Redux is half of a pattern (1/2)",description:"Learn how Redux, and all other state management libraries, have one thing in common - they are all partial implementations of state machines - and how we can improve the way we model app state and logic.",tags:["redux","state machine","statechart","state"],date:new Date("2020-01-20T00:00:00.000Z"),authors:["david"],image:"/blog/2020-01-20-redux-is-half-a-pattern-1-2.png",slug:"2020-01-20-redux-is-half-a-pattern-1-2"},i=void 0,s={permalink:"/statelyai-docs/blog/2020-01-20-redux-is-half-a-pattern-1-2",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2020-01-20-redux-is-half-a-pattern-1-2/index.mdx",source:"@site/blog/2020-01-20-redux-is-half-a-pattern-1-2/index.mdx",title:"Redux is half of a pattern (1/2)",description:"Learn how Redux, and all other state management libraries, have one thing in common - they are all partial implementations of state machines - and how we can improve the way we model app state and logic.",date:"2020-01-20T00:00:00.000Z",formattedDate:"January 20, 2020",tags:[{label:"redux",permalink:"/statelyai-docs/blog/tags/redux"},{label:"state machine",permalink:"/statelyai-docs/blog/tags/state-machine"},{label:"statechart",permalink:"/statelyai-docs/blog/tags/statechart"},{label:"state",permalink:"/statelyai-docs/blog/tags/state"}],readingTime:18.495,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"Redux is half of a pattern (1/2)",description:"Learn how Redux, and all other state management libraries, have one thing in common - they are all partial implementations of state machines - and how we can improve the way we model app state and logic.",tags:["redux","state machine","statechart","state"],date:"2020-01-20T00:00:00.000Z",authors:["david"],image:"/blog/2020-01-20-redux-is-half-a-pattern-1-2.png",slug:"2020-01-20-redux-is-half-a-pattern-1-2"},prevItem:{title:"Redux is half of a pattern (2/2)",permalink:"/statelyai-docs/blog/2020-05-22-redux-is-half-a-pattern-2-2"},nextItem:{title:"XState: version 4.7 and the future",permalink:"/statelyai-docs/blog/2019-12-09-xstate-version-47-and-the-future"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("link",{rel:"canonical",href:"https://dev.to/davidkpiano/redux-is-half-of-a-pattern-1-2-1hd7"})),(0,r.mdx)("p",null,"Redux is fantastic."),(0,r.mdx)("p",null,"Some of you might disagree, so let me tell you why."),(0,r.mdx)("p",null,"Over the last few years, Redux has popularized the idea of using message-passing (also known as ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Event-driven_programming"},"event-driven programming"),') to manage application state. Instead of making arbitrary method calls to various class instances or mutating data structures, we now can think of state as being in a "predictable container" that only changes as a reaction to these "events".'))}d.isMDXComponent=!0}}]);