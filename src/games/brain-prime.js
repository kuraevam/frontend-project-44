import game, { getRandomInt } from '../index.js';

function hasPrime(n) {
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
  return hasPrime(question) ? 'yes' : 'no';
}

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function fetchData() {
  const question = getRandomInt(1, 100);
  const answer = fetchAnswer(question);

  return {
    question,
    answer,
  };
}

export default (countRounds) => {
  game(title, fetchData, countRounds);
};
