//sum of times of 3 and 5
function sum(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}
sum(1000);
