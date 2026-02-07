module.exports = {
  default: {
    paths: ["features/**/*.feature"],

    require: [
      "hooks/**/*.ts",
      "step-definitions/**/*.ts"
    ],

    requireModule: ["ts-node/register"],

    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],

    publishQuiet: true
  }
};