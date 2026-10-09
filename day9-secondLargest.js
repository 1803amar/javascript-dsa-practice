function secondLargest(arr){
    let largest = - Infinity;
    let secondLargest = - Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest([3,7,2,9,4]));
console.log(secondLargest([10,10,5]));

// output should be 7 for first input and  10 for second input value