function digitSum(n) {
  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;

    sum = sum + lastDigit;
    n = Math.floor(n/10);

    // sum ko update karo
    // n ko chhota karo

  }

  return sum;
}

console.log(digitSum(123));  // 6
console.log(digitSum(500));  // 5