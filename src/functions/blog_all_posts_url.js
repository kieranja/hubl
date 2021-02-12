function register(env) {
  env.addGlobal("blog_all_posts_url", handler);
}
    
function handler(selected_blog) {
  return `<a href="http://www.hubspot.com/marketing/all">All Marketing blog posts</a>`;
}
  
    
export {
  handler,
  register as default
};
  