import CtaManager from '../../src/lib/cta_manager.js';
import HubDbManager from '../../src/lib/hubdb_manager.js';
import MenuManager from '../../src/lib/menu_manager.js';

const d = new Date();
const menuManager = new MenuManager([
  { 
    id: 123,
    label: 'Menu 1',
    url: 'http://google.com',
    pageId: 1,
    contentGroupId: null,
    parentNode: {},
    children: [
      { 
        label: 'Menu 1.1',
        url: 'http://google.com',
        pageId: 1,
        contentGroupId: null,
        parentNode: {},
        activeBranch: null,
        activeNode: null,
        level: 2,
        pageTitle: 'Page title 1.1',
        slug: 'page-title-1-1',
        linkTarget: '_self'
      }
    ],
    activeBranch: null,
    activeNode: null,
    level: 1,
    pageTitle: 'Page title',
    slug: 'page-title',
    linkTarget: '_self'
  }
]);


describe(`CTA Manager`, () => {

  it(`It renders HTML`, () => {
    const html = menuManager.getAll();
    expect(html).toMatchObject([
      {
        id: 123, 
        label: 'Menu 1',
        url: 'http://google.com',
        pageId: 1,
        contentGroupId: null,
        parentNode: {},
        children: [
          { 
            label: 'Menu 1.1',
            url: 'http://google.com',
            pageId: 1,
            contentGroupId: null,
            parentNode: {},
            activeBranch: null,
            activeNode: null,
            level: 2,
            pageTitle: 'Page title 1.1',
            slug: 'page-title-1-1',
            linkTarget: '_self'
          }
        ],
        activeBranch: null,
        activeNode: null,
        level: 1,
        pageTitle: 'Page title',
        slug: 'page-title',
        linkTarget: '_self'
      }
    ]);
  });


});