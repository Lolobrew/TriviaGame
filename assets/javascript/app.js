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



//initialize variables
var theQuestion = questionsArray[counter].question;
var theAnswers = questionsArray[counter].allAnswers;
var theCorrectAnswer = questionsArray[counter].correctAnswer;
console.log(theCorrectAnswer);


function displayStuff(){
	//set the question to the html div
	$('.thequestion').text(theQuestion);

	//for loop to get answers
	var yourChoices;
	for (var i = 0; i < theAnswers.length; i++) {
		yourChoices = theAnswers[i];
		//add each answer as a list item with a radio button, append to answers in html	
		$('<li><input type = "checkbox" val = '+ i +' />' + yourChoices + '</li>').appendTo($('.answers'));		
	//closes for loop	
	}
//closes displayStuff()	
}	

//create timer function



	
$(document).ready(function(){

	//display answer and choices 
	displayStuff();

$('.btn').click(function(){
	z = $('input:checked').val();
	console.log(z);
})
	




//closing tags for doc ready
});
