

function isPrime(n) {
    const arr = Array.from(Array(Math.floor(Math.sqrt(n))), (e, i) => i + 1).slice(1);
    return !arr.some(num => n % num == 0);
}

function primeAfter(n) {
    while(!isPrime(n)) {
        n++;
    }
    return n;
}

primeAfter(2000000);