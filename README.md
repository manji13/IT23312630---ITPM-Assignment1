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
│   └── tests.spec.js       # Main test file (37 tests)
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

The automation suite performs **37 tests** across multiple categories:

| Test Type | Positive | Negative | Subtotal |
|:----------|:---------|:---------|:---------|
| 🔧 **Functional Tests** | 24 | 11 | **35** |
| 🎨 **UI Tests** | 1 | 1 | **2** |
| 📊 **Total** | **25** | **12** | **37** |

### Test Categories Breakdown:

- **Positive Functional Tests (24)**: Verify correct translations for valid Singlish inputs
- **Positive UI Tests (1)**: Real-time translation behavior and interface updates
- **Negative Functional Tests (11)**: Error handling for malformed inputs, abbreviations, URLs, and edge cases
- **Negative UI Tests (1)**: Input field overflow and performance testing

---

## 📊 Test Results & Artifacts

- **Screenshots**: Saved automatically in the `results/` folder for all negative tests and failures
- **HTML Reports**: Generated in the `playwright-report/` directory with detailed execution logs
- **Console Logs**: Detailed test execution information visible in the terminal output
- **Test IDs**: Each test has a unique identifier (e.g., `Pos_Fun_0001`, `Neg_UI_0001`)

---

## 🔧 Configuration

| Setting | Value |
|:--------|:------|
| **Target Website** | https://www.swifttranslator.com/ |
| **Default Browser** | Chromium |
| **Test Timeout** | 30 seconds |
| **Translation Wait Time** | 2 seconds |
| **Typing Delay (UI Tests)** | 100ms per character |
| **Failure Handling** | Automatic screenshots for negative tests and failures |

---

## 📝 Notes

- **Internet Required**: Tests require an active internet connection to access the live website
- **First Run**: The first execution may be slightly slower due to browser setup
- **Browser Support**: Tests are configured for Chromium, but can be extended to Firefox and WebKit
- **Real-time Testing**: UI tests simulate realistic typing behavior with character-by-character input
- **Negative Tests**: Designed to verify the system properly handles edge cases and invalid inputs

---

## 🐛 Troubleshooting

If tests fail, please check the following:

1. ✅ Check your internet connection
2. ✅ Verify the website is accessible manually at https://www.swifttranslator.com/
3. ✅ Run with the `--headed` flag to see what is happening on screen
4. ✅ Update Playwright dependencies:
```bash
npx playwright install --with-deps
```

### Common Issues

| Issue | Solution |
|:------|:---------|
| **Browser not found** | Run `npx playwright install` |
| **Test timeout** | Increase `WAIT_TIME` constant in test file |
| **Network errors** | Ensure stable internet connection and check website availability |
| **Screenshot issues** | Verify `results/` directory has write permissions |
| **Translation mismatch** | Website may have updated translation logic - verify manually |

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Swift Translator Website](https://www.swifttranslator.com/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright Test Assertions](https://playwright.dev/docs/test-assertions)

---

## 📄 License

This project is created for academic purposes as part of IT3040 - IT Project Management coursework at SLIIT.

---

## 📞 Contact

For questions or issues related to this project:

- **Student**: H.K.M KAVISHAN
- **Student ID**: IT23312630
- **Course**: IT3040 - IT Project Management

---

**Created by:** H.K.M KAVISHAN (IT23312630)  
**Date:** January 2026  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT)