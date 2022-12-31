// Write your function here !
function computeAverageOfNumbers(num) {
    if (num.length == 0) return 0
    let total = 0
    for (let i = 0; i < num.length; i++){
      total += num[i]
    }
    let avg = total / num.length
    return avg
  }
