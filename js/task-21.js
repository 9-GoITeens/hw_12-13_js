// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Розвязок
function findLongestWord(string) {
  // Change code below this line
  let words = string.split(" ");
  let longestWord = words[0];
  for (let i = 0; i < words.length; i += 1) {
    // Change this line
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;

  // Change code above this line
}