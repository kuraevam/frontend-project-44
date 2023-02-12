import game, { getRandomInt } from '../index.js';

const title = 'What number is missing in the progression?';

function fetchNumbers(number, numberStep) {
  let num = number;
  return (new Array(10)).fill(0).map(() => {
    num += numberStep;
    return num;
  });
}

function fetchData() {
  const number = getRandomInt(1, 100);
  const numberStep = getRandomInt(1, 50);

  const numbers = fetchNumbers(number, numberStep);

  const answer = numbers[5].toString();
  numbers[5] = '..';
  const question = numbers.join(' ');

  return {
    question,
    answer,
  };
}

export default (countRounds) => {
  game(title, fetchData, countRounds);
};
