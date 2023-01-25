function getLongestOfThreeWords(word1, word2, word3) {
    
    let palabra = ''
    if (word1.length > palabra.length) palabra = word1
    if (word2.length > palabra.length) palabra = word2
    if (word3.length > palabra.length) palabra = word3
    return palabra
    
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'