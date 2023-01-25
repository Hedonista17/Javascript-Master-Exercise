function computeFactorialOfN(n) {
    if (n === 0)
    { return 1}
    else
        { return n * computeFactorialOfN (n- 1)
}}

let output = computeFactorialOfN(15); console.log(output); // --> 6