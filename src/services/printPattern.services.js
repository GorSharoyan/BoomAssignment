export function printNumberPatternUp(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      res += "*";
    }
    res += "\n";
  }
  console.log(result);
}

export function printPatternDown(number) {
  let result = "";
  for (let i = 1; i < number; i++) {
    for (let j = 1; j <= i; j++) {
      res += "*";
    }
    res += "\n";
  }
  console.log(result);
}
