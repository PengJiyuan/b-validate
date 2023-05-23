import bv from '../es';

it('string type', () => {
  expect(bv('12').string.end).toBe(null);
  expect(bv(12, { strict: true }).string.end.message).toBe('value is not a string type');
});

it('string required', () => {
  expect(bv('').string.isRequired.end.message).toBe('value is required');
  expect(
    bv('', {
      validateMessages: { required: '必须填写' },
    }).string.isRequired.end.message
  ).toBe('必须填写');

  expect(
    bv('', {
      validateMessages: { required: () => '必须填写' },
    }).string.isRequired.end.message
  ).toBe('必须填写');
  expect(bv('123').string.isRequired.end).toBe(null);
});

it('string.maxLength', () => {
  expect(bv('123').string.maxLength(2).end.message).toBe('value cannot be longer than 2 characters');
  expect(bv('123').string.maxLength(4).end).toBe(null);
});

it('string.minLength', () => {
  expect(bv('123').string.minLength(4).end.message).toBe('value must be at least 4 characters');
  expect(bv('123').string.minLength(3).end).toBe(null);
});

it('string.length', () => {
  expect(bv('123').string.length(3).end).toBe(null);
  expect(bv('123').string.length(4).end.message).toBe('value must be exactly 4 characters');
});

it('string.match', () => {
  expect(bv('hello world').string.match(/hello/).end).toBe(null);
  expect(bv('hello world').string.match(/hello-world/).end.message).toBe(
    '`hello world` does not match pattern /hello-world/'
  );
});

it('string.uppercase', () => {
  expect(bv('HELLO WORLD').string.uppercase.end).toBe(null);
  expect(bv('Hello world').string.uppercase.end.message).toBe('`Hello world` must be all uppercase');
});

it('string.lowercase', () => {
  expect(bv('hello world').string.lowercase.end).toBe(null);
  expect(bv('Hello world').string.lowercase.end.message).toBe('`Hello world` must be all lowercased');
});
