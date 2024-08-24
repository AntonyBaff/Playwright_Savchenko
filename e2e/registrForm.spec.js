import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    const signUpBtn = page.locator('.hero-descriptor_btn.btn.btn-primary')
    //await page.pause();
    await page.goto('/');
    await signUpBtn.click();
  });

//  test('Registration with correct info', async ({ page }) => {

//     const name = page.locator('#signupName')
//     const lastName = page.locator('#signupLastName')
//     const email = page.locator('#signupEmail')
//     const password = page.locator('#signupPassword')
//     const rePassword = page.locator('#signupRepeatPassword')
//     const registerBtn = page.locator('div.modal-footer button.btn.btn-primary')

//     await name.fill('Antony');
//     await lastName.fill('Bafflast');
//     await email.fill('aqa4@mail.com');
//     await password.fill('Qwerty24');
//     await rePassword.fill('Qwerty24');
//     await registerBtn.click();

//     await page.pause();
// });

 test('Field Name', async ({ page }) => {
     const name = page.locator('#signupName');
     const lastName = page.locator('#signupLastName');
     const nameRequired = page.locator('div.invalid-feedback');
     const nameIsInvalid = page.locator('div.invalid-feedback').first();
     const wrongLengthName = page.locator('div.invalid-feedback').first();
     const borderColor = await name.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });
     
     await name.click();
     await lastName.click();
     await expect(nameRequired).toContainText('Name required'); //check empty field
     await name.fill('123a')
     await expect(nameIsInvalid).toContainText('Name is invalid'); //check wrong data
     await name.fill('a');
     await expect(wrongLengthName).toContainText('Name has to be from 2 to 20 characters long'); //check wrong length
     await name.clear();
     await name.fill('aaaaaaaaaaaaaaaaaaaaa');
     await expect(wrongLengthName).toContainText('Name has to be from 2 to 20 characters long'); //check wrong length
     await expect(borderColor).toBe('rgb(206, 212, 218)'); //check border color

 });

 test('Field Last Name', async ({ page }) => {
  const name = page.locator('#signupName');
  const lastName = page.locator('#signupLastName');
  const lastNameRequired = page.locator('div.invalid-feedback');
  const lastNameIsInvalid = page.locator('div.invalid-feedback').nth(1);
  const wrongLengthLast = page.locator('div.invalid-feedback').nth(1);
  const borderColor = await lastName.evaluate((el) => {
   return window.getComputedStyle(el).borderColor;
 });

  await lastName.click();
  await name.click();
  await expect(lastNameRequired).toContainText('Last name required'); //check empty field
  await lastName.fill('123a')
  await expect(lastNameIsInvalid).toContainText('Last name is invalid'); //check wrong data
  await lastName.fill('a');
  await expect(wrongLengthLast).toContainText('Last name has to be from 2 to 20 characters long'); //check wrong length
  await lastName.clear();
  await lastName.fill('aaaaaaaaaaaaaaaaaaaaa');
  await expect(wrongLengthLast).toContainText('Last name has to be from 2 to 20 characters long'); //check wrong length
  await expect(borderColor).toBe('rgb(206, 212, 218)'); //check border color
    
 });

test('Field Email', async ({ page }) => {
  const name = page.locator('#signupName');
  const email = page.locator('#signupEmail')
  const emailRequired = page.locator('div.invalid-feedback');
  const emailIncorrect = page.locator('div.invalid-feedback').nth(1);
  const borderColor = await email.evaluate((el) => {
    return window.getComputedStyle(el).borderColor;
  });

  await email.click();
  await name.click();
  await expect(emailRequired).toContainText('Email required')
  await email.fill('111mail.com');
  await expect(emailIncorrect).toContainText('Email is incorrect')
  await expect(borderColor).toBe('rgb(206, 212, 218)');
    
});

test('Field Password', async ({ page }) => {
  const name = page.locator('#signupName');
  const password = page.locator('#signupPassword')
  const passwordRequired = page.locator('div.invalid-feedback');
  const wrongData = page.locator('div.invalid-feedback').nth(1);
  const borderColor = await password.evaluate((el) => {
         return window.getComputedStyle(el).borderColor;
       });
  await password.click();
  await name.click();
  await expect(passwordRequired).toContainText('Password required')
  await password.fill('Qwer12')
  await expect(wrongData).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await password.clear();
  await password.fill('Qwerty1234567890');
  await expect(wrongData).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await password.clear();
  await password.fill('12345678');
  await expect(wrongData).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(borderColor).toBe('rgb(206, 212, 218)');

});

test('Field Re-enter Password', async ({ page }) => {
  const name = page.locator('#signupName');
  const password = page.locator('#signupPassword')
  const rePassword = page.locator('#signupRepeatPassword')
  const rePasswordRequired = page.locator('div.invalid-feedback');
  const wrongData = page.locator('div.invalid-feedback').nth(1);
  const passDoNotMatch = page.locator('div.invalid-feedback').nth(1);
  const borderColor = await rePassword.evaluate((el) => {
         return window.getComputedStyle(el).borderColor;
       });
  await rePassword.click();
  await name.click();
  await expect(rePasswordRequired).toContainText('Re-enter password required')
  await rePassword.fill('Qwer12')
  await expect(wrongData).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await rePassword.clear();
  await rePassword.fill('Qwerty1234567890');
  await expect(wrongData).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await rePassword.clear();
  await rePassword.fill('12345678');
  await expect(wrongData).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(borderColor).toBe('rgb(206, 212, 218)');
  await rePassword.clear();
  await password.fill('Qwerty24');
  await rePassword.fill('Qwerty23');
  await expect(passDoNotMatch).toContainText('Passwords do not match');

    
});

 test('Button Register', async ({ page }) => {
      const name = page.locator('#signupName')
      const lastName = page.locator('#signupLastName')
      const email = page.locator('#signupEmail')
      const password = page.locator('#signupPassword')
      const rePassword = page.locator('#signupRepeatPassword')
      const registerBtn = page.locator('div.modal-footer button.btn.btn-primary')

      ////////Correct data////////////////
      await name.fill('Antony');
      await expect(registerBtn).toBeDisabled();
      await lastName.fill('Baffqwr');
      await expect(registerBtn).toBeDisabled();
      await email.fill('123@mail.com')
      await expect(registerBtn).toBeDisabled();
      await password.fill('Qwerty24');
      await expect(registerBtn).toBeDisabled();
      await rePassword.fill('Qwerty24');
      await expect(registerBtn).toBeEnabled();
      //////Incorrect data/////////////////
      await name.fill('123');
      await expect(registerBtn).toBeDisabled();
      await lastName.fill('456');
      await expect(registerBtn).toBeDisabled();
      await email.fill('123mail.com')
      await expect(registerBtn).toBeDisabled();
      await password.fill('Qwerty');
      await expect(registerBtn).toBeDisabled();
      await rePassword.fill('Qwer');
      await expect(registerBtn).toBeDisabled();
    
 })