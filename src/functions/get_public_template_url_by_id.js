function register(env) {
  env.addGlobal("get_public_template_url_by_id", handler);
}
    
function handler(template_id) {


}
  
    
module.exports = {
  handler,
  register
};
  