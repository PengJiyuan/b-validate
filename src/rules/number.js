import Base from './base';
import { isNumber } from '../is';

class NumberValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'number'
    });
    this.validate(
      isNumber(this.obj),
      `Expect number type but got ${this.obj}`
    );
  }

  min(num) {
    return this.validate(
      this.obj >= num,
      `${this.obj} is not greater than ${num}`
    );
  }

  max(num) {
    return this.validate(
      this.obj <= num,
      `${this.obj} is not less than ${num}`
    );
  }

  equal(num) {
    return this.validate(
      this.obj === num,
      `${this.obj} is not equal to ${num}`
    );
  }

  range(min, max) {
    return this.validate(
      this.obj >= min && this.obj <= max,
      `${this.obj} is not in range ${min} ~ ${max}`
    );
  }

  get positive() {
    return this.validate(
      this.obj > 0,
      `Expect number to be positive, but got ${this.obj}`
    );
  }

  get negative() {
    return this.validate(
      this.obj < 0,
      `Expect number to be negative, but got ${this.obj}`
    );
  }
}

export default NumberValidater;
