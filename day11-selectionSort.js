function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        //  abhi ke liye maan lo current position hi sabse chhota hai
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            // agar arr[j], arr[minIndex] se chhota hai, to minIndex ko update karo
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }
         // ab minIndex wale element ko arr[i] se swap karo (temp wala tarika)
    }
    return arr;
}

console.log(selectionSort([5, 2, 8, 1]))

// Output: [1, 2, 5, 8]