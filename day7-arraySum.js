function arraySum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    // total me arr[i] jodo
    total += arr[i];
  }

  return total;
}

console.log(arraySum([10, 20, 30]));  // 60
console.log(arraySum([5, 5, 5, 5]));  // 20