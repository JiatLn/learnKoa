const { LinValidator, Rule } = require('../../core/lin-validator');

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [new Rule('isInt', '需要正整数', { min: 1 })];
  }
}

class RegisterValidator extends LinValidator {
  constructor(params) {}
}

module.exports = { PositiveIntegerValidator };
