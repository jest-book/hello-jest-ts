export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "./jestSetup.ts"
  ]
}
