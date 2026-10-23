// Array me ek element dhoondna, shuru se end tak ek-ek karke check karte jaana.

function linerSearch(arr , target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return "Target found at index " + i;
        }
    }
    return "Target not found in array";

}

console.log(linerSearch([5,3,8,1,9],8));       //Output should be:Target found at index 2 (index)
console.log(linerSearch([5,3,8,1,9],100));     //Output should be:Target not found in array