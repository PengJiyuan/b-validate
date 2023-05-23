import bv from '../es';

it('test not', () => {
  expect(bv('abc').string.uppercase.end.message).toBe('`abc` must be all uppercase');
  expect(bv('abc').string.not.uppercase.end).toBe(null);
  expect(bv('abc').string.not.lowercase.end.message).toBe('[NOT MODE]:`abc` must be all lowercased');
});
