"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,s={unversionedId:"JavaScript/\u5f02\u6b65\u4efb\u52a1",id:"JavaScript/\u5f02\u6b65\u4efb\u52a1",title:"\u5f02\u6b65\u4efb\u52a1",description:"\u5b9e\u73b0 Fetch \u7684\u8d85\u65f6\u4e2d\u65ad\u3001\u91cd\u4f20",source:"@site/docs/JavaScript/\u5f02\u6b65\u4efb\u52a1.md",sourceDirName:"JavaScript",slug:"/JavaScript/\u5f02\u6b65\u4efb\u52a1",permalink:"/docs/JavaScript/\u5f02\u6b65\u4efb\u52a1",draft:!1,editUrl:"https://github.com/Kinasha/Kinasha.github.io/docs/JavaScript/\u5f02\u6b65\u4efb\u52a1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u6280\u5de7",permalink:"/docs/JavaScript/\u5f00\u53d1\u6280\u5de7"},next:{title:"\u5faa\u73af",permalink:"/docs/JavaScript/\u5faa\u73af"}},l={},c=[{value:"\u5b9e\u73b0 Fetch \u7684\u8d85\u65f6\u4e2d\u65ad\u3001\u91cd\u4f20",id:"\u5b9e\u73b0-fetch-\u7684\u8d85\u65f6\u4e2d\u65ad\u91cd\u4f20",level:2},{value:"\u6b63\u786e\u4f7f\u7528 async/await",id:"\u6b63\u786e\u4f7f\u7528-asyncawait",level:2},{value:"\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\u7684\u5e76\u53d1\u63a7\u5236",id:"\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\u7684\u5e76\u53d1\u63a7\u5236",level:2},{value:"\u624b\u5199 Promise",id:"\u624b\u5199-promise",level:2},{value:"Promise \u6709\u5173",id:"promise-\u6709\u5173",level:2},{value:"\u4f7f\u7528 Proxy \u68c0\u6d4b\u6570\u7ec4",id:"\u4f7f\u7528-proxy-\u68c0\u6d4b\u6570\u7ec4",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9e\u73b0-fetch-\u7684\u8d85\u65f6\u4e2d\u65ad\u91cd\u4f20"},"\u5b9e\u73b0 Fetch \u7684\u8d85\u65f6\u4e2d\u65ad\u3001\u91cd\u4f20"),(0,a.kt)("h2",{id:"\u6b63\u786e\u4f7f\u7528-asyncawait"},"\u6b63\u786e\u4f7f\u7528 async/await"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/yi-bu-kong-zhi-fan-zhuan-yzftnt?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"\u5f02\u6b65\u63a7\u5236\u53cd\u8f6c",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u901a\u8fc7\u5f02\u6b65\u4efb\u52a1\uff08\u901a\u8fc7 url \u83b7\u53d6\u56fe\u7247\uff09\u7684\u6210\u529f\u4e0e\u5426\uff0c\u662f\u7531\u7b2c\u4e09\u65b9\u786e\u5b9a\u7684\u3002\u8fd9\u5f53\u7136\u53ef\u4ee5\u901a\u8fc7 then \u521b\u5efa\u5fae\u4efb\u52a1\u89e3\u51b3\uff0c\u4f46\u662f\u5bb9\u6613\u4ea7\u751f then \u7684\u56de\u8c03\u5730\u72f1\u3002async await \u8ba9\u4ee3\u7801\u66f4\u53ef\u8bfb\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\u7684\u5e76\u53d1\u63a7\u5236"},"\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\u7684\u5e76\u53d1\u63a7\u5236"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class SuperTask {\n  constructor(limit = 2) {\n    this.limit = limit\n    this.runningCount = 0\n    this.tasks = []\n  }\n  add(task) {\n    return new Promise((resolve, reject) => {\n      this.tasks.push({ task, resolve, reject })\n      this._run()\n    })\n  }\n  _run() {\n    while (this.runningCount < this.limit && this.tasks.length) {\n      const { task, resolve, reject } = this.tasks.shift()\n      this.runningCount++\n      task()\n        .then(resolve, reject)\n        .finally(() => {\n          this.runningCount--\n          this._run()\n        })\n      this._run()\n    }\n  }\n}\n\nconst superTask = new SuperTask()\n\nfunction timeout(time) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, time)\n  })\n}\n\nfunction addTask(time, name) {\n  superTask.add(() => timeout(time)).then(() => console.log(`Task ${name} had been executed`))\n}\naddTask(10000, 1)\naddTask(5000, 2)\naddTask(3000, 3)\nsuperTask.add(() =>\n  Promise.resolve()\n    .then(() => console.log(1))\n    .then(() => console.log(`1-1`))\n    .then(() => console.log(`1-2`))\n)\naddTask(2000, 4)\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u4ee3\u7801\u901a\u8fc7\u7ef4\u62a4\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\u6765\u786e\u4fdd\u5f02\u6b65\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u53ea\u4f1a\u540c\u65f6\u8fd0\u884c\u6307\u5b9a\u6570\u91cf\u7684\u5f02\u6b65\u4efb\u52a1\u3002\u8fd9\u79cd\u95ee\u9898\u7684\u573a\u666f\u662f\uff0c\u4f8b\u5982\uff0c\u524d\u7aef\u9700\u8981\u5c06\u591a\u5f20\u56fe\u7247\u4e0a\u4f20\u81f3 CDN\uff0c\u4f46\u662f\u7531\u4e8e\u540e\u7aef\u505a\u4e86\u63a7\u5236\uff0c\u5e76\u53d1\u7684\u8bf7\u6c42\u8d85\u8fc7\u6307\u5b9a\u6570\u91cf\u4f1a\u4e22\u5f03\u6389\u4e00\u90e8\u5206\uff08QPS \u5f88\u5c0f\uff1f\uff09\u6240\u4ee5\u524d\u7aef\u53ef\u4ee5\u662f\u5b9e\u73b0\u4e00\u4e2a\u5e76\u53d1\u63a7\u5236\u3002"),(0,a.kt)("h2",{id:"\u624b\u5199-promise"},"\u624b\u5199 Promise"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u5b9e\u73b0\u4e00\u4e2a Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Promise {\n  static #PENDING = 'pending'\n  static #FULFILLED = 'fulfilled'\n  static #REJECTED = 'rejected'\n  constructor(executor) {\n    // executor \u5fc5\u987b\u662f\u4e2a\u51fd\u6570\n    if (typeof executor !== 'function') {\n      throw new TypeError('resolver must be a function')\n    }\n    this.status = Promise.#PENDING\n    this.value = undefined\n    this.onResolveCallback = []\n    this.onRejectCallback = []\n    const resolve = (val) => {\n      if (this.status === Promise.#PENDING) {\n        // \u8fd9\u91cc\u7684\u5224\u65ad\u5176\u5b9e\u4e0d\u5e94\u8be5\u5224\u65ad\u662f\u5426\u4e3a Promise \u7684\u5b9e\u4f8b\n        // \u800c\u662f\u5e94\u8be5\u5224\u65ad\u662f\u5426\u4e3a thenable \u7684 \u201c\u9e2d\u5b50\u7c7b\u578b\u201d\n        if (typeof val?.then === 'function' && Object.getOwnPropertyNames(val).includes('then')) {\n          // if (val instanceof Promise) {\n          val.then(\n            (data) => resolve(data),\n            (err) => reject(err)\n          )\n          return\n        }\n        this.status = Promise.#FULFILLED\n        this.value = val\n        this.onResolveCallback.forEach((callback) => callback())\n      }\n    }\n    const reject = (err) => {\n      if (this.status === Promise.#PENDING) {\n        this.status = Promise.#REJECTED\n        this.value = err\n        this.onResolveCallback.forEach((callback) => callback())\n      }\n    }\n    try {\n      executor(resolve, reject)\n    } catch (e) {\n      reject(e)\n    }\n  }\n  then(onFulfill, onReject) {\n    // \u94fe\u5f0f\u8c03\u7528\n    return new Promise((resolve, reject) => {\n      switch (this.status) {\n        case Promise.#FULFILLED:\n          // \u7528 marco task \u6a21\u62df micro task\n          // \u8981\u5224\u65adonFulfill \u662f\u5426\u4e3a\u51fd\u6570\uff0c\u540c\u65f6\uff0c\u629b\u51fa\u9519\u8bef\u65f6reject\n          setTimeout(() => {\n            if (typeof onFulfill !== 'function') {\n              resolve(this.value)\n            } else {\n              try {\n                resolve(onFulfill(this.value))\n              } catch (e) {\n                reject(e)\n              }\n            }\n          })\n          break\n        // \u540e\u9762\u8fd9\u91cc\u540c\u7406 \u5224\u65ad\u4f20\u5165\u7684\u53c2\u6570\u662f\u5426\u4e3a\u51fd\u6570\n        case Promise.#REJECTED:\n          setTimeout(() => resolve(onReject(this.value)))\n          break\n        case Promise.#PENDING:\n          this.onResolveCallback.push(() => {\n            setTimeout(() => {\n              resolve(onFulfill(this.value))\n            })\n          })\n          this.onRejectCallback.push(() => {\n            setTimeout(() => {\n              resolve(onReject(this.value))\n            })\n          })\n          break\n      }\n    })\n  }\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u624b\u5199 Promise\uff0c\u66f4\u52a0\u6df1\u523b\u5730\u4f53\u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u7684\u610f\u4e49\u3002\u6211\u8ba4\u4e3a\uff0c\u4f7f\u7528\u56de\u8c03\u7f16\u5199\u5f02\u6b65\u4ee3\u7801\uff0c\u4f1a\u4ea7\u751f\u201d\u56de\u8c03\u5730\u72f1\u201c\uff0c\u6b63\u662f\u56e0\u4e3a\u6211\u4eec\u5fc5\u987b\u628a ",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u4f5c\u4ec0\u4e48")," \uff08continuation\uff09\u4e00\u6b21\u6027\u544a\u8bc9\u7b2c\u4e09\u65b9\u3002\u4e0d\u628a continuation \u4f20\u7ed9\u7b2c\u4e09\u65b9\uff0c\u800c\u662f\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u65b9\u7684\u80fd\u529b"),"\uff0c\u58f0\u660e\u5f0f\u5730\u7f16\u5199\u63a5\u4e0b\u6765\u505a\u4ec0\u4e48\uff0c\u8fd9\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u5c31\u662f Promise \u2014\u2014\u671f\u7ea6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u63d0\u5230\u7684\u7b2c\u4e09\u65b9\u7684\u80fd\u529b\uff0c\u65e2\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"reject")," \u8fd9\u79cd\u80fd\u591f\u51b3\u8bae\u4e00\u4e2a\u671f\u7ea6\u7684\u80fd\u529b\uff0c\u4e5f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"then(onFulfill, onReject)")," \u8fd9\u79cd\u627f\u8bfa\u4f1a\u5e2e\u6211\u4eec\u5728\u72b6\u6001\u53d1\u751f\u6539\u53d8\u540e\u8c03\u7528\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\u7684\u80fd\u529b\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u65e2\u53ef\u4ee5\u51b3\u5b9a\u4f55\u65f6\u505a\uff08\u4f55\u65f6\u51b3\u8bae\uff09\u4e5f\u53ef\u4ee5\u51b3\u5b9a\u505a\u4ec0\u4e48\uff08onFulfill\u3001onReject \u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\uff09")),(0,a.kt)("h2",{id:"promise-\u6709\u5173"},"Promise \u6709\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u624b\u5199 retry \u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function retry(fn, times, delay) {\n  return new Promise((resolve, reject) => {\n    const attempt = () => {\n      if (times === 0) {\n        reject('tried enough times')\n      } else {\n        fn()\n          .then((res) => {\n            resolve(res)\n          })\n          .catch(() => {\n            times--\n            settimeout(attempt, delay)\n          })\n      }\n    }\n  })\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Promise#finally")," \u5751\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u83b7\u5f97 promise \u7684\u7ed3\u679c \uff08\u8fd9\u4e5f\u975e\u5e38\u7b26\u5408\u903b\u8f91\uff0c\u4e00\u65e6 Promise \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise#then")," \u4e2d",(0,a.kt)("strong",{parentName:"li"},"\u88ab\u51b3\u8bae")," \u5c31\u65e0\u9700\u4e5f\u4e0d\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise#finally")," \u518d\u6b21\u4fee\u6539")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Promise.resolve(1).finally((res) => console.log(res)) // undefined\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u629b\u51fa\u9519\u8bef\uff0c\u8ba9\u4e0b\u4e00\u8f6e\u7684\u62d2\u7edd\u6001\u63a5\u6536")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Promise.resolve(1)\n  .finally(() => {\n    throw 'oops'\n  })\n  .then(undefined, (rej) => {\n    console.log(rej, 'onrejected')\n  })\n")))),(0,a.kt)("h3",{id:"\u4f7f\u7528-proxy-\u68c0\u6d4b\u6570\u7ec4"},"\u4f7f\u7528 Proxy \u68c0\u6d4b\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo(obj) {\n  let p = new Proxy(obj, {\n    get(...args) {\n      console.log(`hhh`)\n      // \u8fd9\u91cc\u63a8\u8350\u4e0d\u8981\u4f7f\u7528 arguments \u6570\u7ec4 \u56e0\u4e3a\u5176\u5df2\u88ab\u79fb\u51faweb\u6807\u51c6\n      // \u63a8\u8350\u4f7f\u7528 rest parameter \u548c spread operator\n      return Reflect.get(...args)\n    },\n  })\n  return p\n}\nconst f = foo([1, 2, 3])\nconsole.log(f[0]) // 'hhh' 1\n")))}p.isMDXComponent=!0}}]);