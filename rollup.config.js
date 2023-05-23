const buble = require('@rollup/plugin-buble');
const typescript = require('@rollup/plugin-typescript');

const isDist = process.env.BUILD_TYPE === 'dist';

const plugins = [
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
];

module.exports = isDist
  ? {
      input: './src/index.ts',
      output: [
        {
          file: './dist/b-validate.es.js',
          format: 'es',
        },
        {
          file: './dist/b-validate.cjs.js',
          format: 'cjs',
        },
      ],
      plugins,
    }
  : [
      {
        input: './src/index.ts',
      },
      {
        input: './src/locale/zh-CN.ts',
      },
    ].map((x) => ({
      ...x,
      output: [
        {
          dir: 'es/',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
      plugins,
    }));
