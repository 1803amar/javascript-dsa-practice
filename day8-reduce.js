// reduce — poore array ko ek single value me convert karna
// Jaise: array ka sum nikalna (ek hi value answer me chahiye, poora array nahi).

function sumArray(arr){
    return arr.reduce(function(total,current){
        return total + current ;
        // yha par bina 0 likhe bhi answer aa jayega but phir bhi 0 isliye likha hai ki agar array khali hua [] to us case me bhi anser 0 return ho jayega otherwise [] ( khali array ) ke case me program crash ho jayega to 0 likhna best practice hai
    },0);

}

console.log(sumArray([1,2,3,4]))

// output should be : 10 . because 1+2+3+4 =10
