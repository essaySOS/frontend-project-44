import * as readlineSync from 'readline-sync';

const hi = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

export default hi;