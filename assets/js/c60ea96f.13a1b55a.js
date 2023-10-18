"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[134],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>h,mdx:()=>c,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),d=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,v=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(v,s(s({ref:n},m),{},{components:t})):r.createElement(v,s({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},90271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const o={title:"Version history"},i="Version history",s={unversionedId:"versions",id:"versions",title:"Version history",description:"Version history is helpful if you want to save checkpoints while modeling machines or mirror version changes in the rest of your codebase. New versions can be saved from the current machine using the Version history panel in the right tool menu when in Design mode.",source:"@site/docs/versions.mdx",sourceDirName:".",slug:"/versions",permalink:"/docs/versions",draft:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/versions.mdx",tags:[],version:"current",frontMatter:{title:"Version history"},sidebar:"docs",previous:{title:"Upgrade your Stately Studio account",permalink:"/docs/upgrade"},next:{title:"Lock machines",permalink:"/docs/lock-machines"}},l={},m=[{value:"Save a version",id:"save-a-version",level:2},{value:"Rename a version",id:"rename-a-version",level:3},{value:"Auto-saved versions",id:"auto-saved-versions",level:2},{value:"Initial versions",id:"initial-versions",level:3},{value:"Periodic snapshot versions",id:"periodic-snapshot-versions",level:3},{value:"View a version",id:"view-a-version",level:2},{value:"Restore a version",id:"restore-a-version",level:2},{value:"Restore a version from the <strong>Version history</strong> panel",id:"restore-a-version-from-the-version-history-panel",level:3},{value:"Restore a version when viewing a version",id:"restore-a-version-when-viewing-a-version",level:3},{value:"Create a new machine from a version",id:"create-a-new-machine-from-a-version",level:2},{value:"Delete a version",id:"delete-a-version",level:2},{value:"Team roles and versions",id:"team-roles-and-versions",level:2}],d=(p="ThemedImage",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var p;const h={toc:m};function u(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"version-history"},"Version history"),(0,a.mdx)("p",null,"Version history is helpful if you want to save checkpoints while modeling machines or mirror version changes in the rest of your codebase. New versions can be saved from the current machine using the ",(0,a.mdx)("strong",{parentName:"p"},"Version history")," panel in the right tool menu when in ",(0,a.mdx)("strong",{parentName:"p"},"Design")," mode."),(0,a.mdx)("p",null,"All users can view versions of public machines. Users on our Pro plan and team members can view and create versions for machines in team projects and their own machines in ",(0,a.mdx)("strong",{parentName:"p"},"My Projects"),". ",(0,a.mdx)("a",{parentName:"p",href:"#team-roles-and-versions"},"Read more about team roles and versions"),"."),(0,a.mdx)("admonition",{type:"studio"},(0,a.mdx)("p",{parentName:"admonition"},"Version history is a Pro feature of the Stately Studio. ",(0,a.mdx)("a",{parentName:"p",href:"/docs/studio-pro-plan"},"Check out the features on our Pro plan")," or ",(0,a.mdx)("a",{parentName:"p",href:"https://stately.ai/registry/billing"},"upgrade to try the Pro plan with a 30-day free trial"),".")),(0,a.mdx)("h2",{id:"save-a-version"},"Save a version"),(0,a.mdx)("p",null,"You can save a new version of your machine when in ",(0,a.mdx)("strong",{parentName:"p"},"Design")," mode."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Open the ",(0,a.mdx)("strong",{parentName:"li"},"Version history")," panel from the right tool menu."),(0,a.mdx)("li",{parentName:"ol"},"The ",(0,a.mdx)("strong",{parentName:"li"},"Current version")," of the machine is selected by default. Use the ",(0,a.mdx)("strong",{parentName:"li"},"Save")," button to create a new version from your current machine.")),(0,a.mdx)("admonition",{type:"tip"},(0,a.mdx)("p",{parentName:"admonition"},"The ",(0,a.mdx)("strong",{parentName:"p"},"Save")," button will be disabled unless you have changed your machine since you created the latest version.")),(0,a.mdx)("p",null,"Versions are named with their creation time by default and have the version creator\u2019s avatar."),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"Version history panel opened from the right tool menu showing a list of versions.",sources:{light:"/assets/versions/version-toolbox.png",dark:"/assets/versions/version-toolbox-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("h3",{id:"rename-a-version"},"Rename a version"),(0,a.mdx)("p",null,"You can rename any version to something other than the version\u2019s timestamp."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Select the version name to reveal the text input."),(0,a.mdx)("li",{parentName:"ol"},"Enter the version\u2019s new name."),(0,a.mdx)("li",{parentName:"ol"},"The new name will be autosaved when you hit enter or navigate away from the text input.")),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"Selecting a version name in the Version history panel, showing the text input for the new name.",sources:{light:"/assets/versions/version-rename.png",dark:"/assets/versions/version-rename-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("p",null,"The version\u2019s timestamp will still be shown under the version name."),(0,a.mdx)("h2",{id:"auto-saved-versions"},"Auto-saved versions"),(0,a.mdx)("p",null,"There are some cases where versions will automatically be created for a machine Auto-saved versions are indicated in the list of versions with the Stately bot icon."),(0,a.mdx)("h3",{id:"initial-versions"},"Initial versions"),(0,a.mdx)("p",null,"An initial version is automatically saved for new machines when:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"you fork a machine from an existing machine or project"),(0,a.mdx)("li",{parentName:"ul"},"you duplicate an existing machine in its project")),(0,a.mdx)("p",null,"These versions are labeled \u201cInitial version\u201d."),(0,a.mdx)("h3",{id:"periodic-snapshot-versions"},"Periodic snapshot versions"),(0,a.mdx)("p",null,"To reduce the likelihood of data loss, versions are automatically saved hourly as long as edits have been made to the project machine. These versions are labeled with a timestamp that can be edited by you. They work just like other versions that you can view, restore, or delete."),(0,a.mdx)("p",null,"In the version list, these auto-saved versions are hidden by default but you can toggle their visibility to show them along with versions you explicitly save."),(0,a.mdx)("h2",{id:"view-a-version"},"View a version"),(0,a.mdx)("p",null,"You can view any version by selecting that version in the ",(0,a.mdx)("strong",{parentName:"p"},"Version history"),". The version will be shown in the Editor and read-only unless you restore that version using the ",(0,a.mdx)("strong",{parentName:"p"},"Restore")," button."),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"A version previewed in the Editor which highlights the top bar to show you\u2019re in preview mode.",sources:{light:"/assets/versions/version-preview.png",dark:"/assets/versions/version-preview-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("p",null,"You can return to viewing the current version of your machine from ",(0,a.mdx)("strong",{parentName:"p"},"Return to current version")," in the top bar or by selecting ",(0,a.mdx)("strong",{parentName:"p"},"Current Version")," from the ",(0,a.mdx)("strong",{parentName:"p"},"Version history")," in the right tool menu."),(0,a.mdx)("h2",{id:"restore-a-version"},"Restore a version"),(0,a.mdx)("p",null,"You can restore your current machine to any version from the version history."),(0,a.mdx)("h3",{id:"restore-a-version-from-the-version-history-panel"},"Restore a version from the ",(0,a.mdx)("strong",{parentName:"h3"},"Version history")," panel"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Open the ",(0,a.mdx)("strong",{parentName:"li"},"Version history")," panel from the right tool menu."),(0,a.mdx)("li",{parentName:"ol"},"Hover over the version you want to restore to reveal the restore icon button."),(0,a.mdx)("li",{parentName:"ol"},"Use the restore icon button to restore to your chosen version.")),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"Version history panel with the restore icon revealed on hover.",sources:{light:"/assets/versions/version-restore.png",dark:"/assets/versions/version-restore-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("h3",{id:"restore-a-version-when-viewing-a-version"},"Restore a version when viewing a version"),(0,a.mdx)("p",null,"When ",(0,a.mdx)("a",{parentName:"p",href:"#view-a-version"},"viewing a version"),", you can restore to that version using the ",(0,a.mdx)("strong",{parentName:"p"},"Restore")," button in the top bar."),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"A version previewed in the Editor with an arrow pointing to the Restore button.",sources:{light:"/assets/versions/version-restore-button.png",dark:"/assets/versions/version-restore-button-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("h2",{id:"create-a-new-machine-from-a-version"},"Create a new machine from a version"),(0,a.mdx)("p",null,"You can also create a new machine from a version in your version history."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Open the ",(0,a.mdx)("strong",{parentName:"li"},"Version history")," panel from the right tool menu."),(0,a.mdx)("li",{parentName:"ol"},"Select the version from which you want to create a new machine. The version will be previewed in the Editor."),(0,a.mdx)("li",{parentName:"ol"},"Use the copy icon button in the top bar to create a new machine from that version.")),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"A version previewed in the Editor with an arrow pointing to the Copy button.",sources:{light:"/assets/versions/version-copy.png",dark:"/assets/versions/version-copy-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("p",null,"Your new machine will be created and opened in the same project with the same name appended with \u201c(copy).\u201d"),(0,a.mdx)("h2",{id:"delete-a-version"},"Delete a version"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Open the ",(0,a.mdx)("strong",{parentName:"li"},"Version history")," panel from the right tool menu."),(0,a.mdx)("li",{parentName:"ol"},"Select the version you want to delete. The version will be previewed in the Editor."),(0,a.mdx)("li",{parentName:"ol"},"Use the delete icon button in the top bar to delete that version."),(0,a.mdx)("li",{parentName:"ol"},"The current version will then be opened in the Editor.")),(0,a.mdx)("p",null,(0,a.mdx)(d,{alt:"A version previewed in the Editor with an arrow pointing to the Delete button.",sources:{light:"/assets/versions/version-delete.png",dark:"/assets/versions/version-delete-dm.png"},mdxType:"ThemedImage"})),(0,a.mdx)("h2",{id:"team-roles-and-versions"},"Team roles and versions"),(0,a.mdx)("p",null,"All team members can view past versions of machines in their team\u2019s projects. Team owners, Admins, and Editors can also create and restore versions. Only Owners and Admins can delete versions."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Capability"),(0,a.mdx)("th",{parentName:"tr",align:null},"Owner"),(0,a.mdx)("th",{parentName:"tr",align:null},"Admin"),(0,a.mdx)("th",{parentName:"tr",align:null},"Editor"),(0,a.mdx)("th",{parentName:"tr",align:null},"Viewer"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"View team machine versions"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Create new versions of team machines"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Restore versions of team machines"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"prohibited"},"\ud83d\udeab")," No")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Delete versions of team machines"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"check mark button"},"\u2705")," Yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"prohibited"},"\ud83d\udeab")," No"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("span",{parentName:"td",role:"img","aria-label":"prohibited"},"\ud83d\udeab")," No")))))}u.isMDXComponent=!0}}]);