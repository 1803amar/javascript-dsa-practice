function factorial(n) {
  let result = 1;

  // loop likh: 1 se n tak result ko har number se multiply karna hai

  for(let i=1; i<=n; i++){
    result*=i;
  }

  return result;
}

console.log(factorial(5));   // 120
console.log(factorial(1));   // 1
console.log(factorial(0));   // 1