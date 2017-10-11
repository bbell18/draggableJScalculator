var stm = Array(); /* An array keeping track of the values entered into the calculator */
var memory = Array(); /* An array where each item is past calculations, making them available for Repeat */
var mirror; /* Used to copy the stm value and create an expression to be evaluated */
var result; /* The final result after the mirror expression has been evaluated */
var mainDisplay = document.getElementById("main-display");
var savedArea = document.getElementById("saved-area");
var calcArea = document.getElementById("calc-area");
var memoryArea = document.getElementById("memory-count");
var errorPrintArea = document.getElementById("error-display");
var repeatCount = 0;
var numpadClick = false;
var repeatButtonClick = false;
var one = 1;
var oneButton = document.getElementById("no1");
var two = 2;
var twoButton = document.getElementById("no2");
var three = 3;
var threeButton = document.getElementById("no3");
var four = 4;
var fourButton = document.getElementById("no4");
var five = 5;
var fiveButton = document.getElementById("no5");
var six = 6;
var sixButton = document.getElementById("no6");
var seven = 7;
var sevenButton = document.getElementById("no7");
var eight = 8;
var eightButton = document.getElementById("no8");
var nine = 9;
var nineButton = document.getElementById("no9");
var zero = 0;
var zeroButton = document.getElementById("noZero");
var mult = "*";
var multButton = document.getElementById("multiply");
var add = "+";
var addButton = document.getElementById("add");
var subt = "-";
var subtButton = document.getElementById("sub");
var divide = "/";
var divideButton = document.getElementById("divide");
var parenStart = "(";
var parenStartButton = document.getElementById("paren-start");
var parenEnd = ")";
var parenEndButton = document.getElementById("paren-end");
var equalsButton = document.getElementById("submit-equals");
var clearButton = document.getElementById("clear-button");
var repeatButton = document.getElementById("repeat-button");
repeatButton.disabled = true;
var oneNaN = isNaN(one);
console.log("One is not a number: " + oneNaN);
var stmNaN = isNaN(stm);
console.log("Initial value of stm is not a number: " + stmNaN);
var stmArrayTest = Array.isArray(stm);
console.log("Stm is an array: " + stmArrayTest);


/* Test functions */


/* Insert functions */


function insertOne () {
	"use strict";
	console.log("insertOne function started");
	stm.push(one);
	mainDisplay.innerHTML += one; 
}

function insertTwo () {
	"use strict";
	console.log("insertTwo function started");
	stm.push(two);
	mainDisplay.innerHTML += two; 
}

function insertThree () {
	"use strict";
	console.log("insertThree function started");
	stm.push(three);
	mainDisplay.innerHTML += three; 
}

function insertFour () {
	"use strict";
	console.log("insertFour function started");
	stm.push(four);
	mainDisplay.innerHTML += four; 
}

function insertFive () {
	"use strict";
	console.log("insertFive function started");
	stm.push(five);
	mainDisplay.innerHTML += five; 
}

function insertSix () {
	"use strict";
	console.log("insertSix function started");
	stm.push(six);
	mainDisplay.innerHTML += six;
}

function insertSeven () {
	"use strict";
	console.log("insertSeven function started");
	stm.push(seven);
	mainDisplay.innerHTML += seven;
}

function insertEight () {
	"use strict";
	console.log("insertEight function started");
	stm.push(eight);
	mainDisplay.innerHTML += eight;
}

function insertNine () {
	"use strict";
	console.log("insertNine function started");
	stm.push(nine);
	mainDisplay.innerHTML += nine;
}

function insertZero () {
	"use strict";
	console.log("insertZero function started");
	stm.push(zero);
	mainDisplay.innerHTML += zero;
}

function insertMult () {
	"use strict";
	console.log("insertMult function started");
	stm.push(mult);
	mainDisplay.innerHTML += mult;
}

function insertAdd () {
	"use strict";
	console.log("insertAdd function started");
	stm.push(add);
	mainDisplay.innerHTML += add;
}

function insertSubt () {
	"use strict";
	console.log("insertSubt function started");
	stm.push(subt);
	mainDisplay.innerHTML += subt;
}

function insertDivide () {
	"use strict";
	console.log("insertDivide function started");
	stm.push(divide);
	mainDisplay.innerHTML += divide;
}

function insertParenStart () {
	"use strict";
	console.log("insertParenStart function started");
	stm.push(parenStart);
	mainDisplay.innerHTML += parenStart;
}

function insertParenEnd () {
	"use strict";
	console.log("insertParenEnd function started");
	stm.push(parenEnd);
	mainDisplay.innerHTML += parenEnd;
}

function calculate () {
	"use strict";
	repeatCount = 0;
	memoryArea.innerHTML = "";
	mirror = "";
	result = "";
	console.log("calculate function started");
	console.log(stm);
	var i;
	
	/* Testing stm array values */
	

	for (i=0; i < stm.length; i++) {
		console.log("stm value: " + stm[i]);
	}
	
	if (stm.length === 0) {
		mirror = 0;
	} else {
	mirror = stm.join("");
	console.log("Expression for calculation: " + mirror); }
	
	memory.push(mirror);
	
	result = eval(mirror);
	console.log("Result of calculation: " + result);
	calcArea.innerHTML = "<p class='calc-area-item'>" + result + "</p>";
	
	savedArea.innerHTML += "<li class='saved-area-item'>" + mirror + " = " + result + "</li>";
	
	mainDisplay.innerHTML = "";
	mirror = "";
	stm = [];
	
}

function repeatCalculation () {
	"use strict";
	console.log("repeatCalculation function started");
	var memoryLength = memory.length;
	var lastCalcExpression = memoryLength - 1;
	console.log("Last expression for repeatCalculation: " + memory[lastCalcExpression]);
	var repeatExpression = memory[lastCalcExpression];
	var splitRE;
	var splitRELast;
	
	if (repeatExpression.includes("+") === true) {
			splitRE = repeatExpression.split("+",1);
			splitRELast = splitRE.length - 1;
			mirror = result + "+" + splitRE[splitRELast];
			result = eval(mirror);
			mainDisplay.innerHTML = mirror;
			console.log("Result of repeatCalculation: " + mirror + " = " + result);
			calcArea.innerHTML = "<p class='calc-area-item'>" + result + "</p>";
		
			repeatCount += 1;
			memoryArea.innerHTML = "x" + repeatCount;
			savedArea.innerHTML += "<li class='saved-area-item'>" + mirror + " = " + result + "</li>";

	} else if (repeatExpression.includes("-") === true) {
			splitRE = repeatExpression.split("-",1);
			splitRELast = splitRE.length - 1;
			mirror = result + "-" + splitRE[splitRELast];
			result = eval(mirror);
			mainDisplay.innerHTML = mirror;
			console.log("Result of repeatCalculation: " + mirror + " = " + result);
			calcArea.innerHTML = "<p class='calc-area-item'>" + result + "</p>";
		
			repeatCount  += 1;
			memoryArea.innerHTML = "x" + repeatCount;
			savedArea.innerHTML += "<li class='saved-area-item'>" + mirror + " = " + result + "</li>";

	} else if (repeatExpression.includes("/") === true) {
			splitRE = repeatExpression.split("/",1);
			splitRELast = splitRE.length - 1;
			mirror = result + "/" + splitRE[splitRELast];
			result = eval(mirror);
			mainDisplay.innerHTML = mirror;
			console.log("Result of repeatCalculation: " + mirror + " = " + result);
			calcArea.innerHTML = "<p class='calc-area-item'>" + result + "</p>";
		
			repeatCount += 1;
			memoryArea.innerHTML = "x" + repeatCount;
			savedArea.innerHTML += "<li class='saved-area-item'>" + mirror + " = " + result + "</li>";

	} else if (repeatExpression.includes("*") === true) {
			splitRE = repeatExpression.split("*",1);
			splitRELast = splitRE.length - 1;
			mirror = result + "*" + splitRE[splitRELast];
			result = eval(mirror);
			mainDisplay.innerHTML = mirror;
			console.log("Result of repeatCalculation: " + mirror + " = " + result);
			calcArea.innerHTML = "<p class='calc-area-item'>" + result + "</p>";
		
			repeatCount += 1;
			memoryArea.innerHTML = "x" + repeatCount;
			savedArea.innerHTML += "<li class='saved-area-item'>" + mirror + " = " + result + "</li>";

	} else if (repeatExpression.includes("(") === true) {
			console.log("repeatExpression cannot include parenthesis. repeatCalculation stopped.");
			errorPrintArea.innerHTML = "<p style='background-color:red;border: 1px black;'>Expressions with parenthesis cannot be repeated. Please clear and enter your expression without parenthesis and try again.</p>";

	} else if (repeatExpression.includes(")") === true) {
			console.log("repeatExpression cannot include parenthesis. repeatCalculation stopped.");
			errorPrintArea.innerHTML = "<p style='background-color:red;border:1 px black;'>Expressions with parenthesis cannot be repeated. Please clear and enter your expression without parenthesis and try again.</p>";
		
	} else {
			console.log("repeatExpression contains multiple operators or unrecognized characters and cannot be evaluated. repeatCalculation stopped.");
			errorPrintArea.innerHTML = "<p style='background-color:red;border: 1 px black;'>Expressions with more than one operator cannot be repeated.</p>";
		}
}

function enableRepeatCalculation () {
	"use strict";
	repeatButton.disabled = false;
}


function clearAll () {
	"use strict";
	console.log("clearAll function started");
	mainDisplay.innerHTML = "";
	calcArea.innerHTML = "";
	stm = [];
	memoryArea.innerHTML = "";
	memory = [];
	repeatCount = 0;
	repeatButton.disabled = true;
	
}

function disableRepeatWithNumpad () {
	"use strict";
	console.log("Numberpad button has been pressed, clearing calcArea");
	repeatButton.disabled = true;
}

function detectNumpadClick () {
	"use strict";
	numpadClick = true;
}

function detectRepeatButtonClick () {
	"use strict";
	console.log("repeatButtonClick value: " + repeatButtonClick);
	repeatButtonClick = true;
	
	setInterval(repeatButtonClickFalseAfterInterval, 5000);

}
function repeatButtonClickFalseAfterInterval () {
	"use strict";
	while (repeatButtonClick === true) {
	console.log("Interval has passed, repeatButtonClick is set to false.");
	repeatButtonClick = false;
	}
	
}

function clearWithRepeatAndNumpad () {
	"use strict";
	console.log("Repeat button and numpad pressed, clearing display.");
	mainDisplay.innerHTML = "";
	calcArea.innerHTML = "";
	stm = [];
	memoryArea.innerHTML = "";
	memory = [];
	repeatCount = 0;
	repeatButton.disabled = true;
	
}


oneButton.addEventListener("click",insertOne);
oneButton.addEventListener("click",disableRepeatWithNumpad);
oneButton.addEventListener("click",detectNumpadClick);
twoButton.addEventListener("click",insertTwo);
twoButton.addEventListener("click",disableRepeatWithNumpad);
twoButton.addEventListener("click",detectNumpadClick);
threeButton.addEventListener("click",insertThree);
threeButton.addEventListener("click",disableRepeatWithNumpad);
threeButton.addEventListener("click",detectNumpadClick);
fourButton.addEventListener("click",insertFour);
fourButton.addEventListener("click",disableRepeatWithNumpad);
fourButton.addEventListener("click",detectNumpadClick);
fiveButton.addEventListener("click",insertFive);
fiveButton.addEventListener("click",disableRepeatWithNumpad);
fiveButton.addEventListener("click",detectNumpadClick);
sixButton.addEventListener("click",insertSix);
sixButton.addEventListener("click",disableRepeatWithNumpad);
sixButton.addEventListener("click",detectNumpadClick);
sevenButton.addEventListener("click",insertSeven);
sevenButton.addEventListener("click",disableRepeatWithNumpad);
sevenButton.addEventListener("click",detectNumpadClick);
eightButton.addEventListener("click",insertEight);
eightButton.addEventListener("click",disableRepeatWithNumpad);
eightButton.addEventListener("click",detectNumpadClick);
nineButton.addEventListener("click",insertNine);
nineButton.addEventListener("click",disableRepeatWithNumpad);
nineButton.addEventListener("click",detectNumpadClick);
zeroButton.addEventListener("click",insertZero);
zeroButton.addEventListener("click",disableRepeatWithNumpad);
zeroButton.addEventListener("click",detectNumpadClick);
multButton.addEventListener("click",insertMult);
addButton.addEventListener("click",insertAdd);
divideButton.addEventListener("click",insertDivide);
subtButton.addEventListener("click",insertSubt);
parenStartButton.addEventListener("click",insertParenStart);
parenEndButton.addEventListener("click",insertParenEnd);
equalsButton.addEventListener("click", calculate);
equalsButton.addEventListener("click", enableRepeatCalculation);
clearButton.addEventListener("click",clearAll);
repeatButton.addEventListener("click",repeatCalculation);
repeatButton.addEventListener("click",detectRepeatButtonClick);

while (repeatButtonClick === true) {
	console.log ("repeatButton has been clicked, listener for numpad press active.");
	oneButton.addEventListener("click", clearWithRepeatAndNumpad);
	twoButton.addEventListener("click", clearWithRepeatAndNumpad);
	threeButton.addEventListener("click", clearWithRepeatAndNumpad);
	fourButton.addEventListener("click", clearWithRepeatAndNumpad);
	fiveButton.addEventListener("click", clearWithRepeatAndNumpad);
	sixButton.addEventListener("click", clearWithRepeatAndNumpad);
	sevenButton.addEventListener("click", clearWithRepeatAndNumpad);
	eightButton.addEventListener("click", clearWithRepeatAndNumpad);
	nineButton.addEventListener("click", clearWithRepeatAndNumpad);
	zeroButton.addEventListener("click", clearWithRepeatAndNumpad);
}
