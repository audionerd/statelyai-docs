"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[31212],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){return function(t){var a=m(t.components);return n.createElement(e,s({},t,{components:a}))}},m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||s;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"Parallel states",description:"In statecharts, a parallel state is a state separated into multiple regions of child states, where each region is active simultaneously."},o=void 0,l={unversionedId:"states/parallel-states",id:"version-4/states/parallel-states",title:"Parallel states",description:"In statecharts, a parallel state is a state separated into multiple regions of child states, where each region is active simultaneously.",source:"@site/versioned_docs/version-4/states/parallel-states.mdx",sourceDirName:"states",slug:"/states/parallel-states",permalink:"/docs/xstate-v4/states/parallel-states",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/states/parallel-states.mdx",tags:[],version:"4",frontMatter:{title:"Parallel states",description:"In statecharts, a parallel state is a state separated into multiple regions of child states, where each region is active simultaneously."},sidebar:"tutorialSidebar",previous:{title:"Parent states",permalink:"/docs/xstate-v4/states/parent-states"},next:{title:"History states",permalink:"/docs/xstate-v4/states/history-states"}},i={},p=[{value:"Make a state a parallel state",id:"make-a-state-a-parallel-state",level:2},{value:"On the canvas",id:"on-the-canvas",level:3},{value:"Using the state Details panel",id:"using-the-state-details-panel",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)},m=d("EmbedMachine"),c=d("Info"),u={toc:p};function h(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"A parallel state is a state separated into multiple regions of child states, where each region is active simultaneously."),(0,r.mdx)("p",null,"A dashed line borders each region."),(0,r.mdx)("admonition",{type:"video"},(0,r.mdx)("p",{parentName:"admonition"},"Watch our ",(0,r.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=CWwgT1TbI4c&list=PLvWgkXBB3dd4I_l-djWVU2UGPyBgKfnTQ&index=6"},"\u201cWhat are parallel states?\u201d video on YouTube")," (54s).")),(0,r.mdx)(m,{name:"Video player",embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=733de338-26cb-40a5-a0b5-b76bfc0405c3",mdxType:"EmbedMachine"}),(0,r.mdx)("p",null,"In the video player machine above, the video and audio states are active at the same time, which means the following combinations of states can happen simultaneously:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"video playing, audio muted"),(0,r.mdx)("li",{parentName:"ul"},"video playing, audio unmuted"),(0,r.mdx)("li",{parentName:"ul"},"video stopped, audio muted"),(0,r.mdx)("li",{parentName:"ul"},"video stopped, audio unmuted")),(0,r.mdx)("h2",{id:"make-a-state-a-parallel-state"},"Make a state a parallel state"),(0,r.mdx)("p",null,"First, select the parent state you want to set as a parallel state. Then\u2026"),(0,r.mdx)("h3",{id:"on-the-canvas"},"On the canvas"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Right-click the state to open the edit menu."),(0,r.mdx)("li",{parentName:"ol"},"From the ",(0,r.mdx)("strong",{parentName:"li"},"Type")," options, choose ",(0,r.mdx)("strong",{parentName:"li"},"Parallel"),".")),(0,r.mdx)("h3",{id:"using-the-state-details-panel"},"Using the state Details panel"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Select the parent state you want to make a parallel state."),(0,r.mdx)("li",{parentName:"ol"},"Open the state ",(0,r.mdx)(c,{size:18,mdxType:"Info"})," ",(0,r.mdx)("strong",{parentName:"li"},"Details")," panel from the right tool menu."),(0,r.mdx)("li",{parentName:"ol"},"From the type option, choose ",(0,r.mdx)("strong",{parentName:"li"},"Parallel"),".")),(0,r.mdx)("p",null,"To set the state back as a normal state, follow the same steps and select the ",(0,r.mdx)("strong",{parentName:"p"},"Normal")," type option."),(0,r.mdx)("admonition",{type:"xstate"},(0,r.mdx)("h2",{parentName:"admonition",id:"looking-for-how-to-use-parallel-states-in-xstate"},"Looking for how to use parallel states in XState?"),(0,r.mdx)("p",{parentName:"admonition"},"Find out ",(0,r.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/xstate/states/parallel-states"},"more about parallel states in XState")," in the XState section of the docs.")))}h.isMDXComponent=!0}}]);