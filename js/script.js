
function divider() {
    console.log("");
}

//Question 1

function coolMessage() {
    console.log("What the func is this nonsense?")
};

coolMessage();


//Question 2 
divider(); 

function fullName (firstName, lastName) {
    console.log(firstName + " " + lastName);
}

fullName("Tommy", "Taco");


//Question 3 
divider();

function numberMultiplier (firstNumber, secondNumber) {
    if (typeof firstNumber === "number" && typeof secondNumber == "number") {
        return firstNumber * secondNumber;
    } else {
        console.log("Please supply number values")
    }
}

var result = numberMultiplier(20, 2);
console.log(result);


//Question 4
divider();


function numberMaker (item1, item2, item3) {

    item1 = parseFloat(item1);
    item2 = parseFloat(item2);
    item3 = parseFloat(item3);

    if (isNaN(item1) || isNaN(item2) || isNaN(item3)) {
        return "Invalid";
    } 
    
    return item1 + item2 + item3;
}

var numbersAdded = numberMaker (2, 4, 14)

var paragraph = document.querySelector("p"); 

paragraph.innerHTML = numbersAdded;


//Question 5 
divider();

var heading = document.querySelector(".heading");
var header1 = document.querySelector("h1");

function changeHeader() {
    header1.innerHTML += ": Updated";
}

heading.onclick = changeHeader;



//Question 6
divider(); 

var buttonTitle = document.querySelector(".title");

function updateTitle(){

    document.title = "I've been updated";
}

buttonTitle.onclick = updateTitle;


//Question 7
divider(); 

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");
var bodyHtml = document.querySelector("body");

function paintRed () {
    bodyHtml.style.backgroundColor = "red";
}; 

function paintOrange () {
    bodyHtml.style.backgroundColor = "orange";
}

function paintPink () {
    bodyHtml.style.backgroundColor = "pink";
}

redButton.onclick = paintRed;
orangeButton.onclick = paintOrange;
pinkButton.onclick = paintPink;

// This was my version, under is the way to do it with the use of multiple functions.

function changeColour (color) {
    document.body.style.backgroundColor = color;
};

redButton.onclick = function() {
    changeColour("red");
}; 

orangeButton.onclick = function() {
    changeColour("orange");
}; 

pinkButton.onclick = function() {
    changeColour("pink");
}; 