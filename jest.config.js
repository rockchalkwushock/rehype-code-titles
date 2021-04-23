module.exports = {
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
