import readlineSync from 'readline-sync';

export default (title, fetchData) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('');
  console.log(title);
  for (let i = 0; i < 3; i += 1) {
    const data = fetchData();
    console.log(`Question: ${data.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (data.answer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.answer}'.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
