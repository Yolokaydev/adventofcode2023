export class Digit {
  constructor(indexes, value) {
    this.indexes = indexes;
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    if (typeof newValue !== 'number') {
      this.value = newValue * 1;
    }

    this.value = newValue;
  }

  toString() {
    return this.value.toString();
  }
}

