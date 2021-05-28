import Base from './base';

class CustomValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'custom'
    });
    // 如果在new Schema 时候传入了 strict 参数，这里在执行校验的时候必须回调callback以支持异步场景。
    this.strict = options && options.strict;
  }

  // 严格校验，必须执行callback回调
  _validateStrict () {
    const _this = this;
    return function (validator, callback) {
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

  _validateDefault () {
    const _this = this;
    return function (validator, callback) {
      let ret;
      if (validator) {
        ret = validator(_this.obj, _this.addError.bind(_this));
        if (ret && ret.then) {
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

  get validate () {
    if (this.strict) {
      return this._validateStrict();
    }
    return this._validateDefault();
  }
}

export default CustomValidater;

