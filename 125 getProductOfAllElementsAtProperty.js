let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  
    let producto = 1
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key]))
        return 0
    
    for (let i of obj[key]) {
      producto *= i
     }
     return producto

}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24