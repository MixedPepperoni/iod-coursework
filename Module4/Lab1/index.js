//The calculator
const screen = document.getElementById("screen");
function display(input) {
  screen.value += input;
}
function clearDisplay() {
  screen.value = "";
}
function calculate() { //change ouut from function eval. USe more mdoern code. 
// We have to write out code ourselves to prevent later issues.
  try {
    screen.value = eval(screen.value);
  } catch (ERROR) {
    screen.value = "ERROR";
  }
}

