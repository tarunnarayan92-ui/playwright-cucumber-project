module.exports = {
  default: {
    require: ["step-definitions/**/*.ts", "hooks/**/*.ts"],
    requireModule: ["ts-node/register"],

    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter",
    ],

    formatOptions: {
      resultsDir: "reports/allure-results",
    },

    paths: ["features/**/*.feature"],

    publishQuiet: true, // prevents silent skip issues
    failFast: false, // ensures detection continues

    parallel: 3,

    worldParameters: {
      browser: process.env.BROWSER || "chromium",
    },
  },
};
