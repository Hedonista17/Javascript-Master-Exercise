function removeArrayValues(obj) {
    // your code here
    for(var value in obj){
        var resultado = Array.isArray(obj[value])
        if (resultado == true){
        //if(obj[value]==obj.isArray){ no sirve
           delete obj[value];
           }
        }
}
