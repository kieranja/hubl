function register(env) {
  env.addGlobal("blog_recent_tag_posts", handler);
}
    
function handler(selected_blog, tag_slug, limit) {


}
  
    
export {
  handler,
  register as default
};
  