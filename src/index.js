import StringValidater from './rules/string';
import NumberValidater from './rules/number';

function validate(obj, options) {
  return {
    string: new StringValidater(obj, options),
    number: new NumberValidater(obj, options),
  };
}

export default validate;
