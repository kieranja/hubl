function register(env) {
  env.addGlobal("include_javascript", handler);
}
    
function handler(path) {


}
  
    
export {
  handler,
  register as default
};
  