module.exports = function reverse (n) {
  let x = Math.abs(n);
  let y = 0;
  while (x > 0) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return Math.sign(n) * y;
}
