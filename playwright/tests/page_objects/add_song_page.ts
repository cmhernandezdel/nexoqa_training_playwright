import { Locator, Page } from "playwright";

export class AddSongPage {
    readonly page: Page;
    readonly title: Locator;
    readonly artist: Locator;
    readonly genre: Locator;
    readonly album: Locator;
    readonly albumImgUrl: Locator;
    readonly youtubeUrl: Locator;
    readonly tab: Locator;
    readonly lyrics: Locator;

    readonly createSongButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('#sngTitle');
        this.artist = this.page.locator('#sngArtist');
        this.genre = this.page.locator('#sngGenre');
        this.album = this.page.locator('#sngAlbum');
        this.albumImgUrl = this.page.locator('#sngAlbumImg');
        this.youtubeUrl = this.page.locator('#sngYoutube');
        this.tab = this.page.locator('#sngTab');
        this.lyrics = this.page.locator('#sngLyrics');
        this.createSongButton = this.page.locator('#sngBtn');
    }

    // aqui tambien se hacen las funciones para rellenar campos
    async fillSong(title: string, artist: string, genre: string, album: string, albumImgUrl: string, youtubeUrl: string, tab: string, lyrics: string) {
        await this.title.fill(title);
        await this.artist.fill(artist);
        await this.genre.fill(genre);
        await this.album.fill(album);
        await this.albumImgUrl.fill(albumImgUrl);
        await this.youtubeUrl.fill(youtubeUrl);
        await this.tab.fill(tab);
        await this.lyrics.fill(lyrics);
    }
}