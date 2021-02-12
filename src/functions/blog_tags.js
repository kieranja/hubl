function register(env) {
  env.addGlobal("blog_tags", handler);
}
    
function handler(selected_blog, limit) {

  return [{ slug: 'slugfortag', title: 'tag titel'}]
}
  
    
export {
  handler,
  register as default
};
  