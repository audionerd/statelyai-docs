"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4318],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){return function(n){var t=d(n.components);return o.createElement(e,r({},n,{components:t}))}},d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(y,i(i({ref:n},l),{},{components:t})):o.createElement(y,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},47579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const r={title:"Inline vs. named Options",description:"Named actions are when you pass options into the config using names. You can also declare your actions inline without names."},s="Inline vs. named Options",i={unversionedId:"xstate/basics/inline-vs-named-options",id:"version-4/xstate/basics/inline-vs-named-options",title:"Inline vs. named Options",description:"Named actions are when you pass options into the config using names. You can also declare your actions inline without names.",source:"@site/versioned_docs/version-4/xstate/basics/inline-vs-named-options.mdx",sourceDirName:"xstate/basics",slug:"/xstate/basics/inline-vs-named-options",permalink:"/docs/xstate-v4/xstate/basics/inline-vs-named-options",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/basics/inline-vs-named-options.mdx",tags:[],version:"4",frontMatter:{title:"Inline vs. named Options",description:"Named actions are when you pass options into the config using names. You can also declare your actions inline without names."},sidebar:"tutorialSidebar",previous:{title:"Options",permalink:"/docs/xstate-v4/xstate/basics/options"},next:{title:"Actions",permalink:"/docs/xstate-v4/category/xstate-actions"}},c={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"inline-vs-named-options"},"Inline vs. named Options"),(0,a.mdx)("p",null,"In the examples so far, we\u2019ve passed options into the config using names:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine({\n  entry: ['sayHello'],\n});\n")),(0,a.mdx)("p",null,"These are called ",(0,a.mdx)("strong",{parentName:"p"},"named")," actions. You can do the same with named guards, actors and delays, and we\u2019ll get to those later."),(0,a.mdx)("p",null,"However, if you don\u2019t want to name your actions, you can also declare them inline:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine({\n  entry: [\n    () => {\n      console.log('Hello!');\n    },\n  ],\n});\n")),(0,a.mdx)("p",null,"The difference between named and inline options is mostly stylistic. We support both approaches, and you can mix-and-match named and inline options within the same machine:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"const machine = createMachine(\n  {\n    entry: [\n      // Inline\n      () => {\n        console.log('Hello!');\n      },\n    ],\n    exit: [\n      // Named\n      'sayGoodbye',\n    ],\n  },\n  {\n    actions: {\n      sayGoodbye: () => {\n        console.log('sayGoodbye');\n      },\n    },\n  }\n);\n")),(0,a.mdx)("p",null,"Named options are preferred when using ",(0,a.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/xstate/typescript/typegen"},"typegen")," and also show up better when visualized with our ",(0,a.mdx)("a",{parentName:"p",href:"/docs/xstate-v4/tools/xstate-vscode-extension"},"VS Code extension"),". Named options show their name, whereas inline options show an \u201cInline\u201d label."),(0,a.mdx)("p",null,"When not using typegen, inline options can often give you better type inference than named options."))}d.isMDXComponent=!0}}]);