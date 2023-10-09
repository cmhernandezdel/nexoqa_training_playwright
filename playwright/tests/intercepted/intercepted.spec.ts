import { test, expect } from '@playwright/test';

test('empty state', async ({ page }) => {
    // interceptamos la llamada al backend y hacemos que devuelva un JSON vacío
    await page.route('http://172.18.10.46:8081/songs', async (route) => {
        // para ver la llamada que estamos interceptando
        console.log('intercepted request: ', route.request().url);

        route.fulfill({
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    });

    await page.goto('http://localhost:8080');
    await expect(page.locator('div.pl-4').nth(1)).toContainText('No slot content defined.');
});

test('non empty state', async ({ page }) => {
    // interceptamos la llamada al backend y hacemos que devuelva un JSON con 2 elementos
    await page.route('http://172.18.10.46:8081/songs', async (route) => {
        // para ver la llamada que estamos interceptando
        console.log('intercepted request: ', route.request().url);

        // path: relativo a la ruta del proyecto (donde lanzamos los tests)
        route.fulfill({
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            path: './tests/data/songs2.json'
        });
    });

    await page.goto('http://localhost:8080');
    var total = await page.locator('.song').count();
    await expect(total).toBe(2);
});

test('non empty state - fetch', async ({ page }) => {
    // interceptamos la llamada al backend y hacemos que devuelva un JSON con 2 elementos
    // podemos poner '**/songs' para la de pillar todas las canciones y '**/songs/*' para las que tienen un id por detrás por ejemplo
    await page.route('http://172.18.10.46:8081/songs', async (route) => {
        // para ver la llamada que estamos interceptando
        console.log('intercepted request: ', route.request().url);

        // fetch hace que la llamada se ejecute y podemos manipular la respuesta
        var response = await route.fetch();
        var jsonResponse = await response.json();
        var deserializedResponse = JSON.parse(jsonResponse);
        var subset = <any>[];

        // devolvemos los dos primeros elementos nada más
        for (var index = 0; index < 2; index++) {
            subset[index] = deserializedResponse[index];
        }

        route.fulfill({
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subset)
        });
    });

    await page.goto('http://localhost:8080');
    var total = await page.locator('.song').count();
    await expect(total).toBe(2);
});