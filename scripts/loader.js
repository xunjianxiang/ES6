class Loader {
  xhr(options){
    let {url, method='GET', data} = options
    let promise = new Promise(function (success, failure) {
      let xhr = new XMLHttpRequest()
      // GET: append params after url
      if (method.toUpperCase() === 'GET' && data && JSON.stringify(data).length > 2) {
        url += '?'
        for (let item in data)
          url  = `${url}${item}=${data[item]}&`
        url = url.substring(0, url.length-1)
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
            success(xhr.responseText)
          } else {
            failure({
              error: -1,
              data: {
                code: xhr.status,
                url: xhr.responseURL,
                method: method.toUpperCase(),
                text: xhr.statusText
              }
            })
          }
        }
      }
    })
    return promise
  }
  ajax(options){
    let _this = this
    let {url, method, data={}, cache=true} = options
    let promise = new Promise(function (success, failure) {
      if (!cache) {
        data._time_stamp = new Date().getTime()
      }
      _this.xhr({
        url: url,
        method: method,
        data: data
      }).then(function (data) {
        try {
          data = JSON.parse(data)
        } catch (e) {
        } finally {
          success(data)
        }
      },function (error) {
        failure(error)
      })
    })
    return promise;
  }
  pageLoader(ajaxArr, success, failure){
    let _this = this
    let promises = ajaxArr.map(function (item) {
      return _this.ajax(item)
    })
    Promise.all(promises).then(function (data) {
      success && success(data)
    }).catch(function (error) {
      failure && failure(error)
    })
  }
}
export const $loader = new Loader()
