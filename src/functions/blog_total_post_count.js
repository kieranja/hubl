function register(env) {
  env.addGlobal("blog_total_post_count", handler);
}
    
function handler(selected_blog) {
  return 2;
}
  
    
export {
  handler,
  register as default
};
  