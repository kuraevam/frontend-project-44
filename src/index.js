import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (title, fetchGameOptions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  if (!title || !fetchGameOptions) {
    return;
  }

  console.log(title);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = fetchGameOptions();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
