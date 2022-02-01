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