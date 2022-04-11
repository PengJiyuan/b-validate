import ValidateMessages from './message';

export type ValidateMessagesTemplateType = typeof ValidateMessages;

export type ValidateMessagesType = Partial<
  {
    [key in keyof ValidateMessagesTemplateType]: ValidateMessagesTemplateType[key] extends string
      ? ValidateMessagesTemplateType[key]
      : Record<keyof ValidateMessagesTemplateType[key], (info) => any | string>;
  }
>;

export type RuleType = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'url' | 'email' | 'ip' | 'type' | 'custom';

export type ValidateOptions = {
  strict?: boolean;
  trim?: boolean;
  ignoreEmptyString?: boolean;
  message?: any;
  type?: RuleType;
  validateMessages?: ValidateMessagesType;
};

export type InnerValidateOptions = ValidateOptions & {
  field?: string;
};

export type CustomValidatorType = (
  value: any,
  callback: (message?: any) => void
) => Promise<void> | void;

export type SchemaRuleType = {
  required?: boolean;
  message?: any;
  validator?: CustomValidatorType;
  type?: RuleType;
  // boolean
  true?: boolean;
  false?: boolean;
  deepEqual?: any; // object or array
  hasKeys?: string[]; // object
  empty?: boolean; // object or array
  includes?: any; // array
  maxLength?: number; // string or array
  minLength?: number; // string or array
  pattern?: RegExp;
  length?: number; // string or array
  uppercase?: boolean;
  lowercase?: boolean;
  // number
  min?: number;
  max?: number;
  equal?: number;
  positive?: boolean;
  negative?: boolean;
};

export type SchemaType = {
  [key: string]: SchemaRuleType[];
};

export type ValidatorError = {
  value: any;
  type: ValidateOptions['type'];
  requiredError?: boolean;
  message?: any;
};
