module.exports = function reverse (n) {
 return (n+'').match(/\d/g).reverse().join('') * (n<0? -1 : 1);
}
