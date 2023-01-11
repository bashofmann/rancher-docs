"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4"},a=void 0,s={unversionedId:"integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",id:"version-2.6/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",description:"\u901a\u8fc7 Apps & Marketplace\uff08Rancher v2.6.5 \u4e4b\u524d\u7684\u7248\u672c\uff09\u6216 Apps\uff08Rancher v2.6.5+\uff09\u5b89\u88c5\u6216\u5347\u7ea7 Istio Helm Chart \u65f6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",sourceDirName:"integrations-in-rancher/istio/configuration-options",slug:"/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",permalink:"/zh/v2.6/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",tags:[],version:"2.6",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4"},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e",permalink:"/zh/v2.6/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},next:{title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",permalink:"/zh/v2.6/integrations-in-rancher/istio/configuration-options/project-network-isolation"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},"Apps & Marketplace"),"\uff08Rancher v2.6.5 \u4e4b\u524d\u7684\u7248\u672c\uff09\u6216 ",(0,i.kt)("strong",{parentName:"p"},"Apps"),"\uff08Rancher v2.6.5+\uff09\u5b89\u88c5\u6216\u5347\u7ea7 Istio Helm Chart \u65f6\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u8981\u5b89\u88c5 Chart\uff0c\u8bf7\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5728\u5b89\u88c5\u524d\u81ea\u5b9a\u4e49 Helm \u9009\u9879"),"\uff0c\u7136\u540e\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f60\u5c06\u770b\u5230\u914d\u7f6e Istio Helm Chart \u7684\u9009\u9879\u3002\u5728",(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u9009\u9879\u5361\u4e0a\uff0c\u9009\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u542f\u7528 CNI")," \u65c1\u8fb9\u7684\u6846\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8986\u76d6\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"cniBinDir")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"cniConfDir"),"\u3002\u6709\u5173\u8fd9\u4e9b\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters"},"Istio \u6587\u6863"),"\u3002\u4e0b\u65b9\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n        - istio-system\n        - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u73b0\u5728\u4f60\u5e94\u8be5\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4f7f\u7528 Istio\uff0c\u5305\u62ec Sidecar \u6ce8\u5165\u548c\u901a\u8fc7 Kiali \u8fdb\u884c\u76d1\u63a7\u3002"))}u.isMDXComponent=!0}}]);