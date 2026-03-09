export default {
  default: {
    require: [
      "step-definitions/**/*.ts",
      "hooks/**/*.ts"
    ],

    requireModule: ["ts-node/register"],

    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ],

    formatOptions: {
      resultsDir: "reports/allure-results"
    },

    paths: ["features/**/*.feature"],

    parallel: 3,

    publishQuiet: true,

    failFast: false
  }
};