// Array me max nikalo

function findMax(arr) {
  let max = arr[0];   // pehle element ko shuruwati max maan liya

  for (let i = 1; i < arr.length; i++) {
    // agar arr[i] max se bada hai, to max ko update karo
    if(arr[i]>max){
        max = arr[i];
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 4]));  // 9
console.log(findMax([10, 5, 2]));       // 10


