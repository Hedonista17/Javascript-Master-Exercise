function addArrayProperty(obj, key, arr) {
  // Add your code after this line
 
  obj[key]= arr
  return obj
  
 
}
let myObj = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

let myArray = [1, 3];

let myProperty= "Mine"

addArrayProperty(myObj, myProperty, myArray);
console.log(myObj.myProperty);