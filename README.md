# ES6
## 变量和常量
#### let
1. 先声明后使用
2. 封闭式死区(一旦声明，将隔绝父级作用域的同名变量)
3. 不允许重复声明

#### cosnt
1. 包含let的特性
2. 声明必须初始化
3. 一旦声明不可更改(复合型常量只保证引用地址不变)
4. 前置export可声明跨模块的常量(import)

## 函数
#### {} 取代 (function(){})()
```javascript
{
  function scope() {
      console.log(true);
  }
  scope() // true
}
scope() //scope is not defined
```
#### 箭头函数
  简单函数可用箭头函数简写
```javascript
  let add = ((m, n) => m + n);
  /*
    function add (m, n) {
      return m + n;
    }
  */
  let array = [1, 2, 3];
  array.forEach(item => {
    console.log(item);
  })

```

#### 参数默认值
```javascript
  {
    let arg1 = ((x, y=2, z=y) => console.log(x, y, z);)
    arg1(1); // 1 2 2

    let arg2 = ((x, ...z) => console.log(x, z))
    arg2(1, 2, 3, 4) // 1 [2, 3, 4]

    let others= [1, 2]
    let params = [...others, 3, 4, 5];
    console.log(params); // [1, 2, 3, 4, 5]

    let str = 'string';
    console.log([...str]); // ["s", "t", "r", "i", "n", "g"]
  }
```
