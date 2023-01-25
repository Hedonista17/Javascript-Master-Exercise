function isRotated(str1, str2) {
    let cortar = str1.split('')
    let newArr = []

    for (let i of cortar) newArr.push(str2.indexOf(i))
    let resultado = !newArr.includes(-1)

    return resultado
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false