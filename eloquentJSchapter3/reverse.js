function reverseArray(array) {
	reverse = [];
  	for(var index = array.length - 1; index >= 0; index--)
    {
      reverse.push(array[index]);
    }
    return reverse;
};


function reverseArrayInPlace(array) {
  for(var index = 0; index < array.length / 2; index++) { 
  	var save = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = save;
  };
};

console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]
arrayValue = [4,3,2,1];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);