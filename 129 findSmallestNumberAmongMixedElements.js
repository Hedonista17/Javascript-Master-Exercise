function findSmallestNumberAmongMixedElements(arr) {
 
  let num, i, posicion
  let maxNum = Number.MAX_SAFE_INTEGER

  for (i = 0; i < arr.length; i++) {
    posicion = arr[i]

    if (typeof posicion === 'number') {
      
      if (posicion < maxNum) {
        num = posicion
        maxNum = num
      }
    } 
  } 
  return num || 0
} 



let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4