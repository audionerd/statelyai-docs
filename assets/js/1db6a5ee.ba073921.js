"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[50019],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),d=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,h=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},84796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const o={title:"Markdown in annotations, performance improvements, and more!",description:"This week\u2019s headlines are that annotations now support markdown, and we\u2019ve made many performance improvements!",authors:["laura"],tags:["changelog","improved","fixed"],date:new Date("2023-08-04T00:00:00.000Z"),slug:"2023-08-04-markdown-in-annotations",image:"/blog/2023-08-04-markdown-in-annotations.png"},i=void 0,s={permalink:"/blog/2023-08-04-markdown-in-annotations",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-08-04-markdown-in-annotations/index.mdx",source:"@site/blog/2023-08-04-markdown-in-annotations/index.mdx",title:"Markdown in annotations, performance improvements, and more!",description:"This week\u2019s headlines are that annotations now support markdown, and we\u2019ve made many performance improvements!",date:"2023-08-04T00:00:00.000Z",formattedDate:"August 4, 2023",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"improved",permalink:"/blog/tags/improved"},{label:"fixed",permalink:"/blog/tags/fixed"}],readingTime:1.945,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Markdown in annotations, performance improvements, and more!",description:"This week\u2019s headlines are that annotations now support markdown, and we\u2019ve made many performance improvements!",authors:["laura"],tags:["changelog","improved","fixed"],date:"2023-08-04T00:00:00.000Z",slug:"2023-08-04-markdown-in-annotations",image:"/blog/2023-08-04-markdown-in-annotations.png"},prevItem:{title:"Learn Stately with our new editor videos",permalink:"/blog/2023-08-10-new-editor-videos"},nextItem:{title:"Stately Office Hours 68",permalink:"/blog/2023-07-26-office-hours-68"}},l={authorsImageUrls:[void 0]},m=[{value:"New",id:"new",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Improvements",id:"improvements",level:2}],d={toc:m};function p(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This week\u2019s headlines are that annotations now support markdown, and we\u2019ve made many performance improvements!"),(0,r.mdx)("h2",{id:"new"},"New"),(0,r.mdx)("p",null,"Markdown is now supported in ",(0,r.mdx)("a",{parentName:"p",href:"https://stately.ai/docs/annotations"},"annotations"),"! Previously you could only use plain text in your annotations; now, you can use markdown, like in ",(0,r.mdx)("a",{parentName:"p",href:"https://stately.ai/docs/descriptions"},"descriptions"),"."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://canny.io/images/6ac21f4c3304524750dc52485c1d59fb.png",alt:"Markdown being entered into an annotation, and that same annotation with bold text, italic text, a link, and a cute goldfish image."})),(0,r.mdx)("p",null,"Create an annotation by right-clicking anywhere on the canvas."),(0,r.mdx)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Simulation mode has been fixed for embedded machines."),(0,r.mdx)("li",{parentName:"ul"},"You now only need to press the back button once to return to the Projects list from the editor."),(0,r.mdx)("li",{parentName:"ul"},"Share image URLs were quickly fixed after being broken by a previous release."),(0,r.mdx)("li",{parentName:"ul"},"Renamed machines can now be filtered by their new names when filtered in the machines list."),(0,r.mdx)("li",{parentName:"ul"},"Initial states are now correctly assigned when copying and pasting states."),(0,r.mdx)("li",{parentName:"ul"},"The keyboard shortcuts button in the help drawer is now fixed."),(0,r.mdx)("li",{parentName:"ul"},"The Give Feedback button in the help drawer is now easier to click.")),(0,r.mdx)("h2",{id:"improvements"},"Improvements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"We have spent some time improving the performance of the canvas and UI, and your large machines should now be much smoother. Please ",(0,r.mdx)("a",{parentName:"li",href:"mailto:support@stately.ai"},"let us know")," if you have any machines which need more attention!"),(0,r.mdx)("li",{parentName:"ul"},"You can now rename your project by double-clicking its name in the editor\u2019s breadcrumb."),(0,r.mdx)("li",{parentName:"ul"},"Old context values with type array or object are now migrated correctly. Arrays and objects in the old machine context structure were stored as strings, and now when the user opens their machines, they\u2019re correctly converted to JavaScript arrays and objects, respectively."),(0,r.mdx)("li",{parentName:"ul"},"The starter machine description is now an annotation, making it easier to delete all the states and transitions inside a starter machine if you want a fresh start."),(0,r.mdx)("li",{parentName:"ul"},"The left panel width is now persisted when you reload the page."),(0,r.mdx)("li",{parentName:"ul"},"Custom actions are now correctly handled in ",(0,r.mdx)("strong",{parentName:"li"},"Import Code"),"; top-level action parameters are moved inside the ",(0,r.mdx)("inlineCode",{parentName:"li"},"action.params")," object, and ",(0,r.mdx)("inlineCode",{parentName:"li"},"type")," now appears before ",(0,r.mdx)("inlineCode",{parentName:"li"},"params")," in exported code."),(0,r.mdx)("li",{parentName:"ul"},"The following machine options are no longer included in exported code: Do not include these in machine options in the exported code: actions with expression ",(0,r.mdx)("inlineCode",{parentName:"li"},"type"),", actors with expression ",(0,r.mdx)("inlineCode",{parentName:"li"},"src"),", guards with expression names, and delays with expression values."),(0,r.mdx)("li",{parentName:"ul"},"A motley collection of internal fixes and improvements.")))}p.isMDXComponent=!0}}]);