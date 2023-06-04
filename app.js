// const getComputerChoice = () => {
//   const choices = ['rock', 'papper', 'scissors'];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// const answer = String(prompt('Choose: rock | papper | scissors'));


// const playGame = () => {
//   if (answer.toLowerCase() === 'rock' || 'papper' || 'scissors') {
//   } else {
//     alert('Please choose one of: rock, papper or scissors');
//   }
// }

// const game = (playerSelection, computerSelection) => {
//   switch (`${playerSelection}-${computerSelection}`) {
//     case 'rock-scissors':
//     case 'papper-rock':
//     case 'scissors-papper':
//       return 'You win!';
//     case 'rock-papper':
//     case 'papper-scissors':
//     case 'scissors-rock':
//       return 'You lose!';
//     case 'rock-rock':
//     case 'papper-papper':
//     case 'scissors-scissors':
//       return 'Draw!!!';
//     default:
//       return 'Please give the correct type: rock, paper, or scissors';
//   }
// }

// playGame();


const allBtn = [...document.querySelectorAll('button')];
const result = document.querySelector('.result');
const myScore = document.querySelector('.my-score');
const compScore = document.querySelector('.comp-score');
const h2 = document.querySelector('h2');
const tryAgain = document.querySelector('.again');
const lastScreen = document.querySelector('.last-screen');



const getComputerChoice = () => {
  const choices = ['rock', 'papper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

  let playerScoreValue = 0;
  let computerScoreValue = 0;

const checkScore = () => {
  if (playerScoreValue == 5) {
    h2.textContent = 'YOU WIN!';
    lastScreen.classList.remove('off');
  } else if (computerScoreValue == 5) {
    h2.textContent = 'You lose. :(';
    lastScreen.classList.remove('off');
  }
}

const startOver = () => {
  lastScreen.classList.add('off');
  playerScoreValue = 0;
  computerScoreValue = 0;
  myScore.textContent = playerScoreValue;
  compScore.textContent = computerScoreValue;
}

const playRound = (e) => {
  checkScore();
  const playerChoice = e.target.className;
  const compChoice = getComputerChoice();


  if (compChoice === 'rock' && playerChoice === 'scissors') {
    result.textContent = 'You lose round. You: scissors | Computer: rock';
    computerScoreValue++;
  } else if (compChoice === 'papper' && playerChoice === 'rock') {
    result.textContent = 'You lose round. You: rock | Computer: papper';
    computerScoreValue++;
  } else if (compChoice === 'scissors' && playerChoice === 'papper') {
    result.textContent = 'You lose round. You: papper | Computer: scissors';
    computerScoreValue++;
  } else if (compChoice === 'rock' && playerChoice === 'papper') {
    result.textContent = 'You win round! You: papper | Computer: rock';
    playerScoreValue++;
  } else if (compChoice === 'papper' && playerChoice === 'scissors') {
    result.textContent = 'You win round! You: scissors | Computer: papper';
    playerScoreValue++;
  } else if (compChoice === 'scissors' && playerChoice === 'rock') {
    result.textContent = 'You win round! You: rock | Computer: scissors';
    playerScoreValue++;
  } else {
    result.textContent = `Draw. You: ${playerChoice} | Computer: ${compChoice}`;
  }
  myScore.textContent = playerScoreValue;
  compScore.textContent = computerScoreValue;
}

allBtn.forEach(el => el.addEventListener('click', playRound));
tryAgain.addEventListener('click', startOver);
