#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from './cli.js';
import parityCheckGame from './brain-even.js';
import calculatorGame from './brain-calc.js';
import gcdGame from './brain-gcd.js';
import progressionGame from './brain-progression.js';
import primeGame from './brain-prime.js';

console.log('Welcome to the Brain Games!');
console.log('');
console.log('Choose a game?:');
console.log('1 - Parity check');
console.log('2 - Calculator');
console.log('3 - GCD');
console.log('4 - Progression');
console.log('5 - Prime');
const number = Number(readlineSync.question('Game number: '));
console.log('');

if (number === 1) {
  parityCheckGame(game);
}

if (number === 2) {
  calculatorGame(game);
}

if (number === 3) {
  gcdGame(game);
}

if (number === 4) {
  progressionGame(game);
}

if (number === 5) {
  primeGame(game);
}
