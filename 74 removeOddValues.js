function removeOddValues(obj) {
    // your code here
    for(var value in obj){
        if(obj[value]%2 ===1){
           delete obj[value];
           }
        }
}