export default function (Gen) {
	return function () {
		let promise = new Promise(function (success, failure) {
			let gen = new Gen()
			function next (data) {
				let current = data ? gen.next(data) : gen.next()
				if (!current.done) {
					current.value
					.then(function (_data) {
						next(_data)
					})
					.catch(function (error) {
						failure(new Error(error))
					})
				} else {
					success(current.value)
				}
			}
			next()
		})
		return promise
	}()
	
}