const defaultTypeTemplate = '`#{value}` is not a #{type} type';

export default {
  required: '#{field} is required',
  type: {
    ip: defaultTypeTemplate,
    email: defaultTypeTemplate,
    url: defaultTypeTemplate,
    string: defaultTypeTemplate,
    number: defaultTypeTemplate,
    array: defaultTypeTemplate,
    object: defaultTypeTemplate,
    boolean: defaultTypeTemplate,
  },
  number: {
    min: '`#{value}` is not greater than `#{min}`',
    max: '`#{value}` is not less than `#{max}`',
    equal: '`#{value}` is not equal to `#{equal}`',
    range: '`#{value}` is not in range `#{min} ~ #{max}`',
    positive: '`#{value}` is not a positive number',
    negative: '`#{value}` is not a negative number',
  },
  array: {
    length: 'The `#{value}` length is not equal to #{length}',
    minLength: 'The `#{value}` length is not greater than #{minLength}',
    maxLength: 'The `#{value}` length is not less than #{maxLength}',
    includes: '#{value} is not includes #{includes}',
    deepEqual: '#{value} is not deep equal with #{deepEqual}',
    empty: '`#{value}` is not an empty array',
  },
  string: {
    maxLength: 'The `#{value}` length is not greater than #{maxLength}',
    minLength: 'The `#{value}` length is not less than #{minLength}',
    length: 'The `#{value}` length is not equal to #{length}',
    match: '`#{value}` is not match pattern #{pattern}',
    uppercase: 'Expect `#{value}` to be uppercased',
    lowercase: 'Expect `#{value}` to be lowercased',
  },
  object: {
    deepEqual: '`#{value}` is not deep equal with #{deepEqual}',
    hasKeys: '`#{value}` is not has keys #{keys}',
    empty: '`#{value}` is not an empty object',
  },
  boolean: {
    true: 'Expect true but got `#{value}`',
    false: 'Expect false but got `#{value}`',
  },
};
