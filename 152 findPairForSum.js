function findPairForSum(array, number){
    for (let i = 0; i < array.length; i++) {
        for (let x = 1; x < array.length; x++) {
            if (array[i] + array[x] === number) {
                return [array[i], array[x]]
            }
        }
    }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]