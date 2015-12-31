import $loader from './loader'
import $location from './location'
let template = require('./template')
class MainPage {
  init(_route) {
    let _this = this
    _route.data.unshift({
      url: _route.path,
      cache: false
    })
    $loader.ajax(..._route.data)
      .then(function (data) {
        let templateStr = ''
        data.map(function (item) {
          if (typeof item.data.text === 'string') {
            templateStr += item.data.text
          } else {
            Object.assign(_route, item.data.text)
          }
        })
        document.querySelector('#main').innerHTML = templateStr
        document.querySelector('#main').innerHTML = template('mainTemplate', _route)
        _this.operate();
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  operate() {
    document.querySelector('button').addEventListener('click', function (event) {
      $location.assign('/error')
      event.preventDefault()
    })
  }
}
export default new MainPage()
