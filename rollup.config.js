import buble from 'rollup-plugin-buble';

const config = {
  input: './src/index.js',
  output: {
    file: './dist/v-validate.js',
    format: 'es'
  },
  plugins: [
    buble()
  ]
};

export default config;
