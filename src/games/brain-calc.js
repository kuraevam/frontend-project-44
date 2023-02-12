import game, { getRandomInt } from '../index.js';

const operations = ['-', '+', '*'];

const title = 'What is the result of the expression?';

function fetchQuestion(operation, numberOne, numberSecond) {
  return `${numberOne} ${operation} ${numberSecond}`;
}

function fetchAnswer(operation, numberOne, numberSecond) {
  let answer;
  if (operation === '-') {
    answer = numberOne - numberSecond;
  }

  if (operation === '+') {
    answer = numberOne + numberSecond;
  }

  if (operation === '*') {
    answer = numberOne * numberSecond;
  }

  return answer !== undefined ? answer.toString() : '';
}

function fetchData() {
  const numberOne = getRandomInt(1, 10);
  const numberSecond = getRandomInt(1, 10);
  const indexOperations = getRandomInt(0, 2);
  const operation = operations[indexOperations];

  const question = fetchQuestion(operation, numberOne, numberSecond);
  const answer = fetchAnswer(operation, numberOne, numberSecond);

  return {
    question,
    answer,
  };
}

export default (roundsCount) => {
  game(title, fetchData, roundsCount);
};
