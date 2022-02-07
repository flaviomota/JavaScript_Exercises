/*****************************************************************************
EN:
	In this project we’ll calculate if you’re getting enough sleep each week
	using a sleep debt calculator.
	The program will determine the actual and ideal hours of sleep for each
	night of the last week.
	Finally, it will calculate, in hours, how far you are from your weekly
	sleep goal.
	
PT-PT:
	Neste projeto, podemos calcular se o utilizador está dormindo o tempo
	suficiente a cada semana utilizando uma calculadora de débito de sono.
	O programa determinará as horas de sono reais e ideais para cada noite
	da última semana. 
	Por fim, ele calculará, em horas, a que distância deverá estar a meta
	semanal de sono.

*****************************************************************************/

const getSleepHours = day => {
	if (day === 'monday') {
		return 7;
	} else if (day === 'tuesday') {
		return 6;
	} else if (day === 'wednesday') {
		return 8;
	} else if (day === 'thursday') {
		return 6;
	} else if (day === 'friday') {
		return 4;
	} else if (day === 'saturday') {
		return 5;
	} else if (day === 'sunday') {
		return 8;
	} else {
		return 'Error! Chose a valid day!'
	}
}

const getActualSleepHours = () => {
	 let sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
			getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
	return sum;
}

const getIdealSleepHours = () => {
	const idealHours = 8;
	return idealHours * 7;
}

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();
	const totalHours = actualSleepHours - idealSleepHours;

	if (actualSleepHours === idealSleepHours) {
		console.log('Perfect amount of sleep!');
	} else if (actualSleepHours > idealSleepHours) {
		console.log('You got more sleep than needed! ' + totalHours + ' hour(s) more sleep than you needed this week.');
	} else if (actualSleepHours < idealSleepHours) {
		console.log('You should get some rest! You got ' + totalHours + ' hour(s) less sleep than you needed this week.');
	} else {
		console.log('Invalid Data!');
	}
}

calculateSleepDebt();