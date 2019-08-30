import bv from '../src';

it('custom create', () => {
  bv('123').custom.validate((value, callback) => {
    if (value !== '234') {
      callback('Expect 234 but got 123!!!');
    }
  }, (error) => {
    expect(error.message).toBe('Expect 234 but got 123!!!');
  });
});
