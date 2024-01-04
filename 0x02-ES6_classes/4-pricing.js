import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : 0;
    this._currency = currency instanceof Currency ? currency : new Currency('', '');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new Error('Amount should be a number.');
    }
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new Error('Currency should be an instance of Currency class.');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new Error('Both amount and conversionRate should be numbers.');
    }
  }
}
export default Pricing;
