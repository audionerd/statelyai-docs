"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[18595],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>d,useMDXComponents:()=>f,withMDXComponents:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){return function(t){var r=f(t.components);return a.createElement(e,o({},t,{components:r}))}},f=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=f(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=f(r),p=n,g=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Stately Office Hours 68",description:"We\u2019ve recently launched a huge Stately release, and we covered it all (as well as some even newer features!) in our latest office hours live stream.",tags:["stately","studio","office hours","colors","actions","canvas","grid","ui","xstate","xstate v5"],authors:["laura"],date:new Date("2023-07-26T00:00:00.000Z"),slug:"2023-07-26-office-hours-68",image:"/blog/2023-07-26-office-hours-68.png"},l=void 0,s={permalink:"/blog/2023-07-26-office-hours-68",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-07-26-office-hours-68/index.mdx",source:"@site/blog/2023-07-26-office-hours-68/index.mdx",title:"Stately Office Hours 68",description:"We\u2019ve recently launched a huge Stately release, and we covered it all (as well as some even newer features!) in our latest office hours live stream.",date:"2023-07-26T00:00:00.000Z",formattedDate:"July 26, 2023",tags:[{label:"stately",permalink:"/blog/tags/stately"},{label:"studio",permalink:"/blog/tags/studio"},{label:"office hours",permalink:"/blog/tags/office-hours"},{label:"colors",permalink:"/blog/tags/colors"},{label:"actions",permalink:"/blog/tags/actions"},{label:"canvas",permalink:"/blog/tags/canvas"},{label:"grid",permalink:"/blog/tags/grid"},{label:"ui",permalink:"/blog/tags/ui"},{label:"xstate",permalink:"/blog/tags/xstate"},{label:"xstate v5",permalink:"/blog/tags/xstate-v-5"}],readingTime:1.48,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Stately Office Hours 68",description:"We\u2019ve recently launched a huge Stately release, and we covered it all (as well as some even newer features!) in our latest office hours live stream.",tags:["stately","studio","office hours","colors","actions","canvas","grid","ui","xstate","xstate v5"],authors:["laura"],date:"2023-07-26T00:00:00.000Z",slug:"2023-07-26-office-hours-68",image:"/blog/2023-07-26-office-hours-68.png"},prevItem:{title:"Markdown in annotations, performance improvements, and more!",permalink:"/blog/2023-08-04-markdown-in-annotations"},nextItem:{title:"Stately minor improvements",permalink:"/blog/2023-07-26-stately-minor-improvements"}},i={authorsImageUrls:[void 0]},c=[],u={toc:c};function f(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"We\u2019ve recently launched a huge Stately release, and we covered it all (as well as some even newer features!) in our latest office hours live stream."))}f.isMDXComponent=!0}}]);