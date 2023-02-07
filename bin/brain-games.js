#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from './cli.js';
import parityCheckGame from './brain-even.js';
import calculatorGame from './brain-calc.js';

console.log('Welcome to the Brain Games!');
console.log('');
console.log('Choose a game?:');
console.log('1 - Parity check');
console.log('2 - Calculator');
const number = Number(readlineSync.question('Game number: '));
console.log('');

if (number === 1) {
  parityCheckGame(game);
}

if (number === 2) {
  calculatorGame(game);
}
