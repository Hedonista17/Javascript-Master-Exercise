function getElementsUpTo(array, n) {
  // your code here
  let arrayNuevo = array.slice(0,n)

  return arrayNuevo
}
let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output)