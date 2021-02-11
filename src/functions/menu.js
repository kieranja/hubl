function register(env) {
  env.addGlobal("menu", handler);
}
    
function handler(menu_id_or_menu_name, root_type, root_key) {


}
  
    
module.exports = {
  handler,
  register
};
  