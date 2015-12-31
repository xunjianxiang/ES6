/**
 * const
 * 用于声明常量，一旦声明，不可更改
 */

 {
	 const a = 1;
	 // error: "a" is read-only
	 // a = 2;
	//  console.log(a);
}
 /**
	* 一旦申明就必须初始化
	*/
 // error: Unexpected token
 // const foo;

 /**
	* 常量不提升，同样存在暂时性死区
	*/
{
	const MAX = 5;
	// console.log(MAX);
}
// error: MAX is not defined
// console.log(MAX);

/**
 * 对于复合型的常量 const只保证引用地址不变 内容可变
 */
{
	const foo = {};
	foo.name = 'ES6';
	// console.log(foo);
	// error: "foo" is read-only
	// foo = {
	//   name: 'ES5'
	// }
}
// {
//   let others= [1, 2]
//   let params = [...others, 3, 4, 5];
//   console.log(params);
// }
/**
 * 如果想将对象冻结，应该使用Object.freeze()
 */
 {
	 const foo = Object.freeze({});
	//  error: Can't add property name, object is not extensible
	//  foo.name = "zhangsan";
	//  console.log(foo);
 }

 /**
	* export
	* 用于声明跨模块的常量
	* 在export.js中验证
	*/
export const A = 1;
export const B = 2;
export const C = 2;
