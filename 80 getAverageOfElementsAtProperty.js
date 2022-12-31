// Write your function here
let obj = {
    key: [1, 2, 3]
  };

  function getAverageOfElementsAtProperty(obj, key) {
    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {

var suma = 0
for (var num in obj[key]) {

suma+= obj[key][num]

}

return suma / obj[key].length

    } else {
        return 0;
    }
}

  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output)