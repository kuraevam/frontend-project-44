import game from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

function fetchNumbers(number, numberStep, numbersCount) {
  let num = number;
  return (new Array(numbersCount)).fill(0).map(() => {
    num += numberStep;
    return num;
  });
}

function fetchGameOptions() {
  const number = getRandomInt(1, 100);
  const numberStep = getRandomInt(1, 50);
  const numbersCount = 10;

  const numbers = fetchNumbers(number, numberStep, numbersCount);

  const position = getRandomInt(0, numbersCount - 1);
  const answer = numbers[position].toString();
  numbers[position] = '..';
  const question = numbers.join(' ');

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
