import { Locator, Page } from "playwright";

export class SongViewPage {
    readonly page: Page;
    readonly editButton: Locator;
    readonly title: Locator; // podriamos validar todos los campos pero con esto para el ejemplo nos sirve

    constructor(page: Page) {
        this.page = page;
        this.editButton = this.page.locator('div.container a.btn');
        this.title = this.page.locator('.song-title');
    }
}