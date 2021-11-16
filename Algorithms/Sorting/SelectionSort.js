function SelectionSort(newArr) {
    let arr = [...newArr]
    for (let i = 0; i < arr.length; i++) {
        let currentIndex = i;
        let minNumIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currentIndex]) {
                minNumIndex = j
                currentIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minNumIndex];
        arr[minNumIndex] = temp;
    }
    return arr
}
SelectionSort([100, -40, 500, -124, 0, 21, 7])