let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    if (obj.a < num) {
        delete obj.a
    } if (obj.b < num) {delete obj.b }
    if (obj.c < num) delete obj.c
    
    } 

removeNumbersLessThan(5, obj);
console.log(obj)