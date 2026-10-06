// Test Problem 5 (last one — Day 6 mix):
// Ek function likh jo ek sentence (string) leta hai aur check karta hai ki us sentence ka har word palindrome hai ya nahi, 
// aur sirf wahi palindrome words count karke return kare.
// Jaise countPalindromeWords("madam i am level") → words hain madam, i, am, level → inme se madam palindrome hai, 
// i palindrome hai (1 letter hamesha palindrome), am nahi hai, level palindrome hai → total 3 palindrome words.

function isPalindromeStringInSentance(str) {
    let word = str.split(" ");
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let newWord = word[i];
        let rev = "";
        for (let j = newWord.length - 1; j >= 0; j--) {
            rev += newWord[j]
        }
        if (newWord === rev) {
            count++;
        }
    }
    return count;
}

console.log(isPalindromeStringInSentance("madam i am level"));