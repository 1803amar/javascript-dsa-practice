function square(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // andar ek aur loop likh: row me n baar "*" jodna ha
    for(let j=1; j<=n;j++){
        row+="*";
    }



    console.log(row);
  }
}

square(5);


// output:

// *****
// *****
// *****
// *****
// *****