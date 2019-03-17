import StringValidater from './rules/string';
import NumberValidater from './rules/number';
import ArrayValidater from './rules/array';
import ObjectValidater from './rules/object';

function validate(obj, options) {
  return {
    string: new StringValidater(obj, options),
    number: new NumberValidater(obj, options),
    array: new ArrayValidater(obj, options),
    object: new ObjectValidater(obj, options),
  };
}

export default validate;
