function squareElements(arr) {
  
let newArr = []
arr.forEach(element => {
	let square = element*element
    newArr.push(square)
})
return newArr
}


let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]