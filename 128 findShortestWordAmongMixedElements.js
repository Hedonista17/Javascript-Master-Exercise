function findShortestWordAmongMixedElements(arr) {
 

        let texto, i, posicion
        let maxNum = Number.MAX_SAFE_INTEGER
      
        for (i = 0; i < arr.length; i++) {
          posicion = arr[i]

          if (typeof posicion === 'string') {
            
            if (posicion.length < maxNum) {
              texto = posicion
              maxNum = texto.length
            }
          } 
        } 
        return texto || ""
      } 
  

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'