// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  let arr = [...s1, ...s2].sort();
  return arr.reduce((a, b) => {
    if (!a.includes(b)) a += b;
    return a;
  }, "");
}
