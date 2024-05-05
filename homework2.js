function checkNumber(n) {
  if (n <= 1 || n > 1000) {
    console.log("Введены неверные данные");
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`Число ${n} НЕ является простым`);
      return;
    }
  }
  console.log(`Число ${n} является простым`);
  return;
}

checkNumber(5);
