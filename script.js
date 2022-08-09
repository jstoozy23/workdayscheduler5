var currentTime = moment().format("H");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const allHours = document.querySelectorAll(".hour");
const allNotes = document.querySelectorAll(".notes")

const currentDay = moment.format("dddd,MMMM Do");
$("#currentDay").text(currentDay);




function saveInput1 () {
    localStorage.setItem("input1", timeArray[0].value)
};

function saveInput_2 () {
    localStorage.setItem("input2", timeArray[1].value)
};

function saveInput_3 () {
    localStorage.setItem("input3", timeArray[2].value)
};

function saveInput_4 () {
    localStorage.setItem("input4", timeArray[3].value)
};

function saveInput_5 () {
    localStorage.setItem("input5", timeArray[4].value)
};

function saveInput_6 () {
    localStorage.setItem("input6", timeArray[5].value)
};

function saveInput_7 () {
    localStorage.setItem("input7", timeArray[6].value)
};

function saveInput_8 () {
    localStorage.setItem("input8", timeArray[7].value)
};

function saveInput_9 () {
    localStorage.setItem("input9", timeArray[8].value)
};



nine.addEventListener("click", saveInput1);
ten.addEventListener("click", saveInput2);
eleven.addEventListener("click", saveInput3);
twelve.addEventListener("click", saveInput3);
one.addEventListener("click", saveInput4);
two.addEventListener("click", saveInput5);
three.addEventListener("click", saveInput6);
four.addEventListener("click", saveInput7);
five.addEventListener("click", saveInput8);