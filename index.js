const display_before = document.getElementById('value_before');
const display_actual = document.getElementById('value_actual');
const botton_number = document.querySelectorAll('.number');
const operator_bottons = document.querySelectorAll('.operator');

const display = new Display(display_before, display_actual);

botton_number.forEach(boton => {
  boton.addEventListener('click', () => display.addNumber(boton.innerHTML));
});

operator_bottons.forEach(boton => {
  boton.addEventListener('click', () => display.computar(boton.value))
});

