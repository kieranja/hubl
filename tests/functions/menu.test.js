
import { configure, renderString } from '../../src/index';
import MenuManager from '../../src/lib/menu_manager';
import json from '../fixture/menu.json';

describe(`Returns the the nested link structure of an advanced menu.`, () => {
    beforeEach(() => {
        configure(null, null, new MenuManager(json));
    })

    it(`unnamed case 0`, () => {
        const html = renderString(`{% set menu = menu(123) %}{{ menu.label }},{{ menu.url }}`);
        expect(html).toBe('Menu 1,https://google.com')
    });
    it(`unnamed case 1`, () => {
        const html = renderString(`{% set menu = menu(123, 'breadcrumb') %}`);
        
    });
    it(`unnamed case 2`, () => {
        const html = renderString(`{% set menu = menu(123, 'page_name', 'Test Page') %}`);
        
    });
});