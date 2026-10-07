// Array me min nikalo

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // agar arr[i] min se chhota hai, to min ko update karo
    if(arr[i] < min){
        min = arr[i];
    }
  }

  return min;
}

console.log(findMin([3, 7, 2, 9, 4]));  // 2
console.log(findMin([10, 5, 2]));       // 2