function filterOddLengthWords(words) {
    if(!Array.isArray(words) || words.length == 0){
        return []
      }
    let newArr = []
     for (let i = 0; i < words.length; i++) 
      if (words[i].length %2===1) {
       newArr.push(words[i])
     }
     return newArr
    }
let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']