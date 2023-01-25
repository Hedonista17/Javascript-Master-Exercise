function getLargestNumberAmongMixedElements(arr) {

  let posicion
  let newArr = []
  
    for (let i = 0; i < arr.length; i++) {
      posicion = arr[i]
  
      if (typeof posicion === 'number') {
        newArr.push(posicion)
    } 
    
  }
  return Math.max(...newArr)
}
let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5