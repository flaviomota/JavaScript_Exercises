/*****************************************************************************
EN:
	Create a program that registers the runners of a race and will give them
	instructions on race day, subject to conditions previously established in
	the registration.

PT-PT:
	Criar um programa que registra os corredores de uma corrida e lhes dará 
	instruções no dia da corrida, medinte condições previamente estabelecidas 
	na inscrição.

*****************************************************************************/

let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 19;

if (early && age > 18) {
	raceNumber += 1000;
}

if (early && age > 18) {
	console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} else if (!early && age > 18) {
	console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (age < 18) {
	console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
} else {
	console.log('Please approach the registration desk, thanks!');
}