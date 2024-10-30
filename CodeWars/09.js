//* Counting Duplicates

//? Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let arr = text.toLowerCase().split('').sort();
  let rep = [];
  while (arr.length > 0) {
    let a = arr.shift();
    arr.includes(a) && !rep.includes(a) ? rep.push(a) : 0;
  }
  return rep.length;
}

function duplicateCount2(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}

console.log(duplicateCount('aabbccccccch'));
console.log(duplicateCount2('aabbccccccch'));

//* Duplicate Encoder #6kyu
// ? The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let arr = word.toLowerCase().split('');
  console.log(arr);
  let rep = [];
  while (arr.length > 0) {
    let a = arr.shift();
    arr.includes(a) && !rep.includes(a) ? rep.push(a) : 0;
  }

  let result = '';
  for (let el of word) {
    result += !rep.includes(el.toLowerCase()) ? '(' : ')';
  }

  return result;
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

function duplicateEncode(word) {
  var unique = '';
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    } else {
      unique += ')';
    }
  }
  return unique;
}

console.log(duplicateEncode('hola'));

