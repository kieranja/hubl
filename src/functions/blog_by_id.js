function register(env) {
  env.addGlobal("blog_by_id", handler);
}
    
function handler(id) {


}
  
    
module.exports = {
  handler,
  register
};
  