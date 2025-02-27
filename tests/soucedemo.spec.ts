import test, { expect } from "@playwright/test";
//(.only)=Para executar apenas esse test
//test.only('Locatizando por data-test', async({ page }) => {
test('Locatizando por data-test', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
// (fill)=metodo para prencher input
    await page.getByTestId('username').fill('matheus');
})
test('Asserts básicos', async({ page }) =>{
    await page.goto('https://www.saucedemo.com/v1/index.html')
    const loginBotton = await page.locator(' input#login-button ');
//(expect)=verificar se o valor de algo corresponde ao que você espera | (.soft)=Para continuar verificano mesmo se a verificação falhar
//(loginBotton)=variavel | (.toHaveCSS)=verifica se um elemento possui uma propriedade específica do CSS
    await expect.soft(loginBotton).toHaveCSS('background-color','rgb(226, 35, 26)');
//(toHaveAttribute)=verifica se um atributo específico esta correto.
    await expect(loginBotton).toHaveAttribute('value','LOGIN');
//(toBeVisible)=verifica se um atributo esta visivel | ('')= mensagem caso de erro 
    await expect(loginBotton, 'Botão esta vivivel').toBeVisible();
//(not)=ele inverte a propiedade
// EX:espero que o botão(variavel) não(not) esteja vivivel
    // await expect(loginBotton).not.toBeVisible();
//(toBeHidden)=Verifica se o elemento esta escondido.
    await expect(loginBotton).not.toBeHidden();
})

