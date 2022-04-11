import bv from '../es';

it('test not', () => {
  expect(bv('abc').string.uppercase.end.message).toBe('Expect `abc` to be uppercased');
  expect(bv('abc').string.not.uppercase.end).toBe(null);
  expect(bv('abc').string.not.lowercase.end.message).toBe('[NOT MODE]:Expect `abc` to be lowercased');
});
