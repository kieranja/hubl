function register(env) {
  env.addGlobal("menu", handler);
}
    
function handler(menu_id_or_menu_name, root_type, root_key) {

  return {
    children: [
      {label: 'Menu item 1', url: '/', pageId: 1, contentGroupId: 1, children: [], level: 0 }
    ]
  }

}
  
    
export {
  handler,
  register as default
};
  