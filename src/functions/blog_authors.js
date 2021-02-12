function register(env) {
  env.addGlobal("blog_authors", handler);
}
    
function handler(selected_blog, limit) {
    return ['Author 1', 'Author 2', 'Author 3'];
}
  
    
export {
  handler,
  register as default
};
  