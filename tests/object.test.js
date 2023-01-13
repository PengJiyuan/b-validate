import bv from '../es';

it('object type', () => {
  expect(bv({}).object.end).toBe(null);
  expect(bv('12', { strict: true }).object.end.message).toBe('value is not a object type');
});

it('object required', () => {
  expect(bv().object.isRequired.end.message).toBe('value is required');
  expect(bv({}).object.isRequired.end).toBe(null);
});

it('object.deepEqual', () => {
  expect(bv({ a: 1, b: 2 }).object.deepEqual({ a: 1, b: 2 }).end).toBe(null);
  expect(bv({ a: 1, b: 2 }).object.deepEqual({ a: 1, b: 3 }).end.message).toBe(
    'value is not deep equal to expected value'
  );
});

it('object.hasKeys', () => {
  expect(bv({ a: 1, b: 2 }).object.hasKeys(['a', 'b']).end).toBe(null);
  expect(bv({ a: 1, b: 2 }).object.hasKeys(['a', 'b', 'c']).end.message).toBe('value does not contain required fields');
});

it('object.empty', () => {
  expect(bv({}).object.empty.end).toBe(null);
  expect(bv({ a: 1 }).object.empty.end.message).toBe('value is not an empty object');
});
