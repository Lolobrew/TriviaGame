
		
$(document).ready(function(){

	//hide elements
	$('.wrapper').hide();
	$('#message').hide();
	$('#theTimer').hide();
	$('#bottom').hide();
	$('#right').hide();
	//start the quiz
	$('#startBtn').click(function(){

	//show elements, hide button
	$('.wrapper').show();
	$('#theTimer').show();
	$(this).hide();
	$('.instructions').hide();
	$('#bottom').show();
	$('#right').show();

	

	//only allow one input to be checked
	$('input').on('change', function () {
    	$('input').prop('disabled',false).filter(':checked').each(function() {
       		$('input[value="' + this.value + '"]:not(:checked)').prop('disabled', true);        	
       	});
	});       
        	

       	//correct guesses
			var correct = 0;
			var wrong = 0;
			
			$('input[type="checkbox"]').click(function(){

				//check to see how many inputs are checked
				var checked = $(document).find('input:checked').length;
				console.log("number checked: " + checked);

				//an array might've been more efficient, but this is easier..
				if(this.checked && correct < 10){
        			if($(this).attr('id') == "qst1ans1"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst2ans3"){
        				correct++;
        				console.log("correct: " + correct)
        			} else if ($(this).attr('id') === "qst3ans2"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst4ans1"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst5ans4"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst6ans2"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst7ans1"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst8ans4"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst9ans2"){
        				correct++;
        				console.log("correct: " + correct);
        			} else if ($(this).attr('id') === "qst10ans3"){
        				correct++;
        				console.log("correct: " + correct);
        			} else {
        				wrong++;
        				console.log("wrong: " + wrong);
        			}
        			//if the number of checked inputs = 10
        		} if (checked >= 10){
        			clearInterval(timer);
        			$('.wrapper').hide();
        			$('#theTimer').hide();
        			$('#bottom').hide();
    				$('#message').text("Whoah there Ultron! You missed a couple. You got  " + correct + " / 10!");
    				$('#message').show();
    				//if correct answers = 10
        		} if (correct >= 10){
        			clearInterval(timer);
    				$('.wrapper').hide();
    				$('#theTimer').hide();
    				$('#bottom').hide();
	    			$('#message').text("You're quicker than Quicksilver! You got  " + correct + " / 10!");
	    			$('#message').show();
        		}

        	});
        		 
    //start timer
	var timer = setInterval(function() {
		var count = parseInt($('#theTimer').html());
    	if (count !== 0) {
    		$('#theTimer').html(count - 1);
    	} else if( count === 0){
    		clearInterval(timer);
    		$('.wrapper').hide();
    		$('#theTimer').hide();
    		$('#bottom').hide();
    		$('#message').text("Uh-oh! Time is up and The Time-Keepers have you now! You got  " + correct + " / 10!");
    		$('#message').show();
		} else {
   			clearInterval(timer);
		}
 	}, 1000);

        	

	

	//closing tags for start button click
	});


//closing tags for doc ready
});

