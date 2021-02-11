function register(env) {
  env.addGlobal("get_public_template_url", handler);
}
    
function handler() {


}
  
    
export {
  handler,
  register as default
};
  