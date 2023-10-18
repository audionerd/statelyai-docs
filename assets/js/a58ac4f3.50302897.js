"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[48191],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>l});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){return function(t){var a=m(t.components);return n.createElement(e,r({},t,{components:a}))}},m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=m(a),p=s,h=l["".concat(o,".").concat(p)]||l[p]||u[p]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function x(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"States",description:"A state describes a state machine\u2019s status or mode, which could be as simple as\xa0Paused\xa0and\xa0Playing. A state machine can only be in one state at a time."},o=void 0,i={unversionedId:"states/intro",id:"version-4/states/intro",title:"States",description:"A state describes a state machine\u2019s status or mode, which could be as simple as\xa0Paused\xa0and\xa0Playing. A state machine can only be in one state at a time.",source:"@site/versioned_docs/version-4/states/intro.mdx",sourceDirName:"states",slug:"/states/intro",permalink:"/docs/xstate-v4/states/intro",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/states/intro.mdx",tags:[],version:"4",frontMatter:{title:"States",description:"A state describes a state machine\u2019s status or mode, which could be as simple as\xa0Paused\xa0and\xa0Playing. A state machine can only be in one state at a time."},sidebar:"tutorialSidebar",previous:{title:"Core concepts",permalink:"/docs/xstate-v4/category/core-concepts"},next:{title:"Initial states",permalink:"/docs/xstate-v4/states/initial-states"}},d={},c=[{value:"Create a state",id:"create-a-state",level:2},{value:"Create a new target state",id:"create-a-new-target-state",level:3},{value:"Create a new child state",id:"create-a-new-child-state",level:3},{value:"Delete a state",id:"delete-a-state",level:2},{value:"Using the context menu",id:"using-the-context-menu",level:3},{value:"Using backspace",id:"using-backspace",level:3}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",t)},m=l("EmbedMachine"),p=l("Plus"),u=l("MoreHorizontal"),h={toc:c};function x(e){let{components:t,...a}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"A state describes the machine\u2019s status or mode, which could be as simple as\xa0",(0,s.mdx)("em",{parentName:"p"},"Paused"),"\xa0and\xa0",(0,s.mdx)("em",{parentName:"p"},"Playing"),". A state machine can only be in one state at a time."),(0,s.mdx)("admonition",{type:"video"},(0,s.mdx)("p",{parentName:"admonition"},"Watch our ",(0,s.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=z-6yhmSWUcc&list=PLvWgkXBB3dd4I_l-djWVU2UGPyBgKfnTQ&index=2"},"\u201cWhat are states?\u201d video on YouTube")," (53s).")),(0,s.mdx)(m,{name:"Video player",embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=741f69fd-7f01-4932-9407-6871e225bb6d",mdxType:"EmbedMachine"}),(0,s.mdx)("admonition",{type:"studio"},(0,s.mdx)("p",{parentName:"admonition"},"In the Stately Studio, the rounded rectangle boxes are states. The ",(0,s.mdx)("strong",{parentName:"p"},"!")," warning icon in the machine above indicates an unreachable state. The state is unreachable because it isn\u2019t connected to the ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/initial-states"},"initial state")," by a ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/transitions-and-events/intro"},"transition"),".")),(0,s.mdx)("p",null,"These states are \u201cfinite\u201d; the machine can only move through the states you\u2019ve pre-defined."),(0,s.mdx)("h2",{id:"create-a-state"},"Create a state"),(0,s.mdx)("admonition",{type:"tip"},(0,s.mdx)("p",{parentName:"admonition"},"The fastest way to create a new state is by double-clicking in any empty space on the canvas.")),(0,s.mdx)("h3",{id:"create-a-new-target-state"},"Create a new target state"),(0,s.mdx)("p",null,"Each transition has a source state and a target state. To create a new target state from a source state:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Select the source state."),(0,s.mdx)("li",{parentName:"ol"},"Press or drag from one of the ",(0,s.mdx)(p,{size:18,mdxType:"Plus"})," handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/transitions-and-events/intro#using-transitions-and-events-in-stately-studio"},"Read more about transitioning between source and target states"),"."),(0,s.mdx)("h3",{id:"create-a-new-child-state"},"Create a new child state"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/parent-states"},"How to create child and parent states"),"."),(0,s.mdx)("h2",{id:"delete-a-state"},"Delete a state"),(0,s.mdx)("p",null,"First, select the state you want to delete."),(0,s.mdx)("h3",{id:"using-the-context-menu"},"Using the context menu"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Use the ",(0,s.mdx)(u,{size:18,mdxType:"MoreHorizontal"})," triple dot icon button to open the Edit menu."),(0,s.mdx)("li",{parentName:"ol"},"Choose ",(0,s.mdx)("strong",{parentName:"li"},"Delete")," to delete the selected state.")),(0,s.mdx)("h3",{id:"using-backspace"},"Using backspace"),(0,s.mdx)("p",null,"Use the ",(0,s.mdx)("kbd",null,"Backspace")," key to delete the selected state."),(0,s.mdx)("admonition",{type:"xstate"},(0,s.mdx)("h2",{parentName:"admonition",id:"looking-for-how-to-use-states-in-xstate"},"Looking for how to use states in XState?"),(0,s.mdx)("p",{parentName:"admonition"},"Find out ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/xstate/basics/what-is-a-statechart#states"},"more about states in XState")," in the XState section of the docs.")))}x.isMDXComponent=!0}}]);