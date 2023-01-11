"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"Enable Istio with Pod Security Policies"},a=void 0,l={unversionedId:"integrations-in-rancher/istio/configuration-options/pod-security-policies",id:"version-2.6/integrations-in-rancher/istio/configuration-options/pod-security-policies",title:"Enable Istio with Pod Security Policies",description:"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin.",source:"@site/versioned_docs/version-2.6/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",sourceDirName:"integrations-in-rancher/istio/configuration-options",slug:"/integrations-in-rancher/istio/configuration-options/pod-security-policies",permalink:"/v2.6/integrations-in-rancher/istio/configuration-options/pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",tags:[],version:"2.6",lastUpdatedAt:1670549188,formattedLastUpdatedAt:"Dec 9, 2022",frontMatter:{title:"Enable Istio with Pod Security Policies"},sidebar:"tutorialSidebar",previous:{title:"Configuration Options",permalink:"/v2.6/pages-for-subheaders/configuration-options"},next:{title:"Selectors and Scrape Configs",permalink:"/v2.6/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"}},s={},c=[{value:"1. Set the PodSecurityPolicy to unrestricted",id:"1-set-the-podsecuritypolicy-to-unrestricted",level:3},{value:"2. Enable the CNI",id:"2-enable-the-cni",level:3},{value:"3. Verify that the CNI is working",id:"3-verify-that-the-cni-is-working",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin."),(0,r.kt)("p",null,"The Istio CNI plugin removes the need for each application pod to have a privileged ",(0,r.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," container. For further information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI Plugin docs"),". Please note that the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI Plugin is in alpha"),"."),(0,r.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The cluster must be an RKE Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},"The cluster must have been created with a default PodSecurityPolicy.")),(0,r.kt)("p",{parentName:"admonition"},"To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to ",(0,r.kt)("b",null,"Advanced Options.")," In the ",(0,r.kt)("b",null,"Pod Security Policy Support")," section, click ",(0,r.kt)("b",null,"Enabled.")," Then select a default pod security policy.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-set-the-podsecuritypolicy-to-unrestricted"},"Set the PodSecurityPolicy to unrestricted")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-enable-the-cni"},"Enable the CNI")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-verify-that-the-cni-is-working"},"Verify that the CNI is working."))),(0,r.kt)("h3",{id:"1-set-the-podsecuritypolicy-to-unrestricted"},"1. Set the PodSecurityPolicy to unrestricted"),(0,r.kt)("p",null,"An unrestricted PSP allows Istio to be installed."),(0,r.kt)("p",null,"Set the PSP to ",(0,r.kt)("inlineCode",{parentName:"p"},"unrestricted")," in the project where is Istio is installed, or the project where you plan to install Istio."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the ",(0,r.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,r.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("h3",{id:"2-enable-the-cni"},"2. Enable the CNI"),(0,r.kt)("p",null,"When installing or upgrading Istio through ",(0,r.kt)("strong",{parentName:"p"},"Apps & Marketplace")," (Rancher before v2.6.5) or ",(0,r.kt)("strong",{parentName:"p"},"Apps")," (Rancher v2.6.5+)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Components"),"."),(0,r.kt)("li",{parentName:"ol"},"Check the box next to ",(0,r.kt)("strong",{parentName:"li"},"Enabled CNI"),"."),(0,r.kt)("li",{parentName:"ol"},"Finish installing or upgrading Istio.")),(0,r.kt)("p",null,"The CNI can also be enabled by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"istio_cni.enabled: true\n")),(0,r.kt)("p",null,"Istio should install successfully with the CNI enabled in the cluster."),(0,r.kt)("h3",{id:"3-verify-that-the-cni-is-working"},"3. Verify that the CNI is working"),(0,r.kt)("p",null,"Verify that the CNI is working by deploying a ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"sample application")," or deploying one of your own applications."))}u.isMDXComponent=!0}}]);