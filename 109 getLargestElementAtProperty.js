let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || !obj[key].length) return []
    
  
  let num = 0

  obj[key].forEach(element => { 
  if( num === 0 ) 
  num = element
  else if (element > num)
  num = element
});



return num  
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4