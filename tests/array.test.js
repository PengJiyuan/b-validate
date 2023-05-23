import bv from '../es';

it('array type', () => {
  expect(bv([]).array.end).toBe(null);
  expect(bv('12', { strict: true }).array.end.message).toBe('value is not a array type');
});

it('array required', () => {
  expect(bv().array.isRequired.end.message).toBe('value is required');
  expect(bv([]).array.isRequired.end.message).toBe('value is required');
});

it('array.length', () => {
  expect(bv([1, 2]).array.length(2).end).toBe(null);
  expect(bv([1, 2]).array.length(3).end.message).toBe('value must be exactly 3 in length');
});

it('array.minLength', () => {
  expect(bv([1, 2]).array.minLength(2).end).toBe(null);
  expect(bv([1, 2]).array.minLength(3).end.message).toBe('value cannot be less than 3 in length');
});

it('array.maxLength', () => {
  expect(bv([1, 2]).array.maxLength(3).end).toBe(null);
  expect(bv([1, 2]).array.maxLength(1).end.message).toBe('value cannot be greater than 1 in length');
});

it('array.includes', () => {
  expect(bv([1, 2, 3]).array.includes([1, 2]).end).toBe(null);
  expect(bv([1, 2, 3]).array.includes([1, 4]).end.message).toBe('value is not includes [1,4]');
});

it('array.deepEqual', () => {
  expect(bv([1, 2, 3]).array.deepEqual([1, 2, 3]).end).toBe(null);
  expect(bv([1, 2, 3, 4]).array.deepEqual([1, 2, 3]).end.message).toBe('value is not deep equal with [1,2,3]');
});

it('array.empty', () => {
  expect(bv([]).array.empty.end).toBe(null);
  expect(bv([1]).array.empty.end.message).toBe('value is not an empty array');
});
