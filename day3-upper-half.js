function upperHalf(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces: (n - i) baar " " jodo
    for (let j = 1; j <= n - i; j++) {
      row += " ";

    }

    // stars: kitne stars chahiye har row me? (hint: (2*i - 1))

    for(let k=1; k<=(2*i-1);k++){
        row+="*";
    }
    console.log(row);
  }
}

upperHalf(5);

// output:
//     *
//    ***
//   *****
//  *******
// *********