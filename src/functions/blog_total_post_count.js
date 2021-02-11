function register(env) {
  env.addGlobal("blog_total_post_count", handler);
}
    
function handler(selected_blog) {


}
  
    
export {
  handler,
  register as default
};
  