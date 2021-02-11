function register(env) {
  env.addGlobal("content_by_ids", handler);
}
    
function handler(ids) {


}
  
    
export {
  handler,
  register as default
};
  