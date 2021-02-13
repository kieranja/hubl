export default class MenuManager {
  constructor(menus) {
    this.menus = menus;
    this.menusById = [];
    this.init();
  }

  init() {
    for (const menu of this.menus) {
      this.menusById[menu.id] = menu;
    }
  }

  getByName(name) {
    return this.menus.find(item => item.slug === name);
  }

  getAll() {
    return this.menus;
  }

  getById(id) {
    return this.menusById[id];
  }

}