function register(env) {
  env.addGlobal("require_css", handler);
}
    
function handler(url, render_options) {


}
  
    
module.exports = {
  handler,
  register
};
  