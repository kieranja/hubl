function register(env) {
  env.addGlobal("blog_post_by_id", handler);
}
    
function handler(blog_post_id) {


}
  
    
module.exports = {
  handler,
  register
};
  