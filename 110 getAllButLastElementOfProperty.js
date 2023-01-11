let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || !obj[key].length) return []

let newArr= obj[key].slice(0,obj[key].length-1)


return newArr



}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]