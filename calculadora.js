let display = document.getElementById('display');

function addToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch {
    display.innerText = 'Erro';
  }
}
