export default {
  route: {},
  init: function () {
    let _this = this
    if (!location.hash) _this.assign('/')
    window.addEventListener('hashchange', function () {
      _this.change()
    })
    window.addEventListener('DOMContentLoaded', function () {
      _this.change()
    })
  },
  path: function () {
    return location.hash.substring(2).split('?')[0]
  },
  search: function (_search) {
    if (_search) {
      location.hash = '#!' + this.path() + '/?' + _search
    } else {
      return location.hash.substring(2).split('?')[1] || location.search.substring(1)
    }
  },
  assign: function (_path) {
    _path = _path || '/'
    location.hash = '#!' + _path
  },
  change: function () {
    // this.changeCallback()
    let _path = this.path()
    let _pathObj = this.pathFormat()
    this.load(_pathObj)
  },
  pathFormat: function () {
    let _this = this
    let _obj = {
      path: '',
      search: _this.search() ? _this.urlParamsFormat(_this.search()) : undefined,
      params: ''
    }
    let path = _this.path()
    if (path !== '/' && path.lastIndexOf('/') === (path.length - 1)) {
      path = path.substring(0, path.length - 1);
    }
    if (_this.route[path]) {
      // 直接能查到路径
      _obj.path = path
    } else {
      // 不能直接查到路径
      // 将最后一块整合为param

      _obj.path = path.substring(0, path.lastIndexOf('/'))
      if (_this.route[_obj.path]) _obj.params = path.substring(path.lastIndexOf('/') + 1)
      else  _obj.path = '/error'
    }
    return _obj
  },
  load: function (_route) {
    let _path = _route.path
    _route.path = this.route[_path].path
    _route.data = this.route[_path].data
    this.route[_path].entry.init(_route)
  },
  urlParamsFormat: function (url) {
    let result = {}
    url.split('&').forEach(function (item) {
      result[item.split('=')[0]] = item.split('=')[1]
    })
    return result
  }
}
