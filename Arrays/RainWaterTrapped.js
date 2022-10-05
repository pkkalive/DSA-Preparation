const heights = [0, 1, 0, 2]

function rainWaterTrapped(heights){
    const len = heights.length
    const leftMax = [], rightMax = []
    let ans = 0;
    leftMax[0] = heights[0]
    rightMax[len - 1] = heights[len-1]

    for (let i = 1; i < len; i++){
        leftMax[i] = Math.max(leftMax[i-1], heights[i])
    }

    for (let j = len-2; j >= 0; j--){
        rightMax[j]= Math.max(rightMax[j + 1], heights[j])
    }

    for (let k = 0; k < len; k++){
        ans += Math.min(leftMax[k], rightMax[k]) - heights[k]
    }
    return ans;
}

console.log(rainWaterTrapped(heights))
