function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {


let interes= 1+ (interestRate/compoundingFrequency)
let elevado = compoundingFrequency*timeInYears

//let res1 = principal*(interes)

let resultado = principal*(Math.pow(interes, elevado))

return resultado-principal

}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543