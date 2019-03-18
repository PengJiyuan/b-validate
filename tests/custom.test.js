import bv from '../src';

it('custom create', () => {
  const validator = bv('123').custom.create((value, callback) => {
    if (value !== '234') {
      callback('Expect 234 but got 123!!!');
    }
  });
  expect(validator.end.message).toBe('Expect 234 but got 123!!!');
});
