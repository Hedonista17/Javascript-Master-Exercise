function findShortestElement(arr) {
    if (arr.length == 0) return ""
    
    let num = 0
    let texto = ""

    arr.forEach(element => { 
    if( num === 0 ) {
    num = element.length 
    texto = element}
    else if (element.length < num){
    num = element.length
    texto = element}
})
    return texto

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'