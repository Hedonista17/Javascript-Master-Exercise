let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0){
    return []
  } 
let newArr = []


  obj[key].forEach(element => {
	let square = element*element
    newArr.push(square)
})
return newArr

}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]