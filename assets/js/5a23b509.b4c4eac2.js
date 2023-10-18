"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[84479],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>l});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=c(n),s=r,x=l["".concat(m,".").concat(s)]||l[s]||u[s]||i;return n?a.createElement(x,o(o({ref:t},p),{},{components:n})):a.createElement(x,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,m=new Array(i);m[0]=x;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var p=2;p<i;p++)m[p]=n[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},41317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"@xstate/immer"},m=void 0,o={unversionedId:"xstate-immer",id:"xstate-immer",title:"@xstate/immer",description:"The @xstate/immer package contains utilities for using Immer with XState.",source:"@site/docs/xstate-immer.mdx",sourceDirName:".",slug:"/xstate-immer",permalink:"/statelyai-docs/docs/xstate-immer",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/xstate-immer.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/immer"},sidebar:"docs",previous:{title:"@xstate/test",permalink:"/statelyai-docs/docs/xstate-test"},next:{title:"Developer tools",permalink:"/statelyai-docs/docs/category/developer-tools"}},d={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"API",id:"api",level:2},{value:"<code>assign(recipe)</code>",id:"assignrecipe",level:3},{value:"Arguments for <code>assign</code>",id:"arguments-for-assign",level:4},{value:"Arguments for <code>recipe</code>",id:"arguments-for-recipe",level:4},{value:"<code>createUpdater(eventType, recipe)</code>",id:"createupdatereventtype-recipe",level:3},{value:"TypeScript",id:"typescript",level:2}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-immer"},"@xstate/immer package")," contains utilities for using ",(0,r.mdx)("a",{parentName:"p",href:"https://immerjs.github.io/immer"},"Immer")," with ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate"},"XState"),"."),(0,r.mdx)("h2",{id:"quick-start"},"Quick start"),(0,r.mdx)("p",null,"Included in ",(0,r.mdx)("inlineCode",{parentName:"p"},"@xstate/immer"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"assign()")," - an Immer action that allows you to immutably assign to machine ",(0,r.mdx)("inlineCode",{parentName:"li"},"context")," in a convenient way"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"createUpdater()")," - a useful function that allows you to cohesively define a context update event event creator and assign action, all together. (",(0,r.mdx)("a",{parentName:"li",href:"/#createupdatereventtype-recipe"},"See an example")," below)")),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Install ",(0,r.mdx)("inlineCode",{parentName:"li"},"immer"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"xstate"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"@xstate/immer"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install immer xstate @xstate/immer\n")),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("h3",{parentName:"admonition",id:"important-note"},"Important note"),(0,r.mdx)("p",{parentName:"admonition"},"You don\u2019t need to ",(0,r.mdx)("inlineCode",{parentName:"p"},"import")," anything from ",(0,r.mdx)("inlineCode",{parentName:"p"},"immer"),"; it is a peer-dependency of ",(0,r.mdx)("inlineCode",{parentName:"p"},"@xstate/immer"),", so it must be installed.")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Immer utilities:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine, interpret } from 'xstate';\nimport { assign, createUpdater } from '@xstate/immer';\n\nconst levelUpdater = createUpdater('UPDATE_LEVEL', (ctx, { input }) => {\n  ctx.level = input;\n});\n\nconst toggleMachine = createMachine({\n  id: 'toggle',\n  context: {\n    count: 0,\n    level: 0\n  },\n  initial: 'inactive',\n  states: {\n    inactive: {\n      on: {\n        TOGGLE: {\n          target: 'active',\n          // Immutably update context the same \"mutable\"\n          // way as you would do with Immer!\n          actions: assign((ctx) => ctx.count++)\n        }\n      }\n    },\n    active: {\n      on: {\n        TOGGLE: {\n          target: 'inactive'\n        },\n        // Use the updater for more convenience:\n        [levelUpdater.type]: {\n          actions: levelUpdater.action\n        }\n      }\n    }\n  }\n});\n\nconst toggleService = interpret(toggleMachine)\n  .onTransition((state) => {\n    console.log(state.context);\n  })\n  .start();\n\ntoggleService.send('TOGGLE');\n// { count: 1, level: 0 }\n\ntoggleService.send(levelUpdater.update(9));\n// { count: 1, level: 9 }\n\ntoggleService.send('TOGGLE');\n// { count: 2, level: 9 }\n\ntoggleService.send(levelUpdater.update(-100));\n// Notice how the level is not updated in 'inactive' state:\n// { count: 2, level: 9 }\n")),(0,r.mdx)("h2",{id:"api"},"API"),(0,r.mdx)("h3",{id:"assignrecipe"},(0,r.mdx)("inlineCode",{parentName:"h3"},"assign(recipe)")),(0,r.mdx)("p",null,"Returns an XState event object that will update the machine\u2019s ",(0,r.mdx)("inlineCode",{parentName:"p"},"context"),' to reflect the changes ("mutations") to ',(0,r.mdx)("inlineCode",{parentName:"p"},"context")," made in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"recipe")," function."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"recipe")," is similar to the function that you would pass to ",(0,r.mdx)("a",{parentName:"p",href:"https://immerjs.github.io/immer/docs/produce"},"Immer\u2019s ",(0,r.mdx)("inlineCode",{parentName:"a"},"produce(val, recipe)")," function"),"), with the addition that you get the same arguments as a normal XState assigner passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"assign(assigner)")," (",(0,r.mdx)("inlineCode",{parentName:"p"},"context"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"event"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"meta"),")."),(0,r.mdx)("h4",{id:"arguments-for-assign"},"Arguments for ",(0,r.mdx)("inlineCode",{parentName:"h4"},"assign")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"recipe")),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},'A function where "mutations" to ',(0,r.mdx)("inlineCode",{parentName:"td"},"context")," are made. See the ",(0,r.mdx)("a",{parentName:"td",href:"https://immerjs.github.io/immer/docs/produce"},"Immer docs"),".")))),(0,r.mdx)("h4",{id:"arguments-for-recipe"},"Arguments for ",(0,r.mdx)("inlineCode",{parentName:"h4"},"recipe")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"context")),(0,r.mdx)("td",{parentName:"tr",align:null},"any"),(0,r.mdx)("td",{parentName:"tr",align:null},"The context data of the current state")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"event")),(0,r.mdx)("td",{parentName:"tr",align:null},"event object"),(0,r.mdx)("td",{parentName:"tr",align:null},"The received event object")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"meta")),(0,r.mdx)("td",{parentName:"tr",align:null},"assign meta object"),(0,r.mdx)("td",{parentName:"tr",align:null},"An object containing meta data such as the ",(0,r.mdx)("inlineCode",{parentName:"td"},"state"),", SCXML ",(0,r.mdx)("inlineCode",{parentName:"td"},"_event"),", etc.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\nimport { assign } from '@xstate/immer';\n\nconst userMachine = createMachine({\n  id: 'user',\n  context: {\n    name: null,\n    address: {\n      city: null,\n      state: null,\n      country: null\n    }\n  },\n  initial: 'active',\n  states: {\n    active: {\n      on: {\n        CHANGE_COUNTRY: {\n          actions: assign((context, event) => {\n            context.address.country = event.value;\n          })\n        }\n      }\n    }\n  }\n});\n\nconst { initialState } = userMachine;\n\nconst nextState = userMachine.transition(initialState, {\n  type: 'UPDATE_COUNTRY',\n  country: 'USA'\n});\n\nnextState.context.address.country;\n// => 'USA'\n")),(0,r.mdx)("h3",{id:"createupdatereventtype-recipe"},(0,r.mdx)("inlineCode",{parentName:"h3"},"createUpdater(eventType, recipe)")),(0,r.mdx)("p",null,"Returns an object that is useful for creating ",(0,r.mdx)("inlineCode",{parentName:"p"},"context")," updaters."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventType")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The event type for the Immer update event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"recipe")),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"A function that takes in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"context")," and an Immer update ",(0,r.mdx)("inlineCode",{parentName:"td"},"event"),' object to "mutate" the ',(0,r.mdx)("inlineCode",{parentName:"td"},"context"))))),(0,r.mdx)("p",null,"An Immer update ",(0,r.mdx)("inlineCode",{parentName:"p"},"event")," object is an object that contains:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"type"),": the ",(0,r.mdx)("inlineCode",{parentName:"li"},"eventType")," specified"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"input"),': the "payload" of the update event')),(0,r.mdx)("p",null,"The object returned by ",(0,r.mdx)("inlineCode",{parentName:"p"},"createUpdater(...)")," is an updater object containing:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"type"),": the ",(0,r.mdx)("inlineCode",{parentName:"li"},"eventType")," passed into ",(0,r.mdx)("inlineCode",{parentName:"li"},"createUpdater(eventType, ...)"),". This is used for specifying transitions in which the update will occur."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"action"),": the assign action object that will update the ",(0,r.mdx)("inlineCode",{parentName:"li"},"context"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"update"),": the event creator that takes in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"input")," and returns an ",(0,r.mdx)("inlineCode",{parentName:"li"},"event")," object with the specified ",(0,r.mdx)("inlineCode",{parentName:"li"},"eventType")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"input")," that will be passed to ",(0,r.mdx)("inlineCode",{parentName:"li"},"recipe(context, event)"),".")),(0,r.mdx)("admonition",{title:".update(...) event creator",type:"caution"},(0,r.mdx)("h3",{parentName:"admonition",id:"caution"},"Caution"),(0,r.mdx)("p",{parentName:"admonition"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},".update(...)")," event creator is pure; it only returns an assign action object, and doesn\u2019t directly update ",(0,r.mdx)("inlineCode",{parentName:"p"},"context"),".")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\nimport { createUpdater } from '@xstate/immer';\n\n// The second argument is an Immer update event that looks like:\n// {\n//   type: 'UPDATE_NAME',\n//   input: 'David' // or any string\n// }\nconst nameUpdater = createUpdater('UPDATE_NAME', (context, { input }) => {\n  context.name = input;\n});\n\nconst ageUpdater = createUpdater('UPDATE_AGE', (context, { input }) => {\n  context.age = input;\n});\n\nconst formMachine = createMachine({\n  initial: 'editing',\n  context: {\n    name: '',\n    age: null\n  },\n  states: {\n    editing: {\n      on: {\n        // The updater.type can be used directly for transitions\n        // where the updater.action function will be applied\n        [nameUpdater.type]: { actions: nameUpdater.action },\n        [ageUpdater.type]: { actions: ageUpdater.action }\n      }\n    }\n  }\n});\n\nconst service = interpret(formMachine)\n  .onTransition((state) => {\n    console.log(state.context);\n  })\n  .start();\n\n// The event object sent will look like:\n// {\n//   type: 'UPDATE_NAME',\n//   input: 'David'\n// }\nservice.send(nameUpdater.update('David'));\n// => { name: 'David', age: null }\n\n// The event object sent will look like:\n// {\n//   type: 'UPDATE_AGE',\n//   input: 100\n// }\nservice.send(ageUpdater.update(100));\n// => { name: 'David', age: 100 }\n")),(0,r.mdx)("h2",{id:"typescript"},"TypeScript"),(0,r.mdx)("p",null,"To properly type the Immer ",(0,r.mdx)("inlineCode",{parentName:"p"},"assign")," action creator, pass in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"context")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"event")," types as generic types:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"interface SomeContext {\n  name: string;\n}\n\ninterface SomeEvent {\n  type: 'SOME_EVENT';\n  value: string;\n}\n\n// ...\n\n{\n  actions: assign<SomeContext, SomeEvent>((context, event) => {\n    context.name = event.value;\n    // ... etc.\n  });\n}\n")),(0,r.mdx)("p",null,"To properly type ",(0,r.mdx)("inlineCode",{parentName:"p"},"createUpdater"),", pass in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"context")," and the specific ",(0,r.mdx)("inlineCode",{parentName:"p"},"ImmerUpdateEvent<...>")," (see below) types as generic types:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createUpdater, ImmerUpdateEvent } from '@xstate/immer';\n\n// This is the same as:\n// {\n//   type: 'UPDATE_NAME';\n//   input: string;\n// }\ntype NameUpdateEvent = ImmerUpdateEvent<'UPDATE_NAME', string>;\n\nconst nameUpdater = createUpdater<SomeContext, NameUpdateEvent>(\n  'UPDATE_NAME',\n  (ctx, { input }) => {\n    ctx.name = input;\n  }\n);\n\n// You should use NameUpdateEvent directly as part of the event type\n// in createMachine<SomeContext, SomeEvent>.\n")),(0,r.mdx)("p",null,"Here is a fully typed example of the previous form example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\nimport { createUpdater, ImmerUpdateEvent } from '@xstate/immer';\n\ninterface FormContext {\n  name: string;\n  age: number | undefined;\n}\n\ntype NameUpdateEvent = ImmerUpdateEvent<'UPDATE_NAME', string>;\ntype AgeUpdateEvent = ImmerUpdateEvent<'UPDATE_AGE', number>;\n\nconst nameUpdater = createUpdater<FormContext, NameUpdateEvent>(\n  'UPDATE_NAME',\n  (ctx, { input }) => {\n    ctx.name = input;\n  }\n);\n\nconst ageUpdater = createUpdater<FormContext, AgeUpdateEvent>(\n  'UPDATE_AGE',\n  (ctx, { input }) => {\n    ctx.age = input;\n  }\n);\n\ntype FormEvent =\n  | NameUpdateEvent\n  | AgeUpdateEvent\n  | {\n      type: 'SUBMIT';\n    };\n\nconst formMachine = createMachine({\n  schema: {\n    context: {} as FormContext,\n    events: {} as FormEvent\n  },\n  initial: 'editing',\n  context: {\n    name: '',\n    age: undefined\n  },\n  states: {\n    editing: {\n      on: {\n        [nameUpdater.type]: { actions: nameUpdater.action },\n        [ageUpdater.type]: { actions: ageUpdater.action },\n        SUBMIT: 'submitting'\n      }\n    },\n    submitting: {\n      // ...\n    }\n  }\n});\n")))}c.isMDXComponent=!0}}]);