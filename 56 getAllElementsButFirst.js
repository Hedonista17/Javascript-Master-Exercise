function getAllElementsButFirst(array) {
  // your code here
  let arrayNuevo = array.slice(1)

  return arrayNuevo
  
}
let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output)