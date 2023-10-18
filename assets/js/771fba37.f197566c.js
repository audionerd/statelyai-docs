"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[65877],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){return function(n){var t=p(n.components);return a.createElement(e,r({},n,{components:t}))}},p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},x={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,u=m["".concat(o,".").concat(c)]||m[c]||x[c]||r;return t?a.createElement(u,l(l({ref:n},s),{},{components:t})):a.createElement(u,l({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={title:"SCXML",description:"XState is compatible with the SCXML (State Chart XML: State Machine Notation for Control Abstraction) specification."},o="SCXML",l={unversionedId:"xstate/advanced/scxml",id:"version-4/xstate/advanced/scxml",title:"SCXML",description:"XState is compatible with the SCXML (State Chart XML: State Machine Notation for Control Abstraction) specification.",source:"@site/versioned_docs/version-4/xstate/advanced/scxml.mdx",sourceDirName:"xstate/advanced",slug:"/xstate/advanced/scxml",permalink:"/docs/xstate-v4/xstate/advanced/scxml",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/advanced/scxml.mdx",tags:[],version:"4",frontMatter:{title:"SCXML",description:"XState is compatible with the SCXML (State Chart XML: State Machine Notation for Control Abstraction) specification."},sidebar:"tutorialSidebar",previous:{title:"React Patterns",permalink:"/docs/xstate-v4/xstate/advanced/react-patterns"},next:{title:"Developer tools",permalink:"/docs/xstate-v4/category/developer-tools"}},d={},s=[{value:"Events",id:"events",level:2},{value:"Transitions",id:"transitions",level:2},{value:"Guards",id:"guards",level:2},{value:"<code>cond</code> and <code>In()</code> in the SCXML specification",id:"cond-and-in-in-the-scxml-specification",level:3},{value:"State IDs",id:"state-ids",level:2},{value:"<code>ID</code>s in the SCXML specification",id:"ids-in-the-scxml-specification",level:3},{value:"Actions",id:"actions",level:2},{value:"<code>script</code>, <code>onentry</code> and <code>onexit</code> in the SCXML specification",id:"script-onentry-and-onexit-in-the-scxml-specification",level:3},{value:"Invoke",id:"invoke",level:2}],m={toc:s};function p(e){let{components:n,...t}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"scxml"},"SCXML"),(0,i.mdx)("p",null,"XState is compatible with the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/scxml/"},"SCXML (State Chart XML: State Machine Notation for Control Abstraction) specification"),". This page contains details on where our API relates to the SCXML specification."),(0,i.mdx)("h2",{id:"events"},"Events"),(0,i.mdx)("p",null,"Events in SCXML contain information relevant to the source of the event and have a different schema than event objects in XState. Internally, event objects are converted to SCXML events for compatibility."),(0,i.mdx)("p",null,"SCXML events include:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"name"),", a character string giving the name of the event. ",(0,i.mdx)("inlineCode",{parentName:"li"},"name")," is equivalent to the ",(0,i.mdx)("inlineCode",{parentName:"li"},".type")," property of an XState event."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"type"),", the event type: ",(0,i.mdx)("inlineCode",{parentName:"li"},"'platform'"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"'external'"),", or ",(0,i.mdx)("inlineCode",{parentName:"li"},"'internal'"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"platform")," events are raised by the platform itself, such as error events."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"internal")," events are raised by ",(0,i.mdx)("inlineCode",{parentName:"li"},"raise(...)")," actions or by ",(0,i.mdx)("inlineCode",{parentName:"li"},"send(...)")," actions with ",(0,i.mdx)("inlineCode",{parentName:"li"},"target: '_internal'"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"external")," events describe all other events."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sendid"),", the send ID of the triggering ",(0,i.mdx)("inlineCode",{parentName:"li"},"send(...)")," action."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"origin"),", a string that allows the receiver of this event to ",(0,i.mdx)("inlineCode",{parentName:"li"},"send(...)")," a response event back to the origin."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"origintype"),", used with ",(0,i.mdx)("inlineCode",{parentName:"li"},"origin"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"invokeid"),", the invoke ID of the invocation that triggered the child actor."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"data"),", any data that the sending entity included with this event. ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," is equivalent to an XState event object.")),(0,i.mdx)("p",null,"The SCXML event form of all XState events is present in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_event")," property of action and guard meta objects as the third argument:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:"{4-5,9-10}","{4-5,9-10}":!0},"// ...\n{\n  actions: {\n    someAction: (context, event, { _event }) => {\n      console.log(_event); // SCXML event\n    };\n  },\n  guards: {\n    someGuard: (context, event, { _event }) => {\n      console.log(_event); // SCXML event\n    }\n  }\n}\n// ..\n")),(0,i.mdx)("h2",{id:"transitions"},"Transitions"),(0,i.mdx)("p",null,"The event-target mappings defined on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"on: { ... }")," property of state nodes is synonymous to the SCXML ",(0,i.mdx)("inlineCode",{parentName:"p"},"<transition>")," element:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  green: {\n    on: {\n      TIMER: {\n        target: '#yellow',\n        cond: context => context.timeElapsed > 5000\n      },\n      POWER_OUTAGE: { target: '#red.flashing' }\n    }\n  },\n  // ...\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<state id="green">\n  <transition\n    event="TIMER"\n    target="yellow"\n    cond="timeElapsed > 5000"\n  />\n  <transition\n    event="POWER_OUTAGE"\n    target="red.flashing"\n  />\n</state>\n')),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#transition"},"https://www.w3.org/TR/scxml/#transition")," - the definition of ",(0,i.mdx)("inlineCode",{parentName:"li"},"<transition>"))),(0,i.mdx)("h2",{id:"guards"},"Guards"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"cond")," property is equivalent to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"cond")," attribute on the SCXML ",(0,i.mdx)("inlineCode",{parentName:"p"},"<transition>")," element:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  on: {\n    e: {\n      target: 'foo',\n      cond: context => context.x === 1\n    }\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<transition event="e" cond="x == 1" target="foo" />\n')),(0,i.mdx)("p",null,"Similarly, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"in")," property is equivalent to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"In()")," predicate:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  on: {\n    e: {\n      target: 'cooking',\n      in: '#closed'\n    }\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<transition cond="In(\'closed\')" target="cooking"/>\n')),(0,i.mdx)("h3",{id:"cond-and-in-in-the-scxml-specification"},(0,i.mdx)("inlineCode",{parentName:"h3"},"cond")," and ",(0,i.mdx)("inlineCode",{parentName:"h3"},"In()")," in the SCXML specification"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#transition"},"SCXML definition of the ",(0,i.mdx)("inlineCode",{parentName:"a"},"cond")," attribute")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#ConditionalExpressions"},"SCXML conditional expressions and the requirement of supporting the ",(0,i.mdx)("inlineCode",{parentName:"a"},"In()")," predicate")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#SelectingTransitions"},"How transitions are selected given an event in SCXML"))),(0,i.mdx)("h2",{id:"state-ids"},"State IDs"),(0,i.mdx)("p",null,"IDs correspond to the definition of IDs in the SCXML spec:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  green: {\n    id: 'lightGreen';\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<state id="lightGreen">\n  \x3c!-- ...--\x3e\n</state>\n')),(0,i.mdx)("h3",{id:"ids-in-the-scxml-specification"},(0,i.mdx)("inlineCode",{parentName:"h3"},"ID"),"s in the SCXML specification"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#IDs"},"SCXML specification that all ",(0,i.mdx)("inlineCode",{parentName:"a"},"id")," attributes ",(0,i.mdx)("em",{parentName:"a"},"must")," be unique")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#state"},"SCXML definition of the ",(0,i.mdx)("inlineCode",{parentName:"a"},"id")," attribute in ",(0,i.mdx)("inlineCode",{parentName:"a"},"<state>")))),(0,i.mdx)("h2",{id:"actions"},"Actions"),(0,i.mdx)("p",null,"Executable actions in transitions are equivalent to the SCXML ",(0,i.mdx)("inlineCode",{parentName:"p"},"<script>")," element. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"entry")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"exit")," properties are equivalent to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<onentry>")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"<onexit>")," elements, respectively."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  start: {\n    entry: 'showStartScreen',\n    exit: 'logScreenChange',\n    on: {\n      STOP: {\n        target: 'stop',\n        actions: ['logStop', 'stopEverything']\n      }\n    }\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<state id="start">\n  <onentry>\n    <script>showStartScreen();<\/script>\n  </onentry>\n  <onexit>\n    <script>logScreenChange();<\/script>\n  </onexit>sc\n  <transition event="STOP" target="stop">\n    <script>logStop();<\/script>\n    <script>stopEverything();<\/script>\n  </transition>\n</state>\n')),(0,i.mdx)("h3",{id:"script-onentry-and-onexit-in-the-scxml-specification"},(0,i.mdx)("inlineCode",{parentName:"h3"},"script"),", ",(0,i.mdx)("inlineCode",{parentName:"h3"},"onentry")," and ",(0,i.mdx)("inlineCode",{parentName:"h3"},"onexit")," in the SCXML specification"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#script"},"SCXML definition of the ",(0,i.mdx)("inlineCode",{parentName:"a"},"<script>")," element")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#onentry"},"SCXML definition of the ",(0,i.mdx)("inlineCode",{parentName:"a"},"<onentry>")," element")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/scxml/#onexit"},"SCXML definition of the ",(0,i.mdx)("inlineCode",{parentName:"a"},"<onexit>")," element"))),(0,i.mdx)("h2",{id:"invoke"},"Invoke"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"invoke")," property is synonymous with the SCXML ",(0,i.mdx)("inlineCode",{parentName:"p"},"<invoke>")," element:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// XState\n{\n  loading: {\n    invoke: {\n      src: 'someSource',\n      id: 'someID',\n      autoForward: true, // currently for machines only!\n      onDone: 'success',\n      onError: 'failure'\n    }\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- SCXML--\x3e\n<state id="loading">\n  <invoke id="someID" src="someSource" autoforward />\n  <transition event="done.invoke.someID" target="success" />\n  <transition event="error.platform" cond="_event.src === \'someID\'" target="failure" />\n</state>\n')),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/scxml/#invoke"},"SCXML definition of ",(0,i.mdx)("inlineCode",{parentName:"a"},"<invoke>"))))}p.isMDXComponent=!0}}]);