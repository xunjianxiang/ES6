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
    // console.log(_pathObj)
    this.load(_pathObj)
  },
  pathFormat: function () {
    let _obj = {
      path: '',
      search: this.search(),
      params: ''
    }
    let path = this.path()
    if (this.route[path]) {
      // 直接能查到路径
      _obj.path = path
    } else {
      // 不能直接查到路径
      // 将最后一块整合为param
      _obj.path = path.substring(0, path.lastIndexOf('/'))
      _obj.params = path.substring(path.lastIndexOf('/'))
      if (!this.route[_obj.path])
        _obj.path = '/error'
    }
    return _obj
  },
  load: function (_route) {
    let _path = _route.path
    _route.path = this.route[_path].path
    _route.data = this.route[_path].data
    console.log(_route);
    this.route[_path].entry.init(_route)
  }
}
