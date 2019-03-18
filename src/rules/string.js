import Base from './base';
import { isString } from '../is';

class StringValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'string'
    });
    this.validate(
      isString(this.obj),
      `Expect string type but got ${typeof this.obj}`
    );
  }

  maxLength(length) {
    return this.validate(
      this.obj.length <= length,
      `Expect max length ${length} but got ${this.obj.length}`
    );
  }

  minLength(length) {
    return this.validate(
      this.obj.length >= length,
      `Expect min length ${length} but got ${this.obj.length}`
    );
  }

  length(length) {
    return this.validate(
      this.obj.length === length,
      `Expect length ${length} but got ${this.obj.length}`
    );
  }

  match(pattern) {
    return this.validate(
      pattern.test(this.obj),
      `\`${this.obj}\` is not match pattern ${pattern}`
    );
  }

  get uppercase() {
    return this.validate(
      this.obj.toUpperCase() === this.obj,
      `Expect \`${this.obj}\` to be uppercased`
    );
  }

  get lowercase() {
    return this.validate(
      this.obj.toLowerCase() === this.obj,
      `Expect \`${this.obj}\` to be lowercased`
    );
  }
}

export default StringValidater;
