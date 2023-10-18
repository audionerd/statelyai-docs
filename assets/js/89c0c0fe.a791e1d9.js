"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[71863],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){return function(t){var n=s(t.components);return a.createElement(e,o({},t,{components:n}))}},s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Lock machines"},i=void 0,l={unversionedId:"lock-machines",id:"version-4/lock-machines",title:"Lock machines",description:"You can lock a machine anytime to prevent accidental edits. Locked machines have a  Locked status displayed in the editor\u2019s top bar.",source:"@site/versioned_docs/version-4/lock-machines.mdx",sourceDirName:".",slug:"/lock-machines",permalink:"/statelyai-docs/docs/xstate-v4/lock-machines",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/versioned_docs/version-4/lock-machines.mdx",tags:[],version:"4",frontMatter:{title:"Lock machines"},sidebar:"tutorialSidebar",previous:{title:"Version history",permalink:"/statelyai-docs/docs/xstate-v4/versions"},next:{title:"Keyboard shortcuts",permalink:"/statelyai-docs/docs/xstate-v4/keyboard-shortcuts"}},m={},c=[{value:"How to lock and unlock a machine",id:"how-to-lock-and-unlock-a-machine",level:2},{value:"Team roles and locking machines",id:"team-roles-and-locking-machines",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)},s=d("Lock"),p=d("Unlock"),u=d("Info"),h={toc:c};function x(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"You can lock a machine anytime to prevent accidental edits. Locked machines have a ",(0,r.mdx)(s,{size:18,mdxType:"Lock"})," ",(0,r.mdx)("strong",{parentName:"p"},"Locked")," status displayed in the editor\u2019s top bar."),(0,r.mdx)("p",null,"Hover over the ",(0,r.mdx)(s,{size:18,mdxType:"Lock"})," ",(0,r.mdx)("strong",{parentName:"p"},"Locked")," text to view who locked the machine and when."),(0,r.mdx)("admonition",{type:"studio"},(0,r.mdx)("p",{parentName:"admonition"},"Locking machines is a Pro feature of the Studio. ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/docs/xstate-v4/studio-pro-plan"},"Check out the features on our Pro plan")," or ",(0,r.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/billing"},"upgrade to try the Pro plan with a 30-day free trial"),".")),(0,r.mdx)("p",null,"Locking a machine prevents you, or anyone else on your team, from the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Editing the machine"),(0,r.mdx)("li",{parentName:"ul"},"Deleting the machine"),(0,r.mdx)("li",{parentName:"ul"},"Renaming the machine"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/xstate-v4/import-from-code"},"Importing code")," to replace the machine"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/statelyai-docs/docs/xstate-v4/versions"},"Restoring a past version")," of the machine")),(0,r.mdx)("p",null,"If somebody else is viewing or editing the machine when it is locked, their changes will not be saved, and they will be notified that the machine is now locked."),(0,r.mdx)("h2",{id:"how-to-lock-and-unlock-a-machine"},"How to lock and unlock a machine"),(0,r.mdx)("p",null,"From the editor menu, go to ",(0,r.mdx)("strong",{parentName:"p"},"Machine")," > ",(0,r.mdx)(p,{size:18,mdxType:"Unlock"})," ",(0,r.mdx)("strong",{parentName:"p"},"Lock machine")," / ",(0,r.mdx)(s,{size:18,mdxType:"Lock"})," ",(0,r.mdx)("strong",{parentName:"p"},"Unlock machine"),"."),(0,r.mdx)("p",null,"From the machine\u2019s ",(0,r.mdx)(u,{size:18,mdxType:"Info"})," ",(0,r.mdx)("strong",{parentName:"p"},"Details")," panel, use the ",(0,r.mdx)(p,{size:18,mdxType:"Unlock"})," Lock machine / ",(0,r.mdx)(s,{size:18,mdxType:"Lock"})," Unlock machine icon button."),(0,r.mdx)("h2",{id:"team-roles-and-locking-machines"},"Team roles and locking machines"),(0,r.mdx)("p",null,"All team members can view locked machines. Only team owners, Admins, and Editors can lock and unlock machines."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Capability"),(0,r.mdx)("th",{parentName:"tr",align:null},"Owner"),(0,r.mdx)("th",{parentName:"tr",align:null},"Admin"),(0,r.mdx)("th",{parentName:"tr",align:null},"Editor"),(0,r.mdx)("th",{parentName:"tr",align:null},"Viewer"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"View locked machine"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Lock and unlock machine"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("span",{parentName:"td",role:"img","aria-label":"prohibited"},"\ud83d\udeab")," No")))))}x.isMDXComponent=!0}}]);