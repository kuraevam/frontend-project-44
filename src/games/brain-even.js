import game, { getRandomInt } from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

function fetchAnswer(question) {
  return question % 2 === 0 ? 'yes' : 'no';
}

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
