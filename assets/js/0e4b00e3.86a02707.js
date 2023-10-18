"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[14624],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){return function(n){var t=p(n.components);return a.createElement(e,r({},n,{components:t}))}},p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=v;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},17385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={title:"Why I love invoked callbacks",description:"I\u2019ve written a bit about services, but today I wanted to talk about my favourite way of expressing services: the Invoked Callback.",tags:["services","invoked callback","state machine","xstate"],authors:["matt"],image:"/blog/2021-05-13-why-i-love-invoked-callbacks.png",slug:"2021-05-13-why-i-love-invoked-callbacks",date:new Date("2021-05-13T00:00:00.000Z")},s=void 0,i={permalink:"/blog/2021-05-13-why-i-love-invoked-callbacks",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2021-05-13-why-i-love-invoked-callbacks/index.mdx",source:"@site/blog/2021-05-13-why-i-love-invoked-callbacks/index.mdx",title:"Why I love invoked callbacks",description:"I\u2019ve written a bit about services, but today I wanted to talk about my favourite way of expressing services: the Invoked Callback.",date:"2021-05-13T00:00:00.000Z",formattedDate:"May 13, 2021",tags:[{label:"services",permalink:"/blog/tags/services"},{label:"invoked callback",permalink:"/blog/tags/invoked-callback"},{label:"state machine",permalink:"/blog/tags/state-machine"},{label:"xstate",permalink:"/blog/tags/xstate"}],readingTime:3.32,hasTruncateMarker:!0,authors:[{name:"Matt Pocock",title:"Stately Team",url:"https://github.com/mattpocock",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/matt.png",key:"matt"}],frontMatter:{title:"Why I love invoked callbacks",description:"I\u2019ve written a bit about services, but today I wanted to talk about my favourite way of expressing services: the Invoked Callback.",tags:["services","invoked callback","state machine","xstate"],authors:["matt"],image:"/blog/2021-05-13-why-i-love-invoked-callbacks.png",slug:"2021-05-13-why-i-love-invoked-callbacks",date:"2021-05-13T00:00:00.000Z"},prevItem:{title:"How to manage global state with XState and React",permalink:"/blog/2021-05-27-global-state-xstate-react"},nextItem:{title:"Should this be an action, or a service?",permalink:"/blog/2021-04-30-should-this-be-an-action-or-a-service"}},l={authorsImageUrls:[void 0]},c=[{value:"File Uploads",id:"file-uploads",level:2},{value:"Event Listeners",id:"event-listeners",level:2},{value:"Websockets",id:"websockets",level:2},{value:"My Love Letter",id:"my-love-letter",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"XState offers several primitives for representing long-running application processes. These are usually expressed as ",(0,o.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/communication.html"},"services"),". I\u2019ve written a bit about services ",(0,o.mdx)("a",{parentName:"p",href:"https://dev.to/mpocock1/xstate-should-this-be-an-action-or-a-service-2cp0"},"here")," - but today I wanted to talk about my favourite way of expressing services: the Invoked Callback."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/communication.html#invoking-callbacks"},"Invoked Callback")," combines immense flexibility with good readability and a solid Typescript experience. They look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"createMachine({\n  invoke: {\n    src: (context, event) => (send, onReceive) => {\n      // Run any code you like inside here\n\n      return () => {\n        // Any code inside here will be called when\n        // you leave this state, or the machine is stopped\n      };\n    },\n  },\n});\n")),(0,o.mdx)("p",null,"Let\u2019s break this down. You get access to ",(0,o.mdx)("inlineCode",{parentName:"p"},"context")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"event"),", just like promise-based services. But ",(0,o.mdx)("inlineCode",{parentName:"p"},"send")," is where things really get interesting. Let\u2019s break down what makes ",(0,o.mdx)("inlineCode",{parentName:"p"},"send")," useful with an example."),(0,o.mdx)("h2",{id:"file-uploads"},"File Uploads"),(0,o.mdx)("p",null,"Imagine you need to build a file uploader, and you have a handy function called ",(0,o.mdx)("inlineCode",{parentName:"p"},"startUpload")," that uploads some data, and exposes an ",(0,o.mdx)("inlineCode",{parentName:"p"},"onProgressUpdate")," parameter to update the progress."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},'createMachine({\n  context: {\n    progress: 0,\n  },\n  initial: "idle",\n  states: {\n    idle: {\n      on: {\n        START: "pending",\n      },\n    },\n    pending: {\n      on: {\n        PROGRESS_UPDATED: {\n          assign: assign({\n            progress: (context, event) => event.progress,\n          }),\n        },\n        CANCEL: {\n          target: "idle",\n        },\n      },\n      invoke: {\n        src: (context) => (send) => {\n          const uploader = startUpload({\n            onProgressUpdate: (progress) => {\n              send({\n                type: "PROGRESS_UPDATED",\n                progress,\n              });\n            },\n          });\n\n          return () => {\n            uploader.cancel();\n          };\n        },\n      },\n    },\n  },\n});\n')),(0,o.mdx)("p",null,"This machine starts in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"idle")," state, but on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"START")," event begins its invoked service, which uploads the file. It then listens for ",(0,o.mdx)("inlineCode",{parentName:"p"},"PROGRESS_UPDATED")," events, and updates the context based on its updates."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"CANCEL")," event will trigger the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uploader.cancel()")," function, which gets called when the state is left. React users may recognise this syntax - it\u2019s the same as the cleanup function in the ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect"},"useEffect hook"),"."),(0,o.mdx)("p",null,"Note how simple and idiomatic it is to cancel the uploader - just exit the state, and the service gets cleaned up."),(0,o.mdx)("h2",{id:"event-listeners"},"Event Listeners"),(0,o.mdx)("p",null,"The invoked callback\u2019s cleanup function makes it very useful for event listeners, for instance ",(0,o.mdx)("inlineCode",{parentName:"p"},"window.addEventListener()"),". XState Catalogue\u2019s ",(0,o.mdx)("a",{parentName:"p",href:"https://xstate-catalogue.com/machines/tab-focus"},"Tab Focus Machine")," is a perfect example of this - copied here for ease:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},'createMachine(\n  {\n    initial: "userIsOnTab",\n    states: {\n      userIsOnTab: {\n        invoke: {\n          src: "checkForDocumentBlur",\n        },\n        on: {\n          REPORT_TAB_BLUR: "userIsNotOnTab",\n        },\n      },\n      userIsNotOnTab: {\n        invoke: {\n          src: "checkForDocumentFocus",\n        },\n        on: {\n          REPORT_TAB_FOCUS: "userIsOnTab",\n        },\n      },\n    },\n  },\n  {\n    services: {\n      checkForDocumentBlur: () => (send) => {\n        const listener = () => {\n          send("REPORT_TAB_BLUR");\n        };\n\n        window.addEventListener("blur", listener);\n\n        return () => {\n          window.removeEventListener("blur", listener);\n        };\n      },\n      checkForDocumentFocus: () => (send) => {\n        const listener = () => {\n          send("REPORT_TAB_FOCUS");\n        };\n\n        window.addEventListener("focus", listener);\n\n        return () => {\n          window.removeEventListener("focus", listener);\n        };\n      },\n    },\n  }\n);\n')),(0,o.mdx)("p",null,"When in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"userIsOnTab")," state, we listen for the window\u2019s ",(0,o.mdx)("inlineCode",{parentName:"p"},"blur")," event. When that happens, and ",(0,o.mdx)("inlineCode",{parentName:"p"},"REPORT_TAB_BLUR")," is fired, we clean up the event listener and head right on over to ",(0,o.mdx)("inlineCode",{parentName:"p"},"userIsNotOnTab"),", where we fire up the other service."),(0,o.mdx)("h2",{id:"websockets"},"Websockets"),(0,o.mdx)("p",null,"Invoked callbacks can also receive events via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onReceive")," function. This is perfect when you need to communicate to your service, such as sending events to websockets."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},'import { createMachine, forwardTo } from "xstate";\n\ncreateMachine({\n  on: {\n    SEND: {\n      actions: forwardTo("websocket"),\n    },\n  },\n  invoke: {\n    id: "websocket",\n    src: () => (send, onReceive) => {\n      const websocket = connectWebsocket();\n\n      onReceive((event) => {\n        if (event.type === "SEND") {\n          websocket.send(event.message);\n        }\n      });\n\n      return () => {\n        websocket.disconnect();\n      };\n    },\n  },\n});\n')),(0,o.mdx)("p",null,"In order to receive events, services need an ",(0,o.mdx)("inlineCode",{parentName:"p"},"id"),". Not all events are forwarded to the invoked service, only those which we select via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"forwardTo")," action."),(0,o.mdx)("p",null,"Here, we can connect to the websocket, establish two-way communication, and clean it up all in a few lines of code."),(0,o.mdx)("h2",{id:"my-love-letter"},"My Love Letter"),(0,o.mdx)("p",null,"Invoked callbacks are a concise, flexible method of invoking services in XState. There isn\u2019t a case they can\u2019t cover - and they\u2019re one of my favourite parts of the XState API."))}p.isMDXComponent=!0}}]);