function transformEmployeeData(array) {
  
  let newArr= []
  for (let a of array) {
    let obj= {}
    for (let b of a){
      obj[b[0]]=b[1]
  }
  newArr.push(obj)
 
}
return newArr
}
let output = transformEmployeeData([
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager'],
  ],
]);
console.log(output)