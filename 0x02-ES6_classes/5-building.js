class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
 this.sqft = sqft;
  }

  /**
   * @param {Number} sqft
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft nust be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
export default Building;
