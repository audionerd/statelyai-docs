"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[11858],{3905:(n,e,t)=>{t.r(e),t.d(e,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(){return r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},r.apply(this,arguments)}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=a.createContext({}),d=function(n){return function(e){var t=p(e.components);return a.createElement(n,r({},e,{components:t}))}},p=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},m=function(n){var e=p(n.components);return a.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,s(s({ref:e},c),{},{components:t})):a.createElement(h,s({ref:e},c))}));function y(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},44004:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"Always"},o="Always",s={unversionedId:"xstate/transitions-and-choices/always",id:"version-4/xstate/transitions-and-choices/always",title:"Always",description:"Sometimes you\u2019ll need to make checks in your statechart\u2019s current state without receiving an event. You can do this with an eventless transition.",source:"@site/versioned_docs/version-4/xstate/transitions-and-choices/always.mdx",sourceDirName:"xstate/transitions-and-choices",slug:"/xstate/transitions-and-choices/always",permalink:"/statelyai-docs/docs/xstate-v4/xstate/transitions-and-choices/always",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/transitions-and-choices/always.mdx",tags:[],version:"4",frontMatter:{title:"Always"},sidebar:"tutorialSidebar",previous:{title:"Guarded actions",permalink:"/statelyai-docs/docs/xstate-v4/xstate/transitions-and-choices/guarded-actions"},next:{title:"After",permalink:"/statelyai-docs/docs/xstate-v4/xstate/transitions-and-choices/after"}},l={},c=[{value:"Adding guards",id:"adding-guards",level:2},{value:"Reducing duplication",id:"reducing-duplication",level:2},{value:"Beware of infinite loops",id:"beware-of-infinite-loops",level:2}],d={toc:c};function p(n){let{components:e,...t}=n;return(0,i.mdx)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"always"},"Always"),(0,i.mdx)("p",null,"Sometimes you\u2019ll need to make checks in your statechart\u2019s current state ",(0,i.mdx)("em",{parentName:"p"},"without")," receiving an event. You can do this with an eventless transition."),(0,i.mdx)("p",null,"Eventless transitions are transitions without events. These transitions are ",(0,i.mdx)("strong",{parentName:"p"},"always")," taken after any transition in their state if enabled. Eventless transitions are labeled \u201calways\u201d and often referred to as \u201calways\u201d transitions."),(0,i.mdx)("p",null,"A simple example is a state that always transitions from ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"b"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine({\n  initial: 'a',\n  states: {\n    a: {\n      always: [\n        {\n          target: 'b',\n        },\n      ],\n    },\n    b: {},\n  },\n});\n")),(0,i.mdx)("p",null,"Using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"always")," transition means that ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," will ",(0,i.mdx)("em",{parentName:"p"},"instantly")," transition to ",(0,i.mdx)("inlineCode",{parentName:"p"},"b")," when the machine enters the ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," state."),(0,i.mdx)("h2",{id:"adding-guards"},"Adding guards"),(0,i.mdx)("p",null,"You can also pair ",(0,i.mdx)("inlineCode",{parentName:"p"},"always")," transitions with a guard:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\nconst machine = createMachine(\n  {\n    initial: 'a',\n    states: {\n      a: {\n        // highlight-start\n        always: [\n          {\n            cond: 'shouldTransition',\n            target: 'b',\n          },\n        ],\n        // highlight-end\n      },\n      b: {},\n    },\n  },\n  {\n    guards: {\n      shouldTransition: (ctx) => ctx.user.role === 'admin',\n    },\n  }\n);\n")),(0,i.mdx)("p",null,"In the example above, the transition will only happen when ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldTransition")," returns true. Otherwise, the machine will stay in the same state."),(0,i.mdx)("p",null,"\u201cAlways\u201d transitions are checked immediately when the machine enters the state node, after checking for regular transitions and before checking if there are any transitions for any other queued events."),(0,i.mdx)("h2",{id:"reducing-duplication"},"Reducing duplication"),(0,i.mdx)("p",null,"\u201cAlways\u201d transitions are extremely useful for reducing duplication in guards, along with other uses."),(0,i.mdx)("p",null,"Example without ",(0,i.mdx)("inlineCode",{parentName:"p"},"always"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"\nimport { createMachine, assign } from 'xstate';\n\nconst gameMachine = createMachine(\n  {\n    initial: 'playing',\n    context: {\n      points: 0,\n    },\n    states: {\n      // highlight-start\n      playing: {\n        on: {\n          AWARD_POINTS: [\n          // highlight-end\n            {\n              cond: 'didPlayerWin',\n              actions: 'awardPoints',\n              target: 'win',\n            },\n            {\n              cond: 'didPlayerLose',\n              actions: 'awardPoints',\n              target: 'lose',\n            },\n            {\n              actions: 'awardPoints',\n            },\n          ],\n          MAKE_MOVE: [\n            {\n              cond: 'didPlayerWin',\n              actions: 'doMove',\n              target: 'win',\n            },\n            {\n              cond: 'didPlayerLose',\n              actions: 'doMove'\n              target: 'lose',\n            },\n            {\n              actions: 'doMove'\n            },\n          ],\n        },\n      },\n      win: {},\n      lose: {},\n    },\n  },\n  {\n    actions: {\n      awardPoints: assign({\n        points: (context) => context.points + 100,\n      }),\n      makeMove: assign({\n        points: (context) => context.points + Math.floor(Math.random() * 10),\n      }),\n    },\n    guards: {\n      didPlayerWin: (context, event) => {\n        return context.points > 99;\n      },\n      didPlayerLose: (context, event) => {\n        return context.points < 0;\n      },\n    },\n  }\n);\n")),(0,i.mdx)("p",null,"Example with ",(0,i.mdx)("inlineCode",{parentName:"p"},"always"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"\nimport { createMachine, assign } from 'xstate';\n\nconst gameMachine = createMachine(\n  {\n    initial: 'playing',\n    context: {\n      points: 0,\n    },\n    states: {\n      // highlight-start\n      playing: {\n        always: [\n          { target: 'win', cond: 'didPlayerWin' },\n          { target: 'lose', cond: 'didPlayerLose' },\n        ],\n      // highlight-end\n        on: {\n          AWARD_POINTS: {\n            actions: 'awardPoints',\n          },\n          MAKE_MOVE: {\n            actions: 'makeMove',\n          },\n        },\n      },\n      win: {},\n      lose: {},\n    },\n  },\n  {\n    actions: {\n      awardPoints: assign({\n        points: (context) => context.points + 100,\n      }),\n      makeMove: assign({\n        points: (context) => context.points + Math.floor(Math.random() * 10),\n      }),\n    },\n    guards: {\n      didPlayerWin: (context, event) => {\n        return context.points > 99;\n      },\n      didPlayerLose: (context, event) => {\n        return context.points < 0;\n      },\n    },\n  }\n);\n")),(0,i.mdx)("h2",{id:"beware-of-infinite-loops"},"Beware of infinite loops"),(0,i.mdx)("p",null,"Since unguarded \u201calways\u201d transitions always run, you should be careful not to create an infinite loop."),(0,i.mdx)("p",null,"Let\u2019s revisit our initial example and add a transition back to ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," from ",(0,i.mdx)("inlineCode",{parentName:"p"},"b"),". Here we add it using an \u201calways\u201d transition, which is not good. This machine will run forever and just keep transitioning between the two states."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine } from 'xstate';\n\n/* \ud83d\udea8 Don't do this at home \ud83d\udea8 */\nconst infiniteLoopMachine = createMachine({\n  initial: 'a',\n  states: {\n    a: {\n      always: [\n        {\n          target: 'b',\n        },\n      ],\n    },\n    b: {\n      always: [\n        {\n          target: 'a',\n        },\n      ],\n    },\n  },\n});\n")))}p.isMDXComponent=!0}}]);