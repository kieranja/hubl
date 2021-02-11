function register(env) {
  env.addGlobal("i18n_getlanguage", handler);
}
    
function handler() {


}
  
    
module.exports = {
  handler,
  register
};
  