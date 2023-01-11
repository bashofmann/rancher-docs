"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Azure \u8282\u70b9\u6a21\u677f\u914d\u7f6e"},i=void 0,c={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",id:"version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",title:"Azure \u8282\u70b9\u6a21\u677f\u914d\u7f6e",description:"\u6709\u5173 Azure \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Azure \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",permalink:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Azure \u8282\u70b9\u6a21\u677f\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"DigitalOcean \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"},next:{title:"vSphere \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"}},u={},l=[],s={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u5173 Azure \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/?product=featured"},"Azure \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u8d26\u6237\u8bbf\u95ee\u4fe1\u606f\u5b58\u50a8\u5728\u4e91\u51ed\u8bc1\u4e2d\u3002\u4e91\u51ed\u8bc1\u5b58\u50a8\u5728 Kubernetes \u5bc6\u6587\u4e2d\u3002\u591a\u4e2a\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u4e91\u51ed\u8bc1\u6216\u521b\u5efa\u65b0\u7684\u51ed\u8bc1\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Placement")," \u8bbe\u7f6e\u6258\u7ba1\u96c6\u7fa4\u7684\u5730\u7406\u533a\u57df\u4ee5\u53ca\u5176\u4ed6\u4f4d\u7f6e\u5143\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network")," \u914d\u7f6e\u96c6\u7fa4\u4e2d\u4f7f\u7528\u7684\u7f51\u7edc\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instance")," \u81ea\u5b9a\u4e49\u4f60\u7684 VM \u914d\u7f6e\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728\u4e0e VM \u4e0d\u540c\u7684\u8d44\u6e90\u7ec4\u4e2d\u4f7f\u7528 VNet\uff0c\u5219 VNet \u540d\u79f0\u9700\u8981\u4ee5\u8d44\u6e90\u7ec4\u540d\u79f0\u4f5c\u4e3a\u524d\u7f00\u3002\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"<resource group>:<vnet>"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," \u914d\u7f6e\u9009\u9879\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6807\u7b7e"),"\uff1a\u6709\u5173\u6807\u7b7e\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker \u5bf9\u8c61\u6807\u7b7e\u6587\u6863"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker \u5f15\u64ce\u5b89\u88c5 URL"),"\uff1a\u786e\u5b9a\u8981\u5728\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u7684 Docker \u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u955c\u50cf\u4ed3\u5e93 mirror"),"\uff1aDocker daemon \u4f7f\u7528\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u955c\u50cf\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5176\u4ed6\u9ad8\u7ea7\u9009\u9879"),"\uff1a\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon \u9009\u9879\u53c2\u8003"),"\u3002")))}p.isMDXComponent=!0}}]);