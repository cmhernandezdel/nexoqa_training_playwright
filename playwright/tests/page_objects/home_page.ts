import { Locator, Page } from "playwright";

// esto es para no tener que estar haciendo los selectores mezclados con los tests
// solo vamos añadiendo los elementos que necesitemos, no toda la página del tirón
export class HomePage {
    // aqui ponemos los elementos de la página (cada uno es un Locator)
    // con las dev-tools del navegador buscamos el selector para identificarlos
    // la page la tenemos que tener siempre
    readonly page: Page
    readonly addButton: Locator
    readonly songs: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = this.page.locator('a[href="#/songs/create"]'); //css selector
        this.songs = this.page.locator('div.song');
        this.searchInput = this.page.locator('input');
    }
}