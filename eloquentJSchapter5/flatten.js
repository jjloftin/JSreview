var arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(arrays) {
  return arrays.reduce(function f(a,b) {return a.concat(b)});
};

console.log(flatten(arrays));
// ? [1, 2, 3, 4, 5, 6]