
function filterEvenElements(arr) {
    let newArr = []

for (let n of arr) {
  if (n % 2 == 0) newArr.push(n)
}
return newArr
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
