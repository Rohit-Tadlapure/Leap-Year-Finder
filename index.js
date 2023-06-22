let leapYearDiv = document.getElementById("leapYearDiv");
let notLeapYearDiv = document.getElementById("notLeapYearDiv");
let errorDiv = document.getElementById("errorDiv");
let button = document.getElementById("clickButton");
let isFirstClick = true;

function getUserInput() {
    let userInput = document.getElementById("userInput");

    if(isFirstClick){
        isLeapYear(userInput.value);
        button.innerHTML = "Check Again";
        isFirstClick = false;
    } else {
        clearScreen();
        button.innerHTML = "Check";
        userInput.value = ""; 
        isFirstClick = true;
    }
};

function showErrorMessage(){
    errorDiv.style.display  = "block";
    leapYearDiv.style.display = "none";
    notLeapYearDiv.style.display = "none";
};

function showLeapYearMessage(){
    leapYearDiv.style.display = "block";
    notLeapYearDiv.style.display = "none";
    errorDiv.style.display = "none";
};

function showNotLeapYearMessage(){
    notLeapYearDiv.style.display = "block";
    leapYearDiv.style.display = "none";
    errorDiv.style.display = "none";
};

function clearScreen(){
    leapYearDiv.style.display = "none";
    notLeapYearDiv.style.display = "none";
    errorDiv.style.display = "none";
};

function isLeapYear(year){
        if(year && year.length === 4){
                if(year % 4 ===0){
                    if (year % 100 === 0){
                        if(year % 400 === 0){
                            showLeapYearMessage();
                        }else{
                            showNotLeapYearMessage();
                        }
                    }else{
                        showLeapYearMessage();
                    }
                } else{
                    showNotLeapYearMessage();
                }
            
        } else {               
                showErrorMessage();
                button.innerHTML = "Check Again";
                isFirstClick = false;
            }
};

let currentYear = new Date().getFullYear();
currentYear = currentYear.toString();
function isLpYr(year){
    let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (check){
        document.getElementById("demo").textContent = year;
    } else {
        let nextLeapYear = parseInt(year) + 1;
        isLpYr(nextLeapYear.toString());
    }
};

isLpYr(currentYear);