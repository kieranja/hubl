function register(env) {
  env.addGlobal("require_js", handler);
}
    
function handler(url, render_options) {


}
  
    
module.exports = {
  handler,
  register
};
  