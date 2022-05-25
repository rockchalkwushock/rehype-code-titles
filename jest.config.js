const jestConfig = {
  bail: true,
  collectCoverageFrom: ['src/index.ts'],
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  transform: {},
}

// Why was this changed from CJS to ESM?
// When updating the package.json so Node would understand to execute
// the code as ESM not CJS using "type": "module" the test suite broke
// This was due to Node wanting to execute everything as ESM. Changing
// the configuration to be exported as ESM solved the issue.
export default jestConfig
