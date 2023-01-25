function computeSumOfAllElements(arr) {

  let newArr = 0

  for (let n of arr) {
   newArr += n
  }
  return newArr
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6