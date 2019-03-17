import buble from 'rollup-plugin-buble';

const config = {
  input: './src/index.js',
  output: {
    file: './dist/b-validate.js',
    format: 'es'
  },
  external: ['lodash.isequal'],
  plugins: [
    buble({objectAssign: true})
  ]
};

export default config;
