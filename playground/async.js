const bv = require('../dist/b-validate.cjs').default;
const { Schema } = require('../dist/b-validate.cjs');

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1200);
    }, 1000);
  });
}

bv(1234).custom.validate(async (value, callback) => {
    const a = await api();
    if (value > a) {
      callback(`Must < ${a}`);
    }
  }, (errors) => {
    console.log(errors);
  });
