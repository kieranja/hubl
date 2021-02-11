function register(env) {
  env.addGlobal("page_by_id", handler);
}
    
function handler(page_id) {


}
  
    
export {
  handler,
  register as default
};
  