let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || !obj[key].length) return []
    
  
  let num = 0

  obj[key].forEach(element => { 
  if( num === 0 ) 
  num = element
  else if (element < num)
  num = element
});



return num  
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1