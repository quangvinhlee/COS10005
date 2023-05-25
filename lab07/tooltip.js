/* write functions that define the action for each event */
function showTip () {
	var sidTip;
	sidTip = document.getElementById("sidTip"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip.style.display = "inline";  										//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}
function showTip1 () {
	var sidTip1;
	sidTip1 = document.getElementById("sidTip1"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip1.style.display = "inline";  										//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}


function hideTip () {  														//this function hides the tool tip
	var sidTip;
	sidTip = document.getElementById("sidTip1"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip.style.display = "none"																						//first, get access to the tool tip HTML element
																							//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}
function hideTip1 () {  														//this function hides the tool tip
	var sidTip1;
	sidTip1 = document.getElementById("sidTip1"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip1.style.display = "none"																						//first, get access to the tool tip HTML element
																							//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}
function init() {
 	var sid, pw1; /* create a variable named sid */
 	sid = document.getElementById("sid"); /* get access to the HTML element by its id "sid" and link it to sid */
 	sid.onmouseover = showTip; /* link function showTip to the onmouseover event of sid */
 	sid.onmouseout = hideTip; /* link function hideTip to the onmouseout event of sid */

	
 	pwd1 = document.getElementById("pwd1"); /* get access to the HTML element by its id "pwd1" and link it to pwd1 */
 	pwd1.onmouseover = showTip1; /* link function showTip to the onmouseover event of pwd1 */
 	pwd1.onmouseout = hideTip1; /* link function hideTip to the onmouseout event of sid */
 }
			  
 window.onload = init; /* link function init to the onload event of the window so that function init will be called when the page is loaded */
																				  /* link function init to the onload event of the window so that function init will be called when the page is loaded */