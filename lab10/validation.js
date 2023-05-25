/* function validate()will validate form data */
function validate() {
	var sid =  $("#sid").val();
var pwd1 =  $("#pwd1").val();
var pwd2 =  $("#pwd2").val();
var uname = $("#uname").val();
var genm =  $("#genm").prop("checked");
var genf =  $("#genf").prop("checked");


	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;					/* regular expression for letters and spaces only */

	
		
		

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}
if (errMsg != "") {
	errMsg = "<div id='scrnOverlay'></div>" //8.3
	+ "<section id='errWin' class='window'><ul>"
	+ errMsg //8.4
	+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
	var numOfItems = ((errMsg.match(/<li>/g)).length) + 6; //8.5
	$("body").after(errMsg); //8.6
	$("#scrnOverlay").css('visibility', 'visible'); //8.7
	$("#errWin").css('height', numOfItems.toString() + 'em'); //8.8
	$("#errWin").css('margin-top', (numOfItems/-2).toString() + 'em'); //8.8
	$("#errWin").show(); //8.9
	$("#errBtn").click (function () { //8.10
	$("#scrnOverlay").remove();
	$("#errWin").remove();
	} );
	result = false;
	}
	
function toggle (){
	$(this).parent().next().slideToggle();
	if ($(this).html() == "[-]"){ /* Update the symbol on the "button" */
$(this).html("[+]");
} else { /* [-] <-> [+] */
$(this).html("[-]");
}
}

function init() {
	$(".collapse").click(toggle); //link function toogle() to appropriate events
	$("#regform").submit(validate);/*link function validate() to the submit event
	of the form */
	}
/* link HTML elements to corresponding event function */
function init () {
	/* assign the <form> element to variable regForm */
	$("#regform").submit(validate);
}

/* execute function init() once the window is loaded*/
$(document).ready(init);