// import * as params from './const'
// import './util'
// import './let'
// import './array'
// console.log(params.A);
// console.log(params.B);
// console.log($);
// $('h1').html('123');

// console.log(document.querySelector('h1').html());
// document.querySelector('h1').attr('a', 1)
// console.log(document.querySelector('h1').attr());
// 'use strict'
// {
//   function* hello( ) {
//     yield 5
//   }
//   let hello1 = hello()
//   console.log(hello1.next());
//   console.log(String.prototype);
//   console.log(String.prototype.length);
// }
import {$loader} from './loader'
import {$route} from './router'
$loader.pageLoader($route.index, function (data) {
  data.map(function (item) {
    try {
      item = JSON.parse(item)
      console.log(item)
    } catch (e) {
      console.log(item)
    }
  })
}, function (error) {
  console.log(error);
})
{
  function* hello() {
    yield 56
  }
  var hello1 = hello()
  console.log(hello1.next());

  function* test([a, b, c]) {
    yield a
    yield b
    yield c
  }
  var test1 = test([1, 2, 3])
  console.log(test1.next());
  console.log(test1.next());
  console.log(test1.next());
  console.log(test1.next());
}
// $util.loadHTML({
//   url: './views/a.html'
// }).then(function (data) {
//   console.log(data);
// }, function (error) {
//   console.log(error);
// })
// $util.ajax({
//   url: './json/a.json'
// }).then(function (data) {
//   console.log(data);
// }, function (error) {
//   console.log(error);
// })
