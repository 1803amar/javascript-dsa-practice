// // using for loop

// function getEvens(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// same result / same thing using filter 

function getEvens(arr) {
  return arr.filter(function(num) {
    return num % 2 === 0;
  });
}

console.log(getEvens([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]

// filter array ke har element pe ye function chalata hai. Jis element ke liye function true return kare,
//  usko naye array me rakh leta hai. Jiske liye false aaye, usko chhod deta hai.

// function(num) { return num % 2 === 0; } — ye function khud nahi call karna, 
// filter usko khud-ba-khud har element pe chalata hai, aur num automatically current element ban jaata hai.