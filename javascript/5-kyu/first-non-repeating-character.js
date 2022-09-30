// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(str) {
  for (let key in str) {
    if (str.match(new RegExp(str[key], "gi")).length === 1) {
      return str[key];
    }
  }
  return "";
}