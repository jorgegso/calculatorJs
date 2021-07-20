class Display {
  constructor(display_before, display_actual) {
    this.display_actual = display_actual;
    this.display_before = display_before;
    this.caculator = new Calculator();
    this.valueActual = '';
    this.ValueBefore = '';
  }

  delete() {
    this.valueActual = this.valueActual.toString().slice(0, -1);
    this.printValue();
  }

  addNumber(number) {
    if (number === '.' && this.valueActual.includes('.')) return;
    this.valueActual = this.valueActual.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.display_actual.textContent = this.valueActual;
    this.display_before.textContent = this.ValueBefore;
  }
}