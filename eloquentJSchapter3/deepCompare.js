function deepEqual(object1,object2){
  if (typeof object1 != "object" && typeof object2 != "object")
  	return object1 === object2;
  if (!(typeof object1 == "object" && object1 != null))
    return false;
  
  objSize1 = 0;
  objSize2 = 0;
  for(var prop in object1){objSize1++;};
  for(var prop in object2){objSize2++;};
  if(objSize1 != objSize2)
    return false;
  
  for(var prop in object1){
    if(!(deepEqual(object1[prop],object2[prop])))
      return false;
  };
  return true;
};
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true