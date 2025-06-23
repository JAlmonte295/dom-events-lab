/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelectorAll('.display');
// const additionOperator = ;

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     console.log(event.target.innerText);
//     // Future logic to capture the button's value would go here...
//   });
// });

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);


  // Example
  if (event.target.classList.contains('number')) {
    const numberElement = event.target.innerText;
    // Do something with a number
    console.log('this is a number');
    // display number on the display
    displayElement.forEach(display => {
      display.innerText += numberElement;
    });


};


  // Example
  if (event.target.classList.contains('operator')) {
    const operatorElement = event.target.innerText;
    // Do something with an operator
    console.log('this is an operator');
    displayElement.forEach(display => {
    display.innerText += operatorElement;
        });

  }

  // Example

    if (event.target.innerText === 'C') {
    // Do something with this operator
    console.log('clear!');
    displayElement.forEach(display => {
    display.innerText = '';
    });
  }
    if (event.target.innerText === '=') {
    // Do something with this operator
    console.log('total!');
    calculateTotal();
  }
});


/*-------------------------------- Functions --------------------------------*/

//create a function which calculates the total based on the display value
function calculateTotal() {
  // Get the current display value
  const displayValue = displayElement[0].innerText;
  
  // Split the display value into numbers and operators
  const numbers = displayValue.split(/[\+\-\*\/]/).map(Number);
  const operator = displayValue.split(/[0-9]+/).filter(op => op !== '');

  // Initialize total with the first number
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

  // Display the total in the first display element
  displayElement[0].innerText = total;
};



