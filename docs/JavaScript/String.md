

## 部分字符的长度不为 1



## 字符串在 JS 中是常量

```
const str =
  "type[a1]=outline,level[a1]=secondary,ghost[a0]=false,size[a4]=xl,disabled[a0]=false,leftIcon[a7]=outline/circle,rightIcon[a0]=outline/more";
const reg = /\[a\d+\]/g;

const foo = {};

foo.name = str;
console.log(str.replace(reg, ""));
console.log("💡", foo.name); // foo.name 不变

```
