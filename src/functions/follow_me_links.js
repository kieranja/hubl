function register(env) {
  env.addGlobal("follow_me_links", handler);
}
    
function handler() {


}
  
    
export {
  handler,
  register as default
};
  