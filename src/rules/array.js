import isEqual from 'lodash.isequal';
import Base from './base';
import { isArray, isEmptyArray } from '../is';

class ArrayValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'array'
    });
    this.validate(
      options && options.strict ? isArray(this.obj) : true,
      `Expect array type but got \`${this.obj}\``
    );
  }

  length(num) {
    return this.obj ? this.validate(
      this.obj.length === num,
      `Expect array length ${num} but got ${this.obj.length}`
    ) : this;
  }

  minLength(num) {
    return this.obj ? this.validate(
      this.obj.length >= num,
      `Expect min array length ${num} but got ${this.obj.length}`
    ) : this;
  }

  maxLength(num) {
    return this.obj ? this.validate(
      this.obj.length <= num,
      `Expect max array length ${num} but got ${this.obj.length}`
    ) : this;
  }

  includes(arrays) {
    return this.obj ? this.validate(
      arrays.every(el => this.obj.indexOf(el) !== -1),
      `${JSON.stringify(this.obj)} is not includes ${JSON.stringify(arrays)}`
    ) : this;
  }

  deepEqual(other) {
    return this.obj ? this.validate(
      isEqual(this.obj, other),
      `${JSON.stringify(this.obj)} is not deep equal with ${JSON.stringify(other)}`
    ) : this;
  }

  get empty() {
    return this.validate(
      isEmptyArray(this.obj),
      `Expect empty array but got ${JSON.stringify(this.obj)}`
    );
  }
}

export default ArrayValidater;
