"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[17901],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(h,s(s({ref:n},l),{},{components:t})):a.createElement(h,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},74760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"Running machines",description:"Depending on where you\u2019re using XState, you\u2019ll likely need to run machines differently. We\u2019ll start with the VanillaJS approach for now."},o="Running machines",s={unversionedId:"xstate/running-machines/intro",id:"version-4/xstate/running-machines/intro",title:"Running machines",description:"Depending on where you\u2019re using XState, you\u2019ll likely need to run machines differently. We\u2019ll start with the VanillaJS approach for now.",source:"@site/versioned_docs/version-4/xstate/running-machines/intro.mdx",sourceDirName:"xstate/running-machines",slug:"/xstate/running-machines/intro",permalink:"/docs/xstate-v4/xstate/running-machines/intro",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/running-machines/intro.mdx",tags:[],version:"4",frontMatter:{title:"Running machines",description:"Depending on where you\u2019re using XState, you\u2019ll likely need to run machines differently. We\u2019ll start with the VanillaJS approach for now."},sidebar:"tutorialSidebar",previous:{title:"Running machines",permalink:"/docs/xstate-v4/category/xstate-running-machines"},next:{title:"XState in React",permalink:"/docs/xstate-v4/xstate/running-machines/react"}},c={},l=[{value:"Interpret",id:"interpret",level:2},{value:"State API",id:"state-api",level:2},{value:"Context",id:"context",level:3},{value:"<code>state.matches</code>",id:"statematches",level:3},{value:"Changed",id:"changed",level:3},{value:"Running machines as pure functions",id:"running-machines-as-pure-functions",level:2}],m={toc:l};function u(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"running-machines"},"Running machines"),(0,r.mdx)("p",null,"We\u2019ve now covered configuring statecharts and setting up their states, transitions, and options."),(0,r.mdx)("p",null,"Next, we need to learn how to ",(0,r.mdx)("em",{parentName:"p"},"execute")," our machines in code. Depending on where you\u2019re using XState, you\u2019ll likely need to run machines differently. We\u2019ll start with the VanillaJS approach for now."),(0,r.mdx)("h2",{id:"interpret"},"Interpret"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"interpret")," interpreter provides us with a \u201crunning\u201d and ",(0,r.mdx)("em",{parentName:"p"},"interactive")," version of our machine."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret } from 'xstate';\n\nconst machine = createMachine({});\n\nconst actor = interpret(machine).start();\n")),(0,r.mdx)("p",null,"In XState, we call that \u201crunning\u201d machine an ",(0,r.mdx)("strong",{parentName:"p"},"actor"),". The most common way to interact with an actor is to send it events:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret } from 'xstate';\n\nconst machine = createMachine(\n  {\n    on: {\n      SAY_HELLO: {\n        actions: 'sayHello',\n      },\n    },\n  },\n  {\n    actions: {\n      sayHello: () => {\n        console.log('Hello!');\n      },\n    },\n  }\n);\n\nconst actor = interpret(machine).start();\n\nactor.send({\n  type: 'SAY_HELLO',\n});\n\n// Logs 'Hello!'\n")),(0,r.mdx)("p",null,"You can also subscribe to the actor via ",(0,r.mdx)("inlineCode",{parentName:"p"},"actor.subscribe"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret } from 'xstate';\n\nconst machine = createMachine(\n  {\n    on: {\n      SAY_HELLO: {\n        actions: 'sayHello',\n      },\n    },\n  },\n  {\n    actions: {\n      sayHello: () => {\n        console.log('Hello!');\n      },\n    },\n  }\n);\n\nconst actor = interpret(machine).start();\n\n// Fires whenever the state changes\nconst { unsubscribe } = actor.subscribe((state) => {\n  console.log(\n    // We\u2019ll learn what goes inside here soon!\n    state\n  );\n});\n")),(0,r.mdx)("p",null,"You can also stop the actor by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"actor.stop()")," which cleans up the actor and runs any relevant exit actions:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret } from 'xstate';\n\nconst machine = createMachine(\n  {\n    on: {\n      SAY_HELLO: {\n        actions: 'sayHello',\n      },\n    },\n  },\n  {\n    actions: {\n      sayHello: () => {\n        console.log('Hello!');\n      },\n    },\n  }\n);\n\nconst actor = interpret(machine).start();\n\nactor.stop();\n")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"interpret")," can run ",(0,r.mdx)("em",{parentName:"p"},"anywhere JavaScript runs"),", which means you can run XState in the browser, Node, Electron, React Native\u2026 anywhere!"),(0,r.mdx)("p",null,"Check out the reference docs on the interpret API for a full deep dive into everything a ",(0,r.mdx)("inlineCode",{parentName:"p"},"actor")," can do."),(0,r.mdx)("h2",{id:"state-api"},"State API"),(0,r.mdx)("p",null,"When running your machine, you\u2019ll want to query the machine to understand which state it\u2019s in. When you run a machine using ",(0,r.mdx)("inlineCode",{parentName:"p"},"interpret"),", you can find the state as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret } from 'xstate';\n\nconst machine = createMachine({});\n\nconst actor = interpret(machine).start();\n\nconst state = actor.state;\n")),(0,r.mdx)("p",null,"You can also get an updated version when you subscribe to the state:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret } from 'xstate';\n\nconst machine = createMachine({});\n\nconst actor = interpret(machine).start();\n\nactor.subscribe((state) => {\n  console.log(state);\n});\n")),(0,r.mdx)("p",null,"This ",(0,r.mdx)("inlineCode",{parentName:"p"},"State")," class has a bunch of useful attributes and methods."),(0,r.mdx)("h3",{id:"context"},"Context"),(0,r.mdx)("p",null,"First, you can find the state\u2019s context using ",(0,r.mdx)("inlineCode",{parentName:"p"},"state.context"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret, assign } from 'xstate';\n\nconst machine = createMachine(\n  {\n    context: {\n      count: 0,\n    },\n    on: {\n      INCREMENT: {\n        actions: 'incrementCount',\n      },\n    },\n  },\n  {\n    actions: {\n      incrementCount: assign((context) => {\n        return {\n          count: context.count + 1,\n        };\n      }),\n    },\n  }\n);\n\nconst actor = interpret(machine).start();\n\nactor.subscribe((state) => {\n  console.log(state.context.count);\n});\n\nactor.send({ type: 'INCREMENT' });\n")),(0,r.mdx)("h3",{id:"statematches"},(0,r.mdx)("inlineCode",{parentName:"h3"},"state.matches")),(0,r.mdx)("p",null,"You can query which state the machine is in by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"state.matches()"),". ",(0,r.mdx)("inlineCode",{parentName:"p"},"state.matches()")," returns a boolean depending on whether you\u2019re in a matching state."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, interpret, assign } from 'xstate';\n\nconst machine = createMachine({\n  initial: 'toggledOff',\n  states: {\n    toggledOff: {\n      on: {\n        TOGGLE: 'toggledOn',\n      },\n    },\n    toggledOn: {\n      on: {\n        TOGGLE: 'toggledOff',\n      },\n    },\n  },\n});\n\nconst actor = interpret(machine).start();\n\nactor.subscribe((state) => {\n  const isToggledOn = state.matches('toggledOn');\n\n  console.log(isToggledOn); // true / false\n  console.log(state.value); // 'toggledOn' / 'toggledOff'\n});\n")),(0,r.mdx)("p",null,"You can also use ",(0,r.mdx)("inlineCode",{parentName:"p"},"state.value")," to check your machine\u2019s state, but we recommend using ",(0,r.mdx)("inlineCode",{parentName:"p"},"state.matches")," because of how it works with parent and child states. We\u2019ll talk more about parent states later. ",(0,r.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/xstate/states/advanced-transitions"},"Jump directly to parent and child states"),"."),(0,r.mdx)("h3",{id:"changed"},"Changed"),(0,r.mdx)("p",null,"You can check if a state was ",(0,r.mdx)("em",{parentName:"p"},"changed")," by the most recently received event. The state was changed if:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"There was a change in ",(0,r.mdx)("inlineCode",{parentName:"li"},"state.value"),". For example, moving from ",(0,r.mdx)("inlineCode",{parentName:"li"},"toggledOn")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"toggledOff"),"."),(0,r.mdx)("li",{parentName:"ol"},"A value in context was changed.")),(0,r.mdx)("h2",{id:"running-machines-as-pure-functions"},"Running machines as pure functions"),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"machine.transition")," to run your machine as a pure function without executing any of its actions. ",(0,r.mdx)("inlineCode",{parentName:"p"},"machine.transition")," is a pure function that takes two arguments:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"state"),", the ",(0,r.mdx)("inlineCode",{parentName:"li"},"State")," to transition from"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"event"),", the event that causes the transition")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"machine.transition")," returns a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"State")," resulting from taking all the transitions enabled by the current state and event."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const machine = createMachine({\n  /* ... */\n});\n\nconst initialState = machine.initialState;\n\n// determine next state based on current state and event\nconst yellowState = machine.transition(initialState, {\n  type: 'TIMER',\n});\n\nconsole.log(yellowState.value);\n// => 'yellow'\n")))}u.isMDXComponent=!0}}]);