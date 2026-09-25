function lowerhalf(n){
    for(let i = 1; i <= n; i++){
        row="";

        for(let j=1; j<=i; j++){
            row +=" ";
            // console.log(row);
        }
         for(let k=1; k<=2 * (n - i) + 1 ;k++){
        row+="*";
    }

        console.log(row);
    }

}

lowerhalf(5)