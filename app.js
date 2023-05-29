const getComputerChoice = () => {
  const choices = ['rock', 'papper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const answer = String(prompt('Choose: rock | papper | scissors'));

const playFewGames = () => {
  for (let i = 0; i < 5; i++) {
    console.log(game(answer, getComputerChoice()));
  }
}

const playGame = () => {
  if (answer.toLowerCase() === 'rock' || 'papper' || 'scissors') {
    playFewGames(); 
  } else {
    alert('Please choose one of: rock, papper or scissors');
  }
}

const game = (playerSelection, computerSelection) => {
  switch (`${playerSelection}-${computerSelection}`) {
    case 'rock-scissors':
    case 'papper-rock':
    case 'scissors-papper':
      return 'You win!';
    case 'rock-papper':
    case 'papper-scissors':
    case 'scissors-rock':
      return 'You lose!';
    case 'rock-rock':
    case 'papper-papper':
    case 'scissors-scissors':
      return 'Draw!!!';
    default:
      return 'Please give the correct type: rock, paper, or scissors';
  }
}

playGame();

