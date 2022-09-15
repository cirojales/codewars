// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(nbPetals) {
  while (nbPetals > 6) {
    nbPetals -= 6;
  }
  return phrases[nbPetals - 1];
}
