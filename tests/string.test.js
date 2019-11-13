import bv from '../src';

it('string type', () => {
  expect(bv('12').string.end).toBe(null);
  expect(bv(12, { strict: true }).string.end.message).toBe('Expect string type but got number');
});

it('string required', () => {
  expect(bv('').string.isRequired.end.message).toBe('string is required');
  expect(bv('123').string.isRequired.end).toBe(null);
});

it('string.maxLength', () => {
  expect(bv('123').string.maxLength(2).end.message).toBe('Expect max length 2 but got 3');
  expect(bv('123').string.maxLength(4).end).toBe(null);
});

it('string.minLength', () => {
  expect(bv('123').string.minLength(4).end.message).toBe('Expect min length 4 but got 3');
  expect(bv('123').string.minLength(3).end).toBe(null);
});

it('string.length', () => {
  expect(bv('123').string.length(3).end).toBe(null);
  expect(bv('123').string.length(4).end.message).toBe('Expect length 4 but got 3');
});

it('string.match', () => {
  expect(bv('hello world').string.match(/hello/).end).toBe(null);
  expect(bv('hello world').string.match(/hello-world/).end.message).toBe('`hello world` is not match pattern /hello-world/');
});

it('string.uppercase', () => {
  expect(bv('HELLO WORLD').string.uppercase.end).toBe(null);
  expect(bv('Hello world').string.uppercase.end.message).toBe('Expect `Hello world` to be uppercased');
});

it('string.lowercase', () => {
  expect(bv('hello world').string.lowercase.end).toBe(null);
  expect(bv('Hello world').string.lowercase.end.message).toBe('Expect `Hello world` to be lowercased')
});
