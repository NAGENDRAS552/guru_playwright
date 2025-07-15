import { test, expect } from '@playwright/test';

import logindata from "../testdata/login.json"

test('verify the login with valid credentials', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill(logindata.username)
    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.close()
})

test('verify the login with invalid username and valid password ', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill(logindata.wrongusername)
    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})

test('verify the login with valid username and invalid password ', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill(logindata.username)
    await page.locator("//input[@placeholder='Password']").fill(logindata.wrongpassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})

test('verify the login with invalid username and invalid password ', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill(logindata.wrongusername)
    await page.locator("//input[@placeholder='Password']").fill(logindata.wrongpassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})
