//this function evaluates first image in assignemnt
export function printNumberPatternUp(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      if (j === 1) {
        result += "<p>";
      }
      result += "*";
    }
    result += "</p>";
  }
  return result;
}

//this function evaluates second image in assignemnt
export function printNumberPatternDown(number) {
  let result = "";
  for (let i = 1; i < number; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === 1) {
        result += "<p>";
      }
      result += "*";
    }
    result += "</p>";
  }
  return result;
}
