// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.js',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: './.coverage/',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/playground/',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'node',
    'mjs',
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/'
  ],

  // The regexp pattern Jest uses to detect test files
  testRegex: '.*\\.test\\.js$',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
