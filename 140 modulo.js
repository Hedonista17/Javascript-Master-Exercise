function modulo(num1, num2) {
  
    let division = num1/num2
    let valordecimal= division.toString().indexOf(".")
    let decimal = division.toString().substring(valordecimal)
    
if (num1 < 0 || num2 < 0) return (decimal*num2)*-1

 return decimal*num2

}

let output = modulo(25, 4);
console.log(output); // --> 1


