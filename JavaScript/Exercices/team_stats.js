const team = {
	_players: [
		{firstName: 'Cristiano', lastName: 'Ronaldo', age: 37},
		{firstName: 'Kylian', lastName: 'Mbappé', age: 23},
		{firstName: 'Jude', lastName: 'Bellingham', age: 18}
	],
	_games: [
		{opponent: 'Manchester City', teamPoints: 39, opponentPoints: 57},
		{opponent: 'Stade Rennes', teamPoints: 56, opponentPoints: 37},
		{opponent: 'Bayern Munich', teamPoints: 43, opponentPoints: 52},
	],
	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayer(firstName, lastName, age) {
		let player = {
			firstName: firstName,
			lastName: lastName,
			age: age
		};
		this.players.push(player);
	},
	addgame(oppName, points, oppPoints) {
		const game = {
			opponent: oppName,
			points: points,
			opponentPoints: oppPoints
		}
		this.games.push(game);
	}
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addgame('Chelsea', 100, 50);
team.addgame('Porto', 90, 62);
team.addgame('West Ham', 52, 75);

console.log(team.games);