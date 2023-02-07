#!/usr/bin/env node
import game, { getRandomInt } from './cli.js';

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

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const fetchData = () => {
  const question = getRandomInt(1, 100);
  const answer = hasPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};
game(title, fetchData);
