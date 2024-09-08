import {test, expect} from '@playwright/test';
import SignUpForm from '../src/page-object/components/forms/SignUpForm';
import SIGNUP_FORM_ERRORS from '../src/utils/constans';


test.describe(('Form Registration'), () => {
  require('dotenv').config();
  let signUpForm;

  test.beforeEach(async ({ page }) => {
    signUpForm = new SignUpForm(page);
    const signUpBtn = page.locator('.hero-descriptor_btn.btn.btn-primary')
    const baseUrl = process.env.BASE_URL;
    //await page.pause();
    await page.goto(baseUrl);
    await signUpBtn.click();

  })

  test('Field Name', async ({ page }) => {

    const name = page.locator('#signupName')
    const borderColor = await name.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });
    
    await signUpForm.focusField('name');
    await signUpForm.blurField('name');
    await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_EMPTY_NAME_ERROR)).toBeVisible(); //check empty field
    await signUpForm.enterName('123a');
    await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_NAME_ERROR)).toBeVisible(); //check wrong data
    await signUpForm.enterName('a');
    await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_LENGTH_NAME_ERROR)).toBeVisible(); //check wrong length
    await name.clear();
    await signUpForm.enterName('aaaaaaaaaaaaaaaaaaaaa');
    await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_LENGTH_NAME_ERROR)).toBeVisible(); //check wrong length
    await expect(borderColor).toBe('rgb(206, 212, 218)'); //check border color

 });

  test('Field Last Name', async ({ page }) => {
    const lastName = page.locator('#signupLastName');
    const borderColor = await lastName.evaluate((el) => {
    return window.getComputedStyle(el).borderColor;
 });

  await signUpForm.focusField('lastName');
  await signUpForm.blurField('lastName');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_EMPTY_LASTNAME_ERROR)).toBeVisible();
  await signUpForm.enterLastName('123a')
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_LASTNAME_ERROR)).toBeVisible();
  await signUpForm.enterLastName('a');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_LENGTH_LASTNAME_ERROR)).toBeVisible(); //check wrong length
  await lastName.clear();
  await signUpForm.enterLastName('aaaaaaaaaaaaaaaaaaaaa');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_LENGTH_LASTNAME_ERROR)).toBeVisible(); //check wrong length
  await expect(borderColor).toBe('rgb(206, 212, 218)'); //check border color
    
 });

  test('Field Email', async ({ page }) => {
  const email = page.locator('#signupEmail');
  const borderColor = await email.evaluate((el) => {
    return window.getComputedStyle(el).borderColor;
  });

  await signUpForm.focusField('email');
  await signUpForm.blurField('email');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_EMPTY_EMAIL_ERROR)).toBeVisible();
  await signUpForm.enterEmail('111mail.com');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_EMAIL_ERROR)).toBeVisible();
  await expect(borderColor).toBe('rgb(206, 212, 218)');
    
});

  test('Field Password', async ({ page }) => {
  const password = page.locator('#signupPassword')
  const borderColor = await password.evaluate((el) => {
         return window.getComputedStyle(el).borderColor;
       });

  await signUpForm.focusField('password');
  await signUpForm.blurField('password');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_EMPTY_PASSWORD_ERROR)).toBeVisible();
  await signUpForm.enterPassword('Qwer12')
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_PASSSWORD_ERROR)).toBeVisible();
  await password.clear();
  await signUpForm.enterPassword('Qwerty1234567890');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_PASSSWORD_ERROR)).toBeVisible();
  await password.clear();
  await signUpForm.enterPassword('12345678');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_PASSSWORD_ERROR)).toBeVisible();
  await expect(borderColor).toBe('rgb(206, 212, 218)');

});

  test('Field Re-enter Password', async ({ page }) => {
  const rePassword = page.locator('#signupRepeatPassword')
  const borderColor = await rePassword.evaluate((el) => {
         return window.getComputedStyle(el).borderColor;
       });

  await signUpForm.focusField('rePassword');
  await signUpForm.blurField('rePassword');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_EMPTY_REPASSWORD_ERROR)).toBeVisible();
  await signUpForm.enterRePassword('Qwer12')
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_REPASSSWORD_ERROR)).toBeVisible();
  await rePassword.clear();
  await signUpForm.enterRePassword('Qwerty1234567890');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_REPASSSWORD_ERROR)).toBeVisible();
  await rePassword.clear();
  await signUpForm.enterRePassword('12345678');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_WRONG_REPASSSWORD_ERROR)).toBeVisible();
  await expect(borderColor).toBe('rgb(206, 212, 218)');
  await rePassword.clear();
  await signUpForm.enterRePassword('Qwerty24');
  await signUpForm.enterRePassword('Qwerty23');
  await expect(page.getByText(SIGNUP_FORM_ERRORS.SIGNUP_NOT_MATCH_REPASSWORD_ERROR)).toBeVisible();

    
});

  test('Button Register', async ({ page }) => {
      const registerBtn = page.locator('div.modal-footer button.btn.btn-primary')
      ////////Correct data////////////////
      
      await signUpForm.fillInRegisterForm('Antony', 'Baffqwr', '123456@mail.com', 'Qwerty24', 'Qwerty24')
      await expect(registerBtn).toBeEnabled();

      //////Incorrect data/////////////////
      await signUpForm.fillInRegisterForm('Antony', 'Baffqwr', '123456mail.com', 'Qwerty24', 'Qwerty24')
      await expect(registerBtn).toBeDisabled();
    
 })

})