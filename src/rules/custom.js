import Base from './base';

class CustomValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'custom'
    });
  }

  get create() {
    const _this = this;
    return function(callback) {
      callback(_this.obj, _this.addError.bind(_this));
      return _this;
    };
  }
}

export default CustomValidater;

