function isPalindrome(n) {
  let original = n;
  let reverse = 0;

  while(n > 0){

    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n/10);

  }
    if(reverse == original){
        return true;
    } 
    else {
        return false ;
    }

  

  // reverseNumber function call karo aur reversed value store karo

  // compare karo: original aur reversed same hai ya nahi

}

console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false