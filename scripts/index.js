import $route from './route'
import $location from './location'
// import './myGenerator'
$location.route = $route
$location.init()


/* Promise http */

// import $http from './http'

// let a = $http.ajax({
// 	url: './views/error.html',
// 	cache: false
// }, {
// 	url: './json/main.json'
// })
// // callback
// a.then(function (data) {
// 	console.log(data)
// }).catch(function (error) {
// 	console.log(error)
// })
