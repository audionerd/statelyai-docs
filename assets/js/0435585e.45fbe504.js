"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[93355],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var d=n.createContext({}),m=function(t){return function(e){var a=c(e.components);return n.createElement(t,i({},e,{components:a}))}},c=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,i=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(a),p=s,u=m["".concat(o,".").concat(p)]||m[p]||h[p]||i;return a?n.createElement(u,r(r({ref:e},d),{},{components:a})):n.createElement(u,r({ref:e},d))}));function g(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:s,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65702:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const i={title:"Introduction to state machines and statecharts",description:"Introduction to state machines and statecharts",tags:["introduction","state machine","statechart","state"],authors:["laura"],category:"entry",image:"/blog/2021-10-02-intro-fsm-sc.png",slug:"2021-10-02-intro-fsm-sc",date:new Date("2021-10-02T00:00:00.000Z")},o=void 0,r={permalink:"/statelyai-docs/blog/2021-10-02-intro-fsm-sc",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2021-10-02-intro-fsm-sc/index.mdx",source:"@site/blog/2021-10-02-intro-fsm-sc/index.mdx",title:"Introduction to state machines and statecharts",description:"Introduction to state machines and statecharts",date:"2021-10-02T00:00:00.000Z",formattedDate:"October 2, 2021",tags:[{label:"introduction",permalink:"/statelyai-docs/blog/tags/introduction"},{label:"state machine",permalink:"/statelyai-docs/blog/tags/state-machine"},{label:"statechart",permalink:"/statelyai-docs/blog/tags/statechart"},{label:"state",permalink:"/statelyai-docs/blog/tags/state"}],readingTime:7.79,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Introduction to state machines and statecharts",description:"Introduction to state machines and statecharts",tags:["introduction","state machine","statechart","state"],authors:["laura"],category:"entry",image:"/blog/2021-10-02-intro-fsm-sc.png",slug:"2021-10-02-intro-fsm-sc",date:"2021-10-02T00:00:00.000Z"},prevItem:{title:"How do you convince your teammates to use XState?",permalink:"/statelyai-docs/blog/2021-10-11-convince-teammates"},nextItem:{title:"useState vs useReducer vs XState - Part 1: Modals",permalink:"/statelyai-docs/blog/2021-07-28-usestate-vs-usereducer-vs-xstate-part-1-modals"}},l={authorsImageUrls:[void 0]},d=[{value:"States",id:"states",level:2},{value:"Transitions and events",id:"transitions-and-events",level:2},{value:"Initial state",id:"initial-state",level:2},{value:"Final state",id:"final-state",level:2},{value:"Compound states",id:"compound-states",level:2},{value:"Atomic states",id:"atomic-states",level:3},{value:"Parallel states",id:"parallel-states",level:3},{value:"Self-transition",id:"self-transition",level:3},{value:"Planning statecharts",id:"planning-statecharts",level:2},{value:"Planning a statechart for a login machine",id:"planning-a-statechart-for-a-login-machine",level:3},{value:"Delayed transitions",id:"delayed-transitions",level:2},{value:"Actions",id:"actions",level:2}],m={toc:d};function c(t){let{components:e,...a}=t;return(0,s.mdx)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,s.mdx)("head",null,(0,s.mdx)("link",{rel:"canonical",href:"https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/"})),(0,s.mdx)("p",null,"Statecharts are a visual language used to describe the states in a process."),(0,s.mdx)("p",null,"You may have used similar diagrams in the past to design user flows, plan databases or map app architecture. Statecharts are another way of using boxes and arrows to represent flows, but with XState these flows are also executable code that can be used to control the logic in your applications."),(0,s.mdx)("p",null,"This guide covers the basics of statecharts in a beginner-friendly way, including:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#states"},"states")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#transitions-and-events"},"transitions and events")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#initial-state"},"initial states")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#final-state"},"final states")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#compound-states"},"compound states")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#parallel-states"},"parallel states")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#self-transition"},"self-transitions")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#planning-statecharts"},"planning statecharts")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#delayed-transitions"},"delayed transitions")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"#actions"},"actions"))),(0,s.mdx)("h2",{id:"states"},"States"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("em",{parentName:"p"},"states")," are represented by rounded rectangle boxes. To draw a statechart for the process of a dog, there are two states that would first come to mind:"),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/asleep-awake.svg",alt:null})),(0,s.mdx)("p",null,"A dog is always ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," or ",(0,s.mdx)("strong",{parentName:"p"},"awake"),". The dog can\u2019t be asleep and awake at the same time, and it\u2019s impossible for the dog to be neither asleep nor awake. There\u2019s only these two states, a precisely limited, ",(0,s.mdx)("em",{parentName:"p"},"finite")," number of states."),(0,s.mdx)("h2",{id:"transitions-and-events"},"Transitions and events"),(0,s.mdx)("p",null,"How the dog goes between ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," and ",(0,s.mdx)("strong",{parentName:"p"},"awake")," is through ",(0,s.mdx)("em",{parentName:"p"},"transitions"),", which are symbolised by an arrow pointing from one state to the next state in the process\u2019s sequence."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/transitions-events.svg",alt:null})),(0,s.mdx)("p",null,"A transition is caused by an ",(0,s.mdx)("em",{parentName:"p"},"event")," that results in the change of state. Transitions are labelled with their events."),(0,s.mdx)("p",null,"Transitions and events are ",(0,s.mdx)("em",{parentName:"p"},"deterministic"),". Deterministic means that each transition and event always points to the same next state, and always produces the same result from their given starting condition, every time the process is run. Dogs never ",(0,s.mdx)("strong",{parentName:"p"},"wake up")," to become ",(0,s.mdx)("strong",{parentName:"p"},"asleep")," or ",(0,s.mdx)("strong",{parentName:"p"},"fall asleep")," to become ",(0,s.mdx)("strong",{parentName:"p"},"awake"),"."),(0,s.mdx)("p",null,"This tiny dog process, with its two finite states and two transitions is a ",(0,s.mdx)("em",{parentName:"p"},"Finite State Machine.")," A state machine is used to describe the behavior of something. The machine describes the thing\u2019s states and the transitions between those states. It\u2019s a Finite State Machine because it has a finite number of states. (Sometimes abbreviated to FSM by folks who love jargon)."),(0,s.mdx)("h2",{id:"initial-state"},"Initial state"),(0,s.mdx)("p",null,"Any process that has states will have an ",(0,s.mdx)("em",{parentName:"p"},"initial state"),", the default state the process exists in until an event happens to change the process\u2019s state."),(0,s.mdx)("p",null,"The initial state is represented by a filled circle with an arrow pointing from the circle to the initial state."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/initial-state.svg",alt:null})),(0,s.mdx)("p",null,"Using a statechart to describe the process of walking the dog, the initial state would be ",(0,s.mdx)("strong",{parentName:"p"},"waiting")," to walk."),(0,s.mdx)("h2",{id:"final-state"},"Final state"),(0,s.mdx)("p",null,"Most processes with states will have a ",(0,s.mdx)("em",{parentName:"p"},"final state"),", the last state when the process is finished. The final state is represented by a double border on the state\u2019s rounded rectangle box."),(0,s.mdx)("p",null,"In the dog walking statechart, the final state would be ",(0,s.mdx)("strong",{parentName:"p"},"walk complete"),"."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/final-state.svg",alt:"Dog walking statechart showing waiting state transitioning through the leave home event to the on a walk state, then transitioning through the arrive home event to the final state of walk complete."})),(0,s.mdx)("h2",{id:"compound-states"},"Compound states"),(0,s.mdx)("p",null,"A compound state is a state that can contain more states, also known as child states. These child states can only happen when the parent compound state is happening. Inside the ",(0,s.mdx)("strong",{parentName:"p"},"on a walk")," state, there could be the child states of ",(0,s.mdx)("strong",{parentName:"p"},"walking"),", ",(0,s.mdx)("strong",{parentName:"p"},"running")," and ",(0,s.mdx)("strong",{parentName:"p"},"stopping to sniff good smells"),"."),(0,s.mdx)("p",null,"A compound state is symbolised by a labelled rounded rectangle box that acts as a container for its child states."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/compound-state.svg",alt:null})),(0,s.mdx)("p",null,"A compound state should also specify which child state is the initial state. In the ",(0,s.mdx)("strong",{parentName:"p"},"on a walk")," compound state, the initial state is ",(0,s.mdx)("strong",{parentName:"p"},"walking"),"."),(0,s.mdx)("p",null,"Compound states are what makes statecharts capable of handling more complexity than an everyday state machine."),(0,s.mdx)("h3",{id:"atomic-states"},"Atomic states"),(0,s.mdx)("p",null,"An atomic state is a state that doesn\u2019t have any child states. ",(0,s.mdx)("strong",{parentName:"p"},"Waiting"),", ",(0,s.mdx)("strong",{parentName:"p"},"walk complete"),", ",(0,s.mdx)("strong",{parentName:"p"},"walking"),", ",(0,s.mdx)("strong",{parentName:"p"},"running")," and ",(0,s.mdx)("strong",{parentName:"p"},"stopping to sniff good smells")," are all atomic states."),(0,s.mdx)("h3",{id:"parallel-states"},"Parallel states"),(0,s.mdx)("p",null,"A parallel state is a compound state where all of its child states, also known as regions, are active simultaneously. The regions are separated inside the compound state container by a dashed line."),(0,s.mdx)("p",null,"Inside the ",(0,s.mdx)("strong",{parentName:"p"},"on a walk")," compound state, there could be two regions. One region contains the dog\u2019s activity child states of ",(0,s.mdx)("strong",{parentName:"p"},"walking"),", ",(0,s.mdx)("strong",{parentName:"p"},"running")," and ",(0,s.mdx)("strong",{parentName:"p"},"stopping to sniff good smells"),", and the other region containing the dog\u2019s tail states of ",(0,s.mdx)("strong",{parentName:"p"},"wagging")," and ",(0,s.mdx)("strong",{parentName:"p"},"not wagging"),". The dog can walk and wag its tail, run and wag its tail or stop and sniff while wagging its tail, it can also do any of these activities without wagging its tail."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/parallel-states.svg",alt:null})),(0,s.mdx)("p",null,"Both regions should also specify which child state is the initial state. In our ",(0,s.mdx)("strong",{parentName:"p"},"tail")," region, the initial state is ",(0,s.mdx)("strong",{parentName:"p"},"not wagging"),"."),(0,s.mdx)("h3",{id:"self-transition"},"Self-transition"),(0,s.mdx)("p",null,"A self-transition is when an event happens, but the transition returns to the same state. The transition arrow exits and re-enters the same state."),(0,s.mdx)("p",null,"A helpful way to describe a self-transition is \u201cdoing something, not going somewhere\u201d in the process."),(0,s.mdx)("p",null,"In a ",(0,s.mdx)("strong",{parentName:"p"},"dog begging")," process, there would be a ",(0,s.mdx)("strong",{parentName:"p"},"begging")," state with a ",(0,s.mdx)("strong",{parentName:"p"},"gets treat")," event. And for the dogs who love their food, no matter how many times you go through the ",(0,s.mdx)("strong",{parentName:"p"},"gets treat")," event, the dog returns to its ",(0,s.mdx)("strong",{parentName:"p"},"begging")," state."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/self-transition.svg",alt:null})),(0,s.mdx)("h2",{id:"planning-statecharts"},"Planning statecharts"),(0,s.mdx)("p",null,"One of the benefits of statecharts is that, in the process of putting a statechart together, you explore all the possible states in your process. This exploration will help you avoid bugs and errors in your code as you\u2019re more likely to cover all the eventualities."),(0,s.mdx)("p",null,"And because statecharts are executable, they can behave as both the diagram and the code, making it less likely that you\u2019ll introduce differences or bugs interpreting between the diagramming and coding environments."),(0,s.mdx)("h3",{id:"planning-a-statechart-for-a-login-machine"},"Planning a statechart for a login machine"),(0,s.mdx)("p",null,"To draw a statechart for a login machine, start by listing the basic ",(0,s.mdx)("em",{parentName:"p"},"events")," in the process. Think about what your login process will ",(0,s.mdx)("em",{parentName:"p"},"do"),":"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"log in"),(0,s.mdx)("li",{parentName:"ul"},"log out")),(0,s.mdx)("p",null,"Then list the ",(0,s.mdx)("em",{parentName:"p"},"states")," that exist as a result of those events:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"logged in"),(0,s.mdx)("li",{parentName:"ul"},"logged out")),(0,s.mdx)("p",null,"Once there\u2019s some events and states, there\u2019s the beginnings of a statechart."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/basic-login.svg",alt:"Login statechart showing an initial logged out state transitioning through a log in event to a logged in state, then transitioning through a log out event back to the logged out state."})),(0,s.mdx)("p",null,"Don\u2019t forget the ",(0,s.mdx)("em",{parentName:"p"},"initial state"),". In this case, the ",(0,s.mdx)("strong",{parentName:"p"},"logged out")," state is the initial state, as any new user would come to the process logged out."),(0,s.mdx)("h2",{id:"delayed-transitions"},"Delayed transitions"),(0,s.mdx)("p",null,"Some login and logout processes will log out an inactive user after a fixed length of time as a security measure."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("strong",{parentName:"p"},"active")," and ",(0,s.mdx)("strong",{parentName:"p"},"idle")," states only happen when the user is logged in, so these become child states inside the ",(0,s.mdx)("strong",{parentName:"p"},"logged in")," compound state."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/login-compound-state.svg",alt:null})),(0,s.mdx)("p",null,"The initial state inside the ",(0,s.mdx)("strong",{parentName:"p"},"logged in")," compound state is ",(0,s.mdx)("strong",{parentName:"p"},"active"),", as it happens as a direct result of the ",(0,s.mdx)("strong",{parentName:"p"},"log in")," event, and logging in is a sign of user activity."),(0,s.mdx)("p",null,"A ",(0,s.mdx)("em",{parentName:"p"},"delayed transition")," is a type of transition which happens after being in a state for a specified length of time. The delayed transition is labelled with \u201cafter\u201d and a fixed duration to indicate how much time should pass before transitioning to the next indicated state."),(0,s.mdx)("p",null,"In the login statechart, a delayed transition of ",(0,s.mdx)("strong",{parentName:"p"},"60000")," milliseconds, or 1 minute, follows the ",(0,s.mdx)("strong",{parentName:"p"},"active")," state to determine whether the user is ",(0,s.mdx)("strong",{parentName:"p"},"idle"),". If there is an ",(0,s.mdx)("strong",{parentName:"p"},"activity")," event before the transition reaches one minute, the process returns to the ",(0,s.mdx)("strong",{parentName:"p"},"active")," state."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/delayed-transition.svg",alt:null})),(0,s.mdx)("p",null,"A delayed transition of ",(0,s.mdx)("strong",{parentName:"p"},"180000")," milliseconds, or 3 minutes, follows the ",(0,s.mdx)("strong",{parentName:"p"},"idle")," state to transition to the ",(0,s.mdx)("strong",{parentName:"p"},"auto logged out")," state if the user remains idle."),(0,s.mdx)("h2",{id:"actions"},"Actions"),(0,s.mdx)("p",null,"A statechart is used to set off ",(0,s.mdx)("em",{parentName:"p"},"actions")," in the system outside of the statechart. Actions are also commonly known as ",(0,s.mdx)("em",{parentName:"p"},"effects")," or ",(0,s.mdx)("em",{parentName:"p"},"side-effects"),". \u201cSide effects\u201d sounds like a negative or unimportant term, but setting off actions is the primary purpose in using statecharts."),(0,s.mdx)("p",null,"Actions are events that have no impact or consequences for the rest of the sequence, the event is just triggered and the sequence moves on to the next step in the process. For example, the login statechart might execute actions that change the user interface."),(0,s.mdx)("p",null,"An ",(0,s.mdx)("em",{parentName:"p"},"action")," can be fired upon entering or exiting a state, or on a transition. An action on a state is included inside the state\u2019s container with an \u201centry /\u201d or \u201cexit /\u201d label depending on whether the action should be fired on entry or exit from the state."),(0,s.mdx)("p",null,"In the login statechart, there\u2019s an ",(0,s.mdx)("em",{parentName:"p"},"entry")," action on the ",(0,s.mdx)("strong",{parentName:"p"},"idle")," state to warn the user that they may be logged out."),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/statelyai/xstate/d98d948a534b028f4af8b271eb431a8625ab5cb3/docs/guides/introduction-to-state-machines-and-statecharts/entry-action.svg",alt:null})))}c.isMDXComponent=!0}}]);