"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[68967],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>h,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),m=function(e){return function(t){var a=p(t.components);return n.createElement(e,r({},t,{components:a}))}},p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=s,u=m["".concat(i,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function y(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const r={title:"History states"},i=void 0,o={unversionedId:"history-states",id:"history-states",title:"History states",description:"A history state is a special type of state (a pseudostate) that remembers the last child state that was active before its parent state is exited. When a transition from outside the parent state targets a history state, the remembered child state is entered.",source:"@site/docs/history-states.mdx",sourceDirName:".",slug:"/history-states",permalink:"/statelyai-docs/docs/history-states",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/history-states.mdx",tags:[],version:"current",frontMatter:{title:"History states"},sidebar:"docs",previous:{title:"Final states",permalink:"/statelyai-docs/docs/final-states"},next:{title:"Persistence",permalink:"/statelyai-docs/docs/persistence"}},l={},d=[{value:"Using history states in Stately Studio",id:"using-history-states-in-stately-studio",level:2},{value:"Make a state a history state",id:"make-a-state-a-history-state",level:3},{value:"On the canvas",id:"on-the-canvas",level:4},{value:"Using the state Details panel",id:"using-the-state-details-panel",level:4},{value:"Shallow vs. deep history",id:"shallow-vs-deep-history",level:2},{value:"History target",id:"history-target",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",t)},p=m("SkipDownLink"),h=m("Info"),c={toc:d};function u(e){let{components:t,...a}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"A history state is a special type of state (a ",(0,s.mdx)("em",{parentName:"p"},"pseudostate"),") that remembers the last ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/parent-states"},"child state")," that was active before its parent state is exited. When a transition from outside the parent state targets a history state, the remembered child state is entered."),(0,s.mdx)("p",null,'This allows machines to "remember" where they left off when exiting and reentering a parent state.'),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"If no child state remembered, history goes to ",(0,s.mdx)("inlineCode",{parentName:"li"},".target")," state, if it is specified"),(0,s.mdx)("li",{parentName:"ul"},"Otherwise, go to ",(0,s.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/initial-states"},"initial state"))),(0,s.mdx)("p",null,"A history state returns the parent state to its most recently active child state. The box with an ",(0,s.mdx)("strong",{parentName:"p"},"H")," inside represents the history state."),(0,s.mdx)("p",null,"The history state can be deep or shallow:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"A shallow history state remembers the immediate child\u2019s state."),(0,s.mdx)("li",{parentName:"ul"},"A deep history state remembers the deepest active state or states inside its child states.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"const checkoutMachine = createMachine({\n  // ...\n  states: {\n    payment: {\n      initial: 'card',\n      states: {\n        card: {},\n        paypal: {},\n        // highlight-next-line\n        hist: { type: 'history' },\n      },\n    },\n    address: {\n      on: {\n        back: {\n          target: 'payment.hist',\n        },\n      },\n    },\n  },\n});\n")),(0,s.mdx)(p,{text:"Jump to learning more about Shallow vs. deep history in XState",link:"#shallow-vs-deep-history",mdxType:"SkipDownLink"}),(0,s.mdx)("h2",{id:"using-history-states-in-stately-studio"},"Using history states in Stately Studio"),(0,s.mdx)("h3",{id:"make-a-state-a-history-state"},"Make a state a history state"),(0,s.mdx)("p",null,"First, select the state you want to set as a history state for the parent state. Then\u2026"),(0,s.mdx)("h4",{id:"on-the-canvas"},"On the canvas"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Right-click the state to open the edit menu."),(0,s.mdx)("li",{parentName:"ol"},"From the ",(0,s.mdx)("strong",{parentName:"li"},"Type")," options, choose ",(0,s.mdx)("strong",{parentName:"li"},"History"),".")),(0,s.mdx)("h4",{id:"using-the-state-details-panel"},"Using the state Details panel"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Select the state you want to make a history state."),(0,s.mdx)("li",{parentName:"ol"},"Open the state ",(0,s.mdx)(h,{size:18,mdxType:"Info"})," ",(0,s.mdx)("strong",{parentName:"li"},"Details")," panel from the right tool menu."),(0,s.mdx)("li",{parentName:"ol"},"From the type option, choose ",(0,s.mdx)("strong",{parentName:"li"},"History"),".")),(0,s.mdx)("p",null,"To set the state back as a normal state, follow the same steps and select the ",(0,s.mdx)("strong",{parentName:"p"},"Normal")," type option."),(0,s.mdx)("h2",{id:"shallow-vs-deep-history"},"Shallow vs. deep history"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Shallow history states only remember the last active direct child state."),(0,s.mdx)("li",{parentName:"ul"},"Deep history states remember all active descendant states.")),(0,s.mdx)("h2",{id:"history-target"},"History target"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Normally, history states target the most recent child state of its parent state"),(0,s.mdx)("li",{parentName:"ul"},"If the history state is entered but the parent state was never visited, the parent's initial state is entered."),(0,s.mdx)("li",{parentName:"ul"},"However, you can add a ",(0,s.mdx)("inlineCode",{parentName:"li"},"target: 'childKey'")," to specify the default child state that should be entered")),(0,s.mdx)("h2",{id:"typescript"},"TypeScript"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Coming soon")),(0,s.mdx)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Create a history state (shallow by default)")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine({\n  // ...\n  states: {\n    hist: { type: 'history' },\n    firstState: {},\n    someState: {},\n    anotherState: {},\n  },\n});\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Create a deep history state")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine({\n  // ...\n  states: {\n    hist: {\n      type: 'history',\n      history: 'deep',\n    },\n    firstState: {},\n    someState: {},\n    anotherState: {},\n  },\n});\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Create a history state with a target")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine({\n  // ...\n  initialState: 'firstState',\n  states: {\n    hist: {\n      type: 'history',\n      target: 'someState',\n    },\n    firstState: {},\n    someState: {},\n    anotherState: {},\n  },\n});\n")))}u.isMDXComponent=!0}}]);