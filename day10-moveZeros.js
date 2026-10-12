function moveZeros(arr){
    let result = []
    let countZero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
              // non-zero element result me push karo
            result.push(arr[i]);
        } else {
             // zeroCount badhao
            countZero++;
        }
    }
    for(let i = 0; i < countZero; i++){
         // result me zero push karo
        result.push(0);
    }
    return result;
}

console.log(moveZeros([0,1,0,3,12]));
console.log(moveZeros([0,0,1]));

// output1: [1,3,12,0,0]
// output2: [1,0,0]