// Ek sorted array aur ek target diya hai.
// Agar target array me hai, to uska index return karo.
// Agar nahi hai, to wo index return karo jahan target ko insert karne se array sorted hi rahe.

function searchInsertPosition(arr, target){
    let start =0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end)/2) ;
        if(arr[mid] === target){
            return 'Target found at index ' + mid;
        } else if(arr[mid] < target){
            start = mid + 1;
        } else {
            end = mid -1
        }
    }
    return "Target should be at index " + start;
}

console.log(searchInsertPosition([1, 3, 5, 6], 5));  //Output: 2
console.log(searchInsertPosition([1, 3, 5, 6], 2));  //Output: 1
console.log(searchInsertPosition([1, 3, 5, 6], 7));  //Output: 4
console.log(searchInsertPosition([1, 3, 5, 6], 0));  //Output: 0


// Loop ke baad start hi answer kyu hai
// Binary search me start sirf tab aage badhta hai jab arr[mid] < target ho (yaani mid wala element target se chhota hai). 
// Matlab start ke left me jitne bhi elements hain, sab target se chhote hain.
// Jab loop khatam hota hai (start > end), to start wo pehli jagah hai jahan ka element target se bada hai (ya array khatam ho gaya). 
// Target ko insert karne ki sahi jagah bhi wahi hoti hai.