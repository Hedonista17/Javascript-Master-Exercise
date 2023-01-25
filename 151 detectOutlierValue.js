function detectOutlierValue(string) {
    let impar = 0
    let par = 0

    let resultado = string.split(' ')
    for (let x of resultado) {
      if (Number.parseInt(x) % 2 == 0) par += 1
      if (Number.parseInt(x) % 2 != 0) impar += 1
    }
    if (par > impar) {
      for (let x = 0; x < resultado.length; x++) {
        if (Number.parseInt(resultado[x]) % 2 != 0) return x + 1
      }
    } else {
      for (let x = 0; x < resultado.length; x++) {
        if (Number.parseInt(resultado[x]) % 2 == 0) return x + 1
      }
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2