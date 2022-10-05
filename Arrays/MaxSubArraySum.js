const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubArraySum(array){
    let maxSum = -Infinity, currSum = 0
    for (let num of array){
        currSum += num
        maxSum = Math.max(currSum, maxSum)
        if (currSum < 0){
            currSum = 0
        }
    }
    return maxSum
}

console.log(maxSubArraySum(arr))