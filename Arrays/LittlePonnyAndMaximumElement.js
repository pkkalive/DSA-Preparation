const  A = [2, 4, 3, 1, 5], B = 3

function littlePonnyAndMaximumElement(nums, key){
    let found = false, count = 0;
    for (let num of nums){
        if (num === key) found = true
        if (num > key) count += 1
    }
    if (found) return count
    return -1;
}

console.log(littlePonnyAndMaximumElement(A, B))