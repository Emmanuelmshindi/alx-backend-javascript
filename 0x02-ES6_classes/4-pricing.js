import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'Amount');
    this._currency = this.validateCurrency(currrency, 'Currency');
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'Amount');
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._amount = this.validateCurrency(newCurrency, 'Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate
  }

  // Validation function for number
  validateNumber(value, attribute) {
    const num = Number(value)
    if (isNaN(num) || typeof num !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return num;
  }

  // Validation function for currency
  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}

export default Pricing;
