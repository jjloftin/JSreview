function countBs(s) {
  count = 0;
  for(var index = 0; index < s.length; index++){
   if (s.charAt(index) == 'B') {count++;}
  };
  return count;
};

function countChar(s,char) {
  count = 0;
  for(var index = 0; index < s.length; index++){
  	if(s.charAt(index) == char) {count++;}  
  };
  return count;
};
console.log(countBs("BBC"));
// ? 2
console.log(countChar("kakkerlak", "k"));
// ? 4