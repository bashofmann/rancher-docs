"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30654],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||n;return o?a.createElement(h,l(l({ref:t},u),{},{components:o})):a.createElement(h,l({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<n;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2733:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=o(87462),r=(o(67294),o(3905));const n={title:"Custom Roles"},l=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",title:"Custom Roles",description:"Within Rancher, roles determine what actions a user can make within a cluster or project.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Custom Roles"},sidebar:"tutorialSidebar",previous:{title:"Cluster and Project Roles",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},next:{title:"Locked Roles",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating A Custom Role for a Cluster or Project",id:"creating-a-custom-role-for-a-cluster-or-project",level:2},{value:"Creating a Custom Global Role",id:"creating-a-custom-global-role",level:2},{value:"Creating a Custom Global Role that Copies Rules from an Existing Role",id:"creating-a-custom-global-role-that-copies-rules-from-an-existing-role",level:3},{value:"Creating a Custom Global Role that Does Not Copy Rules from Another Role",id:"creating-a-custom-global-role-that-does-not-copy-rules-from-another-role",level:3},{value:"Deleting a Custom Global Role",id:"deleting-a-custom-global-role",level:2},{value:"Assigning a Custom Global Role to a Group",id:"assigning-a-custom-global-role-to-a-group",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),m=u("TabItem"),d={toc:p};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Within Rancher, ",(0,r.kt)("em",{parentName:"p"},"roles")," determine what actions a user can make within a cluster or project."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("em",{parentName:"p"},"roles")," are different from ",(0,r.kt)("em",{parentName:"p"},"permissions"),", which determine what clusters and projects you can access."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete the tasks on this page, one of the following permissions are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Roles")," role assigned.")),(0,r.kt)("h2",{id:"creating-a-custom-role-for-a-cluster-or-project"},"Creating A Custom Role for a Cluster or Project"),(0,r.kt)("p",null,"While Rancher comes out-of-the-box with a set of default user roles, you can also create default custom roles to provide users with very specific permissions within Rancher."),(0,r.kt)("p",null,"The steps to add custom roles differ depending on the version of Rancher."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(m,{value:"Rancher v2.0.7+",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a tab to determine the scope of the roles you're adding. The tabs are:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster:")," The role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"li"},"only")," clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project:")," The role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"li"},"only")," projects.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Cluster/Project Role."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name")," the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: Choose the ",(0,r.kt)("strong",{parentName:"p"},"Cluster/Project Creator Default")," option to assign this role to a user when they create a new cluster or project. Using this feature, you can expand or restrict the default roles for cluster/project creators."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Out of the box, the Cluster Creator Default and the Project Creator Default roles are ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Owner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Owner")," respectively."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,r.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Inherit from a Role")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")))),(0,r.kt)(m,{value:"Rancher before v2.0.7",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Role"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name")," the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose whether to set the role to a status of ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"locked"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Locked roles cannot be assigned to users."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Context")," dropdown menu, choose the scope of the role assigned to the user. The contexts are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"All:")," The user can use their assigned role regardless of context. This role is valid for assignment when adding/managing members to clusters or projects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster:")," This role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"p"},"only")," clusters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Project:")," This role is valid for assignment when adding/managing members to ",(0,r.kt)("em",{parentName:"p"},"only")," projects.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,r.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Inherit from a Role")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))))),(0,r.kt)("h2",{id:"creating-a-custom-global-role"},"Creating a Custom Global Role"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,r.kt)("h3",{id:"creating-a-custom-global-role-that-copies-rules-from-an-existing-role"},"Creating a Custom Global Role that Copies Rules from an Existing Role"),(0,r.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom global role in which all of the rules from another role, such as the administrator role, are copied into a new role. This allows you to only configure the variations between the existing role and the new role."),(0,r.kt)("p",null,"The custom global role can then be assigned to a user or group so that the custom global role takes effect the first time the user or users sign into Rancher."),(0,r.kt)("p",null,"To create a custom global role based on an existing role,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Global")," tab, go to the role that the custom global role will be based on. Click ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"," (\u2026) > Clone."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: To assign the custom role default for new users, go to the ",(0,r.kt)("strong",{parentName:"p"},"New User Default")," section and click ",(0,r.kt)("strong",{parentName:"p"},"Yes: Default role for new users."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," section, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save.")))),(0,r.kt)("h3",{id:"creating-a-custom-global-role-that-does-not-copy-rules-from-another-role"},"Creating a Custom Global Role that Does Not Copy Rules from Another Role"),(0,r.kt)("p",null,"Custom global roles don't have to be based on existing roles. To create a custom global role by choosing the specific Kubernetes resource operations that should be allowed for the role, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"p"},"Security > Roles."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Global")," tab, click ",(0,r.kt)("strong",{parentName:"p"},"Add Global Role."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: To assign the custom role default for new users, go to the ",(0,r.kt)("strong",{parentName:"p"},"New User Default")," section and click ",(0,r.kt)("strong",{parentName:"p"},"Yes: Default role for new users."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Grant Resources")," section, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,r.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save.")))),(0,r.kt)("h2",{id:"deleting-a-custom-global-role"},"Deleting a Custom Global Role"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,r.kt)("p",null,"When deleting a custom global role, all global role bindings with this custom role are deleted."),(0,r.kt)("p",null,"If a user is only assigned one custom global role, and the role is deleted, the user would lose access to Rancher. For the user to regain access, an administrator would need to edit the user and apply new global permissions."),(0,r.kt)("p",null,"Custom global roles can be deleted, but built-in roles cannot be deleted."),(0,r.kt)("p",null,"To delete a custom global role,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,r.kt)("strong",{parentName:"li"},"Security > Roles.")),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Global")," tab, go to the custom global role that should be deleted and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," (\u2026) > Delete.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Delete."))),(0,r.kt)("h2",{id:"assigning-a-custom-global-role-to-a-group"},"Assigning a Custom Global Role to a Group"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,r.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom global role. When the role is assigned to a group, the users in the group have the appropriate level of access the first time they sign into Rancher."),(0,r.kt)("p",null,"When a user in the group logs in, they get the built-in Standard User global role by default. They will also get the permissions assigned to their groups."),(0,r.kt)("p",null,"If a user is removed from the external authentication provider group, they would lose their permissions from the custom global role that was assigned to the group. They would continue to have their individual Standard User role."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")," You can only assign a global role to a group if:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You have set up an ",(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication#external-vs-local-authentication"},"external authentication provider")),(0,r.kt)("li",{parentName:"ul"},"The external authentication provider supports ",(0,r.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"user groups")),(0,r.kt)("li",{parentName:"ul"},"You have already set up at least one user group with the authentication provider"))),(0,r.kt)("p",null,"To assign a custom global role to a group, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view, go to ",(0,r.kt)("strong",{parentName:"li"},"Security > Groups.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Assign Global Role.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Select Group To Add")," field, choose the existing group that will be assigned the custom global role."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Custom")," section, choose any custom global role that will be assigned to the group."),(0,r.kt)("li",{parentName:"ol"},"Optional: In the ",(0,r.kt)("strong",{parentName:"li"},"Global Permissions")," or ",(0,r.kt)("strong",{parentName:"li"},"Built-in")," sections, select any additional permissions that the group should have."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The custom global role will take effect when the users in the group log into Rancher."))}h.isMDXComponent=!0}}]);