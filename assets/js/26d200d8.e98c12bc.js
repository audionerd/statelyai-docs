"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[10664],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){return function(t){var a=p(t.components);return n.createElement(e,r({},t,{components:a}))}},p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(a),c=o,w=d["".concat(i,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(w,l(l({ref:t},s),{},{components:a})):n.createElement(w,l({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=w;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}w.displayName="MDXCreateElement"},6410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Building a video player with XState and Stately tools",description:"A few weeks ago we uploaded a new video to the Stately YouTube channel showing how you can build basic video player functionality using XState and Stately tools.",tags:["xstate","modeling","tutorial"],authors:["laura"],date:new Date("2022-04-05T00:00:00.000Z"),slug:"/2022/04/05/building-a-video-player",image:"/blog//2022/04/05/building-a-video-player.png"},i=void 0,l={permalink:"/blog/2022/04/05/building-a-video-player",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2022-04-05-building-a-video-player/index.mdx",source:"@site/blog/2022-04-05-building-a-video-player/index.mdx",title:"Building a video player with XState and Stately tools",description:"A few weeks ago we uploaded a new video to the Stately YouTube channel showing how you can build basic video player functionality using XState and Stately tools.",date:"2022-04-05T00:00:00.000Z",formattedDate:"April 5, 2022",tags:[{label:"xstate",permalink:"/blog/tags/xstate"},{label:"modeling",permalink:"/blog/tags/modeling"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:.63,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Building a video player with XState and Stately tools",description:"A few weeks ago we uploaded a new video to the Stately YouTube channel showing how you can build basic video player functionality using XState and Stately tools.",tags:["xstate","modeling","tutorial"],authors:["laura"],date:"2022-04-05T00:00:00.000Z",slug:"/2022/04/05/building-a-video-player",image:"/blog//2022/04/05/building-a-video-player.png"},prevItem:{title:"What\u2019s new in May 2022?",permalink:"/blog/2022-05-03-whats-new-may-2022"},nextItem:{title:"Introducing the new Stately Roadmap",permalink:"/blog/2022-03-29-introducing-the-new-stately-roadmap"}},u={authorsImageUrls:[void 0]},s=[{value:"Video chapters",id:"video-chapters",level:2},{value:"We want your suggestions and feedback",id:"we-want-your-suggestions-and-feedback",level:2}],d=(p="YouTube",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const c={toc:s};function m(e){let{components:t,...a}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A few weeks ago we uploaded a new video to the ",(0,o.mdx)("a",{parentName:"p",href:"http://youtube.com/c/statelyai"},"Stately YouTube channel")," showing how you can build basic video player functionality using XState and Stately tools. You can watch the video below or ",(0,o.mdx)("a",{parentName:"p",href:"/#video-chapters"},"use the chapter links")," to jump to the chapter you want to watch."),(0,o.mdx)(d,{id:"3wZBSeLxVEw?",mdxType:"YouTube"}),(0,o.mdx)("h2",{id:"video-chapters"},"Video chapters"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wZBSeLxVEw&t=0s"},"0:00")," What we want to build"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wZBSeLxVEw&t=172s"},"2:52")," Modeling the video player"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wZBSeLxVEw&t=583s"},"9:43")," Implementing the state machine"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wZBSeLxVEw&t=1189s"},"19:49")," Modeling with the visual editor"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wZBSeLxVEw&t=1330s"},"22:10")," Editing the state machine"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wZBSeLxVEw&t=1505s"},"25:05")," Editing the state machine in the visual editor")),(0,o.mdx)("h2",{id:"we-want-your-suggestions-and-feedback"},"We want your suggestions and feedback"),(0,o.mdx)("p",null,"Please let us know what we should demo for you! Share your feedback or suggestions in ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/discussions"},"our GitHub Discussions"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://discord.gg/xstate"},"our Discord")," or ",(0,o.mdx)("a",{parentName:"p",href:"https://twitter.com/statelyai"},"Twitter"),"."))}m.isMDXComponent=!0}}]);