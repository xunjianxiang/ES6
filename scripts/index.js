import $route from './route'
import $location from './location'
import $http from './http'
// import './myGenerator'
$location.route = $route
$location.init()

// {
// 	function* genter () {
// 		yield 'a';
// 		yield 'b';
// 	}
// 	let gen = new genter();
// 	console.log(gen.next())
// 	for (let g of genter()) {
// 		console.log(g);
// 	}
// }

{
	function*  Gen () {
		let flag = true;
		let a = yield* random(flag);
		yield* round(a);
	}
	function* random (flag) {
		return flag ? Math.random() : 1;
	}
	function* round (number) {
		return Math.round(number);
	}
	let gen = new Gen();
	console.log('a', gen.next());
	console.log('b', gen.next());
}

// let promise = new Promise((resolve, reject) => {
// 	let number = Math.round(Math.random());
// 	if (number) {
// 		// resolve(number);
// 		setTimeout(resolve, 3000, number);
// 	} else {
// 		// reject(number);
// 		setTimeout(reject, 3000, number);
// 	}
// })
// promise
// 	.then(number => {
// 		console.log(number);
// 	})
// 	.catch(number => {
// 		console.log(number);
// 	})
/* Promise http */

// import $http from './http'

let a = $http.ajax({
	url: './views/error.html',
	cache: false
}, {
	url: './json/main.json'
})
// callback
a.then(function (data) {
	console.log(data)
}).catch(function (error) {
	console.log(error)
})
