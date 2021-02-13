
export const TYPE_PAGE ='PAGE';
export const TYPE_BLOG ='BLOG';


export default class PageManager {
  constructor(pages) {
    this.activePage = null;
    this.pages = pages;
    this.request = {

    };
  }

  setActivePageById(id) {
    this.activePage = this.pages.find(page => page.content_id === id);
    return this.activePage;
  }
  
  setActivePageByPath(path) {
    this.activePage = this.pages.find(({ content }) => {

      // Homepage.
      if (path === '/' && content.absolute_url.substr(-1) === '/') {
        return true;
      }

      return path === content.absolute_url;
    });

    return this.activePage;
  }

  getThemeGlobals() {
    return { ...this.activePage, ...this.request };
  }

  getActivePageId() {
    return this.activePage.content_id;
  }

}