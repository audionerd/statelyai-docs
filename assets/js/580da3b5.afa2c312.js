"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[92210],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>u,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,s({},t,{components:n}))}},m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=o,g=p["".concat(r,".").concat(c)]||p[c]||h[c]||s;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const s={title:"Test paths",description:"Model-based testing with XState: Understanding test paths, including state, event, and transition coverage, multiple paths and condensing to a single path."},r="Test paths",i={unversionedId:"xstate/model-based-testing/test-paths",id:"version-4/xstate/model-based-testing/test-paths",title:"Test paths",description:"Model-based testing with XState: Understanding test paths, including state, event, and transition coverage, multiple paths and condensing to a single path.",source:"@site/versioned_docs/version-4/xstate/model-based-testing/test-paths.mdx",sourceDirName:"xstate/model-based-testing",slug:"/xstate/model-based-testing/test-paths",permalink:"/statelyai-docs/docs/xstate-v4/xstate/model-based-testing/test-paths",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/xstate/model-based-testing/test-paths.mdx",tags:[],version:"4",frontMatter:{title:"Test paths",description:"Model-based testing with XState: Understanding test paths, including state, event, and transition coverage, multiple paths and condensing to a single path."},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/statelyai-docs/docs/xstate-v4/xstate/model-based-testing/quickstart"},next:{title:"Assertions",permalink:"/statelyai-docs/docs/xstate-v4/xstate/model-based-testing/assertions"}},l={},d=[{value:"Coverage",id:"coverage",level:2},{value:"State coverage",id:"state-coverage",level:3},{value:"Event coverage",id:"event-coverage",level:3},{value:"Transition coverage",id:"transition-coverage",level:3},{value:"Multiple paths",id:"multiple-paths",level:2},{value:"Condensing to a single path",id:"condensing-to-a-single-path",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"test-paths"},"Test paths"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"@xstate/test")," generates ",(0,o.mdx)("em",{parentName:"p"},"test paths")," that it walks through to execute your tests. Knowing how these paths are generated will make your tests more predictable."),(0,o.mdx)("h2",{id:"coverage"},"Coverage"),(0,o.mdx)("p",null,"The following example models a checkbox:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createTestMachine } from '@xstate/test';\n\nconst machine = createTestMachine({\n  initial: 'notChecked',\n  states: {\n    notChecked: {\n      on: {\n        CLICK: 'checked',\n      },\n    },\n    checked: {\n      on: {\n        CLICK: 'notChecked',\n      },\n    },\n  },\n});\n")),(0,o.mdx)("p",null,"You could take a few different approaches to ensure ",(0,o.mdx)("em",{parentName:"p"},"everything")," in this machine works:"),(0,o.mdx)("h3",{id:"state-coverage"},"State coverage"),(0,o.mdx)("p",null,"The first approach is to ensure full coverage of ",(0,o.mdx)("strong",{parentName:"p"},"states"),", where you would want to test:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"When ",(0,o.mdx)("inlineCode",{parentName:"li"},"checked")," is reached, the checkbox is displaying a checkbox."),(0,o.mdx)("li",{parentName:"ol"},"When ",(0,o.mdx)("inlineCode",{parentName:"li"},"notChecked")," is reached, the checkbox is NOT displaying a checkbox.")),(0,o.mdx)("h3",{id:"event-coverage"},"Event coverage"),(0,o.mdx)("p",null,"State coverage is a good start, but we also want to ensure all the ",(0,o.mdx)("strong",{parentName:"p"},"events")," are working. To do this, we can add a new test:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Ensure that ",(0,o.mdx)("inlineCode",{parentName:"li"},"CLICK")," changes the checkbox.")),(0,o.mdx)("p",null,"Putting these tests together, you\u2019d end up with a single test path:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Assert we\u2019re in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"notChecked")," state."),(0,o.mdx)("li",{parentName:"ol"},"Run the ",(0,o.mdx)("inlineCode",{parentName:"li"},"CLICK")," event."),(0,o.mdx)("li",{parentName:"ol"},"Assert we\u2019re in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"checked")," state.")),(0,o.mdx)("h3",{id:"transition-coverage"},"Transition coverage"),(0,o.mdx)("p",null,"The test path above feels complete, but it\u2019s not quite there. We now know that clicking the checkbox can change it from ",(0,o.mdx)("inlineCode",{parentName:"p"},"notChecked")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"checked"),". But we ",(0,o.mdx)("em",{parentName:"p"},"don\u2019t")," know that the same will happen when we go the other way! That means our full test should be:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Assert we\u2019re in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"notChecked")," state."),(0,o.mdx)("li",{parentName:"ol"},"Run the ",(0,o.mdx)("inlineCode",{parentName:"li"},"CLICK")," event."),(0,o.mdx)("li",{parentName:"ol"},"Assert we\u2019re in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"checked")," state."),(0,o.mdx)("li",{parentName:"ol"},"Run the ",(0,o.mdx)("inlineCode",{parentName:"li"},"CLICK")," event."),(0,o.mdx)("li",{parentName:"ol"},"Assert we\u2019re in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"notChecked")," state.")),(0,o.mdx)("p",null,"In ",(0,o.mdx)("inlineCode",{parentName:"p"},"@xstate/test"),", we achieve the test path above by checking all ",(0,o.mdx)("strong",{parentName:"p"},"transitions")," are covered, which means you get full coverage out of the box."),(0,o.mdx)("h2",{id:"multiple-paths"},"Multiple paths"),(0,o.mdx)("p",null,"Test setup can be expensive, whether you\u2019re loading up a browser or just setting up a database. @xstate/test will speed up your tests by attempting to walk through your test model in as few paths as possible."),(0,o.mdx)("p",null,"The following example models a login form:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"import { createTestMachine } from \"@xstate/test\";\n\nconst loginMachine = createTestMachine({\n  initial: \"showingLoginForm\",\n  states: {\n    showingLoginForm: {\n      on: {\n        SUBMIT_VALID_FORM: 'loggedIn',\n        SUBMIT_INVALID_FORM: 'passwordInvalid',\n      }\n    },\n    loggedIn: {}\n    passwordInvalid: {},\n  },\n});\n")),(0,o.mdx)("p",null,"This example would generate two test paths:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-txt"},"showingLoginForm -> SUBMIT_VALID_FORM -> loggedIn\nshowingLoginForm -> SUBMIT_INVALID_FORM -> passwordInvalid\n")),(0,o.mdx)("p",null,"Two test paths are generated because the test model can\u2019t transition away from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"loggedIn")," state or the ",(0,o.mdx)("inlineCode",{parentName:"p"},"passwordInvalid")," state."),(0,o.mdx)("h3",{id:"condensing-to-a-single-path"},"Condensing to a single path"),(0,o.mdx)("p",null,"If we were to model the machine slightly differently, the test model would generate a single path:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts",metastring:"{12-14}","{12-14}":!0},"import { createTestMachine } from \"@xstate/test\";\n\nconst loginMachine = createTestMachine({\n  initial: \"showingLoginForm\",\n  states: {\n    showingLoginForm: {\n      on: {\n        SUBMIT_VALID_FORM: 'loggedIn',\n        SUBMIT_INVALID_FORM: 'passwordInvalid',\n      }\n    },\n    loggedIn: {\n      on: {\n        LOG_OUT: 'showingLoginForm'\n      }\n    }\n    passwordInvalid: {},\n  },\n});\n")),(0,o.mdx)("p",null,"In the example above, we\u2019ve added a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LOG_OUT")," transition to ",(0,o.mdx)("inlineCode",{parentName:"p"},"loggedIn"),", which means the test model can navigate away from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"loggedIn")," state. Now, the test model will run a single path:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-txt"},"showingLoginForm\n  -> SUBMIT_VALID_FORM -> loggedIn\n  -> LOG_OUT -> showingLoginForm\n  -> SUBMIT_INVALID_FORM -> passwordInvalid\n")),(0,o.mdx)("p",null,"The test above requires less setup while also testing more behavior."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note"),": we don\u2019t necessarily recommend running ",(0,o.mdx)("em",{parentName:"p"},"fewer")," test paths, but understanding this behavior is useful when using @xstate/test."))}m.isMDXComponent=!0}}]);