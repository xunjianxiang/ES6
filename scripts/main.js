import $http from './http'
import $location from './location'
import $render from './render'
import $co from './co'
class MainPage {
	init(_route) {
		let _this = this
		$co(function* () {
			let data = yield $http.ajax(..._route.data)
			yield $render('mainTemplate', data)
			_this.operate()
			return 'get in main'
		})
		.then(function (data) {
			console.log(data)
		})
		.catch(function (error) {
			console.log(error)
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
