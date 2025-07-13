# ✨ Cypress POM Automation Assignment

A lightweight Cypress test suite using the Page‑Object Model to automate **Use Case 1: Create Message‑Box Task**.

---

## ✨ Getting Started

1. **Clone the repo**

   ```bash
   ```

git clone [https://github.com/AbhayKumarVerma/assignmentcypress.git](https://github.com/AbhayKumarVerma/assignmentcypress.git)
cd assignmentcypress

````

2. **Install dependencies**

   ```bash
npm install
````

3. **Start your app**

   Ensure the application runs at `http://localhost:3000`:

   ```bash
   ```

npm start

````

4. **Run tests**

   - **Interactive mode**
     ```bash
npm run cypress:open
````

* **Headless with report**

  ```bash
  ```

npm run cypress\:run

````

---

## ✨ Project Structure

```plaintext
assignmentcypress/
├── cypress/
│   ├── fixtures/
│   │   └── testData.json           # test data inputs
│   ├── downloads/                  # files downloaded during tests
│   ├── integration/                # spec files
│   │   ├── useCase1.spec.js
│   │   └── useCase2.spec.js
│   ├── plugins/
│   │   └── index.js                # plugin setup
│   └── support/
│       ├── pages/                  # Page Object classes
│       ├── commands.js             # custom commands (login, logout)
│       ├── e2e.js                  # global setup
│       └── index.js                # legacy support import
├── cypress.config.js               # Cypress configuration
├── package.json                    # scripts & dependencies
└── README.md                       # this file
````

---

## ✨ Test Report

After running headless tests (`npm run cypress:run`), view the HTML report at:

```
mochawesome-report/mochawesome.html
```

---

C:\Users\abhay verma\OneDrive\Pictures\Screenshots\Screenshot 2025-07-11 224622.png
C:\Users\abhay verma\OneDrive\Pictures\Screenshots\Screenshot 2025-07-11 224631.png

Let me know if you need anything.

---
© 2025 Abhay Kumar Verma  
