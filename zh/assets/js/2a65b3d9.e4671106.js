"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u4e3b\u673a\u9a71\u52a8"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",title:"\u4e3b\u673a\u9a71\u52a8",description:"\u4e3b\u673a\u9a71\u52a8\u7528\u4e8e\u914d\u7f6e\u4e3b\u673a\uff0cRancher \u4f7f\u7528\u8fd9\u4e9b\u4e3b\u673a\u542f\u52a8\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002\u4e3b\u673a\u9a71\u52a8\u4e0e Docker Machine \u9a71\u52a8\u76f8\u540c\u3002\u521b\u5efa\u4e3b\u673a\u6a21\u677f\u65f6\u53ef\u4ee5\u663e\u793a\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u662f\u7531\u4e3b\u673a\u9a71\u52a8\u7684\u72b6\u6001\u5b9a\u4e49\u7684\u3002\u53ea\u6709 active \u4e3b\u673a\u9a71\u52a8\u5c06\u663e\u793a\u4e3a\u521b\u5efa\u8282\u70b9\u6a21\u677f\u7684\u9009\u9879\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e0e\u8bb8\u591a\u73b0\u6709\u7684 Docker Machine \u9a71\u52a8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8\u5e76\u6dfb\u52a0\u5230 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u4e3b\u673a\u9a71\u52a8"},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u9a71\u52a8",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},next:{title:"RKE \u6a21\u677f",permalink:"/zh/pages-for-subheaders/about-rke1-templates"}},l={},c=[{value:"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8",id:"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8",level:4},{value:"\u6fc0\u6d3b/\u505c\u7528\u4e3b\u673a\u9a71\u52a8",id:"\u6fc0\u6d3b\u505c\u7528\u4e3b\u673a\u9a71\u52a8",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8",level:2},{value:"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8",id:"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3b\u673a\u9a71\u52a8\u7528\u4e8e\u914d\u7f6e\u4e3b\u673a\uff0cRancher \u4f7f\u7528\u8fd9\u4e9b\u4e3b\u673a\u542f\u52a8\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002\u4e3b\u673a\u9a71\u52a8\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/drivers/"},"Docker Machine \u9a71\u52a8"),"\u76f8\u540c\u3002\u521b\u5efa\u4e3b\u673a\u6a21\u677f\u65f6\u53ef\u4ee5\u663e\u793a\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u662f\u7531\u4e3b\u673a\u9a71\u52a8\u7684\u72b6\u6001\u5b9a\u4e49\u7684\u3002\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," \u4e3b\u673a\u9a71\u52a8\u5c06\u663e\u793a\u4e3a\u521b\u5efa\u8282\u70b9\u6a21\u677f\u7684\u9009\u9879\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e0e\u8bb8\u591a\u73b0\u6709\u7684 Docker Machine \u9a71\u52a8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8\u5e76\u6dfb\u52a0\u5230 Rancher\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u5411\u7528\u6237\u663e\u793a\u7279\u5b9a\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u5219\u9700\u8981\u505c\u7528\u8fd9\u4e9b\u4e3b\u673a\u9a71\u52a8\u3002"),(0,a.kt)("h4",{id:"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8"},"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u521b\u5efa\u3001\u7f16\u8f91\u6216\u5220\u9664\u9a71\u52a8\uff0c\u4f60\u9700\u8981\u4ee5\u4e0b\u6743\u9650\u4e2d\u7684",(0,a.kt)("em",{parentName:"p"},"\u4e00\u4e2a"),"\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458\u5168\u5c40\u6743\u9650")),(0,a.kt)("li",{parentName:"ul"},"\u5206\u914d\u4e86",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u4e3b\u673a\u9a71\u52a8\u89d2\u8272"),"\u7684",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%A8%E5%B1%80%E6%9D%83%E9%99%90"},"\u81ea\u5b9a\u4e49\u5168\u5c40\u6743\u9650"),"\u3002"))),(0,a.kt)("h2",{id:"\u6fc0\u6d3b\u505c\u7528\u4e3b\u673a\u9a71\u52a8"},"\u6fc0\u6d3b/\u505c\u7528\u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4ec5\u6fc0\u6d3b\u4e3b\u6d41\u4e91\u63d0\u4f9b\u5546 Amazon EC2\u3001Azure\u3001DigitalOcean \u548c vSphere \u7684\u9a71\u52a8\u3002\u5982\u679c\u8981\u663e\u793a\u6216\u9690\u85cf\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u66f4\u6539\u9a71\u52a8\u7684\u72b6\u6001\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u9a71\u52a8"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u673a\u9a71\u52a8"),"\u9009\u9879\u5361\u4e0a\uff0c\u9009\u62e9\u8981\u6fc0\u6d3b\u6216\u505c\u7528\u7684\u9a71\u52a8\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u6fc0\u6d3b")," \u6216 ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u505c\u7528"),"\u3002"))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Rancher \u4e0d\u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u63d0\u4f9b\u5546\u7684\u9a71\u52a8\uff0c\u4ece\u800c\u4f7f\u7528\u8be5\u9a71\u52a8\u4e3a\u4f60\u7684 Kubernetes \u96c6\u7fa4\u521b\u5efa\u8282\u70b9\u6a21\u677f\u5e76\u6700\u7ec8\u521b\u5efa\u8282\u70b9\u6c60\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u9a71\u52a8"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u4e3b\u673a\u9a71\u52a8"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u4e3b\u673a\u9a71\u52a8"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u586b\u5199",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u4e3b\u673a\u9a71\u52a8"),"\u8868\u5355\u3002\u7136\u540e\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h3",{id:"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8"},"\u5f00\u53d1\u81ea\u5df1\u7684\u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("p",null,"\u4e3b\u673a\u9a71\u52a8\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," \u6765\u5b9e\u73b0\u3002"))}p.isMDXComponent=!0}}]);