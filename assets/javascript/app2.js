
var correct=0;
var incorrect=0;
var unanswered=0;
var interval;

function timer() {
//Timer 1
	var counter = 20;
	interval = setInterval(function() {
    	counter--;

    console.log(counter);

    document.getElementById("timer").innerHTML="You have " + counter + " seconds remaining!";
    // Display 'counter' wherever you want to display it.
    if (counter == 0) {
        
        gradeQuiz();
    }
}, 1000);	



}
function start() {
	document.getElementById("gameState").style.display= "unset";
	document.getElementById("startState").style.display= "none";
	document.getElementById("gameOverState").style.display= "none";
	correct=0;
	incorrect=0;
	unanswered=0;
	console.log("rendered in start Function")
	console.log("number of correct: " + correct);
	console.log("number of incorrect; " + incorrect);
	console.log("number of unanswered: " + unanswered);

	// clearInterval(interval);
	timer();
}


function gradeQuiz(){


	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var q5 = document.quiz.q5.value;
	var q6 = document.quiz.q6.value;
	
  clearInterval(interval);


//queston 1
	if (q1 == "digital_single_lens_reflex") {
		correct++;
	} 
	else if (q1 == false) {
		unanswered++;
	}
	else if (q1 !== "digital_single_lens_reflex" && q1 !== false) {
		incorrect++;
	} 
	
//question 2
	if (q2 == "f72") {
		correct++;
	} else if (q2 == false) {
		unanswered++
	} else if (q2 !== "f72" && q2 !== false) {
		incorrect++
	}

//question 3
	if (q3 == "105mm") {
		correct++;
	} else if (q3 == false) {
		unanswered++
	} else if (q3 !== "105mm" && q3 !== false) {
		incorrect++
	}

//question 4
	if (q4 == "Yosemite") {
		correct++;
	} else if (q4 == false) {
		unanswered++
	} else if (q4 !== "Yosemite" && q4 !== false) {
		incorrect++
	}

//question 5
	if (q5 == "Neutral_Density") {
		correct++;
	} else if (q5 == false) {
		unanswered++
	} else if (q5 !== "Neutral_Density" && q5 !== false) {
		incorrect++
	}

//question 6
	if (q6 == "ProPhoto") {
		correct++;
	} else if (q6 == false) {
		unanswered++
	} else if (q6 !== "ProPhoto" && q6 !== false) {
		incorrect++
	}




	console.log("rendered in gradeQuiz function")
	console.log(q1);
	console.log("number of correct: " + correct);
	console.log("number of incorrect; " + incorrect);
	console.log("number of unanswered: " + unanswered);

	document.getElementById("gameState").style.display= "none";
	document.getElementById("gameOverState").style.display= "unset";



	gameOverState()
}




function gameOverState(){
	document.getElementById("totalCorrect").innerHTML= "You got " + correct + " correct!";
	document.getElementById("totalIncorrect").innerHTML= "You got " + incorrect + " incorrect!";
	document.getElementById("totalUnanswered").innerHTML= "You got " + unanswered + " unanswered!";
	
	// document.getElementById("gameState").style.display= "none";
	// document.getElementById("gameOverState").style.display= "none";
	// document.getElementById("startState").style.display= "unset";

}
