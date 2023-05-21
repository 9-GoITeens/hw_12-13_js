// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// Розвязок
 function checkFruit(fruit) {
   const fruits = ["apple", "plum", "pear", "orange"];

   return fruits.includes(fruit); // Change this line
 }
