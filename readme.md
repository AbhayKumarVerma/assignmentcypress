# ✨ Cypress POM Automation Assignment

A lightweight Cypress test suite using the Page‑Object Model to automate **Use Case 1: Create Message‑Box Task** against an existing application.

---

## ✨ Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/AbhayKumarVerma/assignmentcypress.git
   cd assignmentcypress
   ```

2. **Install dependencies**  
   ```bash
   npm install
   
   npm install --save-dev cypress mochawesome cypress-mochawesome-reporter
   ```

4. **Start the application**  
   Ensure the app is running at `http://localhost:3000`:  
   ```bash
   npm start
   ```

5. **Run the Cypress tests**  
   - **Interactive mode**:  
     ```bash
     npm run cypress:open
     ```  
   - **Headless mode (with HTML report)**:  
     ```bash
     npm run cypress:run
   ```

---

## ✨ Project Structure

```
assignmentcypress/
├── cypress/
│   ├── fixtures/           # testData.json
│   ├── downloads/          # downloaded files during tests
│   ├── integration/        # spec files
│   │   ├── useCase1.spec.js
│   │   └── useCase2.spec.js
│   ├── plugins/            # Cypress plugins (index.js)
│   └── support/
│       ├── pages/          # Page Object classes
│       ├── commands.js     # cy.login(), cy.logout()
│       ├── e2e.js          # global setup
│       └── index.js        # legacy support imports
├── cypress.config.js       # Cypress configuration
├── package.json            # scripts & dependencies
└── README.md               # this file
```

---

## ✨ Test Report

After headless execution, the HTML report is generated at:

```
mochawesome-report/
└── mochawesome.html
```

> Double‑click **mochawesome.html** to view the results in your browser.

---

## ✨ Screenshots

1. **Login Flow**  
   ![Screenshot 1](https://github.com/user-attachments/assets/6cdbd54c-4e0e-49e2-a574-0bbd44b55a4a)

2. **Task Creation**  
   ![Screenshot 2](https://github.com/user-attachments/assets/87c59a9a-4cb0-4106-be23-0892a9b8549a)

---
Good luck! let me know if you need anything.
---
© 2025 Abhay Kumar Verma
