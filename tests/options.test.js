import bv from '../src';

it('option.trim', () => {
  expect(bv(' 123').string.match(/^123$/).end.message).toBe('` 123` is not match pattern /^123$/');
  expect(bv(' 123', {trim: true}).string.match(/^123$/).end).toBe(null);
});

it('option.message', () => {
  expect(bv('12', { strict: true }).number.end.message).toBe('Expect number type but got string');
  expect(bv('12', {message: '请输入数字格式', strict: true}).number.end.message).toBe('请输入数字格式');
});
