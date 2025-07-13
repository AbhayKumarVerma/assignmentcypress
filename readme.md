# ✨ Cypress POM Automation Assignment

A lightweight Cypress test suite using the Page‑Object Model to automate **Use Case 1: Create Message‑Box Task** against an existing application.

---

## ✨ Getting Started

1. **Clone the repository**

   
bash
   git clone https://github.com/AbhayKumarVerma/assignmentcypress.git
   cd assignmentcypress


2. **Install dependencies**

   
bash
   npm install


3. **Start the application**

   Ensure the app is running at http://localhost:3000:

   
bash
   npm start


4. **Run the Cypress tests**

   * **Interactive mode**:

     
bash
     npm run cypress:open


   * **Headless mode (with HTML report)**:

     
bash
     npm run cypress:run


---

## ✨ Project Structure

plaintext
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


---

## ✨ Test Report

After headless execution, open the generated report:

plaintext
mochawesome-report/
└── mochawesome.html


Simply double-click **mochawesome.html** to view results in your browser.

---
Screenshots:1
<img width="1036" height="215" alt="Screenshot 2025-07-11 224631" src="https://github.com/user-attachments/assets/6cdbd54c-4e0e-49e2-a574-0bbd44b55a4a" />
Screenshots:2
<img width="1855" height="1125" alt="Screenshot 2025-07-11 224607" src="https://github.com/user-attachments/assets/87c59a9a-4cb0-4106-be23-0892a9b8549a" />

Good luck! let me know if you need anything.
---
© 2025 Abhay Kumar Verma
