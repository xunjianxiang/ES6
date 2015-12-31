import $location from './location'
import $http from './http'
import $render from './render'
import $co from './co'
class ErrorPage {
	init(_route) {
		let _this = this
		$co(function* () {
			let data = yield $http.ajax(..._route.data)
			yield $render('errorTemplate', data)
			_this.operate()
			return 'get in error'
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
			$location.assign('/')
			event.preventDefault()
		})
	}
}
export default new ErrorPage()
