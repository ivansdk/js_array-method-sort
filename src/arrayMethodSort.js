'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : 0)
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const tempValue = this[i];

          this[i] = this[j];
          this[j] = tempValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
