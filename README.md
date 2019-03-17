# b-validate
Javascript type validate.

## Highlight

* chainable api
* support custom validator
* support schema validate

## Usage

```bash
npm i b-validate
```

```js
import bv from 'b-validate';

bv(123)
  .number
  .min(2)
  .max(10)
  .collect((error) => {
    console.log(error); // { value: 123, type: 'number', message: '123 is not less than 10' }
    // if no error, error equal to null
  });

// or get error message like this:

const error = bv('b-validate').string.isRequired.match(/validater/).end;
// { value: 'b-validate', type: 'string', message: 'b-validate is not match pattern /validater/' }
```

### Schema

```js
import { Schema } from 'b-validate';

const schema = new Schema({
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
  custom: [{
    validator: (value, callback) => {
      if (value > 10) {
        callback('不能大于10！');
      }
    }
  }]
});

schema.validate({
  name: 'pengjiyuan is a nice boy',
  age: 24,
  email: 'pengjiyuan@bytedance.com',
  ip: '127.0.0.1',
  url: 'https://bytedancecom',
  custom: 20
}, (errors) => {
  console.log(errors);
  /*
   * { 
   *  value: 'pengjiyuan is a nice boy', type: 'string', message: '最大长度是10' },
   *  age: { value: 24, type: 'number', message: '在2和5之间' },
   *  url: { value: 'https://bytedancecom', type: 'url', message: 'url格式不对' },
   *  custom: { value: 20, type: 'custom', message: '不能大于10！' }
   * }
   */
});
```

## Api

### string

#### .maxLength(length: number)

Validate string's max length.

#### .minLength(length: number)

Validate string's min length.

#### .length(length: number)

Validate string's length

#### .match(pattern: regexPattern)

Validate whether string is match regex pattern.

#### .uppercase

Validate whether string is uppercase.

#### .lowercase

Validate whether string is lowercase.

```js
bv('vvvv').string.isRequired.minLength(2).maxLength(10).uppercase.end;
```

### number

#### .min(num: number)

Minimum value.

#### .max(num: number)

Maximum value.

#### .equal(num: number)

Equal to number.

#### .range(min: number, max: number)

In range min ~ max.

#### .positive

Is it a positive number?

#### .negative

Is it a negative number?

```js
bv(123).number.min(2).max(250).positive.end;
```

### array


