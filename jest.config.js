module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/index.ts'],
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
}
