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

  get not() {
    this._not = !this._not;
    return this;
  }

  get isRequired() {
    if (isEmptyValue(this.obj)) {
      this.error = {
        value: this.obj,
        type: this.type,
        message: `${this._not ? '[NOT MODE]:': ''}${this.type} is required`
      };
    }
    return this;
  }

  addError(message) {
    if (!this.error) {
      this.error = {
        value: this.obj,
        type: this.type,
        message: `${this._not ? '[NOT MODE]:': ''}${message}`
      };
    }
  }

  validate(expression, errorMessage) {
    const _expression = this._not ? expression : !expression;
    if (_expression) {
      this.addError(errorMessage);
    }
    return this;
  }

  collect(callback) {
    callback && callback(this.error);
  }
}

export default Base;
