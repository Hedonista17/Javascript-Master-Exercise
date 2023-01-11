function getLengthOfLongestElement(arr) {
    if (arr.length == 0) return 0
    
    let newArr = 0
    arr.map(item=> item.length > newArr ? newArr = item.length : null)
    return newArr
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5