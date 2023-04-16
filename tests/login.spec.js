// @ts-nocheck
const { test, expect } = require('@playwright/test');
import login from '../page-objects/login-sel'

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.welcometothejungle.com/fr/me/settings/account");
});


test.describe('Check the login screen', () => {
  test('Check the inputs control by clicking on the login button without filling the inputs', async ({ page }) => {
    await page.click(login.loginButton);

    // Wait until the control of 
    const requiredField = await page.$(login.emailInputControlMessage);
    expect(requiredField).toBeTruthy();

    // Wait until the control of password entry is displayed
    const passwordEntry = await page.$(login.passwordInputControlMessage);
    expect(passwordEntry).toBeTruthy();

  });

  test('Check the login functionnality by filling an invalid email ', async ({ page }) => {
    await page.fill(login.emailInput, 'inqom.qaautomationapplicant@gmail.comm');
    await page.fill(login.passwordInput, 'o5N,d5ZR@R7^');
    await page.click(login.loginButton);
    const errorMessage = await page.waitForSelector(login.incorrectEmailOrPasswordError);
    await expect(errorMessage).toBeTruthy();
    const errorMessageContent = await errorMessage.textContent();
    console.log(errorMessageContent);
    expect(errorMessageContent).toEqual("Email ou mot de passe incorrect");

  })

  test('Check the login functionnality by filling an invalid password ', async ({ page }) => {
    await page.fill(login.emailInput, 'inqom.qaautomationapplicant@gmail.com');
    await page.fill(login.passwordInput, 'o5N,d5ZR@R7^z');
    await page.click(login.loginButton);
    const errorMessage = await page.waitForSelector(login.incorrectEmailOrPasswordError);
    await expect(errorMessage).toBeTruthy();
    const errorMessageContent = await errorMessage.textContent();
    console.log(errorMessageContent);
    expect(errorMessageContent).toEqual("Email ou mot de passe incorrect");

  })

  test('Upload profile picture', async ({ page }) => {
    await page.fill(login.emailInput, 'inqom.qaautomationapplicant@gmail.com');
    await page.fill(login.passwordInput, 'o5N,d5ZR@R7^');
    await page.click(login.loginButton);
   
    await page.click(login.deleteButton);
    
    await page.setInputFiles('input[type="file"]', './files/picture.jpg')
    
    // Verify that the current URL is the account settings page
    const currentUrl = page.url();
    expect(currentUrl).toBe('https://www.welcometothejungle.com/fr/me/settings/account');

    // Submit the form 
    await page.click(login.submitButton);

  })
})
