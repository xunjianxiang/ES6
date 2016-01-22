export default function (Gen) {
	let promise = new Promise(function (success, failure) {
		let gen = new Gen()
		function next (data) {
			let current = data ? gen.next(data) : gen.next()
			// 如果current.value并不是一个Promise对象,将他转化成一个Promise对象
			current.value = current.value instanceof Promise ? current.value : Promise.resolve(current.value) 
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
}
