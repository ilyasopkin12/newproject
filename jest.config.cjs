const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'CommonJS',
          moduleResolution: 'Node10',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@/(.+)\\.js$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@shared/(.+)\\.js$': '<rootDir>/src/shared/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@app/(.+)\\.js$': '<rootDir>/src/app/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@widgets/(.+)\\.js$': '<rootDir>/src/widgets/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@entities/(.+)\\.js$': '<rootDir>/src/entities/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
  },
};
