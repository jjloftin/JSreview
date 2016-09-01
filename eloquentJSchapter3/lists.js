function arrayToList(array){
  list = null;
  for(var index = array.length - 1; index != -1; index--){
    list = {value: array[index], rest: list};
  };
  return list;
};

function listToArray(list){
  array = [];
  while(true){
    array.push(list.value);
    list = list.rest;
    if(list === null)
      break;
  };
  return array;
};

function prepend(val,list){
  list = {value: val, rest: list};
  return list;
};

function nth(list, n){
  for(var index = 0; index < n; index++){
    list = list.rest;
    if(list == null) {return list}
  };
  return(list.value);
};

function nthRecursive(list,n){
  if(list == null) { return null;}
  else if(n == 0) {return list.value;}
  else {return nthRecursive(list.rest,n-1)};
};

console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20
console.log(nthRecursive(arrayToList([10, 20, 30,40]), 3));
// ? 20