"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Rollbacks"},l=void 0,i={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",title:"Rollbacks",description:"Note: RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux",slug:"/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Rollbacks"},sidebar:"tutorialSidebar",previous:{title:"Install/Upgrade Rancher with RancherD",permalink:"/v2.5/pages-for-subheaders/install-rancher-on-linux"},next:{title:"Upgrades",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd"}},s={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.")),(0,a.kt)("p",null,"To roll back Rancher to a previous version, re-run the installation script with the previous version specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALL_RANCHERD_VERSION")," environment variable."))}p.isMDXComponent=!0}}]);