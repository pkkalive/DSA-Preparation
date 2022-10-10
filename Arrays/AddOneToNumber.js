const arr = [ 0, 6, 0, 6, 4, 8, 8, 1 ]

function addOneToNumber(array){
    let i = 0, zeros = 0;
    let len = array.length - 1;
    while(i <= len){
        if (array[i] === 0){
            zeros++
            i++
        } else {
            break
        }
    }
    array = array.slice(zeros)
    len = array.length - 1;
    while (len >= 0){
        if (array[len] === 9){
            array[len] = 0
        } else {
            array[len] += 1
            return array
        }
        len--;
    }
    array.unshift(1)
    return array
}

console.log(addOneToNumber(arr))