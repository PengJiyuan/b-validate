import bv from '../src';

it('array type', () => {
  expect(bv([]).array.end).toBe(null);
  expect(bv('12').array.end.message).toBe('Expect array type but got `12`');
});

it('array required', () => {
  expect(bv().array.isRequired.end.message).toBe('array is required');
  expect(bv([]).array.isRequired.end).toBe(null);
});

it('array.length', () => {
  expect(bv([1, 2]).array.length(2).end).toBe(null);
  expect(bv([1, 2]).array.length(3).end.message).toBe('Expect array length 3 but got 2');
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
  expect(bv([1]).array.empty.end.message).toBe('Expect empty array but got [1]')
});
