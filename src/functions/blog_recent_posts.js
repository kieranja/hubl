function register(env) {
  env.addGlobal("blog_recent_posts", handler);
}
    
function handler(selected_blog, limit) {


}
  
    
module.exports = {
  handler,
  register
};
  