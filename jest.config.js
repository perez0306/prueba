module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTest.js"],
  moduleNameMapper: {
    "\\.(style.ts|css|scss|png|svg|ttf|gif|jpeg|jpg)$":
      "<rootDir>/src/__mocks__/styleMock.js",
    "\\.svg": "<rootDir>/src/__mocks__/svgrMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["/node_modules/*"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
