"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[31439],{3905:(t,e,r)=>{r.r(e),r.d(e,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var o=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},i.apply(this,arguments)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=o.createContext({}),s=function(t){return function(e){var r=u(e.components);return o.createElement(t,i({},e,{components:r}))}},u=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=u(t.components);return o.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,n=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),s=u(r),c=a,d=s["".concat(n,".").concat(c)]||s[c]||h[c]||i;return r?o.createElement(d,l(l({ref:e},p),{},{components:r})):o.createElement(d,l({ref:e},p))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,n=new Array(i);n[0]=d;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:a,n[1]=l;for(var p=2;p<i;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29692:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const i={title:"Import all machines from your GitHub repo",description:"Learn about a new pro feature in the Stately Studio; importing all your machines from a GitHub repo.",tags:["stately","studio","integration","github"],authors:["laura"],image:"/blog/2023-03-09-import-all-machines-from-github-repo.png",slug:"2023-03-09-import-all-machines-from-github-repo",date:new Date("2023-03-09T00:00:00.000Z")},n=void 0,l={permalink:"/statelyai-docs/blog/2023-03-09-import-all-machines-from-github-repo",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-03-09-import-all-machines-from-github-repo/index.mdx",source:"@site/blog/2023-03-09-import-all-machines-from-github-repo/index.mdx",title:"Import all machines from your GitHub repo",description:"Learn about a new pro feature in the Stately Studio; importing all your machines from a GitHub repo.",date:"2023-03-09T00:00:00.000Z",formattedDate:"March 9, 2023",tags:[{label:"stately",permalink:"/statelyai-docs/blog/tags/stately"},{label:"studio",permalink:"/statelyai-docs/blog/tags/studio"},{label:"integration",permalink:"/statelyai-docs/blog/tags/integration"},{label:"github",permalink:"/statelyai-docs/blog/tags/github"}],readingTime:1.81,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Import all machines from your GitHub repo",description:"Learn about a new pro feature in the Stately Studio; importing all your machines from a GitHub repo.",tags:["stately","studio","integration","github"],authors:["laura"],image:"/blog/2023-03-09-import-all-machines-from-github-repo.png",slug:"2023-03-09-import-all-machines-from-github-repo",date:"2023-03-09T00:00:00.000Z"},prevItem:{title:"Book a demo with the Stately team",permalink:"/statelyai-docs/blog/2023-04-03-book-a-demo"},nextItem:{title:"Import machines from GitHub",permalink:"/statelyai-docs/blog/2023-02-06-github-import-machines"}},m={authorsImageUrls:[void 0]},p=[{value:"How to import all the machines from a GitHub repository",id:"how-to-import-all-the-machines-from-a-github-repository",level:2},{value:"Try our Pro plan to import from GitHub",id:"try-our-pro-plan-to-import-from-github",level:2}],s={toc:p};function u(t){let{components:e,...i}=t;return(0,a.mdx)("wrapper",(0,o.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Last month, Anders showed you how you could ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/blog/2023-02-06-github-import-machines"},"import a machine from GitHub by changing the GitHub URL in the browser\u2019s address bar"),". We\u2019ve added more to our GitHub integration. Our ",(0,a.mdx)("a",{parentName:"p",href:"https://stately.ai/pricing"},"Pro")," users can now import all the machines from a repository into a Stately Studio project with the ",(0,a.mdx)("strong",{parentName:"p"},"Import from GitHub")," button."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Stately Studio My Projects page showing a list of projects. Above the list is an Import from GitHub button, alongside the Create project button.",src:r(12186).Z,width:"1480",height:"600"})),(0,a.mdx)("p",null,"If you\u2019ve been working with state machines in XState or using the ",(0,a.mdx)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode"},"XState VS Code extension")," to visualize your machines, this is a great way to import all the machines in your repo quickly. Once you\u2019ve imported your machines into the Stately Studio, you can visualize and improve them in our Editor and easily share your machines with your team."),(0,a.mdx)("h2",{id:"how-to-import-all-the-machines-from-a-github-repository"},"How to import all the machines from a GitHub repository"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Navigate to ",(0,a.mdx)("strong",{parentName:"li"},"My Projects")," from the sidebar or the Stately menu."),(0,a.mdx)("li",{parentName:"ol"},"Use ",(0,a.mdx)("strong",{parentName:"li"},"Import from GitHub")," to open the Import repo from GitHub modal."),(0,a.mdx)("li",{parentName:"ol"},"The GitHub integration will fetch all available repositories (public and private)."),(0,a.mdx)("li",{parentName:"ol"},"Choose the repository from which you wish to import machines."),(0,a.mdx)("li",{parentName:"ol"},"The Studio will import your machines into a new private project using the same name as your repository and open your project in the Editor.")),(0,a.mdx)("p",null,"Importing a machine with ",(0,a.mdx)("strong",{parentName:"p"},"Import from GitHub")," or importing a machine with a GitHub URL will prompt you to ",(0,a.mdx)("strong",{parentName:"p"},"Allow integration")," to give our GitHub integration access to your GitHub repositories. You will only be prompted if you have not yet given the GitHub integration access on your current device."),(0,a.mdx)("p",null,"Currently, the ",(0,a.mdx)("strong",{parentName:"p"},"Import from GitHub")," feature imports all machines from the ",(0,a.mdx)("em",{parentName:"p"},"default branch")," in your GitHub repository. If you want to import machines from a different branch or a pull request, we recommend ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/blog/2023-02-06-github-import-machines"},"importing each machine from a GitHub URL"),"."),(0,a.mdx)("h2",{id:"try-our-pro-plan-to-import-from-github"},"Try our Pro plan to import from GitHub"),(0,a.mdx)("p",null,"Import from GitHub is one of the ",(0,a.mdx)("a",{parentName:"p",href:"https://stately.ai/docs/studio-pro-plan"},"Pro features")," of the Stately Studio. We offer a ",(0,a.mdx)("strong",{parentName:"p"},"30-day free trial")," on the ",(0,a.mdx)("a",{parentName:"p",href:"https://stately.ai/pricing"},"Stately Studio Pro account")," so you can explore how our Pro features work for you and your team today!"))}u.isMDXComponent=!0},12186:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/2023-03-09-import-all-machines-from-github-repo-button-794caa0cbac5c5e00149856de8b70cc3.png"}}]);