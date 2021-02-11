function register(env) {
  env.addGlobal("content_by_id", handler);
}
    
function handler(id) {


}
  
    
export {
  handler,
  register as default
};
  