"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[19806],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=d(n),p=a,h=l["".concat(i,".").concat(p)]||l[p]||u[p]||o;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"Systems"},i=void 0,s={unversionedId:"system",id:"system",title:"Systems",description:"An actor system is a collection of actors that can communicate with each other. Actors can invoke/spawn other actors, which forms a natural hierarchy of actors that belong to the same system.",source:"@site/docs/system.mdx",sourceDirName:".",slug:"/system",permalink:"/statelyai-docs/docs/system",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/system.mdx",tags:[],version:"current",frontMatter:{title:"Systems"},sidebar:"docs",previous:{title:"Spawn",permalink:"/statelyai-docs/docs/spawn"},next:{title:"Testing",permalink:"/statelyai-docs/docs/testing"}},c={},m=[{value:"Actor registration",id:"actor-registration",level:2},{value:"Actor communication",id:"actor-communication",level:2},{value:"Stopping a system",id:"stopping-a-system",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2}],l={toc:m};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"An actor system is a collection of actors that can communicate with each other. Actors can invoke/spawn other actors, which forms a natural hierarchy of actors that belong to the same system."),(0,a.mdx)("p",null,"In XState, a system is implicitly created from the root actor, which is the actor that is returned from ",(0,a.mdx)("inlineCode",{parentName:"p"},"createActor(machine).start()"),". The system can be accessed from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"actor.system")," property of actors, and from the destructured ",(0,a.mdx)("inlineCode",{parentName:"p"},"{ system }")," property from state machine actions:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, createActor } from 'xstate';\n\nconst machine = createMachine({\n  // highlight-next-line\n  entry: ({ system }) => {\n    // ...\n  },\n});\n\nconst actor = createActor(machine).start();\n// highlight-next-line\nactor.system;\n")),(0,a.mdx)("p",null,"The root of a system can also be explicitly assigned a ",(0,a.mdx)("inlineCode",{parentName:"p"},"systemId")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"createActor(...)")," function:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor } from 'xstate';\n\nconst actor = createActor(machine, {\n  systemId: 'root-id',\n});\n\nactor.start();\n")),(0,a.mdx)("p",null,"This is useful for actors in the system to be able send events to the root actor."),(0,a.mdx)("admonition",{type:"studio"},(0,a.mdx)("p",{parentName:"admonition"},"Coming soon\u2026 systems in Stately Studio\u2019s editor ",(0,a.mdx)("span",{parentName:"p",role:"img","aria-label":"shushing face"},"\ud83e\udd2b"))),(0,a.mdx)("h2",{id:"actor-registration"},"Actor registration"),(0,a.mdx)("p",null,"Actors can be registered with the system so that any other actor in the system can obtain a reference to it."),(0,a.mdx)("p",null,"Invoked actors are registered with a system-wide ",(0,a.mdx)("inlineCode",{parentName:"p"},"systemId")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"invoke")," object:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, createActor } from 'xstate';\n\nconst formMachine = createMachine({\n  // ...\n  on: {\n    submit: {\n      // highlight-next-line\n      actions: sendTo(({ system }) => system.get('notifier'), {\n        type: 'notify',\n        message: 'Form submitted!',\n      }),\n    },\n  },\n});\n\nconst feedbackMachine = createMachine({\n  invoke: {\n    // highlight-next-line\n    systemId: 'notifier',\n    src: notifierMachine,\n  },\n  // ...\n  states: {\n    // ...\n    form: {\n      invoke: formMachine,\n    },\n  },\n});\n\nconst feedbackActor = createActor(feedbackMachine).start();\n")),(0,a.mdx)("p",null,"Spawned actors are registered with a system-wide ",(0,a.mdx)("inlineCode",{parentName:"p"},"systemId")," in the 2nd argument of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"spawn")," function:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, createActor, assign } from 'xstate';\n\nconst todoMachine = createMachine({\n  // ...\n});\n\nconst todosMachine = createMachine({\n  // ...\n  on: {\n    'todo.add': {\n      actions: assign({\n        todos: ({ context, spawn }) => {\n          const newTodo = spawn(todoMachine, {\n            // highlight-next-line\n            systemId: `todo-${context.todos.length}`,\n          });\n\n          return context.todos.concat(newTodo);\n        },\n      }),\n    },\n  },\n});\n")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"systemId: 'actorId'"))),(0,a.mdx)("h2",{id:"actor-communication"},"Actor communication"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Reference actor from system ",(0,a.mdx)("inlineCode",{parentName:"li"},"system.get('actorId')"))),(0,a.mdx)("h2",{id:"stopping-a-system"},"Stopping a system"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Stop from root actor: ",(0,a.mdx)("inlineCode",{parentName:"li"},"actor.stop()")),(0,a.mdx)("li",{parentName:"ul"},"Cannot stop from descendant actors",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Warning will be logged")))),(0,a.mdx)("h2",{id:"typescript"},"TypeScript"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"invoke.systemId")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"spawn(thing, { systemId })")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"system.get('actorId')")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"rootActor.stop()"))),(0,a.mdx)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Coming soon")))}d.isMDXComponent=!0}}]);