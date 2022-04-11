import { isObject } from './is';
import { ValidateMessagesType, ValidateMessagesTemplateType } from './interface';

export const mergeTemplate = (
  defaultValidateMessages: ValidateMessagesTemplateType,
  validateMessages: ValidateMessagesType
): ValidateMessagesType => {
  const result = {};

  Object.keys(defaultValidateMessages).forEach((key) => {
    const defaultValue = defaultValidateMessages[key];
    const propsValue = validateMessages && validateMessages[key];

    result[key] = isObject(defaultValue)
      ? {
          ...defaultValue,
          ...propsValue,
        }
      : propsValue || defaultValue;
  });

  return result;
};

export const getTemplate = (validateMessages: ValidateMessagesType, keyPath: string) => {
  const keys = keyPath.split('.');

  let result = validateMessages;

  for (let i = 0; i < keys.length; i++) {
    result = result && result[keys[i]];

    if (result === undefined) {
      return result;
    }
  }

  return result;
};
