function average(array_of_numbers) {

  if (array_of_numbers.length == 0 || !Array.isArray(array_of_numbers)) return 0
  
  let suma = sum(array_of_numbers)

  let avg = suma / array_of_numbers.length
  return avg
}

function sum(numbers) {
    
  let total = 0

 numbers.forEach(e => {
  total += e
});
return total
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(average(arr)); // => 20