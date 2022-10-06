const queries = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]
const beggars = 5

function continuousSumQuery (beggars, queries){
    const res = new Array(beggars).fill(0)
    for (let [start, end, value] of queries){
        res[start - 1] += value
        if (end < beggars){
            res[end] -= value
        }
    }
    for (let i = 1; i < beggars; i++){
        res[i] += res [i - 1]
    }
    return res;
}

console.log(continuousSumQuery(beggars,queries))
/*
A = 5
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]

10 55 45 25 25

        0   1   2   3   4   5
        0   0   0   0   0   0
1 2 10  0   10  10  0   0   0
2 3 20  0   10  30  20  0   0
2 5 25  0   10  55  45  25 25

*/