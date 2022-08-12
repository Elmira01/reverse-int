module.exports = function reverse (n) {
return +[...(""+Math.abs(n))].reverse().join("")*(n<0 ? -1:1);
}
