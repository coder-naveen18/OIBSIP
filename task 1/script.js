// script.js

// Get the necessary elements
let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
let string = "";

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
