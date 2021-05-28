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

it('custom validate strict', () => {
  bv('123', { strict: true }).custom.validate(
    (value, callback) => {
      if (value !== '234') {
        setTimeout(() => {
          callback('Expect 234 but got 123!!!');
        }, 100)
      } else {
        callback();
      }
    },
    (error) => {
      expect(error.message).toBe('Expect 234 but got 123!!!');
    }
  );
});
