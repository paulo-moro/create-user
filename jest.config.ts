export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/infra/db/typeorm/**',
    '!<rootDir>/src/presentation/protocols/**',
    '!<rootDir>/src/test/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/src/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}
;
