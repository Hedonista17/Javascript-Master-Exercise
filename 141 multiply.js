function multiply(num1, num2) {
    
    let veces = Math.abs(num2)

    let resultado = 0
  for (let i = 1; i <= veces; i++) {

	resultado+=Math.abs(num1)
}
if (num1<0 && num2 <0) return resultado
if (num1<0 || num2 <0) return -(resultado)

else

return resultado
}

let output = multiply(4, 7);
console.log(output); // --> 28

