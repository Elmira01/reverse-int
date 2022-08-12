module.exports = function reverse (n) {
                let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
                let result = Number(reverseAsString);
                return  result;
}
