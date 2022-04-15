import bv from '../es';

it('boolean type', () => {
  expect(bv(true).boolean.end).toBe(null);
  expect(bv('12', { strict: true }).boolean.end.message).toBe('`12` is not a boolean type');
});

it('boolean required', () => {
  expect(bv().boolean.isRequired.end.message).toBe('boolean is required');
  expect(bv(true).boolean.isRequired.end).toBe(null);
});

it('boolean.true', () => {
  expect(bv(true).boolean.true.end).toBe(null);
  expect(bv(false).boolean.true.end.message).toBe('Expect true but got `false`');
});

it('boolean.false', () => {
  expect(bv(false).boolean.false.end).toBe(null);
  expect(bv(true).boolean.false.end.message).toBe('Expect false but got `true`');
});
