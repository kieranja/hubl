
function register(env) {
  env.addGlobal("menu", (menu_id_or_menu_name, root_type, root_key) => handler(env, menu_id_or_menu_name, root_type, root_key));
}
    
function handler(env, menu_id_or_menu_name, root_type, root_key) { 

  const menus = env.getMenuManager();
  if (isNaN(menu_id_or_menu_name)) {
    return menus.getByName(menu_id_or_menu_name);
  }
  return menus.getById(menu_id_or_menu_name);
}
    
export {
  handler,
  register as default
};
  