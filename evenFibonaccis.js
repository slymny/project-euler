//even fibonacci numbers

function evenFibonacciSum(n) {
  const arr = [1, 2];
  while (arr[arr.length - 1] + arr[arr.length - 2] < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  console.log(arr);
  return arr.filter(num => num % 2 === 0).reduce((sum, curr) => sum + curr, 0);
}

evenFibonacciSum(4000000);
