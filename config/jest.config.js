/** @type {import('jest').Config} */
const config = {
  cacheDirectory: "/tmp/jest_rs",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text", "lcov", "clover"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  verbose: true,
};

module.exports = config;
