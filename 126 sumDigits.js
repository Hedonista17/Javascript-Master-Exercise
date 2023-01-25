function sumDigits(num) {
   
    let strNum = num.toString();
    let posicion = 0;
    let suma = 0;
    while (strNum[posicion] != undefined) {
      if (strNum[posicion] === '-') {
        let posicion2 = strNum[posicion] + strNum[posicion + 1];
        posicion2 = parseInt(posicion2);
        suma += posicion2;
        posicion += 2;
      } else {
        suma += parseInt(strNum[posicion]);
        posicion++;
      }
    }
    return suma
}
let output = sumDigits(-316);
console.log(output); // --> 4