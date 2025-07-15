import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.setViewportSize({
    width:375,
    height:667,
  })
  test.setTimeout(120000)
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible({timeout: 30000});
  
});