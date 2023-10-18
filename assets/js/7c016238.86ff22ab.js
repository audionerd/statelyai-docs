"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5223],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,r({},t,{components:a}))}},c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=i,u=m["".concat(s,".").concat(p)]||m[p]||h[p]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"XState: version 4.7 and the future",description:"XState version 4.7 has just been released. This is a minor version bump, but a major reworking of the internal algorithms, a lot of new capabilites, bug fixes and a better TypeScript experience.",tags:["update","state machine","statechart","xstate","state"],authors:["david"],image:"/blog/2019-12-09-xstate-version-47-and-the-future.png",slug:"2019-12-09-xstate-version-47-and-the-future",date:new Date("2019-12-09T00:00:00.000Z")},s=void 0,o={permalink:"/blog/2019-12-09-xstate-version-47-and-the-future",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2019-12-09-xstate-version-47-and-the-future/index.mdx",source:"@site/blog/2019-12-09-xstate-version-47-and-the-future/index.mdx",title:"XState: version 4.7 and the future",description:"XState version 4.7 has just been released. This is a minor version bump, but a major reworking of the internal algorithms, a lot of new capabilites, bug fixes and a better TypeScript experience.",date:"2019-12-09T00:00:00.000Z",formattedDate:"December 9, 2019",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"state machine",permalink:"/blog/tags/state-machine"},{label:"statechart",permalink:"/blog/tags/statechart"},{label:"xstate",permalink:"/blog/tags/xstate"},{label:"state",permalink:"/blog/tags/state"}],readingTime:8.64,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"XState: version 4.7 and the future",description:"XState version 4.7 has just been released. This is a minor version bump, but a major reworking of the internal algorithms, a lot of new capabilites, bug fixes and a better TypeScript experience.",tags:["update","state machine","statechart","xstate","state"],authors:["david"],image:"/blog/2019-12-09-xstate-version-47-and-the-future.png",slug:"2019-12-09-xstate-version-47-and-the-future",date:"2019-12-09T00:00:00.000Z"},prevItem:{title:"Redux is half of a pattern (1/2)",permalink:"/blog/2020-01-20-redux-is-half-a-pattern-1-2"},nextItem:{title:"No, disabling a button is not app logic.",permalink:"/blog/2019-11-13-no-disabling-a-button-is-not-app-logic"}},l={authorsImageUrls:[void 0]},d=[{value:"What is XState?",id:"what-is-xstate",level:2},{value:"What is new in XState 4.7?",id:"what-is-new-in-xstate-47",level:2},{value:"Refactored internal algorithms",id:"refactored-internal-algorithms",level:2},{value:"Typestates",id:"typestates",level:2},{value:"Better service experience",id:"better-service-experience",level:2},{value:"Wildcard descriptors",id:"wildcard-descriptors",level:2},{value:"Much, much more",id:"much-much-more",level:2},{value:"The future of XState",id:"the-future-of-xstate",level:2},{value:"More information",id:"more-information",level:2}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,i.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("head",null,(0,i.mdx)("link",{rel:"canonical",href:"https://dev.to/davidkpiano/xstate-version-4-7-and-the-future-2ehk"})),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/davidkpiano/xstate"},"XState")," version 4.7 ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/davidkpiano/xstate/releases/tag/v4.7.0"},"has just been released"),". This is a minor version bump, but a major reworking of the internal algorithms, a lot of new capabilities, bug fixes, and a better TypeScript experience. It also paves the road for even more utilities, like ",(0,i.mdx)("inlineCode",{parentName:"p"},"@xstate/test")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@xstate/react"),", as well as compatibility with other 3rd-party tools across the ecosystem, and even across languages."),(0,i.mdx)("h2",{id:"what-is-xstate"},"What is XState?"),(0,i.mdx)("p",null,"XState is a JavaScript (and TypeScript) library for creating state machines and statecharts, and interpreting them. State machines enforce a specific set of \u201drules\u201c on logic structure such that:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"There are a finite number of ",(0,i.mdx)("strong",{parentName:"li"},"states")," (such as ",(0,i.mdx)("inlineCode",{parentName:"li"},'"loading"')," or ",(0,i.mdx)("inlineCode",{parentName:"li"},'"success"'),"), which is different than ",(0,i.mdx)("em",{parentName:"li"},"context")," (related data with potentially infinite possibilities, such as ",(0,i.mdx)("inlineCode",{parentName:"li"},"email")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"age"),")"),(0,i.mdx)("li",{parentName:"ul"},"There are a finite number of ",(0,i.mdx)("strong",{parentName:"li"},"events")," (such as ",(0,i.mdx)("inlineCode",{parentName:"li"},"{ type: 'FETCH', query: \"...\" }")," that can trigger a transition between states."),(0,i.mdx)("li",{parentName:"ul"},"Each state has ",(0,i.mdx)("strong",{parentName:"li"},"transitions"),", which say, \u201dGiven some ",(0,i.mdx)("strong",{parentName:"li"},"event"),", go to this next state and/or do these actions\u201d.")),(0,i.mdx)("p",null,"You don\u2019t need a state machine library to do this, as you can use ",(0,i.mdx)("inlineCode",{parentName:"p"},"switch")," statements instead:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"    switch (state.status) {\n      case 'idle': // finite state\n        switch (event.type) {\n          case 'FETCH':\n            return {\n              ...state,\n              status: 'loading',\n              query: event.query\n            };\n          // ...\n        // ...\n      // ...\n    }\n")),(0,i.mdx)("p",null,"But let\u2019s be honest, writing it like this is arguably a bit cleaner:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'const machine = Machine({\n  initial: "idle",\n  states: {\n    idle: {\n      on: {\n        FETCH: {\n          target: "loading",\n          actions: assign({ query: (_, event) => event.query }),\n        },\n      },\n    },\n    // ...\n  },\n});\n')),(0,i.mdx)("p",null,"And it also makes it possible to directly copy-paste this machine code into a visualizer, like ",(0,i.mdx)("a",{parentName:"p",href:"https://xstate.js.org/viz"},"XState Viz"),", and visualize it, like was done at the end of the ",(0,i.mdx)("a",{parentName:"p",href:"https://dev.to/davidkpiano/no-disabling-a-button-is-not-app-logic-598i"},"No, disabling a button is not app logic")," article:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--o5PbZ3py--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/218tb91ltxrnv988owz0.png",alt:"State machine visualization on XState Viz"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://xstate.js.org/viz/?gist=414c0e4c40dab1dc80c9218f85605a24"},"View this viz on XState Viz")),(0,i.mdx)("p",null,"Then there are ",(0,i.mdx)("strong",{parentName:"p"},"statecharts"),", which are an extension of finite state machines created by ",(0,i.mdx)("a",{parentName:"p",href:"http://www.inf.ed.ac.uk/teaching/courses/seoc/2005_2006/resources/statecharts.pdf"},"David Harel in 1989 (read the paper \ud83d\udcd1)"),". Statecharts offer many improvements and mitigate many issues of using flat finite state machines, such as:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Nested states (hierarchy)"),(0,i.mdx)("li",{parentName:"ul"},"Parallel states (orthogonality)"),(0,i.mdx)("li",{parentName:"ul"},"History states"),(0,i.mdx)("li",{parentName:"ul"},"Entry, exit, and transition actions"),(0,i.mdx)("li",{parentName:"ul"},"Transient states"),(0,i.mdx)("li",{parentName:"ul"},"Activities (ongoing actions)"),(0,i.mdx)("li",{parentName:"ul"},"Communication with many machines (invoked services)"),(0,i.mdx)("li",{parentName:"ul"},"Delayed transitions"),(0,i.mdx)("li",{parentName:"ul"},"And much more")),(0,i.mdx)("p",null,"These are things that you ",(0,i.mdx)("em",{parentName:"p"},"definitely")," do not want to implement yourself, which is why libraries like XState exist. And this brings us to\u2026"),(0,i.mdx)("h2",{id:"what-is-new-in-xstate-47"},"What is new in XState 4.7?"),(0,i.mdx)("p",null,"This minor release has been worked on for months, with a huge amount of help from ",(0,i.mdx)("a",{parentName:"p",href:"https://twitter.com/AndaristRake"},"Mateusz Burzy\u0144ski (also known as AndaristRake)")," \ud83d\udc4f. The reason it took so long was because we are internally reworking the algorithms to be simpler, fit the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/scxml/#InternalStructureofEvents"},"SCXML spec"),", and be compatible with a growing number of tools in the ecosystem. This refactoring also makes adding new capabilities much easier, and will hopefully encourage more contributors to help with this project. As a nice side-effect, it also eliminates a few edge-case bugs that had workarounds, but might have caused a suboptimal developer experience in previous versions."),(0,i.mdx)("h2",{id:"refactored-internal-algorithms"},"Refactored internal algorithms"),(0,i.mdx)("p",null,"How difficult can it be to create a statechart library? A lot more difficult than it seems, especially if you want to conform to the long, but well-established ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/scxml"},"SCXML spec"),". There\u2019s even libraries for integrating SCXML code directly with JavaScript, such as Jacob Beard\u2019s excellent ",(0,i.mdx)("a",{parentName:"p",href:"http://scion.scxml.io/"},"SCION tools"),", which I highly recommend you check out. It was a huge inspiration for XState, and XState is tested against much of the same code."),(0,i.mdx)("p",null,"SCXML specifies an ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/scxml/#AlgorithmforSCXMLInterpretation"},"algorithm for SCXML interpretation"),", which is written in pseudocode, but directly transferable to many popular languages. This algorithm was followed more closely in the refactor, which simplified a lot of the code base and removed the need for ad-hoc data structures such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"StateTree"),', which was used to keep track of which state nodes were "active" for a given transition (now it\u2019s just a set).'),(0,i.mdx)("p",null,"As a result, the core code base is a little smaller, the algorithms are a little bit faster (determining the next state is basically an O(1) lookup, O(n) worst-case), and the code base is a lot nicer to work with and contribute to. We will continue to improve the algorithms used as we move towards 5.0."),(0,i.mdx)("h2",{id:"typestates"},"Typestates"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Typestate_analysis"},"Typestates")," are really useful for developers. They\u2019re popular in Rust, and this article on ",(0,i.mdx)("a",{parentName:"p",href:"http://cliffle.com/blog/rust-typestate/"},"The Typestate Pattern in Rust")," describes them elegantly:"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Typestates are a technique for moving ",(0,i.mdx)("strong",{parentName:"p"},"properties of state")," (the dynamic information a program is processing) ",(0,i.mdx)("strong",{parentName:"p"},"into the type level")," (the static world that the compiler can check ahead-of-time).")),(0,i.mdx)("p",null,"Without learning Rust or diving into the Wikipedia article, let\u2019s present a classic example: loading data. You might represent the state\u2019s context in this way:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"interface User {\n  name: string;\n}\n\ninterface UserContext {\n  user?: User;\n  error?: string;\n}\n")),(0,i.mdx)("p",null,"This type-safe declaration allows you to defensively program effectively, but it can be a bit annoying when you are 100% sure that ",(0,i.mdx)("inlineCode",{parentName:"p"},"user")," is defined:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'if (state.matches("success")) {\n  if (!state.context.user) {\n    // this should be impossible!\n    // the user definitely exists!\n    throw new Error("Something weird happened");\n  }\n\n  return state.context.user.name;\n}\n')),(0,i.mdx)("p",null,"In 4.7, XState allows you to ",(0,i.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/typescript.html#typestates"},"represent your states with Typestates")," so that you can tell the compiler that you know how the ",(0,i.mdx)("inlineCode",{parentName:"p"},"context")," should be in any given state:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{parentName:"p",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--GakogjRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/64d42j77op89yta9gbi8.gif",alt:"GIF showing that the optional user object will be defined in the success state"})),(0,i.mdx)("p",null,"This is very useful and improves the developer experience, but should be used as a strong guide, and not as a guarantee. It works by using ",(0,i.mdx)("a",{parentName:"p",href:"https://basarat.gitbooks.io/typescript/docs/types/discriminated-unions.html"},"discriminated unions in TypeScript")," to define your states, but the way it is implemented requires TypeScript version 3.7 and higher. There\u2019s still some quirks to work out, as we\u2019re basically trying to trick TypeScript into knowing some extra information about our state machines that is otherwise difficult/impossible to infer in a statically typed language. (Maybe one day JavaScript will have a dependently-typed flavor.)"),(0,i.mdx)("h2",{id:"better-service-experience"},"Better service experience"),(0,i.mdx)("p",null,"XState makes invoking external \u201dservices\u201d a first-class citizen. If this is a foreign concept, for now, just understand that it answers the question \u201chow can many state machines communicate with each other?\u201d, and the answer is by using events as the main communication mechanism. In 4.7, the developer experience for this is improved:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Invoked services can now be referenced on the ",(0,i.mdx)("inlineCode",{parentName:"li"},"state.children")," object by their ID. So if a state invokes some service with ",(0,i.mdx)("inlineCode",{parentName:"li"},"id: 'fetchUser'"),", then that invocation will be present on ",(0,i.mdx)("inlineCode",{parentName:"li"},"state.children.fetchUser"),"."),(0,i.mdx)("li",{parentName:"ul"},"The new ",(0,i.mdx)("inlineCode",{parentName:"li"},"forwardTo()")," action creator allows you to forward events to invoked services, which cuts down a lot of boilerplate:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'on: {\n  SOME_EVENT: {\n    actions: forwardTo("someService");\n  }\n}\n')),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"SCXML has this notion of a ",(0,i.mdx)("inlineCode",{parentName:"li"},"sessionid"),", which is a unique identifier for each invoked service. XState 4.7 becomes more SCXML-compatible by keeping a reference of this in ",(0,i.mdx)("inlineCode",{parentName:"li"},"state._sessionid"),", which corresponds to the SCXML ",(0,i.mdx)("inlineCode",{parentName:"li"},"_sessionid")," variable."),(0,i.mdx)("li",{parentName:"ul"},"XState can use that ",(0,i.mdx)("inlineCode",{parentName:"li"},"_sessionid")," to determine which service sent an event, so it can respond with an event back, using the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"respond()")," action creator:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'const authServerMachine = Machine({\n  initial: "waitingForCode",\n  states: {\n    waitingForCode: {\n      on: {\n        CODE: {\n          actions: respond("TOKEN", { delay: 10 }),\n        },\n      },\n    },\n  },\n});\n\nconst authClientMachine = Machine({\n  initial: "idle",\n  states: {\n    idle: {\n      on: { AUTH: "authorizing" },\n    },\n    authorizing: {\n      invoke: {\n        id: "auth-server",\n        src: authServerMachine,\n      },\n      entry: send("CODE", { to: "auth-server" }),\n      on: {\n        TOKEN: "authorized",\n      },\n    },\n    authorized: {\n      type: "final",\n    },\n  },\n});\n')),(0,i.mdx)("p",null,"You can make your own custom action creators too, and implement patterns that you might be familiar with already if you\u2019ve worked with microservices."),(0,i.mdx)("h2",{id:"wildcard-descriptors"},"Wildcard descriptors"),(0,i.mdx)("p",null,"If you\u2019ve ever wanted to transition from a state if ",(0,i.mdx)("em",{parentName:"p"},"any")," (unspecified) event is received? Well, you\u2019re in luck, because XState now supports ",(0,i.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/transitions.html#wildcard-descriptors"},"wildcard descriptors"),", which are a type of ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/scxml/#EventDescriptors"},"event descriptor (SCXML)")," that describes a transition for any event in a given state:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'const quietMachine = Machine({\n  id: "quiet",\n  initial: "idle",\n  states: {\n    idle: {\n      on: {\n        WHISPER: undefined,\n        // On any event besides a WHISPER, transition to the \'disturbed\' state\n        "*": "disturbed",\n      },\n    },\n    disturbed: {},\n  },\n});\n\nquietMachine.transition(quietMachine.initialState, "WHISPER");\n// => State { value: \'idle\' }\n\nquietMachine.transition(quietMachine.initialState, "SOME_EVENT");\n// => State { value: \'disturbed\' }\n')),(0,i.mdx)("h2",{id:"much-much-more"},"Much, much more"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/davidkpiano/xstate/releases/tag/v4.7.0"},"https://github.com/davidkpiano/xstate/releases/tag/v4.7.0")," for an overview of the latest updates in this minor version."),(0,i.mdx)("h2",{id:"the-future-of-xstate"},"The future of XState"),(0,i.mdx)("p",null,"All this leads to the big question: what are the future plans/goals for XState? The first important thing to realize is that XState is ",(0,i.mdx)("em",{parentName:"p"},"not just another state management library"),", and state management was never its only goal. XState strives to bring two things to the JavaScript ecosystem:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"State machines/statecharts"),", for modeling the logic of any individual component"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Actor model"),", for modeling how components communicate with each other and behave in a system")),(0,i.mdx)("p",null,"All of these are very old, very useful, and battle-tested concepts. The benefits they provide cannot be understated, and highlight the future plans for XState and related tooling:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Better visualization tools, including an updated visualizer, dev tools for Firefox and Chrome (work in progress!), dev tools for VS Code, and integration with other graphical viz tools such as ",(0,i.mdx)("a",{parentName:"li",href:"https://plantuml.com/"},"PlantUML")," and ",(0,i.mdx)("a",{parentName:"li",href:"https://www.graphviz.org/"},"GraphViz")),(0,i.mdx)("li",{parentName:"ul"},"Full ",(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/"},"SCXML")," compatibility, which will allow statecharts authored in XState to be reusable in other languages that have SCXML tooling, as it is a truly language-agnostic spec"),(0,i.mdx)("li",{parentName:"ul"},"A catalog of examples, to demonstrate common patterns and best practices for many use-cases"),(0,i.mdx)("li",{parentName:"ul"},"Analytics, testing, and simulation tools")),(0,i.mdx)("p",null,"As well as some initial ideas for XState version 5.0:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Better type safety and a more seamless TypeScript experience"),(0,i.mdx)("li",{parentName:"ul"},"Static analysis tools for compile-time hints/warnings and run-time optimizations"),(0,i.mdx)("li",{parentName:"ul"},"A more \u201dfunctional\u201d, and completely optional, syntax for defining states and transitions more naturally (developer experience)"),(0,i.mdx)("li",{parentName:"ul"},"Higher-level state types such as ",(0,i.mdx)("inlineCode",{parentName:"li"},'"task"')," and ",(0,i.mdx)("inlineCode",{parentName:"li"},'"choice"')," to make it easier to define workflows and remove some boilerplate")),(0,i.mdx)("p",null,"We\u2019re also listening to ideas that you present to us in the ",(0,i.mdx)("a",{parentName:"p",href:"https://spectrum.chat/statecharts/general/xstate-wish-list~6f025b10-fcbc-4ab5-ae59-5201112f06f2"},"XState Wish List")," thread, so post what you would like to see!"),(0,i.mdx)("h2",{id:"more-information"},"More information"),(0,i.mdx)("p",null,"If you\u2019re curious about XState or statecharts in general, there are many fantastic resources, including:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://statecharts.github.io/"},"The World of Statecharts")," by Erik Mogensen"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://spectrum.chat/statecharts"},"Statecharts community")," on Spectrum"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs"},"XState docs")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/about/tutorials.html"},"Other tutorials")," made by many excellent developers in the community")))}c.isMDXComponent=!0}}]);