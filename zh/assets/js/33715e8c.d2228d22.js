"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1"},i=void 0,c={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",title:"\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1",description:"\u5728\u914d\u7f6e\u5916\u90e8\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4e4b\u524d\uff0c\u4f60\u5c06\u9ed8\u8ba4\u4f7f\u7528\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1\u3002\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1\u6307\u7684\u662f Rancher \u4f7f\u7528\u5b58\u50a8\u5728\u672c\u5730\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u5bf9\u7528\u6237\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u901a\u8fc7\u7684\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5230 Rancher\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u4e8e\u9996\u6b21\u767b\u5f55 Rancher \u7684 admin \u7528\u6237\u5c31\u662f\u4e00\u4e2a\u672c\u5730\u7528\u6237\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1"},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u548c\u7ec4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups"},next:{title:"\u914d\u7f6e Google OAuth",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth"}},s={},u=[{value:"\u6dfb\u52a0\u672c\u5730\u7528\u6237",id:"\u6dfb\u52a0\u672c\u5730\u7528\u6237",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u914d\u7f6e\u5916\u90e8\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4e4b\u524d\uff0c\u4f60\u5c06\u9ed8\u8ba4\u4f7f\u7528\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1\u3002\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1\u6307\u7684\u662f Rancher \u4f7f\u7528\u5b58\u50a8\u5728\u672c\u5730\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u5bf9\u7528\u6237\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u901a\u8fc7\u7684\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5230 Rancher\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u4e8e\u9996\u6b21\u767b\u5f55 Rancher \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," \u7528\u6237\u5c31\u662f\u4e00\u4e2a\u672c\u5730\u7528\u6237\u3002"),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u672c\u5730\u7528\u6237"},"\u6dfb\u52a0\u672c\u5730\u7528\u6237"),(0,o.kt)("p",null,"\u65e0\u8bba\u662f\u5426\u4f7f\u7528\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u670d\u52a1\uff0c\u4f60\u90fd\u5e94\u521b\u5efa\u4e00\u4e9b\u672c\u5730\u8eab\u4efd\u8ba4\u8bc1\u7684\u7528\u6237\uff0c\u4ee5\u4fbf\u5728\u5916\u90e8\u9a8c\u8bc1\u670d\u52a1\u9047\u5230\u95ee\u9898\u65f6\u7ee7\u7eed\u4f7f\u7528 Rancher\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u7528\u6237"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b8c\u6210",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u7528\u6237"),"\u7684\u8868\u5355\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")))}p.isMDXComponent=!0}}]);