calculator = function () {

	let bottomNo = "", 
		topNo = "", 
		buttonValue = 0, 
		solution = "", 
		operators = ["+","-","/","*"];

	$("button").click(function() {
		buttonValue = $(this).val();

		if (buttonValue != "=" && operators.indexOf(buttonValue) > -1){
				
			solution += bottomNo;
			solution = eval(solution);
			$('#bottom').html(solution);		
			solution += buttonValue;

			topNo += bottomNo;		
			topNo += buttonValue;
			$('#top').html(topNo);
			bottomNo = "";

		} else if (buttonValue != "=") {
			bottomNo += buttonValue;
			$('#bottom').html(bottomNo);
		}

	});

	$("#equalButton").click( () => {
		solution += bottomNo;
		solution = eval(solution);
		$('#top').html("&nbsp");
		$('#bottom').html(solution);		
		topNo = solution;
		bottomNo = "";
	});

	$("#ac").click( () => {
		$('#top').html("&nbsp");
		$('#bottom').html(0);
		topNo = "";
		bottomNo = "";
		solution = "";
	});

	$("#ce").click( () => {
		$('#bottom').html(0);
		bottomNo = "";	
	});

}();