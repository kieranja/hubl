function register(env) {
  env.addGlobal("blog_author_url", handler);
}
    
function handler(selected_blog, author_slug) {
  return `<a href="http://blog.hubspot.com/marketing/author/brian-halligan">Brian Halligan</a>`;
}
  
    
export {
  handler,
  register as default
};
  