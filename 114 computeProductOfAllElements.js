function computeProductOfAllElements(arr) {
  if (arr.length == 0) return 0
  
  let newArr = 1

for (let n of arr) {
 newArr *= n
}
return newArr



}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

