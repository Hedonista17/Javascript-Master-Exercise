function removeFromBackOfNew(arr) {
  // your code here
  arr.pop()
  return arr
}
let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr)