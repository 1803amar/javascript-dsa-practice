// step 1: ye function array se duplicates ko remove kr ke naya array create kr dega jaise [10,10,5] ko [10,5] bana dega
function removeDuplicates(arr){
    let uniqueSet = new Set(arr);
    let uniquesArray = Array.from(uniqueSet);
    return uniquesArray;
}

// step 2: ye function array me second largest number find karega
function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// step 3:  ye function dono ko jod kar uniques array se second largest nikal lega
function distinctSecondLargest(arr){
    let uniqueArray = removeDuplicates(arr);
    return secondLargest(uniqueArray);
}





console.log(distinctSecondLargest([10, 10, 5]));      // 5 ab sahi aayega
console.log(distinctSecondLargest([3, 7, 2, 9, 4]));  // 7 (koi duplicate nahi tha, same rahega)