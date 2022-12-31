function removeEvenValues(obj) {
    // your code here
    for(var value in obj){
        if(obj[value]%2 ===0){
           delete obj[value];
           }
      }return obj 
        }
    