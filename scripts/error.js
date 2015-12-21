import {$loader} from './loader'
import $location from './location'
let template = require('./template')
class ErrorPage {
  constructor() {

  }
  init(_route) {
    let _this = this
    _route.data.push({
      url: _route.path,
      cache: false
    })
    $loader.pageLoader(_route.data, function (data) {
      let templateStr = ''
      let _data = {}
      data.map(function (item) {
        if (typeof item === 'string') {
          templateStr += item;
        } else {
          Object.assign(_data, item)
        }
      })
      document.querySelector('#main').innerHTML = templateStr
      document.querySelector('#main').innerHTML = template('errorTemplate', _data)
      _this.operate()
    }, function (error) {
      console.log(error);
    })
  }
  operate() {
    document.querySelector('button').addEventListener('click', function (event) {
      $location.assign('/')
      event.preventDefault()
    })
  }
}
export default new ErrorPage()
