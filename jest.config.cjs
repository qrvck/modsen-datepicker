/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',

    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/mocks/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/__tests__/mocks/styleMock.ts',
    '(assets|models|services)': '<rootDir>/__tests__/mocks/fileMock.ts',
  },

  transform: {
    '^.+\\.(js|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      },
    ],
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.tsx'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],

  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};
