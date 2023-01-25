function flipPairs(input){
    let r = "";
    for (let i = 0; i < input.length; i+=2)
        r += (i+1 < input.length ? input[i+1] : "")+input[i];
    return r;
}

let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
