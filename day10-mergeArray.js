function mergedArray(arr1, arr2){
    let merge = [];
    for(let i=0; i< arr1.length; i++){
        merge.push(arr1[i]);
    }
    for(let j=0; j< arr2.length; j++){
        merge.push(arr2[j]);
    }
    return merge;
}

console.log(mergedArray([1,2,3],[4,5]));

// Output: [1, 2, 3, 4, 5]



// another way to solve this problem without using loop

// function mergedArrayBuiltIn(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// // ya spread operator se:
// function mergedArraySpread(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// concat() do arrays ko jod deta hai. 
// [...arr1, ...arr2] (“spread operator”) dono arrays ke elements ko nikal kar ek naye array me daal deta hai.