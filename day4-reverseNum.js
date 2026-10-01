function reverseNumber(n) {
  let reversed = 0;

  while (n > 0) {
    let lastDigit = n % 10;

    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n/10);

    // reversed ko update karo: pichle reversed ko 10 se multiply karke lastDigit jodo
    // n ko chhota karo: n = Math.floor(n / 10)

  }

  return reversed;
}

console.log(reverseNumber(123));  // 321
console.log(reverseNumber(500));  // 5