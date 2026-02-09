module.exports = {
  default: {
    require: [
      "step-definitions/**/*.ts",
      "hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress", "html:reports/cucumber-report.html"],
    paths: ["features/**/*.feature"],
    parallel: 3,   // number of workers
    worldParameters: {
      browser: process.env.BROWSER || "chromium"
    }
  }
};