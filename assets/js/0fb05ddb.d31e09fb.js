"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4238],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"What\u2019s new in June 2022?",description:"Updates to XState, @xstate/test and the Stately editor in the last month.",tags:["stately","xstate","announcement","release","lightmode","xstate test"],authors:["laura"],image:"/blog/2022-06-07-whats-new-june-2022.png",slug:"2022-06-07-whats-new-june-2022",date:new Date("2022-06-07T00:00:00.000Z")},s=void 0,l={permalink:"/statelyai-docs/blog/2022-06-07-whats-new-june-2022",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2022-06-07-whats-new-june-2022/index.mdx",source:"@site/blog/2022-06-07-whats-new-june-2022/index.mdx",title:"What\u2019s new in June 2022?",description:"Updates to XState, @xstate/test and the Stately editor in the last month.",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"stately",permalink:"/statelyai-docs/blog/tags/stately"},{label:"xstate",permalink:"/statelyai-docs/blog/tags/xstate"},{label:"announcement",permalink:"/statelyai-docs/blog/tags/announcement"},{label:"release",permalink:"/statelyai-docs/blog/tags/release"},{label:"lightmode",permalink:"/statelyai-docs/blog/tags/lightmode"},{label:"xstate test",permalink:"/statelyai-docs/blog/tags/xstate-test"}],readingTime:1.39,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"What\u2019s new in June 2022?",description:"Updates to XState, @xstate/test and the Stately editor in the last month.",tags:["stately","xstate","announcement","release","lightmode","xstate test"],authors:["laura"],image:"/blog/2022-06-07-whats-new-june-2022.png",slug:"2022-06-07-whats-new-june-2022",date:"2022-06-07T00:00:00.000Z"},prevItem:{title:"Nesting XState typegen files",permalink:"/statelyai-docs/blog/nesting-typegen-files"},nextItem:{title:"What\u2019s new in May 2022?",permalink:"/statelyai-docs/blog/2022-05-03-whats-new-may-2022"}},i={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"We\u2019ve had a busy month and have plenty to share with you this June!"))}p.isMDXComponent=!0}}]);