import { isObject, isString, isEmptyValue } from '../is';

/**
 * @param options.trim trim string value
 */
class Base {
  constructor(obj, options) {
    if (isObject(options) && isString(obj) && options.trim) {
      this.obj = obj.trim();
    } else {
      this.obj = obj;
    }
    this.type = options.type;
    this.error = null;
  }

  addError(message) {
    if (!this.error) {
      this.error = {
        value: this.obj,
        type: this.type,
        message
      };
    }
  }

  validate(expression, errorMessage) {
    if (!expression) {
      this.addError(errorMessage);
    }
    return this;
  }

  isRequired() {
    if (isEmptyValue(this.obj)) {
      this.error = {
        value: this.obj,
        type: this.type,
        message: `${this.type} is required`
      };
    }
    return this;
  }

  collect(callback) {
    callback && callback(this.error);
  }
}

export default Base;
