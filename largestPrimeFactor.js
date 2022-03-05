//largest prime factor
function largestPrimeFactor(num) {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      num /= i;
      primes.push(i);
    }
  }
  return primes[primes.length - 1];
}
largestPrimeFactor(600851475143);
