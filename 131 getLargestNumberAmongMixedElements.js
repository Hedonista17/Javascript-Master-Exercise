function getLargestNumberAmongMixedElements(arr) {

    let num, i, posicion
    let maxNum = 0
  
    for (i = 0; i < arr.length; i++) {
      posicion = arr[i]
  
      if (typeof posicion === 'number') {
        
        if (posicion > maxNum) {
          num = posicion
          maxNum = num
        }
      } 
    } 
    return num || 0
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5