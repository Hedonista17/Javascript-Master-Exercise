function countCharacter(str, char) {
    // your code here
   let suma= 0;

 for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) suma += 1

}
    return suma
}
let output = countCharacter('I am a hacker', 'a');
console.log(output)