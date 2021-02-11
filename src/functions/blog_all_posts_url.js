function register(env) {
  env.addGlobal("blog_all_posts_url", handler);
}
    
function handler(selected_blog) {


}
  
    
module.exports = {
  handler,
  register
};
  