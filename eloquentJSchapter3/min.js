function min(a,b){
var bool = a < b;
  return (bool ? a : b);
};

console.log(min(0, 10));
//  0
console.log(min(0, -10));
//  -10