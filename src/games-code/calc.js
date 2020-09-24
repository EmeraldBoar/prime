import getRandomNum from '../utils/random.js';

const calcGame = (maxNum = 1000) => {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const firstNum = getRandomNum(maxNum);
  const secondNum = getRandomNum(maxNum);

  const operatorsArr = Object.keys(operators);
  const randomOperator = operatorsArr[getRandomNum(operatorsArr.length - 1)];
  const operatorMethod = operators[randomOperator];

  return [
    {
      conditionsOfTheGame: 'What is the result of the expression?',
    },
    {
      expression: `${firstNum} ${randomOperator} ${secondNum}`,
      correctAnswer: String(operatorMethod(firstNum, secondNum)),
    },
  ];
};
export default calcGame;
