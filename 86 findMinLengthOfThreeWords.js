// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3) {

    var x = word1.length;
    var y = word2.length;
    var z = word3.length;
  
    return Math.min(x, y, z);
  }

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output)