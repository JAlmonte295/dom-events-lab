/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelectorAll('.display');
const displayAlways = document.querySelector('.display').innerText = '0';

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {

  // console.log(event.target.innerText);

  if (event.target.classList.contains('number')) {
    const numberElement = event.target.innerText;
    // console.log('this is a number');
   
    displayElement.forEach(display => {
      if (display.innerText === '0') {
        display.innerText = '';
      }
      display.innerText += numberElement;
    });
  };

  if (event.target.classList.contains('operator')) {
    const operatorElement = event.target.innerText;
    // console.log('this is an operator');
    displayElement.forEach(display => {
    display.innerText += operatorElement;
        });
  };

    if (event.target.innerText === 'C') {
    // console.log('clear!');
    displayElement.forEach(display => {
    display.innerText = '0';
    });
  };

    if (event.target.innerText === '=') {
    // console.log('total!');
    calculateTotal();
  };

});


/*-------------------------------- Functions --------------------------------*/

function calculateTotal() {

  const displayValue = displayElement[0].innerText;
  const numbers = displayValue.split(/[\+\-\*\/]/).map(Number);
  const operator = displayValue.split(/[0-9]+/).filter(oprt => oprt !== '');
  //had to use to help from google AI to help me figure out how get the value out of the display, interesting solution which worked great but I had to understand what it did in order to finish the function. 

  let total = 0;
  let number1 = numbers[0];
  let number2 = numbers[1];
  
  if (operator == '+') {
    total = number1 + number2;
  }
  else if (operator == '-') {
    total = number1 - number2;
  }
  else if (operator == '*') {
    total = number1 * number2;
  }
  else if (operator == '/') {
    total = number1 / number2;
  }
  else {
    total = number1;
  };

  displayElement[0].innerText = total;
};



