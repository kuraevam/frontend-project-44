import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = parseInt(Math.random() * 100, 10);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`);
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
