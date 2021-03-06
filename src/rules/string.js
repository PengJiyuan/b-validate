import Base from './base';
import { isString } from '../is';

class StringValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'string'
    });
    this.validate(
      options && options.strict ? isString(this.obj) : true,
      `Expect string type but got ${typeof this.obj}`
    );
  }

  maxLength(length) {
    return this.obj ? this.validate(
      this.obj.length <= length,
      `Expect max length ${length} but got ${this.obj.length}`
    ) : this;
  }

  minLength(length) {
    return this.obj ? this.validate(
      this.obj.length >= length,
      `Expect min length ${length} but got ${this.obj.length}`
    ) : this;
  }

  length(length) {
    return this.obj ? this.validate(
      this.obj.length === length,
      `Expect length ${length} but got ${this.obj.length}`
    ) : this;
  }

  match(pattern) {
    const isRegex = pattern instanceof RegExp;
    if (isRegex) {
      pattern.lastIndex = 0;
    }
    return this.validate(
      this.obj === undefined || (isRegex && pattern.test(this.obj)),
      `\`${this.obj}\` is not match pattern ${pattern}`
    );
  }

  get uppercase() {
    return this.obj ? this.validate(
      this.obj.toUpperCase() === this.obj,
      `Expect \`${this.obj}\` to be uppercased`
    ) : this;
  }

  get lowercase() {
    return this.obj ? this.validate(
      this.obj.toLowerCase() === this.obj,
      `Expect \`${this.obj}\` to be lowercased`
    ) : this;
  }
}

export default StringValidater;
