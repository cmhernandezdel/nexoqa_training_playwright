import {test, expect} from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { addSong } from './helper';

test('Add new song', async ({page}) => {
    await page.goto('http://172.18.10.46:8080/');
    var homePage : HomePage = new HomePage(page);
    await addSong(
        page,
        "WANDA", 
        "Quevedo", 
        "Urbana", 
        "DONDE QUIERO ESTAR", 
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg", 
        "https://www.youtube.com/watch?v=k740hisrk_k", 
        "TAB",
        "Te los aprendes :)"
        );

    await expect(homePage.songs.last().locator('song-title')) // habria que hacer un componente mas pequeño para cada song
        .toContainText('WANDA');
});