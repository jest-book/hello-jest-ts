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
  reporters: [
    "default",
    ['jest-junit', { outputDirectory: 'reports', outputName: 'jest-report.xml' }],
  ]
}
