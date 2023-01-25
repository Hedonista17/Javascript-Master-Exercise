function isIsogram(text) {

 let letra = {}
  for (const a of text) {
    letra[a] = (letra[a] || 0) + 1
  }
  let result = Object.entries(letra)
    .filter((a) => a[1] > 1)
    .map((a) => a[0])
  if (result.length > 0) return false
  else return true
}


console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false