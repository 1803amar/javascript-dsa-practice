function checkEvenOdd(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(checkEvenOdd(4));   // even
console.log(checkEvenOdd(7));   // odd
console.log(checkEvenOdd(0));   // even