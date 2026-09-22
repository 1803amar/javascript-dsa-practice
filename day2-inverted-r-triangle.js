function invertedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // is baar stars ghatte jaane chahiye jaise-jaise i badhta hai

    for(let j=n; j>=i; j--){
        row+="*"

    }

    console.log(row);
  }
}

invertedTriangle(5);

// output:
// *****
// ****
// ***
// **
// *