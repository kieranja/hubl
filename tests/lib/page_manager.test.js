import PageManager from '../../src/lib/page_manager.js';
import configure from '../../src/tags/index.js';
import json from '../fixture/pages.json';
const d = new Date();
const pageManagerInstance = new PageManager(json);

describe(`Page manager`, () => {

  it(`It correctly sets the active page as the homepage`, () => {
    const page = pageManagerInstance.setActivePageByPath('/');
    const activeId = pageManagerInstance.getActivePageId();
    expect(page.content_id).toBe(1);
    expect(activeId).toBe(1);
  });

  it(`It subsequently sets another page as the active page`, () => {
    const page = pageManagerInstance.setActivePageByPath('/test');
    const activeId = pageManagerInstance.getActivePageId();
    expect(page.content_id).toBe(2);
    expect(activeId).toBe(2);
  });

});