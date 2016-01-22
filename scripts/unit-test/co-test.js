import $co from '../co'

function* test (text) {
	return {
		text: text
	}
}


$co(function* () {
	let text1 = yield test('测试')
	yield test(text1)
	return 'finished'
})
.then(function(message) {
	console.log(message);
})
.catch(function(error) {
	console.log(error)
})
