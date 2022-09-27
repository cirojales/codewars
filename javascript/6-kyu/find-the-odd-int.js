// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(arr) {
  let obj = {};
  for (let num of arr) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return Number(key);
    }
  }
}