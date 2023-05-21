// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Розвязок
function filterArray(numbers, value) {
  // Change code below this line
  let newArrray = [];
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArrray.push(numbers[i]);
    }
  }
  return newArrray;
  // Change code above this line
}