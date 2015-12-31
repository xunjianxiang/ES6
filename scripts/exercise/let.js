/**
 * let
 * 类似于var, 但定义的变量仅仅在代码块内有用
 * 不存在变量提升，所有一定要声明后使用
 * 应用于局部变量、for循环
 */
{
  var a = 1;
  // console.log('代码块内', 'var', a);
  let b = 2;
  // console.log('代码块内','let', b);
}
// console.log('代码块外', 'var', a);
// error: b is not defined
// console.log('代码块外','let', b);

{
  for (let i = 0; i < 3; i++) {}
  // error: i is not defined
  // console.log(i);
}

/**
 * 不存在变量提升
 * 块级作用域内的let变量会形成封闭式死区，一旦出现，在声明前都是不可用的
 */
{
  if (true) {
    tmp = 'abc';
    /**
     * let => undefined
     * var => abc
     */
    let tmp;
    // var tmp;
    // console.log(tmp);
    tmp = 'def';
    // console.log(tmp);
  }
}

/**
 * 比较隐蔽的死区
 * 第一个bar 先声明x=2 后声明y=x  2, 2
 * 第二个bar 先声明x=y 此时y并没有声明 后声明y=2 undefined 2
 */
{
  function bar(x=2, y=x) {
    // console.log(x, y);
  }
  // function bar(x=y, y=2) {
  //   console.log(x, y);
  // }
  bar();
}

/**
 * 不允许重复声明
 */
{
  let a = 10;
  // Duplicate declararion "a"
  // var a = 1;
  // let a = 1;
  // const a = 1;
}
