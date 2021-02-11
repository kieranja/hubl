function register(env) {
  env.addGlobal("include_css", handler);
}
    
function handler(path) {


}
  
    
export {
  handler,
  register as default
};
  