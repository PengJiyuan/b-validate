const bv = require('../dist/b-validate.cjs').default;
const { Schema } = require('../dist/b-validate.cjs');

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1200);
    }, 1000);
  });
}

// bv()
//   .string
//   .isRequired
//   .minLength(2)
//   .maxLength(15)
//   .match(/peng/)
//   .collect((error) => {
//     console.log(error);
//   });

// bv()
//   .number
//   .isRequired
//   .positive
//   .range(2, 20)
//   .collect((error) => {
//     console.log(error);
//   });

bv([])
  .array
  .isRequired
  .collect((error) => {
    console.log(error);
  });

// bv({})
//   .object
//   .isRequired
//   .hasKeys(['a', 'b'])
//   .collect((err) => {
//     console.log(err);
//   });

// console.log(bv(true).boolean.true.end);

// console.log(bv('pengjiyuan@bytedance.com').type.email.end);

// console.log(bv('https://www.bytedance.com').type.url.end);

// console.log(bv('127.0.0.13').type.ip.end);
// console.log(Schema);

const a = new Schema({
  name: [{
    type: 'string',
    match: /^[a-zA-Z][a-zA-Z0-9_-]{1,64}$/g,
    message: '正则错误'
  }]
});

// let i = 0;
// let timer = setInterval(() => {
//   if (i > 5) {
//     clearInterval(timer);
//   }
//   a.validate({
//     name: 'aaa',
//     age: undefined,
//     email: '', // 'pengjiyuan@bytedance.com'
//     ip: '127.0.0.1',
//     url: 'https://bytedance.com',
//     array: undefined,
//     custom: 1234
//   }, (errors) => {
//     console.log(errors);
//   });
// }, 1000)

// console.log( bv('b-validate').string.isRequired.match(/validater/).end);
