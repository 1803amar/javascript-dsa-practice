// Test Problem 4 (Day 2/3 — patterns mix):
// Ye pattern bana (n=5 ke liye):
// *
// * *
// * * *
// * * * *
// * * * * *

function rightAngleStar(n){
for(let i=1; i<=n; i++){
    let ptrn = "";
    for(let j=1; j<=i; j++){
        ptrn += "*" + " ";
    }
     console.log(ptrn);
}
}

rightAngleStar(5)