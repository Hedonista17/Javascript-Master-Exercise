function multiplyBetween(num1, num2) {

    if (num1 > num2) return 0
    
    let solucion = 1

    for (let i = num1; i < num2; i++) solucion *= i

    return solucion
  }


let output = multiplyBetween(2, 5);
console.log(output); // --> 24