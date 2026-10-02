function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    // check karo: kya "vowels" string me "char" maujood hai?
    // agar hai, to count badhao
    for (let j = 0; j < vowels.length; j++){
        if(char == vowels[i]){
            count++;
        }
    }
   

  }
  

  return count;
}

console.log(countVowels("Hello World"));  // 3
console.log(countVowels("xyz"));          // 0


// same solution using built-in method 

// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiou";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
