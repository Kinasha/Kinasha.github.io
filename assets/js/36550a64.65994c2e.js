"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},l=void 0,p={unversionedId:"TypeScript/tsconfig",id:"TypeScript/tsconfig",title:"tsconfig",description:"TypeRoots",source:"@site/docs/TypeScript/tsconfig.md",sourceDirName:"TypeScript",slug:"/TypeScript/tsconfig",permalink:"/docs/TypeScript/tsconfig",draft:!1,editUrl:"https://github.com/Kinasha/Kinasha.github.io/docs/TypeScript/tsconfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/docs/TypeScript/"},next:{title:"webpack",permalink:"/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack"}},a={},s=[{value:"TypeRoots",id:"typeroots",level:2},{value:"Includes",id:"includes",level:2},{value:"CompilerOptions",id:"compileroptions",level:2},{value:"Lib",id:"lib",level:3},{value:"ResolveJsonModule",id:"resolvejsonmodule",level:3},{value:"ForceConsistentCasingInFileNames",id:"forceconsistentcasinginfilenames",level:3},{value:"isolatedModule",id:"isolatedmodule",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"typeroots"},"TypeRoots"),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u4f7f\u7528\u7684\u7c7b\u578b\u5305\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"@types")," \u57df\u4e0b\u7684\u3002\u5b83\u4eec\u90fd\u662f\u7531 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped"},"DefinitelyTyped")," \u8fd9\u4e2a\u7ec4\u7ec7\u8d21\u732e\u7684\uff0c\u7136\u800c\u6709\u4e00\u4e9b\u4e09\u65b9\u5305\u4f8b\u5982 Figma \u63d2\u4ef6\u7684\u7c7b\u578b\u5305\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"@figma/plugin-tyings"),"\uff0c\u6b64\u65f6",(0,o.kt)("inlineCode",{parentName:"p"},"TypeRoots")," \u9009\u9879\u5c31\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a\u4e86\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u53ef\u89c1\u7684\u201c @types \u201d\u5305\u90fd\u5305\u542b\u5728\u60a8\u7684\u7f16\u8bd1\u4e2d\u3002\u4efb\u4f55\u5c01\u95ed\u6587\u4ef6\u5939\u7684 node_modules/@types \u4e2d\u7684\u5305\u90fd\u88ab\u8ba4\u4e3a\u662f\u53ef\u89c1\u7684\u3002\u4f8b\u5982\uff0c\u8fd9\u610f\u5473\u7740 ./node_modules/@types/ \u3001 ../node_modules/@types/ \u3001 ../../node_modules/@types/ \u7b49\u4e2d\u7684\u5305\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86 typeRoots \uff0c\u5219\u53ea\u5305\u542b typeRoots \u4e0b\u7684\u5305\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "typeRoots": ["./typings", "./vendor/types"]\n  }\n}\n')),(0,o.kt)("p",null,"\u6211\u5728\u5f00\u53d1 figma \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u7531\u4e8e figma \u5b98\u65b9\u7684\u7c7b\u578b\u58f0\u660e\u5728 @figma \u7684\u5305\u91cc\u9762\uff0c\u548c\u4e00\u822c\u60c5\u51b5\u4e0b\u4f7f\u7528 @types \u7684\u60c5\u51b5\u4e0d\u7b26\u5408\uff0c\u6240\u4ee5\u589e\u52a0\u6b64\u5c5e\u6027\uff0c\u4f46\u662f\u7531\u4e8e\u589e\u52a0\u4e86\u8fd9\u4e2a\u5c5e\u6027\u540e\uff0c\u53ea\u6709 typeRoots \u91cc\u9762\u7684\u6587\u4ef6\u4f1a\u88ab\u89c6\u4f5c\u662f\u7c7b\u578b\u6587\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u5c06 DTS \u6587\u4ef6\u52a0\u5165\u8fdb\u6765"),(0,o.kt)("h2",{id:"includes"},"Includes"),(0,o.kt)("p",null,"\u6307\u5b9a\u8981\u5305\u542b\u5728\u7a0b\u5e8f\u4e2d\u7684\u6587\u4ef6\u540d\u6216\u6a21\u5f0f\u6570\u7ec4\u3002\u8fd9\u4e9b\u6587\u4ef6\u540d\u76f8\u5bf9\u4e8e\u5305\u542b \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\xa0 \u6587\u4ef6\u7684\u76ee\u5f55\u8fdb\u884c\u89e3\u6790\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "include": ["src/**/*", "tests/**/*"] }\n')),(0,o.kt)("h2",{id:"compileroptions"},"CompilerOptions"),(0,o.kt)("h3",{id:"lib"},"Lib"),(0,o.kt)("p",null,"TypeScript \u5305\u62ec\u4e00\u7ec4\u9ed8\u8ba4\u7684\u5185\u7f6e JS API \u7c7b\u578b\u5b9a\u4e49\uff08\u5982 \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Math"),"\xa0\uff09\uff0c\u4ee5\u53ca\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u7684\u7c7b\u578b\u5b9a\u4e49\uff08\u5982 \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\xa0\uff09\u3002 TypeScript \u8fd8\u5305\u62ec\u7528\u4e8e\u5339\u914d\u60a8\u6307\u5b9a\u7684 \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Math"),"\xa0 \u7684\u8f83\u65b0 JS \u529f\u80fd\u7684 API\uff1b\u4f8b\u5982\uff0c\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\xa0 \u662f \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ES6"),"\xa0 \u6216\u66f4\u65b0\u7684\u7248\u672c\uff0c\u5219 \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),"\xa0 \u7684\u5b9a\u4e49\u53ef\u7528\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u8bb8\u9700\u8981\u6539\u53d8\uff0c\u4f46\u662f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd0\u884c\u65f6\u5e73\u53f0\u4e0d\u662f\u6d4f\u89c8\u5668"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd0\u884c\u65f6\u5e73\u53f0\u4e0d\u63d0\u4f9b\u66f4\u9ad8\u7ea7\u7684\u8bed\u6cd5")),(0,o.kt)("h3",{id:"resolvejsonmodule"},"ResolveJsonModule"),(0,o.kt)("p",null,"\u5141\u8bb8\u89e3\u6790 ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," \u6587\u4ef6\uff0c\u8fd9\u5728 node \u9879\u76ee\u4e2d\u6bd4\u8f83\u5e38\u89c1\u3002"),(0,o.kt)("h3",{id:"forceconsistentcasinginfilenames"},"ForceConsistentCasingInFileNames"),(0,o.kt)("p",null,"\u533a\u5206\u6587\u4ef6\u5927\u5c0f\u5199\uff0c\u5728\u548c windows \u5408\u4f5c\u7684\u65f6\u5019\u975e\u5e38\u6709\u7528"),(0,o.kt)("h2",{id:"isolatedmodule"},"isolatedModule"))}u.isMDXComponent=!0}}]);