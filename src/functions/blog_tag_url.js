function register(env) {
  env.addGlobal("blog_tag_url", handler);
}
    
function handler(selected_blog, tag_slug) {


}
  
    
export {
  handler,
  register as default
};
  