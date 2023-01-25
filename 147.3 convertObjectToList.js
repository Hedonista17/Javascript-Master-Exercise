function convertObjectToList(obj) {
  
  let newArr1= []
  
  for (let a in obj) {
    let newArr2 = []
   
  
newArr2.push(a) //se pushea la clave del obj
newArr2.push(obj[a]) // se pushea el valor del obj

newArr1.push(newArr2) 
 
}
return newArr1
}
let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]