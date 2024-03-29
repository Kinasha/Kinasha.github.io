## 什么是精度问题

## 为什么会有精度问题

> 先提供一个标准回答，因为 ECMAScript 规范要求 JavaScript 运行时按照 IEEE 754 的 64 位存储法，存储 Number 类型。这在浮点数和大数情况下不安全。
> 根本原因，用有限的数表示无限的数是不可能的。
$$V= (-1)^S\cdot M \cdot 2^E$$
其中，

-  $(-1)^S$ 表示符号位 
- $M \in [1,2)$ 表示底数
- 2 表示基数
- $E$ 表示指数 

通常，以 10 为基数的科学计数法（scientific notation）比较常见，但是，计算机中，为了通过「补码」实现更高效地运算，通常采用以 2 为基数的科学计数法。

|     | 32  | 64  |
| --- | --- | --- |
| S   | 1   | 1   |
| M   | 8   | 11  |
| E   | 23  | 52  |

问题就出在 M 上，在 1 到 2 中间有无数个小数，无论我们采取多少位，都不能穷尽所有的小数，这就意味着，用上述的方法，总有无法被准确表示的数。

这里有个问题，如何以 0.2 为例，解释一下计算过程
-  0.1 是正数，所以 S = 0
- 接下来，要用科学计数法，表示 0.1 


## 如何避免精度问题

- 避免直接使用浮点数、大数进行运算
- 


用有限的数表示无限的数是不可能的