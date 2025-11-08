const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const del = document.querySelector("#delete");

let left = "";
let right = "";
let lastOperator = null;
result = null;

function clearCalculator(){
    left = "";
    right = "";
    lastOperator = null;
    result = null;
}


function calculate(left, right, operator){
    if(right == ""){
        return left;
    }
    switch(operator){
        case("divide"):
            if(right == 0){
                alert("You know you can't do that.");
                clearCalculator();
                break;
            }
            return Number(left) / Number(right);
        case("multiply"):
            return Number(left) * Number(right);
        case("subtract"):
            return Number(left) - Number(right);
        case("add"):
            return Number(left) + Number(right);
    }
}

digits.forEach((digit) =>{
    digit.addEventListener('click', () =>{
        if(result != null){
            clearCalculator();
        }
        if(lastOperator == null){
            left = left + digit.textContent;
            display.textContent = left;
        }
        else{
            right = right + digit.textContent;
            display.textContent = right;
        }
    })
})

operators.forEach((operator) =>{
    operator.addEventListener('click', () =>{
        lastOperator = operator.id;
        right = "";
        display.textContent = operator.textContent;
    })
})

equals.addEventListener('click', ()=>{
    left = calculate(left, right, lastOperator);
    result = left;
    if(left != null){
        display.textContent = result;
    }
})

clear.addEventListener('click', ()=>{
    clearCalculator();
    display.textContent = '0';
})

decimal.addEventListener('click', ()=>{
    if(lastOperator == null && !left.includes('.')){
        left = left + "."
        display.textContent = left;
    }
    else if(lastOperator != null && !right.includes('.')){
        right = right + "."
        display.textContent = right;
    }
})

del.addEventListener('click', ()=>{
    if(right != ""){
        right = right.slice(0, -1);
        display.textContent = right;
    }
    else if(lastOperator != null){
        lastOperator = null;
        display.textContent = left;
    }
    else if(left != ""){
        left = left.slice(0, -1);
        display.textContent = left;
    }
})