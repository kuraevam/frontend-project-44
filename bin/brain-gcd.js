#!/usr/bin/env node
import game, { getRandomInt } from './cli.js';

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const title = 'Find the greatest common divisor of given numbers.';
const fetchData = () => {
  const numberOne = getRandomInt(1, 100);
  const numberSecond = getRandomInt(1, 100);

  const question = `${numberOne} ${numberSecond}`;
  const answer = gcd(numberOne, numberSecond);

  return {
    question,
    answer: answer.toString(),
  };
};
game(title, fetchData);
