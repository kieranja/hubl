function register(env) {
  env.addGlobal("get_public_template_url", handler);
}
    
function handler() {


}
  
    
module.exports = {
  handler,
  register
};
  