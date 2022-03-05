//largest Palindrome By Three Digits
const reversedNumber = n => parseInt(n.toString().split('').reverse().join(''));

function largestPalindromeByThreeDigits() {
  let result = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      if (i * j === reversedNumber(i * j) && i * j > result) {
        result = i * j;
      }
    }
  }
  return result;
}
largestPalindromeByThreeDigits();
