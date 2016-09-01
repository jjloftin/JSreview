function range(a,b,c) { 
  if (c == undefined) {c = 1; };
  var nums = [];
  for(var index = a; index != b + c; index += c)
  {
    nums.push(index);
  };
  return nums;
};
function sum(array) {
  var sum = 0;
  for (var index = 0; index < array.length; index++ ) {sum += array[index];};
  return sum;
};