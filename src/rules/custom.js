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
      let resolve;

      let ret = (function () {
        return new Promise((res) => {
          resolve = res;
        }).then(() => {
          callback && callback(_this.error);
        });
      })();

      if (validator) {
        validator(_this.obj, (message) => {
          _this.addError.call(_this, message);
          resolve && resolve();
        });

        return [ret, _this];
      }
    };
  }
}

export default CustomValidater;

