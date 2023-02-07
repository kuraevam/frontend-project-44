#!/usr/bin/env node
import game, { getRandomInt } from './cli.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';
const fetchData = () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};
game(title, fetchData);
