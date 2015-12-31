import main from './main'
import error from './error'

export default {
	'/': {
		path: './views/main.html',
		entry: main,
		data: [
			{
				url: './json/main.json'
			}
		]
	},
	'/error': {
		path: './views/error.html',
		entry: error,
		data: [
			{
				url: './json/error.json'
			}
		]
	}
}
