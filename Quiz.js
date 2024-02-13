    function onSubmit(){   // function to submit the answers
		var score = 0;   // array to store the score
		var no_of_questions = 10;

		// array to store the correct answers
        var answers = ["bambarakanda","sinharaja","mahaweli","S&T","five","piduru","rupee","central","junglefowl","kotte"]
		// variables to store user enterd answers
        var q1 = document.forms['quiz']['falls'].value;
        var q2 = document.forms['quiz']['forest'].value;
        var q3 = document.forms['quiz']['river'].value;
        var q4 = document.forms['quiz']['language'].value;
        var q5 = document.forms['quiz']['flag'].value;
        var q6 = document.forms['quiz']['mountain'].value;
        var q7 = document.forms['quiz']['currency'].value;
        var q8 = document.forms['quiz']['province'].value;
        var q9 = document.forms['quiz']['bird'].value;
        var q10= document.forms['quiz']['capital'].value;
		
		// for loop to find out missing questions
		for(var i =1; i <= no_of_questions; i++){
			if(eval('q' + i) == ''){
				alert("You missed the Question " + i );	
			}
		}  // for loop to check answers & calculate score
		for(var i = 1; i<= no_of_questions; i++){
			if(eval('q' + i) == answers[i - 1]){
				score = score + 10;
			}
		}
		// show score & completion time
		document.write("<h3>Your score is : " + score + "</h3>");
		document.write("<h3><br>You took  " + (60 - c) + " seconds to finish.</h3>");
		// change background colour accoring to the score
		if(score>=60){
			document.body.style.backgroundColor = "rgb(24, 227, 24)";
		}else{
			document.body.style.backgroundColor = "rgb(237, 95, 59)";
		}
		// writing the correct answers to the web page
		document.write("<h2>Answers</h2>");
		document.write("<h4>Question 1 : Bambarakanda Falls</h4>" ); 
		document.write("<h4>Question 2 : Sinharaja Forest Reserve</h4>" );
		document.write("<h4>Question 3 : Mahaweli River</h4>");
		document.write("<h4>Question 4 : Sinhala & Tamil</h4>");
		document.write("<h4>Question 5 : 5</h4>");
		document.write("<h4>Question 6 : Pidurutalagala Mountain</h4>");
		document.write("<h4>Question 7 : Rupee</h4>");
		document.write("<h4>Question 8 : Central Province</h4>");
		document.write("<h4>Question 9 : Junglefowl</h4>");
		document.write("<h4>Question 10 : Sri Jayawardenapura Kotte</h4>");

		}
		// 1 minute timer
		var c = 60;
		function timer(){			
			c = c - 1;
			if (c < 60){
				time.innerHTML = c;
			}
			if(c < 1){
				window.clearInterval(update);
				alert("Time is Over!")
			}
		}
		
		update = setInterval("timer()", 1000);
