function score() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;

	var correct = 0;

	if (question1 == "Same") {
		correct++;
	}

	if (question2 == "Cow") {
		correct++;
	}

	if (question3 == "Walken") {
		correct++;
	}

	if (question4 == "Both") {
		correct++;
	}

	if (question4 == "Wow") {
		correct++;
	}


	if (correct == 1) {
		document.getElementById("after_submit").style.visibility = "visible";
		document.getElementById("number_correct").innerHTML = "You've seen the truth just " + correct + " time.";
	} else {
		document.getElementById("after_submit").style.visibility = "visible";
		document.getElementById("number_correct").innerHTML = "You've seen the truth " + correct + " times.";
	}
}














