"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[15327],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Introducing: The XState CLI",description:"Get ready to run XState\u2019s typegen commands outside of VSCode in our all-new CLI.",tags:["cli","xstate","announcement","typescript"],authors:["matt"],image:"/blog/2022-03-03-introducing-the-xstate-cli.png",slug:"2022-03-03-introducing-the-xstate-cli",date:new Date("2022-03-03T00:00:00.000Z")},l=void 0,i={permalink:"/blog/2022-03-03-introducing-the-xstate-cli",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2022-03-03-introducing-the-xstate-cli/index.mdx",source:"@site/blog/2022-03-03-introducing-the-xstate-cli/index.mdx",title:"Introducing: The XState CLI",description:"Get ready to run XState\u2019s typegen commands outside of VSCode in our all-new CLI.",date:"2022-03-03T00:00:00.000Z",formattedDate:"March 3, 2022",tags:[{label:"cli",permalink:"/blog/tags/cli"},{label:"xstate",permalink:"/blog/tags/xstate"},{label:"announcement",permalink:"/blog/tags/announcement"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:1.12,hasTruncateMarker:!0,authors:[{name:"Matt Pocock",title:"Stately Team",url:"https://github.com/mattpocock",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/matt.png",key:"matt"}],frontMatter:{title:"Introducing: The XState CLI",description:"Get ready to run XState\u2019s typegen commands outside of VSCode in our all-new CLI.",tags:["cli","xstate","announcement","typescript"],authors:["matt"],image:"/blog/2022-03-03-introducing-the-xstate-cli.png",slug:"2022-03-03-introducing-the-xstate-cli",date:"2022-03-03T00:00:00.000Z"},prevItem:{title:"Open VSX XState VSCode extension now available",permalink:"/blog/2022/03/11/xstate-vscode-extension-now-available-on-the-open-vsx-registry"},nextItem:{title:"Modelling 101: How to build a statechart from scratch",permalink:"/blog/2022-02-15-modelling-101-how-to-build-a-statechart-from-scratch"}},s={authorsImageUrls:[void 0]},c=[{value:"Installation",id:"installation",level:2},{value:"Commands",id:"commands",level:2},{value:"<code>xstate typegen &lt;files&gt;</code>",id:"xstate-typegen-files",level:3},{value:"Options",id:"options",level:4},{value:"The Future",id:"the-future",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Around a month ago, we released ",(0,r.mdx)("a",{parentName:"p",href:"/blog/2022-01-27-introducing-typegen"},"TypeScript Typegen")," - an enormous upgrade to the TypeScript experience for XState."),(0,r.mdx)("p",null,"We\u2019ve had a great response to it so far, but it\u2019s only been available for VSCode users."),(0,r.mdx)("p",null,"Until now. With our new XState CLI, ",(0,r.mdx)("strong",{parentName:"p"},"you can get Typegen from the command line"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Read the full documentation on the ",(0,r.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/packages/xstate-cli"},(0,r.mdx)("inlineCode",{parentName:"a"},"@xstate/cli")," docs"),"."),(0,r.mdx)("li",{parentName:"ul"},"Check out ",(0,r.mdx)("a",{parentName:"li",href:"https://xstate.js.org/docs/guides/typescript.html#typegen"},"our updated TypeScript Typegen guide"),". "),(0,r.mdx)("li",{parentName:"ul"},"Find the code on the ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/statelyai/xstate-tools/tree/main/apps/cli"},"@xstate/cli GitHub repo"),".")),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install @xstate/cli\n")),(0,r.mdx)("p",null,"OR"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn add @xstate/cli\n")),(0,r.mdx)("h2",{id:"commands"},"Commands"),(0,r.mdx)("h3",{id:"xstate-typegen-files"},(0,r.mdx)("inlineCode",{parentName:"h3"},"xstate typegen <files>")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'xstate typegen "src/**/*.tsx?"\n')),(0,r.mdx)("p",null,"Run the typegen against a glob of files. This will scan every targeted file and generate a typegen file accompanying it. It will also import the typegen into your file, as described in ",(0,r.mdx)("a",{parentName:"p",href:"https://xstate.js.org/docs/guides/typescript.html#typegen"},"our typegen documentation"),"."),(0,r.mdx)("p",null,"Ensure you wrap your glob in quotes so that it executes correctly. Otherwise, you\u2019ll get unexpected results."),(0,r.mdx)("h4",{id:"options"},"Options"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'xstate typegen "src/**/*.tsx?" --watch\n')),(0,r.mdx)("p",null,"Runs the task on a watch, monitoring for changed files and running the typegen script against them."),(0,r.mdx)("h2",{id:"the-future"},"The Future"),(0,r.mdx)("p",null,"We\u2019re really excited about the CLI, and all the cool things it\u2019ll enable. The typegen really is just the surface. If you\u2019ve got ideas for what we could do with it, don\u2019t hesitate to add a feature request to the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/statelyai/xstate-tools/issues"},(0,r.mdx)("inlineCode",{parentName:"a"},"xstate-tools")," repo"),"."))}u.isMDXComponent=!0}}]);