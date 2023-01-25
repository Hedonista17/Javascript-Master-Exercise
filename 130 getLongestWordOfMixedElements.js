function getLongestWordOfMixedElements(arr) {
    
    let texto, i, posicion
    let min = 0
  
    for (i = 0; i < arr.length; i++) {
      posicion = arr[i]

      if (typeof posicion === 'string') {
        
        if (posicion.length > min) {
          texto = posicion
          min = texto.length
        }
      } 
    } 
    return texto || ""
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'