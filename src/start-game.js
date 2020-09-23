import readLineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;
const MAX_NUMBER = 100;

const startGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameTitle = game()[0];
  console.log(gameTitle.conditionsOfTheGame);

  let count = 0;
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const gameData = game(MAX_NUMBER)[1];

    console.log(`Question: ${gameData.expression}`);

    const answerUser = readLineSync.question('Your answer ');

    if (answerUser === gameData.correctAnswer) {
      console.log('Correct');
      count += 1;
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${gameData.correctAnswer}".`);
      break;
    }
  }

  if (count === NUMBER_OF_ROUNDS) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default startGame;
