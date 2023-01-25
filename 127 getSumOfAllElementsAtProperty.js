let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    let suma = 0
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key]))
        return 0
    
    for (let i of obj[key]) {
      suma += i
     }
     return suma

}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13