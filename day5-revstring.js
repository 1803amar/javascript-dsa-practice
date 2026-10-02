function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    // reversed me str[i] jodo
    reversed += str[i];

  }

  return reversed;
}

console.log(reverseString("hello"));  // "olleh"
console.log(reverseString("world"));  // "dlrow"

// Reverse string using "built-in method"

// function reverseStringBuiltIn(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStringBuiltIn("hello"));  // "olleh"

// how does built-in method work?
// Ye 3 steps me hota hai:

// 1. str.split("") — string ko character-array me todta hai: "hello" → ['h','e','l','l','o']
// 2. .reverse() — array ko ulta karta hai: ['o','l','l','e','h']
// 3. .join("") — array ko wapas string bana deta hai: "olleh"