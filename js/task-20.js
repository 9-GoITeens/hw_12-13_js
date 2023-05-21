// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Розвязок
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let element of order) {
    total += element;
  }
  // Change code above this line
  return total;
}
