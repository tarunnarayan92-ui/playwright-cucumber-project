export default {
  default: {
    require: [
      "features/step-definitions/**/*.ts",
      "features/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ]
  }
};