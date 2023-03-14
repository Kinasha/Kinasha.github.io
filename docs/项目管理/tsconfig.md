## TypeRoots

默认情况下，所有可见的“ @types ”包都包含在您的编译中。任何封闭文件夹的 node_modules/@types 中的包都被认为是可见的。例如，这意味着 ./node_modules/@types/ 、 ../node_modules/@types/ 、 ../../node_modules/@types/ 等中的包。

如果指定了 typeRoots ，则只包含 typeRoots 下的包。例如：

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings", "./vendor/types"]
  }
}
```

我在开发 figma 插件的时候，由于 figma 官方的类型声明在 @figma 的包里面，和一般情况下使用 @types 的情况不符合，所以增加此属性，但是由于增加了这个属性后，只有 typeRoots 里面的文件会被视作是类型文件，所以需要将 DTS 文件加入进来


## Includes

指定要包含在程序中的文件名或模式数组。这些文件名相对于包含 `tsconfig.json` 文件的目录进行解析。

```json
{    "include": ["src/**/*", "tests/**/*"]  }
```

## CompilerOptions

### Lib

TypeScript 包括一组默认的内置 JS API 类型定义（如 `Math` ），以及浏览器环境中的类型定义（如 `document` ）。 TypeScript 还包括用于匹配您指定的 `Math` 的较新 JS 功能的 API；例如，如果 `document` 是 `ES6` 或更新的版本，则 `Map` 的定义可用。

一般情况下不许需要改变，但是

- 如果运行时平台不是浏览器
- 如果运行时平台不提供更高级的语法

### ResolveJsonModule

允许解析 `json` 文件，这在 node 项目中比较常见。

### ForceConsistentCasingInFileNames

区分文件大小写，在和 windows 合作的时候非常有用

## isolatedModule