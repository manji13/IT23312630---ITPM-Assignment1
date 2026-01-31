# Swift Translator Test Automation

**Student ID:** IT23312630  
**Name:** H.K.M KAVISHAN  
**Course:** IT3040 - IT Project Management  

## 📋 Project Overview
Automated testing for Swift Translator website using Playwright. Tests cover Singlish to Sinhala translation functionality with positive, negative, and UI test cases.

## 🏗️ Project Structure
├── tests/ # Test files
│ └── tests.spec.js # Main test file (35+ tests)
├── test-results/ # Test execution results
├── playwright-report/ # HTML reports
├── results/ # Screenshots and outputs
├── playwright.config.js # Playwright configuration
└── package.json # Dependencies


## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
npx playwright install

2. Run Tests (Easiest Way)
npx playwright test --project=chromium --headed

3. View Results
npx playwright show-report

▶️ Running Tests
Basic Commands
# Run all tests with visible browser
npx playwright test --project=chromium --headed

# Run all tests headless (in background)
npx playwright test

# Run specific test file
npx playwright test tests/tests.spec.js

# Run with HTML report
npx playwright test --reporter=html

Test Categories
The test suite includes:

24 Positive Tests: Verify correct translations

11 Negative Tests: Test error cases

2 UI Tests: Check interface behavior

📊 Test Results
Screenshots: Saved in results/ folder

HTML Reports: Generated in playwright-report/

Detailed Logs: View in terminal output

🔧 Configuration
Browser: Chromium (default)

Test Timeout: 30 seconds

Screenshots: Enabled for failures

📝 Notes
Tests target: https://www.swifttranslator.com/

Requires internet connection

First run may be slow due to browser setup

🐛 Troubleshooting
If tests fail:

Check internet connection

Verify website is accessible

Run with --headed flag to see what happens

Update Playwright: npx playwright install --with-deps"# IT23312630---ITPM-Assignment1" 
