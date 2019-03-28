const bv = require('../dist/b-validate.cjs').default;
const { Schema } = require('../dist/b-validate.cjs');

bv('f')
  .string
  .isRequired
  .minLength(2)
  .maxLength(15)
  .match(/peng/)
  .collect((error) => {
    console.log(error);
  });

bv()
  .number
  .isRequired
  .positive
  .range(2, 20)
  .collect((error) => {
    console.log(error);
  });

bv([])
  .array
  .isRequired
  .deepEqual(['a', 'b'])
  .collect((error) => {
    console.log(error);
  });

bv({})
  .object
  .isRequired
  .hasKeys(['a', 'b'])
  .collect((err) => {
    console.log(err);
  });

console.log(bv(true).boolean.true.end);

console.log(bv('pengjiyuan@bytedance.com').type.email.end);

console.log(bv('https://www.bytedance.com').type.url.end);

console.log(bv('127.0.0.13').type.ip.end);

bv(123)
  .custom
  .create((value, callback) => {
    if (value > 250) {
      callback('Must < 250');
    }
  })
  .collect((err) => {
    console.log(err);
  });

console.log(Schema);

new Schema({
  name: [{
    type: 'string',
    required: true,
    message: '必填字段'
  }, {
    type: 'string',
    maxLength: 10,
    message: '最大长度是10'
  }],
  age: [{
    type: 'number',
    min: 2,
    max: 5,
    message: '在2和5之间'
  }],
  email: [{
    type: 'email',
    message: '邮箱格式不对'
  }],
  ip: [{
    type: 'ip',
    message: 'ip格式不对'
  }],
  url: [{
    type: 'url',
    message: 'url格式不对'
  }],
  array: [{
    type: 'array',
    required: true
  }],
  custom: [{
    validator: (value, callback) => {
      if (value > 10) {
        callback('不能大于10！');
      }
    }
  }]
})
.validate({
  name: 'pengjiyuan is a nice boy',
  age: 24,
  email: 'pengjiyuan@bytedance.com',
  ip: '127.0.0.1',
  url: 'https://bytedance.com',
  array: ['1', '2'],
  custom: 20
}, (errors) => {
  console.log(errors);
});

console.log( bv('b-validate').string.isRequired.match(/validater/).end);
