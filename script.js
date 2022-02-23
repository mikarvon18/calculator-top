const buttons = document.querySelectorAll('button');
let display = "0"
let displayValue = " "
let currentNum = ""
let prevNum = ""
let operatorClicked = false
let multOperators = false
let operatorAlreadyClicked = false;
let operation



const numbers = document.querySelectorAll(".number");
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(button.classList[1])
        if (operatorClicked){
            displayValue = ""
            operatorClicked = false
        }
        currentNum = currentNum.concat(button.textContent)
        console.log(`First: ${currentNum} - Second: ${prevNum}`)
        displayValue = displayValue.concat(button.textContent)
        console.log(`VALUE: ${displayValue}`)
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        //if operator is clicked again without exe
        if(!operatorClicked) {
            if(operatorAlreadyClicked) {
                operate();
    
            }
            prevNum = currentNum;
            currentNum = "";
            //the sum should be evaluated
            
            displayValue = button.textContent
            
            
            operation = button.classList[1]
            operatorClicked = true
            operatorAlreadyClicked = true;
        }
      
    });
});

const others = document.querySelectorAll(".other");
others.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (button.classList[1] === "exe"){
            multOperators = false
            displayValue = button.textContent
            operate();
            operatorClicked = false
            operatorAlreadyClicked = false;

        } else if (button.classList[1] === "dot" && !(displayValue.includes("."))){
            console.log(displayValue)
            displayValue = displayValue.concat(".")
            currentNum = currentNum.concat(".")
        }
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(button.classList[1])
        let screen = document.querySelector('.screen')
        screen.textContent = displayValue
    });
});


function operate(){
    let sum;
    if (operation === "multiply"){
        sum = multiply(currentNum, prevNum);
    } else if (operation === "add"){
        sum = add(currentNum, prevNum);
    } else if (operation === "subtract"){
        sum = subtract(prevNum, currentNum);
    } else if (operation === "divide"){
        if (currentNum == 0) {
            displayValue = "bruh"
            sum = prevNum;   
        } else {
            sum = divide(prevNum, currentNum)
        }
        
    }
    displayValue = Math.round(sum * 10) / 10;
    currentNum = Math.round(sum * 10) / 10;
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2){
    return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2){
    return parseFloat(num1) / parseFloat(num2);
}