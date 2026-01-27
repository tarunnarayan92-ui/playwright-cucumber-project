module.exports = {
  default: {
    require: [
      "features/step-definitions/**/*.ts",
      "features/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],
    timeout: 30000  // Increase timeout to 30 seconds for slow operations
  }
};