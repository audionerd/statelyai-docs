"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[63960],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(t),p=r,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return t?o.createElement(h,i(i({ref:n},l),{},{components:t})):o.createElement(h,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},90557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"Promises",description:"The most common type of actors you\u2019ll invoke are promise actors. Promise actors allow you to await the result of a promise before deciding what to do next."},s=void 0,i={unversionedId:"xstate/actors/promises",id:"version-4/xstate/actors/promises",title:"Promises",description:"The most common type of actors you\u2019ll invoke are promise actors. Promise actors allow you to await the result of a promise before deciding what to do next.",source:"@site/versioned_docs/version-4/xstate/actors/promises.mdx",sourceDirName:"xstate/actors",slug:"/xstate/actors/promises",permalink:"/statelyai-docs/docs/xstate-v4/xstate/actors/promises",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/actors/promises.mdx",tags:[],version:"4",frontMatter:{title:"Promises",description:"The most common type of actors you\u2019ll invoke are promise actors. Promise actors allow you to await the result of a promise before deciding what to do next."},sidebar:"tutorialSidebar",previous:{title:"Actors",permalink:"/statelyai-docs/docs/xstate-v4/xstate/actors/intro"},next:{title:"Actions vs. actors",permalink:"/statelyai-docs/docs/xstate-v4/xstate/actors/actions-vs-actors"}},c={},l=[{value:"<code>onDone</code> in invoke vs. <code>onDone</code> in states",id:"ondone-in-invoke-vs-ondone-in-states",level:3}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"The most common type of actors you\u2019ll invoke are ",(0,r.mdx)("strong",{parentName:"p"},"promise actors"),". Promise actors allow you to await the result of a promise before deciding what to do next."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, assign } from 'xstate';\n\n// Function that returns a promise\n// This promise might resolve with, e.g.,\n// { name: 'David', location: 'Florida' }\nconst fetchUser = (userId: number) =>\n  fetch(`url/to/user/${userId}`).then((response) => response.json());\n\nconst userMachine = createMachine(\n  {\n    context: {\n      userId: 42,\n    },\n    invoke: { src: 'fetchUser' },\n  },\n  {\n    // `actors` in v5\n    services: {\n      fetchUser: (context) => {\n        return fetchUser(context.userId);\n      },\n    },\n  }\n);\n")),(0,r.mdx)("admonition",{type:"warningxstate"},(0,r.mdx)("p",{parentName:"admonition"},"XState v5 is in beta. ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/xstate/v/5.0.0-beta.13"},"Check out XState v5 Beta on NPM"),".")),(0,r.mdx)("p",null,"When a promise actor is resolved, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"done.invoke")," event is sent back to the machine which includes its data, placed under the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data")," property. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'done.invoke.<id>',\n  data: {\n    name: 'David',\n    location: 'Florida'\n  }\n}\n")),(0,r.mdx)("p",null,"You can listen for this event by providing an ",(0,r.mdx)("inlineCode",{parentName:"p"},"onDone")," to the invoke attribute:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, assign } from 'xstate';\n\n// Function that returns a promise\n// This promise might resolve with, e.g.,\n// { name: 'David', location: 'Florida' }\nconst fetchUser = (userId: number) =>\n  fetch(`url/to/user/${userId}`).then((response) => response.json());\n\nconst userMachine = createMachine(\n  {\n    context: {\n      userId: 42,\n    },\n    invoke: {\n      src: 'fetchUser',\n      onDone: [\n        {\n          cond: 'hasData',\n          actions: 'logUserData',\n        },\n      ],\n    },\n  },\n  {\n    // `actors` in v5\n    services: {\n      fetchUser: (context) => {\n        return fetchUser(context.userId);\n      },\n    },\n    guards: {\n      hasData: (context, event) => {\n        return Boolean(event.data);\n      },\n    },\n    actions: {\n      logUserData: (context, event) => {\n        console.log(event.data);\n      },\n    },\n  }\n);\n")),(0,r.mdx)("p",null,"If the state where the invoked promise is active is exited before the promise settles, the result of the promise is discarded."),(0,r.mdx)("p",null,"If the promise errors, an ",(0,r.mdx)("inlineCode",{parentName:"p"},"error.platform.<id>")," event will be fired, with the error on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data")," attribute. You can listen for this error by adding ",(0,r.mdx)("inlineCode",{parentName:"p"},"onError")," to your ",(0,r.mdx)("inlineCode",{parentName:"p"},"invoke")," attribute:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createMachine, assign } from 'xstate';\n\n// Function that returns a promise\n// This promise might resolve with, e.g.,\n// { name: 'David', location: 'Florida' }\nconst fetchUser = (userId: number) =>\n  fetch(`url/to/user/${userId}`).then((response) => response.json());\n\nconst userMachine = createMachine(\n  {\n    context: {\n      userId: 42,\n    },\n    invoke: {\n      src: 'fetchUser',\n      onError: {\n        actions: 'consoleLogError',\n      },\n    },\n  },\n  {\n    actions: {\n      consoleLogError: (context, event) => {\n        console.log(event.data.message);\n      },\n    },\n  }\n);\n")),(0,r.mdx)("p",null,"In the example above, if ",(0,r.mdx)("inlineCode",{parentName:"p"},"fetchUser")," fails, the error message will be logged to the console."),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onError")," transition is missing and the Promise is rejected, the error will be ignored, which is why it\u2019s important ",(0,r.mdx)("em",{parentName:"p"},"always")," to define ",(0,r.mdx)("inlineCode",{parentName:"p"},"onError")," transitions."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onDone")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"onError")," transitions are just like any other transition. You can use conds, fire actions and target other states. These transitions give you a declarative way of handling successes and errors."),(0,r.mdx)("h3",{id:"ondone-in-invoke-vs-ondone-in-states"},(0,r.mdx)("inlineCode",{parentName:"h3"},"onDone")," in invoke vs. ",(0,r.mdx)("inlineCode",{parentName:"h3"},"onDone")," in states"),(0,r.mdx)("p",null,"Note that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onDone")," in invoke and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onDone")," on states are different. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onDone")," for states is triggered when its child reaches a final state."))}m.isMDXComponent=!0}}]);