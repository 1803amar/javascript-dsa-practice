// array me har number ka square nikalna hai.

function getSquare(arr){
    return arr.map(function(num){
        return num * num ;
    });
}

console.log(getSquare([1,2,3,4]));

// filter me function true/false return karta hai (decide karne ke liye rakhna hai ya nahi). 
// map me function naya value return karta hai (jo us jagah par array me aayega).