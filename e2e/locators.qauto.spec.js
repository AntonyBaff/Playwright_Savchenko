import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('/');

    let signInBtn = page.locator('.header_signin');
    console.log(signInBtn);
    await page.reload();
    console.log(signInBtn);
    expect(await signInBtn.isVisible()).toBeTruthy();

});