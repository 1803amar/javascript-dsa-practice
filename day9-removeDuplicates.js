function removeDuplicates(arr){
    let uniqueSet = new Set(arr);
    let uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

console.log(removeDuplicates([1,2,2,3,4,4,5]))

// expected output: [1,2,3,4,5]

// new Set(arr) — array ko Set me convert karta hai, duplicates apne aap hat jaate hain
// Array.from(uniqueSet) — Set ko wapas array me convert karta hai 
// (kyunki Set aur array thodi alag cheezein hain, kaam ke liye array format me wapas chahiye hota hai)