"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[72968],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>h,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>c});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,i({},t,{components:a}))}},m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),h=s,u=c["".concat(r,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function v(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const i={title:"Glossary"},r=void 0,o={unversionedId:"glossary",id:"version-4/glossary",title:"Glossary",description:"This glossary is an alphabetical guide to the most common terms in statecharts and state machines.",source:"@site/versioned_docs/version-4/glossary.mdx",sourceDirName:".",slug:"/glossary",permalink:"/docs/xstate-v4/glossary",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/glossary.mdx",tags:[],version:"4",frontMatter:{title:"Glossary"},sidebar:"tutorialSidebar",previous:{title:"Request examples",permalink:"/docs/xstate-v4/examples/intro"}},l={},d=[{value:"Actions",id:"actions",level:2},{value:"Actors",id:"actors",level:2},{value:"After transitions",id:"after-transitions",level:2},{value:"Always transitions",id:"always-transitions",level:2},{value:"Delayed transitions",id:"delayed-transitions",level:2},{value:"Eventless transitions",id:"eventless-transitions",level:2},{value:"Final state",id:"final-state",level:2},{value:"Guards",id:"guards",level:2},{value:"History state",id:"history-state",level:2},{value:"Initial state",id:"initial-state",level:2},{value:"Invoked actors",id:"invoked-actors",level:2},{value:"Parallel states",id:"parallel-states",level:2},{value:"Parent and child states",id:"parent-and-child-states",level:2},{value:"States",id:"states",level:2},{value:"Statecharts",id:"statecharts",level:2},{value:"State machines",id:"state-machines",level:2},{value:"Transitions and events",id:"transitions-and-events",level:2}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"This glossary is an alphabetical guide to the most common terms in statecharts and state machines."),(0,s.mdx)("admonition",{type:"tip"},(0,s.mdx)("p",{parentName:"admonition"},"Looking for more detailed information on these concepts? ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/state-machines-and-statecharts"},"Read the introduction to state machines and statecharts"),".")),(0,s.mdx)("h2",{id:"actions"},"Actions"),(0,s.mdx)("p",null,"An ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/actions-and-actors/entry-and-exit-actions"},"action")," can be fired upon entry or exit of a state. Actions are \u201cfire-and-forget processes\u201d; once the machine has fired the action, it moves on and forgets the action. You can also fire actions on transitions."),(0,s.mdx)("h2",{id:"actors"},"Actors"),(0,s.mdx)("p",null,"When you run a statechart, it becomes an ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/actions-and-actors/actors"},"actor"),"; a running process that can receive messages, send messages and change its behavior based on the messages it receives, which can cause effects outside of the actor."),(0,s.mdx)("h2",{id:"after-transitions"},"After transitions"),(0,s.mdx)("p",null,"See ",(0,s.mdx)("a",{parentName:"p",href:"/#delayed-transitions"},"delayed transitions"),"."),(0,s.mdx)("h2",{id:"always-transitions"},"Always transitions"),(0,s.mdx)("p",null,"See ",(0,s.mdx)("a",{parentName:"p",href:"/#eventless-transitions"},"eventless transitions"),"."),(0,s.mdx)("h2",{id:"delayed-transitions"},"Delayed transitions"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/transitions-and-events/delayed-transitions"},"Delayed transitions"),"\xa0are transitions that only happen after a specified interval of time. If another event happens before the end of the timer, the transition doesn\u2019t complete. Delayed transitions are labeled \u201cafter\u201d and often referred to as \u201cafter\u201d transitions."),(0,s.mdx)("h2",{id:"eventless-transitions"},"Eventless transitions"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/transitions-and-events/eventless-transitions"},"Eventless transitions"),"\xa0are transitions without events. These transitions are\xa0",(0,s.mdx)("em",{parentName:"p"},"always"),"\xa0taken after any transition in their state is enabled. No event is necessary to trigger the transition. Eventless transitions are labeled \u201calways\u201d and often referred to as \u201calways\u201d transitions."),(0,s.mdx)("h2",{id:"final-state"},"Final state"),(0,s.mdx)("p",null,"When a machine reaches the ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/final-states"},"final state"),", it can no longer receive any events, and anything running inside it is canceled and cleaned up. A machine can have multiple final states or no final states."),(0,s.mdx)("h2",{id:"guards"},"Guards"),(0,s.mdx)("p",null,"A\xa0",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/transitions-and-events/guards"},"guard"),"\xa0is a condition that the machine checks when it goes through an event. If the condition is true, the machine follows the transition to the next state. If the condition is false, the machine follows the rest of the conditions to the next state. Any transition can be a guarded transition."),(0,s.mdx)("h2",{id:"history-state"},"History state"),(0,s.mdx)("p",null,"A ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/history-states"},"history state")," returns the parent state to its most recently active child state."),(0,s.mdx)("h2",{id:"initial-state"},"Initial state"),(0,s.mdx)("p",null,"When a state machine starts, it enters the ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/initial-states"},(0,s.mdx)("strong",{parentName:"a"},"initial state"))," first. A machine can only have one top-level initial state."),(0,s.mdx)("h2",{id:"invoked-actors"},"Invoked actors"),(0,s.mdx)("p",null,"An ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/actions-and-actors/actors"},"invoked actor")," is an actor that can execute its own actions and communicate with the machine. These invoked actors are started in a state and stopped when the state is exited."),(0,s.mdx)("h2",{id:"parallel-states"},"Parallel states"),(0,s.mdx)("p",null,"A ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/parallel-states"},"parallel state")," is a state separated into multiple regions of child states, where each region is active simultaneously."),(0,s.mdx)("h2",{id:"parent-and-child-states"},"Parent and child states"),(0,s.mdx)("p",null,"States can contain more states, also known as\xa0",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/parent-states"},"child states"),". These child states are only active when the parent state is active. Child states are nested inside their parent states."),(0,s.mdx)("h2",{id:"states"},"States"),(0,s.mdx)("p",null,"A ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/states/intro"},"state")," describes the status of the machine. A state can be as simple as ",(0,s.mdx)("em",{parentName:"p"},"active")," and ",(0,s.mdx)("em",{parentName:"p"},"inactive"),". These states are finite; the machine can only move through the pre-defined states. A state machine can only be in one state at a time."),(0,s.mdx)("h2",{id:"statecharts"},"Statecharts"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/state-machines-and-statecharts"},"Statecharts")," are a visual extension to state machines enabling you to model more complex logic, including hierarchy, concurrency, and communication."),(0,s.mdx)("h2",{id:"state-machines"},"State machines"),(0,s.mdx)("p",null,"A ",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/state-machines-and-statecharts"},"state machine")," is a model that describes how the state of a process transitions to another state when an event occurs. State machines make building reliable software easier because they prevent impossible states and undesired transitions."),(0,s.mdx)("h2",{id:"transitions-and-events"},"Transitions and events"),(0,s.mdx)("p",null,"A machine moves from state to state through\xa0",(0,s.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/transitions-and-events/intro"},"transitions"),". Transitions are caused by events; when an event happens, the machine transitions to the next state. Transitions are \u201cdeterministic\u201d; each combination of state and event always points to the same next state."))}m.isMDXComponent=!0}}]);