// Write your function here
function findMaxLengthOfThreeWords(word1,word2,word3) {

    var x = word1.length;
    var y = word2.length;
    var z = word3.length;
  
    return Math.max(x, y, z);
  }
  let output = findMaxLengthOfThreeWords('a', 'be', 'see');
  console.log(output)