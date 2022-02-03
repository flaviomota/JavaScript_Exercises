/*****************************************************************************
EN:
	In this project, I'm going to create JavaScript functions to feed a little
	guessing game. The code runs in the browser instead of just in the
	terminal.
	
PT-PT:
	Neste projeto, irei criar funções em JavaScript para alimentar um pequeno
	jogo de adivinhação. O código é executado no navegador em vez de apenas
	no terminal.

*****************************************************************************/
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
	return Math.floor(Math.random() * 10);
}

//	Determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
	const humanDifference = Math.abs(targetGuess - humanGuess);
	const computerDifference = Math.abs(targetGuess - compareGuesses);
	//	Returns true if the human player wins and false if the computer player wins.
	return humanDifference <= computerDifference;
}

//	Used to correctly increase the winner’s score after each round
const updateScore = winner => {
	if (winner === 'human') {
		humanScore++;
	  } else if (winner === 'computer') {
		computerScore++;
	  }
}

//	used to update the round number after each round
const advanceRound = () => currentRoundNumber++;