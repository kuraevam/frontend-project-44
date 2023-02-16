import game from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
}

function fetchAnswer(question) {
  return isPrime(question) ? 'yes' : 'no';
}

function fetchGameOptions() {
  const question = getRandomInt(1, 100);
  const answer = fetchAnswer(question);

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
