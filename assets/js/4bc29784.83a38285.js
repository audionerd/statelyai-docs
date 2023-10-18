"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[67959],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>h,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>c});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h=o.createContext({}),c=function(e){return function(t){var n=u(t.components);return o.createElement(e,r({},t,{components:n}))}},u=function(e){var t=o.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(h.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,g=c["".concat(a,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(g,s(s({ref:t},h),{},{components:n})):o.createElement(g,s({ref:t},h))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var h=2;h<r;h++)a[h]=n[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=n(87462),i=(n(67294),n(3905));const r={title:"Track changes as you work with Version History",description:"Version History is one of our most recent Pro features in Stately Studio. You can track changes to your work as you go.",tags:["versions","stately","studio","tutorial","editor","announcement","modeling","statechart"],authors:["kevin"],image:"/blog/2023-05-02-track-changes-as-you-work-with-version-history.png",slug:"2023-05-02-version-history",date:new Date("2023-05-02T00:00:00.000Z")},a=void 0,s={permalink:"/blog/2023-05-02-version-history",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-05-02-track-changes-as-you-work-with-version-history/index.mdx",source:"@site/blog/2023-05-02-track-changes-as-you-work-with-version-history/index.mdx",title:"Track changes as you work with Version History",description:"Version History is one of our most recent Pro features in Stately Studio. You can track changes to your work as you go.",date:"2023-05-02T00:00:00.000Z",formattedDate:"May 2, 2023",tags:[{label:"versions",permalink:"/blog/tags/versions"},{label:"stately",permalink:"/blog/tags/stately"},{label:"studio",permalink:"/blog/tags/studio"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"editor",permalink:"/blog/tags/editor"},{label:"announcement",permalink:"/blog/tags/announcement"},{label:"modeling",permalink:"/blog/tags/modeling"},{label:"statechart",permalink:"/blog/tags/statechart"}],readingTime:5.165,hasTruncateMarker:!0,authors:[{name:"Kevin Maes",title:"Stately Team",url:"https://github.com/kevinmaes",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/kevin.png",key:"kevin"}],frontMatter:{title:"Track changes as you work with Version History",description:"Version History is one of our most recent Pro features in Stately Studio. You can track changes to your work as you go.",tags:["versions","stately","studio","tutorial","editor","announcement","modeling","statechart"],authors:["kevin"],image:"/blog/2023-05-02-track-changes-as-you-work-with-version-history.png",slug:"2023-05-02-version-history",date:"2023-05-02T00:00:00.000Z"},prevItem:{title:"Introducing \u27a1\ufe0f state . new",permalink:"/blog/2023-05-03-introducing-state-new"},nextItem:{title:"New default machine",permalink:"/blog/2023-04-28-new-default-machine"}},l={authorsImageUrls:[void 0]},h=[{value:"Why use Version History?",id:"why-use-version-history",level:2},{value:"Progressive layers of detail",id:"progressive-layers-of-detail",level:3},{value:"Modeling experiments",id:"modeling-experiments",level:3},{value:"Creating for different audiences",id:"creating-for-different-audiences",level:3},{value:"Organization and alignment with other versioning systems",id:"organization-and-alignment-with-other-versioning-systems",level:3},{value:"How to use Version History",id:"how-to-use-version-history",level:2},{value:"Version history panel",id:"version-history-panel",level:3},{value:"Saving a version",id:"saving-a-version",level:3},{value:"Viewing past versions",id:"viewing-past-versions",level:3},{value:"Restoring a Version",id:"restoring-a-version",level:4},{value:"Creating a new machine from a version",id:"creating-a-new-machine-from-a-version",level:4},{value:"Deleting a Version",id:"deleting-a-version",level:4},{value:"Returning to the current version",id:"returning-to-the-current-version",level:4},{value:"Restoring a version from the version list",id:"restoring-a-version-from-the-version-list",level:3},{value:"Accessing and sharing versions via URL",id:"accessing-and-sharing-versions-via-url",level:2},{value:"Future plans",id:"future-plans",level:2},{value:"Try it out",id:"try-it-out",level:2}],c={toc:h};function u(e){let{components:t,...r}=e;return(0,i.mdx)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Today we\u2019re happy to introduce another pro feature for our Stately Studio subscribers; ",(0,i.mdx)("strong",{parentName:"p"},"Version History"),". With this feature, you can save versions of your work as you go and refer back to them in the future. ","You can use those versions to compare changes, revert to a previous version, or even create a new machine from a version \ud83c\udf89"),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Viewing the past version of your machine in the Editor.",src:n(62856).Z,width:"1480",height:"962"})),(0,i.mdx)("h2",{id:"why-use-version-history"},"Why use Version History?"),(0,i.mdx)("p",null,"Version history allows you to save the current state of your machine as snapshots that you can go back to at a later time. This allows for a much more flexible way of working and evolving your machine."),(0,i.mdx)("h3",{id:"progressive-layers-of-detail"},"Progressive layers of detail"),(0,i.mdx)("p",null,"When you\u2019re working on a machine, you often start with a high-level overview of the machine\u2019s states and transitions and then gradually add more detail as you go. That detail could include adding actions, guards, nested states, markdown descriptions, and images. Version history allows you to save each of these layers of detail as a version so that you can refer back to them, much like commits in a version control system."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Example of creating versions of your machine for different layers of detail.",src:n(54185).Z,width:"1480",height:"962"})),(0,i.mdx)("h3",{id:"modeling-experiments"},"Modeling experiments"),(0,i.mdx)("p",null,"There are often many ways to model a system with statecharts, all of which are legitimate. Many decisions need to be made regarding state granularity, nesting, grouping or separating transitions and actions, context vs finite states, etc. Version history allows you to save each of these different versions so you can freely compare various approaches and be more experimental when modeling your software."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Example of creating versions of your machine for experimenting with different modeling approaches.",src:n(67129).Z,width:"1480",height:"962"})),(0,i.mdx)("h3",{id:"creating-for-different-audiences"},"Creating for different audiences"),(0,i.mdx)("p",null,"You can also use version history to create different versions of your machine for different audiences. For example, you might want to create a version of your machine that is more detailed for your team and a version that is more high-level for your stakeholders. This can be done by creating screenshots of versions or even by creating new machines from your versions."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Example of creating versions of your machine intended for different audiences.",src:n(45462).Z,width:"1480",height:"962"})),(0,i.mdx)("h3",{id:"organization-and-alignment-with-other-versioning-systems"},"Organization and alignment with other versioning systems"),(0,i.mdx)("p",null,"Version history is a great way to keep your work organized. Just as git commits encourage a more organized workflow, version history encourages you to save your work as you go. It\u2019s very quick to save a version at any time while also convenient to edit a version name or even delete it later on."),(0,i.mdx)("p",null,"Version history can also be used to sync up with semantic versioning of your application or with corresponding tickets in a tracking system. Any other versioning system can be mirrored in Stately Studio using this feature."),(0,i.mdx)("h2",{id:"how-to-use-version-history"},"How to use Version History"),(0,i.mdx)("h3",{id:"version-history-panel"},"Version history panel"),(0,i.mdx)("p",null,"The version history panel is located on the right side of the editor. It shows a list of all the versions of your machine that you have saved. You can see the date and time of each version, as well as the author of the version."),(0,i.mdx)("h3",{id:"saving-a-version"},"Saving a version"),(0,i.mdx)("p",null,"To save a version, click the ",(0,i.mdx)("strong",{parentName:"p"},"+ Save")," button in the version history panel. A new version will be added to the top of the list. You can edit the version name or just keep the timestamp as the name."),(0,i.mdx)("h3",{id:"viewing-past-versions"},"Viewing past versions"),(0,i.mdx)("p",null,"Clicking on a version in the list will show you the machine as it was at that point in time. You can still inspect properties of your machine along with canvas elements and you can switch between Design mode and Simulate mode to simulate this version of the machine."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Viewing the past version of your machine in the Editor, indicating the features for working with that version.",src:n(29041).Z,width:"1480",height:"962"})),(0,i.mdx)("h4",{id:"restoring-a-version"},"Restoring a Version"),(0,i.mdx)("p",null,"The top header includes a button to ",(0,i.mdx)("strong",{parentName:"p"},"Restore")," ","[1]"," the machine to this version. This will overwrite the current machine with the version you are viewing. However, you can undo that restoration using the Undo button to the bottom right of the canvas as you would with any other edit you make."),(0,i.mdx)("h4",{id:"creating-a-new-machine-from-a-version"},"Creating a new machine from a version"),(0,i.mdx)("p",null,"The Copy button ","[2]"," allows you to create a new machine (like a fork) from this version which will reside alongside the original machine within the same project."),(0,i.mdx)("h4",{id:"deleting-a-version"},"Deleting a Version"),(0,i.mdx)("p",null,"The Delete button ","[3]"," will permanently delete the version and remove it from the list of versions."),(0,i.mdx)("h4",{id:"returning-to-the-current-version"},"Returning to the current version"),(0,i.mdx)("p",null,"Clicking the Close button ","[4]"," in the header, clicking the ",(0,i.mdx)("strong",{parentName:"p"},"Current version")," button ","[5]"," in the Version History panel, or pressing the Escape key will return you to the current version of the machine."),(0,i.mdx)("h3",{id:"restoring-a-version-from-the-version-list"},"Restoring a version from the version list"),(0,i.mdx)("p",null,"As an added convenience, you can also restore a version directly from the version list in the ",(0,i.mdx)("strong",{parentName:"p"},"Version History")," panel without first viewing that version. To do this, click the Restore button to the right of the version you want to restore. This will overwrite the current machine with the version you selected but can be undone using the Undo button.\n",(0,i.mdx)("img",{alt:"Restoring your machine to a past version from the versions list.",src:n(14321).Z,width:"1480",height:"572"})),(0,i.mdx)("h2",{id:"accessing-and-sharing-versions-via-url"},"Accessing and sharing versions via URL"),(0,i.mdx)("p",null,"When viewing a specific version, a unique URL is created so it is possible to copy and share that URL with others. Assuming the recipient has access to the machine, this URL will take them to that machine at the specific version."),(0,i.mdx)("h2",{id:"future-plans"},"Future plans"),(0,i.mdx)("p",null,"Saving versions of machines is a significant step in a larger effort to make the modeling experience in Stately Studio more robust and even more useful in software production. It will soon enable some exciting new features we are already building on top of versions. In the meantime, we are also thinking about more ways to create and interact with versions and we would love to hear your feedback on how you would like to use version history in your workflow!"),(0,i.mdx)("h2",{id:"try-it-out"},"Try it out"),(0,i.mdx)("p",null,"Version history is included with the ",(0,i.mdx)("a",{parentName:"p",href:"https://stately.ai/pricing"},"Pro subscription")," to Stately Studio. If you\u2019re not a Pro subscriber yet, you can still get started today with versioning your work by getting a 30-day free trial!"))}u.isMDXComponent=!0},14321:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-05-02-example-restore-from-version-list-f397397925d1d73d4b6e41923d18cd14.png"},29041:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-05-02-example-version-view-explained-e95b4fcf2c87e7793f222d2d2cbb3681.png"},62856:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-05-02-example-version-view-plain-a71d3a6459c96963dae96bbf4ba9bbcd.png"},45462:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-05-02-example-why-audiences-0e973746cc28beea124d197e07fd7c1f.png"},54185:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-05-02-example-why-layers-of-detail-f95f9a55d16cc4c46204a35cc7fd78cf.png"},67129:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-05-02-example-why-modeling-experiments-5c6654f664944d212f1a96c90e20057b.png"}}]);