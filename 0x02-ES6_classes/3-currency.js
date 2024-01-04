class Currency {
  constructor(code, name) {
    this._code = typeof code === 'string' ? code : '';
    this._name = typeof name === 'string' ? name : '';
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new Error('Code should be a string.');
    }
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name should be a string.');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
