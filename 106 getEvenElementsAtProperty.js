
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length ==0 ){
    return []}
 let newArr = []
 obj[key].map(item => item % 2 == 0 ? newArr.push(item) : null)
  return newArr
 }

let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]