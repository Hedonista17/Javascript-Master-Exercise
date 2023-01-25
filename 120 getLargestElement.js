function getLargestElement(arr) {
  let num = 0
   

  if (arr.length == 0) return 0

  arr.forEach(element => { 
  if( num === 0 ) {
  num = element
  }
  else if (element> num)
  num = element
  
})
  return num
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;