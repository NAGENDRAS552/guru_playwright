import { test, expect } from '@playwright/test';

test('verify admin can add employees', async ({ page }) =>{
    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
    await page.locator("input[name='firstName']").fill("Nagendra")
    await page.locator("input[name='lastName']").fill("s")
    const r = Math.floor(1000 + Math.random() * 9000).toString();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("4"+r)
    await page.locator("button[type='submit']").click()
    await expect(page.locator("a.orangehrm-tabs-item.--active")).toBeVisible()
     
})