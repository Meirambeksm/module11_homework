function sum(a) {
  return function (b) {
    return a + b;
  };
}

let firstNum = sum(10);
let secondSum = firstNum(5);

console.log(`Сумма чисел a и b равна = ${secondSum}`);
