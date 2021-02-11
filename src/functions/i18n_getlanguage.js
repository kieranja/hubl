function register(env) {
  env.addGlobal("i18n_getlanguage", handler);
}
    
function handler() {


}
  
    
export {
  handler,
  register as default
};
  