function register(env) {
  env.addGlobal("blog_recent_author_posts", handler);
}
    
function handler(selected_blog, author_slug, limit) {

  return [{
    title: 'Title 1'
  }]

}
  
    
export {
  handler,
  register as default
};
  