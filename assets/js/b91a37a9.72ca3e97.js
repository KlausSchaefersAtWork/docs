"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[9823],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1885:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"Pre-signed URL",sidebar_position:3},s="Pre-signed URL",u={unversionedId:"products/Object-Storage/HowTo/presigned-url",id:"products/Object-Storage/HowTo/presigned-url",title:"Pre-signed URL",description:"A pre-signed URL is special S3 compliant URL in order to share an object for a specific duration for everyone who has the URL. Thus the URL contains some more query parameters holding that specific information.",source:"@site/docs/products/Object-Storage/HowTo/presigned-url.md",sourceDirName:"products/Object-Storage/HowTo",slug:"/products/Object-Storage/HowTo/presigned-url",permalink:"/docs/products/Object-Storage/HowTo/presigned-url",editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/HowTo/presigned-url.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Pre-signed URL",sidebar_position:3},sidebar:"productSidebar",previous:{title:"Mounting S3 Object Storage Files",permalink:"/docs/products/Object-Storage/HowTo/mount"},next:{title:"Automate Public Sharing",permalink:"/docs/products/Object-Storage/HowTo/public-sharing"}},p={},l=[{value:"Create a pre-signed URL",id:"create-a-pre-signed-url",level:2},{value:"Format of supported pre-signed URLs",id:"format-of-supported-pre-signed-urls",level:2}],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pre-signed-url"},"Pre-signed URL"),(0,i.kt)("p",null,"A pre-signed URL is special S3 compliant URL in order to share an object for a specific duration for everyone who has the URL. Thus the URL contains some more query parameters holding that specific information."),(0,i.kt)("h2",{id:"create-a-pre-signed-url"},"Create a pre-signed URL"),(0,i.kt)("p",null,"The easiest way is to use a tool as creating such pre-signed URLs requires coding skills. E.g. using ",(0,i.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/cyberduck"},"Cyberduck")," makes that task very easy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Naviagte to a file of your choice"),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Edit")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Copy URL")," and choose one of the pre-signed URLs which are matching your duration"),(0,i.kt)("li",{parentName:"ul"},"You can alternatively right-click  and select either ",(0,i.kt)("inlineCode",{parentName:"li"},"Copy URL")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Open URL"))),(0,i.kt)("h2",{id:"format-of-supported-pre-signed-urls"},"Format of supported pre-signed URLs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://<region>.contabostorage.com/<bucketname>/path/to/file?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<credential>&X-Amz-Date=<datetime>&X-Amz-Expires=<duration>X-Amz-SignedHeaders=host&X-Amz-Signature=<signature>")))}f.isMDXComponent=!0}}]);