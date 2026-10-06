// Test Problem 1 (Day 1 — loops/math):
// Ek function likh jo n leta hai aur saare numbers 1 se n tak ka average return kare.
// Jaise average(5) → (1+2+3+4+5)/5 = 3

function average(n){
    let sum = 0;
    for(let i=1; i<= n; i++){
        sum+= i;
    }
    let avg = sum/n;
    return avg;
}

console.log(average(5));
console.log(average(9));