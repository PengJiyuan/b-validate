const opt = Object.prototype.toString;

export function isArray(obj) {
  return opt.call(obj) === '[object Array]';
}

export function isObject(obj) {
  return opt.call(obj) === '[object Object]';
}

export function isString(obj) {
  return opt.call(obj) === '[object String]';
}

export function isNumber(obj) {
  return opt.call(obj) === '[object Number]' && obj === obj;
}

export function isBoolean(obj) {
  return opt.call(obj) === '[object Boolean]';
}

export function isEmptyValue(obj) {
  return obj === undefined || obj === null || obj === '';
}

export function isEmptyArray(obj) {
  return isArray(obj) && !obj.length;
}

export function isEmptyObject(obj) {
  return isObject(obj) && !Object.keys(obj).length;
}
