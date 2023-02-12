import game, { getRandomInt } from '../index.js';

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function fetchQuestion(numberOne, numberSecond) {
  return `${numberOne} ${numberSecond}`;
}

function fetchAnswer(numberOne, numberSecond) {
  return gcd(numberOne, numberSecond).toString();
}

const title = 'Find the greatest common divisor of given numbers.';
function fetchData() {
  const numberOne = getRandomInt(1, 100);
  const numberSecond = getRandomInt(1, 100);

  const question = fetchQuestion(numberOne, numberSecond);
  const answer = fetchAnswer(numberOne, numberSecond);

  return {
    question,
    answer,
  };
}

export default (roundsCount) => {
  game(title, fetchData, roundsCount);
};
