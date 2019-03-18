import bv from '../src';

it('type.email', () => {
  expect(bv('peng@qq.com').type.email.end).toBe(null);
  expect(bv('peng@qqcom').type.email.end.message).toBe('Expect type email but got `peng@qqcom`');
});

it('type.url', () => {
  expect(bv('https://abc.com').type.url.end).toBe(null);
  expect(bv('www.abc.com').type.url.end.message).toBe('Expect type url but got `www.abc.com`');
});

it('type.ip', () => {
  expect(bv('127.0.0.1').type.ip.end).toBe(null);
  expect(bv('123.3333.333.3333').type.ip.end.message).toBe('Expect type ip but got `123.3333.333.3333`');
});
