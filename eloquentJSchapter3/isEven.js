function isEven(n){
  if(n < 0) {n = -1 * n};
  if(n === 1) {return false}
  else if(n === 0) {return true}
  else {return isEven(n-2)};
};

console.log(isEven(50));
// ? true
console.log(isEven(75));
// ? false
console.log(isEven(-1));
// ? ??
console.log(isEven(-239));
console.log(isEven(-4000));