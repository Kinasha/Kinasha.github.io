"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1970],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>m});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=a.createContext({}),k=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=k(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=k(l),m=n,s=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return l?a.createElement(s,i(i({ref:t},o),{},{components:l})):a.createElement(s,i({ref:t},o))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var k=2;k<r;k++)i[k]=l[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},3120:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=l(7462),n=(l(7294),l(3905));const r={},i=void 0,p={unversionedId:"\u524d\u7aef\u5de5\u7a0b\u5316/webpack",id:"\u524d\u7aef\u5de5\u7a0b\u5316/webpack",title:"webpack",description:"plugin",source:"@site/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack.md",sourceDirName:"\u524d\u7aef\u5de5\u7a0b\u5316",slug:"/\u524d\u7aef\u5de5\u7a0b\u5316/webpack",permalink:"/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack",draft:!1,editUrl:"https://github.com/Kinasha/Kinasha.github.io/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tsconfig",permalink:"/docs/TypeScript/tsconfig"},next:{title:"\u6b63\u5219",permalink:"/docs/\u6b63\u5219"}},u={},k=[{value:"plugin",id:"plugin",level:2},{value:"\u521b\u5efa bundle",id:"\u521b\u5efa-bundle",level:2},{value:"\u751f\u4ea7\u6a21\u5f0f",id:"\u751f\u4ea7\u6a21\u5f0f",level:2},{value:"\u4ee3\u7801\u5206\u5272",id:"\u4ee3\u7801\u5206\u5272",level:2},{value:"\u52a8\u6001\u5bfc\u5165",id:"\u52a8\u6001\u5bfc\u5165",level:3},{value:"\u9884\u83b7\u53d6\u3001\u9884\u52a0\u8f7d\u6a21\u5757",id:"\u9884\u83b7\u53d6\u9884\u52a0\u8f7d\u6a21\u5757",level:3},{value:"bundle \u5206\u6790",id:"bundle-\u5206\u6790",level:3},{value:"\u61d2\u52a0\u8f7d",id:"\u61d2\u52a0\u8f7d",level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:2},{value:"\u8f93\u51fa\u6587\u4ef6\u7684\u6587\u4ef6\u540d",id:"\u8f93\u51fa\u6587\u4ef6\u7684\u6587\u4ef6\u540d",level:3},{value:"\u63d0\u53d6\u5f15\u5bfc\u6a21\u7248 \uff08extracting boilerplate\uff09",id:"\u63d0\u53d6\u5f15\u5bfc\u6a21\u7248-extracting-boilerplate",level:3},{value:"\u6a21\u5757\u6807\u8bc6\u7b26",id:"\u6a21\u5757\u6807\u8bc6\u7b26",level:3},{value:"\u521b\u5efa Library",id:"\u521b\u5efa-library",level:2},{value:"Expose the Library",id:"expose-the-library",level:3},{value:"\u5916\u90e8\u5316",id:"\u5916\u90e8\u5316",level:3},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"\u6784\u5efa\u6027\u80fd",id:"\u6784\u5efa\u6027\u80fd",level:2},{value:"\u901a\u7528\u73af\u5883",id:"\u901a\u7528\u73af\u5883",level:3},{value:"\u5f00\u53d1\u73af\u5883",id:"\u5f00\u53d1\u73af\u5883",level:3},{value:"\u751f\u4ea7\u73af\u5883",id:"\u751f\u4ea7\u73af\u5883",level:3},{value:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565",id:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565",level:2},{value:"\u5f00\u53d1 Vagrant",id:"\u5f00\u53d1-vagrant",level:2},{value:"\u4f9d\u8d56\u7ba1\u7406",id:"\u4f9d\u8d56\u7ba1\u7406",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u6a21\u5757\u70ed\u66ff\u6362",id:"\u6a21\u5757\u70ed\u66ff\u6362",level:2},{value:"Tree Shaking",id:"tree-shaking",level:2},{value:"\u751f\u4ea7\u73af\u5883",id:"\u751f\u4ea7\u73af\u5883-1",level:2},{value:"\u61d2\u52a0\u8f7d",id:"\u61d2\u52a0\u8f7d-1",level:2},{value:"ECMAScript \u6a21\u5757",id:"ecmascript-\u6a21\u5757",level:2},{value:"\u9884\u7f6e\u6a21\u5757",id:"\u9884\u7f6e\u6a21\u5757",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Web Worker",id:"web-worker",level:2},{value:"PWA",id:"pwa",level:2},{value:"Public Path",id:"public-path",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u8d44\u6e90\u6a21\u5757",id:"\u8d44\u6e90\u6a21\u5757",level:2},{value:"Entry \u9ad8\u7ea7\u7528\u6cd5",id:"entry-\u9ad8\u7ea7\u7528\u6cd5",level:2},{value:"Package exports",id:"package-exports",level:2}],o={toc:k};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"plugin"},"plugin"),(0,n.kt)("p",null,"webpack \u4e2d\u7684\u63d2\u4ef6\uff08plugins\uff09\u6307\u7684\u662f\u5177\u6709 apply \u65b9\u6cd5\u7684\u4e00\u4e2a\u7c7b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'class MyPlugin {\n  constructor() {}\n  apply(compiler) {\n    console.log("hello webpack");\n  }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25041563135/99b5/bb3f/76da/db03de0b114016cda6653c99a980a58a.png",alt:"image.png"})),(0,n.kt)("p",null,"\u5176\u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"compiler")," \u4e0a\u9762\u5b9a\u4e49\u4e86\u8bf8\u591a hook \u4f8b\u5982 beforeRun run \u7b49\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/api/compiler-hooks/#root"},"\u67e5\u770b\u5168\u90e8\u94a9\u5b50")),(0,n.kt)("p",null,"\u4f7f\u7528\u4e0a\u8ff0\u65b9\u5f0f\u7ec4\u7ec7\u9879\u76ee\uff0c\u6709\u5982\u4e0b\u4e09\u4e2a\u95ee\u9898\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f53\u811a\u672c\u4f9d\u8d56\u4e8e\u7b2c\u4e09\u65b9\u5e93\u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u80fd\u76f4\u89c2\u5730\u663e\u793a\u51fa\u6765"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u4f9d\u8d56\u7f3a\u5931\uff0c\u6216\u8005\u987a\u5e8f\u4e0d\u5bf9\uff0c\u7a0b\u5e8f\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u65e0\u5173\u7684\u4f9d\u8d56\u88ab\u58f0\u660e\uff0c\u6d4f\u89c8\u5668\u4e0d\u5f97\u4e0d\u4e0b\u8f7d\u989d\u5916\u7684\u4ee3\u7801")),(0,n.kt)("h2",{id:"\u521b\u5efa-bundle"},"\u521b\u5efa bundle"),(0,n.kt)("h2",{id:"\u751f\u4ea7\u6a21\u5f0f"},"\u751f\u4ea7\u6a21\u5f0f"),(0,n.kt)("p",null,"Mode = development"),(0,n.kt)("p",null,"Source Map"),(0,n.kt)("p",null,"\u4e3a\u907f\u514d\u6bcf\u6b21\u90fd\u8981\u6267\u884c npm run build \u547d\u4ee4\uff0cwebpack \u63d0\u4f9b\u4e86\u4e09\u79cd\u89e3\u51b3\u601d\u8def"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Webpack watch mode"),(0,n.kt)("li",{parentName:"ul"},"Webpack-dev-server"),(0,n.kt)("li",{parentName:"ul"},"Webpack-dev-middleware")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\xa0 \u4f1a\u4ece \xa0",(0,n.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/output/#outputpath"},(0,n.kt)("inlineCode",{parentName:"a"},"output.path")),"\xa0 \u4e2d\u5b9a\u4e49\u7684\u76ee\u5f55\u4e2d\u7684 bundle \u6587\u4ef6\u63d0\u4f9b\u670d\u52a1\uff0c\u5373\u6587\u4ef6\u5c06\u53ef\u4ee5\u901a\u8fc7 \xa0",(0,n.kt)("inlineCode",{parentName:"p"},"http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]"),"\xa0 \u8fdb\u884c\u8bbf\u95ee\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Safe write \u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898")),(0,n.kt)("h2",{id:"\u4ee3\u7801\u5206\u5272"},"\u4ee3\u7801\u5206\u5272"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e38\u7528\u7684\u4ee3\u7801\u5206\u5272\u65b9\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5165\u53e3\u8d77\u70b9"),(0,n.kt)("li",{parentName:"ul"},"\u9632\u6b62\u91cd\u590d"),(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u5bfc\u5165")))),(0,n.kt)("h3",{id:"\u52a8\u6001\u5bfc\u5165"},"\u52a8\u6001\u5bfc\u5165"),(0,n.kt)("h3",{id:"\u9884\u83b7\u53d6\u9884\u52a0\u8f7d\u6a21\u5757"},"\u9884\u83b7\u53d6\u3001\u9884\u52a0\u8f7d\u6a21\u5757"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9884\u83b7\u53d6 prefetch \uff1a \u5c06\u6765\u67d0\u4e2a\u5bfc\u822a\u9700\u8981\u7684\u8d44\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u9884\u52a0\u8f7d preload\uff1a \u5f53\u4e0b\u53ef\u80fd\u9700\u8981\u7684\u8d44\u6e90 \uff08\u66f4\u7d27\u6025\uff09")),(0,n.kt)("p",null,"\u4e0d\u6b63\u786e\u5730\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"webpackPreload")," \u4f1a\u6709\u635f\u6027\u80fd"),(0,n.kt)("h3",{id:"bundle-\u5206\u6790"},"bundle \u5206\u6790"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://alexkuz.github.io/webpack-chart/"},"webpack-chart"),": webpack stats \u53ef\u4ea4\u4e92\u997c\u56fe\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://chrisbateman.github.io/webpack-visualizer/"},"webpack-visualizer"),": \u53ef\u89c6\u5316\u5e76\u5206\u6790\u4f60\u7684 bundle\uff0c\u68c0\u67e5\u54ea\u4e9b\u6a21\u5757\u5360\u7528\u7a7a\u95f4\uff0c\u54ea\u4e9b\u53ef\u80fd\u662f\u91cd\u590d\u4f7f\u7528\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"webpack-bundle-analyzer"),"\uff1a\u4e00\u4e2a plugin \u548c CLI \u5de5\u5177\uff0c\u5b83\u5c06 bundle \u5185\u5bb9\u5c55\u793a\u4e3a\u4e00\u4e2a\u4fbf\u6377\u7684\u3001\u4ea4\u4e92\u5f0f\u3001\u53ef\u7f29\u653e\u7684\u6811\u72b6\u56fe\u5f62\u5f0f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webpack.jakoblind.no/optimize"},"webpack bundle optimize helper"),"\uff1a\u8fd9\u4e2a\u5de5\u5177\u4f1a\u5206\u6790\u4f60\u7684 bundle\uff0c\u5e76\u63d0\u4f9b\u53ef\u64cd\u4f5c\u7684\u6539\u8fdb\u63aa\u65bd\uff0c\u4ee5\u51cf\u5c11 bundle \u7684\u5927\u5c0f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bundle-stats/bundle-stats"},"bundle-stats"),"\uff1a\u751f\u6210\u4e00\u4e2a bundle \u62a5\u544a\uff08bundle \u5927\u5c0f\u3001\u8d44\u6e90\u3001\u6a21\u5757\uff09\uff0c\u5e76\u6bd4\u8f83\u4e0d\u540c\u6784\u5efa\u4e4b\u95f4\u7684\u7ed3\u679c\u3002")),(0,n.kt)("h2",{id:"\u61d2\u52a0\u8f7d"},"\u61d2\u52a0\u8f7d"),(0,n.kt)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,n.kt)("h3",{id:"\u8f93\u51fa\u6587\u4ef6\u7684\u6587\u4ef6\u540d"},"\u8f93\u51fa\u6587\u4ef6\u7684\u6587\u4ef6\u540d"),(0,n.kt)("p",null,"webpack \u91c7\u7528\u4e00\u79cd\u88ab\u79f0\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"substitution")," \u53ef\u66ff\u6362\u6a21\u7248\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\uff0c\u6765\u521b\u5efa\u6587\u4ef6\u540d\u79f0"),(0,n.kt)("h3",{id:"\u63d0\u53d6\u5f15\u5bfc\u6a21\u7248-extracting-boilerplate"},"\u63d0\u53d6\u5f15\u5bfc\u6a21\u7248 \uff08extracting boilerplate\uff09"),(0,n.kt)("p",null,"\u901a\u8fc7\u5c06\u7b2c\u4e09\u65b9\u5e93\u63d0\u53d6\u5230\u5355\u72ec\u7684 vendor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optimization: {\n     runtimeChunk: 'single',\n   },\n")),(0,n.kt)("h3",{id:"\u6a21\u5757\u6807\u8bc6\u7b26"},"\u6a21\u5757\u6807\u8bc6\u7b26"),(0,n.kt)("h2",{id:"\u521b\u5efa-library"},"\u521b\u5efa Library"),(0,n.kt)("h3",{id:"expose-the-library"},"Expose the Library"),(0,n.kt)("h3",{id:"\u5916\u90e8\u5316"},"\u5916\u90e8\u5316"),(0,n.kt)("p",null,"\u901a\u8fc7 externals \u6392\u9664"),(0,n.kt)("p",null,"\u4e0d\u60f3\u52a0\u5165\u5230\u6253\u5305\u7ed3\u679c\u7684\u4f9d\u8d56"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One by one"),(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5219")),(0,n.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"\u533a\u5206\u751f\u4ea7\u73af\u5883\u548c\u5f00\u53d1\u73af\u5883\uff0c"),(0,n.kt)("h2",{id:"\u6784\u5efa\u6027\u80fd"},"\u6784\u5efa\u6027\u80fd"),(0,n.kt)("h3",{id:"\u901a\u7528\u73af\u5883"},"\u901a\u7528\u73af\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"Loader \u53ea\u7528\u4e8e\u5fc5\u8981\u7684\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u51cf\u5c11\u4f7f\u7528 loader"),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u6790\uff08\u4ee3\u7801\u7ec6\u8282\uff09"),(0,n.kt)("li",{parentName:"ul"},"Dll"),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u5373\u662f\u5feb"),(0,n.kt)("li",{parentName:"ul"},"Worker \u6c60"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 plugin")),(0,n.kt)("h3",{id:"\u5f00\u53d1\u73af\u5883"},"\u5f00\u53d1\u73af\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u589e\u91cf\u7f16\u8bd1 --watch"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5185\u5b58\u4e2d\u7f16\u8bd1"),(0,n.kt)("li",{parentName:"ul"},"Stats. ToJson \u52a0\u901f"),(0,n.kt)("li",{parentName:"ul"},"Devtool"),(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u624d\u4f1a\u7528\u5230\u7684\u5de5\u5177",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TerserPlugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[fullhash]")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"[chunkhash]")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"[contenthash]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AggressiveSplittingPlugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AggressiveMergingPlugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ModuleConcatenationPlugin")))),(0,n.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u5316 entry chunk"),(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u989d\u5916\u7684\u4f18\u5316\u6b65\u9aa4"),(0,n.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u7ed3\u679c\u4e0d\u643a\u5e26\u8def\u5f84\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"Node \uff088.9.10 - 9.11.1\uff09\u7684 Map Set \u6709\u6027\u80fd\u56de\u9000"),(0,n.kt)("li",{parentName:"ul"},"Ts-loader \u7684 transpile only")),(0,n.kt)("h3",{id:"\u751f\u4ea7\u73af\u5883"},"\u751f\u4ea7\u73af\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SourceMap"),(0,n.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u5de5\u5177\u5b58\u5728\u964d\u4f4e\u6784\u5efa\u6027\u80fd\u7684\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Babel \u6700\u5c0f\u5316 preset \u3001plugin \u7684\u6570\u91cf"),(0,n.kt)("li",{parentName:"ul"},"TS \u914d\u7f6e loader"),(0,n.kt)("li",{parentName:"ul"},"Sass \u4e2d\u7684 bug")))),(0,n.kt)("h2",{id:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565"},"\u5185\u5bb9\u5b89\u5168\u7b56\u7565"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u7528 CSP")),(0,n.kt)("h2",{id:"\u5f00\u53d1-vagrant"},"\u5f00\u53d1 Vagrant"),(0,n.kt)("h2",{id:"\u4f9d\u8d56\u7ba1\u7406"},"\u4f9d\u8d56\u7ba1\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e26\u8868\u8fbe\u5f0f\u7684 require \u7684\u8bed\u53e5"),(0,n.kt)("li",{parentName:"ul"},"Require. Context",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Context module API")))),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("h2",{id:"\u6a21\u5757\u70ed\u66ff\u6362"},"\u6a21\u5757\u70ed\u66ff\u6362"),(0,n.kt)("h2",{id:"tree-shaking"},"Tree Shaking"),(0,n.kt)("h2",{id:"\u751f\u4ea7\u73af\u5883-1"},"\u751f\u4ea7\u73af\u5883"),(0,n.kt)("h2",{id:"\u61d2\u52a0\u8f7d-1"},"\u61d2\u52a0\u8f7d"),(0,n.kt)("h2",{id:"ecmascript-\u6a21\u5757"},"ECMAScript \u6a21\u5757"),(0,n.kt)("h2",{id:"\u9884\u7f6e\u6a21\u5757"},"\u9884\u7f6e\u6a21\u5757"),(0,n.kt)("p",null,"\uff08\u600e\u4e48\u505a polyfill\uff09"),(0,n.kt)("h2",{id:"typescript"},"TypeScript"),(0,n.kt)("h2",{id:"web-worker"},"Web Worker"),(0,n.kt)("h2",{id:"pwa"},"PWA"),(0,n.kt)("h2",{id:"public-path"},"Public Path"),(0,n.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,n.kt)("h2",{id:"\u8d44\u6e90\u6a21\u5757"},"\u8d44\u6e90\u6a21\u5757"),(0,n.kt)("h2",{id:"entry-\u9ad8\u7ea7\u7528\u6cd5"},"Entry \u9ad8\u7ea7\u7528\u6cd5"),(0,n.kt)("h2",{id:"package-exports"},"Package exports"))}d.isMDXComponent=!0}}]);