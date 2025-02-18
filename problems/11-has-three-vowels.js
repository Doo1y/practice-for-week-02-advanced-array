/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
  let vowels = 'aeiouAEIOU'.split('');
  let letters = string.split('');
  let vowelCounter = 0;
  let vowelsInString = letters.forEach(function(letter) {
    if (vowels.includes(letter)) {
      vowelCounter++;
      let indexOfVowel = vowels.indexOf(letter);
      vowels.splice(indexOfVowel, 1);
    };
    return vowelCounter;
  });
  return vowelCounter >= 3;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
