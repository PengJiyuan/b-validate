import { isArray, isObject } from './is';
import StringValidater from './rules/string';
import NumberValidater from './rules/number';
import ArrayValidater from './rules/array';
import ObjectValidater from './rules/object';
import BooleanValidater from './rules/boolean';
import TypeValidater from './rules/type';
import CustomValidater from './rules/custom';

class Validate {
  constructor(obj, options) {
    this.string = new StringValidater(obj, options);
    this.number = new NumberValidater(obj, options);
    this.array = new ArrayValidater(obj, options);
    this.object = new ObjectValidater(obj, options);
    this.boolean = new BooleanValidater(obj, options);
    this.type = new TypeValidater(obj, options);
    this.custom = new CustomValidater(obj, options);
  }
}

export default (obj, options) => {
  return new Validate(obj, options);
};

export class Schema {
  constructor(schema, options = {}) {
    this.schema = schema;
    this.options = options;
  }

  validate(values, callback) {
    if (!isObject(values)) {
      return;
    }
    const promises = [];
    let errors = null;
    function setError(key, error) {
      if (!errors) {
        errors = {};
      }
      if (!errors[key] || error.requiredError) {
        errors[key] = error;
      }
    }
    if (this.schema) {
      Object.keys(this.schema).forEach((key) => {
        if (isArray(this.schema[key])) {
          this.schema[key].forEach((rule) => {
            const type = rule.type;
            const message = rule.message;
            let bv;
            if (!type && !rule.validator) {
              throw `You must specify a type to field ${key}!`;
            }
            if (type === 'email' || type === 'url' || type === 'ip') {
              bv = new Validate(values[key], { ...this.options, message }).type[type];
            } else if(rule.validator) {
              bv = new Validate(values[key], { ...this.options, message }).custom.validate(rule.validator);
              if (Object.prototype.toString.call(bv) === '[object Array]' && bv[0].then) {
                promises.push({
                  function: bv[0],
                  _this: bv[1],
                  key
                });
              } else if (bv) {
                setError(key, bv);
              }
              return;
            } else {
              bv = new Validate(values[key], { ...this.options, message })[type];
            }
            Object.keys(rule).forEach(r => {
              if (rule.required) {
                bv = bv.isRequired;
              }
              if (bv[r] && rule[r] && typeof bv[r] === 'object') {
                bv = bv[r];
              }
              if (bv[r] && rule[r] !== undefined  && typeof bv[r] === 'function') {
                bv = bv[r](rule[r]);
              }
            });
            bv.collect((error) => {
              if (error) {
                setError(key, error);
              }
            });
          });
        }
      });
    }
    if (promises.length > 0) {
      Promise.all(promises.map(a => a.function)).then(() => {
        promises.forEach((promise) => {
          if (promise._this.error) {
            setError(promise.key, promise._this.error);
          }
        });
        callback && callback(errors);
      });
    } else {
      callback && callback(errors);
    }
  }
}
