//this function evaluates first image in assignemnt
export function printNumberPatternUp(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "   ";
    }
    for (let j = 1; j <= n - i; j++) {
      row += " * ";
    }
    result.push(row);
  }
  return result;
}

//this function evaluates second image in assignemnt
export function printNumberPatternDown(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " * ";
    }
    result.push(row);
  }
  return result;
}
