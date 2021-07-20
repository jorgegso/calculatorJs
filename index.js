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

class Display {
  constructor(display_before, display_actual) {
    this.display_actual = display_actual;
    this.display_before = display_before;
    this.caculator = new Calculator();
    this.typeOperation = undefined;
    this.valueActual = '';
    this.valueBefore = '';
    this.signos = {
      sum: '+',
      subtraction: '-',
      divide: '%',
      multiply: 'x',
    };
  }

  delete() {
    this.valueActual = this.valueActual.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.valueActual = '';
    this.valueBefore = '';
    this.typeOperation = undefined;
    this.printValue();
  }

  computar(type1) {
    this.typeOperation !== 'same' && this.calculate();
    this.typeOperation = type1;
    this.valueBefore = this.valueActual || this.valueBefore;
    this.valueActual = '';
    this.printValue();
  }

  addNumber(number) {
    if (number === '.' && this.valueActual.includes('.')) return;
    this.valueActual = this.valueActual.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.display_actual.textContent = this.valueActual;
    this.display_before.textContent = `${this.valueBefore} ${this.signos[this.typeOperation] || ''}`;
  }

  calculate() {
    const valueBefore = parseFloat(this.valueBefore);
    const valueActual = parseFloat(this.valueActual);

    if (isNaN(valueActual) || isNaN(valueBefore)) return;
    this.valueActual = this.caculator[this.typeOperation](valueBefore, valueActual);
  }
}

class Calculator {
  sum(num1, num2) {
    return num1 + num2;
  }

  subtraction(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

}
