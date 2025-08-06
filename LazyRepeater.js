function makeLooper(str) {
  // TODO: return a function that loops through 'str' on successive invocations
  index = 0;
  return function () {
    if (index >= str.length) {
      index = 0; // if it reches to the max length, it goes back
    }
    return str[index++];
  };
}
let looper2 = makeLooper("ndzhwe");
console.log(looper2());
console.log(looper2());
