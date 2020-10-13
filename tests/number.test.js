import bv from '../src';

it('number type', () => {
  expect(bv(12).number.end).toBe(null);
  expect(bv('12', { strict: true }).number.end.message).toBe('Expect number type but got string');
});

it('number required', () => {
  expect(bv().number.isRequired.end.message).toBe('number is required');
  expect(bv(123).number.isRequired.end).toBe(null);
});

it('number.min', () => {
  expect(bv(-1).number.min(0).end.message).toBe('`-1` is not greater than `0`');
  expect(bv(2).number.min(1).end).toBe(null);
});

it('number.max', () => {
  expect(bv(2).number.max(1).end.message).toBe('`2` is not less than `1`');
  expect(bv(2).number.max(3).end).toBe(null);
});

it('number.range', () => {
  expect(bv(2).number.range(3, 4).end.message).toBe('`2` is not in range `3 ~ 4`');
  expect(bv(2).number.range(1, 4).end).toBe(null);
});

it('number.equal', () => {
  expect(bv(2).number.equal(2).end).toBe(null);
  expect(bv(2).number.equal(4).end.message).toBe('`2` is not equal to `4`');
});

it('number.positive', () => {
  expect(bv(2).number.positive.end).toBe(null);
  expect(bv(-1).number.positive.end.message).toBe('Expect number to be positive, but got `-1`');
});

it('number.negative', () => {
  expect(bv(-1).number.negative.end).toBe(null);
  expect(bv(2).number.negative.end.message).toBe('Expect number to be negative, but got `2`');
});
