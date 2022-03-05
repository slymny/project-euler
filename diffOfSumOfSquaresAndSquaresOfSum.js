//difference between sum of squares and square of sum
function squareDiff(n) {
  const arr = Array.from(Array(n), (e, i) => i + 1);
  const sumsSquare = Math.pow(
    arr.reduce((result, curr) => result + curr, 0),
    2,
  );
  const squaresSum = arr.reduce((result, curr) => result + Math.pow(curr, 2), 0);
  return sumsSquare - squaresSum;
}

squareDiff(100);
