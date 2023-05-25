## 是什么

sed，stream editor 。是操纵字符串的命令行工具。

[地址](https://www.gnu.org/software/sed/)

## 怎么使用

1. 基础用法

```shell
sed -i 's/Apple/Banana' food.txt
```


2. 常见用法

```bash
## 替换文本中的字符串
sed 's/old/new/g' file.txt
## 删除文件 file.txt 中的第二行
sed '2d' file.txt
## 在文件 file.txt 的第二行之前插入一行 This is a new line。
sed '2i\This is a new line.' file.txt
## 打印文件 file.txt 中匹配正则表达式 pattern 的行。
sed -n '/pattern/p' file.txt
## 从文件 script.sed 中读取 sed 脚本并应用于文件 file.txt。
sed -f script.sed file.txt

```


3. 高级用法

```
问 ChatGPT 怎么用
```

