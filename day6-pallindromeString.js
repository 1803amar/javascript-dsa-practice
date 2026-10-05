function isPalindromeString(str) {
    let original = str.toLowerCase();

    let revstr = "";

    // str ko reverse karo (Day 5 wala logic use kar)
    // original aur reversed ko compare karo

    for (let i = str.length - 1; i >= 0; i--) {

        revstr += str[i];
    }
    if (revstr.toLowerCase() == original) {
        return true;
    }
    else {
        return false;
    }

    //   return revstr;

}

console.log(isPalindromeString("madam"));  // true
console.log(isPalindromeString("hello"));  // false
console.log(isPalindromeString("Madam"));  // true (case-insensitive)