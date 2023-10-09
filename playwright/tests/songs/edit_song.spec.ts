import {test, expect} from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { addSong } from './helper';
import { SongViewPage } from '../page_objects/song_view_page';
import { EditSongPage } from '../page_objects/edit_song_page';

test('Edit new song', async ({page}) => {
    await page.goto('http://172.18.10.46:8080/');
    await addSong(
        page,
        "WANDA", 
        "Quevedo", 
        "Trap", 
        "DONDE QUIERO ESTAR", 
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg", 
        "https://www.youtube.com/watch?v=k740hisrk_k", 
        "TAB",
        "Te los aprendes :)"
        );

        var homePage : HomePage = new HomePage(page);
        await homePage.songs.last().locator('a.btn').click();

        var songViewPage: SongViewPage = new SongViewPage(page);
        await songViewPage.editButton.click();

        var editSongPage: EditSongPage = new EditSongPage(page);
        await editSongPage.editSong("WANDA NARA", 
        "Quevedo", 
        "Trap", 
        "DONDE QUIERO ESTAR", 
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg", 
        "https://www.youtube.com/watch?v=k740hisrk_k", 
        "TAB",
        "Es usted o nadie oyó");

        await editSongPage.editSongButton.click();
        await expect(songViewPage.title).toContainText('WANDA NARA');
});