import bv from '../es';

it('array type', () => {
  expect(bv([]).array.end).toBe(null);
  expect(bv('12', { strict: true }).array.end.message).toBe('`12` is not a array type');
});

it('array required', () => {
  expect(bv().array.isRequired.end.message).toBe('array is required');
  expect(bv([]).array.isRequired.end.message).toBe('array is required');
});

it('array.length', () => {
  expect(bv([1, 2]).array.length(2).end).toBe(null);
  expect(bv([1, 2]).array.length(3).end.message).toBe('The `[1,2]` length is not equal to 3');
});

it('array.minLength', () => {
  expect(bv([1, 2]).array.minLength(2).end).toBe(null);
  expect(bv([1, 2]).array.minLength(3).end.message).toBe('The `[1,2]` length is not greater than 3');
});

it('array.maxLength', () => {
  expect(bv([1, 2]).array.maxLength(3).end).toBe(null);
  expect(bv([1, 2]).array.maxLength(1).end.message).toBe('The `[1,2]` length is not less than 1');
});

it('array.includes', () => {
  expect(bv([1, 2, 3]).array.includes([1, 2]).end).toBe(null);
  expect(bv([1, 2, 3]).array.includes([1, 4]).end.message).toBe('[1,2,3] is not includes [1,4]');
});

it('array.deepEqual', () => {
  expect(bv([1, 2, 3]).array.deepEqual([1, 2, 3]).end).toBe(null);
  expect(bv([1, 2, 3, 4]).array.deepEqual([1, 2, 3]).end.message).toBe('[1,2,3,4] is not deep equal with [1,2,3]');
});

it('array.empty', () => {
  expect(bv([]).array.empty.end).toBe(null);
  expect(bv([1]).array.empty.end.message).toBe('`[1]` is not an empty array');
});
