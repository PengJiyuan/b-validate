import Base from './base';
import { isNumber } from '../is';

class NumberValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'number'
    });
    this.validate(
      options && options.strict ? isNumber(this.obj) : true,
      `Expect number type but got ${typeof this.obj}`
    );
  }

  min(num) {
    return this.obj ? this.validate(
      this.obj >= num,
      `\`${this.obj}\` is not greater than \`${num}\``
    ) : this;
  }

  max(num) {
    return this.obj ? this.validate(
      this.obj <= num,
      `\`${this.obj}\` is not less than \`${num}\``
    ) : this;
  }

  equal(num) {
    return this.obj ? this.validate(
      this.obj === num,
      `\`${this.obj}\` is not equal to \`${num}\``
    ) : this;
  }

  range(min, max) {
    return this.obj ? this.validate(
      this.obj >= min && this.obj <= max,
      `\`${this.obj}\` is not in range \`${min} ~ ${max}\``
    ) : this;
  }

  get positive() {
    return this.obj ? this.validate(
      this.obj > 0,
      `Expect number to be positive, but got \`${this.obj}\``
    ) : this;
  }

  get negative() {
    return this.obj ? this.validate(
      this.obj < 0,
      `Expect number to be negative, but got \`${this.obj}\``
    ) : this;
  }
}

export default NumberValidater;
