/*****************************************************************************
EN:
	Rock, paper, scissors is a classic two player game.
	Each player chooses either rock, paper, or scissors.
	The items are compared, and whichever player chooses the more powerful
	item wins.

PT-PT:
	Pedra, papel, tesoura é um clássico jogo de dois jogadores.
	Cada jogador escolhe pedra, papel ou tesoura. Os itens são comparados e o
	jogador que escolher o item mais poderoso vence.

*****************************************************************************/

const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
	  return userInput;
	} else {
	  console.log('Error!');
	}
  };
  
  function getComputerChoice() {
	  randomNumber = Math.floor(Math.random() * 3);
	  
	  switch (randomNumber) {
		  case 0:
			  return 'rock';
		  case 1:
			  return 'paper';
		  case 2:
			  return 'scissors'
	  };
  }

function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return 'The game is a tie!';
	};
	if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	};
	if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	};
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	};
}

const playGame = () => {
	const userChoice = getUserChoice('scissors');
	const computerChoice = getComputerChoice();

	console.log('You threw: ' + userChoice);
	console.log('The computer threw: ' + computerChoice);

	console.log(determineWinner(userChoice, computerChoice));
};

playGame();