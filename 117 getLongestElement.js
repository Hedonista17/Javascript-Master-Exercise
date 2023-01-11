function getLongestElement(arr) {
    let num = 0
    let texto = ""

    if (arr.length == 0) return ""

    arr.forEach(element => { 
    if( num === 0 ) {
    num = element.length 
    texto.push(element)}
    else if (element.length > num)
    num = element.length
    texto.push(element)
})
    return texto
    
}
let output = getLongestElement(['one', 'two', 'three',]);
console.log(typeof ''); // --> 'three'