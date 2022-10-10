const arr = [1,1,1,0,1,0,0,1,1,0,1]

function maxConsecutiveOnes(array){
    const n = array.length;
    let ans = 0
    for (let i = 0; i < n; i++){
        if(array[i] === 0) {
            let leftOnes = 0, rightOnes = 0
            for (let j = i - 1; j >= 0; j--) {
                if (array[j] === 1){
                    leftOnes += 1
                } else {
                    break
                }
            }
            for (let j = i + 1; j < n; j++) {
                if (array[j] === 1){
                    rightOnes += 1
                } else {
                    break
                }
            }
            ans = Math.max(leftOnes + rightOnes + 1, ans)
        }
    }
    return ans ? ans : n
}

console.log(maxConsecutiveOnes(arr))