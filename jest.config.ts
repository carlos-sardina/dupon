import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: ['./src/**/*.tsx', '!**/index.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/main.tsx', '<rootDir>/src/App.tsx'],
  moduleNameMapper: {
    '^@test-utils$': '<rootDir>/src/testUtils.ts',
  },
};

export default config;
