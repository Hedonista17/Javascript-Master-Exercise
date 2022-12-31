function getElementsAfter(array, n) {
  // your code here
  
  let arrayNuevo = array.splice(n+1)

  return arrayNuevo
}
let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output)