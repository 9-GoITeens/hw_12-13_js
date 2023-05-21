// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Розвязок
function includes(array, value) {
  // Change code below this line
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}