import Base from './base';
import { isBoolean } from '../is';

class BooleanValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'boolean'
    });
    this.validate(
      isBoolean(this.obj),
      `Expect boolean type but got ${typeof this.obj}`
    );
  }

  get true() {
    return this.validate(
      this.obj === true,
      'Expect true but got false'
    );
  }

  get false() {
    return this.validate(
      this.obj === false,
      'Expect false but got true'
    );
  }
}

export default BooleanValidater;
