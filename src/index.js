module.exports = function reverse (n) {
                if(n<0){
                     n= Math.abs(n);
                     return n;
                }
                let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
                let result = Number(reverseAsString);
                return  result;
}

