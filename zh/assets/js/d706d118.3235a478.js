"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73272],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(h,r(r({ref:t},p),{},{components:i})):n.createElement(h,r({ref:t},p))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},75011:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));const a={title:"Enable Istio with Pod Security Policies"},r=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp",title:"Enable Istio with Pod Security Policies",description:"Note: The following guide is only for RKE provisioned clusters.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Enable Istio with Pod Security Policies"},sidebar:"tutorialSidebar",previous:{title:"1. Enable Istio in the Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},next:{title:"2. Enable Istio in a Namespace",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"}},s={},c=[{value:"1. Configure the System Project Policy to allow Istio install",id:"1-configure-the-system-project-policy-to-allow-istio-install",level:3},{value:"2. Install the CNI Plugin in the System Project",id:"2-install-the-cni-plugin-in-the-system-project",level:3},{value:"3. Install Istio",id:"3-install-istio",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The following guide is only for RKE provisioned clusters.")),(0,o.kt)("p",null,"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin."),(0,o.kt)("p",null,"The Istio CNI plugin removes the need for each application pod to have a privileged ",(0,o.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," container. For further information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI Plugin docs"),". Please note that the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI Plugin is in alpha"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-configure-the-system-project-policy-to-allow-istio-install"},"Configure the System Project Policy to allow Istio install.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-install-the-cni-plugin-in-the-system-project"},"Install the CNI plugin in the System project.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-install-istio"},"Install Istio."))))),(0,o.kt)("h3",{id:"1-configure-the-system-project-policy-to-allow-istio-install"},"1. Configure the System Project Policy to allow Istio install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the main menu of the ",(0,o.kt)("strong",{parentName:"li"},"Dashboard"),", select ",(0,o.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the ",(0,o.kt)("strong",{parentName:"li"},"Project: System")," project and select the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click Save.")),(0,o.kt)("h3",{id:"2-install-the-cni-plugin-in-the-system-project"},"2. Install the CNI Plugin in the System Project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the main menu of the ",(0,o.kt)("strong",{parentName:"li"},"Dashboard"),", select ",(0,o.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Project: System")," project."),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"Tools > Catalogs")," in the navigation bar."),(0,o.kt)("li",{parentName:"ol"},"Add a catalog with the following:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Name: istio-cni"),(0,o.kt)("li",{parentName:"ol"},"Catalog URL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/istio/cni"},"https://github.com/istio/cni")),(0,o.kt)("li",{parentName:"ol"},"Branch: The branch that matches your current release, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"release-1.4"),"."))),(0,o.kt)("li",{parentName:"ol"},"From the main menu select ",(0,o.kt)("strong",{parentName:"li"},"Apps")),(0,o.kt)("li",{parentName:"ol"},"Click Launch and select istio-cni"),(0,o.kt)("li",{parentName:"ol"},'Update the namespace to be "kube-system"'),(0,o.kt)("li",{parentName:"ol"},'In the answers section, click "Edit as YAML" and paste in the following, then click launch:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'---\n  logLevel: "info"\n  excludeNamespaces:\n    - "istio-system"\n    - "kube-system"\n')),(0,o.kt)("h3",{id:"3-install-istio"},"3. Install Istio"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"primary instructions"),", adding a custom answer: ",(0,o.kt)("inlineCode",{parentName:"p"},"istio_cni.enabled: true"),"."),(0,o.kt)("p",null,"After Istio has finished installing, the Apps page in System Projects should show both istio and ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-cni")," applications deployed successfully. Sidecar injection will now be functional."))}u.isMDXComponent=!0}}]);