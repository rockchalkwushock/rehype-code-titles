module.exports = {
  bail: true,
  collectCoverageFrom: ['src/index.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
}
