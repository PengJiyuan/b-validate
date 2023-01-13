import buble from 'rollup-plugin-buble';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';

const isDist = process.env.BUILD_TYPE === 'dist';

const files = glob.sync(`./src/**/*.ts`);

export default {
  input: isDist ? './src/index.ts' : files,
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
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'es',
          //   assetFileNames: ({ name }) => {
          //     const { dir, base } = path.parse(name);
          //     console.log(dir, base, '____________');
          //     return path.join(dir, base);
          //   },
        },
      ],
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
