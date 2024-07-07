function insertionSort(arr){
    const arr2 = arr.slice()

    for(let i = 1; i < arr2.length; i++){
        for (let j = i; j > 0; j--){
            if (arr2[j] < arr2[j-1]){
                [arr2[j], arr2[j-1]] = [arr2[j-1], arr2[j]]
            } else {
                break
            }
        }
    }

    return arr2
}

console.log(insertionSort([1,23,3,45,4,56,5,2]))