"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[62696],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>u,useMDXComponents:()=>p,withMDXComponents:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){return function(t){var a=p(t.components);return r.createElement(e,s({},t,{components:a}))}},p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||g[d]||s;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={title:"Persisting and restoring state in XState",description:"Learn how to persist and restore your state machine state in XState",tags:["state machine","statechart","state","persist","restore","business logic","workflow","xstate"],authors:["david"],date:new Date("2023-10-02T00:00:00.000Z"),slug:"2023-10-02-persisting-state",image:"/blog/2023-10-02-persisting-state.png"},o=void 0,i={permalink:"/blog/2023-10-02-persisting-state",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-10-02-persisting-state/index.mdx",source:"@site/blog/2023-10-02-persisting-state/index.mdx",title:"Persisting and restoring state in XState",description:"Learn how to persist and restore your state machine state in XState",date:"2023-10-02T00:00:00.000Z",formattedDate:"October 2, 2023",tags:[{label:"state machine",permalink:"/blog/tags/state-machine"},{label:"statechart",permalink:"/blog/tags/statechart"},{label:"state",permalink:"/blog/tags/state"},{label:"persist",permalink:"/blog/tags/persist"},{label:"restore",permalink:"/blog/tags/restore"},{label:"business logic",permalink:"/blog/tags/business-logic"},{label:"workflow",permalink:"/blog/tags/workflow"},{label:"xstate",permalink:"/blog/tags/xstate"}],readingTime:3.045,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"Persisting and restoring state in XState",description:"Learn how to persist and restore your state machine state in XState",tags:["state machine","statechart","state","persist","restore","business logic","workflow","xstate"],authors:["david"],date:"2023-10-02T00:00:00.000Z",slug:"2023-10-02-persisting-state",image:"/blog/2023-10-02-persisting-state.png"},prevItem:{title:"What is a state machine?",permalink:"/blog/2023-10-05-what-is-a-state-machine"},nextItem:{title:"Context schema and export to CodeSandbox or StackBlitz",permalink:"/blog/2023-09-21-context-schema-and-export-to-external-editors"}},l={authorsImageUrls:[void 0]},c=[{value:"Quick reference",id:"quick-reference",level:2},{value:"Persisting and restoring state",id:"persisting-and-restoring-state",level:2},{value:"Persistence strategies",id:"persistence-strategies",level:2},{value:"Examples",id:"examples",level:2}],m=(p="EmbedMachine",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",e)});var p;const d={toc:c};function g(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"State machines are great for modeling state in applications. However, we often need to persist and restore state across sessions - for example, when a user closes and reopens their browser. In this article, we\u2019ll explore how to persist and restore state in XState so your frontend applications or backend workflows can pick up where it left off."),(0,n.mdx)("admonition",{type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"The code in this article applies to ",(0,n.mdx)("a",{parentName:"p",href:"/docs/migration"},"XState v5 beta"),".")),(0,n.mdx)("h2",{id:"quick-reference"},"Quick reference"),(0,n.mdx)("p",null,"If you\u2019re already familiar with XState, here\u2019s a quick reference for persisting and restoring state:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor } from 'xstate';\nimport { someMachine } from './someMachine';\n\n// Get the state from localStorage (if it exists)\nconst stateString = localStorage.getItem('some-state');\n\n// Create the state from the string (if it exists)\nconst restoredState = stateString ? JSON.parse(stateString) : undefined;\n\nconst actor = createActor(someMachine, {\n  // Restore the state (if it exists)\n  state: restoredState,\n});\n\nactor.subscribe(() => {\n  // Persist the state to localStorage\n  const persistedState = actor.getPersistedState();\n  localStorage.setItem('some-state', JSON.stringify(persistedState));\n});\n\nactor.start();\n")),(0,n.mdx)("h2",{id:"persisting-and-restoring-state"},"Persisting and restoring state"),(0,n.mdx)("p",null,"Let\u2019s say we have a state machine that represents a user\u2019s shopping cart:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, createActor, assign } from 'xstate';\n\nconst checkoutMachine = createMachine({\n  id: 'checkout',\n  initial: 'shopping',\n  context: {\n    items: [],\n  },\n  states: {\n    shopping: {\n      on: {\n        'item.add': {\n          actions: assign({\n            items: ({ context, event }) => {\n              return [...context.items, event.item];\n            },\n          }),\n        },\n        checkout: 'checkingOut',\n      },\n    },\n    checkingOut: {\n      // ...\n    },\n  },\n});\n\nconst checkoutActor = createActor(machine, {\n  // ...\n});\n")),(0,n.mdx)(m,{embedURL:"https://stately.ai/registry/editor/embed/092bf401-2d65-48ae-969c-99b4a7eeb87f?machineId=6777d80d-82d8-41dc-9cd3-c6951495ff0f",name:"checkout",mdxType:"EmbedMachine"}),(0,n.mdx)("p",null,"You may want to persist the state of this machine so that when the user comes back to the site, the items in their cart are still there, and the step in the checkout process is still the same. To do this, we need to remember to do two things:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Persist the state")," to some storage (e.g., localStorage, a database, etc.)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Restore the state")," from the storage when creating the actor")),(0,n.mdx)("p",null,"First, you should determine your ",(0,n.mdx)("a",{parentName:"p",href:"#persistence-strategies"},"persistence strategy"),". For this example, we\u2019ll use ",(0,n.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"the ",(0,n.mdx)("inlineCode",{parentName:"a"},"localStorage")," API"),"."),(0,n.mdx)("p",null,"Actors created with ",(0,n.mdx)("inlineCode",{parentName:"p"},"createActor")," have a ",(0,n.mdx)("inlineCode",{parentName:"p"},".getPersistedState()")," method that returns the state that can be persisted. This state is a plain object that can be serialized to JSON using ",(0,n.mdx)("inlineCode",{parentName:"p"},"JSON.stringify(persistedState)"),". Since the persisted state is a plain object, you can persist it to any storage that you want, as long as it can be restored as an object."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-ts"},"// Read the state to persist from the actor (sync)\nconst persistedState = actor.getPersistedState();\n\n// Persist the state to localStorage\nlocalStorage.setItem('some-state-key', JSON.stringify(persistedState));\n")),(0,n.mdx)("p",null,"Retrieve the persisted state from storage and restore it as an object when creating the actor:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-ts"},"// Read the persisted state from localStorage\nconst restoredState = localStorage.getItem('some-state-key');\n\nconst actor = createActor(machine, {\n  // Restore the state (if it exists)\n  state: restoredState,\n});\n\nactor.start();\n")),(0,n.mdx)("p",null,"The actor will start at the ",(0,n.mdx)("inlineCode",{parentName:"p"},"restoredState"),", if it exists. If ",(0,n.mdx)("inlineCode",{parentName:"p"},"restoredState")," is ",(0,n.mdx)("inlineCode",{parentName:"p"},"undefined"),", the actor will start at the initial state of the actor logic provided to ",(0,n.mdx)("inlineCode",{parentName:"p"},"createActor(logic)"),"."),(0,n.mdx)("h2",{id:"persistence-strategies"},"Persistence strategies"),(0,n.mdx)("p",null,"For the browser, you can:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Use ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")),(0,n.mdx)("li",{parentName:"ul"},"Use a client-side database like ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB")),(0,n.mdx)("li",{parentName:"ul"},"Use ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")),(0,n.mdx)("li",{parentName:"ul"},"Use ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"sessionStorage")),(0,n.mdx)("li",{parentName:"ul"},"Store the state in runtime memory (e.g., a global variable or some other persistent store)")),(0,n.mdx)("p",null,"For the server, you can:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Use a database (e.g., ",(0,n.mdx)("a",{parentName:"li",href:"https://www.mongodb.com/"},"MongoDB"),", ",(0,n.mdx)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL"),", etc.)"),(0,n.mdx)("li",{parentName:"ul"},"Use a cache (e.g., ",(0,n.mdx)("a",{parentName:"li",href:"https://redis.io/"},"Redis"),")"),(0,n.mdx)("li",{parentName:"ul"},"Use cookies or session storage")),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)("p",null,"There are ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/next/examples"},"examples of persisting state that can be found in the XState git repository"),":"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/statelyai/xstate/blob/next/examples/persisted-donut-maker"},"Persisting state to a writable ",(0,n.mdx)("inlineCode",{parentName:"a"},".json")," file")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/statelyai/xstate/tree/next/examples/mongodb-persisted-state"},"Persisting state to MongoDB"))),(0,n.mdx)("p",null,"Feel free to ",(0,n.mdx)("a",{parentName:"p",href:"https://feedback.stately.ai/examples"},"suggest other examples at on our examples request board"),", or ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/next/examples"},"contribute your own examples"),"!"))}g.isMDXComponent=!0}}]);