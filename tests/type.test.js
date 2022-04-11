import bv from '../es';

it('type.email', () => {
  expect(bv('peng@qq.com').type.email.end).toBe(null);
  expect(bv().type.email.end).toBe(null);
  expect(bv('peng@qqcom').type.email.end.message).toBe('`peng@qqcom` is not a email type');
});

it('type.url', () => {
  expect(bv('https://abc.com').type.url.end).toBe(null);
  expect(bv().type.url.end).toBe(null);
  expect(bv('www.abc.com').type.url.end.message).toBe('`www.abc.com` is not a url type');
});

it('type.ip', () => {
  expect(bv('127.0.0.1').type.ip.end).toBe(null);
  expect(bv().type.ip.end).toBe(null);
  expect(bv('123.3333.333.3333').type.ip.end.message).toBe('`123.3333.333.3333` is not a ip type');
});

it('ignoreEmptyString', () => {
  expect(bv('').type.ip.end.message).toBe('`` is not a ip type');
  expect(bv('', { ignoreEmptyString: true }).type.ip.end).toBe(null);
});
