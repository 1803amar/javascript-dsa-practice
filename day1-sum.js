function sumToN(n) {
  let total = 0;

  // yaha loop likh: 1 se n tak har number ko total me jodna hai

  for(i=1;i<=n;i++){
    total+=i
  }

  return total;
}

console.log(sumToN(5));   // 15 aana chahiye
console.log(sumToN(10));  // 55 aana chahiye