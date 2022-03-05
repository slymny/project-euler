//smallest multiple

function smallestMultipleOfRange(n) {
  const arr = Array.from(Array(n), (e, i) => i + 1);
  const limit = arr.reduce((result, curr) => result * curr, 1);
  for (let i = n; i < limit; i += n) {
    if (arr.every(num => i % num === 0)) {
      return i;
    }
  }
}

smallestMultipleOfRange(20);
