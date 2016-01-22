class Loader {
	xhr(options){
		let {url, method='GET', cache=true, data} = options
		let promise = new Promise(function (success, failure) {
			let xhr = new XMLHttpRequest()

			// GET: append params after url
			if (method.toUpperCase() === 'GET' && data && JSON.stringify(data).length > 2) {
				url += url.includes('?') ? '&' : '?'
				for (let item in data)
					url  = `${url}${item}=${data[item]}&`
				url = url.substring(0, url.length-1)
			}

			// cache
			if (!cache) {
				url += url.includes('?') ? '&' : '?'
				url += '__time__stamp=' + new Date().getTime()
			}

			xhr.open(method.toUpperCase(), url)
			// POST
			switch (method.toUpperCase()) {
			case 'GET':
				xhr.send()
				break
			case 'POST':
				let formdata = new FormData()
				for (let item in data)
					formdata.append(item, data[item])
				xhr.send(formdata)
				break
			}

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						let result
						try {
							result = JSON.parse(xhr.responseText)
						} catch (e) {
							result = xhr.responseText
						}
						success(result)
					} else {
						failure({
							code: xhr.status,
							url: xhr.responseURL,
							method: method.toUpperCase(),
							text: xhr.statusText
						})
					}
				}
			}
		})
		return promise
	}
	ajax(...ajaxArr){
		let _this = this
		let promises = ajaxArr.map(function (item) {
			return _this.xhr(item)
		})
		return Promise.all(promises)
	}
}
export default new Loader()
