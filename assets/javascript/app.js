//create an array of questions.
//treat them as objects with multiple answers, and designate a correct answer
//use a for loop to run through and display each question
//when displayed the user has a set amount of time to guess the answer
//after time is up an alert pops up and a message displays with the correct answer and then moves to the next question
//if the user picks the correct answer an alert pops up with a message and then moves to the next question
//if the user picks the wrong answer an alert pops up with a message w/ the correct answer and then moves to the next question
//after all questions have been asked a screen with the total amount of correctly guessed answers displays out of the total possible

//click event on start button to begin timer and display first question.... game loop
//look up radio buttons-- tie click event to radio button (key.which === left mouse #, if input(val()===correct answer, {})) to display alert, and then move to the next screen
//look up 

var questionsArray = [{
	question: "Who are you?",
	allAnswers: ["Jeff", "Kady", "Auggie", "Scooter"],
	correctAnswer: 0},
	{question: "How are you doing?",
	allAnswers: ["good", "bad", "poorly", "well"],
	correctAnswer: 3
}];

//variable to run through questions array and increase on next question
var counter = 0;
var correctGuesses = 0;
var totalGuesses = 2;
var allTheGuesses = 2;
console.log("user total guesses: " + totalGuesses);

//initialize variables
var theQuestion = questionsArray[counter].question;
var theAnswers = questionsArray[counter].allAnswers;
var theCorrectAnswer = questionsArray[counter].correctAnswer;
console.log("the correct answer value: " + theCorrectAnswer);


//initial display when game is started
function displayStuff(){

	//set the question to the html div
	$('.thequestion').text(theQuestion);

	//for loop to get answers
	var yourChoices;
	for (var i = 0; i < theAnswers.length; i++) {
		yourChoices = theAnswers[i];

		//add each answer as a list item with a radio button, append to answers in html	
		$('<li><input type = "checkbox" value = '+ i +' />' + yourChoices + '</li>').appendTo($('.answers'));

	//closes for loop	
	}
//closes displayStuff()	
}	
	


$(document).ready(function(){
	

	//hide the message div
	$('#message').hide();

	//hide the timer div
	$('#theTimer').hide();

	

	$('#btn').click(startGame);



//closing tags for doc ready
});


//starts game on the first display
function startGame(){

	$('#theTimer').html(15);

	$('#btn').hide();

	$('#theTimer').show();

		
	//display answer and choices 
	displayStuff();


	var timer = setInterval(function() {
		var count = parseInt($('#theTimer').html());
    	if (count !== 0) {
    		$('#theTimer').html(count - 1);
    	} else if( count === 0){
    		clearInterval(timer);
			wrongTimeUp();
			totalGuesses--;
			nextQuestion();
		} else {
      		clearInterval(timer);
   		 }
 	 }, 1000);
	

	//on input click
	$('input').click(function(){
	
		var theValue = $('input:checked').val();
		console.log("the value of selected input: " + theValue);


		if(theValue == theCorrectAnswer){
			correctGuesses++;
			goodGuess();
			nextQuestion();
			totalGuesses--;
			clearInterval(timer);
		} else{
			totalGuesses--;
			wrongTimeUp();
			clearInterval(timer);		
			
		}

	});

}


//runs all proceeding games/displays after start game
function nextQuestion(){

	$('#theTimer').html(15);

	$('#theTimer').show();

	$(document).find($('li').remove());

	counter++;



	//initialize variables
var theQuestion = questionsArray[counter].question;
var theAnswers = questionsArray[counter].allAnswers;
var theCorrectAnswer = questionsArray[counter].correctAnswer;
console.log("the correct answer value: " + theCorrectAnswer);

	$('#btn').hide();
	
	//display answer and choices 
	//set the question to the html div
	$('.thequestion').text(theQuestion);

	//for loop to get answers
	var yourChoices;
	for (var i = 0; i < theAnswers.length; i++) {
		yourChoices = theAnswers[i];

		//add each answer as a list item with a radio button, append to answers in html	
		$('<li><input type = "checkbox" value = '+ i +' />' + yourChoices + '</li>').appendTo($('.answers'));

	//closes for loop	
	}


	var timer = setInterval(function() {
		var count = parseInt($('#theTimer').html());
    	if (count !== 0) {
    		$('#theTimer').html(count - 1);
    	} else if( count === 0){
    		clearInterval(timer);
			timeUp(wrongTimeUp);
			totalGuesses--;
			nextQuestion();
		} else {
      		clearInterval(timer);
   		 }
 	 }, 1000);
	

		//on input click
	$('input').click(function(){
	
		var theValue = $('input:checked').val();
		console.log("the value of selected input: " + theValue);



		if(theValue == theCorrectAnswer){
			correctGuesses++;
			clearInterval(timer);
			timeUp(goodGuess);
			nextQuestion();
			totalGuesses--;				
		} else{
			totalGuesses--;
			wrongTimeUp();			
		}

	});


}

function timeUp(funct){
	setTimeout(funct, 2000);
}

function goodGuess (){
	$('.wrapper').hide();
	$('#message').text("That's right!");
	$('#message').show();
}

function wrongTimeUp (){
	$('.wrapper').hide();
	$('#message').text("Sorry, the right answer is " + theCorrectAnswer + ".");
	$('#message').show();
}

function gameOver(){
	$('#message').text("You got: " +correctGuesses + " / " + allTheGuesses + "right!");
	$('#message').show();
}