const arr = [1,1,10]

function reverseArray(array){
    let start = 0, end = array.length
    while (start < end){
        [array[start], array[end - 1]] = [array[end - 1], array[start]]
        start ++;
        end --;
    }
    return array
}

console.log(reverseArray(arr))