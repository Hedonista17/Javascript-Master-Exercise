function listAllValues(obj) {
  let arr = []

  for (let e in obj) {
    arr.push(obj[e])
  }
  
 return arr
}
let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]