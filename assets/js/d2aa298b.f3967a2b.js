"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[92994],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(a),p=s,u=m["".concat(r,".").concat(p)]||m[p]||h[p]||i;return a?n.createElement(u,o(o({ref:t},l),{},{components:a})):n.createElement(u,o({ref:t},l))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93634:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const s="embed_rxbU";var i=a(92949);function r(e){let{name:t,embedURL:a}=e;const{colorMode:r}=(0,i.I)();return n.createElement("iframe",{loading:"lazy",src:o(a,{colorMode:r}),className:s},n.createElement("a",{href:a},"View the ",n.createElement("em",null,t)," machine in Stately Studio"),".")}function o(e,t){const a=new URL(e);for(const n in t)a.searchParams.set(n,t[n]);return a.toString()}},4203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),s=(a(67294),a(3905)),i=a(93634),r=a(50941);const o={title:"What are state machines and statecharts?"},d=void 0,l={unversionedId:"state-machines-and-statecharts",id:"state-machines-and-statecharts",title:"What are state machines and statecharts?",description:"State machines help us model how a process goes from state to state when an event occurs.",source:"@site/docs/state-machines-and-statecharts.mdx",sourceDirName:".",slug:"/state-machines-and-statecharts",permalink:"/statelyai-docs/docs/state-machines-and-statecharts",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/state-machines-and-statecharts.mdx",tags:[],version:"current",frontMatter:{title:"What are state machines and statecharts?"},sidebar:"docs",previous:{title:"Core concepts",permalink:"/statelyai-docs/docs/category/core-concepts"},next:{title:"The actor model",permalink:"/statelyai-docs/docs/actor-model"}},m={},c=[{value:"Benefits of state machines",id:"benefits-of-state-machines",level:2},{value:"What is a statechart?",id:"what-is-a-statechart",level:2},{value:"States",id:"states",level:2},{value:"Transitions and events",id:"transitions-and-events",level:2},{value:"Initial state",id:"initial-state",level:2},{value:"Final state",id:"final-state",level:2},{value:"Parent states",id:"parent-states",level:2},{value:"Atomic states",id:"atomic-states",level:2},{value:"Parallel states",id:"parallel-states",level:2},{value:"Self-transition",id:"self-transition",level:2},{value:"What next?",id:"what-next",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"State machines help us model how a process goes from state to state when an event occurs."),(0,s.mdx)("p",null,"State machines are useful in software development because they help us capture all the states, events and transitions between them. Using state machines makes it easier to find impossible states and spot undesirable transitions."),(0,s.mdx)("p",null,"State machines model your application logic. Below is the logic for a video player. When the video is Played, it is opened into fullscreen mode. When the video is stopped, it closes out of fullscreen mode. When the video player is in fullscreen mode, it can be ",(0,s.mdx)("em",{parentName:"p"},"Playing")," or ",(0,s.mdx)("em",{parentName:"p"},"Paused"),"."),(0,s.mdx)(i.Z,{name:"Video player",embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=dbcfca1c-075d-4cd6-a865-efcbd7be1544",mdxType:"EmbedMachine"}),(0,s.mdx)("h2",{id:"benefits-of-state-machines"},"Benefits of state machines"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Easy to understand.")," State machines are visual and easy to understand. They\u2019re a great way to communicate with your team and stakeholders."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Easy to test.")," State machines are deterministic, which means they\u2019re easy to test. You can test all the possible states and transitions between them."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Easy to implement.")," State machines are easy to implement in any programming language. You can use a library or write your own."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Easy to maintain.")," State machines are easy to maintain because they\u2019re easy to understand, test and implement."),(0,s.mdx)("li",{parentName:"ul"},"They provide a clear and concise way to model complex user interfaces and manage application state."),(0,s.mdx)("li",{parentName:"ul"},"State machines can help reduce complexity and improve maintainability by providing a structured way to manage state transitions and handle events."),(0,s.mdx)("li",{parentName:"ul"},"They can also help prevent bugs and improve code quality by enforcing a clear separation of concerns between different parts of the application."),(0,s.mdx)("li",{parentName:"ul"},"Additionally, state machines can be highly maintainable and offer a way to make very complex front-end processes much more manageable.")),(0,s.mdx)("p",null,"Backend"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"State machines simplify the design and implementation of complex workflows, which can help reduce complexity and improve maintainability. ",(0,s.mdx)("a",{parentName:"li",href:"https://developers.redhat.com/articles/2021/11/23/how-design-state-machines-microservices"},"https://developers.redhat.com/articles/2021/11/23/how-design-state-machines-microservices"))),(0,s.mdx)("h2",{id:"what-is-a-statechart"},"What is a statechart?"),(0,s.mdx)("p",null,"Statecharts are fancy state machines used to model more complex logic."),(0,s.mdx)("p",null,"Statecharts are a visual extension to state machines that use boxes and arrows, much like flowcharts and sequence diagrams. Statecharts add extra features not available in ordinary state machines, including ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/parent-states"},"hierarchy"),", ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/parallel-states"},"concurrency")," and ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/actor-model"},"communication"),"."),(0,s.mdx)("p",null,"When you make a state machine in ",(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/editor"},"Stately Studio"),", it\u2019s also a statechart!"),(0,s.mdx)("admonition",{type:"studio"},(0,s.mdx)("p",{parentName:"admonition"},"In Stately Studio, we refer to both state machines and statecharts as ",(0,s.mdx)("strong",{parentName:"p"},"machines"),".")),(0,s.mdx)("h2",{id:"states"},"States"),(0,s.mdx)("p",null,"A state describes the machine\u2019s status or mode, which could be as simple as\xa0",(0,s.mdx)("em",{parentName:"p"},"Asleep"),"\xa0and\xa0",(0,s.mdx)("em",{parentName:"p"},"Awake"),". A state machine can only be in one state at a time."),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"Dog state machine with asleep and awake states. There\u2019s a warning on the awake state because there\u2019s no transitions which means the awake state cannot be reached.",sources:{light:"https://stately.ai/registry/machines/469f2d59-551f-43cb-bfc0-e6f3ea0f9d87.light.png",dark:"https://stately.ai/registry/machines/469f2d59-551f-43cb-bfc0-e6f3ea0f9d87.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=469f2d59-551f-43cb-bfc0-e6f3ea0f9d87"},"View the dog states machine in Stately Studio"),"."),(0,s.mdx)("p",null,"A dog is always ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," or ",(0,s.mdx)("strong",{parentName:"p"},"awake"),". The dog can\u2019t be asleep and awake at the same time, and it\u2019s impossible for the dog to be neither asleep nor awake. There are only these two states, a precisely limited, ",(0,s.mdx)("em",{parentName:"p"},"finite")," number of states."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/states"},"More about states"),"."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/finite-states"},"More about finite states"),".")),(0,s.mdx)("admonition",{type:"studio"},(0,s.mdx)("h3",{parentName:"admonition",id:"states-in-stately-studio"},"States in Stately Studio"),(0,s.mdx)("p",{parentName:"admonition"},"The rounded rectangle boxes are states. ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/states"},"Read how to create states in Stately Studio"),".")),(0,s.mdx)("h2",{id:"transitions-and-events"},"Transitions and events"),(0,s.mdx)("p",null,"How the dog goes between ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," and ",(0,s.mdx)("strong",{parentName:"p"},"awake")," is through\xa0",(0,s.mdx)("strong",{parentName:"p"},"transitions"),". Events cause transitions; when an event happens, the machine transitions to the next state. The dog goes between ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," and ",(0,s.mdx)("strong",{parentName:"p"},"awake")," through the ",(0,s.mdx)("strong",{parentName:"p"},"wake up")," and ",(0,s.mdx)("strong",{parentName:"p"},"fall asleep")," events."),(0,s.mdx)("p",null,"Transitions are \u201cdeterministic\u201d; each combination of state and event always points to the same next state. Dogs never ",(0,s.mdx)("strong",{parentName:"p"},"wake up")," to become ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," or ",(0,s.mdx)("strong",{parentName:"p"},"fall asleep")," to become ",(0,s.mdx)("strong",{parentName:"p"},"awake"),"."),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"",sources:{light:"https://stately.ai/registry/machines/e48e774e-c31f-4e51-a934-6b795c12b2b9.light.png",dark:"https://stately.ai/registry/machines/e48e774e-c31f-4e51-a934-6b795c12b2b9.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=e48e774e-c31f-4e51-a934-6b795c12b2b9"},"View the dog states machine with events and transitions in Stately Studio"),"."),(0,s.mdx)("p",null,"With its two finite states and transitions, this tiny dog process is a ",(0,s.mdx)("em",{parentName:"p"},"Finite State Machine.")," A state machine is used to describe the behavior of something. The machine describes the thing\u2019s states and the transitions between those states. It\u2019s a Finite State Machine because it has a finite number of states. (Sometimes abbreviated to FSM by folks who love jargon)."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/transitions"},"Read more about transitions and events"),"."),(0,s.mdx)("admonition",{type:"studio"},(0,s.mdx)("h3",{parentName:"admonition",id:"events-and-transitions-in-stately-studio"},"Events and transitions in Stately Studio"),(0,s.mdx)("p",{parentName:"admonition"},"In Stately Studio, the arrows are transitions, and the rounded rectangles on the arrow\u2019s lines are events. Each transition has a\xa0",(0,s.mdx)("strong",{parentName:"p"},"source"),"\xa0state which comes before the transition, and a\xa0",(0,s.mdx)("strong",{parentName:"p"},"target"),"\xa0state, which comes after the transition. The transition\u2019s arrow starts from the source state and points to the target state. ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/transitions"},"Read how to create events and transitions in Stately Studio"),".")),(0,s.mdx)("h2",{id:"initial-state"},"Initial state"),(0,s.mdx)("p",null,"When a state machine starts, it enters the\xa0",(0,s.mdx)("strong",{parentName:"p"},"initial state"),"\xa0first. A machine can only have one top-level initial state; if there were multiple initial states, the machine wouldn\u2019t know where to start!"),(0,s.mdx)("p",null,"In a statechart describing the process of walking the dog, the initial state would be ",(0,s.mdx)("strong",{parentName:"p"},"waiting")," to walk:"),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"",sources:{light:"https://stately.ai/registry/machines/65cf2bcb-658d-40dc-bb26-80f26c159256.light.png",dark:"https://stately.ai/registry/machines/65cf2bcb-658d-40dc-bb26-80f26c159256.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=65cf2bcb-658d-40dc-bb26-80f26c159256"},"View the dog waiting machine in Stately Studio"),"."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/initial-states"},"Read more about initial states"),"."),(0,s.mdx)("admonition",{type:"studio"},(0,s.mdx)("h3",{parentName:"admonition",id:"initial-states-in-stately-studio"},"Initial states in Stately Studio"),(0,s.mdx)("p",{parentName:"admonition"},"The filled circle with an arrow icon represents the initial state. ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/initial-states"},"Read how to create initial states in Stately Studio"),".")),(0,s.mdx)("h2",{id:"final-state"},"Final state"),(0,s.mdx)("p",null,"Most processes with states will have a ",(0,s.mdx)("em",{parentName:"p"},"final state"),", the last state when the process is finished. The final state is represented by a double border on the state\u2019s rounded rectangle box."),(0,s.mdx)("p",null,"In the dog walking statechart, the final state would be ",(0,s.mdx)("strong",{parentName:"p"},"walk complete"),"."),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"Dog walking statechart showing waiting state transitioning through the leave home event to the on a walk state, then transitioning through the arrive home event to the final state of walk complete.",sources:{light:"https://stately.ai/registry/machines/988d8d05-86ba-422a-8a28-d13cbf54d481.light.png",dark:"https://stately.ai/registry/machines/988d8d05-86ba-422a-8a28-d13cbf54d481.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=988d8d05-86ba-422a-8a28-d13cbf54d481"},"View the dog walk machine in Stately Studio"),"."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/final-states"},"Read more about final states")),(0,s.mdx)("h2",{id:"parent-states"},"Parent states"),(0,s.mdx)("p",null,"A parent state is a state that can contain more states, also known as child states. These child states can only happen when the parent state is happening. Inside the ",(0,s.mdx)("strong",{parentName:"p"},"on a walk")," state, there could be the child states of ",(0,s.mdx)("strong",{parentName:"p"},"walking")," and ",(0,s.mdx)("strong",{parentName:"p"},"running"),"."),(0,s.mdx)("p",null,"A parent state is symbolised by a labelled rectangle box that acts as a container for its child states. Parent states are sometimes known as ",(0,s.mdx)("em",{parentName:"p"},"compound states"),"."),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"",sources:{light:"https://stately.ai/registry/machines/aa8a9c5d-8fd9-4e47-b71a-bda219cda066.light.png",dark:"https://stately.ai/registry/machines/aa8a9c5d-8fd9-4e47-b71a-bda219cda066.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=aa8a9c5d-8fd9-4e47-b71a-bda219cda066"},"View the dog walk machine in Stately Studio"),"."),(0,s.mdx)("p",null,"A parent state should also specify which child state is the initial state. In the ",(0,s.mdx)("strong",{parentName:"p"},"on a walk")," parent state, the initial state is ",(0,s.mdx)("strong",{parentName:"p"},"walking"),"."),(0,s.mdx)("p",null,"Parent and child states are one of the features that make statecharts capable of handling more complexity than an everyday state machine."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/parent-states"},"Read more about parent states"),"."),(0,s.mdx)("h2",{id:"atomic-states"},"Atomic states"),(0,s.mdx)("p",null,"An atomic state is a state that doesn\u2019t have any child states. ",(0,s.mdx)("strong",{parentName:"p"},"Waiting"),", ",(0,s.mdx)("strong",{parentName:"p"},"walk complete"),", ",(0,s.mdx)("strong",{parentName:"p"},"walking")," and ",(0,s.mdx)("strong",{parentName:"p"},"running")," are all atomic states."),(0,s.mdx)("h2",{id:"parallel-states"},"Parallel states"),(0,s.mdx)("p",null,"A parallel state is a state where all of its child states, also known as regions, are active simultaneously. The regions are separated inside the parallel state container by a dashed line."),(0,s.mdx)("p",null,"Inside the ",(0,s.mdx)("strong",{parentName:"p"},"on a walk")," parallel state, there could be two regions. One region contains the dog\u2019s activity child states of ",(0,s.mdx)("strong",{parentName:"p"},"walking")," and ",(0,s.mdx)("strong",{parentName:"p"},"running"),", and the other region containing the dog\u2019s tail states of ",(0,s.mdx)("strong",{parentName:"p"},"wagging")," and ",(0,s.mdx)("strong",{parentName:"p"},"not wagging"),". The dog can walk and wag its tail or run and wag its tail, it can also do both of these activities without wagging its tail."),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"",sources:{light:"https://stately.ai/registry/machines/1f43dcd3-255c-40bf-b6b0-eba9a2bccb23.light.png",dark:"https://stately.ai/registry/machines/1f43dcd3-255c-40bf-b6b0-eba9a2bccb23.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=1f43dcd3-255c-40bf-b6b0-eba9a2bccb23"},"View the dog walk machine in Stately Studio"),"."),(0,s.mdx)("p",null,"Both regions should also specify which child state is the initial state. In our ",(0,s.mdx)("strong",{parentName:"p"},"tail")," region, the initial state is ",(0,s.mdx)("strong",{parentName:"p"},"not wagging"),"."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/parallel-states"},"Read more about parallel states"),"."),(0,s.mdx)("h2",{id:"self-transition"},"Self-transition"),(0,s.mdx)("p",null,"A self-transition is when an event happens, but the transition returns to the same state. The transition arrow exits and re-enters the same state."),(0,s.mdx)("p",null,"A helpful way to describe a self-transition is \u201cdoing something, not going somewhere\u201d in the process."),(0,s.mdx)("p",null,"In a ",(0,s.mdx)("strong",{parentName:"p"},"dog begging")," process, there would be a ",(0,s.mdx)("strong",{parentName:"p"},"begging")," state with a ",(0,s.mdx)("strong",{parentName:"p"},"gets treat")," event. And for the dogs who love their food, no matter how many times you go through the ",(0,s.mdx)("strong",{parentName:"p"},"gets treat")," event, the dog returns to its ",(0,s.mdx)("strong",{parentName:"p"},"begging")," state."),(0,s.mdx)("p",null,(0,s.mdx)(r.Z,{alt:"",sources:{light:"https://stately.ai/registry/machines/933419cb-dd94-453c-a2b1-de2290c0a5a5.light.png",dark:"https://stately.ai/registry/machines/933419cb-dd94-453c-a2b1-de2290c0a5a5.dark.png"},mdxType:"ThemedImage"})),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/editor/1f84ff0d-fe41-4a92-ad5c-fadfa8b37ffb?machineId=1f43dcd3-255c-40bf-b6b0-eba9a2bccb23"},"View the dog begging machine in Stately Studio"),"."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/transitions/#self-transitions"},"Read more about self transitions")),(0,s.mdx)("h2",{id:"what-next"},"What next?"),(0,s.mdx)("p",null,"Now you know enough to get started in the ",(0,s.mdx)("a",{parentName:"p",href:"https://stately.ai/editor?source=docs"},"Stately Studio"),". Get an ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/studio"},"overview of Stately Studio and its features"),", or ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate"},"continue to learn about XState"),"."))}h.isMDXComponent=!0}}]);