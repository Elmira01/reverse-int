module.exports = function reverse (n) {
    let x = Math.abs(n).toString().split("").reverse().join("")
  return n<0? -x : +x 
}
