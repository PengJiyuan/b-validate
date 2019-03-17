const bv = require('../dist/b-validate');

bv('')
  .string
  .isRequired()
  .minLength(2)
  .maxLength(15)
  .match(/peng/)
  .collect((error) => {
    console.log(error);
  });

bv(12)
  .number
  .isRequired()
  .range(2, 20)
  .positive()
  .collect((error) => {
    console.log(error);
  });
