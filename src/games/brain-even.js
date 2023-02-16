import game from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

function fetchAnswer(question) {
  return isEven(question) ? 'yes' : 'no';
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
