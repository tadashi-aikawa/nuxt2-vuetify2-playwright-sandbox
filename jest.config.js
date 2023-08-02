/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts)$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest",
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFiles: ["<rootDir>/setup-jest.js"],
};

module.exports = config;
