"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64241],{3905:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>N});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},i=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),m=d(r),N=a,k=m["".concat(o,".").concat(N)]||m[N]||s[N]||l;return r?n.createElement(k,p(p({ref:e},i),{},{components:r})):n.createElement(k,p({ref:e},i))}));function N(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,p=new Array(l);p[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,p[1]=u;for(var d=2;d<l;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4369:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={title:"Windows and Linux Cluster Feature Parity"},p=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity",title:"Windows and Linux Cluster Feature Parity",description:"Windows clusters do not share the same feature support as Linux clusters.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity.md",tags:[],version:"current",lastUpdatedAt:1668560971,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Windows and Linux Cluster Feature Parity"},sidebar:"tutorialSidebar",previous:{title:"Configuration for Storage Classes in Azure",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/azure-storageclass-configuration"},next:{title:"Networking Requirements for Host Gateway (L2bridge)",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/network-requirements-for-host-gateway"}},o={},d=[],i={toc:d};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Windows clusters do not share the same feature support as Linux clusters."),(0,a.kt)("p",null,"The following chart describes the feature parity between Windows and Linux on Rancher:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Component")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Linux")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Windows")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Distributions")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RKE"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RKE2"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3S"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EKS"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GKE"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AKS"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Rancher Components")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fleet"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EKS Operator"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AKS Operator"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GKE Operator"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring/Alerting v2"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Logging v2"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Istio"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Catalog v2"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OPA"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CIS Scans"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backup/Restore Operator"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"CNI / Add-ons")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flannel"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Canal"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Calico"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported (RKE2 Only)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cilium"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multus"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Traefik"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NGINX Ingress"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported"),(0,a.kt)("td",{parentName:"tr",align:null},"Not Supported")))),(0,a.kt)("p",null,"For updated information on feature support, you may visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/windows"},"rancher/windows")," on GitHub."))}s.isMDXComponent=!0}}]);