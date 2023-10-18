"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[23490],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){return function(t){var n=p(t.components);return a.createElement(e,r({},t,{components:n}))}},p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,c(c({ref:t},l),{},{components:n})):a.createElement(h,c({ref:t},l))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Making state machines global in React",description:"Learn how to use the `createActorContext` function to make state machines global in React.",tags:["react","hook","tutorial"],authors:["david"],image:"/blog/2023-1-27-making-state-machines-global-in-react.png",slug:"2023-1-27-making-state-machines-global-in-react",date:new Date("2023-01-27T00:00:00.000Z")},i=void 0,c={permalink:"/statelyai-docs/blog/2023-1-27-making-state-machines-global-in-react",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-1-27-making-state-machines-global-in-react/index.mdx",source:"@site/blog/2023-1-27-making-state-machines-global-in-react/index.mdx",title:"Making state machines global in React",description:"Learn how to use the `createActorContext` function to make state machines global in React.",date:"2023-01-27T00:00:00.000Z",formattedDate:"January 27, 2023",tags:[{label:"react",permalink:"/statelyai-docs/blog/tags/react"},{label:"hook",permalink:"/statelyai-docs/blog/tags/hook"},{label:"tutorial",permalink:"/statelyai-docs/blog/tags/tutorial"}],readingTime:2.69,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"Making state machines global in React",description:"Learn how to use the `createActorContext` function to make state machines global in React.",tags:["react","hook","tutorial"],authors:["david"],image:"/blog/2023-1-27-making-state-machines-global-in-react.png",slug:"2023-1-27-making-state-machines-global-in-react",date:"2023-01-27T00:00:00.000Z"},prevItem:{title:"Import machines from GitHub",permalink:"/statelyai-docs/blog/2023-02-06-github-import-machines"},nextItem:{title:"What\u2019s new for Stately in 2023",permalink:"/statelyai-docs/blog/2023-01-20-whats-new-in-2023"}},s={authorsImageUrls:[void 0]},l=[{value:"Creating an actor context",id:"creating-an-actor-context",level:2},{value:"Consuming the actor context",id:"consuming-the-actor-context",level:2},{value:"Providing custom machines",id:"providing-custom-machines",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:l};function p(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"React developers often need to share state between components. While the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useMachine(...)")," hook provides a convenient way to represent local state as a state machine, it\u2019s not very feasible for shared or global state. Thankfully, ",(0,o.mdx)("inlineCode",{parentName:"p"},"@xstate/react"),"\u2019s ",(0,o.mdx)("inlineCode",{parentName:"p"},"createActorContext(machine)")," function, released in ",(0,o.mdx)("inlineCode",{parentName:"p"},"@xstate/react@3.1.0"),", is a convenient way to share state machines globally in any React application."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"createActorContext(machine)")," function returns a ",(0,o.mdx)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context"},"React Context object")," that interprets the machine and makes the actor (interpreted machine) available through React Context. The object returned from ",(0,o.mdx)("inlineCode",{parentName:"p"},"createActorContext(...)")," has helper methods for accessing state and the actor ref. It takes one argument, ",(0,o.mdx)("inlineCode",{parentName:"p"},"machine"),", which is a state machine from ",(0,o.mdx)("inlineCode",{parentName:"p"},"createMachine(...)")," or a function that lazily returns a machine."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=M6KjEogxfQE"},"\u25b6\ufe0f Stately Stream: Simple React todo app with ",(0,o.mdx)("inlineCode",{parentName:"a"},"createActorContext"))),(0,o.mdx)("h2",{id:"creating-an-actor-context"},"Creating an actor context"),(0,o.mdx)("p",null,"Here\u2019s how you would create a React Context for an actor created from a machine and provide it in app scope:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},'// ./App.tsx\nimport { createActorContext } from "@xstate/react";\nimport { someMachine } from "../path/to/someMachine";\n\n// Create a React Context for the actor\nexport const SomeMachineContext = createActorContext(someMachine);\n\n// ...\n\nfunction App() {\n  return (\n    // Provide the actor context in app scope\n    <SomeMachineContext.Provider>\n      <SomeComponent />\n    </SomeMachineContext.Provider>\n  );\n}\n')),(0,o.mdx)("p",null,"This provider will make the actor available to any component that consumes it. You can also provide the actor context in any part of the component tree, such as a modal or a sidebar."),(0,o.mdx)("h2",{id:"consuming-the-actor-context"},"Consuming the actor context"),(0,o.mdx)("p",null,"To consume the actor in a component, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useActor()")," hook to get the ",(0,o.mdx)("inlineCode",{parentName:"p"},"state")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"send")," function, or you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"useSelector(selector, compare?)")," hook to derive a specific value from the snapshot:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},'// ./SomeComponent.tsx\nimport { SomeMachineContext } from "./App";\n\nfunction SomeComponent() {\n  // Read full snapshot and get `send` function from `useActor()`\n  const [state, send] = SomeMachineContext.useActor();\n  // Or derive a specific value from the snapshot with `useSelector()`\n  const count = SomeMachineContext.useSelector((state) => state.context.count);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => send({ type: "INCREMENT" })}>Increment</button>\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"As a reminder, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useSelector(...)")," hook is better when you want to control rerenders, as it will only rerender when the selected state changes."),(0,o.mdx)("p",null,"If you only need the ",(0,o.mdx)("inlineCode",{parentName:"p"},"actorRef"),", which is a reference to the invoked actor, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useActorRef()")," hook:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},'import { SomeMachineContext } from "./App";\n\nfunction SomeComponent() {\n  const actorRef = SomeMachineContext.useActorRef();\n\n  return (\n    <div>\n      <button onClick={() => actorRef.send({ type: "INCREMENT" })}>\n        Increment\n      </button>\n    </div>\n  );\n}\n')),(0,o.mdx)("h2",{id:"providing-custom-machines"},"Providing custom machines"),(0,o.mdx)("p",null,"Lastly, if you need to provide implementation details to the machine, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"actions"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"guards"),", or ",(0,o.mdx)("inlineCode",{parentName:"p"},"delays"),", you can provide these options in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"options={...}")," prop on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Provider")," component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},'import { SomeMachineContext } from "../path/to/SomeMachineContext";\nimport { someMachine } from "../path/to/someMachine";\n\nfunction SomeComponent() {\n  return (\n    <SomeMachineContext.Provider\n      options={{\n        actions: {\n          doSomething: (ctx, ev) => {\n            // ...\n          },\n        },\n      }}\n    >\n      <SomeOtherComponent />\n    </SomeMachineContext.Provider>\n  );\n}\n')),(0,o.mdx)("h2",{id:"conclusion"},"Conclusion"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"createActorContext(...)")," function from ",(0,o.mdx)("inlineCode",{parentName:"p"},"@xstate/react")," is a convenient way to share state machines globally in any React application, or in any part of the component tree. It is available as of version ",(0,o.mdx)("inlineCode",{parentName:"p"},"@xstate/react@3.1.0"),". If you have any questions or feedback, please ",(0,o.mdx)("a",{parentName:"p",href:"https://discord.gg/xstate"},"let us know on Discord")," to get help, ask questions, and give us your feedback."),(0,o.mdx)("p",null,"Happy modeling!"))}p.isMDXComponent=!0}}]);