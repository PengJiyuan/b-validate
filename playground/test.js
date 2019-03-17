const bv = require('../dist/b-validate');

bv('')
  .string
  .isRequired
  .minLength(2)
  .maxLength(15)
  .match(/peng/)
  .collect((error) => {
    console.log(error);
  });

bv(12)
  .number
  .isRequired
  .positive
  .range(2, 20)
  .collect((error) => {
    console.log(error);
  });

bv(['a', 'b'])
  .array
  .deepEqual(['a', 'b'])
  .collect((error) => {
    console.log(error);
  });

bv({a: 1, b: 2})
  .object
  .hasKeys(['a', 'c'])
  .collect((err) => {
    console.log(err);
  });

console.log(bv(true).boolean.true.end);

console.log(bv('pengjiyuan@bytedance.com').type.email.end);

console.log(bv('https://www.bytedance.com').type.url.end);

console.log(bv('127.0.0.13.3').type.ip.end);