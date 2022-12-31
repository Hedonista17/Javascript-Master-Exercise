let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function select(arr,obj) {
let newObj = {}
let elemento = ""
    for (let i = 0; i < arr.length; i++) { 
	elemento = arr[i]
	if (obj[elemento])
          
    newObj[elemento]= obj[elemento]
    }

    //preguntar pos array dentro obj, si true introducir pos en obj nuevo, sino pues na
    return newObj
}
   

let output = select(arr, obj);
console.log(output)