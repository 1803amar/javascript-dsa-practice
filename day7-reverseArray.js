// [1, 2, 3, 4, 5] ko [5, 4, 3, 2, 1] banana hai.

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // reversed me arr[i] jodo
    // array me '+=' ki jagah .push() use kiya jaata hai 
    reversed.push(arr[i]) ;
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]