// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Розвязок
function getEvenNumbers(start, end) {
  // Change code below this line
  const newArray = [];
  for (let i = start; i <= end; i += 1) {
    // Change this line
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
  // Change code above this line
}