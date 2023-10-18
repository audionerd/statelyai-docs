"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[39168],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>l});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){return function(n){var t=d(n.components);return a.createElement(e,o({},n,{components:t}))}},d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(t),m=r,u=l["".concat(s,".").concat(m)]||l[m]||h[m]||o;return t?a.createElement(u,c(c({ref:n},p),{},{components:t})):a.createElement(u,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"Spawning actors",description:"You can use spawn to run actors. Actors created with spawn are spawning actors, and actors created with invoke are invoking actors."},s="Spawning actors",c={unversionedId:"xstate/actors/spawn",id:"version-4/xstate/actors/spawn",title:"Spawning actors",description:"You can use spawn to run actors. Actors created with spawn are spawning actors, and actors created with invoke are invoking actors.",source:"@site/versioned_docs/version-4/xstate/actors/spawn.mdx",sourceDirName:"xstate/actors",slug:"/xstate/actors/spawn",permalink:"/docs/xstate-v4/xstate/actors/spawn",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/actors/spawn.mdx",tags:[],version:"4",frontMatter:{title:"Spawning actors",description:"You can use spawn to run actors. Actors created with spawn are spawning actors, and actors created with invoke are invoking actors."},sidebar:"tutorialSidebar",previous:{title:"Parent to child communication",permalink:"/docs/xstate-v4/xstate/actors/parent-child-communication"},next:{title:"Actor cheatsheet",permalink:"/docs/xstate-v4/xstate/actors/cheatsheet"}},i={},p=[{value:"Sending events to spawned machines",id:"sending-events-to-spawned-machines",level:2},{value:"Stopping spawned actors",id:"stopping-spawned-actors",level:2},{value:"Spawning callbacks",id:"spawning-callbacks",level:2},{value:"Spawning observables",id:"spawning-observables",level:2}],l={toc:p};function d(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"spawning-actors"},"Spawning actors"),(0,r.mdx)("p",null,"Sometimes invoking actors may not be flexible enough for your needs. In such cases, you might want to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Invoke child machines that last across several states when machines invoked with ",(0,r.mdx)("inlineCode",{parentName:"li"},"invoke")," are tied to that state"),(0,r.mdx)("li",{parentName:"ul"},"Invoke a dynamic number of actors")),(0,r.mdx)("p",null,"You can use a powerful tool called ",(0,r.mdx)("inlineCode",{parentName:"p"},"spawn")," to run these actors in these cases. Actors created with spawn are ",(0,r.mdx)("strong",{parentName:"p"},"spawning actors"),", and actors created with invoke are ",(0,r.mdx)("strong",{parentName:"p"},"invoking actors"),"."),(0,r.mdx)("p",null,"Spawning actors puts a reference to the machine in ",(0,r.mdx)("inlineCode",{parentName:"p"},"context"),", which means that you must always assign a spawned actor to context via ",(0,r.mdx)("inlineCode",{parentName:"p"},"assign"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, spawn, assign } from 'xstate';\n\nconst childMachine = createMachine({\n  /* ... */\n});\n\nconst parentMachine = createMachine({\n  entry: [\n    assign({\n      childMachineRef: () => spawn(childMachine),\n    }),\n  ],\n});\n")),(0,r.mdx)("p",null,"In the example above, the spawned actor can now be referenced on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"context")," of the machine. You can spawn as many actors as you need:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, spawn, assign } from 'xstate';\n\nconst childMachine = createMachine({\n  /* ... */\n});\n\nconst parentMachine = createMachine({\n  entry: [\n    assign({\n      childMachineRefs: () => [\n        // highlight-start\n        spawn(childMachine),\n        spawn(childMachine),\n        spawn(childMachine),\n        // highlight-end\n      ],\n    }),\n  ],\n});\n")),(0,r.mdx)("h2",{id:"sending-events-to-spawned-machines"},"Sending events to spawned machines"),(0,r.mdx)("p",null,"Events can be sent to spawned actors by passing a function to ",(0,r.mdx)("inlineCode",{parentName:"p"},"send")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"forwardTo"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"send({ type: 'INC' }, { to: (context) => context.counterRef });\n\nforwardTo(context => context.counterRef);\n")),(0,r.mdx)("p",null,"You can also forward ",(0,r.mdx)("em",{parentName:"p"},"all")," events to the child by passing ",(0,r.mdx)("inlineCode",{parentName:"p"},"autoForward")," as an option to ",(0,r.mdx)("inlineCode",{parentName:"p"},"spawn"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { spawn, createMachine, assign } from 'xstate';\n\nconst childMachine = createMachine({});\n\nconst machine = createMachine({\n  entry: assign((context) => ({\n    counterRef: spawn(childMachine, {\n      autoForward: true,\n    }),\n  })),\n});\n")),(0,r.mdx)("p",null,"Passing ",(0,r.mdx)("inlineCode",{parentName:"p"},"autoForward")," will ensure that every event sent to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"machine")," also gets forwarded to ",(0,r.mdx)("inlineCode",{parentName:"p"},"childMachine"),"."),(0,r.mdx)("h2",{id:"stopping-spawned-actors"},"Stopping spawned actors"),(0,r.mdx)("p",null,"When you want to stop a spawned actor, you can either stop the parent machine, which will stop all child actors automatically, or stop the actor via the ",(0,r.mdx)("inlineCode",{parentName:"p"},"stop")," action."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"const childMachine = createMachine({\n  /* ... */\n});\n\nimport { createMachine, spawn, assign, actions, ActorRefFrom } from 'xstate';\n// highlight-start\nconst { stop } = actions;\n// highlight-end\n\nconst parentMachine = createMachine(\n  {\n    /**\n     * In TypeScript, you can use the ActorRefFrom helper\n     * to type the machine\n     */\n    schema: {\n      context: {} as {\n        childMachineRef: ActorRefFrom<typeof childMachine>;\n      },\n    },\n    entry: [\n      assign({\n        childMachineRef: () => spawn(childMachine),\n      }),\n    ],\n    on: {\n      // highlight-start\n      STOP: {\n        actions: 'stopMachine',\n      },\n      // highlight-end\n    },\n  },\n  {\n    actions: {\n      stopMachine: stop((context) => context.childMachineRef),\n    },\n  }\n);\n")),(0,r.mdx)("h2",{id:"spawning-callbacks"},"Spawning callbacks"),(0,r.mdx)("p",null,"Just like invoking callbacks, callbacks can be spawned as actors."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, assign, spawn } from 'xstate';\n\nconst machine = createMachine({\n  entry: assign({\n    counterRef: (context, event) =>\n      // highlight-start\n      spawn((sendBack, receive) => {\n      // highlight-end\n        // Run any code you want inside here\n\n        return () => {\n          // Any code inside here will be called when\n          // you leave this state, or the machine is stopped\n        };\n      }),\n  }),\n});\n")),(0,r.mdx)("p",null,"Spawned callbacks behave exactly the same as invoked callbacks but with all the flexibility of ",(0,r.mdx)("inlineCode",{parentName:"p"},"spawn"),"."),(0,r.mdx)("h2",{id:"spawning-observables"},"Spawning observables"),(0,r.mdx)("p",null,"Just like invoking observables, observables can be spawned as actors:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, assign, spawn } from 'xstate';\nimport { interval } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nconst createCounterObservable = (ms: number) =>\n  interval(ms).pipe(map((count) => ({ type: 'COUNT.UPDATE', count })));\n\nconst machine = createMachine(\n  {\n    context: { ms: 1000 },\n    entry: assign({\n      counterRef: ({ ms }) => spawn(createCounterObservable(ms)),\n    }),\n    on: {\n      'COUNT.UPDATE': {\n        actions: 'logCount',\n      },\n    },\n  },\n  {\n    actions: {\n      logCount: (context, event) => {\n        console.log(event.count);\n      },\n    },\n  }\n);\n")))}d.isMDXComponent=!0}}]);