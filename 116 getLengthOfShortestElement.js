function getLengthOfShortestElement(arr) {
    if (arr.length == 0) return 0
    
    let num = 0

    arr.forEach(element => { 
    if( num === 0 ) 
    num = element.length
    else if (element.length < num)
    num = element.length
})
    return num
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3