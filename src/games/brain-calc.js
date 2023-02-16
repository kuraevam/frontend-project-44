import game from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['-', '+', '*'];
const defaultOperation = operations[0];

function fetchQuestion(operation, numberOne, numberSecond) {
  return `${numberOne} ${operation} ${numberSecond}`;
}

function fetchAnswer(operation, numberOne, numberSecond) {
  let answer = null;
  if (operation === '-') {
    answer = numberOne - numberSecond;
  }

  if (operation === '+') {
    answer = numberOne + numberSecond;
  }

  if (operation === '*') {
    answer = numberOne * numberSecond;
  }

  if (answer === null || Number.isNaN(answer)) {
    throw Error('Answer cannot be generated');
  }

  return answer.toString();
}

function fetchGameOptions() {
  const numberOne = getRandomInt(1, 10);
  const numberSecond = getRandomInt(1, 10);
  const indexOperations = getRandomInt(0, operations.length - 1);
  const operation = operations[indexOperations] || defaultOperation;

  const question = fetchQuestion(operation, numberOne, numberSecond);
  const answer = fetchAnswer(operation, numberOne, numberSecond);
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
