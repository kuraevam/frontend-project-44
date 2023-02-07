#!/usr/bin/env node
import game, { getRandomInt } from './cli.js';

const operations = ['-', '+', '*'];

const title = 'What is the result of the expression?';
const fetchData = () => {
  const numberOne = getRandomInt(1, 10);
  const numberSecond = getRandomInt(1, 10);
  const indexOperations = getRandomInt(0, 2);
  const operation = operations[indexOperations];
  const question = `${numberOne} ${operation} ${numberSecond}`;
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

  return {
    question,
    answer: answer.toString(),
  };
};
game(title, fetchData);
