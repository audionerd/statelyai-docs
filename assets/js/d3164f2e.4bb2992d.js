"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[27810],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>l,withMDXComponents:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),d=function(e){return function(n){var t=l(n.components);return a.createElement(e,r({},n,{components:t}))}},l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,u=d["".concat(o,".").concat(p)]||d[p]||h[p]||r;return t?a.createElement(u,s(s({ref:n},m),{},{components:t})):a.createElement(u,s({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));const r={title:"State machines"},o=void 0,s={unversionedId:"machines",id:"machines",title:"State machines",description:"A state machine is a model that describes the behavior of something, for example an actor. Finite state machines describe how the state of an actor transitions to another state when an event occurs.",source:"@site/docs/machines.mdx",sourceDirName:".",slug:"/machines",permalink:"/docs/machines",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/machines.mdx",tags:[],version:"current",frontMatter:{title:"State machines"},sidebar:"docs",previous:{title:"State machines",permalink:"/docs/category/state-machines"},next:{title:"State",permalink:"/docs/states"}},c={},m=[{value:"Benefits of state machines",id:"benefits-of-state-machines",level:2},{value:"Creating a state machine",id:"creating-a-state-machine",level:2},{value:"Creating actors from machines",id:"creating-actors-from-machines",level:2},{value:"Providing implementations",id:"providing-implementations",level:2},{value:"Specifying types",id:"specifying-types",level:2},{value:"Typegen",id:"typegen",level:2},{value:"Transition method",id:"transition-method",level:2},{value:"API",id:"api",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Machine cheatsheet",id:"machine-cheatsheet",level:2},{value:"Create a machine",id:"create-a-machine",level:3},{value:"Provide implementations",id:"provide-implementations",level:3}],d={toc:m};function l(e){let{components:n,...t}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"A ",(0,i.mdx)("a",{parentName:"p",href:"/docs/state-machines-and-statecharts"},"state machine")," is a model that describes the behavior of something, for example an ",(0,i.mdx)("a",{parentName:"p",href:"/docs/actors"},"actor"),". ",(0,i.mdx)("a",{parentName:"p",href:"/docs/finite-states"},"Finite state")," machines describe how the state of an actor transitions to another state when an event occurs."),(0,i.mdx)("admonition",{type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"Read our ",(0,i.mdx)("a",{parentName:"p",href:"/docs/state-machines-and-statecharts"},"introduction to state machines and statecharts")," if you haven\u2019t already!")),(0,i.mdx)("h2",{id:"benefits-of-state-machines"},"Benefits of state machines"),(0,i.mdx)("p",null,"State machines help build reliable and robust software. ",(0,i.mdx)("a",{parentName:"p",href:"/docs/state-machines-and-statecharts#benefits-of-state-machines"},"Read more about the benefits of state machines"),"."),(0,i.mdx)("h2",{id:"creating-a-state-machine"},"Creating a state machine"),(0,i.mdx)("p",null,"In ",(0,i.mdx)("a",{parentName:"p",href:"/docs/xstate"},"XState"),", a state machine (referred to as a \u201cmachine\u201d) is created using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createMachine(config)")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'question',\n  states: {\n    question: {\n      on: {\n        'feedback.good': {\n          target: 'thanks',\n        },\n      },\n    },\n    thanks: {\n      // ...\n    },\n    // ...\n  },\n});\n")),(0,i.mdx)("p",null,"In this example, the machine has two states: ",(0,i.mdx)("inlineCode",{parentName:"p"},"question")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"thanks"),". The ",(0,i.mdx)("inlineCode",{parentName:"p"},"question")," state has a transition to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"thanks")," state when the ",(0,i.mdx)("inlineCode",{parentName:"p"},"feedback.good")," event is sent to the machine:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackActor = createActor(feedbackMachine);\n\nfeedbackActor.subscribe((state) => {\n  console.log(state.value);\n});\n\nfeedbackActor.start();\n// logs 'question'\n\nfeedbackActor.send({ type: 'feedback.good' });\n// logs 'thanks'\n")),(0,i.mdx)("h2",{id:"creating-actors-from-machines"},"Creating actors from machines"),(0,i.mdx)("p",null,'A machine can be considered a "blueprint" for an actor. An ',(0,i.mdx)("a",{parentName:"p",href:"/docs/actors"},"actor")," is a running instance of the machine; in other words, it is the entity whose logic is described by the machine."),(0,i.mdx)("p",null,"To create an actor, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createActor(machine)")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor } from 'xstate';\n\nconst feedbackActor = createActor(feedbackMachine);\n\nfeedbackActor.subscribe((state) => {\n  console.log(state.value);\n});\n\nfeedbackActor.start();\n// logs 'question'\n")),(0,i.mdx)("h2",{id:"providing-implementations"},"Providing implementations"),(0,i.mdx)("p",null,"Machine implementations are the language-specific code that is executed but is not directly related to the state machine\u2019s logic. This includes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/actions"},"Actions")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/actors"},"Actors")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/guards"},"Guards")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/delayed-transitions"},"Delays"))),(0,i.mdx)("p",null,"Typically, you will reference implementations using strings or objects, such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"{ type: 'doSomething' }"),", and then create a new machine with default implementations in the second argument:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine(\n  // Machine config\n  {\n    // ...\n  },\n  // Default implementations\n  {\n    actions: {\n      doSomething: () => {\n        console.log('Doing something!');\n      },\n    },\n    actors: {\n      /* ... */\n    },\n    guards: {\n      /* ... */\n    },\n    delays: {\n      /* ... */\n    },\n  },\n);\n")),(0,i.mdx)("p",null,"Those references are then resolved to the actual provided implementation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  entry: { type: 'doSomething' },\n  // ...\n});\n\nconst feedbackActor = createActor(feedbackMachine).start();\n\n// logs 'Doing something!'\n")),(0,i.mdx)("p",null,"You can override default implementations by ",(0,i.mdx)("em",{parentName:"p"},"providing")," implementations via ",(0,i.mdx)("inlineCode",{parentName:"p"},"machine.provide(...)"),". This function will create a new machine with the same config, but with the provided implementations:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const customFeedbackMachine = feedbackMachine.provide({\n  actions: {\n    doSomething: () => {\n      console.log('Doing something custom!');\n    },\n  },\n});\n\nconst feedbackActor = createActor(customFeedbackMachine).start();\n\n// logs 'Doing something custom!'\n")),(0,i.mdx)("h2",{id:"specifying-types"},"Specifying types"),(0,i.mdx)("p",null,"You can specify TypeScript types inside the machine config using the ",(0,i.mdx)("inlineCode",{parentName:"p"},".types")," property:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  types: {} as {\n    context: { feedback: string };\n    events: { type: 'feedback.good' } | { type: 'feedback.bad' };\n    actions: { type: 'logTelemetry' };\n  },\n});\n")),(0,i.mdx)("p",null,"These types will be inferred throughout the machine config and in the created machine and actor so that methods such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"machine.transition(...)")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"actor.send(...)")," will be type-safe."),(0,i.mdx)("h2",{id:"typegen"},"Typegen"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Coming soon")),(0,i.mdx)("h2",{id:"transition-method"},"Transition method"),(0,i.mdx)("p",null,"A machine\u2019s ",(0,i.mdx)("inlineCode",{parentName:"p"},"machine.transition(state, event)")," method is a pure method that returns the next state given the current state and an event:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  initial: 'question',\n  states: {\n    question: {\n      on: {\n        'feedback.good': {\n          target: 'thanks',\n        },\n      },\n    },\n    thanks: {\n      // ...\n    },\n    // ...\n  },\n});\n\nconst { initialState } = feedbackMachine;\n\nconst nextState = feedbackMachine.transition(initialState, {\n  type: 'feedback.good',\n});\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"machine.transition(...)")," method is useful for testing or building a custom actor."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/testing"},"Testing")),(0,i.mdx)("li",{parentName:"ul"},"Coming soon\u2026 Custom actors")),(0,i.mdx)("h2",{id:"api"},"API"),(0,i.mdx)("p",null,"Coming soon\u2026 Link to API"),(0,i.mdx)("h2",{id:"typescript"},"TypeScript"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Coming soon")),(0,i.mdx)("h2",{id:"machine-cheatsheet"},"Machine cheatsheet"),(0,i.mdx)("p",null,"Use our XState machine cheatsheet below to get started quickly."),(0,i.mdx)("h3",{id:"create-a-machine"},"Create a machine"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({\n  initial: 'start',\n  states: {\n    start: {},\n    // ...\n  },\n});\n")),(0,i.mdx)("h3",{id:"provide-implementations"},"Provide implementations"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({\n  // ...\n});\n\nconst machineWithImpls = machine.provide({\n  actions: {\n    /* ... */\n  },\n  actors: {\n    /* ... */\n  },\n  guards: {\n    /* ... */\n  },\n  delays: {\n    /* ... */\n  },\n});\n")))}l.isMDXComponent=!0}}]);