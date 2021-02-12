function register(env) {
  env.addGlobal("blog_recent_posts", handler);
}
    
function handler(selected_blog, limit) {

  return [{
    title: 'title 1'
  }]
}
  
    
export {
  handler,
  register as default
};
  