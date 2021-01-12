module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/apollo/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@shared/(.*)$': '<rootDir>/src/components/shared/$1',
    '^@containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@namespace/(.*)$': '<rootDir>/src/core/typings/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@secure-console/(.*)$': '<rootDir>/src/helpers/secure-console/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@actions/(.*)$': '<rootDir>/src/store/actions/$1',
  },
};
