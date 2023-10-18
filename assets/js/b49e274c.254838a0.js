"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[8796],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>l,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){return function(n){var t=u(n.components);return a.createElement(e,r({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),l=i,h=p["".concat(o,".").concat(l)]||p[l]||m[l]||r;return t?a.createElement(h,c(c({ref:n},d),{},{components:t})):a.createElement(h,c({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},81514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={title:"Input"},o=void 0,c={unversionedId:"input",id:"input",title:"Input",description:"Input refers to the data provided to a state machine that influences its behavior. In XState, you provide input when creating an actor using the second argument of the createActor(machine, { input }) function:",source:"@site/docs/input.mdx",sourceDirName:".",slug:"/input",permalink:"/docs/input",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/input.mdx",tags:[],version:"current",frontMatter:{title:"Input"},sidebar:"docs",previous:{title:"Context",permalink:"/docs/context"},next:{title:"Events and transitions",permalink:"/docs/transitions"}},s={},d=[{value:"Creating actors with input",id:"creating-actors-with-input",level:2},{value:"Initial event input",id:"initial-event-input",level:2},{value:"Invoking actors with input",id:"invoking-actors-with-input",level:2},{value:"Spawning actors with input",id:"spawning-actors-with-input",level:2},{value:"Use-cases",id:"use-cases",level:2},{value:"Passing new data to an actor",id:"passing-new-data-to-an-actor",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Providing input",id:"providing-input",level:3},{value:"Providing input to invoked actors",id:"providing-input-to-invoked-actors",level:3},{value:"Providing dynamic input to invoked actors",id:"providing-dynamic-input-to-invoked-actors",level:3},{value:"Providing input to spawned actors",id:"providing-input-to-spawned-actors",level:3}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Input refers to the data provided to a state machine that influences its behavior. In ",(0,i.mdx)("a",{parentName:"p",href:"/docs/xstate"},"XState"),", you provide input when creating an ",(0,i.mdx)("a",{parentName:"p",href:"/docs/actors"},"actor")," using the second argument of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createActor(machine, { input })")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  context: ({ input }) => ({\n    userId: input.userId,\n    feedback: '',\n    rating: input.defaultRating,\n  }),\n  // ...\n});\n\nconst feedbackActor = createActor(feedbackMachine, {\n  // highlight-start\n  input: {\n    userId: '123',\n    defaultRating: 5,\n  },\n  // highlight-end\n});\n")),(0,i.mdx)("admonition",{type:"studio"},(0,i.mdx)("p",{parentName:"admonition"},"Input is coming to Stately Studio\u2019s editor soon\u2026")),(0,i.mdx)("h2",{id:"creating-actors-with-input"},"Creating actors with input"),(0,i.mdx)("p",null,"You can pass ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," to any kind of actor by reading this input from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," property of the first argument to actor logic creators, such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"fromPromise()"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"fromTransition()"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"fromObservable()"),", etc.:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, fromPromise } from 'xstate';\n\nconst userFetcher = fromPromise(({ input }) => {\n  return fetch(`/users/${input.userId}`).then((res) => res.json());\n});\n\nconst userFetcherActor = createActor(userFetcher, {\n  // highlight-start\n  input: {\n    userId: '123',\n  },\n  // highlight-end\n}).start();\n\nuserFetcherActor.onDone((data) => {\n  console.log(data);\n  // logs the user data for userId 123\n});\n")),(0,i.mdx)("p",null,"Coming soon\u2026 show examples for ",(0,i.mdx)("inlineCode",{parentName:"p"},"fromTransition"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"fromObservable"),", etc."),(0,i.mdx)("h2",{id:"initial-event-input"},"Initial event input"),(0,i.mdx)("p",null,"When an actor is started, it will automatically send a special event named ",(0,i.mdx)("inlineCode",{parentName:"p"},"xstate.init")," to itself. If ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," is provided to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createActor(logic, { input })")," function, it will be included in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"xstate.init")," event:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  // highlight-start\n  entry: ({ event }) => {\n    console.log(event.input);\n    // logs { userId: '123', defaultRating: 5 }\n  },\n  // highlight-end\n  // ...\n});\n\nconst feedbackActor = createActor(feedbackMachine, {\n  input: {\n    userId: '123',\n    defaultRating: 5,\n  },\n}).start();\n")),(0,i.mdx)("h2",{id:"invoking-actors-with-input"},"Invoking actors with input"),(0,i.mdx)("p",null,"You can provide input to invoked actors via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," property of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"invoke")," configuration:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  invoke: {\n    src: 'liveFeedback',\n    // highlight-start\n    input: {\n      domain: 'stately.ai',\n    },\n    // highlight-end\n  },\n}).provide({\n  actors: {\n    liveFeedback: fromPromise(({ input }) => {\n      return fetch(`https://${input.domain}/feedback`).then((res) =>\n        res.json(),\n      );\n    }),\n  },\n});\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"invoke.input")," property can be a static input value or a function that returns the input value. The function will be called with an object that contains the current ",(0,i.mdx)("inlineCode",{parentName:"p"},"context")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"event"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  context: {\n    userId: '',\n    feedback: '',\n    rating: 0,\n  },\n  invoke: {\n    src: 'fetchUser',\n    // highlight-next-line\n    input: ({ context }) => ({ userId: context.userId }),\n  },\n  // ...\n}).provide({\n  actors: {\n    // highlight-start\n    fetchUser: fromPromise(({ input }) => {\n      return fetch(`/users/${input.userId}`).then((res) => res.json());\n    }),\n    // highlight-end\n  },\n});\n")),(0,i.mdx)("h2",{id:"spawning-actors-with-input"},"Spawning actors with input"),(0,i.mdx)("p",null,"You can provide input to spawned actors via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," property of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"spawn")," configuration:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  context: {\n    userId: '',\n    feedback: '',\n    rating: 0,\n    emailRef: null,\n  },\n  // ...\n  on: {\n    'feedback.submit': {\n      actions: assign({\n        emailRef: ({ context, spawn }) => {\n          return spawn('emailUser', {\n            // highlight-next-line\n            input: { userId: context.userId },\n          });\n        },\n      }),\n    },\n  },\n  // ...\n}).provide({\n  actors: {\n    // highlight-start\n    emailUser: fromPromise(({ input }) => {\n      return fetch(`/users/${input.userId}`, {\n        method: 'POST',\n        // ...\n      });\n    }),\n    // highlight-end\n  },\n});\n")),(0,i.mdx)("h2",{id:"use-cases"},"Use-cases"),(0,i.mdx)("p",null,"Input is useful for creating reusable machines that can be configured with different input values."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Replaces the old way of writing a factory function for machines:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"// Old way: using a factory function\nconst createFeedbackMachine = (userId, defaultRating) => {\n  return createMachine({\n    context: {\n      userId,\n      feedback: '',\n      rating: defaultRating,\n    },\n    // ...\n  });\n};\n\nconst feedbackMachine1 = createFeedbackMachine('123', 5);\n\nconst feedbackActor1 = createActor(feedbackMachine1).start();\n\n// New way: using input\nconst feedbackMachine = createMachine({\n  context: ({ input }) => ({\n    userId: input.userId,\n    feedback: '',\n    rating: input.defaultRating,\n  }),\n  // ...\n});\n\nconst feedbackActor = createActor(feedbackMachine, {\n  input: {\n    userId: '123',\n    defaultRating: 5,\n  },\n});\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Coming soon\u2026 Usage with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@xstate/react")),(0,i.mdx)("li",{parentName:"ul"},"Coming soon\u2026 Usage with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@xstate/vue")),(0,i.mdx)("li",{parentName:"ul"},"Coming soon\u2026 Usage with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@xstate/svelte")),(0,i.mdx)("li",{parentName:"ul"},"Coming soon\u2026 Usage with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@xstate/solid"))),(0,i.mdx)("h3",{id:"passing-new-data-to-an-actor"},"Passing new data to an actor"),(0,i.mdx)("p",null,"Changing the input will not cause the actor to be restarted. You need to send an event to the actor to pass the new data to the actor:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"const Component = (props) => {\n  const feedbackActor = useActor(feedbackMachine, {\n    input: {\n      userId: props.userId,\n      defaultRating: props.defaultRating,\n    },\n  });\n\n  useEffect(() => {\n    feedbackActor.send({\n      type: 'userId.change',\n      userId: props.userId,\n    });\n  }, [props.userId]);\n\n  // ...\n};\n")),(0,i.mdx)("h2",{id:"typescript"},"TypeScript"),(0,i.mdx)("p",null,"You can strongly type the ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," of your machine in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"types.input")," property of the machine config."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createActor, createMachine } from 'xstate';\n\nconst machine = createMachine({\n  types: {} as {\n    // highlight-start\n    input: {\n      userId: string;\n      defaultRating: number;\n    };\n    // highlight-end\n    context: {\n      userId: string;\n      feedback: string;\n      rating: number;\n    };\n  },\n  context: ({ input }) => ({\n    userId: input.userId,\n    feedback: '',\n    rating: input.defaultRating,\n  }),\n});\n\nconst actor = createActor(machine, {\n  input: {\n    userId: '123',\n    defaultRating: 5,\n  },\n});\n")),(0,i.mdx)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,i.mdx)("p",null,"Use our XState input cheatsheet below to get started quickly."),(0,i.mdx)("h3",{id:"providing-input"},"Providing input"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackActor = createActor(feedbackMachine, {\n  input: {\n    userId: '123',\n    defaultRating: 5,\n  },\n});\n")),(0,i.mdx)("h3",{id:"providing-input-to-invoked-actors"},"Providing input to invoked actors"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  invoke: {\n    src: 'liveFeedback',\n    input: {\n      domain: 'stately.ai',\n    },\n  },\n});\n")),(0,i.mdx)("h3",{id:"providing-dynamic-input-to-invoked-actors"},"Providing dynamic input to invoked actors"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  context: {\n    userId: 'some-user-id',\n  },\n  invoke: {\n    src: 'fetchUser',\n    input: ({ context }) => ({ userId: context.userId }),\n  },\n});\n")),(0,i.mdx)("h3",{id:"providing-input-to-spawned-actors"},"Providing input to spawned actors"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const feedbackMachine = createMachine({\n  context: {\n    userId: '',\n  },\n  // ...\n  on: {\n    'feedback.submit': {\n      actions: assign({\n        emailRef: ({ context, spawn }) => {\n          return spawn('emailUser', {\n            input: { userId: context.userId },\n          });\n        },\n      }),\n    },\n  },\n  // ...\n});\n")))}u.isMDXComponent=!0}}]);