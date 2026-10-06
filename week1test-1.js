// Test Problem 2 (Day 2 — patterns):
// Right triangle bana, lekin stars ki jagah numbers use kar, aur har row me number row-number tak repeat ho:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

function numRightTriangle(n){
    
for(let i=1; i<=n; i++){
    let ptrn = "";
    for(let j=1; j<=i; j++){
        ptrn += j + " ";
    }
   console.log(ptrn);
}
}

numRightTriangle(5);