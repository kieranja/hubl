function register(env) {
  env.addGlobal("facebook_messenger_link", handler);
}
    
function handler() {


}
  
    
export {
  handler,
  register as default
};
  