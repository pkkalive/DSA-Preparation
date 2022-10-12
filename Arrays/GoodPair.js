const arr = [1,2,3,4], k = 4

function goodPair(array, B){
    const n = array.length
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            if (array[i] + array[j] === B){
                return 1;
            }
        }
    }
    return 0
}

console.log(goodPair(arr, k))