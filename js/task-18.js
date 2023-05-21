// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Розвязок
function calculateTotal(number) {
  // Change code below this line
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;

  // Change code above this line
}