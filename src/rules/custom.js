import Base from './base';

class CustomValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'custom'
    });
  }

  get validate() {
    const _this = this;
    return function(validator, callback) {
      let ret;
      if (validator) {
        ret = validator(_this.obj, _this.addError.bind(_this));
        if (validator.constructor.name === 'AsyncFunction') {
          if (callback) {
            ret.then(
              () => {
                callback && callback(_this.error);
              },
              (e) => {
                console.error(e);
              }
            );
          }
          return [ret, _this];
        } else {
          callback && callback(_this.error);
          return this.error;
        }
      }
    };
  }
}

export default CustomValidater;

