## 如何使用

```sh
# 列出定时任务
crontab -l 

# 编辑定时任务
crontab -e
```

## 注意点

创建的 `.sh` 文件需要添加可执行。

```sh
chmod + x test.sh
```

crontab 的环境变量 `/usr/bin` 和 bash 的环境变量并不相同

执行不了的定时任务有可能是由于有输出，但是没有输出到文件 

举个 🌰 

```sh
#! /bin/bash

git add . > /dev/null
git commit -m "test" > /dev/null
git push > /dev/null
```

如果去掉 `> /dev/null`  会导致无法正确执行。

