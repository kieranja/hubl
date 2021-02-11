function register(env) {
  env.addGlobal("super", handler);
}
    
function handler() {


}
  
    
export {
  handler,
  register as default
};
  