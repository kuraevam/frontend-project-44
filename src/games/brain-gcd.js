import game from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

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

function fetchGameOptions() {
  const numberOne = getRandomInt(1, 100);
  const numberSecond = getRandomInt(1, 100);

  const question = fetchQuestion(numberOne, numberSecond);
  const answer = fetchAnswer(numberOne, numberSecond);

  return {
    question,
    answer,
  };
}

export default {
  run: () => {
    game(description, fetchGameOptions);
  },
};
