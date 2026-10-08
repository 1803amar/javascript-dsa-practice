function getOdds(numArr){
    return numArr.filter(function(num){
        return num % 2  !== 0;
    });

}

console.log(getOdds([1,2,3,4,5,6,7,8,9]));