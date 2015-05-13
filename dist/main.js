function* guessingGame() {
	// console.log(yield game.say('Hey there!'));
	// console.log(yield game.say('Woah', 'This is cool'));
	// console.log(yield game.ask('Woah', 'This is cool'));
	// console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield game.say('That\'s all folks!', 'THE END'));



	var userNum;
	var random;
	var bool = true;

	
	random = Math.ceil(Math.random()* 100);
	console.log('random ' + random);

	do{
		userNum = yield game.ask('Choose a number between 1 and 100.');
		userNum = parseInt(userNum);

	}while(userNum < 1 || userNum > 100);

	while(bool){
		// console.log('random ' + random);
		// //console.log('userNum ' + userNum);
		userNum = parseInt(userNum);

		if(userNum === random) {	
			bool = false;
			console.log('correct answer');
		}
		else if(userNum < random ){
			userNum = yield game.ask( 'Your number is too low. Please guess again.');
		}
		else if(userNum > random){
			userNum = yield game.ask( 'Your number is too high. Please guess again.');
		}
	}

	console.log(game.say('You guessed the correct number!'));

}