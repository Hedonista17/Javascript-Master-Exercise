let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0){
    return []
  }
let newArr = []
 for (let i = 0; i < obj[key].length; i++) 
  if (obj[key][i].length %2===0) {
   newArr.push(obj[key][i])
 }
 return newArr
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']