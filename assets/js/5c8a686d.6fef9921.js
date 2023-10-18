"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[68701],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,u=p["".concat(r,".").concat(c)]||p[c]||f[c]||o;return n?a.createElement(u,s(s({ref:t},l),{},{components:n})):a.createElement(u,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"Delayed (after) transitions",description:"Delayed transitions (also known as after transitions) are transitions that only happen after a specified interval of time."},r=void 0,s={unversionedId:"transitions-and-events/delayed-transitions",id:"version-4/transitions-and-events/delayed-transitions",title:"Delayed (after) transitions",description:"Delayed transitions (also known as after transitions) are transitions that only happen after a specified interval of time.",source:"@site/versioned_docs/version-4/transitions-and-events/delayed-transitions.mdx",sourceDirName:"transitions-and-events",slug:"/transitions-and-events/delayed-transitions",permalink:"/docs/xstate-v4/transitions-and-events/delayed-transitions",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/transitions-and-events/delayed-transitions.mdx",tags:[],version:"4",frontMatter:{title:"Delayed (after) transitions",description:"Delayed transitions (also known as after transitions) are transitions that only happen after a specified interval of time."},sidebar:"tutorialSidebar",previous:{title:"Eventless (always) transitions",permalink:"/docs/xstate-v4/transitions-and-events/eventless-transitions"},next:{title:"Self transitions",permalink:"/docs/xstate-v4/transitions-and-events/self-transitions"}},d={},l=[{value:"Make an event into a delayed transition",id:"make-an-event-into-a-delayed-transition",level:3},{value:"On the canvas",id:"on-the-canvas",level:4},{value:"Using the transition Details panel",id:"using-the-transition-details-panel",level:4},{value:"Specify delay time",id:"specify-delay-time",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)},m=p("ThemedImage"),c=p("Info"),f={toc:l};function u(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Delayed transitions"),"\xa0are transitions that only happen after a specified interval of time. If another event happens before the end of the timer, the transition doesn\u2019t complete. Delayed transitions are handy if you need to build timeouts and intervals into your application logic."),(0,i.mdx)("p",null,"Delayed transitions are labeled \u201cafter\u201d and often referred to as \u201cafter\u201d transitions."),(0,i.mdx)("admonition",{type:"video"},(0,i.mdx)("p",{parentName:"admonition"},"Watch our ",(0,i.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5RE_eazRhrw&list=PLvWgkXBB3dd4I_l-djWVU2UGPyBgKfnTQ&index=12"},"\u201cDelayed (after) transitions\u201d video on YouTube")," (1m17s).")),(0,i.mdx)("p",null,(0,i.mdx)(m,{alt:"Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of \u201cThe video player should be in full-screen mode.\u201d The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There\u2019s a Stop event from the Opened state that transitions to the final state of Stopped. There\u2019s a delayed transition from the Stopped state back to the Closed state after 5 seconds.",sources:{light:"/assets/transitions-and-events/delayed-transitions/delayed-transitions.png",dark:"/assets/transitions-and-events/delayed-transitions/delayed-transitions-dm.png"},mdxType:"ThemedImage"})),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=5671366b-05cf-43f5-a09a-b88373ea27c1"},"View this machine in the Stately Studio"),"."),(0,i.mdx)("p",null,"In a video player, we might want the video to be\xa0",(0,i.mdx)("em",{parentName:"p"},"Closed"),"\xa0out of fullscreen mode a few seconds after the video has\xa0",(0,i.mdx)("em",{parentName:"p"},"Stopped"),", instead of closing the fullscreen mode suddenly as soon as the video is stopped. The eventless transition above transitions from the\xa0",(0,i.mdx)("em",{parentName:"p"},"Stopped"),"\xa0state to the\xa0",(0,i.mdx)("em",{parentName:"p"},"Closed"),"\xa0state after 5 seconds."),(0,i.mdx)("h3",{id:"make-an-event-into-a-delayed-transition"},"Make an event into a delayed transition"),(0,i.mdx)("p",null,"Delayed transitions have a default time interval of 500ms (0.5 seconds)."),(0,i.mdx)("h4",{id:"on-the-canvas"},"On the canvas"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Select the event you want to replace with a delayed transition."),(0,i.mdx)("li",{parentName:"ol"},"Right-click the event to open the edit menu."),(0,i.mdx)("li",{parentName:"ol"},"From the ",(0,i.mdx)("strong",{parentName:"li"},"Event type")," options, choose ",(0,i.mdx)("strong",{parentName:"li"},"After")," to turn the event into a delayed transition.")),(0,i.mdx)("h4",{id:"using-the-transition-details-panel"},"Using the transition Details panel"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Open the transition ",(0,i.mdx)(c,{size:18,mdxType:"Info"})," ",(0,i.mdx)("strong",{parentName:"li"},"Details")," panel from the right tool menu."),(0,i.mdx)("li",{parentName:"ol"},"From the ",(0,i.mdx)("strong",{parentName:"li"},"Event type")," dropdown menu, choose ",(0,i.mdx)("strong",{parentName:"li"},"After")," to turn the event into a delayed transition.")),(0,i.mdx)("h4",{id:"specify-delay-time"},"Specify delay time"),(0,i.mdx)("p",null,"Your delay time interval will be displayed in a human-readable format on hover. For example, 15000ms will be displayed as 15 seconds."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Select the delayed transition."),(0,i.mdx)("li",{parentName:"ol"},"Open the transition ",(0,i.mdx)(c,{size:18,mdxType:"Info"})," ",(0,i.mdx)("strong",{parentName:"li"},"Details")," panel from the right tool menu."),(0,i.mdx)("li",{parentName:"ol"},"Use the ",(0,i.mdx)("strong",{parentName:"li"},"Delay")," text input to specify the interval in milliseconds.")),(0,i.mdx)("admonition",{type:"xstate"},(0,i.mdx)("h2",{parentName:"admonition",id:"looking-for-how-to-use-delayed-transitions-in-xstate"},"Looking for how to use delayed transitions in XState?"),(0,i.mdx)("p",{parentName:"admonition"},"Find out ",(0,i.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/xstate/transitions-and-choices/after"},"more about delayed transitions in XState")," in the XState section of the docs.")))}u.isMDXComponent=!0}}]);