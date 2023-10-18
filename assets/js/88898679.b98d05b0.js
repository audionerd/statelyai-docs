"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[59793],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>h,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,r({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={title:"@xstate/graph"},s=void 0,l={unversionedId:"xstate-graph",id:"xstate-graph",title:"@xstate/graph",description:"The @xstate/graph package contains graph algorithms and utilities for XState machines.",source:"@site/docs/xstate-graph.mdx",sourceDirName:".",slug:"/xstate-graph",permalink:"/docs/xstate-graph",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/xstate-graph.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/graph"},sidebar:"docs",previous:{title:"@xstate/fsm",permalink:"/docs/xstate-fsm"},next:{title:"@xstate/test",permalink:"/docs/xstate-test"}},o={},m=[{value:"Quick start",id:"quick-start",level:2},{value:"API",id:"api",level:2},{value:"<code>getShortestPaths(machine, options?)</code>",id:"getshortestpathsmachine-options",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Example",id:"example",level:4},{value:"<code>getSimplePaths(machine, options?)</code>",id:"getsimplepathsmachine-options",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>getPathFromEvents(machine, events)</code>",id:"getpathfromeventsmachine-events",level:3},{value:"<code>toDirectedGraph(machine)</code>",id:"todirectedgraphmachine",level:3},{value:"Example",id:"example-2",level:4},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:4}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-graph"},"@xstate/graph package")," contains graph algorithms and utilities for XState machines."),(0,i.mdx)("h2",{id:"quick-start"},"Quick start"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("inlineCode",{parentName:"li"},"xstate")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"@xstate/graph"),":")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install xstate @xstate/graph\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Import the graph utilities. Example:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\nimport { getSimplePaths } from '@xstate/graph';\n\nconst machine = createMachine(/* ... */);\nconst paths = getSimplePaths(machine);\n")),(0,i.mdx)("h2",{id:"api"},"API"),(0,i.mdx)("h3",{id:"getshortestpathsmachine-options"},(0,i.mdx)("inlineCode",{parentName:"h3"},"getShortestPaths(machine, options?)")),(0,i.mdx)("h4",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"machine")," - the ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/machines.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"Machine"))," to traverse"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options")," (optional) - ",(0,i.mdx)("a",{parentName:"li",href:"/#options"},"options")," that customize how the algorithm will traverse the machine")),(0,i.mdx)("p",null,"Returns the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"shortest paths (Dijkstra's algorithm)")," of a ",(0,i.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/machines.html"},"machine")," from the initial state to every other state as a mapped object, where the:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"key")," is the stringified state"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"value")," is an object with the properties:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"state")," - the target ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/states.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"State"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"path")," - the shortest path to get from the initial state to the target state")))),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"path")," is an array of segments, where each segment is an object with the properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"state")," - the ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/states.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"State"))," of the segment"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"weight")," - the total ",(0,i.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Weighted_graph"},"weight")," of the path",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Currently, each transition from one state to another has a weight of 1. This will be customizable in the future."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"event")," - the event object that transitions the ",(0,i.mdx)("inlineCode",{parentName:"li"},"machine")," from the state to the next state in the path")),(0,i.mdx)("p",null,"Every path starts with the initial state."),(0,i.mdx)("p",null,"The overall object structure looks like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json5"},'{\n  "<SERIALIZED STATE>": {\n    "state": State { ... },\n    "path": [\n      {\n        "state": State { ... },\n        "event": { "type": "<event.type>", "<PROP>": "<event.PROP>" }\n      },\n      {\n        "state": State { ... },\n        "event": { "type": "<event.type>", "<PROP>": "<event.PROP>" }\n      },\n      ...\n    ]\n  },\n  ...\n}\n')),(0,i.mdx)("h4",{id:"example"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\nimport { getShortestPaths } from '@xstate/graph';\n\nconst feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'question',\n  states: {\n    question: {\n      on: {\n        CLICK_GOOD: 'thanks',\n        CLICK_BAD: 'form',\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    form: {\n      on: {\n        SUBMIT: 'thanks',\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    thanks: {\n      on: {\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    closed: {\n      type: 'final'\n    }\n  }\n});\n\nconst shortestPaths = getShortestPaths(feedbackMachine);\n\nconsole.log(shortestPaths);\n// => {\n//   '\"question\"': {\n//     state: State { value: 'question', context: undefined },\n//     weight: 0,\n//     path: []\n//   },\n//   '\"thanks\"': {\n//     state: State { value: 'thanks', context: undefined },\n//     weight: 1,\n//     path: [\n//       {\n//         state: State { value: 'question', context: undefined },\n//         event: { type: 'CLICK_GOOD' }\n//       }\n//     ]\n//   },\n//   '\"form\"': {\n//     state: State { value: 'form', context: undefined },\n//     weight: 1,\n//     path: [\n//       {\n//         state: State { value: 'question', context: undefined },\n//         event: { type: 'CLICK_BAD' }\n//       }\n//     ]\n//   },\n//   '\"closed\"': {\n//     state: State { value: 'closed', context: undefined },\n//     weight: 1,\n//     path: [\n//       {\n//         state: State { value: 'question', context: undefined },\n//         event: { type: 'CLOSE' }\n//       }\n//     ]\n//   }\n// };\n")),(0,i.mdx)("h3",{id:"getsimplepathsmachine-options"},(0,i.mdx)("inlineCode",{parentName:"h3"},"getSimplePaths(machine, options?)")),(0,i.mdx)("p",null,"Arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"machine")," - the ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/machines.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"Machine"))," to traverse"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options")," (optional) - ",(0,i.mdx)("a",{parentName:"li",href:"/#options"},"options")," that customize how the algorithm will traverse the machine")),(0,i.mdx)("p",null,"Returns the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Path_(graph_theory)#Definitions"},"simple paths")," of a ",(0,i.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/machines.html"},"machine")," as a mapped object, where the:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"key")," is the stringified state"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"value")," is an object with the properties:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"state")," - the target ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/states.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"State"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"paths")," - the array of paths to get from the initial state to the target state")))),(0,i.mdx)("p",null,"Each ",(0,i.mdx)("inlineCode",{parentName:"p"},"path")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"paths")," is an array of segments, where each segment of the path is an object with the properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"state")," - the ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/states.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"State"))," of the segment"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"event")," - the event object that transitions the ",(0,i.mdx)("inlineCode",{parentName:"li"},"machine")," from the state to the next state in the path")),(0,i.mdx)("p",null,"Every path starts with the initial state."),(0,i.mdx)("p",null,"The overall object structure looks like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json5"},'{\n  "<SERIALIZED STATE>": {\n    "state": State { ... },\n    "paths": [\n      [\n        {\n          "state": State { ... },\n          "event": { "type": "<event.type>", "<PROP>": "<event.PROP>" }\n        },\n        {\n          "state": State { ... },\n          "event": { "type": "<event.type>", "<PROP>": "<event.PROP>" }\n        },\n        ...\n      ],\n      ...\n    ]\n  },\n  ...\n}\n')),(0,i.mdx)("h4",{id:"example-1"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\nimport { getSimplePaths } from '@xstate/graph';\n\nconst feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'question',\n  states: {\n    question: {\n      on: {\n        CLICK_GOOD: 'thanks',\n        CLICK_BAD: 'form',\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    form: {\n      on: {\n        SUBMIT: 'thanks',\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    thanks: {\n      on: {\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    closed: {\n      type: 'final'\n    }\n  }\n});\n\nconst simplePaths = getSimplePaths(feedbackMachine);\n\nconsole.log(simplePaths);\n// => {\n//   '\"question\"': {\n//     state: { value: 'question', context: undefined },\n//     paths: [[]]\n//   },\n//   '\"thanks\"': {\n//     state: { value: 'thanks', context: undefined },\n//     paths: [\n//       [\n//         {\n//           state: { value: 'question', context: undefined },\n//           event: { type: 'CLICK_GOOD' }\n//         }\n//       ],\n//       [\n//         {\n//           state: { value: 'question', context: undefined },\n//           event: { type: 'CLICK_BAD' }\n//         },\n//         {\n//           state: { value: 'form', context: undefined },\n//           event: { type: 'SUBMIT' }\n//         }\n//       ]\n//     ]\n//   },\n//   '\"closed\"': {\n//     state: { value: 'closed', context: undefined },\n//     paths: [\n//       [\n//         {\n//           state: { value: 'question', context: undefined },\n//           event: { type: 'CLICK_GOOD' }\n//         },\n//         {\n//           state: { value: 'thanks', context: undefined },\n//           event: { type: 'CLOSE' }\n//         }\n//       ],\n//       [\n//         {\n//           state: { value: 'question', context: undefined },\n//           event: { type: 'CLICK_GOOD' }\n//         },\n//         {\n//           state: { value: 'thanks', context: undefined },\n//           event: { type: 'ESC' }\n//         }\n//       ],\n//       ...\n//     ]\n//   },\n//   ...\n// };\n")),(0,i.mdx)("h3",{id:"getpathfromeventsmachine-events"},(0,i.mdx)("inlineCode",{parentName:"h3"},"getPathFromEvents(machine, events)")),(0,i.mdx)("p",null,"Arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"machine")," - the ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/machines.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"Machine"))," to traverse"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"events")," - the sequence of events to generate a path from")),(0,i.mdx)("p",null,"Returns a path object with the following keys:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"state")," - the target ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/states.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"State"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"segments")," - an array of objects with the following shape:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"state")," - the ",(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/states.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"State"))," of the segment"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"event")," - the event object that transitions the ",(0,i.mdx)("inlineCode",{parentName:"li"},"machine")," from the state to the next state in the path")))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\nimport { getSimplePaths } from '@xstate/graph';\n\nconst feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'question',\n  states: {\n    question: {\n      on: {\n        CLICK_GOOD: 'thanks',\n        CLICK_BAD: 'form',\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    form: {\n      on: {\n        SUBMIT: 'thanks',\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    thanks: {\n      on: {\n        CLOSE: 'closed',\n        ESC: 'closed'\n      }\n    },\n    closed: {\n      type: 'final'\n    }\n  }\n});\n\nconst path = getPathFromEvents(feedbackMachine, [\n  { type: 'CLICK_GOOD' },\n  { type: 'SUBMIT' },\n  { type: 'CLOSE' }\n]);\n\nconsole.log(path);\n// => {\n//   state: { value: 'closed' },\n//   segments: [\n//     {\n//       state: { value: 'question' },\n//       event: { type: 'CLICK_GOOD' },\n//     },\n//     {\n//       state: { value: 'form' },\n//       event: { type: 'SUBMIT' },\n//     },\n//     {\n//       state: { value: 'thanks' },\n//       event: { type: 'CLOSE' },\n//     },\n//   ],\n// }\n")),(0,i.mdx)("h3",{id:"todirectedgraphmachine"},(0,i.mdx)("inlineCode",{parentName:"h3"},"toDirectedGraph(machine)")),(0,i.mdx)("p",null,"Converts a ",(0,i.mdx)("inlineCode",{parentName:"p"},"machine")," to a directed graph structure."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"machine")),(0,i.mdx)("td",{parentName:"tr",align:null},"XState Machine created by ",(0,i.mdx)("inlineCode",{parentName:"td"},"createMachine(...)")),(0,i.mdx)("td",{parentName:"tr",align:null},"The machine to convert to a directed graph structure")))),(0,i.mdx)("h4",{id:"example-2"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import { toDirectedGraph } from '@xstate/graph';\n\nconst machine = createMachine({/* ... */});\n\nconst digraph = toDirectedGraph(machine);\n\n// returns an object with this structure:\n{\n  id: '...',\n  stateNode: /* StateNode */,\n  children: [\n    { id: '...', children: [/* ... */], edges: [/* ... */] },\n    { id: '...', /* ... */ },\n    // ...\n  ],\n  edges: [\n    { source: /* ... */, target: /* ... */, transition: /* ... */ }\n    // ...\n  ]\n}\n")),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("p",null,"Options can be passed into ",(0,i.mdx)("inlineCode",{parentName:"p"},"getShortestPaths")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"getSimplePaths")," to customize how the graph represented by the machine should be traversed:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"events")," - a mapping of event types to an array of event objects to be used for those events"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"filter")," - a function that determines whether a ",(0,i.mdx)("inlineCode",{parentName:"li"},"state")," should be traversed. If ",(0,i.mdx)("inlineCode",{parentName:"li"},"false"),', the traversal algorithm(s) will assume the state was "seen" and ignore traversing it.')),(0,i.mdx)("h4",{id:"examples"},"Examples"),(0,i.mdx)("p",null,"In the below example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"INC")," event is expanded to include two possible events, with ",(0,i.mdx)("inlineCode",{parentName:"p"},"value: 1")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"value: 2")," as the payload. It also ensures that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"state.context.count <= 5"),"; otherwise, this machine would be traversed infinitely."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const counterMachine = createMachine({\n  id: 'counter',\n  initial: 'active',\n  context: { count: 0 },\n  states: {\n    active: {\n      on: {\n        INC: {\n          actions: assign({ count: (ctx, e) => ctx.count + e.value })\n        }\n      }\n    }\n  }\n});\n\nconst shortestPaths = getShortestPaths(counterMachine, {\n  events: {\n    INC: [\n      { type: 'INC', value: 1 },\n      { type: 'INC', value: 2 }\n    ]\n  },\n  filter: (state) => state.context.count <= 5\n});\n\nconsole.log(shortestPaths);\n// => {\n//   '\"active\" | {\"count\":0}': {\n//     state: { value: 'active', context: { count: 0 } },\n//     weight: 0,\n//     path: []\n//   },\n//   '\"active\" | {\"count\":1}': {\n//     state: { value: 'active', context: { count: 1 } },\n//     weight: 1,\n//     path: [\n//       {\n//         state: { value: 'active', context: { count: 0 } },\n//         event: { type: 'INC', value: 1 }\n//       }\n//     ]\n//   },\n//   '\"active\" | {\"count\":2}': {\n//     state: { value: 'active', context: { count: 2 } },\n//     weight: 1,\n//     path: [\n//       {\n//         state: { value: 'active', context: { count: 0 } },\n//         event: { type: 'INC', value: 2 }\n//       }\n//     ]\n//   },\n//   '\"active\" | {\"count\":3}': {\n//     state: { value: 'active', context: { count: 3 } },\n//     weight: 2,\n//     path: [\n//       {\n//         state: { value: 'active', context: { count: 0 } },\n//         event: { type: 'INC', value: 1 }\n//       },\n//       {\n//         state: { value: 'active', context: { count: 1 } },\n//         event: { type: 'INC', value: 2 }\n//       }\n//     ]\n//   },\n//   ...\n// };\n")))}p.isMDXComponent=!0}}]);