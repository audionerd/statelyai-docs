"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[81833],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){return function(t){var a=p(t.components);return n.createElement(e,o({},t,{components:a}))}},p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,g=s["".concat(i,".").concat(m)]||s[m]||c[m]||o;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},97776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Introducing the new Stately Roadmap",description:"We\u2019ve added a Roadmap to our Documentation, so you know what we\u2019re currently working on and what features are coming up soon.",tags:["stately","roadmap","introduction"],authors:["laura"],image:"/blog/2022-03-29-introducing-the-new-stately-roadmap.png",slug:"2022-03-29-introducing-the-new-stately-roadmap",date:new Date("2022-03-29T00:00:00.000Z")},i=void 0,l={permalink:"/blog/2022-03-29-introducing-the-new-stately-roadmap",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2022-03-29-introducing-the-new-stately-roadmap/index.mdx",source:"@site/blog/2022-03-29-introducing-the-new-stately-roadmap/index.mdx",title:"Introducing the new Stately Roadmap",description:"We\u2019ve added a Roadmap to our Documentation, so you know what we\u2019re currently working on and what features are coming up soon.",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"stately",permalink:"/blog/tags/stately"},{label:"roadmap",permalink:"/blog/tags/roadmap"},{label:"introduction",permalink:"/blog/tags/introduction"}],readingTime:.805,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Introducing the new Stately Roadmap",description:"We\u2019ve added a Roadmap to our Documentation, so you know what we\u2019re currently working on and what features are coming up soon.",tags:["stately","roadmap","introduction"],authors:["laura"],image:"/blog/2022-03-29-introducing-the-new-stately-roadmap.png",slug:"2022-03-29-introducing-the-new-stately-roadmap",date:"2022-03-29T00:00:00.000Z"},prevItem:{title:"Building a video player with XState and Stately tools",permalink:"/blog/2022/04/05/building-a-video-player"},nextItem:{title:"Stately is hiring!",permalink:"/blog/2022/03/28/stately-is-hiring"}},u={authorsImageUrls:[void 0]},d=[{value:"Upcoming features",id:"upcoming-features",level:2},{value:"XState",id:"xstate",level:3},{value:"Editor",id:"editor",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Please give us your feedback and suggestions",id:"please-give-us-your-feedback-and-suggestions",level:2}],s={toc:d};function p(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This week we\u2019ve added ",(0,r.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/roadmap"},"our Roadmap")," to the XState documentation."),(0,r.mdx)("p",null,"Many of you have requested a roadmap to help you determine if it\u2019s the right time to integrate XState and Stately tools into your team\u2019s workflow. We\u2019ve added a simple Roadmap so you know what we\u2019re currently working on and what features are coming up soon."),(0,r.mdx)("h2",{id:"upcoming-features"},"Upcoming features"),(0,r.mdx)("p",null,"To give you an idea of what we\u2019re working on, below are the features currently planned for April - June 2022."),(0,r.mdx)("h3",{id:"xstate"},"XState"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"XState v5 Alpha")),(0,r.mdx)("h3",{id:"editor"},"Editor"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Billing and Teams"),(0,r.mdx)("li",{parentName:"ul"},"Feature parity with XState"),(0,r.mdx)("li",{parentName:"ul"},"Authentication bug fixes"),(0,r.mdx)("li",{parentName:"ul"},"Welcome emails"),(0,r.mdx)("li",{parentName:"ul"},"Inline editing"),(0,r.mdx)("li",{parentName:"ul"},"Simulation mode"),(0,r.mdx)("li",{parentName:"ul"},"Markdown descriptions"),(0,r.mdx)("li",{parentName:"ul"},"Workflow creation")),(0,r.mdx)("h3",{id:"documentation"},"Documentation"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Stately tools visibility"),(0,r.mdx)("li",{parentName:"ul"},"Update and rework")),(0,r.mdx)("h2",{id:"please-give-us-your-feedback-and-suggestions"},"Please give us your feedback and suggestions"),(0,r.mdx)("p",null,"We prioritize features based on your feedback. Please let us know if you have feedback or suggestions in ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/discussions"},"our GitHub Discussions"),", ",(0,r.mdx)("a",{parentName:"p",href:"https://discord.gg/xstate"},"our Discord")," or on ",(0,r.mdx)("a",{parentName:"p",href:"https://twitter.com/statelyai"},"Twitter"),"."))}p.isMDXComponent=!0}}]);