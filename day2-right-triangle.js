function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // andar ka loop kitni baar chalega? socho row number "i" se kya relation hai

    for(let j=1; j<=i; j++){
        row+="*";
        // console.log(row);
    }

    console.log(row);
  }
}

rightTriangle(5);

// output:
// *
// **
// ***
// ****
// *****