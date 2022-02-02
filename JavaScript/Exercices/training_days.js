/*****************************************************************************
EN:
	Training Days is program that sends you a message for the event you signed
	up for and the days you have left to train.
	
PT-PT:
	Dias de Treinamento é um programa que lhe envia uma mensagem para o evento
	que você se inscreveu e os dias que faltam para treinar.

*****************************************************************************/

const getRandEvent = () => {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) {
	  return 'Marathon';
	} else if (random === 1) {
	  return 'Triathlon';
	} else if (random === 2) {
	  return 'Pentathlon';
	}
  };
  
  const getTrainingDays = event => {
	let days;
	if (event === 'Marathon') {
	  days = 50;
	} else if (event === 'Triathlon') {
	  days = 100;
	} else if (event === 'Pentathlon') {
	  days = 200;
	}
  
	return days;
  };
  
  const name = 'Nala';
  
  const logEvent = (name, event) => {
	console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
	console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);  
  
  logEvent(name, event);
  logTime(name, days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);