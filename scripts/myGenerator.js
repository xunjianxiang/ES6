{
  function* hello() {
    yield 56
  }
  var hello1 = hello()
  console.log(hello1.next());

  function* test([a, b, c]) {
    yield a
    yield b
    yield c
  }
  var test1 = test([1, 2, 3])
  for (let item of test1)
    console.log(item);
}
