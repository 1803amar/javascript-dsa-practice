function countWords(str){
    let words = str.split(" ");

    // ye wala function khaali strings hata dega 
    // like "                I am learning DSA" --> bhi "I am learning DSA" me convert kar dega 
    let realWords = words.filter(function (word){
        return word !== "";
    })
    return realWords.length;
}

console.log(countWords("                I am learning DSA"));
console.log(countWords("hello"));

// .split(" ") string ko space ke base par tod kar array bana dega 
// like "I am learning DSA" → ['I', 'am', 'learning', 'DSA'], phir .length se count mil jaata hai.

