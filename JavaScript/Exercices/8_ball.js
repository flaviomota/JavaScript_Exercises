/*****************************************************************************
EN:
	In this project I will build a Magic Eight Ball using JavaScript control 
	flow.
	The user will be able to enter a question, then our program will produce 
	a random luck.
	
PT-PT:
	Neste projeto vou construir um Magic Eight Ball utilizando control flow 
	em JavaScript.
	O utilizador poderá inserir uma pergunta, e depois o nosso programa 
	produzirá uma sorte aleatória.

*****************************************************************************/

let userName = 'Flávio';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Can you answer my question?';
console.log(`The user asked: ${$userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eigthBall = '';

switch (randomNumber) {
	case 0:
		eigthBall = "It is certain";
		break;
	case 1:
		eigthBall = "It is decidedly so";
		break;
	case 2:
		eigthBall = "Reply hazy try again";
		break;
	case 3:
		eigthBall = "Cannot predict now";
		break;
	case 4:
		eigthBall = "Do not count on it";
		break;
	case 5:
		eigthBall = "My sources say no"
		break;
	case 6:
		eigthBall = "Outlook not so good";
		break;
	case 7:
		eigthBall = "Signs point to yes";
		break;
}

console.log(eigthBall);