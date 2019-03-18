import { Schema } from '../src';

it('test schema', () => {
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
      positive: true,
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
    email: 'peng@qq.com',
    ip: '127.0.0.1',
    url: 'https://bytedance.com',
    custom: 20
  }, (errors) => {
    expect(Object.keys(errors)).toEqual(['name', 'age', 'custom']);
    expect(errors.name.message).toBe('最大长度是10');
    expect(errors.age.message).toBe('在2和5之间');
    expect(errors.custom.message).toBe('不能大于10！');
  });

  schema.validate('not valid, will ignore', (errors) => {
    expect(errors).toBe(null);
  });
});
