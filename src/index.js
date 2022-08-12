module.exports = function reverse (n) {
  let isNegative = n < 0;  
  let reverseString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseString);
  if(isNegative){
      return  -result;
  }
  else{
    return result;
  }
}
