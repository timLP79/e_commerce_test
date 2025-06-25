# 🧪 E-commerce Site Tester

[![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-green?logo=playwright)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen?logo=node.js)](https://nodejs.org/)

> This Playwright-based QA test validates that the **first 100 articles** on [Hacker News /newest](https://news.ycombinator.com/newest) are sorted in correct chronological order, from **newest to oldest**.

---

## 🎯 Test Objective

✔️ Navigate through `/newest` and paginate until 100 articles are collected  
✔️ Parse each article's age (e.g., “2 minutes ago”, “1 hour ago”) into minutes  
✔️ Confirm the list is sorted from **newest (smallest number)** to **oldest (largest)**  
✔️ Output validation results via:
- Console summary
- Structured `results.json`
- Playwright HTML report

---

## 🚀 Getting Started

### 📦 1. Clone & Install

```bash
  git clone https://github.com/timLP79/playwright_sorting_validator.git
  cd playwright_sorting_validator
  npm install
```

### ▶️ 2. Run the Test

```bash
  npx playwright test
```

### 📊 3. View the Report

```bash
  npx playwright show-report
```

---

## 📁 Output

- `output/results.json`: JSON file containing titles, timestamps, and calculated age in minutes
- `playwright-report/`: HTML report of the test run
- Console output includes a clear `TEST SUMMARY`

---

## 🧪 Sample Output

```plaintext
--- TEST SUMMARY ---
Articles collected: 112
Articles checked for sort: 100
Youngest article age: 1 minutes
Oldest article age: 65 minutes
Sorted correctly: ✅ YES
```

---

## 🗂 Project Structure

```
.
├── tests/
│   └── hackernews.spec.js     # Playwright test file
├── output/
│   └── results.json                   # Captured article data
├── playwright.config.js               # Test runner config
├── package.json
└── README.md
```

---

## 🧠 What I Learned

- Advanced DOM traversal and selector logic in Playwright
- Real-world pagination and data normalization
- Test reporting with structured output and HTML dashboards
- QA mindset: building validation logic for sort correctness

---

## 🔧 Future Improvements

- Add screenshot capture for failed sort
- Validate other article metadata (author, comments, upvotes)
- Add config options for limit or target page

---

## 📌 Tech Stack

- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript (ES2023)

---

## 📬 Contact

> If you're a hiring manager or recruiter, I’d love to connect!  
📧 timpalacios@u.boisestate.edu  
🔗 [LinkedIn](https://www.linkedin.com/in/tim-palacios/)