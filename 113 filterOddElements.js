function filterOddElements(arr) { 

let newArr = []

for (let n of arr) {
  if (n % 2 == 1) newArr.push(n)
}
return newArr
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]