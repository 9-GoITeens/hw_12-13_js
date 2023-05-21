// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Розвязок
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const oneOrder of order) {
    total += oneOrder;
  }

  // Change code above this line
  return total;
}