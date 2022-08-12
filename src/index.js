module.exports = function reverse (n) {
                 let isNegative = n < 0;  
                let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
                let result = Number(reverseAsString);
                return  result;
}
