export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  reporters: [
    "default",
    ['jest-junit', { outputDirectory: 'reports', outputName: 'jest-report.xml' }],
  ],
  collectCoverage: true,
  coverageReporters: ["text-summary", "html"],
  coverageDirectory: "reports/coverage",
}
