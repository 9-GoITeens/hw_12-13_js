// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Розвязок
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
