"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[71651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Vagrant Quick Start"},o=void 0,l={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/vagrant",id:"version-2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",title:"Vagrant Quick Start",description:"The following steps quickly deploy a Rancher Server with a single node cluster attached.",source:"@site/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",permalink:"/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Vagrant Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Rancher GCP Quick Start Guide",permalink:"/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},next:{title:"Manual Quick Start",permalink:"/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Note",id:"note",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following steps quickly deploy a Rancher Server with a single node cluster attached."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.vagrantup.com"},"Vagrant"),": Vagrant is required as this is used to provision the machine based on the Vagrantfile."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.virtualbox.org"},"Virtualbox"),": The virtual machines that Vagrant provisions need to be provisioned to VirtualBox."),(0,a.kt)("li",{parentName:"ul"},"At least 4GB of free RAM.")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vagrant will require plugins to create VirtualBox VMs. Install them with the following commands:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-vboxmanage")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-vbguest")))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go into the folder containing the Vagrantfile by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"cd quickstart/vagrant"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," to:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Change the number of nodes and the memory allocations, if required. (",(0,a.kt)("inlineCode",{parentName:"li"},"node.count"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"node.cpus"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"node.memory"),")"),(0,a.kt)("li",{parentName:"ul"},"Change the password of the ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")," user for logging into Rancher. (",(0,a.kt)("inlineCode",{parentName:"li"},"admin_password"),")"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To initiate the creation of the environment run, ",(0,a.kt)("inlineCode",{parentName:"p"},"vagrant up --provider=virtualbox"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once provisioning finishes, go to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://192.168.56.101")," in the browser. The default user/password is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/admin"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher Server and your Kubernetes cluster is installed on VirtualBox."),(0,a.kt)("h3",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,a.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("inlineCode",{parentName:"p"},"quickstart/vagrant")," folder execute ",(0,a.kt)("inlineCode",{parentName:"p"},"vagrant destroy -f"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait for the confirmation that all resources have been destroyed."))))}c.isMDXComponent=!0}}]);