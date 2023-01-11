function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0){
    return 0
}
  //if (obj[key].length == 0) return 0
  let total = 0
  for (let i = 0; i < obj[key].length; i++){
    total += obj[key][i]
  }
  let avg = total / obj[key].length
  return avg
}

