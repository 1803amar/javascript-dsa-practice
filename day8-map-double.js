// array me sabhi ka double nikalna hai 

function doubleArray(arr){
    return arr.map(function(num){
        return 2 * num;
    });

}

console.log(doubleArray([1,2,3,4]));