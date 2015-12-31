const $template = require('./template')
export default function (el, data) {
	let templateStr = ''
	let templateData = {}
	data.map(function (item) {
		if (typeof item === 'string') {
			templateStr += item
		} else {
			Object.assign(templateData, item)
		}
	})
	let promise = new Promise(function (success) {
		document.querySelector('#main').innerHTML = templateStr
		let _html = $template(el, templateData)
		if (_html === '{Template Error}') {
			// 执行渲染失败的操作
			throw new Error('Template Error in ' + el)
		} else {
			document.querySelector('#main').innerHTML = _html
			success()
		}
	})
	return promise
}