function nthPrime(n) {
  const arr = [2];
  let num = 3;
  while (arr.length !== n) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < Math.sqrt(num) && num % arr[i] === 0) {
        arr2.push(i);
      }
    }
    if (arr2.length === 0) {
      arr.push(num);
    }
    num += 2;
  }
  return arr[arr.length - 1];
}

nthPrime(10001);
