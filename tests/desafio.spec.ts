// https://the-internet.herokuapp.com/
import { expect, test } from '@playwright/test';
// https://www.saucedemo.com/v1/index.html
// 1- Login com sucesso
// Usar usuário standard_user
// - Verificar URL Pagina 
// - Verificar pelo menos 1 item da pagina final (visible)
test('Desafio 1', async({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    const usuario = page.locator('input#user-name');
    const senha = page.locator('input#password');
    const bottonLogin = page.locator('input#login-button.btn_action');
    await usuario.pressSequentially('standard_user');
    await senha.pressSequentially('secret_sauce');
    await bottonLogin.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    const textProduct = page.locator('div.product_label');
    await expect(textProduct).toHaveText('Products');
})


// 2- Login com usuario locked
// Usar usuário locked_out_user
// - Verificar Mensagem de erro
test('Desafio 2', async({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    const usuario = page.locator('input#user-name');
    const senha = page.locator('input#password');
    const bottonLogin = page.locator('input#login-button.btn_action');
    await usuario.fill('locked_out_user');
    await senha.fill('secret_sauce');
    await bottonLogin.click();
    const errorLebel = page.locator('[data-test="error"]');
    await expect(errorLebel).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    await expect(errorLebel).toBeVisible();
})

// 3- Login senha errada
// - Verificar Mensagem de erro
test('Desafio 3', async({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    const usuario = page.locator('input#user-name');
    const senha = page.locator('input#password');
    const bottonLogin = page.locator('input#login-button.btn_action');
    await usuario.fill('test');
    await senha.fill('secret_sauce');
    await bottonLogin.click();
    const errorLebel = page.locator('[data-test="error"]');
    await expect(errorLebel).toHaveText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorLebel).toBeVisible();
})