const arr = [10, 50, 40, 80]

function maxMinOfAnArray(nums){
    let min = Infinity, max = -Infinity
    for (let num of nums){
        min = Math.min(num, min)
        max = Math.max(num, max)
    }
    return [min, max]
}

console.log(maxMinOfAnArray(arr))