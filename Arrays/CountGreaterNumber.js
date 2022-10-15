const arr = [2, -1, 6, 3, 5, 8, 2, 1]

function countGreaterNumber(array){
    let count = 0, max = -Infinity;
    for (let num of array){
        max = Math.max(max, num)
    }
    for (let num of array){
        if (num < max){
            count +=1
        }
    }
    return count;
}

console.log(countGreaterNumber(arr))