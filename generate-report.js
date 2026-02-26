const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Framework": "Playwright + Cucumber",
    "Browser": "Chromium/Firefox/Webkit",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);