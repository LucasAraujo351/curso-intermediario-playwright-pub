import test, { expect } from "@playwright/test";

test('Ações Básicas 1', async({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/forgot_password');//navegar ate apagina
    const emailInput = page.locator('input#email');//cria uma contante para o ip email
    await emailInput.fill('emailqualquer@gmail.com');//excrever um email qualquer
    await emailInput.fill('');//deixa em branco
    await emailInput.pressSequentially('123456');//copiar a função do teclado
    await expect(emailInput).toHaveValue('123456');//verificar se o valor coresponde ao colocado

    //(page.click)=click em algo
    await page.goto('https://the-internet.herokuapp.com/')
    const checkbloxesLink = page.locator('a[href="/checkboxes"]');
    await checkbloxesLink.click();

    //achar as checkboxes e marcar
    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    await checkbox1.check();
//(nth)=server pra selecianar(ou localizar) uma elemento quanto a mas de 1.
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    await checkbox2.uncheck();

    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox1).toBeChecked();
})

test('Ação Básicas 2', async({ page }) =>{
    //dropdown=selecinando opções
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select#dropdown');
    await dropdown.selectOption('1');//faz a seleção pelo value
    await expect(dropdown).toHaveValue('1');
    await dropdown.selectOption({ label: 'Option 2'});//faz a seleção pelo label(o que esta escrito).
    await expect(dropdown).toHaveValue('2');

    //(hover)=fazer o movimento de passa o malse por cima
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const img1 = page.locator('div.figure').nth(0);//localisando um elemento
    const img2 = page.locator('div.figure').nth(1);
    const img3 = page.locator('div.figure').nth(2);

    const imgInfo1 = img1.locator('.figcaption');//localisando um elemento dentro de outro elemento
    const imgInfo2 = img2.locator('.figcaption');
    const imgInfo3 = img3.locator('.figcaption');

    await img1.hover();

    await expect(imgInfo1).toBeVisible();
    await expect(imgInfo2).not.toBeVisible();
    await expect(imgInfo3).not.toBeVisible();

    
    await img2.hover();

    await expect(imgInfo1).not.toBeVisible();
    await expect(imgInfo2).toBeVisible();
    await expect(imgInfo3).not.toBeVisible();

    await imgInfo2.getByRole('link').click(); //para clicar no elemento
    //( await imgInfo2.locator('a'); ) caso to tenha um link

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/users/2');
})