const check = document.getElementById('submit');
let attemptCount = document.getElementById('attempts');
const resultBox = document.getElementById('result_box');
let randomNumber = Math.floor(Math.random() * 100 ) + 1;
let ResultText1 = document.getElementById('result');
let enteredNumber = document.getElementById('entered_number');
let tempResultText = document.getElementById('temp_result');
let attemptCountBox = document.getElementById('attempt_count');
let number;
let Attempts = 10;
attempts.innerHTML = Attempts;

function numberator(event) {
   if(event){
        event.preventDefault();
        Attempts--;
        attempts.innerHTML = Attempts;
        if (Attempts == 0) {
            activateResultBox('SORRY BETTER LUCK NEXT TIME.');
        }
        number = enteredNumber.value
        checkEnteredNumber(number);
    }
}

function activateResultBox(msg1) {
    resultBox.classList.add('active');
    ResultText1.innerHTML = msg1;
    tempResultText.innerHTML = "";
    attemptCountBox.classList.remove('active');
}

function checkEnteredNumber(num) {
    if(isNaN(num)){
        tempResultText.innerHTML = "GUSSED NUMBER IS NOT A NUMBER."
    }
    else if (num == randomNumber) {
        activateResultBox('CONGRATS YOU HAVE WON THE GAME.');
    } else if (num > randomNumber){
        tempResultText.innerHTML = "GUSSED NUMBER IS LARGE."
    }  else{
        tempResultText.innerHTML = "GUSSED NUMBER IS SMALL."
    }
}