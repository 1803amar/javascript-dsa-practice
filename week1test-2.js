// Test Problem 3 (Day 4/5 mix — number aur string dono):
// Ek function likh jo ek number n leta hai aur check karta hai ki uske digits ka sum even hai ya odd. Return karna hai string: "even" ya "odd".
// Jaise digitSumParity(123) → digit sum = 1+2+3=6, 6 even hai, to return "even".
// digitSumParity(124) → digit sum = 1+2+4=7, 7 odd hai, to return "odd".

function digitSumParity(n){
    let sum =0;
    while(n>0){
        let lastdigit = n%10
        sum += lastdigit;
        n= Math.floor(n/10);
    }
    if(sum % 2 == 0){
        return "even"
    } else {
        return "odd"
    }
}

console.log(digitSumParity(123));
console.log(digitSumParity(124));