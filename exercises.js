(function () {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    let largerNum;
    if (num1 > num2) {
      largerNum = num1;
    } else {
      largerNum = num2;
    }
    return largerNum;
  }
  console.log(max(5, 10));

  //refactor
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3) {
    console.log(Math.max(1, 2, 3));
  }
  maxOfThree();

  // refactor

  const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  function isVowel(letter1) {
    console.log(letter1);
    if (letter1 === vowel)
      return = "true";
    else
      return = "false";
  }
  isVowel('a')

  // refactor

  const inVowel = function () {
    return 'aeiou'.includes(char);
  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

function rovarspraket(text) {
  const text = text.toLowerCase().split('');
  for (let i = 0; i < text.length; i++);
  if('bcdfghijklmnprstuvwxyz'.includes(text[i])) {
    text = text[i] + 'o' + text[i];
  }
}
return text.join('')
}


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

function sum (arr) {
  let total = 0;
for (let i = 0; i < arr.length; i++) {
total += arr[i];
} return total;
};

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++); {
  product *= arr[i];
} return product;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(forwardSentence) {
  let backwardSentence = ""
  for (let i = forwardSentence.length; i > -1; i--) {
    backwardSentence += forwardSentence.charAt(i);
  }
  return backwardSentence;
}

// refactor
const reverse = string => string.split(``).reverse().joint(``);

// ---------------------
// Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

// refactor

const findLongestWord = arr => {
  let length = 0;
  arr.forEach(word => word.length > length ? length = word.length : null);
  return length
}

for (let I = 0; i < arr.length; i++) {
  if (arr[i].length > length) {
    length = arr {i}
  }
}

// ---------------------
// Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(arr, i) {
  let shortenedArray = [];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x].length > i) {
      shortenedArray.push(arr[x])
    }
  }
  return shortenedArray;
}

// ---------------------
// Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(str) {
  let totals = {};
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (totals.hasOwnProperty(character)) {
      totals[character] = totals[character] + 1;
    } else {
      totals[character] = 1;
    }
  }
  return totals;

  // refactor

  const charFreq = function (string) {
    const freqList = {};
    string.split(``).forEach(char => frequlList[char] = freqList + 1 || 1);
    return freqList;
  }

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
}) ();
