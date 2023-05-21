// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Розвязок
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray = newArray.slice(0, maxLength);
  }

  return newArray;

  // Change code above this line
}