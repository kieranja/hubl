function register(env) {
  env.addGlobal("set_response_code", handler);
}
    
function handler(code) {

  // Doesn't need to do anything.

}
  
    
export {
  handler,
  register as default
};
  