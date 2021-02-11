function register(env) {
  env.addGlobal("i18n_getmessage", handler);
}
    
function handler(message_name, substitutions) {


}
  
    
module.exports = {
  handler,
  register
};
  