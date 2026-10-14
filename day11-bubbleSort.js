function bubbleSort(arr) {
    // array ki length nikal li, baar baar .length likhna na pade isliye
    let n = arr.length;
    // outer loop: poora array itni baar scan karenge
    for (let i = 0; i < n; i++) {
        // inner loop: ek scan ke andar pairs compare karte hain
        for (let j = 0; j < n - 1; j++) {
            // agar current element agle se bada hai (galat order hai) to swap krna hai
            if (arr[j] > arr[j + 1]) {
                // current value ko ek variable banakar usme safe rakho 
                let temp = arr[j];
                // current ki jagah agla value daalo
                arr[j] = arr[j + 1];
                // agle ki jagah safe rakha hua purana value daalo
                arr[j + 1] = temp;
            }
        }
    }
     // sorted array wapas bhejo
    return arr;
}

console.log(bubbleSort([5, 2, 8, 1]));

// output: [1,2,5,8]