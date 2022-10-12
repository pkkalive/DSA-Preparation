const arr = [1, 2, 3, 4], K = 2;

function reverse(array, start, end){
    while (start < end){
        [array[start], array[end - 1]] = [array[end -1], array[start]]
        start ++
        end --
    }
}

function rotationGame(array, B){
    const n = array.length
    if (B === n){
        return array
    }
    const k = B % n
    reverse(array, 0, n)
    reverse(array, 0, k)
    reverse(array, k, n-1)
    return array
}

console.log(rotationGame(arr, K))