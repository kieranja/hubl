function register(env) {
  env.addGlobal("blog_topics", handler);
}
    
function handler(selected_blog, limit) {


}
  
    
export {
  handler,
  register as default
};
  