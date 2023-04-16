# TalentR-test
# hf3p-mydev-cypress-automation

MyDEV  E2E test suite with Cypress


⚙️ Setup
git clone https://github.com/wascha3/TalentR-test
cd to playwright folder and run npm install

✔️ Run tests

npx playwright test
Viewing the trace: 
npx playwright test login.spec.js --trace on 
npx playwright show-report to show report results
npm run cy:run:web OR cypress run --env device=web


If you installed playwright zip:
import playwright folder and you are good to go

💡 Information
🧪 Tests:
📁 Tests are located in Playwright/tests
📁 Selectors are located in Playwright/page-objects 


💠 IDE setup and recommended extensions
VS Code with following extensions:
ESLint - to keep your code tidy
Add Only - enables to add/remove .only with one click VScode-icons
