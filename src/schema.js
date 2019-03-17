import { isArray } from './is';

class Schema {
  constructor(schema) {
    if (schema) {
      Object.keys(schema).forEach((key) => {
        if (isArray(schema[key])) {
          schema[key].forEach((rule) => {
            console.log(this)
            // const validater = this(values[key])[rule.type];
            // validater.maxLength(10).collect((error) => {
            //   if (error) {
            //     if (errors) {
            //       errors[key] = error;
            //     } else {
            //       errors = {
            //         [key]: error
            //       };
            //     }
            //   }
            // });
          });
        }
      });
    }
  }
}

export default Schema;
