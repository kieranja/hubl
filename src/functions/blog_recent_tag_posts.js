function register(env) {
  env.addGlobal("blog_recent_tag_posts", handler);
}
    
function handler(selected_blog, tag_slug, limit) {

  return [{
    title: 'Post 1'
  }]
}
  
    
export {
  handler,
  register as default
};
  