function register(env) {
  env.addGlobal("blog_popular_posts", handler);
}
    
function handler(selected_blog, limit, tag_slug, time_frame) {


}
  
    
export {
  handler,
  register as default
};
  