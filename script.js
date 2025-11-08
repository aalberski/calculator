const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const digits = document.querySelectorAll('.digit');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const backspace = document.querySelector('#backspace');
const clear = document.querySelector('#clear');
const enter = document.querySelector('#enter');

digits.forEach((digit) =>{
    digit.addEventListener('click', () =>{
        alert(digit.textContent);
    })
})

divide.addEventListener('click', ()=>{

})