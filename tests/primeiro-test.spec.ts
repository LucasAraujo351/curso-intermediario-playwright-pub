import test from "@playwright/test";
//('Visitando pagina do playwright')=titulo do test | (async)= declara que é um função assíncrona | (page)=É uma fixture
test('Visitando pagina do playwright', async ({ page }) =>{
// (await)=funções assíncronas.Ele espera que a função seja finalizada para que possa ir para a proxima 
// (page)=Você puxa a fixture | (.goto)Entra na pagina | ('')A pagina que você quer entra.
    await page.goto('http://playwright.dev');
    await page.locator('.getStarted_Sjon').click();
    await page.getByText('Get started').click();
    await page.goto('http://playwright.dev');
//(const)=constante.Coloca-se para o valor da variavel não se altere | (text)=E uma variavel que você esta declarando. | (textContent)=É um metodo serve para retornar o elemento que esta sendo buscado.
    const text = await page.getByText('enables reliable end-to-end testing for modern web apps.').textContent(); //Ele localiza apena um elemento se for mas ele da erro.
//(consele)=exiba a mensagens e a informação| (log)= imprima uma mensagem | (text)=Argumento(variavel) que esta sendo analisada
    console.log(text)


})