function register(env) {
  env.addGlobal("blog_by_id", handler);
}
    
function handler(id) {


}
  
    
export {
  handler,
  register as default
};
  