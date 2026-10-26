function binarySearch(sortedArr, target) {
    let start = 0;
    let end = sortedArr.length -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(sortedArr[mid] === target){
            return 'Target found at ' +  mid;
        }else if(sortedArr[mid] < target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 'Terget not found';

}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 11));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 3));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 7));
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 100));