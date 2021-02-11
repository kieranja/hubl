function register(env) {
  env.addGlobal("blog_recent_author_posts", handler);
}
    
function handler(selected_blog, author_slug, limit) {


}
  
    
export {
  handler,
  register as default
};
  