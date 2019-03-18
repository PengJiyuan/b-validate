import bv from '../src';

it('object type', () => {
  expect(bv({}).object.end).toBe(null);
  expect(bv('12').object.end.message).toBe('Expect object type but got `12`');
});

it('object required', () => {
  expect(bv().object.isRequired.end.message).toBe('object is required');
  expect(bv({}).object.isRequired.end).toBe(null);
});

it('object.deepEqual', () => {
  expect(bv({a: 1, b: 2}).object.deepEqual({a: 1, b: 2}).end).toBe(null);
  expect(bv({a: 1, b: 2}).object.deepEqual({a: 1, b: 3}).end.message).toBe('{"a":1,"b":2} is not deep equal with {"a":1,"b":3}');
});

it('object.hasKeys', () => {
  expect(bv({a: 1, b: 2}).object.hasKeys(['a', 'b']).end).toBe(null);
  expect(bv({a: 1, b: 2}).object.hasKeys(['a', 'b', 'c']).end.message).toBe('{"a":1,"b":2} is not has keys a,b,c');
});

it('object.empty', () => {
  expect(bv({}).object.empty.end).toBe(null);
  expect(bv({a: 1}).object.empty.end.message).toBe('Expect empty object but got {"a":1}');
});
