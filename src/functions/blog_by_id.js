function register(env) {
  env.addGlobal("blog_by_id", handler);
}
    
function handler(id) {
  return {
    absolute_url: 'http://blog.com',
    html_title: 'This is a blog title'
  }
}
  
    
export {
  handler,
  register as default
};
  