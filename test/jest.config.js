module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['ts'],
  transform: {
    '^.+\\.(ts|js)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/**/?(*.)spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test', '<rootDir>/log'],
  moduleNameMapper: {
    '@src(.*)$': '<rootDir>/src/$1',
    '@test(.*)$': '<rootDir>/test/$1',
  },
}
