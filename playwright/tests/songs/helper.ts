import { Page } from "playwright";
import { HomePage } from "../page_objects/home_page";
import { AddSongPage } from "../page_objects/add_song_page";
import { EditSongPage } from "../page_objects/edit_song_page";

export async function addSong(page: Page, title: string, artist: string, genre: string, album: string, albumImg: string, youtubeUrl: string, tab: string, lyrics: string) {
    var homePage: HomePage = new HomePage(page);
    await homePage.addButton.click();
    var addSongPage: AddSongPage = new AddSongPage(page);
    await addSongPage.fillSong(
        title, artist, genre, album, albumImg, youtubeUrl, tab, lyrics
    );

    await addSongPage.createSongButton.click();
}

export async function editSong(page: Page, title: string, artist: string, genre: string, album: string, albumImg: string, youtubeUrl: string, tab: string, lyrics: string) {
    var homePage: HomePage = new HomePage(page);
    await homePage.addButton.click();
    var editSongPage: EditSongPage = new EditSongPage(page);
    await editSongPage.editSong(
        title, artist, genre, album, albumImg, youtubeUrl, tab, lyrics
    );

    await editSongPage.editSongButton.click();
}