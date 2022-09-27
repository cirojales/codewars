// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(str) {
  let obj = {};
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  return obj;
}