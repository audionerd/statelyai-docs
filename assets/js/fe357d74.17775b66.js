"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[74118],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>x,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){return function(t){var n=c(t.components);return a.createElement(e,s({},t,{components:n}))}},c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,u=p["".concat(r,".").concat(m)]||p[m]||h[m]||s;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const s={title:"Parent states"},r=void 0,o={unversionedId:"parent-states",id:"parent-states",title:"Parent states",description:"States can contain more states, also known as\xa0child states. These child states are only active when the parent state is active.",source:"@site/docs/parent-states.mdx",sourceDirName:".",slug:"/parent-states",permalink:"/statelyai-docs/docs/parent-states",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/parent-states.mdx",tags:[],version:"current",frontMatter:{title:"Parent states"},sidebar:"docs",previous:{title:"Finite states",permalink:"/statelyai-docs/docs/finite-states"},next:{title:"Parallel states",permalink:"/statelyai-docs/docs/parallel-states"}},l={},d=[{value:"Add a child state",id:"add-a-child-state",level:2},{value:"Change the parent state of a child state",id:"change-the-parent-state-of-a-child-state",level:2},{value:"Using copy and paste from the edit menu",id:"using-copy-and-paste-from-the-edit-menu",level:3},{value:"Using copy and paste keyboard shortcuts",id:"using-copy-and-paste-keyboard-shortcuts",level:3},{value:"Root state",id:"root-state",level:2},{value:"Initial state",id:"initial-state",level:2},{value:"Transitions on parent states",id:"transitions-on-parent-states",level:2},{value:"Modeling",id:"modeling",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)},c=p("EmbedMachine"),m=p("SkipDownLink"),h=p("Plus"),u=p("Info"),x={toc:d};function g(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"States can contain more states, also known as\xa0",(0,i.mdx)("strong",{parentName:"p"},"child states"),". These child states are only active when the parent state is active."),(0,i.mdx)("p",null,"Child states are nested inside their parent states. Parent states are also known as ",(0,i.mdx)("strong",{parentName:"p"},"compound states"),"."),(0,i.mdx)("admonition",{type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"Watch our ",(0,i.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=aUhEdeIf_mQ&list=PLvWgkXBB3dd4I_l-djWVU2UGPyBgKfnTQ&index=5"},"\u201cParent and child states\u201d video on YouTube")," (1m6s).")),(0,i.mdx)(c,{name:"Video player",embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=9ba5377c-aab3-4465-8909-4eea499622fa",mdxType:"EmbedMachine"}),(0,i.mdx)("p",null,"In the video player above, the\xa0",(0,i.mdx)("em",{parentName:"p"},"Opened"),"\xa0state is a parent state to the\xa0",(0,i.mdx)("em",{parentName:"p"},"Playing"),",\xa0",(0,i.mdx)("em",{parentName:"p"},"Paused"),", and\xa0",(0,i.mdx)("em",{parentName:"p"},"Stopped"),"\xa0states. These states, their transitions, and their events are nested inside the\xa0",(0,i.mdx)("em",{parentName:"p"},"Opened"),"\xa0state."),(0,i.mdx)(m,{text:"Jump to learning more about parent and child states in XState",link:"#root-state",mdxType:"SkipDownLink"}),(0,i.mdx)("h2",{id:"add-a-child-state"},"Add a child state"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Select the state that will become the parent state."),(0,i.mdx)("li",{parentName:"ol"},"Use the ",(0,i.mdx)(h,{size:18,mdxType:"Plus"})," plus icon button to open the edit menu."),(0,i.mdx)("li",{parentName:"ol"},"Choose ",(0,i.mdx)("strong",{parentName:"li"},"Child state")," from the menu to add a child state to your state.")),(0,i.mdx)("p",null,"If a state already contains child states, you can double-click inside the parent state to create another child state."),(0,i.mdx)("h2",{id:"change-the-parent-state-of-a-child-state"},"Change the parent state of a child state"),(0,i.mdx)("p",null,"Using the state\xa0",(0,i.mdx)(u,{size:18,mdxType:"Info"})," ",(0,i.mdx)("strong",{parentName:"p"},"Details"),"\xa0panel:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Select the child state you want to reparent."),(0,i.mdx)("li",{parentName:"ol"},"Open the\xa0state ",(0,i.mdx)(u,{size:18,mdxType:"Info"})," ",(0,i.mdx)("strong",{parentName:"li"},"Details"),"\xa0panel from the right tool menu."),(0,i.mdx)("li",{parentName:"ol"},"Choose your desired new parent from the\xa0",(0,i.mdx)("strong",{parentName:"li"},"Parent"),"\xa0dropdown menu.")),(0,i.mdx)("h3",{id:"using-copy-and-paste-from-the-edit-menu"},"Using copy and paste from the edit menu"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Right-click the child state you want to reparent to open the edit menu."),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Copy")," to copy the state."),(0,i.mdx)("li",{parentName:"ol"},"Right-click the desired new parent to open the edit menu."),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Paste")," to paste the child state into the parent state.")),(0,i.mdx)("h3",{id:"using-copy-and-paste-keyboard-shortcuts"},"Using copy and paste keyboard shortcuts"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Select the child state you want to reparent."),(0,i.mdx)("li",{parentName:"ol"},"Use ",(0,i.mdx)("strong",{parentName:"li"},"Command"),"/",(0,i.mdx)("strong",{parentName:"li"},"Ctrl")," + ",(0,i.mdx)("strong",{parentName:"li"},"C")," to copy the state."),(0,i.mdx)("li",{parentName:"ol"},"Select the desired new parent state."),(0,i.mdx)("li",{parentName:"ol"},"Use ",(0,i.mdx)("strong",{parentName:"li"},"Command"),"/",(0,i.mdx)("strong",{parentName:"li"},"Ctrl")," + ",(0,i.mdx)("strong",{parentName:"li"},"V")," to paste the child state into the parent state.")),(0,i.mdx)("h2",{id:"root-state"},"Root state"),(0,i.mdx)("p",null,"The state machine itself is a parent state! It\u2019s the root state, and it\u2019s always active."),(0,i.mdx)("p",null,"It's normal to have a state machine that has no other states. This is useful for modeling a simple state machine that only handles events via transitions:"),(0,i.mdx)("p",null,"Example of a simple counting machine with increment, decrement, reset, and no states:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst countingMachine = createMachine({\n  id: 'counting',\n  initial: 'active',\n  on: {\n    increment: {\n      actions: assign({ count: ({ context }) => context.count + 1 }),\n    },\n    decrement: {\n      actions: assign({ count: ({ context }) => context.count - 1 }),\n    },\n    reset: {\n      actions: assign({ count: 0 }),\n    },\n  },\n  // No child states!\n});\n")),(0,i.mdx)("h2",{id:"initial-state"},"Initial state"),(0,i.mdx)("p",null,"The initial state of a parent state is the state that is entered when the parent state is entered. Parent states ",(0,i.mdx)("em",{parentName:"p"},"must")," have an initial states."),(0,i.mdx)("p",null,"You specify the initial state via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"initial")," property of the parent state, which is the key of the initial state in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"states")," object:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  // highlight-next-line\n  initial: 'question',\n  states: {\n    // highlight-start\n    question: {\n      // ...\n    },\n    // highlight-end\n    form: {\n      // ...\n    },\n    thanks: {\n      // ...\n    },\n  },\n});\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Even if the parent state is never directly targeted and its child states are instead targeted, specifying the initial state in the ",(0,i.mdx)("inlineCode",{parentName:"li"},".initial")," property is required. In this case, the ",(0,i.mdx)("inlineCode",{parentName:"li"},".initial")," property can be any of the child states.")),(0,i.mdx)("h2",{id:"transitions-on-parent-states"},"Transitions on parent states"),(0,i.mdx)("p",null,"A transition that targets a parent state will enter the parent state and its initial state. If that initial state is a parent state, then that state's initial state will be entered, and so on."),(0,i.mdx)("p",null,"When an event is received, transitions on the deepest child nodes are checked first to see if any of them are enabled by that event. If no transitions are enabled, then transitions on the parent state are checked. If no transitions on the parent state are enabled, then transitions on the parent's parent state is checked, and so on."),(0,i.mdx)("p",null,"Transitions on a parent state can target child (or descendent) states. This is useful for modeling a transition that should go to a specific child state regardless of which child state is currently active."),(0,i.mdx)("p",null,"Transitions on a child state can target the parent state, though this is not common. A transition from a child state to its parent (or ancestor) state will also enter the parent state's initial state."),(0,i.mdx)("h2",{id:"modeling"},"Modeling"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Coming soon")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Start with a flat structure; don't create parent states too early"),(0,i.mdx)("li",{parentName:"ul"},"If many states have common outgoing transitions, that's a good sign for putting them in a parent state"),(0,i.mdx)("li",{parentName:"ul"},"Parent states also represent sub-processes. Very useful when")),(0,i.mdx)("h2",{id:"typescript"},"TypeScript"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Coming soon")),(0,i.mdx)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"// The machine is the root-level parent state\nconst machine = createMachine({\n  // Initial child state of the machine\n  initial: 'parent',\n  states: {\n    parent: {\n      // Initial child state of the parent state\n      initial: 'child1',\n      states: {\n        child1: {\n          on: {\n            // Targeting a sibling\n            toSibling: {\n              target: 'child2',\n            },\n          },\n        },\n        child2: {\n          initial: 'grandchild1',\n          states: {\n            grandchild1: {},\n            grandchild2: {},\n          },\n        },\n      },\n      on: {\n        // Targeting a child\n        toChild: {\n          target: '.child1',\n        },\n        // Targeting a grandchild\n        toGrandchild: {\n          target: '.child2.grandchild2',\n        },\n      },\n    },\n  },\n});\n")))}g.isMDXComponent=!0}}]);