const arr = [1, 5, 9, 1] , k = 5

function searchElement (nums, key){
    for (let num of nums){
        if (num === key){
            return "Found"
        }
    }
    return "Not Found"
}

console.log(searchElement(arr, k))