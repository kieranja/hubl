function register(env) {
  env.addGlobal("get_public_template_url_by_id", handler);
}
    
function handler(template_id) {


}
  
    
export {
  handler,
  register as default
};
  