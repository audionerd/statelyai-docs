"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[86053],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){return function(t){var n=c(t.components);return a.createElement(e,r({},t,{components:n}))}},c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Invoke"},i=void 0,l={unversionedId:"invoke",id:"invoke",title:"Invoke",description:"XState is based on the actor model. Invoked actors are managed by the state machine. Invoked actors are created and started when the state is entered, and stopped when the state is exited.",source:"@site/docs/invoke.mdx",sourceDirName:".",slug:"/invoke",permalink:"/statelyai-docs/docs/invoke",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/invoke.mdx",tags:[],version:"current",frontMatter:{title:"Invoke"},sidebar:"docs",previous:{title:"Actors",permalink:"/statelyai-docs/docs/actors"},next:{title:"Spawn",permalink:"/statelyai-docs/docs/spawn"}},d={},s=[{value:"Using invoked actors in Stately Studio",id:"using-invoked-actors-in-stately-studio",level:2},{value:"Invoke actors on a state",id:"invoke-actors-on-a-state",level:3},{value:"On the canvas",id:"on-the-canvas",level:3},{value:"Add actor source logic and ID",id:"add-actor-source-logic-and-id",level:4},{value:"Using the event details panel",id:"using-the-event-details-panel",level:3},{value:"Invoke done events",id:"invoke-done-events",level:3},{value:"How to create invoke done events in Stately Studio",id:"how-to-create-invoke-done-events-in-stately-studio",level:4},{value:"Invoke error events",id:"invoke-error-events",level:3},{value:"How to create invoke error events in Stately Studio",id:"how-to-create-invoke-error-events-in-stately-studio",level:4},{value:"API",id:"api",level:2},{value:"Source",id:"source",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Actor refs",id:"actor-refs",level:2},{value:"Actor snapshots",id:"actor-snapshots",level:2},{value:"<code>onDone</code>",id:"ondone",level:2},{value:"<code>onSnapshot</code>",id:"onsnapshot",level:2},{value:"<code>onError</code>",id:"onerror",level:2},{value:"Input",id:"input",level:2},{value:"Kinds of actors",id:"kinds-of-actors",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)},c=m("SkipDownLink"),p=m("EmbedMachine"),u=m("Plus"),h=m("Edit"),v=m("Info"),x={toc:s};function N(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"XState is based on the ",(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/actors"},"actor model"),". Invoked actors are managed by the state machine. Invoked actors are created and started when the state is entered, and stopped when the state is exited."),(0,o.mdx)("p",null,"Coming soon\u2026 invoking an actor: ",(0,o.mdx)("inlineCode",{parentName:"p"},"{ invoke: { src: ... } }"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Actors can also be invoked on the root of the machine. They last the lifetime of the machine")),(0,o.mdx)("p",null,"Coming soon\u2026 example of invoking an actor at root."),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/actors#invoking-and-spawning-actors"},"Read about the difference between invoking and spawning actors"),".")),(0,o.mdx)(c,{text:"Jump to learning more about the invoked actors API in XState",link:"#api",mdxType:"SkipDownLink"}),(0,o.mdx)("h2",{id:"using-invoked-actors-in-stately-studio"},"Using invoked actors in Stately Studio"),(0,o.mdx)("p",null,"You can invoke multiple actors on a single state. Top-level final states cannot have invoked actors."),(0,o.mdx)(p,{embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=66f77051-089e-4b0a-9fa9-42e1f7598135",name:"video player",mdxType:"EmbedMachine"}),(0,o.mdx)("p",null,"In the video player above, the\xa0",(0,o.mdx)("em",{parentName:"p"},"startVideo"),"\xa0actor is invoked when the video player is in the\xa0",(0,o.mdx)("em",{parentName:"p"},"Opened"),"\xa0state."),(0,o.mdx)("h3",{id:"invoke-actors-on-a-state"},"Invoke actors on a state"),(0,o.mdx)("p",null,"First, select the state where you want to invoke an actor."),(0,o.mdx)("h3",{id:"on-the-canvas"},"On the canvas"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select the state where you want to invoke an actor."),(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)(u,{size:18,mdxType:"Plus"})," plus icon button to open the edit menu."),(0,o.mdx)("li",{parentName:"ol"},"Choose ",(0,o.mdx)("strong",{parentName:"li"},"Invoked actor")," from the menu to add an invoked actor block to the event."),(0,o.mdx)("li",{parentName:"ol"},"Write your actor\u2019s source in the invoked actors\u2019s text input.")),(0,o.mdx)("h4",{id:"add-actor-source-logic-and-id"},"Add actor source logic and ID"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)(h,{size:18,mdxType:"Edit"})," edit icon button to open the ",(0,o.mdx)("strong",{parentName:"li"},"Invoked actor")," panel."),(0,o.mdx)("li",{parentName:"ol"},"Enter the actor\u2019s source logic in the ",(0,o.mdx)("strong",{parentName:"li"},"Source logic")," text input."),(0,o.mdx)("li",{parentName:"ol"},"Enter the actor\u2019s ID in the ",(0,o.mdx)("strong",{parentName:"li"},"Actor ID")," text input.")),(0,o.mdx)("h3",{id:"using-the-event-details-panel"},"Using the event details panel"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select the state where you want to invoke an actor."),(0,o.mdx)("li",{parentName:"ol"},"Open the state ",(0,o.mdx)(v,{size:18,mdxType:"Info"})," ",(0,o.mdx)("strong",{parentName:"li"},"Details")," panel from the right tool menu."),(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)("strong",{parentName:"li"},"+ Effect")," button to open the effects menu, and choose ",(0,o.mdx)("strong",{parentName:"li"},"Add invoked actor"),"."),(0,o.mdx)("li",{parentName:"ol"},"Use the ",(0,o.mdx)(h,{size:18,mdxType:"Edit"})," edit icon button to open the ",(0,o.mdx)("strong",{parentName:"li"},"Invoked actor")," panel."),(0,o.mdx)("li",{parentName:"ol"},"Enter the actor\u2019s source logic in the ",(0,o.mdx)("strong",{parentName:"li"},"Source logic")," text input."),(0,o.mdx)("li",{parentName:"ol"},"Enter the actor\u2019s ID in the ",(0,o.mdx)("strong",{parentName:"li"},"Actor ID")," text input.")),(0,o.mdx)("h3",{id:"invoke-done-events"},"Invoke done events"),(0,o.mdx)("p",null,"An\xa0",(0,o.mdx)("strong",{parentName:"p"},"invoke done event"),"\xa0transitions from a state once its invocation has been completed. An invoke done event is labeled \u201cdone:\u201d followed by the invocation\u2019s ID."),(0,o.mdx)("h4",{id:"how-to-create-invoke-done-events-in-stately-studio"},"How to create invoke done events in Stately Studio"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select the state with an invoked actor where you want to add an invoke done event."),(0,o.mdx)("li",{parentName:"ol"},"Press or drag from one of the ",(0,o.mdx)(u,{size:18,mdxType:"Plus"})," handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state."),(0,o.mdx)("li",{parentName:"ol"},"The newly-created event will automatically be created as an invoke done event.")),(0,o.mdx)("p",null,"You can also change an existing event into an invoked done event using the edit menu. The source state must have an invoked actor."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select the existing event you wish to change into an invoke done event."),(0,o.mdx)("li",{parentName:"ol"},"Right-click the state to open the edit menu."),(0,o.mdx)("li",{parentName:"ol"},"From the ",(0,o.mdx)("strong",{parentName:"li"},"Event type")," options, choose ",(0,o.mdx)("strong",{parentName:"li"},"Invocation done event"),".")),(0,o.mdx)("h3",{id:"invoke-error-events"},"Invoke error events"),(0,o.mdx)("p",null,"An\xa0",(0,o.mdx)("strong",{parentName:"p"},"invoke error event"),"\xa0transitions from a state when an error occurs in its invocation. An invoke error event is labeled \u201cerror:\u201d followed by the invocation\u2019s ID."),(0,o.mdx)("h4",{id:"how-to-create-invoke-error-events-in-stately-studio"},"How to create invoke error events in Stately Studio"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select the state with an invoked actor where you want to add an invoke error event."),(0,o.mdx)("li",{parentName:"ol"},"Press or drag from one of the ",(0,o.mdx)(u,{size:18,mdxType:"Plus"})," handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state."),(0,o.mdx)("li",{parentName:"ol"},"The newly-created event will automatically be created as an invoke done event."),(0,o.mdx)("li",{parentName:"ol"},"When an invoke done event already exists from that state, creating another event will automatically create that event as an invoke error event.")),(0,o.mdx)("p",null,"You can also change an existing event into an invoked error event using the edit menu. The source state must have an invoked actor."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select the existing event you wish to change into an invoke error event."),(0,o.mdx)("li",{parentName:"ol"},"Right-click the state to open the edit menu."),(0,o.mdx)("li",{parentName:"ol"},"From the ",(0,o.mdx)("strong",{parentName:"li"},"Event type")," options, choose ",(0,o.mdx)("strong",{parentName:"li"},"Invocation error event"),".")),(0,o.mdx)("h2",{id:"api"},"API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"invoke: { src: ... }")," - Invokes an actor.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"src")," - The actor to invoke."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"id")," - The ID of the actor."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"input")," - The input to pass to the actor."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"systemId")," - system-wide ID"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onDone")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onSnapshot")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onError"))))),(0,o.mdx)("h2",{id:"source"},"Source"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Represented by ",(0,o.mdx)("inlineCode",{parentName:"li"},"src")),(0,o.mdx)("li",{parentName:"ul"},"Can be inline: ",(0,o.mdx)("inlineCode",{parentName:"li"},"src: fromPromise(...)")),(0,o.mdx)("li",{parentName:"ul"},"Can be referenced: ",(0,o.mdx)("inlineCode",{parentName:"li"},"src: 'fetchUser'")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},".provide({ actors: ... })"))),(0,o.mdx)("h2",{id:"lifecycle"},"Lifecycle"),(0,o.mdx)("p",null,"Invoked actors have a lifecycle that is managed by the parent machine. They are created and started when the state is entered, and stopped when the state is exited."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Transitions that reenter the state stop invoked actors and start new invoked actors.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Don't want this? Set ",(0,o.mdx)("inlineCode",{parentName:"li"},"reenter: false")," or omit ",(0,o.mdx)("inlineCode",{parentName:"li"},"reenter")," altogether.")))),(0,o.mdx)("h2",{id:"actor-refs"},"Actor refs"),(0,o.mdx)("p",null,"Actors can be read on ",(0,o.mdx)("inlineCode",{parentName:"p"},"state.children.<actorId>"),". The returned value is an ",(0,o.mdx)("inlineCode",{parentName:"p"},"ActorRef")," object, and it has these properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"id")," - the ID of the actor"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"send()")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"getSnapshot()"))),(0,o.mdx)("h2",{id:"actor-snapshots"},"Actor snapshots"),(0,o.mdx)("p",null,"The actor snapshot is the latest emitted value from the actor. It can be read from ",(0,o.mdx)("inlineCode",{parentName:"p"},"actorRef.getSnapshot()"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The snapshot is not the same as the internal state; it is what the actor chooses to share with observers.")),(0,o.mdx)("h2",{id:"ondone"},(0,o.mdx)("inlineCode",{parentName:"h2"},"onDone")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Transitions when invoked actor is complete"),(0,o.mdx)("li",{parentName:"ul"},"Event gets ",(0,o.mdx)("inlineCode",{parentName:"li"},".output")," with actor's output data")),(0,o.mdx)("h2",{id:"onsnapshot"},(0,o.mdx)("inlineCode",{parentName:"h2"},"onSnapshot")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Transitions when invoked actor emits a new snapshot"),(0,o.mdx)("li",{parentName:"ul"},"Event gets ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," with actor's snapshot")),(0,o.mdx)("h2",{id:"onerror"},(0,o.mdx)("inlineCode",{parentName:"h2"},"onError")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Transitions when invoked actor throws an error"),(0,o.mdx)("li",{parentName:"ul"},"Event gets ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," with actor's error data")),(0,o.mdx)("h2",{id:"input"},"Input"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Actors can receive input. This is an event: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{ type: 'xstate.init', input: ... }"))),(0,o.mdx)("h2",{id:"kinds-of-actors"},"Kinds of actors"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/actors#promise-actor-logic"},"Promises")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/machines"},"Machines")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/actors#observable-actors"},"Observables")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/actors#transition-function-actors"},"Transition functions")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/actors#callback-actors"},"Callbacks"))),(0,o.mdx)("h2",{id:"typescript"},"TypeScript"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Coming soon")),(0,o.mdx)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Coming soon")))}N.isMDXComponent=!0}}]);