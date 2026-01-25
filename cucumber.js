module.exports = {
  default: {
    require: [
      "features/step-definitions/**/*.js",
      "features/hooks/**/*.js"
    ],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ]
  }
};