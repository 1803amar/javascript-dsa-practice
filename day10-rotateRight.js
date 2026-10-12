function rotateRight(arr, k) {
    let n = arr.length;
    let firstPart = [];
    let lastPart = [];
    // lastPart me arr ke last k elements daalo (index n-k se n-1 tak)
    for (let i = n - k; i <= n - 1; i++) {
        lastPart.push(arr[i]);
    }
    // firstPart me arr ke baaki elements daalo (index 0 se n-k-1 tak)
    for (let i = 0; i <= n - k - 1; i++) {
        firstPart.push(arr[i]);
    }
    //   return firstPart;
    //   return lastPart;
    // return mergedArray(lastPart , firstPart); (agar mergedArray a function banao aur usme sono array ko merge kr do but yha maine .contact() us kiya hai)
    return lastPart.concat(firstPart);
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));


// Output: [4, 5, 1, 2, 3]