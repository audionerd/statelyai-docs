"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[86013],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"React Patterns",description:"Using React hooks are the easiest way to use state machines in your components. Use the official @xstate/react package to give you useful hooks out of the box."},s="React Patterns",i={unversionedId:"xstate/advanced/react-patterns",id:"version-4/xstate/advanced/react-patterns",title:"React Patterns",description:"Using React hooks are the easiest way to use state machines in your components. Use the official @xstate/react package to give you useful hooks out of the box.",source:"@site/versioned_docs/version-4/xstate/advanced/react-patterns.mdx",sourceDirName:"xstate/advanced",slug:"/xstate/advanced/react-patterns",permalink:"/statelyai-docs/docs/xstate-v4/xstate/advanced/react-patterns",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/advanced/react-patterns.mdx",tags:[],version:"4",frontMatter:{title:"React Patterns",description:"Using React hooks are the easiest way to use state machines in your components. Use the official @xstate/react package to give you useful hooks out of the box."},sidebar:"tutorialSidebar",previous:{title:"Advanced Topics",permalink:"/statelyai-docs/docs/xstate-v4/category/xstate-advanced-topics"},next:{title:"SCXML",permalink:"/statelyai-docs/docs/xstate-v4/xstate/advanced/scxml"}},c={},l=[{value:"Local state",id:"local-state",level:2},{value:"Global State/React Context",id:"global-statereact-context",level:2},{value:"Context Provider",id:"context-provider",level:3},{value:"Utilizing context",id:"utilizing-context",level:3},{value:"Improving Performance",id:"improving-performance",level:3},{value:"Dispatching events",id:"dispatching-events",level:3},{value:"Other hooks",id:"other-hooks",level:2},{value:"Named actions/actors/guards",id:"named-actionsactorsguards",level:3},{value:"Syncing data with useEffect",id:"syncing-data-with-useeffect",level:3},{value:"Class components",id:"class-components",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"react-patterns"},"React Patterns"),(0,o.mdx)("p",null,"At ",(0,o.mdx)("a",{parentName:"p",href:"https://stately.ai"},"Stately"),", we love this combo. It\u2019s our go-to stack for creating internal applications."),(0,o.mdx)("p",null,"To ask for help, check out the ",(0,o.mdx)("a",{parentName:"p",href:"https://discord.gg/vedXj62MfQ"},(0,o.mdx)("inlineCode",{parentName:"a"},"#react-help")," channel in our Discord community"),"."),(0,o.mdx)("h2",{id:"local-state"},"Local state"),(0,o.mdx)("p",null,"Using ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/hooks"},"React hooks")," are the easiest way to use state machines in your components. You can use the official ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-react"},(0,o.mdx)("inlineCode",{parentName:"a"},"@xstate/react"))," to give you useful hooks out of the box, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"useMachine"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import { useMachine } from '@xstate/react';\nimport { toggleMachine } from '../path/to/toggleMachine';\n\nfunction Toggle() {\n  const [current, send] = useMachine(toggleMachine);\n\n  return (\n    <button onClick={() => send('TOGGLE')}>\n      {current.matches('inactive') ? 'Off' : 'On'}\n    </button>\n  );\n}\n")),(0,o.mdx)("h2",{id:"global-statereact-context"},"Global State/React Context"),(0,o.mdx)("p",null,"Our recommended approach for managing global state with XState and React is to use ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),"."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"There are two versions of 'context': XState\u2019s ",(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/xstate/actions/context"},"context")," and React\u2019s context. It\u2019s a little confusing!")),(0,o.mdx)("h3",{id:"context-provider"},"Context Provider"),(0,o.mdx)("p",null,"React context can be a tricky tool to work with - if you pass in values which change too often, it can result in re-renders all the way down the tree. That means we need to pass in values which change as little as possible."),(0,o.mdx)("p",null,"Luckily, XState gives us a first-class way to do that: ",(0,o.mdx)("inlineCode",{parentName:"p"},"useInterpret"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React, { createContext } from 'react';\nimport { useInterpret } from '@xstate/react';\nimport { authMachine } from './authMachine';\n\nexport const AuthActorContext = createContext({});\n\nexport const GlobalStateProvider = (props) => {\n  const authActor = useInterpret(authMachine);\n\n  return (\n    <AuthActorContext.Provider value={authActor}>\n      {props.children}\n    </AuthActorContext.Provider>\n  );\n};\n")),(0,o.mdx)("p",null,"Using ",(0,o.mdx)("inlineCode",{parentName:"p"},"useInterpret")," returns an actor, which is a static reference to the running machine which can be subscribed to. This value never changes, so we don't need to worry about wasted re-renders."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"For Typescript, you can create the context as ",(0,o.mdx)("inlineCode",{parentName:"p"},"createContext({} as InterpreterFrom<typeof authMachine>);")," to ensure strong typings.")),(0,o.mdx)("h3",{id:"utilizing-context"},"Utilizing context"),(0,o.mdx)("p",null,"Further down the tree, you can subscribe to the actor like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react';\nimport { AuthActorContext } from './globalState';\nimport { useActor } from '@xstate/react';\n\nexport const SomeComponent = (props) => {\n  const authActor = useContext(AuthActorContext);\n  const [state] = useActor(authActor);\n\n  return state.matches('loggedIn') ? 'Logged In' : 'Logged Out';\n};\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"useActor")," hook listens for whenever the actor changes, and updates the state value."),(0,o.mdx)("h3",{id:"improving-performance"},"Improving Performance"),(0,o.mdx)("p",null,"There's an issue with the implementation above - this will update the component for any change to the actor. Tools like ",(0,o.mdx)("a",{parentName:"p",href:"https://redux.js.org"},"Redux")," use ",(0,o.mdx)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},(0,o.mdx)("inlineCode",{parentName:"a"},"selectors"))," for deriving state. Selectors are functions which restrict which parts of the state can result in components re-rendering."),(0,o.mdx)("p",null,"Fortunately, XState exposes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useSelector")," hook."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react';\nimport { AuthActorContext } from './globalState';\nimport { useSelector } from '@xstate/react';\n\nconst loggedInSelector = (state) => {\n  return state.matches('loggedIn');\n};\n\nexport const SomeComponent = (props) => {\n  const authActor = useContext(AuthActorContext);\n  const isLoggedIn = useSelector(authActor, loggedInSelector);\n\n  return isLoggedIn ? 'Logged In' : 'Logged Out';\n};\n")),(0,o.mdx)("p",null,"If you need to send an event in the component that consumes an actor, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"actor.send(...)")," method directly:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react';\nimport { AuthActorContext } from './globalState';\nimport { useSelector } from '@xstate/react';\n\nconst loggedInSelector = (state) => {\n  return state.matches('loggedIn');\n};\n\nexport const SomeComponent = (props) => {\n  const authActor = useContext(AuthActorContext);\n  const isLoggedIn = useSelector(authActor, loggedInSelector);\n  // Get `send()` method from an actor\n  const { send } = authActor;\n\n  return (\n    <>\n      {isLoggedIn && (\n        <button type=\"button\" onClick={() => send('LOG_OUT')}>\n          Logout\n        </button>\n      )}\n    </>\n  );\n};\n")),(0,o.mdx)("p",null,"This component will only re-render when ",(0,o.mdx)("inlineCode",{parentName:"p"},"state.matches('loggedIn')")," returns a different value. This is our recommended approach over ",(0,o.mdx)("inlineCode",{parentName:"p"},"useActor")," for when you want to optimise performance."),(0,o.mdx)("h3",{id:"dispatching-events"},"Dispatching events"),(0,o.mdx)("p",null,"For dispatching events to the global store, you can call an actor's ",(0,o.mdx)("inlineCode",{parentName:"p"},"send")," function directly."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react';\nimport { AuthActorContext } from './globalState';\n\nexport const SomeComponent = (props) => {\n  const authActor = useContext(AuthActorContext);\n\n  return <button onClick={() => authActor.send('LOG_OUT')}>Log Out</button>;\n};\n")),(0,o.mdx)("p",null,"Note that you don\u2019t need to call ",(0,o.mdx)("inlineCode",{parentName:"p"},"useActor")," for this, it\u2019s available right on the context."),(0,o.mdx)("h2",{id:"other-hooks"},"Other hooks"),(0,o.mdx)("p",null,"XState\u2019s ",(0,o.mdx)("inlineCode",{parentName:"p"},"useMachine")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"useInterpret")," hooks can be used alongside others. Two patterns are most common:"),(0,o.mdx)("h3",{id:"named-actionsactorsguards"},"Named actions/actors/guards"),(0,o.mdx)("p",null,"Let\u2019s imagine that when you navigate to a certain state, you want to leave the page and go somewhere else, via ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-router")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"next"),". For now, we\u2019ll declare that action as a \u2018named\u2019 action - where we name it now and declare it later."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import { createMachine } from 'xstate';\n\nexport const machine = createMachine({\n  initial: 'toggledOff',\n  states: {\n    toggledOff: {\n      on: {\n        TOGGLE: 'toggledOn',\n      },\n    },\n    toggledOn: {\n      entry: ['goToOtherPage'],\n    },\n  },\n});\n")),(0,o.mdx)("p",null,"Inside your component, you can now ",(0,o.mdx)("em",{parentName:"p"},"implement")," the named action. I've added ",(0,o.mdx)("inlineCode",{parentName:"p"},"useHistory")," from ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-router")," as an example, but you can imagine this working with any hook or prop-based router."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import { machine } from './machine';\nimport { useMachine } from '@xstate/react';\nimport { useHistory } from 'react-router';\n\nconst Component = () => {\n  const history = useHistory();\n\n  const [state, send] = useMachine(machine, {\n    actions: {\n      goToOtherPage: () => {\n        history.push('/other-page');\n      },\n    },\n  });\n\n  return null;\n};\n")),(0,o.mdx)("p",null,"This also works for actors, guards, and delays."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If you use this technique, any references you use inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"goToOtherPage")," will be kept up to date each render. That means you don\u2019t need to worry about stale references.")),(0,o.mdx)("h3",{id:"syncing-data-with-useeffect"},"Syncing data with useEffect"),(0,o.mdx)("p",null,"Sometimes, you want to outsource some functionality to another hook. This is especially common with data fetching hooks such as ",(0,o.mdx)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},(0,o.mdx)("inlineCode",{parentName:"a"},"react-query"))," and ",(0,o.mdx)("a",{parentName:"p",href:"https://swr.vercel.app/"},(0,o.mdx)("inlineCode",{parentName:"a"},"swr")),". You don\u2019t want to have to re-build all your data fetching functionality in XState."),(0,o.mdx)("p",null,"The best way to manage this is via ",(0,o.mdx)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const Component = () => {\n  const { data, error } = useSWR('/api/user', fetcher);\n\n  const [state, send] = useMachine(machine);\n\n  useEffect(() => {\n    send({\n      type: 'DATA_CHANGED',\n      data,\n      error,\n    });\n  }, [data, error, send]);\n};\n")),(0,o.mdx)("p",null,"This will send a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DATA_CHANGED")," event whenever the result from ",(0,o.mdx)("inlineCode",{parentName:"p"},"useSWR")," changes, allowing you to react to it just like any other event. You could, for instance:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Move into an ",(0,o.mdx)("inlineCode",{parentName:"li"},"errored")," state when the data returns an error"),(0,o.mdx)("li",{parentName:"ul"},"Save the data to context")),(0,o.mdx)("h2",{id:"class-components"},"Class components"),(0,o.mdx)("p",null,"If you\u2019re using class components, here's an example implementation that doesn\u2019t rely on hooks."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"machine")," is interpreted and its ",(0,o.mdx)("inlineCode",{parentName:"li"},"actor")," instance is placed on the component instance."),(0,o.mdx)("li",{parentName:"ul"},"For local state, ",(0,o.mdx)("inlineCode",{parentName:"li"},"this.state.current")," will hold the current machine state. You can use a property name other than ",(0,o.mdx)("inlineCode",{parentName:"li"},".current"),"."),(0,o.mdx)("li",{parentName:"ul"},"When the component is mounted, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"actor")," is started via ",(0,o.mdx)("inlineCode",{parentName:"li"},"this.actor.start()"),"."),(0,o.mdx)("li",{parentName:"ul"},"When the component will unmount, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"actor")," is stopped via ",(0,o.mdx)("inlineCode",{parentName:"li"},"this.actor.stop()"),"."),(0,o.mdx)("li",{parentName:"ul"},"Events are sent to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"actor")," via ",(0,o.mdx)("inlineCode",{parentName:"li"},"this.actor.send(event)"),".")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { interpret } from 'xstate';\nimport { toggleMachine } from '../path/to/toggleMachine';\n\nclass Toggle extends React.Component {\n  state = {\n    current: toggleMachine.initialState,\n  };\n\n  actor = interpret(toggleMachine).onTransition((current) =>\n    this.setState({ current })\n  );\n\n  componentDidMount() {\n    this.actor.start();\n  }\n\n  componentWillUnmount() {\n    this.actor.stop();\n  }\n\n  render() {\n    const { current } = this.state;\n    const { send } = this.actor;\n\n    return (\n      <button onClick={() => send('TOGGLE')}>\n        {current.matches('inactive') ? 'Off' : 'On'}\n      </button>\n    );\n  }\n}\n")))}m.isMDXComponent=!0}}]);