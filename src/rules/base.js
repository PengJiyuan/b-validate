import { isObject, isString, isEmptyValue, isEmptyArray } from "../is";

/**
 * @param options.trim trim string value
 * @param options.ignoreEmptyString used form type
 */
class Base {
  constructor(obj, options) {
    if (isObject(options) && isString(obj) && options.trim) {
      this.obj = obj.trim();
    } else if (isObject(options) && options.ignoreEmptyString && obj === "") {
      this.obj = undefined;
    } else {
      this.obj = obj;
    }
    this.message = options.message;
    this.type = options.type;
    this.error = null;
  }

  get not() {
    this._not = !this._not;
    return this;
  }

  get isRequired() {
    if (isEmptyValue(this.obj) || isEmptyArray(this.obj)) {
      this.error = {
        value: this.obj,
        type: this.type,
        requiredError: true,
        message:
          this.message ||
          `${this._not ? "[NOT MODE]:" : ""}${this.type} is required`,
      };
    }
    return this;
  }

  get end() {
    return this.error;
  }

  addError(message) {
    if (!this.error && message) {
      this.error = {
        value: this.obj,
        type: this.type,
        message: this.message || (isObject(message) ? message : `${this._not ? "[NOT MODE]:" : ""}${message}`),
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
