// export var $ = function (selector) {
//   return document.querySelector(selector);
// }
// $.html = function (html) {
//   this.innerHTML = html;
// }

Node.prototype.html = function () {
  let html = Array.from(arguments)[0];
  if (html) {
    this.innerHTML = html;
  } else {
    return this.innerHTML
  }
  return this;
}

Node.prototype.attr = function () {
  let args = Array.from(arguments);
  switch (args.length) {
    case 0:
      // get all
      let attrs = Array.from(this.attributes);
      let result = {};
      attrs.forEach(function (index) {
        result[index.nodeName] = index.nodeValue;
      })
      return result;
      break;
    case 1:
      // string  get
      // object  set
      if (typeof args[0] === 'string') {
        return this.getAttribute(args[0]);
      } else if (typeof args[0] === 'object' && !isArray(args[0])) {
        for (let item in args[0])
          this.setAttribute(item, args[0][item]);
      } else {
        throw 'params is error';
      }
      break;
    case 2:
      // set
      this.setAttribute(args[0], args[1]);
      break;
  }
  return this;
}


function isArray(obj) {
  if (typeof obj === 'object') {
    var flag = obj instanceof Array;
    console.log(flag);
    return flag;
  } else {
    throw obj + " is not a Object";
  }
}
