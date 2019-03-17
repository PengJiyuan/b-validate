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
      isArray(this.obj),
      `Expect array type but got ${this.obj}`
    );
  }

  length(num) {
    return this.validate(
      this.obj.length === num,
      `Expect array length ${num} but got ${this.obj.length}`
    );
  }

  includes(arrays) {
    return this.validate(
      arrays.every(el => this.obj.indexOf(el) !== -1),
      `${JSON.stringify(this.obj)} is not includes ${JSON.stringify(arrays)}`
    );
  }

  deepEqual(other) {
    return this.validate(
      isEqual(this.obj, other),
      `${JSON.stringify(this.obj)} is not deep equal with ${JSON.stringify(other)}`
    );
  }

  get empty() {
    return this.validate(
      isEmptyArray(this.obj),
      `Expect empty array but got ${JSON.stringify(this.obj)}`
    );
  }
}

export default ArrayValidater;
