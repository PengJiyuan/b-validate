import buble from 'rollup-plugin-buble';
import typescript from '@rollup/plugin-typescript';

const isDist = process.env.BUILD_TYPE === 'dist';

const config = {
  input: './src/index.ts',
  output: isDist
    ? [
        {
          file: './dist/b-validate.es.js',
          format: 'es',
        },
        {
          file: './dist/b-validate.cjs.js',
          format: 'cjs',
        },
      ]
    : [
        {
          dir: 'es',
        },
      ],
  // output: {
  //   // file: './dist/b-validate.es.js',
  //   // format: 'es',
  // },
  plugins: [
    typescript({
      compilerOptions: isDist
        ? {}
        : {
            module: 'esnext',
            declaration: true,
            outDir: 'es',
          },
    }),
    buble({ objectAssign: true }),
  ],
};

export default config;
