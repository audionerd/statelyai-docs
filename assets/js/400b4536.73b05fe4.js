"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[43792],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),u=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,n=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),p=s,f=u["".concat(n,".").concat(p)]||u[p]||m[p]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},40698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),s=(a(67294),a(3905));const o={title:"useState vs useReducer vs XState - Part 1: Modals",description:"Managing state at different levels of complexity is hard. This series of articles should help you make the right choices off the bat. Today we\u2019re starting with modals.",tags:["modal","react","useState","useReducer","xstate"],authors:["matt"],image:"/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals.png",slug:"2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals",date:new Date("2021-07-28T00:00:00.000Z")},n=void 0,l={permalink:"/statelyai-docs/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals/index.mdx",source:"@site/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals/index.mdx",title:"useState vs useReducer vs XState - Part 1: Modals",description:"Managing state at different levels of complexity is hard. This series of articles should help you make the right choices off the bat. Today we\u2019re starting with modals.",date:"2021-07-28T00:00:00.000Z",formattedDate:"July 28, 2021",tags:[{label:"modal",permalink:"/statelyai-docs/blog/tags/modal"},{label:"react",permalink:"/statelyai-docs/blog/tags/react"},{label:"useState",permalink:"/statelyai-docs/blog/tags/use-state"},{label:"useReducer",permalink:"/statelyai-docs/blog/tags/use-reducer"},{label:"xstate",permalink:"/statelyai-docs/blog/tags/xstate"}],readingTime:7.245,hasTruncateMarker:!0,authors:[{name:"Matt Pocock",title:"Stately Team",url:"https://github.com/mattpocock",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/matt.png",key:"matt"}],frontMatter:{title:"useState vs useReducer vs XState - Part 1: Modals",description:"Managing state at different levels of complexity is hard. This series of articles should help you make the right choices off the bat. Today we\u2019re starting with modals.",tags:["modal","react","useState","useReducer","xstate"],authors:["matt"],image:"/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals.png",slug:"2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals",date:"2021-07-28T00:00:00.000Z"},prevItem:{title:"Introduction to state machines and statecharts",permalink:"/statelyai-docs/blog/2021-10-02-intro-fsm-sc"},nextItem:{title:"How to manage global state with XState and React",permalink:"/statelyai-docs/blog/2021-05-27-global-state-xstate-react"}},i={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,s.mdx)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"Managing state at different levels of complexity is hard. Different tools make different trade-offs between readability, complexity and speed of development. The worst part is that as apps get more complex, it\u2019s easy to regret choices that were made early on."),(0,s.mdx)("p",null,"This series of articles should help you make the right choice off the bat. The plan is to cover a bunch of state use cases, starting with the simple and graduating to more complexity as we go. We\u2019ll see how easy they are to write, and also how they survive changing requirements."),(0,s.mdx)("p",null,"Today, we\u2019re starting with ",(0,s.mdx)("a",{parentName:"p",href:"https://material-ui.com/components/modal/"},"modals"),"."))}d.isMDXComponent=!0}}]);