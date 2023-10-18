"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[82416],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){return function(t){var a=m(t.components);return n.createElement(e,s({},t,{components:a}))}},m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),p=r,h=d["".concat(o,".").concat(p)]||d[p]||u[p]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={title:"What\u2019s new in May 2022?",description:"Updates to XState, @xstate/react and @xstate/fsm in the last month.",tags:["stately","xstate","announcement","release"],authors:["laura"],image:"/blog/2022-05-03-whats-new-may-2022.png",slug:"2022-05-03-whats-new-may-2022",date:new Date("2022-05-03T00:00:00.000Z")},o=void 0,i={permalink:"/blog/2022-05-03-whats-new-may-2022",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2022-05-03-whats-new-may-2022/index.mdx",source:"@site/blog/2022-05-03-whats-new-may-2022/index.mdx",title:"What\u2019s new in May 2022?",description:"Updates to XState, @xstate/react and @xstate/fsm in the last month.",date:"2022-05-03T00:00:00.000Z",formattedDate:"May 3, 2022",tags:[{label:"stately",permalink:"/blog/tags/stately"},{label:"xstate",permalink:"/blog/tags/xstate"},{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.07,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"What\u2019s new in May 2022?",description:"Updates to XState, @xstate/react and @xstate/fsm in the last month.",tags:["stately","xstate","announcement","release"],authors:["laura"],image:"/blog/2022-05-03-whats-new-may-2022.png",slug:"2022-05-03-whats-new-may-2022",date:"2022-05-03T00:00:00.000Z"},prevItem:{title:"What\u2019s new in June 2022?",permalink:"/blog/2022-06-07-whats-new-june-2022"},nextItem:{title:"Building a video player with XState and Stately tools",permalink:"/blog/2022/04/05/building-a-video-player"}},l={authorsImageUrls:[void 0]},c=[{value:"Updates in XState",id:"updates-in-xstate",level:2},{value:"<code>waitFor()</code>",id:"waitfor",level:3},{value:"Updates in the @xstate/react package",id:"updates-in-the-xstatereact-package",level:3},{value:"React 18",id:"react-18",level:4},{value:"Subscribing to stopped interpreters",id:"subscribing-to-stopped-interpreters",level:4},{value:"<code>asEffect</code> and <code>asLayoutEffect</code> removed",id:"aseffect-and-aslayouteffect-removed",level:3},{value:"<code>useMachine</code> and <code>useService</code> with @xstate/fsm",id:"usemachine-and-useservice-with-xstatefsm",level:3},{value:"Updates in the @xstate/fsm package",id:"updates-in-the-xstatefsm-package",level:3},{value:"<code>.start()</code>",id:"start",level:4},{value:"More coming soon!",id:"more-coming-soon",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"What\u2019s new to XState and Stately for May 2022?"),(0,r.mdx)("h2",{id:"updates-in-xstate"},"Updates in XState"),(0,r.mdx)("p",null,"With a few updates to @xstate/react and @xstate/fsm last month, our headline release was the ",(0,r.mdx)("inlineCode",{parentName:"p"},"waitFor()")," helper function."),(0,r.mdx)("p",null,"Read all the release notes and patch notes in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/releases"},"XState GitHub repository releases"),"."),(0,r.mdx)("h3",{id:"waitfor"},(0,r.mdx)("inlineCode",{parentName:"h3"},"waitFor()")),(0,r.mdx)("p",null,"The new ",(0,r.mdx)("inlineCode",{parentName:"p"},"waitFor(...)")," helper function asynchronously waits for an actor\u2019s emitted value to satisfy a predicate before a timeout."),(0,r.mdx)("p",null,"Example usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { waitFor } from 'xstate/lib/waitFor';\n\n// ...\nconst loginService = interpret(loginMachine).start();\n\nconst loggedInState = await waitFor(loginService, state =>\n  state.hasTag('loggedIn')\n);\n\nloggedInState.hasTag('loggedIn'); // true\n")),(0,r.mdx)("h3",{id:"updates-in-the-xstatereact-package"},"Updates in the @xstate/react package"),(0,r.mdx)("p",null,"The @xstate/react package contains utilities for using XState with React. Find out more in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-react"},"@xstate/react package readme"),"."),(0,r.mdx)("h4",{id:"react-18"},"React 18"),(0,r.mdx)("p",null,"The @xstate/react package now accepts React 18 as a peer dependency, and we rewrote the implementation to use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"use-sync-external-store")," package. The package uses a shim to keep compatibility with older versions of React, so there is no need to worry if you haven\u2019t upgraded yet."),(0,r.mdx)("h4",{id:"subscribing-to-stopped-interpreters"},"Subscribing to stopped interpreters"),(0,r.mdx)("p",null,"Subscribing to a stopped interpreter will now always immediately emit the interpreter\u2019s state and call a completion callback."),(0,r.mdx)("h3",{id:"aseffect-and-aslayouteffect-removed"},(0,r.mdx)("inlineCode",{parentName:"h3"},"asEffect")," and ",(0,r.mdx)("inlineCode",{parentName:"h3"},"asLayoutEffect")," removed"),(0,r.mdx)("p",null,"We have removed the ",(0,r.mdx)("inlineCode",{parentName:"p"},"asEffect")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"asLayoutEffect")," action creators. These action creators didn\u2019t fit the React model well and had the potential to cause issues as their existence suggested that they might be easy to use."),(0,r.mdx)("p",null,"If you want to execute actions at those exact times, you can either make a call directly from those effects or send events to the machine from those effects and execute explicit actions in response to said events."),(0,r.mdx)("h3",{id:"usemachine-and-useservice-with-xstatefsm"},(0,r.mdx)("inlineCode",{parentName:"h3"},"useMachine")," and ",(0,r.mdx)("inlineCode",{parentName:"h3"},"useService")," with @xstate/fsm"),(0,r.mdx)("p",null,"We changed the signatures of ",(0,r.mdx)("inlineCode",{parentName:"p"},"useMachine")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"useService")," integrating with @xstate/fsm to match their signatures with their related hooks integrating with XState. Both now only accept a single generic. ",(0,r.mdx)("inlineCode",{parentName:"p"},"useMachine")," accepts ",(0,r.mdx)("inlineCode",{parentName:"p"},"TMachine"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"useService")," accepts ",(0,r.mdx)("inlineCode",{parentName:"p"},"TService"),"."),(0,r.mdx)("h3",{id:"updates-in-the-xstatefsm-package"},"Updates in the @xstate/fsm package"),(0,r.mdx)("p",null,"@xstate/fsm is a minimal, 1kb implementation of XState for finite state machines. Find out more in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-fsm"},"@xstate/fsm package readme"),"."),(0,r.mdx)("h4",{id:"start"},(0,r.mdx)("inlineCode",{parentName:"h4"},".start()")),(0,r.mdx)("p",null,"When you call .start() without any argument, it now always starts from the machine\u2019s initial state, matching the behavior of XState itself."),(0,r.mdx)("h2",{id:"more-coming-soon"},"More coming soon!"),(0,r.mdx)("p",null,"If you want to know more about what we\u2019ve got planned, you can ",(0,r.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/roadmap/"},"check out our Roadmap"),". Got any feedback, or want to suggest features? ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/discussions"},"Share your thoughts in the XState discussions"),"."),(0,r.mdx)("p",null,"We\u2019re also looking for your feedback on specific ideas in our ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/rfcs"},"Stately RFCs (Requests for comment)"),"."))}m.isMDXComponent=!0}}]);