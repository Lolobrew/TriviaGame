
		
$(document).ready(function(){

	     	//correct guesses
	var correct = 0;
	var wrong = 0;

	//hide elements
	$('.hidden').hide();
	//start the quiz
	$('#startBtn').click(function(){

	//show elements, hide button and instructions
	$('.hidden').show();
	$('#wolverine').toggleClass('pint');
	$(this).hide();
	$('#instructions').hide();
	$('#message').hide();
	//set timer to 60
	$('#theTimer').html(60);
	//remove all checked checkboxes
	$('input').prop('checked', false);
    //move to top of doc
    window.scrollTo(0,0);

	    //start timer
	var timer = setInterval(function() {
		var count = parseInt($('#theTimer').html());
    	if (count !== 0) {
    		//count down
    		$('#theTimer').html(count - 1);
    		//if time is up
    	} else if( count === 0){
            window.scrollTo(0,0);
    		clearInterval(timer);
    		$('.hidden').hide();
    		$('#message').text("Uh-oh! Time is up and The Time-Keepers have you now! You got  " + correct + " / 10!");
    		$('#message').show();
    		$('#startBtn').show();
    		$('#wolverine').toggleClass('pint');
		} else {
   			clearInterval(timer);
		}
 	}, 1000);

        	
	//only allow one input to be checked
	$('input').on('change', function () {
    	$('input').prop('disabled',false).filter(':checked').each(function() {
       		$('input[value="' + this.value + '"]:not(:checked)').prop('disabled', true);        	
       	});
	});       
        	

  			
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
                    window.scrollTo(0,0);
        			$('.hidden').hide();
    				$('#message').text("Whoah there Ultron! You missed a couple. You got  " + correct + " / 10! Would you like to try again?");
    				$('#message').show();
    				$('#startBtn').show();
    				$('#wolverine').toggleClass('pint');
    				//if correct answers = 10
        		} if (correct >= 10){
        			clearInterval(timer);
                    window.scrollTo(0,0);
    				$('.hidden').hide();
	    			$('#message').text("You're quicker than Quicksilver! You got  " + correct + " / 10! Would you like to try again?");
	    			$('#message').show();
	    			$('#startBtn').show();
	    			$('#wolverine').toggleClass('pint');
        		}

        	});    		 

	

	//closing tags for start button click
	});


//closing tags for doc ready
});

