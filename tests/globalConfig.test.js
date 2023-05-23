import bv, { Schema } from '../es';
import zhMessages from '../es/locale/zh-CN';

describe('test setGlobalConfig', () => {
  afterEach(() => {
    bv.setGlobalConfig({});
  });

  it('test api setGlobalConfig', (done) => {
    bv.setGlobalConfig({ trim: true, strict: true });

    const schema = new Schema({
      name: [{ type: 'string' }],
    });

    schema.validate({ name: 123 }, (errors) => {
      console.log(errors);
      expect(errors.name.message).toBe('name is not a string type');
      done();
    });

    expect(bv('123').number.end.message).toBe('value is not a number type');
  });
});

describe('validate messages', () => {
  it('test options validateMessages', () => {
    const options = {
      validateMessages: zhMessages,
    };
    expect(bv(undefined, options).array.isRequired.end.message).toBe('value 是必填项');
    expect(bv(12, { strict: true, ...options }).string.end.message).toBe(
      'value 不是合法的文本类型'
    );
    expect(bv(false, options).boolean.true.end.message).toBe('期望是 `true`');
    expect(bv({ a: 1 }, options).object.deepEqual({ b: 1 }).end.message).toBe('value 不等于期望值');
    expect(bv('123', options).string.length(4).end.message).toBe('字符数必须是 4');
    expect(bv([1], options).array.length(4).end.message).toBe('value 个数不等于 4');
    expect(bv(1, options).number.min(4).end.message).toBe('`1` 小于最小值 `4`');
  });

  it('test api bv.messages', () => {
    const schema = new Schema({
      required: [{ required: true, type: 'string' }],
      name: [{ type: 'string', maxLength: 4 }],
      age: [{ type: 'number', min: 4 }],
      email: [{ type: 'email' }],
      ip: [{ type: 'ip' }],
      url: [{ type: 'url' }],
      custom: [
        {
          validator: (value, callback) => {
            if (value > 10) {
              callback('不能大于10！');
            }
          },
        },
      ],
    });
    schema.messages(zhMessages);
    schema.validate(
      {
        required: undefined,
        name: '12345678',
        age: '0',
        email: 'hahhah',
        ip: 'a.0.0.1',
        url: 'aaax',
        custom: 20,
      },
      (errors) => {
        expect(errors.required.message).toBe('required 是必填项');
        expect(errors.name.message).toBe('字符数最多为 4');
        expect(errors.age.message).toBe('`0` 小于最小值 `4`');
        expect(errors.custom.message).toBe('不能大于10！');
        expect(errors.email.message).toBe('email 不是合法的邮箱地址');
        expect(errors.ip.message).toBe('ip 不是合法的 IP 地址');
        expect(errors.url.message).toBe('url 不是合法的 url 地址');
      }
    );
  });

  it('test api setGlobalConfig.validateMessages', () => {
    bv.setGlobalConfig({ validateMessages: zhMessages });
    expect(bv(undefined).array.isRequired.end.message).toBe('value 是必填项');
    expect(bv(12, { strict: true }).string.end.message).toBe('value 不是合法的文本类型');
    expect(bv(false).boolean.true.end.message).toBe('期望是 `true`');
    expect(bv({ a: 1 }).object.deepEqual({ b: 1 }).end.message).toBe('value 不等于期望值');
    expect(bv('123').string.length(4).end.message).toBe('字符数必须是 4');
    expect(bv([1]).array.length(4).end.message).toBe('value 个数不等于 4');
    expect(bv(1).number.min(4).end.message).toBe('`1` 小于最小值 `4`');

    bv.setGlobalConfig({ validateMessages: undefined });
    expect(bv(undefined).array.isRequired.end.message).toBe('value is required');
  });

  it('test api setGlobalConfig.validateMessages', (done) => {
    bv.setGlobalConfig({ validateMessages: zhMessages });

    const schema = new Schema({
      name: [{ required: true, type: 'string' }],
    });
    schema.validate({ name: undefined }, (errors) => {
      expect(errors.name.message).toBe('name 是必填项');
      done();
    });
  });
});
