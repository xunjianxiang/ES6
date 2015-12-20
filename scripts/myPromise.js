function loadHTML(url) {
  let promise = new Promise(function (success, failure) {
    let method = 'get';
    let xhr = new XMLHttpRequest();
    xhr.open(method, url)
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        } else {
          failure(`${method.toUpperCase() + ' ' + xhr.responseURL} ${xhr.status + ' ' + '(' + xhr.statusText + ')'}`);
        }
      }
    }
  })
  return promise;
}
class ME {
  constructor(name) {
    this.name = name;
  }
  hello(){
    console.log(`My name is ${this.name}`);
  }
  say(url){
    let promise = new Promise(function (success, failure) {
      loadHTML(url).then(function (data) {
        return data;
      }, function (data) {
        // console.error(data);
        return new Error(data);
      })
    })
    return promise;
  }
}

var me = new ME('张三');
me.hello();
me.say('/views/success1.html').then(function (data) {
  console.log(data);
}, function (error) {
  console.log(error);
});
