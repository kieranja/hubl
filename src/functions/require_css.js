function register(env) {
  env.addGlobal("require_css", handler);
}
    
function handler(url, render_options) {


}
  
    
export {
  handler,
  register as default
};
  