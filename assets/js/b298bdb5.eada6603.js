"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[72705],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){return function(e){var n=u(e.components);return r.createElement(t,s({},e,{components:n}))}},u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},f=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function v(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76912:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"Self transitions",description:"A self-transition (also known as a self-event) starts and ends in the same state. Self-transitions can be used to restart a state."},i=void 0,o={unversionedId:"transitions-and-events/self-transitions",id:"version-4/transitions-and-events/self-transitions",title:"Self transitions",description:"A self-transition (also known as a self-event) starts and ends in the same state. Self-transitions can be used to restart a state.",source:"@site/versioned_docs/version-4/transitions-and-events/self-transitions.mdx",sourceDirName:"transitions-and-events",slug:"/transitions-and-events/self-transitions",permalink:"/statelyai-docs/docs/xstate-v4/transitions-and-events/self-transitions",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/transitions-and-events/self-transitions.mdx",tags:[],version:"4",frontMatter:{title:"Self transitions",description:"A self-transition (also known as a self-event) starts and ends in the same state. Self-transitions can be used to restart a state."},sidebar:"tutorialSidebar",previous:{title:"Delayed (after) transitions",permalink:"/statelyai-docs/docs/xstate-v4/transitions-and-events/delayed-transitions"},next:{title:"State done events",permalink:"/statelyai-docs/docs/xstate-v4/transitions-and-events/state-done-events"}},l={},c=[{value:"Using self-transitions in Stately Studio",id:"using-self-transitions-in-stately-studio",level:2},{value:"Make an event into a self-transition",id:"make-an-event-into-a-self-transition",level:3},{value:"On the canvas",id:"on-the-canvas",level:4},{value:"Dragging the transition arrow",id:"dragging-the-transition-arrow",level:4}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"A\xa0",(0,a.mdx)("strong",{parentName:"p"},"self-transition"),"\xa0starts and ends in the same state."),(0,a.mdx)("p",null,"Self-transitions can be used to restart a state."),(0,a.mdx)("h2",{id:"using-self-transitions-in-stately-studio"},"Using self-transitions in Stately Studio"),(0,a.mdx)("h3",{id:"make-an-event-into-a-self-transition"},"Make an event into a self-transition"),(0,a.mdx)("h4",{id:"on-the-canvas"},"On the canvas"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Right-click the event to open the edit menu."),(0,a.mdx)("li",{parentName:"ol"},"Choose ",(0,a.mdx)("strong",{parentName:"li"},"Make self transition")," from the edit menu.")),(0,a.mdx)("h4",{id:"dragging-the-transition-arrow"},"Dragging the transition arrow"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Select the event."),(0,a.mdx)("li",{parentName:"ol"},"Grab the circular handle at the arrow end of the transition and drag the handle to connect it back to the source state.")))}u.isMDXComponent=!0}}]);