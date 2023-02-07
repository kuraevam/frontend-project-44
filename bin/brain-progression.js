#!/usr/bin/env node
import game, { getRandomInt } from './cli.js';

const title = 'What number is missing in the progression?';
const fetchData = () => {
  let number = getRandomInt(1, 100);
  const numberStep = getRandomInt(1, 50);

  const arr = (new Array(10)).fill(0).map(() => {
    number += numberStep;
    return number;
  });

  const answer = arr[5];
  arr[5] = '..';

  return {
    question: arr.join(' '),
    answer: answer.toString(),
  };
};
game(title, fetchData);
