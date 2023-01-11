let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {

  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length ==0 ){
   return []}
let newArr = []
obj[key].map(item => item % 2 != 0 ? newArr.push(item) : null)
 return newArr
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]