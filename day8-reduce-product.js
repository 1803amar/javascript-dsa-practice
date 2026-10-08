// array ka product nikalo matlab aapas me multiply kr do sabko

function productArray(arr){
    return arr.reduce(function(prod,current){
        return prod * current ;
    },1);
}

console.log(productArray([1,2,3,4]));

// output should be 24. because 1x2x3x4 =24 ;