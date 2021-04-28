const jestConfig = {
  bail: true,
  collectCoverageFrom: ['src/index.ts'],
  globals: {
    'ts-jest': {
      // This is needed because we must run "allowJS": true
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  // Both of these lines are needed as well.
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
}

// Why was this changed from CJS to ESM?
// When updating the package.json so Node would understand to execute
// the code as ESM not CJS using "type": "module" the test suite broke
// This was due to Node wanting to execute everything as ESM. Changing
// the configuration to be exported as ESM solved the issue.
export default jestConfig
