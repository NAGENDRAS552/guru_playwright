import { test, expect } from '@playwright/test';

test('verify admin can add jodtitles', async ({ page }) => {
    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("//span[text()='Admin']").click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("(//a[@role='menuitem'])[1]").click()
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    let r = (Math.random() + 1).toString(36).substring(7)
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Software testing engineer "+r)
    await page.locator("textarea[placeholder='Type description here']").fill("To make sure the quality of the product")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
})