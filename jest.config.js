/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom', // нужно для тестов компонентов React
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // сюда добавим jest-dom и прочие утилиты
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json',
        isolatedModules: true,
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // теперь ищет от корня проекта
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/', // не трогать зависимости
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/', // не тестировать Next-сборку
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // собирать покрытие только из src
    '!src/**/*.d.ts',
  ],
};
