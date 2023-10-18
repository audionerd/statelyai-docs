"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[61914],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>c});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,i({},t,{components:a}))}},m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=s,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const i={title:"Parallel states"},l="Parallel states",r={unversionedId:"xstate/states/parallel-states",id:"version-4/xstate/states/parallel-states",title:"Parallel states",description:"A parallel state is a state separated into multiple regions of child states, where each region is active simultaneously.",source:"@site/versioned_docs/version-4/xstate/states/parallel-states.mdx",sourceDirName:"xstate/states",slug:"/xstate/states/parallel-states",permalink:"/statelyai-docs/docs/xstate-v4/xstate/states/parallel-states",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/states/parallel-states.mdx",tags:[],version:"4",frontMatter:{title:"Parallel states"},sidebar:"tutorialSidebar",previous:{title:"Final states",permalink:"/statelyai-docs/docs/xstate-v4/xstate/states/final-states"},next:{title:"History states",permalink:"/statelyai-docs/docs/xstate-v4/xstate/states/history-states"}},o={},p=[{value:"Matching parallel states",id:"matching-parallel-states",level:2},{value:"<code>state.matches</code> string argument",id:"statematches-string-argument",level:3},{value:"<code>state.matches</code> object argument",id:"statematches-object-argument",level:3},{value:"Match one of multiple states",id:"match-one-of-multiple-states",level:3},{value:"Targeting multiple parallel states",id:"targeting-multiple-parallel-states",level:2},{value:"Final states and parallel states",id:"final-states-and-parallel-states",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"parallel-states"},"Parallel states"),(0,s.mdx)("p",null,"A ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/states/parallel-states"},"parallel state")," is a state separated into multiple regions of child states, where each region is active simultaneously."),(0,s.mdx)("admonition",{type:"studio"},(0,s.mdx)("p",{parentName:"admonition"},(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/states/parallel-states"},"Read more about how to use parallel states in the Stately Studio"),".")),(0,s.mdx)("p",null,"You can specify a parallel state node on the machine and/or any nested child state by setting ",(0,s.mdx)("inlineCode",{parentName:"p"},"type: 'parallel'"),"."),(0,s.mdx)("p",null,"For example, the machine below allows the ",(0,s.mdx)("inlineCode",{parentName:"p"},"upload")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"download")," child states to be simultaneously active. This example represents an application where you can download and upload files at the same time:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst fileMachine = createMachine({\n  // highlight-start\n  type: 'parallel',\n  // highlight-end\n  states: {\n    // highlight-start\n    upload: {\n    // highlight-end\n      initial: 'idle',\n      states: {\n        idle: {\n          on: {\n            INIT_UPLOAD: { target: 'pending' },\n          },\n        },\n        pending: {\n          on: {\n            UPLOAD_COMPLETE: { target: 'success' },\n          },\n        },\n        success: {},\n      },\n    },\n    // highlight-start\n    download: {\n    // highlight-end\n      initial: 'idle',\n      states: {\n        idle: {\n          on: {\n            INIT_DOWNLOAD: { target: 'pending' },\n          },\n        },\n        pending: {\n          on: {\n            DOWNLOAD_COMPLETE: { target: 'success' },\n          },\n        },\n        success: {},\n      },\n    },\n  },\n});\n")),(0,s.mdx)("p",null,"Parallel states allow you to run processes ",(0,s.mdx)("em",{parentName:"p"},"simultaneously")," for greater flexibility and power."),(0,s.mdx)("h2",{id:"matching-parallel-states"},"Matching parallel states"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"state.matches")," syntax checks if an actor is in a particular state when the machine is run using ",(0,s.mdx)("inlineCode",{parentName:"p"},"interpret")," or similar. You can use ",(0,s.mdx)("inlineCode",{parentName:"p"},"state.matches")," with parent states using either the string method or the object method."),(0,s.mdx)("h3",{id:"statematches-string-argument"},(0,s.mdx)("inlineCode",{parentName:"h3"},"state.matches")," string argument"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({});\nconst state = machine.initialState;\n\n/**\n * Checks if the machine is in the red.stop\n * state\n */\nconsole.log(state.matches('red.stop'));\n")),(0,s.mdx)("h3",{id:"statematches-object-argument"},(0,s.mdx)("inlineCode",{parentName:"h3"},"state.matches")," object argument"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({});\nconst state = machine.initialState;\n\n/**\n * Checks if the machine is in the red.stop\n * state\n */\nstate.matches({\n  red: 'stop',\n});\n")),(0,s.mdx)("p",null,"You can also use the object method to check if your machine is in two parallel states at once:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({});\nconst state = machine.initialState;\n\n/**\n * Checks if the machine is in the wind.blowing\n * state AND the rain.raining state\n */\nstate.matches({\n  wind: 'blowing',\n  rain: 'raining',\n});\n")),(0,s.mdx)("h3",{id:"match-one-of-multiple-states"},"Match one of multiple states"),(0,s.mdx)("p",null,"If you want to match one of multiple states, you can use ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"},(0,s.mdx)("inlineCode",{parentName:"a"},".some()"))," on an array of state values:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({});\nconst state = machine.initialState;\n\nconst isMatch = [{ customer: 'deposit' }, { customer: 'withdrawal' }].some(\n  state.matches\n);\n")),(0,s.mdx)("h2",{id:"targeting-multiple-parallel-states"},"Targeting multiple parallel states"),(0,s.mdx)("p",null,"Sometimes you\u2019ll need a transition to target multiple parts of a parallel state simultaneously. This is useful when you want to affect different parts of a simultaneous process at the same time."),(0,s.mdx)("p",null,"Multiple targets are specified as an array in ",(0,s.mdx)("inlineCode",{parentName:"p"},"target: [...]"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst settingsMachine = createMachine({\n  type: 'parallel',\n  states: {\n    mode: {\n      initial: 'active',\n      states: {\n        inactive: {},\n        pending: {},\n        active: {},\n      },\n    },\n    status: {\n      initial: 'enabled',\n      states: {\n        disabled: {},\n        enabled: {},\n      },\n    },\n  },\n  on: {\n    // Multiple targets\n    // highlight-start\n    DEACTIVATE: {\n      target: ['.mode.inactive', '.status.disabled'],\n    },\n    // highlight-end\n  },\n});\n")),(0,s.mdx)("p",null,"In the example above, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"DEACTIVATE")," event simultaneously causes ",(0,s.mdx)("em",{parentName:"p"},"two")," changes, disabling the ",(0,s.mdx)("inlineCode",{parentName:"p"},"status")," and turning the ",(0,s.mdx)("inlineCode",{parentName:"p"},"mode")," to ",(0,s.mdx)("inlineCode",{parentName:"p"},"inactive"),"."),(0,s.mdx)("h2",{id:"final-states-and-parallel-states"},"Final states and parallel states"),(0,s.mdx)("p",null,"When every child state node in a parallel state node is ",(0,s.mdx)("em",{parentName:"p"},"done"),", the parent parallel state node is also ",(0,s.mdx)("em",{parentName:"p"},"done"),". When every final state node in every child state node is reached, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"done")," event will be fired for the parallel state node."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"onDone")," is very useful in modeling parallel tasks. For example, below there is a shopping machine where ",(0,s.mdx)("inlineCode",{parentName:"p"},"user")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"items")," represent two parallel tasks of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"cart")," state:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst shoppingMachine = createMachine({\n  initial: 'cart',\n  states: {\n    cart: {\n      type: 'parallel',\n      states: {\n        user: {\n          initial: 'pending',\n          states: {\n            pending: {\n              entry: 'getUser',\n              on: {\n                RESOLVE_USER: { target: 'success' },\n                REJECT_USER: { target: 'failure' },\n              },\n            },\n            success: { type: 'final' },\n            failure: {},\n          },\n        },\n        items: {\n          initial: 'pending',\n          states: {\n            pending: {\n              entry: 'getItems',\n              on: {\n                RESOLVE_ITEMS: { target: 'success' },\n                REJECT_ITEMS: { target: 'failure' },\n              },\n            },\n            success: { type: 'final' },\n            failure: {},\n          },\n        },\n      },\n      onDone: 'confirm',\n    },\n    confirm: {},\n  },\n});\n")),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"onDone")," transition will only happen when all of the child states of ",(0,s.mdx)("inlineCode",{parentName:"p"},"cart")," (e.g., ",(0,s.mdx)("inlineCode",{parentName:"p"},"user")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"items"),") are in their final states. In the case of the shopping machine, once the ",(0,s.mdx)("inlineCode",{parentName:"p"},"shopping.cart.user.success")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"shopping.cart.items.success")," state nodes are reached, the machine will transition from the ",(0,s.mdx)("inlineCode",{parentName:"p"},"cart")," to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"confirm")," state."))}m.isMDXComponent=!0}}]);