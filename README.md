# Swift Translator Test Automation 🇱🇰

> **Assignment:** IT3040 - IT Project Management  
> **Project:** ITPM-Assignment1

## 👤 Student Information

| Details | Information |
|:--------|:------------|
| **Student ID** | IT23312630 |
| **Name** | H.K.M KAVISHAN |
| **Course** | IT3040 - IT Project Management |

---

## 📋 Project Overview

This project contains an automated test suite for the [Swift Translator](https://www.swifttranslator.com/) website using **Playwright**. The tests cover Singlish to Sinhala translation functionality, including positive cases, negative scenarios, and UI validations.

## 🏗️ Project Structure
```text
IT23312630---ITPM-Assignment1/
├── tests/                  # Test files
│   └── tests.spec.js       # Main test file (35+ tests)
├── test-results/           # Test execution results
├── playwright-report/      # HTML reports
├── results/                # Screenshots and outputs
├── playwright.config.js    # Playwright configuration
└── package.json            # Dependencies
```

---

## 🚀 Quick Start

### 1. Install Dependencies

Run the following commands to set up the environment:
```bash
npm install
npx playwright install
```

### 2. Run Tests (Easiest Way)

To run the tests and watch the browser execution:
```bash
npx playwright test --project=chromium --headed
```

### 3. View Results

To open the HTML report after testing:
```bash
npx playwright show-report
```

---

## ▶️ Running Tests: Command Reference

| Command | Description |
|:--------|:------------|
| `npx playwright test` | Run all tests in headless mode |
| `npx playwright test --headed` | Run tests with visible browser |
| `npx playwright test --project=chromium` | Run tests on Chromium only |
| `npx playwright test --debug` | Run tests in debug mode |
| `npx playwright test tests/tests.spec.js` | Run specific test file |
| `npx playwright show-report` | Open HTML test report |

---

## 🧪 Test Suite Details

The automation suite performs **37 tests** across three main categories:

| Category | Count | Description |
|:---------|:------|:------------|
| ✅ Positive Tests | 24 | Verify correct translations for valid Singlish inputs |
| ⚠️ Negative Tests | 11 | Test error handling and invalid input scenarios |
| 🎨 UI Tests | 2 | Check interface behavior and element visibility |

---

## 📊 Test Results & Artifacts

- **Screenshots**: Saved automatically in the `results/` folder upon failure
- **HTML Reports**: Generated in the `playwright-report/` directory
- **Logs**: Detailed execution logs are visible in the terminal output

---

## 🔧 Configuration

| Setting | Value |
|:--------|:------|
| **Target Website** | https://www.swifttranslator.com/ |
| **Default Browser** | Chromium |
| **Test Timeout** | 30 seconds |
| **Failure Handling** | Screenshots enabled for failed tests |

---

## 📝 Notes

- **Internet Required**: Tests require an active internet connection to access the live website
- **First Run**: The first execution may be slightly slower due to browser setup
- **Browser Support**: Tests are configured for Chromium, but can be extended to Firefox and WebKit

---

## 🐛 Troubleshooting

If tests fail, please check the following:

1. ✅ Check your internet connection
2. ✅ Verify the website is accessible manually
3. ✅ Run with the `--headed` flag to see what is happening on screen
4. ✅ Update Playwright dependencies:
```bash
npx playwright install --with-deps
```

### Common Issues

- **Browser not found**: Run `npx playwright install`
- **Test timeout**: Increase timeout in `playwright.config.js`
- **Network errors**: Ensure stable internet connection

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Swift Translator Website](https://www.swifttranslator.com/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

---

## 📄 License

This project is created for academic purposes as part of IT3040 coursework.

---

**Created by:** H.K.M KAVISHAN (IT23312630)  
**Date:** January 2026